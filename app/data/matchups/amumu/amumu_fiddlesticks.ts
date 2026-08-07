// app/data/matchups/amumu/amumu_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const amumu_fiddlesticks: MatchupSummary = {
  champs: ["amumu", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q, R의 [[STUN]]로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 피들스틱 Q의 [[FEAR]], E의 [[SILENCE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[FEAR]], [[SILENCE]]은 남아있음."],
      en: ["Q and R [[STUN]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]].", "Q [[CC_BUFFER]] can ignore Fiddlesticks's Q [[FEAR]] and E [[SILENCE]] and continue [[DASH]]. \n However, the [[FEAR]] and [[SILENCE]] still apply."],
    },
    fiddlesticks: {
      ko: [],
      en: [],
    },
  },
};
