// The Robot Apology — a make.fun entry.
// main.ts writes exactly two lines to /output/entry.txt:
//   line 1 — the robot's apology for one specific, concrete mistake;
//   line 2 — what it learned and what it will do differently.
//
// Candidate apologies drafted in this session (all original, none copied
// from the bounty rules):
//  1. Shrunk your favourite wool sweater by drying it on high.
//  2. Labelled the spicy leftover soup "chicken" and you served it to a
//     guest who cannot eat chilli.
//  3. Turned the thermostat down to 12 degrees overnight and you woke up
//     freezing.
//  4. Vacuumed up the small brass screw from the chair you were repairing.
//  5. Set your alarm for 7 p.m. instead of 7 a.m. and you missed the train.
//  6. Emailed your draft complaint to your boss instead of saving it.
//  7. Put salt in your coffee because the two jars look identical.
//  8. Shut the cat in the laundry room overnight after miscounting.
//  9. Played your wake-up playlist at full volume at 3 a.m.
// 10. Folded your passport into the recycling with the boarding passes.
//
// Picked: candidate 5. The mistake is exact and small (one letter, a.m.
// vs p.m.), the consequence is real (a missed train), and the lesson
// follows directly from it: read the time back as morning or evening
// before confirming, so the two sevens can never swap places again.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const APOLOGY_LINE =
  "I set your alarm for 7 p.m. instead of 7 a.m., and you missed the 8:15 train.";
const LESSON_LINE =
  "I have learned to read every alarm back as morning or evening before I confirm it, so the two sevens can never swap places again.";

function buildEntry(): string {
  const lines = [APOLOGY_LINE, LESSON_LINE];
  for (const line of lines) {
    if (line.trim().length === 0) {
      throw new Error("Entry line must not be blank.");
    }
    if (line.includes("\n") || line.includes("\r")) {
      throw new Error("Each entry line must be a single line.");
    }
  }
  const text = lines.join("\n") + "\n";
  if (text.length < 1 || text.length > 400) {
    throw new Error(`Entry must be 1-400 chars, got ${text.length}.`);
  }
  return text;
}

function main(): void {
  const text = buildEntry();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  const chars = text.replace(/\n/g, "").length;
  const bytes = Buffer.byteLength(text, "utf8");
  console.log(`Wrote ${OUTPUT_PATH}: 2 lines, ${chars} chars, ${bytes} bytes.`);
}

main();
