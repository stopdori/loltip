// app/data/interactions/tags_spell.ts
//
// 소환사 주문(점멸, 점화 등) 태그를 한곳에서 관리하는 파일.
// 라벨/설명/색/아이콘/카테고리를 여기서만 정의하고, 각 공용 테이블에 펼쳐 넣는다.
//   - SpellTagId          → tags.ts의 TagId 유니언에 합쳐짐
//   - SPELL_TAG_LABEL     → tags.ts의 TAG_LABEL
//   - SPELL_TAG_DESC      → tags.ts의 TAG_DESC
//   - SPELL_TAG_TONE      → tagTone.ts의 TAG_TONE
//   - SPELL_ICONS         → statIcons.ts의 STAT_ICONS
//   - SPELL_CATEGORY      → tagCategories.ts의 TAG_CATEGORIES
// 아이콘은 DDragon 공식 아이콘(img/spell/<DDragon ID>.png)을 public/spell-icons/에 받아서 쓴다.
// 설명은 DDragon summoner.json(ko_KR / en_US) description 기준.
// (이 파일은 다른 태그 파일을 타입으로만 참조한다 — 순환 import 방지)

import type { Tone } from "./tagTone";
import type { StatIconEntry } from "./statIcons";
import type { CategoryGroup } from "./tagCategories";

export type SpellTagId =
  | "SPELL_FLASH"     // 점멸 (SummonerFlash)
  | "SPELL_IGNITE"    // 점화 (SummonerDot)
  | "SPELL_TELEPORT"  // 순간이동 (SummonerTeleport)
  | "SPELL_HEAL"      // 회복 (SummonerHeal)
  | "SPELL_BARRIER"   // 방어막 (SummonerBarrier)
  | "SPELL_CLEANSE"   // 정화 (SummonerBoost)
  | "SPELL_EXHAUST"   // 탈진 (SummonerExhaust)
  | "SPELL_GHOST"     // 유체화 (SummonerHaste)
  | "SPELL_SMITE";    // 강타 (SummonerSmite)

export const SPELL_TAG_LABEL: Record<SpellTagId, { ko: string; en: string }> = {
  SPELL_FLASH: { ko: "점멸", en: "Flash" },
  SPELL_IGNITE: { ko: "점화", en: "Ignite" },
  SPELL_TELEPORT: { ko: "순간이동", en: "Teleport" },
  SPELL_HEAL: { ko: "회복", en: "Heal" },
  SPELL_BARRIER: { ko: "방어막", en: "Barrier" },
  SPELL_CLEANSE: { ko: "정화", en: "Cleanse" },
  SPELL_EXHAUST: { ko: "탈진", en: "Exhaust" },
  SPELL_GHOST: { ko: "유체화", en: "Ghost" },
  SPELL_SMITE: { ko: "강타", en: "Smite" },
};

export const SPELL_TAG_DESC: Record<SpellTagId, { ko: string; en: string }> = {
  SPELL_FLASH: { ko: "소환사 주문. \n 커서 방향으로 짧은 거리를 순간이동합니다.", en: "Summoner spell. \n Teleports you a short distance toward your cursor." },
  SPELL_IGNITE: { ko: "소환사 주문. \n 대상 적 챔피언에게 지속 고정 피해를 입히고 그동안 체력 회복 효과를 감소시킵니다.", en: "Summoner spell. \n Deals true damage over time to target enemy champion and reduces healing effects on them for the duration." },
  SPELL_TELEPORT: { ko: "소환사 주문. \n 짧은 정신 집중이 끝나면 대상으로 지정할 수 없는 상태가 되고 아군 유닛에게로 이동합니다. \n 강력 순간이동으로 업그레이드되어 이동 속도가 크게 증가합니다.", en: "Summoner spell. \n After a brief channel, become untargetable and travel to an allied unit. \n Upgrades into Unleashed Teleport, which significantly increases travel speed." },
  SPELL_HEAL: { ko: "소환사 주문. \n 자신과 대상 아군 챔피언의 체력을 회복시키고 이동 속도를 증가시킵니다.", en: "Summoner spell. \n Restores Health and grants Move Speed to you and target allied champion." },
  SPELL_BARRIER: { ko: "소환사 주문. \n 잠시 동안 보호막을 얻습니다.", en: "Summoner spell. \n Gain a brief Shield." },
  SPELL_CLEANSE: { ko: "소환사 주문. \n 챔피언에게 걸린 모든 이동 불가와 (제압 및 공중으로 띄우는 효과 제외) 소환사 주문에 의한 해로운 효과를 제거하고 강인함을 증가시킵니다.", en: "Summoner spell. \n Removes all disables (excluding suppression and airborne) and summoner spell debuffs affecting your champion and gives Tenacity." },
  SPELL_EXHAUST: { ko: "소환사 주문. \n 대상 적 챔피언을 둔화시키고 입히는 피해량을 감소시킵니다.", en: "Summoner spell. \n Slows target enemy champion and reduces their damage dealt." },
  SPELL_GHOST: { ko: "소환사 주문. \n 이동 속도가 상승하고 지속시간 동안 유닛과의 충돌을 무시합니다.", en: "Summoner spell. \n Gain Move Speed and ignore unit collision for the duration." },
  SPELL_SMITE: { ko: "소환사 주문. \n 몬스터 또는 미니언에게 고정 피해를 입힙니다.", en: "Summoner spell. \n Deals true damage to a monster or minion." },
};

// 각 주문의 효과 계열에 맞춰 기존 톤을 재사용
export const SPELL_TAG_TONE: Record<SpellTagId, Tone> = {
  SPELL_FLASH: "amber",        // 이동기(순간이동)
  SPELL_IGNITE: "red",         // 고정 피해 + 치감
  SPELL_TELEPORT: "purple",    // 채널링 후 이동
  SPELL_HEAL: "lime",          // 회복 계열(HEAL과 동일)
  SPELL_BARRIER: "white",      // 보호막(SHIELD와 동일)
  SPELL_CLEANSE: "teal",       // CC 해제
  SPELL_EXHAUST: "fuchsia",    // 디버프 계열
  SPELL_GHOST: "sky",          // 이동속도
  SPELL_SMITE: "amber_deep",   // 몬스터 대상 고정 피해
};

const icon = (ddragonId: string): StatIconEntry => ({ icons: [`/spell-icons/${ddragonId}.png`] });

export const SPELL_ICONS: Record<SpellTagId, StatIconEntry> = {
  SPELL_FLASH: icon("SummonerFlash"),
  SPELL_IGNITE: icon("SummonerDot"),
  SPELL_TELEPORT: icon("SummonerTeleport"),
  SPELL_HEAL: icon("SummonerHeal"),
  SPELL_BARRIER: icon("SummonerBarrier"),
  SPELL_CLEANSE: icon("SummonerBoost"),
  SPELL_EXHAUST: icon("SummonerExhaust"),
  SPELL_GHOST: icon("SummonerHaste"),
  SPELL_SMITE: icon("SummonerSmite"),
};

export const SPELL_CATEGORY: CategoryGroup<SpellTagId> = {
  title: { ko: "소환사 주문", en: "Summoner Spells" },
  keys: [
    "SPELL_FLASH", "SPELL_IGNITE", "SPELL_TELEPORT", "SPELL_HEAL", "SPELL_BARRIER",
    "SPELL_CLEANSE", "SPELL_EXHAUST", "SPELL_GHOST", "SPELL_SMITE",
  ],
};
