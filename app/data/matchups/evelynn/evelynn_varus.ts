// app/data/matchups/evelynn/evelynn_varus.ts
import type { MatchupSummary } from "../_types";

export const evelynn_varus: MatchupSummary = {
  champs: ["evelynn", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]] \n 단, 바루스 Q는 중단될 때 시전."],
      en: ["W [[CHARM]] can interrupt Varus's Q [[SKILL_CHARGED]]. [[EXIST]] \n However, Varus's Q still fires when interrupted."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
