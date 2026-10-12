import type { NextConfig } from "next";

// GitHub Pages serves a static export from /<repo>/. The Pages workflow sets PAGES_BASE_PATH;
// locally (and on any Node host) the site builds as usual.
const pagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  ...(pagesBasePath !== undefined && {
    output: "export",
    basePath: pagesBasePath,
    // no image server on Pages: scripts/pages-images.mjs writes the widths this loader asks for
    images: { loader: "custom", loaderFile: "./src/lib/pages-image-loader.ts" },
  }),
  // for plain files in public/ (music, calendar), which basePath does not rewrite
  env: { NEXT_PUBLIC_BASE_PATH: pagesBasePath ?? "" },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
