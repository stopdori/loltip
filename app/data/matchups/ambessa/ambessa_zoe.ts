// app/data/matchups/ambessa/ambessa_zoe.ts
import type { MatchupSummary } from "../_types";

export const ambessa_zoe: MatchupSummary = {
  champs: ["ambessa", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 조이 E의 [[SLEEP]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SLEEP]]은 남아있음.", 
        "조이 R로 돌아가는 곳에 암베사 R을 사용하면 조이가 도망가기 힘듬."],
      en: ["R [[UNSTOPPABLE]] can ignore Zoe's E [[SLEEP]]. \n However, [[SLEEP]] remains after [[UNSTOPPABLE]] ends.", "Using Ambessa's R at the location Zoe returns to after R makes it difficult for Zoe to escape."],
    },
    zoe: {
      ko: [],
      en: [],
    },
  },
};
