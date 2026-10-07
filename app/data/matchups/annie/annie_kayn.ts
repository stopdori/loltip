// app/data/matchups/annie/annie_kayn.ts
import type { MatchupSummary } from "../_types";

export const annie_kayn: MatchupSummary = {
  champs: ["annie", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 

        "P의 [[STUN]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["P [[STUN]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[STUN]] still applies.", 
        "P [[STUN]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    kayn: {
      ko: ["다르킨 W의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Kayn (Darkin) W [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
