// app/data/matchups/brand/brand_ekko.ts
import type { MatchupSummary } from "../_types";

export const brand_ekko: MatchupSummary = {
  champs: ["brand", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 브랜드 P의 [[STUN]], R의 [[AIRBORNE]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[STUN]], [[AIRBORNE]]은 남아있음."],
      en: [],
    },
  },
};
