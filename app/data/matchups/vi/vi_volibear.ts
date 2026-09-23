// app/data/matchups/vi/vi_volibear.ts
import type { MatchupSummary } from "../_types";

export const vi_volibear: MatchupSummary = {
  champs: ["vi", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    vi: {
      ko: ["Q의 [[KNOCKBACK]] / R의 [[AIRBORNE]], [[KNOCKBACK]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 바이 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 바이 Q의 [[KNOCKBACK]], R의 [[SUPPRESS]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
