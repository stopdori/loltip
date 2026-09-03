// app/data/matchups/hecarim/hecarim_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const hecarim_tahmkench: MatchupSummary = {
  champs: ["hecarim", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 탐켄치 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Tahm Kench's Q [[STUN]] and W [[AIRBORNE]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
};
