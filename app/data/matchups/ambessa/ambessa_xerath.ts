// app/data/matchups/ambessa/ambessa_xerath.ts
import type { MatchupSummary } from "../_types";

export const ambessa_xerath: MatchupSummary = {
  champs: ["ambessa", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 제라스 Q의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 제라스 E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Xerath's Q [[SKILL_CHARGED]] and R [[SKILL_CHANNEL]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Xerath's E [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    xerath: {
      ko: [],
      en: [],
    },
  },
};
