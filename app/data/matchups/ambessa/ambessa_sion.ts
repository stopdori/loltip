// app/data/matchups/ambessa/ambessa_sion.ts
import type { MatchupSummary } from "../_types";

export const ambessa_sion: MatchupSummary = {
  champs: ["ambessa", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 사이온 Q의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNSTOPPABLE]]로 사이온 Q의 [[SKILL_CHARGED]], R의 [[AIRBORNE]] [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음.", 
      "R의 [[SUPPRESS]]으로 사이온 R의 을 끊을 수 없음.\n단, 다가오는 사이온 R은 암베사 R로 피할 수 있고. \n 멀어지는 사이온 R은 암베사 R의 [[BLINK]]으로 이동하여 몸으로 끊을 수 있음.", 
    ],
      en: ["R [[SUPPRESS]] can interrupt Sion's Q [[SKILL_CHANNEL]].", "R [[UNSTOPPABLE]] can ignore Sion's Q [[SKILL_CHARGED]] and R [[AIRBORNE]] [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends.", "R [[SUPPRESS]] cannot interrupt Sion's R.\nHowever, an incoming Sion R can be dodged with Ambessa's R. \n A departing Sion R can be stopped by moving into its path with Ambessa's R [[BLINK]]."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
