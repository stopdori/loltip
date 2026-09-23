import { CHAMPIONS } from "@/app/data/champions";
import type { MatchupSummary } from "@/app/data/matchups/_types";
import { stripTagTokens } from "@/app/utils/stripTagTokens";
import { waGwa } from "@/app/utils/koreanParticle";

// 매치업 페이지의 meta description / og:description / twitter:description 문구를 만든다.
// 예전엔 전 페이지가 "{A}와 {B}의 스킬 상성, CC 판정, 저지불가 상호작용 정리" 한 틀이라
// 페이지마다 구별되는 정보가 챔피언 이름뿐이었고, 실제로는 저지불가 판정이 없는 페이지가 대부분이었으며
// "{A}와"가 고정이라 받침 있는 이름에서 조사도 틀렸다(아크샨와). 이제 실제 판정 문장으로 채운다.
//
// 이 파일은 디스크립션 전용이다 — stripTagTokens/waGwa의 기존 동작은 바꾸지 않고 재사용만 한다.

const MAX_LEN = { ko: 80, en: 155 } as const;

// 디스크립션 전용 전처리: [[EXIST]]/[[NOT_EXIST]]는 화면에선 O/X 기호로 렌더링되는데,
// 검색 결과 요약문에 기호만 덩그러니 남으면 뜻을 알 수 없으므로 원문 단계에서 없앤다.
// 보통 "…할 수 있음. [[EXIST]]" 형태로 문장 끝에 붙고, 뒤에 마침표가 하나 더 오는 경우도 있어 같이 지운다.
// 토큰 자리를 공백으로 바꾸는 이유: 뒤따르는 줄바꿈까지 함께 지우면 다음 문장이 앞 문장에 붙어버린다("있음.단,").
function dropExistTokens(raw: string): string {
  return raw.replace(/\[\[(?:EXIST|NOT_EXIST)\]\]\s*\.?/g, " ");
}

// 판정 항목 하나를 "완결된 문장" 배열로 쪼갠다. \n(줄바꿈)은 공백으로 펴고, 마침표 뒤에서 끊는다.
function toSentences(raw: string, lang: "ko" | "en"): string[] {
  const text = stripTagTokens(dropExistTokens(raw), lang)
    .replace(/\s*\n\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return [];
  return text
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

// 상한을 넘는 단일 문장은 어절(공백) 경계에서 자른다 — 글자 중간에서 자르지 않는다.
function truncateAtWord(text: string, limit: number): string {
  if (text.length <= limit) return text;
  let cut = text.slice(0, Math.max(0, limit - 1)); // 말줄임표 자리
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > 0) cut = cut.slice(0, lastSpace);
  return cut.replace(/[\s,./]+$/, "") + "…";
}

export function buildMatchupDescription(
  data: MatchupSummary | null,
  a: string,
  b: string,
  lang: "ko" | "en"
): string {
  const nameOf = (id: string) => {
    const c = CHAMPIONS.find((x) => x.id === id);
    return c ? (lang === "ko" ? c.ko : c.en) : id;
  };
  const nameA = nameOf(a);
  const nameB = nameOf(b);
  const head =
    lang === "ko" ? `${nameA}${waGwa(nameA)} ${nameB} 매치업. ` : `${nameA} vs ${nameB} matchup. `;

  // 판정 문장은 작성 규칙상 본인 주어를 생략하므로(예: "Q의 에어본, W의 넉백…"),
  // 문장만 떼면 누구 스킬인지 알 수 없다. 그래서 문장 앞에 판정 주인 이름을 붙인다.
  const groups: { owner: string; raws: string[] }[] = [
    { owner: nameA, raws: data?.highlightsByChamp?.[a]?.[lang] ?? [] },
    { owner: nameB, raws: data?.highlightsByChamp?.[b]?.[lang] ?? [] },
    { owner: lang === "ko" ? "공통" : "Both", raws: data?.common?.[lang] ?? [] },
  ];
  const units: { owner: string; sentence: string }[] = [];
  for (const g of groups) {
    for (const raw of g.raws) {
      for (const sentence of toSentences(raw, lang)) units.push({ owner: g.owner, sentence });
    }
  }

  // 판정 내용이 없는 조합(noindex) — 특정 메커니즘 단어를 넣지 않은 중립 문구
  if (units.length === 0) {
    return lang === "ko"
      ? `${nameA}${waGwa(nameA)} ${nameB}의 매치업 상호작용 정리`
      : `${nameA} vs ${nameB} matchup interactions`;
  }

  const max = MAX_LEN[lang];
  const parts: string[] = [];
  let lastOwner = "";
  for (const u of units) {
    const piece = (u.owner === lastOwner ? "" : `${u.owner}: `) + u.sentence;
    const candidate = parts.length === 0 ? head + piece : `${head}${parts.join(" ")} ${piece}`;
    if (candidate.length > max) {
      // 첫 문장 하나만으로 상한을 넘으면 그 문장만 어절 경계에서 자른다.
      if (parts.length === 0) parts.push(truncateAtWord(piece, max - head.length));
      break;
    }
    parts.push(piece);
    lastOwner = u.owner;
  }
  return (head + parts.join(" ")).trim();
}
