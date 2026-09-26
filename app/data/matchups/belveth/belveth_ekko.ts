// app/data/matchups/belveth/belveth_ekko.ts
import type { MatchupSummary } from "../_types";

export const belveth_ekko: MatchupSummary = {
  champs: ["belveth", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 에코 E의 [[DASH]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 에코 W의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: [""],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 벨베스 Q의 [[DASH]], R의 [[MOBILITY]]를 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 벨베스 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "W의 [[STUN]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "E(경직 단계)의 [[CC_BUFFER]]로 벨베스 W의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]]은 남아있음."],
      en: [],
    },
  },
};
