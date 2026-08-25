// app/data/matchups/camille/camille_vladimir.ts
import type { MatchupSummary } from "../_types";

export const camille_vladimir: MatchupSummary = {
  champs: ["camille", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 블라디미르 평타, Q, W, E, R을 피할 수 있음. \n 단, R은 한 번 적중했다면 [[DEBUFF]]가 사라지면서 입히는 피해를 피할 수 없음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Vladimir's E [[SKILL_CHARGED]].",
        "Camille's R [[UNTARGETABLE]] can dodge Vladimir's auto-attacks, Q, W, E, and R. \n However, once R has already landed, the damage dealt when the [[DEBUFF]] expires cannot be dodged."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
