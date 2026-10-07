// app/data/interactions/interruptOverrides.ts
//
// 기본 규칙(ccInteractions.ts)에서 벗어나는 스킬만 등록. 챔피언 파일의 기믹
// 태그(DASH/SKILL_CHANNEL 등)는 그대로 유지하고, 이 파일은 예외만 담당.
// 출처: LoL 위키 Dash / Channel 문서.

import type { TagId } from "./tags";

type CCRef = TagId; // IMMOBILIZING 같은 그룹 태그 포함

export type InterruptOverride = {
  champ: string;             // app/data/champs/ 파일명과 같은 id
  slot: "P" | "Q" | "W" | "E" | "R";
  phase?: string;            // 필요할 때만
  kind: "DASH" | "SKILL_CHANNEL" | "SKILL_CHANNEL_MOVEMENT" | "IGNORE_TERRAIN";
  charged?: boolean;         // 충전형 여부
  also?: CCRef[];            // 기본 규칙 외에 추가로 끊는 CC
  except?: CCRef[];          // 기본 규칙상 끊겨야 하지만 안 끊기는 CC
  uninterruptible?: boolean; // CC로 끊기지 않음
  note?: { ko: string; en: string };
  source: string;            // 위키 문서/섹션명
};

const CC_IMMUNE_NOTE = { ko: "채널링 중 CC 면역", en: "CC immune while channeling" };

export const INTERRUPT_OVERRIDES: InterruptOverride[] = [
  // 1) 대시 — 이동 불가 계열/변이에도 끊김
  { champ: "akshan",  slot: "E", phase: "E 회전", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },
  { champ: "camille", slot: "E", phase: "E1 벽 돌진 단계", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"],
    note: { ko: "위키 목록 기준 Hookshot(E1). E2 벽 돌진의 이동불가 CC 끊김 여부는 미확인", en: "Per wiki list: Hookshot (E1). Whether E2 Wall Dive is interrupted by immobilizing CC is unverified" }, source: "Wiki: Dash" },
  { champ: "kalista", slot: "P", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },
  { champ: "rakan",   slot: "W", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], except: ["SLEEP"],
    note: { ko: "수면에는 넉다운되지 않음(위키상 버그)", en: "Not knocked down by sleep (bug per wiki)" }, source: "Wiki: Dash" },
  { champ: "rakan",   slot: "E", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },
  { champ: "yasuo",   slot: "E", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },
  { champ: "yuumi",   slot: "W", phase: "W", kind: "DASH", also: ["IMMOBILIZING", "POLYMORPH"], source: "Wiki: Dash" },

  // 2) 이동형 채널링
  { champ: "fiddlesticks", slot: "R", phase: "R 시전집중", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "galio",        slot: "R", phase: "시전집중", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "kayn",         slot: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "naafiri",      slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "nunu",         slot: "W", phase: "W", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "pantheon",     slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "shen",         slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "sion",         slot: "R", kind: "SKILL_CHANNEL_MOVEMENT", uninterruptible: true, note: CC_IMMUNE_NOTE, source: "Wiki: Channel" },
  { champ: "tahmkench",    slot: "W", phase: "W", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "taliyah",      slot: "R", phase: "R2", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "twistedfate",  slot: "R", phase: "R2", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "ryze",         slot: "R", phase: "R", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "vi",           slot: "Q", kind: "SKILL_CHANNEL_MOVEMENT", charged: true, source: "Wiki: Channel" },
  { champ: "warwick",      slot: "Q", phase: "Q 길게", kind: "SKILL_CHANNEL_MOVEMENT", charged: true, source: "Wiki: Channel" },
  { champ: "yuumi",        slot: "W", phase: "밀착", kind: "SKILL_CHANNEL_MOVEMENT", source: "Wiki: Channel" },
  { champ: "zac",          slot: "E", phase: "E 차징", kind: "SKILL_CHANNEL_MOVEMENT", charged: true, source: "Wiki: Channel" },

  // 3) CC로 끊기지 않는 채널링
  { champ: "briar",  slot: "E", kind: "SKILL_CHANNEL", charged: true, uninterruptible: true, source: "Wiki: Channel" },
  { champ: "irelia", slot: "W", phase: "W 차징", kind: "SKILL_CHANNEL", charged: true, uninterruptible: true, source: "Wiki: Channel" },
  { champ: "ksante", slot: "W", kind: "SKILL_CHANNEL", charged: true, uninterruptible: true, source: "Wiki: Channel" },
  { champ: "pantheon", slot: "E", phase: "E / E 강화", kind: "SKILL_CHANNEL", uninterruptible: true, source: "Wiki: Channel" },
  { champ: "urgot",  slot: "R", phase: "R2", kind: "SKILL_CHANNEL", uninterruptible: true, source: "Wiki: Channel" },

  // 4) 충전형 (1~3에 없는 스킬만)
  { champ: "aurelionsol", slot: "Q", phase: "Q", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "galio",       slot: "W", phase: "도발", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "pantheon",    slot: "Q", phase: "Q 길게", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "poppy",       slot: "R", phase: "R 길게", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "pyke",        slot: "Q", phase: "Q 길게", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "sion",        slot: "Q", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "varus",       slot: "Q", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "viego",       slot: "W", kind: "SKILL_CHANNEL_MOVEMENT", charged: true,
    note: { ko: "위키 이동형 채널링 목록에는 없으나 실제로 속박에 충전이 끊김(직접 확인)", en: "Not in the wiki's movement channel list, but the charge is interrupted by root (verified in-game)" },
    source: "In-game test (Maokai R root interrupts the charge); not listed in wiki movement channels" },
  { champ: "vladimir",    slot: "E", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },
  { champ: "xerath",      slot: "Q", phase: "Q 충전", kind: "SKILL_CHANNEL", charged: true, source: "Wiki: Channel" },

  // 5) 지형 통과([[IGNORE_TERRAIN]]) — 기본 규칙은 이동불가(IMMOBILIZING)에 끊김.
  //    스몰더 E는 기본 규칙 그대로라 등록하지 않음.
  { champ: "kayn",    slot: "E", kind: "IGNORE_TERRAIN", also: ["POLYMORPH"], except: ["SLEEP"],
    note: { ko: "변이에도 끊김. 수면에는 끊기지 않음(위키상 버그)", en: "Also interrupted by polymorph. Not interrupted by sleep (bug per wiki)" }, source: "Wiki: Kayn (Shadow Step)" },
  { champ: "skarner", slot: "E", phase: "E", kind: "IGNORE_TERRAIN", also: ["GROUNDED", "SILENCE", "POLYMORPH"],
    note: { ko: "이동 방해·시전 방해 CC(침묵 등)에도 끊김", en: "Also interrupted by grounded and cast-inhibiting CC (silence, etc.)" }, source: "Wiki: Skarner (Ixtal's Impact)" },
];
