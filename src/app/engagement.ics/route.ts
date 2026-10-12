import { CAL_END, CAL_START, calDetails, calTitle } from "@/content/calendar";
import { venue } from "@/content/invitation";

// static export (GitHub Pages) writes this out as a plain .ics file
export const dynamic = "force-static";

// RFC 5545: CRLF line endings, TEXT escaping, lines folded at 75 octets.
const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

function fold(line: string) {
  const out: string[] = [];
  let cur = "";
  let bytes = 0;
  for (const ch of line) {
    const b = Buffer.byteLength(ch);
    if (bytes + b > (out.length ? 74 : 75)) {
      out.push(cur);
      cur = "";
      bytes = 0;
    }
    cur += ch;
    bytes += b;
  }
  out.push(cur);
  return out.join("\r\n ");
}

const lines = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Sai Girishma & Ravi//Engagement Invitation//EN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  "BEGIN:VEVENT",
  "UID:sai-girishma-ravi-engagement-20261120",
  "DTSTAMP:20261011T000000Z",
  `DTSTART:${CAL_START}`,
  `DTEND:${CAL_END}`,
  `SUMMARY:${esc(calTitle)}`,
  `LOCATION:${esc(venue.full)}`,
  `DESCRIPTION:${esc(calDetails)}`,
  "BEGIN:VALARM",
  "ACTION:DISPLAY",
  "DESCRIPTION:Engagement tomorrow at 09:34 AM",
  "TRIGGER:-PT1D",
  "END:VALARM",
  "BEGIN:VALARM",
  "ACTION:DISPLAY",
  "DESCRIPTION:Muhurtham in 2 hours",
  "TRIGGER:-PT2H",
  "END:VALARM",
  "END:VEVENT",
  "END:VCALENDAR",
];

export function GET() {
  return new Response(lines.map(fold).join("\r\n") + "\r\n", {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="sai-girishma-ravi-engagement.ics"',
    },
  });
}
