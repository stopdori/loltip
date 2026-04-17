// app/data/matchups/amumu/amumu_ksante.ts
import type { MatchupSummary } from "../_types";

export const amumu_ksante: MatchupSummary = {
  champs: ["amumu", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 크산테 일반폼 W, E, R/ 변신폼 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n  \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 크산테의 [[DASH]]을 따라갈 수 있음. \n 단, 크산테 R의 경우 벽넘어까지 따라감.", 
        "아무무 R의 [[STUN]]로 크산테 E의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 크산테 Q3의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로는 크산테 R의 [[SUPPRESS]]을 무시할 수 없음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt K'Sante's base W, E, R and transformed W, E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow K'Sante's [[DASH]]. \n However, for K'Sante's R, Amumu follows through the wall.", "Amumu's R [[STUN]] can interrupt K'Sante's E [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore K'Sante's Q3 [[AIRBORNE]] and continue [[DASH]].", "Amumu's Q [[CC_BUFFER]] cannot ignore K'Sante's R [[SUPPRESS]]."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
