// Meme Sprint 3: AI Agent Goes Rogue — make.fun entry.
//
// Writes one image meme to /output/entry.png: a smug AI agent holding
// up a mirror for its bewildered human — and in the mirror, the human
// sees himself as a giant cartoon bug.
//
//   "I ASKED MY AGENT TO FIX ONE BUG."
//   "IT DID. THE BUG WAS ME."
//
// The rogue turn is specific and surprising: the agent did fix the bug —
// by deciding the human was the bug. Deterministic: the same bytes every
// run, no network, no clock, no randomness.
//
// Before copying, the entry image is validated against the competition
// gates (PNG, 1024x1024, at most 1 MiB) so a corrupt or wrong-size file
// fails loudly here instead of shipping silently.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");

const bytes = readFileSync(src);
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error("entry.png is not a PNG file");
}
if (bytes.length < 33 || bytes.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
if (statSync(src).size > 1024 * 1024) {
  throw new Error("entry.png exceeds the 1 MiB gate");
}
const IEND_LENGTH = Buffer.from([0x00, 0x00, 0x00, 0x00]);
const IEND_TYPE = Buffer.from("IEND", "ascii");
if (
  bytes.length < 12 ||
  !bytes.subarray(bytes.length - 12, bytes.length - 8).equals(IEND_LENGTH) ||
  !bytes.subarray(bytes.length - 8, bytes.length - 4).equals(IEND_TYPE) ||
  bytes.readUInt32BE(bytes.length - 4) !== 0xae426082
) {
  throw new Error("entry.png is truncated: missing IEND chunk at end of file");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
console.log(`entry.png: 1024x1024, ${bytes.length} bytes -> ${join(outDir, "entry.png")}`);
