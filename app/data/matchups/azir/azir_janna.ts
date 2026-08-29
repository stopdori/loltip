// app/data/matchups/azir/azir_janna.ts
import type { MatchupSummary } from "../_types";

export const azir_janna: MatchupSummary = {
  champs: ["azir", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Janna's R [[SKILL_CHANNEL]]."],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 아지르 E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Azir's E [[DASH]]."],
    },
  },
};
