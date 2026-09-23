// app/data/matchups/rell/rell_volibear.ts
import type { MatchupSummary } from "../_types";

export const rell_volibear: MatchupSummary = {
  champs: ["rell", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    rell: {
      ko: ["렐 Q의 [[STUN]], R의 [[GRAB]] / 승마폼 W의 [[AIRBORNE]] / 낙마폼 W [[EMPOWERED]] [[BA]]의 [[GRAB]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 렐 승마폼 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 렐 승마폼 W의 [[AIRBORNE]] / 낙마폼 W [[BA]]의 [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
