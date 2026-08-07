// app/data/matchups/amumu/amumu_fiora.ts
import type { MatchupSummary } from "../_types";

export const amumu_fiora: MatchupSummary = {
  champs: ["amumu", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["Q의 [[STUN]]로 피오라 Q의 [[DASH]]를 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 피오라 Q의 [[DASH]]을 따라갈 수 있음.", 
        "R의 [[STUN]]로 피오라 Q의 [[DASH]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 피오라 W의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[STUN]] cannot interrupt Fiora's Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Fiora's Q [[DASH]].", "R [[STUN]] can interrupt Fiora's Q [[DASH]].", "Q [[CC_BUFFER]] can ignore Fiora's W [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    fiora: {
      ko: [],
      en: [],
    },
  },
};
