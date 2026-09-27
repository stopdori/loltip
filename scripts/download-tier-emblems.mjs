// scripts/download-tier-emblems.mjs
// node scripts/download-tier-emblems.mjs

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = "public/tiers";
const TIERS = [
  "iron",
  "bronze",
  "silver",
  "gold",
  "platinum",
  "emerald",
  "diamond",
  "master",
  "grandmaster",
  "challenger",
];

const BASE_URL =
  "https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/ranked-emblem/emblem-{tier}.png";

async function downloadAndConvertWebp(url, outWebpPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed: ${url}`);

  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(outWebpPath), { recursive: true });

  await sharp(buf)
    .trim()
    .resize({ height: 256 })
    .webp({ quality: 82 })
    .toFile(outWebpPath);
}

(async () => {
  console.log(`Tiers: ${TIERS.length}`);

  let ok = 0;
  let fail = 0;

  for (const tier of TIERS) {
    const url = BASE_URL.replace("{tier}", tier);
    const out = path.join(OUT_DIR, `${tier}.webp`);

    try {
      await downloadAndConvertWebp(url, out);
      ok++;
      console.log(`[OK] ${tier}`);
    } catch (e) {
      fail++;
      console.log(`[FAIL] ${tier}`, e.message);
    }
  }

  console.log("");
  console.log(`Done. OK: ${ok}, FAIL: ${fail}`);
  console.log(`Saved to: public/tiers/<tier>.webp`);
})();
