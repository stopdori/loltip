// app/data/matchups/quinn/quinn_volibear.ts
import type { MatchupSummary } from "../_types";

export const quinn_volibear: MatchupSummary = {
  champs: ["quinn", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    quinn: {
      ko: ["E의 [[KNOCKBACK]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 퀸 E의 [[KNOCKBACK]]을 무시할 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
