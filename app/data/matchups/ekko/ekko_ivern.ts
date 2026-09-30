// app/data/matchups/ekko/ekko_ivern.ts
import type { MatchupSummary } from "../_types";

export const ekko_ivern: MatchupSummary = {
  champs: ["ekko", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 아이번 Q2의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 아이번 Q2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 아이번 Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[ROOT]], [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
