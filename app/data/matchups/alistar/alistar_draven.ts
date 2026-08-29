// app/data/matchups/alistar/alistar_draven.ts
import type { MatchupSummary } from "../_types";

export const alistar_draven: MatchupSummary = {
  champs: ["alistar", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 드레이븐 E의 [[SLOW]], [[AIRBORNE]]을 해제할 수 있음."],
      en: ["R [[CC_CLEANSE]] can cleanse Draven's E [[SLOW]] and [[AIRBORNE]]."],
    },
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Alistar's W [[DASH]]."],
    },
  },
};
