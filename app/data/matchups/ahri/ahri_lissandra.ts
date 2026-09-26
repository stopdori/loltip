// app/data/matchups/ahri/ahri_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ahri_lissandra: MatchupSummary = {
  champs: ["ahri", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아리 R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아리 R의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "아리 E의 [[CHARM]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["Lissandra's W [[ROOT]] and R [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[ROOT]] and [[STUN]] still apply.", "If Ahri's E [[CHARM]] hits Lissandra after she uses E1, she cannot use E2."],
    },
  },
};
