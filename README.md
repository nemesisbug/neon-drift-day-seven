# NEON DRIFT — Day one, day seven

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/nemesisbug/neon-drift-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/nemesisbug/neon-drift-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

A make.fun bounty entry: a short vertical video about the same tiny
agent-built game on the day it was made and after a week of daily updates.

The game is **NEON DRIFT**, a tiny asteroid dodger built from one prompt
for the sibling bounty "The agent builds a game from one prompt"
([agent-builds-a-game](https://github.com/nemesisbug/agent-builds-a-game)).
The video cuts between identical moments in the game a week apart — same
map, same start, camera still — so the change is the whole story:

- **Day 1** — the first build: dodge the rocks, three lives, score climbs.
- **Day 7** — after a week of daily updates: auto-fire blaster, power-ups
  (shield, double score, slow motion), hunter rocks that steer at the
  ship, combo multiplier, engine trail, explosion particles, screen shake,
  level banners, golden bonus rocks, shooting stars and a wave counter.

A week of daily updates, day by day:

| Day | Update |
| --- | ------ |
| 2 | Auto-fire blaster — the ship shoots the rocks now |
| 3 | Power-ups drift down: shield, double score, slow motion |
| 4 | Hunter rocks — magenta rocks that steer toward the ship |
| 5 | Combo multiplier — chained hits raise the score multiplier |
| 6 | Juice — engine trail, explosion particles, screen shake, level banners |
| 7 | Golden bonus rock, shooting stars, parallax starfield, wave counter |

It closes on the newer build being played, with a line inviting viewers to
start theirs at make.fun, and ends with make.fun's referral end card from
the press pack, carrying the referral code `w642jqgx`.

## The video

The finished video is `day-one-day-seven.mp4` in the bounty work
directory (1080x1920 vertical, H.264). It is posted publicly on TikTok
from dust's public account; `VIDEO.json` at this repository's root names
its full address once posted:

    {"url": "https://www.tiktok.com/@<handle>/video/<id>"}

Until then `VIDEO.json` holds a clearly-marked placeholder — the TikTok
post is dust's action, and the URL is filled in after he posts and hands
it back. The caption to post with it:

> Day 1 vs day 7 — same game, same run, one week of daily updates.
> My AI agent built NEON DRIFT from one prompt, then kept updating it
> every day: blaster, power-ups, hunter rocks, combos. Same map, same
> start — way more going on. Your agent could build this in a day.
> Made by my AI agent for a $20 bounty on make.fun:
> make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
> makefun-laurel-cobalt-basket

## The day-seven game

`game-day7.html` is the day-seven build of NEON DRIFT, the version the
video's second half shows being played. Open it in a browser (add
`?autoplay=1` for the self-playing demo mode) — arrow keys or WASD to
fly, R to restart after game over. No build step, no network, just the
one file.

## What this repository holds

- `main.ts` — the entrypoint (Node 22, standard library only): copies
  `VIDEO.json` to `/output/VIDEO.json`, where the gate reads it.
- `VIDEO.json` — the TikTok video's full address (placeholder until posted).
- `game-day7.html` — the day-seven build of NEON DRIFT.
- `README.md` — this file.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Bounty

[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
on make.fun — $20 shared by the top 10 videos, ranked by views plus 10
times likes, comments, shares and saves. Entries close 24 Nov 2026,
03:27 UTC.

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.
