// app/lib/ddragon.ts

export type DDragonSpell = {
  id: string;
  name: string;
  description: string; // HTML 포함
  tooltip: string; // HTML 포함
};

export type DDragonPassive = {
  name: string;
  description: string; // HTML 포함
};

export type ChampSpells = {
  champId: string; // "Draven"
  version: string;
  spells: DDragonSpell[]; // 0:Q 1:W 2:E 3:R
  passive: DDragonPassive; // ✅ P(패시브)
};

const versionCache: { v?: string } = {};
const champCache = new Map<string, Promise<ChampSpells>>();

export async function getLatestDDragonVersion(): Promise<string> {
  if (versionCache.v) return versionCache.v;
  const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
  const versions: string[] = await res.json();
  versionCache.v = versions[0]; // 최신
  return versionCache.v!;
}

export async function getChampSpells(
  champId: string,
  locale = "ko_KR",
): Promise<ChampSpells> {
  // champId는 Data Dragon 표기(예: "Draven", "Aatrox")로 들어온다고 가정
  const key = `${locale}:${champId}`;
  if (champCache.has(key)) return champCache.get(key)!;

  const p = (async () => {
    const v = await getLatestDDragonVersion();
    const url = `https://ddragon.leagueoflegends.com/cdn/${v}/data/${locale}/champion/${champId}.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`DDragon fetch failed: ${res.status}`);
    const json = await res.json();

    const data = json.data?.[champId];
    if (!data?.spells) throw new Error(`No spells in ddragon payload for ${champId}`);
    if (!data?.passive) throw new Error(`No passive in ddragon payload for ${champId}`);

    return {
      champId,
      version: v,
      spells: data.spells as DDragonSpell[],
      passive: {
        name: data.passive.name as string,
        description: data.passive.description as string,
      },
    };
  })();

  champCache.set(key, p);
  return p;
}

export function stripHtml(input: string) {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/\{\{[^}]+\}\}/g, "") // ✅ {{ ... }} 토큰 제거
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}
