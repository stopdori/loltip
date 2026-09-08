export type SpellId =
  | "FLASH" | "TELEPORT" | "IGNITE" | "EXHAUST" | "CLEANSE"
  | "GHOST" | "BARRIER" | "SPELL_HEAL" | "SMITE" | "RECALL";

export const SPELL_LABEL: Record<SpellId, { ko: string; en: string }> = {
  FLASH:    { ko: "점멸", en: "Flash" },
  TELEPORT: { ko: "텔레포트", en: "Teleport" },
  IGNITE:   { ko: "점화", en: "Ignite" },
  EXHAUST:  { ko: "탈진", en: "Exhaust" },
  CLEANSE:  { ko: "정화", en: "Cleanse" },
  GHOST:    { ko: "유체화", en: "Ghost" },
  BARRIER:  { ko: "방어막", en: "Barrier" },
  SPELL_HEAL: { ko: "회복", en: "Heal" },
  SMITE:    { ko: "강타", en: "Smite" },
  RECALL:   { ko: "귀환", en: "Recall" },
};

export const SPELL_DESC: Record<SpellId, { ko: string; en: string }> = {
  FLASH:    { ko: "짧은 거리를 순간이동함.", en: "Teleports a short distance." },
  TELEPORT: { ko: "몇 초간 채널링 후 아군 유닛/건물 근처로 이동함.", en: "Channels for a few seconds, then teleports to a target allied unit or structure." },
  IGNITE:   { ko: "적 챔피언에게 고정 피해를 지속적으로 입히고 회복 효과를 감소시킴.", en: "Deals periodic true damage to an enemy champion and applies healing reduction." },
  EXHAUST:  { ko: "적 챔피언을 둔화시키고 이동속도, 가하는 피해량을 감소시킴.", en: "Slows an enemy champion and reduces their damage dealt." },
  CLEANSE:  { ko: "자신에게 걸린 대부분의 CC 효과와 그로 인한 둔화를 해제함.", en: "Removes most crowd control effects and their associated slows from the caster." },
  GHOST:    { ko: "일정 시간 동안 이동속도가 증가하고 유닛을 통과할 수 있게 됨.", en: "Increases movement speed and allows passing through units for a duration." },
  BARRIER:  { ko: "짧은 시간 동안 보호막을 부여함.", en: "Grants a shield for a short duration." },
  SPELL_HEAL: { ko: "자신과 대상 아군 챔피언의 체력을 회복시키고 이동속도를 증가시킴.", en: "Restores health to the caster and a target ally, and grants bonus movement speed." },
  SMITE:    { ko: "정글 몬스터 또는 특정 적 유닛에게 고정 피해를 입힘.", en: "Deals true damage to a jungle monster or certain enemy units." },
  RECALL:   { ko: "몇 초간 채널링 후 기지로 귀환함. 이동기로 분류되어 관련 CC의 영향을 받음.", en: "Channels for a few seconds, then returns to the base. Classified as a movement action for CC purposes." },
};
