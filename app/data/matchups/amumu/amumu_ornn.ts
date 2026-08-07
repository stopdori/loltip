// app/data/matchups/amumu/amumu_ornn.ts
import type { MatchupSummary } from "../_types";

export const amumu_ornn: MatchupSummary = {
  champs: ["amumu", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 오른 E, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 오른의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 오른 E, R2의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 오른 Q, E, R2의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Ornn's E and R2 [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Ornn's [[DASH]].", "R [[STUN]] can interrupt Ornn's E and R2 [[DASH]].", "Q [[CC_BUFFER]] can ignore Ornn's Q, E, and R2 [[AIRBORNE]] and continue [[DASH]]."],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
