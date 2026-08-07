// app/data/matchups/amumu/amumu_yone.ts
import type { MatchupSummary } from "../_types";

export const amumu_yone: MatchupSummary = {
  champs: ["amumu", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 요네 Q3, E1, E2, R을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 요네 Q3, E1, E2, R의 [[DASH]]을 따라갈 수 있음. \n 단, 요네 E2를 따라갈 수 있지만, 아무무 Q의 최대(거리? 시간?)까지 [[DASH]].", 
        "R의 [[STUN]]로 요네 Q3, E1의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 요네 Q3, R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Yone's Q3, E1, E2, and R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Yone's Q3, E1, E2, and R [[DASH]]. \n However, Amumu can follow Yone's E2, but only up to Q's maximum (distance? time?).", "R [[STUN]] can interrupt Yone's Q3 and E1 [[DASH]].", "Q [[CC_BUFFER]] can ignore Yone's Q3 and R [[AIRBORNE]] and continue [[DASH]]."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
