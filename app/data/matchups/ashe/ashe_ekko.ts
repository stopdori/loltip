// app/data/matchups/ashe/ashe_ekko.ts
import type { MatchupSummary } from "../_types";

export const ashe_ekko: MatchupSummary = {
  champs: ["ashe", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 애코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ekko's E [[DASH]] or [[BLINK]]. \n However, the [[STUN]] still applies."],
    },
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 애쉬 R의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
