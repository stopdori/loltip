// app/data/champPageClientData.ts
//
// 챔피언 페이지(/[locale]/champ/[id])가 클라이언트(ChampClient → SkillTagsPanel/UltCooldownBox)로
// 넘기는 데이터를 서버에서 만든다. champ-embed가 쓰는 getChampClientData(원문 ko/en 그대로)와 달리
// 현재 언어만, 원문 [[TAG]] 토큰 없이 넘긴다:
//  - 스킬 말풍선 문장: 서버에서 DDragon(스킬명·폴백 본문)과 합쳐 완성한 뒤 TokenSegment로 미리 파싱
//    → SSR HTML에 말풍선 본문이 들어가고(호버 전엔 CSS로만 숨김), 페이로드엔 라벨만 남는다.
//  - 노트(스킬 요약·TMI 등): 같은 방식으로 TokenSegment로 미리 파싱
//  - skills/gimmick: 태그 ID 배열은 그대로(태그필 렌더링·태그 호버 상세가 쓰는 키),
//    phase 라벨 등 { ko, en } 쌍은 현재 언어만 남긴다
//  - 빼는 것: skillTooltip·notes 원문(ko/en), placeholderOverrides(DDragon 폴백 보정표 —
//    서버에서 이미 적용했으므로, 서버가 말풍선을 못 만든 스킬이 있을 때만 클라이언트 폴백용으로 넣는다)
import "server-only";
import { CHAMPS } from "./champs/_index";
import type { ChampData, ChampNotes, NoteBlock, SkillKey } from "./interactions/types";
import { CHAMP_FORMS, hasForms } from "./interactions/forms";
import { toTokenSegments, type TokenSegment } from "./interactions/parseTagTokens";
import { getChampSpells, toDdragonId, type ChampSpells } from "@/app/lib/ddragon";
import { buildSkillTipText } from "@/app/lib/skillTipText";
import type { ChampClientData, PrebuiltNotes } from "./champClientData";

type Lang = "ko" | "en";

const SKILL_KEYS: SkillKey[] = ["P", "Q", "W", "E", "R"];
// SkillTagsPanel의 FORM_DATA_KEYS와 같은 매핑(폼 탭 인덱스 → 데이터 키)
const FORM_DATA_KEYS = ["base", "alt", "alt2", "alt3", "alt4"] as const;
// DDragon이 느리거나 죽어 있어도 페이지 응답을 붙잡지 않는다 — 못 받으면 클라이언트 폴백에 맡긴다.
const DDRAGON_TIMEOUT_MS = 3000;

async function fetchSpells(champId: string, lang: Lang): Promise<ChampSpells | null> {
  try {
    return await Promise.race([
      getChampSpells(toDdragonId(champId), lang === "ko" ? "ko_KR" : "en_US"),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), DDRAGON_TIMEOUT_MS)),
    ]);
  } catch {
    return null;
  }
}

// { ko, en } 쌍(값이 문자열/배열)을 현재 언어만 남긴 { [lang] } 으로 바꾼다. 나머지 구조는 그대로.
function pickLang<T>(value: T, lang: Lang): T {
  if (Array.isArray(value)) return value.map((v) => pickLang(v, lang)) as T;
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj);
    if (keys.length === 2 && "ko" in obj && "en" in obj) return { [lang]: obj[lang] } as T;
    return Object.fromEntries(keys.map((k) => [k, pickLang(obj[k], lang)])) as T;
  }
  return value;
}

const toSegLines = (lines: string[] | undefined, lang: Lang) => (lines ?? []).map((n) => toTokenSegments(n, lang));

function buildNotes(notes: NoteBlock | ChampNotes | undefined, lang: Lang): PrebuiltNotes | undefined {
  if (!notes) return undefined;
  if ("ko" in notes) return { flat: toSegLines(notes[lang], lang) };
  // vision 노트는 시야 탭(VISION_TAB_ENABLED=false)이 꺼져 있어 화면에 안 나오므로 넣지 않는다.
  return {
    skill: {
      note3: toSegLines(notes.skill?.note3?.[lang], lang),
      note1: toSegLines(notes.skill?.note1?.[lang], lang),
      note2: toSegLines(notes.skill?.note2?.[lang], lang),
    },
    gimmick: toSegLines(notes.gimmick?.[lang], lang),
  };
}

export async function getChampPageClientData(champId: string, lang: Lang): Promise<ChampClientData | null> {
  const champ = CHAMPS[champId as keyof typeof CHAMPS] as ChampData | undefined;
  if (!champ) return null;

  const ddragon = await fetchSpells(champId, lang);
  const formed = hasForms(champId);
  const formCount = formed ? CHAMP_FORMS[champId].length : 1;

  let needsClientFallback = false;
  const tipSegments: Partial<Record<SkillKey, TokenSegment[]>>[] = [];
  for (let i = 0; i < formCount; i++) {
    const form = FORM_DATA_KEYS[i] ?? "base";
    const tips: Partial<Record<SkillKey, TokenSegment[]>> = {};
    for (const k of SKILL_KEYS) {
      const comboLabel = CHAMP_FORMS[champId]?.[i]?.skillLabels?.[k];
      const text = buildSkillTipText({ k, form, formed, comboLabel, lang, champ, ddragon });
      if (text) tips[k] = toTokenSegments(text, lang);
      else needsClientFallback = true;
    }
    tipSegments.push(tips);
  }

  return {
    skills: pickLang(champ.skills, lang),
    ...(champ.gimmick && { gimmick: pickLang(champ.gimmick, lang) }),
    ...(champ.ultCooldown && { ultCooldown: champ.ultCooldown }),
    ...(needsClientFallback && champ.placeholderOverrides && { placeholderOverrides: champ.placeholderOverrides }),
    tipSegments,
    noteSegments: buildNotes(champ.notes, lang),
  };
}
