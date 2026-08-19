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
      ko: ["P의 [[STUN]]로 케인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 케인 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Kayn's Q [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Kayn's E [[SKILL_CHANNEL]]."],
    },
    kayn: {
      ko: ["다르킨 W의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Kayn (Darkin) W [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
