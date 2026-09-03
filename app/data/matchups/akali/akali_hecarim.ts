// app/data/matchups/akali/akali_hecarim.ts
import type { MatchupSummary } from "../_types";

export const akali_hecarim: MatchupSummary = {
  champs: ["akali", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 헤카림 E, R의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Hecarim's E and R [[DASH]]."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 아칼리 E, E2, R, R2 를 끊을 수 있음"],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Akali's E, E2, R and R2"],
    },
  },
};
