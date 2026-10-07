// app/data/matchups/ashe/ashe_kayn.ts
import type { MatchupSummary } from "../_types";

export const ashe_kayn: MatchupSummary = {
  champs: ["ashe", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 

        "R의 [[STUN]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["R [[STUN]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[STUN]] still applies.", 
        "R [[STUN]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
