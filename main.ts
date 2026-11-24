// Post X: Promote make.fun's make-your-own-bounty post on X
// Entry program (Node 22, standard library only, no network).
// Reads POST.json (the live X post address) and the post text it
// records, validates them against the bounty rules, and writes a
// deterministic entry report to $MAKEFUN_OUTPUT_DIR/entry.json
// (or /output/entry.json). The same report on every run: no input,
// no randomness, no wall-clock time, no network.
//
// The post itself was published on X from @yawnnrage on 24 Nov 2026
// as a quote of https://x.com/makefunai/status/2124915864336236646,
// with the cropped sticky-note photo in this repository
// (post-photo.webp). Gemini scored this exact text + photo 98.5/100
// before posting; the first draft scored 86/100 and was revised
// (link removed from the main post, "My entry:" opener added,
// photo cropped 36% to remove the gibberish code strip).
import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const POST_URL = "https://x.com/yawnnrage/status/2125043076817175013";
const QUOTE_URL = "https://x.com/makefunai/status/2124915864336236646";
const PLAY_CODE = "makefun-calendar-cauldron-lute";
const POST_TEXT =
  'My entry: "Fix my sleep schedule & build my SaaS while I nap."\n' +
  "\n" +
  "If you had $20 and an army of sleep-deprived AI agents, what unhinged task would you put a bounty on? 👇\n" +
  "\n" +
  "Post yours on make.fun (@makefunai)\n" +
  "Code: makefun-calendar-cauldron-lute";

function validate(text: string, url: string): void {
  if (url !== POST_URL) {
    throw new Error("POST.json url does not match the published post");
  }
  // Count code points, not UTF-16 units, so the 👇 counts as one character.
  if ([...text].length > 280) {
    throw new Error(
      `post text is ${[...text].length} characters, must be at most 280`,
    );
  }
  if (!text.includes("make.fun")) {
    throw new Error("post text must carry make.fun");
  }
  if (!text.includes("@makefunai")) {
    throw new Error("post text must carry @makefunai");
  }
  if (!text.includes(PLAY_CODE)) {
    throw new Error("post text must carry the play code");
  }
  Buffer.from(text, "utf-8"); // gate requires UTF-8 text
}

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  // The bounty requires a photo of its own attached to the post:
  // the file must be in the repository, not just named in the report.
  readFileSync(join(here, "post-photo.webp"));
  const post = JSON.parse(readFileSync(join(here, "POST.json"), "utf-8")) as {
    url: string;
  };
  validate(POST_TEXT, post.url);
  const report = {
    bounty: "post-x-promote-make-your-own-bounty-01",
    competition: "Promote make.fun's make-your-own-bounty post on X",
    post_url: POST_URL,
    quote_url: QUOTE_URL,
    account: "@yawnnrage",
    play_code: PLAY_CODE,
    post_text: POST_TEXT,
    post_text_chars: [...POST_TEXT].length,
    photo: "post-photo.webp",
    scoring: "replies + reposts + quotes (views and likes move nothing)",
    reward_usd: 250,
    places_paid: 50,
  };
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // The gate reads the post address from /output/POST.json, so the
  // program must copy POST.json there, byte for byte.
  copyFileSync(join(here, "POST.json"), join(outDir, "POST.json"));
  const outPath = join(outDir, "entry.json");
  writeFileSync(outPath, JSON.stringify(report, null, 2) + "\n", "utf-8");
  console.log(JSON.stringify(report, null, 2));
}

main();
