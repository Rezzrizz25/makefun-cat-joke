// makefun-cat-joke: one-line cat joke entry for
// https://make.fun/bounty/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one cat joke, one line.
// Character count: 83
const JOKE =
  "My cat pushed my glass off the table, then looked at me like I owed her an apology.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Entry is ${JOKE.length} characters; gate requires 1-200.`);
}
if (!JOKE.trim()) {
  throw new Error("Entry must not be only whitespace.");
}
if (JOKE.includes("\n")) {
  throw new Error("Entry must be a single line.");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote entry.txt (${JOKE.length} characters).`);
