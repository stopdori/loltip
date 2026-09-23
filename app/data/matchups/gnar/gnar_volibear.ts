// app/data/matchups/gnar/gnar_volibear.ts
import type { MatchupSummary } from "../_types";

export const gnar_volibear: MatchupSummary = {
  champs: ["gnar", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gnar: {
      ko: ["메가폼 W의 [[STUN]] / R의 [[KNOCKBACK]], [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 나르 미니폼 E / 메가폼 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 나르 메가폼 W의 [[STUN]], R의 [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 W의 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
