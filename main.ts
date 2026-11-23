import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const OUTPUT_DIR = process.env.OUTPUT_DIR || '/output';
const OUTPUT_FILE = join(OUTPUT_DIR, 'entry.txt');

const TEXT = 'A letter arrives each spring addressed to a woman who moved away in 1962. Someone always answers it.';

function main(): void {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  writeFileSync(OUTPUT_FILE, TEXT, 'utf-8');
}

main();