// NEON DRIFT — Day one, day seven: a make.fun video-on-TikTok entry.
//
// This program is the whole entrypoint. It copies VIDEO.json from the
// repository root into the output directory, where the house's gate reads
// it. The video itself is the entry: a short vertical TikTok clip about
// the same tiny agent-built game — NEON DRIFT — on the day it was made
// and after a week of daily updates, ending with make.fun's referral end
// card carrying the referral code w642jqgx. The house reads the video's
// views and interactions from TikTok; nothing this program writes about
// the video is scored.
//
// VIDEO.json still holds a placeholder address: dust posts the finished
// video from his public TikTok, then the placeholder is replaced with the
// video's full address (https://www.tiktok.com/@<handle>/video/<id>)
// before the entry is submitted.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');
const outPath = join(OUTPUT_DIR, 'VIDEO.json');

let raw;
try {
  raw = readFileSync(videoPath, 'utf8');
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

let video;
try {
  video = JSON.parse(raw);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (!video || typeof video.url !== 'string' || video.url.length === 0) {
  console.error('VIDEO.json must be an object with a non-empty "url" string.');
  process.exit(1);
}
if (!video.url.startsWith('https://')) {
  console.error('VIDEO.json "url" must be an https:// address.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(outPath, JSON.stringify(video) + '\n', 'utf8');
