// app/data/matchups/lissandra/lissandra_rakan.ts
import type { MatchupSummary } from "../_types";

export const lissandra_rakan: MatchupSummary = {
  champs: ["lissandra", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 라칸 W, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
