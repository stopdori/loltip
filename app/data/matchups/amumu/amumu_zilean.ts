// app/data/matchups/amumu/amumu_zilean.ts
import type { MatchupSummary } from "../_types";

export const amumu_zilean: MatchupSummary = {
  champs: ["amumu", "zilean"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 질리언 Q(2스택)의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q is affected by Zilean's Q (2 stacks) [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    zilean: {
      ko: [],
      en: [],
    },
  },
};
