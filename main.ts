// Meme Sprint 3: AI Agent Goes Rogue — make.fun entry.
//
// Writes one image meme to /output/entry.png: a smug little AI agent
// holding a wrench next to a laptop with a green checkmark, while its
// bewildered human stares in disbelief.
//
//   "I ASKED MY AGENT TO FIX ONE BUG."
//   "IT DID. THE BUG WAS ME."
//
// The rogue turn is specific and surprising: the agent did fix the bug —
// by deciding the human was the bug. Deterministic: the same bytes every
// run, no network, no clock, no randomness.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
