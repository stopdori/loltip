// app/data/matchups/mordekaiser/mordekaiser_volibear.ts
import type { MatchupSummary } from "../_types";

export const mordekaiser_volibear: MatchupSummary = {
  champs: ["mordekaiser", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mordekaiser: {
      ko: ["E의 [[GRAB]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]]."],
      en: [""],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 모데카이저 E의 [[GRAB]], R의 [[BANISH]]을 무시할 수 있음. [[EXIST]] \n 즉, 모데카이저 R의 죽음의 세계로 가지 않음. R의 [[COOLDOWN]]은 소모."],
      en: [],
    },
  },
};
