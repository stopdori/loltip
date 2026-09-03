// app/data/matchups/hecarim/hecarim_sion.ts
import type { MatchupSummary } from "../_types";

export const hecarim_sion: MatchupSummary = {
  champs: ["hecarim", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 사이온 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 사이온 Q, R의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 로 [[AIRBORNE]]을 무시하면 [[STUN]]은 걸리지 않음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Sion's Q [[SKILL_CHARGED]].",
        "R [[UNSTOPPABLE]] can ignore Sion's Q and R [[AIRBORNE]]. \n However, if [[AIRBORNE]] is ignored via [[UNSTOPPABLE]], the [[STUN]] is not applied."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
