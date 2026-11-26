// Break Production, Own It — make.fun bounty entry (u-ricoxyz-break-production-own-it-be78a994).
// Writes one single-line, brutally honest error message to /output/entry.txt
// and prints the same line to stdout. The line must stay 1-200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I skipped the review, merged my own PR, and ran the migration on prod: the users table is empty, the backup was never tested, and I already told everyone the deploy was safe.";

if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry must be a single line of 1-200 chars, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
