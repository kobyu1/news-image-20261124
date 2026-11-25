[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/kobyu1/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/kobyu1/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

# The World in One Image — Tuesday, 24 November 2026

A newspaper-front-page infographic summing up the world news of Tuesday,
24 November 2026 in a single 1024×1024 image, drawn entirely in code
(flat vector-style illustrations, no photographs).

Six stories, most consequential first:

1. **Markets** — Nvidia's comeback rally fades a day after Jensen Huang's
   return as CEO sparked the best day for US stocks since April 2025.
2. **Ukraine** — A Russian overnight strike on an apartment building in
   Zaporizhzhia kills 2 and wounds 44, including four children.
3. **Gaza** — Israeli airstrikes kill Hamas internal security chief
   Naeem Abu Nahal and six others despite a ceasefire in place since last year.
4. **Space** — Allies say Russia may launch a nuclear-armed satellite next
   month; NATO chief Mark Rutte vows the alliance will defend against threats
   in space.
5. **Trade** — China extends its suspension of some critical-material export
   curbs to the US until January, days after the Trump–Xi summit in Shenzhen;
   Washington is preparing higher tariffs on China.
6. **World** — Global landmine casualties hit a five-year high of 7,000,
   with Myanmar and Syria topping the list.

`main.ts` copies the finished `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`
(default `/output`). It runs with no network and writes identical bytes on
every run.

## Verify locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is a 1024×1024 PNG of 128,319 bytes, well under the 1 MiB
gate limit. The image was checked visually at full size and at 300 px wide:
the date is prominent, all six headlines and captions are legible, and no
text is clipped or garbled.
