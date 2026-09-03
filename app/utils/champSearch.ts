import type { Champ } from "../data/champions";

// ===== Hangul utils =====
// ChampSelectModal(전체 챔피언 선택 모달)의 검색 매칭 로직을 그대로 옮긴 공유 유틸.
// 초성 매칭 / 두벌식 로마자 오타 매칭 / 별칭(aliases) 매칭을 함께 지원한다.
const CHOSEONG = [
  "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
  "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
] as const;

const JUNGSEONG_KEY = [
  "k", "o", "i", "O", "j", "p", "u", "P", "h", "hk", "ho", "hl",
  "y", "n", "nj", "np", "nl", "b", "m", "ml", "l",
] as const;

const CHOSEONG_KEY = [
  "r", "R", "s", "e", "E", "f", "a", "q", "Q", "t",
  "T", "d", "w", "W", "c", "z", "x", "v", "g",
] as const;

const CHOSEONG_TO_KEY: Record<string, string> = Object.fromEntries(
  CHOSEONG.map((jamo, i) => [jamo, CHOSEONG_KEY[i] ?? ""])
);

export function initialsToDubeol(initials: string) {
  return [...initials].map((ch) => CHOSEONG_TO_KEY[ch] ?? ch).join("");
}

// 두벌식 역매핑: 영문 자음 키 → 한글 초성 (소문자 기준, 첫 등장 우선)
const DUBEOL_TO_CHOSEONG: Record<string, string> = {};
CHOSEONG.forEach((jamo, i) => {
  const key = (CHOSEONG_KEY[i] ?? "").toLowerCase();
  if (key && !DUBEOL_TO_CHOSEONG[key]) DUBEOL_TO_CHOSEONG[key] = jamo;
});

// 영어 키보드 입력(두벌식 자음만)을 한글 초성 문자열로 변환
// 모든 문자가 자음 키인 경우만 변환, 하나라도 아니면 null 반환
export function engToKorInitials(str: string): string | null {
  let result = "";
  for (const ch of str) {
    const jamo = DUBEOL_TO_CHOSEONG[ch];
    if (!jamo) return null;
    result += jamo;
  }
  return result || null;
}

// 종성(받침) 인덱스 0은 없음("")
const JONGSEONG_KEY = [
  "",
  "r",  "R",  "rt", "s",  "sw", "sg", "e",  "f",  "fr",
  "fa", "fq", "ft", "fx", "fv", "fg", "a",  "q",  "qt",
  "t",  "T",  "d",  "w",  "c",  "z",  "x",  "v",  "g",
] as const;

function isHangulSyllable(ch: string) {
  const code = ch.charCodeAt(0);
  return code >= 0xac00 && code <= 0xd7a3;
}

export function hangulToInitials(str: string) {
  let out = "";
  for (const ch of str) {
    if (!isHangulSyllable(ch)) continue;
    const code = ch.charCodeAt(0) - 0xac00;
    const ci = Math.floor(code / (21 * 28));
    out += CHOSEONG[ci] ?? "";
  }
  return out;
}

// 한글(완성형) -> 두벌식 영문 타이핑 결과로 변환 (가렌 => rkfps)
export function hangulToDubeol(str: string) {
  let out = "";
  for (const ch of str) {
    if (!isHangulSyllable(ch)) {
      out += ch;
      continue;
    }
    const code = ch.charCodeAt(0) - 0xac00;
    const ci = Math.floor(code / (21 * 28));
    const vi = Math.floor((code % (21 * 28)) / 28);
    const fi = code % 28;

    out += (CHOSEONG_KEY[ci] ?? "");
    out += (JUNGSEONG_KEY[vi] ?? "");
    out += (JONGSEONG_KEY[fi] ?? "");
  }
  return out;
}

const JAMO_EXPAND: Record<string, string> = {
  // 겹받침(겹자음)
  "ㄳ": "ㄱㅅ",
  "ㄵ": "ㄴㅈ",
  "ㄶ": "ㄴㅎ",
  "ㄺ": "ㄹㄱ",
  "ㄻ": "ㄹㅁ",
  "ㄼ": "ㄹㅂ",
  "ㄽ": "ㄹㅅ",
  "ㄾ": "ㄹㅌ",
  "ㄿ": "ㄹㅍ",
  "ㅀ": "ㄹㅎ",
  "ㅄ": "ㅂㅅ",

  // (선택) 겹모음까지 같이 풀고 싶으면 유지
  "ㅘ": "ㅗㅏ",
  "ㅙ": "ㅗㅐ",
  "ㅚ": "ㅗㅣ",
  "ㅝ": "ㅜㅓ",
  "ㅞ": "ㅜㅔ",
  "ㅟ": "ㅜㅣ",
  "ㅢ": "ㅡㅣ",
};

export function expandCompositeJamo(str: string) {
  return [...str].map((ch) => JAMO_EXPAND[ch] ?? ch).join("");
}

