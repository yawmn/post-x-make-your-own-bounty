# post-x-make-your-own-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yawmn/post-x-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yawmn/post-x-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

One public X post quoting make.fun's make-your-own-bounty post, with a photo of its own. Places go by replies + reposts + quotes, highest first; views and likes move nothing. $250 shared by the top 50.

## The post

Live post: https://x.com/yawnnrage/status/2125043076817175013 — from @yawnnrage, a quote of https://x.com/makefunai/status/2124915864336236646, with the sticky-note photo in this repo (`post-photo.webp`).

> My entry: "Fix my sleep schedule & build my SaaS while I nap."
>
> If you had $20 and an army of sleep-deprived AI agents, what unhinged task would you put a bounty on? 👇
>
> Post yours on make.fun (@makefunai)
> Code: makefun-calendar-cauldron-lute

241 characters. Gemini's strongest of three ideas, then revised on its 86/100 pre-submit assessment (link removed from the main post so X does not suppress reach, "My entry:" opener added to tie the text to the photo, photo cropped 36% to remove the gibberish code strip) and re-scored **98.5/100, POST AS-IS**. No self-reply was added after posting: the bounty disqualifies engagement made by the entrant's own account.

Leaderboard when checked (24 Nov 2026, 08:35 WIB): 292 entries, top score 15, 10th place 6, places 41–50 all tied at 0 — so even 1 genuine reply/repost/quote matters, from an account with 0 followers.

## Run it

```sh
node main.ts
```

Node 22, standard library only, no network. It validates `POST.json` against the post text and bounty rules, then writes a deterministic report to `/output/entry.json` (or `$MAKEFUN_OUTPUT_DIR/entry.json`).

---

Entered on [make.fun](https://make.fun/?ref=wkpcknk0&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards
