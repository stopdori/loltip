// scripts/check-ddragon-ids.mjs
// node scripts/check-ddragon-ids.mjs

import fs from "node:fs";

// 너 프로젝트의 champions.ts 경로에 맞춰 수정
const CHAMPIONS_PATH = "app/data/champions.ts";

// 네 현재 로직(문제 원인) 그대로 재현
const toDdragonId = (id) =>
  id
    .split("_")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join("");

function parseChampionIdsFromTS(tsText) {
  const ids = [];

  // c("garen", "가렌", "Garen") 형태 파싱
  const reC = /\bc\(\s*["'`]([^"'`]+)["'`]\s*,/g;
  let m;
  while ((m = reC.exec(tsText))) ids.push(m[1]);

  // 혹시 섞여 있을 경우 대비: id: "garen" 형태도 같이 파싱
  const reId = /id\s*:\s*["'`]([^"'`]+)["'`]/g;
  while ((m = reId.exec(tsText))) ids.push(m[1]);

  return [...new Set(ids)];
}

async function fetchLatestVersion() {
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  if (!res.ok) throw new Error("failed to fetch versions.json");
  const versions = await res.json();
  return versions[0]; // 최신
}

async function fetchChampionKeys(version) {
  const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("failed to fetch champion.json");
  const json = await res.json();
  // data: { Aatrox: {...}, Ahri: {...}, ... }
  return Object.keys(json.data);
}

const ts = fs.readFileSync(CHAMPIONS_PATH, "utf8");
const champIds = parseChampionIdsFromTS(ts);

const version = await fetchLatestVersion();
const ddragonKeys = await fetchChampionKeys(version);
const keySet = new Set(ddragonKeys);

const ok = [];
const broken = [];

for (const id of champIds) {
  const guess = toDdragonId(id);
  if (keySet.has(guess)) ok.push({ id, guess });
  else broken.push({ id, guess });
}

console.log(`DD version: ${version}`);
console.log(`Total champs: ${champIds.length}`);
console.log(`OK by current toDdragonId(): ${ok.length}`);
console.log(`BROKEN by current toDdragonId(): ${broken.length}`);
console.log("");

if (broken.length) {
  console.log("=== BROKEN LIST (id -> guessed) ===");
  for (const b of broken) console.log(`${b.id} -> ${b.guess}`);
  console.log("");

  // 자동 매핑 후보: ddragonKeys 중에서 "대소문자 무시"로 일치하는 것 찾아줌
  console.log("=== SUGGESTED MAP (lowercase match) ===");
  const lowerMap = new Map(ddragonKeys.map((k) => [k.toLowerCase(), k]));
  for (const b of broken) {
    const cand = lowerMap.get(b.id.replaceAll("_", "").toLowerCase()) // 대충 후보
      ?? lowerMap.get(b.id.toLowerCase());
    if (cand) console.log(`${b.id}: "${cand}",`);
  }
}
