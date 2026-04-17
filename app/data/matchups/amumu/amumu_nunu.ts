// app/data/matchups/amumu/amumu_nunu.ts
import type { MatchupSummary } from "../_types";

export const amumu_nunu: MatchupSummary = {
  champs: ["amumu", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 누누 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 누누 W의 [[AIRBORNE]], E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Nunu's W and R [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Nunu's W [[AIRBORNE]] and E [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
