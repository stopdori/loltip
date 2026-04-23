// app/data/matchups/azir/azir_gnar.ts
import type { MatchupSummary } from "../_types";

export const azir_gnar: MatchupSummary = {
  champs: ["azir", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 나르 미니폼 E의 [[DASH]] / 메가폼 E의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    gnar: {
      ko: ["나르 메가폼 R의 [[ST_CONDITIONAL]] [[STUN]]은 상대편 아지르 R의 [[TERRAIN]]에는 발동하지 않고, 같은팀 아지르 R의 [[TERRAIN]]에는 발동."],
      en: [],
    },
  },
};
