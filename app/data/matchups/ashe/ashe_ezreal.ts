// app/data/matchups/ashe/ashe_ezreal.ts
import type { MatchupSummary } from "../_types";

export const ashe_ezreal: MatchupSummary = {
  champs: ["ashe", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 이즈리얼 E의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ezreal's E [[BLINK]]. \n However, the [[STUN]] still applies."],
    },
    ezreal: {
      ko: ["E의 [[CC_BUFFER]]로 애쉬 R의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