export function normalize(str: string) {
  return expandCompositeJamo(str)
    .toLowerCase()
    .replace(/\s+/g, "");
}

/**
 * 챔피언 하나에 대한 검색 키를 본명(ko/en/id + 초성/두벌식 변환값)과
 * 별칭(aliases.ko/aliases.en + 그 변환값)으로 분리해서 반환한다.
 * filterChampions가 "본명 매칭 우선, 별칭 매칭 후순위"로 정렬하는 데 쓰인다.
 *
 * lang === "ko": 한글 이름/초성/두벌식/한글 별칭 + 영문 이름/id/영문 별칭 전부 포함
 *   (한국 사용자가 영문 챔피언명으로 검색하는 경우도 많아서 영어 매칭은 유지).
 * lang === "en": 한글 관련 변환(hangulToInitials/hangulToDubeol/initialsToDubeol)을
 *   전부 건너뛰고 영문 이름/id/영문 별칭만 매칭 대상으로 삼는다.
 *   (예: EN 페이지에서 "at" 검색 시 이 값이 한글 초성으로 역변환("ㅁㅅ")되어
 *   "마스터 이"(초성 ㅁㅅㅌㅇ)와 매칭되는 등, 의도치 않은 한글 매칭이 섞이는 걸 방지)
 */
export function buildSearchKeys(c: Champ, lang: "ko" | "en") {
  const ko = c.ko ?? "";
  const koAliases = c.aliases?.ko ?? [];
  const enAliases = c.aliases?.en ?? [];

  const baseKeys = (
    lang === "ko"
      ? [
          ko,
          c.en,
          c.id,
          hangulToInitials(ko),
          hangulToDubeol(ko),
          initialsToDubeol(hangulToInitials(ko)),
        ]
      : [c.en, c.id]
  )
    .map(normalize)
    .filter(Boolean);

  const koAliasKeys =
    lang === "ko"
      ? koAliases.flatMap((a) => {
          const initials = hangulToInitials(a);
          return [a, initials, hangulToDubeol(a), initialsToDubeol(initials)];
        })
      : [];

  const enAliasKeys = enAliases.map((a) => a.toLowerCase());

  const aliasKeys = [...koAliasKeys, ...enAliasKeys]
    .map(normalize)
    .filter(Boolean);

  return { baseKeys, aliasKeys };
}

/**
 * 챔피언 목록을 검색어(query)로 필터링한다.
 * 초성 매칭 / 두벌식 로마자 오타 매칭 / 별칭 매칭을 모두 지원.
 * query가 비어있으면 lang 기준 가나다/알파벳 정렬된 전체 목록을 반환.
 */
export function filterChampions(
  champions: Champ[],
  query: string,
  lang: "ko" | "en"
) {
  const collator = new Intl.Collator(lang === "ko" ? "ko" : "en", {
    sensitivity: "base",
  });

  const list = champions
    .slice()
    .sort((a, b) =>
      collator.compare(lang === "ko" ? a.ko : a.en, lang === "ko" ? b.ko : b.en)
    );

  const key = normalize(query.trim());
  if (!key) return list;

  // 영어 키보드 입력을 한글 초성으로 역변환 (예: "dxft" → "ㅇㅌㄹㅅ")
  // en 페이지에서는 한글 관련 매칭 자체를 쓰지 않으므로 역변환도 하지 않는다.
  const korKey = lang === "ko" ? engToKorInitials(key) : null;

  const matchesPrefix = (keys: string[]) =>
    keys.some((k) => k.startsWith(key)) ||
    (!!korKey && keys.some((k) => k.startsWith(korKey)));

  const matchesSubstring = (keys: string[]) =>
    keys.some((k) => k.includes(key)) ||
    (!!korKey && keys.some((k) => k.includes(korKey)));

  // 4단계 우선순위: 본명 prefix → 별칭 prefix → 본명 substring → 별칭 substring.
  // 예: "ㅇ" 검색 시 본명이 "ㅇ"으로 시작하는 아무무/아지르 등이,
  // 별칭("악어" 등)으로만 시작 매칭되는 레넥톤보다 먼저 나온다.
  // 각 그룹은 이미 list 단계에서 collator 정렬된 상태라 순서가 그대로 유지된다.
  const baseNamePrefix: Champ[] = [];
  const aliasPrefix: Champ[] = [];
  const baseNameSubstring: Champ[] = [];
  const aliasSubstring: Champ[] = [];

  for (const c of list) {
    const { baseKeys, aliasKeys } = buildSearchKeys(c, lang);

    if (matchesPrefix(baseKeys)) {
      baseNamePrefix.push(c);
    } else if (matchesPrefix(aliasKeys)) {
      aliasPrefix.push(c);
    } else if (matchesSubstring(baseKeys)) {
      baseNameSubstring.push(c);
    } else if (matchesSubstring(aliasKeys)) {
      aliasSubstring.push(c);
    }
  }

  return [...baseNamePrefix, ...aliasPrefix, ...baseNameSubstring, ...aliasSubstring];
}
