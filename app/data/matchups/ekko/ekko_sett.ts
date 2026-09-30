// app/data/matchups/ekko/ekko_sett.ts
import type { MatchupSummary } from "../_types";

export const ekko_sett: MatchupSummary = {
  champs: ["ekko", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 세트 R의 [[DASH]]을 따라갈 수 있음. [[EXIST]] \n 단, 에코가 끝까지 따라가지 않고 충돌하면 정지.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 세트 E의 [[GRAB]], [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[GRAB]], [[STUN]]은 남아있음.", 
      "E(경직 단계)의 [[CC_BUFFER]]로 세트 R의 [[SUPPRESS]]을 무시할 수 없음. [[NOT_EXIST]]"],
      en: [""],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
