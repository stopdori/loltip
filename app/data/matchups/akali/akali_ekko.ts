// app/data/matchups/akali/akali_ekko.ts
import type { MatchupSummary } from "../_types";

export const akali_ekko: MatchupSummary = {
  champs: ["akali", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 에코 E의 [[DASH]] [[BLINK]], R의 [[BLINK]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Ekko's E [[DASH]] [[BLINK]] and R [[BLINK]]."],
    },
    ekko: {
      ko: ["E(순간이동 단계)의 [[HOMING]] [[BLINK]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 따라갈 수 있음. [[EXIST]]", 
        "W의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음." ],
      en: [],
    },
  },
};
