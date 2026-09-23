// app/data/matchups/alistar/alistar_volibear.ts
import type { MatchupSummary } from "../_types";

export const alistar_volibear: MatchupSummary = {
  champs: ["alistar", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]].",
         "R의 [[CC_CLEANSE]]로 볼리베어 Q의 [[STUN]] / E, R의 [[SLOW]]를 해제할 수 있음."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q is [[CDR_RESET]].", "R [[CC_CLEANSE]] can cleanse Volibear's Q [[STUN]], E and R [[SLOW]]."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 E의 [[STUN]]은 남아있음."
      ],
      en: [],
    },
  },
};
