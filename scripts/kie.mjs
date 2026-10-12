// Local asset generator for Kie.ai — runs on this machine only, never shipped.
// The key is read from .env and never printed.
// Usage:
//   node scripts/kie.mjs credit
//   node scripts/kie.mjs task <json-file>            -> creates task, polls, downloads results into tmp/kie/
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

process.loadEnvFile(".env");
const KEY = process.env.KIE_API_KEY;
if (!KEY) throw new Error("KIE_API_KEY missing in .env");

const API = "https://api.kie.ai/api/v1";
const headers = { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" };

async function kie(p, body) {
  const res = await fetch(API + p, {
    method: body ? "POST" : "GET",
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  // Kie returns HTTP 200 even on errors; the real status is json.code.
  if (json.code !== 200) throw new Error(`kie ${json.code}: ${json.msg}`);
  return json.data;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function run(file) {
  const body = JSON.parse(await readFile(file, "utf8"));
  const { taskId } = await kie("/jobs/createTask", body);
  console.log("task", taskId);
  let d;
  for (let i = 0; i < 120; i++) {
    await sleep(i < 5 ? 3000 : 8000);
    d = await kie(`/jobs/recordInfo?taskId=${taskId}`);
    process.stdout.write(`${d.state} `);
    if (d.state === "success" || d.state === "fail") break;
  }
  console.log();
  if (d.state !== "success") throw new Error(`task ${d.state}: ${d.failCode} ${d.failMsg}`);

  const out = path.join("tmp", "kie", path.basename(file, ".json"));
  await mkdir(out, { recursive: true });
  await writeFile(path.join(out, "record.json"), JSON.stringify(d, null, 2));

  const urls = [];
  const tracks = d.response?.data;
  if (Array.isArray(tracks)) {
    tracks.forEach((t, i) => urls.push([`track-${i}.mp3`, t.audio_url, t.duration, t.title]));
  } else {
    JSON.parse(d.resultJson).resultUrls.forEach((u, i) => urls.push([`image-${i}${path.extname(new URL(u).pathname) || ".png"}`, u]));
  }
  for (const [name, url, ...meta] of urls) {
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    await writeFile(path.join(out, name), buf);
    console.log("saved", path.join(out, name), buf.length, ...meta);
  }
  console.log("credits used", d.creditsConsumed);
}

const [cmd, arg] = process.argv.slice(2);
if (cmd === "credit") console.log("credits", await kie("/chat/credit"));
else if (cmd === "task") await run(arg);
else console.log("usage: credit | task <json-file>");
