// app/data/matchups/aatrox/aatrox_volibear.ts
import type { MatchupSummary } from "../_types";

export const aatrox_volibear: MatchupSummary = {
  champs: ["aatrox", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: ["Q [[AIRBORNE]] and W [[GRAB]] can interrupt Volibear's Q.\nNote: Volibear's Q [[CDR_RESET]] on interrupt."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."
      ],
      en: [],
    },
  },
};
