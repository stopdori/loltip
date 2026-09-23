// app/data/matchups/ambessa/ambessa_volibear.ts
import type { MatchupSummary } from "../_types";

export const ambessa_volibear: MatchupSummary = {
  champs: ["ambessa", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]].", 
        "R의 [[UNSTOPPABLE]]로 볼리베어 Q의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["R [[SUPPRESS]] can interrupt Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q is [[CDR_RESET]].", "R [[UNSTOPPABLE]] can ignore Volibear's Q [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]]로 암베사 R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]]."
      ],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]]암베사 R의 [[SUPPRESS]]을 볼리베어 R의 [[UNSTOPPABLE]]에 사용하면 \n 암베사가 볼리베어에게 [[BLINK]] 하지만, 볼리베어는 암베사 R을 완전히 무시. (CC, 데미지 모두)"],
    en: [],
  },
};
