// app/data/matchups/amumu/amumu_volibear.ts
import type { MatchupSummary } from "../_types";

export const amumu_volibear: MatchupSummary = {
  champs: ["amumu", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 볼리베어 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 볼리베어 R의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 Q, R의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]].", 
        "아무무 Q의 [[CC_BUFFER]]로 볼리베어 Q의 [[STUN]]을 무시하고 [[DASH]]할 수 있음.\n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Volibear's R [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Volibear's R [[DASH]].", "Amumu's Q and R [[STUN]] can interrupt Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q is [[CDR_RESET]].", "Amumu's Q [[CC_BUFFER]] can ignore Volibear's Q [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
