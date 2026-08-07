// app/data/matchups/amumu/amumu_kindred.ts
import type { MatchupSummary } from "../_types";

export const amumu_kindred: MatchupSummary = {
  champs: ["amumu", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 킨드레드 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 킨드레드 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Kindred's Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Kindred's Q [[DASH]].", "R [[STUN]] can interrupt Kindred's Q [[DASH]]."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
