// app/data/matchups/chogath/chogath_ekko.ts
import type { MatchupSummary } from "../_types";

export const chogath_ekko: MatchupSummary = {
  champs: ["chogath", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 에코 Q의 [[DASH]], [[BLINK]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 에코 Q의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Ekko's Q [[DASH]] and [[BLINK]].",
        "W [[SILENCE]] cannot interrupt Ekko's Q [[DASH]] and [[BLINK]]. \n However, the [[SILENCE]] still applies."],
    },
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[AIRBORNE]], [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
