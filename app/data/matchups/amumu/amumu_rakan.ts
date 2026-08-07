// app/data/matchups/amumu/amumu_rakan.ts
import type { MatchupSummary } from "../_types";

export const amumu_rakan: MatchupSummary = {
  champs: ["amumu", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 라칸 W, E의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 무시하고 [[DASH]]할 수 있음 \n 단, [[CHARM]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Rakan's W and E [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Rakan's W and E [[DASH]].", "R [[STUN]] can interrupt Rakan's W and E [[DASH]].", "Q [[CC_BUFFER]] can ignore Rakan's W [[AIRBORNE]] and R [[CHARM]] and continue [[DASH]]. \n However, the [[CHARM]] still applies."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
