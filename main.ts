import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the finished front-page image beside this file to the output dir.
// The image is drawn in advance (see entry.png); this program only copies it,
// so both runs write identical bytes with no network access.
const here = dirname(fileURLToPath(import.meta.url));

// An empty or whitespace-only MAKEFUN_OUTPUT_DIR is treated as unset,
// and a relative value is resolved against the current working directory.
const rawOut = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outDir = rawOut ? resolve(rawOut) : "/output";
mkdirSync(outDir, { recursive: true });

const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png not found beside main.ts");
}
copyFileSync(src, join(outDir, "entry.png"));
