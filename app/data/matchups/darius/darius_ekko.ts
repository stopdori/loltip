// app/data/matchups/darius/darius_ekko.ts
import type { MatchupSummary } from "../_types";

export const darius_ekko: MatchupSummary = {
  champs: ["darius", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    darius: {
      ko: ["E의 [[GRAB]]으로 에코 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[GRAB]] can interrupt Ekko's E [[DASH]]."],
    },
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 다리우스 E의 [[GRAB]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[GRAB]]([[AIRBORNE]])은 남아있음."],
      en: [],
    },
  },
};
