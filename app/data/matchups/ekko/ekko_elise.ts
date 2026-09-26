// app/data/matchups/ekko/ekko_elise.ts
import type { MatchupSummary } from "../_types";

export const ekko_elise: MatchupSummary = {
  champs: ["ekko", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 엘리스 거미폼 Q의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 엘리스 인간폼 E의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]]은 남아있음."],
      en: [""],
    },
    elise: {
      ko: [],
      en: [],
    },
  },
};
