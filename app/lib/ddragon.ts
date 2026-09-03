// app/lib/ddragon.ts

export type DDragonVar = {
  key: string; // 예: "a1", "f1"
  link: string; // 예: "spelldamage", "bonusattackdamage"
  coeff: number | number[];
};

export type DDragonSpell = {
  id: string;
  name: string;
  description: string; // HTML 포함
  tooltip: string; // HTML 포함, {{ ... }} 플레이스홀더 포함
  effectBurn?: (string | null)[]; // index 0은 항상 null, {{ eN }} → effectBurn[N]
  vars?: DDragonVar[]; // {{ aN }} / {{ fN }} 등 → key 일치 항목의 coeff
};

export type DDragonPassive = {
  name: string;
  description: string; // HTML 포함. 패시브는 effectBurn/vars가 없어 {{ }}를 채울 수 없음
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

// ✅ slug -> DDragon champId 변환
const DD_ID_MAP: Record<string, string> = {
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

export function toDdragonId(id: string) {
  const key = id.toLowerCase();
  if (DD_ID_MAP[key]) return DD_ID_MAP[key];

  return id
    .split("_")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join("");
}

export function stripHtml(input: string) {
  return input
    .replace(/<[^>]*>/g, "")
    .replace(/\{\{[^}]+\}\}/g, "") // resolvePlaceholders()가 못 채우고 남긴 잔여물 정리용 안전망
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

/**
 * 데이터드래곤 원문 자체에 깨져서 내려오는 문자열을 바로잡는 override 테이블.
 * key: 원문에 그대로 등장하는 깨진 문자열, value: 교체할 올바른 문자열.
 *
 * 버전 체크 없이 "문자열이 발견되면 치환"하는 방식이라, 나중에 라이엇이
 * 자체적으로 고쳐서 이 문자열이 더 이상 안 내려오면 자연스럽게 매칭이
 * 안 되고 무시된다 (별도 정리 불필요).
 *
 * 다른 챔피언에서도 비슷하게 깨진 문자열을 발견하면 여기에 계속 추가하면 됨.
 */
const DDRAGON_TEXT_OVERRIDES: Record<string, string> = {
  // 갱플랭크 Q(포화 사격) ko_KR 원문에서 "포화 사격"(Parrrley)이
  // "혀어어어업상"으로 깨져서 내려옴. 스킬 이름 필드(spells[0].name)뿐 아니라
  // E(화약통) tooltip 안의 <spellName>Parrrley</spellName> 참조도 동일하게
  // 깨져 있음. en_US 원문과 대조해서 확인 (16.17.1 기준, 15.21.1부터
  // 지속되어 온 라이엇 쪽 데이터 오류). name 필드에도 적용해야 하므로
  // resolvePlaceholders 뿐 아니라 스킬/패시브 이름 표시부에도 이 함수를 써야 함.
  "혀어어어업상": "포화 사격",
};

export function applyTextOverrides(input: string): string {
  let out = input;
  for (const [broken, fixed] of Object.entries(DDRAGON_TEXT_OVERRIDES)) {
    if (out.includes(broken)) out = out.split(broken).join(fixed);
  }
  return out;
}

// vars[].coeff(비율)를 화면에 보여줄 문자열로 변환.
// -1~1 범위면 "비율"로 보고 %로 표시(예: 0.6 -> "60"), 그 외엔 그대로 표시.
function formatCoeffValue(n: number): string {
  const pct = n >= -1 && n <= 1 ? n * 100 : n;
  const rounded = Math.round(pct * 10) / 10;
  return String(rounded);
}

// coeff가 배열이면(랭크별 수치) effectBurn 표기 관례("40/50/60/70/80%")와
// 동일하게 "/"로 이어붙이고 마지막에 %를 붙인다.
function formatCoeff(coeff: number | number[]): string {
  if (Array.isArray(coeff)) {
    return coeff.map(formatCoeffValue).join("/") + "%";
  }
  return formatCoeffValue(coeff) + "%";
}

// "/"로 이어진 랭크별 수치 문자열(예: "30/45/60/75/90")에 산술식을 적용.
// {{ minmovespeed*100 }}처럼 플레이스홀더 자체에 배율이 붙어 나오는 경우를 위함
// (라이엇이 0~1 비율값을 %로 보여줄 때 흔히 쓰는 표기).
// 숫자로 못 바꾸는 조각은 그대로 둔다(안전 폴백).
function applyArithmetic(valueStr: string, opExpr?: string): string {
  if (!opExpr) return valueStr;
  const m = opExpr.match(/^([*/+-])\s*([0-9.]+)$/);
  if (!m) return valueStr;
  const op = m[1];
  const operand = Number(m[2]);
  if (Number.isNaN(operand)) return valueStr;

  const applyOne = (n: number) => {
    switch (op) {
      case "*": return n * operand;
      case "/": return operand !== 0 ? n / operand : n;
      case "+": return n + operand;
      case "-": return n - operand;
      default: return n;
    }
  };

  return valueStr
    .split("/")
    .map((p) => {
      const n = Number(p);
      if (Number.isNaN(n)) return p;
      const rounded = Math.round(applyOne(n) * 10) / 10;
      return String(rounded);
    })
    .join("/");
}

/**
 * tooltip/description 안의 {{ ... }} 플레이스홀더를 실제 수치로 치환한다.
 * stripHtml()보다 먼저 호출해야 한다 (stripHtml은 여기서 못 채운 잔여물만 지움).
 *
 * {{ minmovespeed*100 }}처럼 이름 뒤에 산술식(*100 등)이 붙는 경우도 지원한다
 * (0~1 비율값을 %로 변환해서 보여줄 때 라이엇이 흔히 쓰는 표기).
 *
 * 우선순위:
 * 1. {{ eN }} → effectBurn[N]
 * 2. {{ aN }} / {{ fN }} (등 vars 키와 일치) → vars[].coeff
 * 3. "수치가 아닌" 것으로 알려진 이름(예: spellmodifierdescriptionappend —
 *    아이템/룬 조건부 추가 설명을 위한 라이엇 내부 훅으로, 거의 항상
 *    비어있는 텍스트임) → 위치 매핑에서 제외하고 빈 문자열로 처리.
 *    안 그러면 뒤에 엉뚱한 숫자가 문장 끝에 덧붙어 나온다.
 * 4. 그 외 이름 기반 플레이스홀더(예: {{ barrelduration }}) →
 *    tooltip에 처음 등장하는 순서대로 effectBurn[1], effectBurn[2]...에
 *    위치 매핑하는 휴리스틱. 데이터드래곤 공개 API가 "이름 → effectBurn
 *    인덱스" 매핑을 제공하지 않아서 쓰는 최선의 근사치이며, 100% 정확을
 *    보장하지 않는다(실제 내부 인덱스와 등장 순서가 다를 수 있음 — 특히
 *    이름 기반 플레이스홀더를 여러 개 쓰는 복잡한 궁극기에서 부정확할 수 있음).
 *    같은 이름이 tooltip에 여러 번 나오면 같은 값으로 일관되게 채운다.
 */

// 수치 값이 아니라 조건부 텍스트 훅으로 쓰이는, 값이 거의 항상 비어있는
// 플레이스홀더 이름 패턴. 위치 매핑 대상에서 제외한다.
const NON_NUMERIC_PLACEHOLDER = /spellmodifierdescription/i;

export function resolvePlaceholders(
  raw: string,
  spell: { effectBurn?: (string | null)[]; vars?: DDragonVar[] }
): string {
  const text = applyTextOverrides(raw);
  const effectBurn = spell.effectBurn ?? [];
  const vars = spell.vars ?? [];

  let nextPositionalIndex = 1; // effectBurn[0]은 항상 null
  const positionalCache = new Map<string, string>();

  // 플레이스홀더 안에 *100 같은 산술식이 붙는 경우까지 포함해서 매칭
  return text.replace(
    /\{\{\s*([a-zA-Z0-9_]+)\s*([*/+-]\s*[0-9.]+)?\s*\}\}/g,
    (_match, rawKey: string, rawOp: string | undefined) => {
      const key = rawKey;
      const op = rawOp?.replace(/\s+/g, "");

      // 1. {{ eN }} → effectBurn[N]
      const eMatch = key.match(/^e(\d+)$/i);
      if (eMatch) {
        const n = Number(eMatch[1]);
        return applyArithmetic(effectBurn[n] ?? "", op);
      }

      // 2. {{ aN }} / {{ fN }} → vars[].coeff (key 일치)
      if (/^[af]\d+$/i.test(key)) {
        const v = vars.find((v) => v.key.toLowerCase() === key.toLowerCase());
        if (v) return formatCoeff(v.coeff); // coeff는 이미 %로 변환해서 반환하므로 op 적용 안 함
        // vars에 없으면 4번 위치 매핑으로 폴백
      }

      // 3. 수치가 아닌 것으로 알려진 이름 → 위치 매핑 없이 빈 문자열
      if (NON_NUMERIC_PLACEHOLDER.test(key)) return "";

      // 4. 이름 기반 플레이스홀더 → 등장 순서대로 effectBurn에 위치 매핑
      let value: string;
      if (positionalCache.has(key)) {
        value = positionalCache.get(key)!;
      } else {
        value = effectBurn[nextPositionalIndex] ?? "";
        nextPositionalIndex += 1;
        positionalCache.set(key, value);
      }
      return applyArithmetic(value, op);
    }
  );
}

