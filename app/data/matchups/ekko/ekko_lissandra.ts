// app/data/matchups/ekko/ekko_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ekko_lissandra: MatchupSummary = {
  champs: ["ekko", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["R [[STUN]]의 [[KNOCKDOWN]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "W의 [[ROOT]]으로 에코 E(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]], R [[STUN]]의 [[KNOCKDOWN]]으로 에코 E(평타)의 [[BLINK]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]], [[STUN]]은 남아있음.", 
      "에코 W의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
