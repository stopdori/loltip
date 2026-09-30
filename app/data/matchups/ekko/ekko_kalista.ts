// app/data/matchups/ekko/ekko_kalista.ts
import type { MatchupSummary } from "../_types";

export const ekko_kalista: MatchupSummary = {
  champs: ["ekko", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 칼리스타 P의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 칼리스타 P의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "E(경직 단계)의 [[CC_BUFFER]]로 칼리스타 R2의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
