// app/data/matchups/draven/draven_ekko.ts
import type { MatchupSummary } from "../_types";

export const draven_ekko: MatchupSummary = {
  champs: ["draven", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 에코 E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Ekko's E [[DASH]]."],
    },
    ekko: {
      ko: ["E(경직 단계)의 [[CC_BUFFER]]로 드레이븐 E의 [[KNOCKBACK]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[BLINK]] 종료 후 [[KNOCKBACK]]([[AIRBORNE]])은 남아있음."],
      en: [],
    },
  },
};
