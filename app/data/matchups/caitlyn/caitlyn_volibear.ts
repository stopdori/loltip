// app/data/matchups/caitlyn/caitlyn_volibear.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_volibear: MatchupSummary = {
  champs: ["caitlyn", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 볼리베어 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]과 헤드샷은 남아있음.", 
        "활성화된 W([[TRAP]])의 [[ROOT]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."
      ],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Volibear's Q [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    volibear: {
      ko: ["Q의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "Q의 [[STUN]]로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[UNSTOPPABLE]]로 케이틀린 W의 [[ROOT]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
