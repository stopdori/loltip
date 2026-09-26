// app/data/matchups/lissandra/lissandra_pyke.ts
import type { MatchupSummary } from "../_types";

export const lissandra_pyke: MatchupSummary = {
  champs: ["lissandra", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 파이크 Q의 [[SKILL_CHARGED]], E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 파이크 Q의 [[SKILL_CHARGED]], E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "파이크 Q의 [[GRAB]], E의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
