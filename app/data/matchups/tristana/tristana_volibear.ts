// app/data/matchups/tristana/tristana_volibear.ts
import type { MatchupSummary } from "../_types";

export const tristana_volibear: MatchupSummary = {
  champs: ["tristana", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    tristana: {
      ko: ["R의 [[KNOCKBACK]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 트리스타나 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 트리스타나 R의 [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
