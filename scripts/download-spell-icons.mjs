// scripts/download-spell-icons.mjs
// node scripts/download-spell-icons.mjs

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const CHAMPIONS_PATH = "app/data/champions.ts";
const OUT_DIR = "public/spells";

// Data Dragon 예외 맵
const DD_ID_MAP = {
  reksai: "RekSai",
  leesin: "LeeSin",
  masteryi: "MasterYi",
  drmundo: "DrMundo",
  missfortune: "MissFortune",
  xinzhao: "XinZhao",
  aurelionsol: "AurelionSol",
  wukong: "MonkeyKing",
  jarvaniv: "JarvanIV",
  kogmaw: "KogMaw",
  ksante: "KSante",
  tahmkench: "TahmKench",
  twistedfate: "TwistedFate",
};

const toDdragonId = (id) => {
  const key = id.toLowerCase();
  if (DD_ID_MAP[key]) return DD_ID_MAP[key];
  return id
    .split("_")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join("");
};

function parseChampionIdsFromTS(tsText) {
  const ids = [];
  const reC = /\bc\(\s*["'`]([^"'`]+)["'`]\s*,/g;
  let m;
  while ((m = reC.exec(tsText))) ids.push(m[1]);
  return [...new Set(ids)];
}

async function fetchLatestVersion() {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  const versions = await res.json();
  return versions[0];
}

async function fetchChampionData(version, ddragonId) {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${ddragonId}.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`champion json failed: ${ddragonId}`);
  const json = await res.json();
  return json.data[ddragonId];
}

async function downloadAndConvertWebp(url, outWebpPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed: ${url}`);

  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(outWebpPath), { recursive: true });

  await sharp(buf)
    .webp({ quality: 82 }) // 용량/품질 밸런스 좋음
    .toFile(outWebpPath);
}

(async () => {
  const ts = fs.readFileSync(CHAMPIONS_PATH, "utf8");
  const champIds = parseChampionIdsFromTS(ts);

  const version = await fetchLatestVersion();
  console.log(`DD version: ${version}`);
  console.log(`Champs: ${champIds.length}`);

  let ok = 0;
  let fail = 0;

  for (const champId of champIds) {
    const ddragonId = toDdragonId(champId);

    try {
      const champ = await fetchChampionData(version, ddragonId);

      // Passive → P.webp
      const passiveFile = champ?.passive?.image?.full;
      if (passiveFile) {
        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${passiveFile}`;
        const out = path.join(OUT_DIR, champId, "P.webp");
        await downloadAndConvertWebp(url, out);
      }

      // Q/W/E/R → webp
      const keys = ["Q", "W", "E", "R"];
      for (let i = 0; i < 4; i++) {
        const full = champ?.spells?.[i]?.image?.full;
        if (!full) continue;

        const url = `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${full}`;
        const out = path.join(OUT_DIR, champId, `${keys[i]}.webp`);
        await downloadAndConvertWebp(url, out);
      }

      ok++;
      if (ok % 20 === 0) console.log(`...${ok}/${champIds.length}`);
    } catch (e) {
      fail++;
      console.log(`[FAIL] ${champId} (${ddragonId})`, e.message);
    }
  }

  console.log("");
  console.log(`Done. OK: ${ok}, FAIL: ${fail}`);
  console.log(`Saved to: public/spells/<champId>/(P|Q|W|E|R).webp`);
})();
