// app/data/matchups/rakan/rakan_volibear.ts
import type { MatchupSummary } from "../_types";

export const rakan_volibear: MatchupSummary = {
  champs: ["rakan", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 볼리베어 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 볼리베어 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[AIRBORNE]], R의 [[CHARM]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
      "R의 [[UNSTOPPABLE]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[CHARM]]은 남아있음."],
      en: [],
    },
  },
};
