// app/data/matchups/evelynn/evelynn_janna.ts
import type { MatchupSummary } from "../_types";

export const evelynn_janna: MatchupSummary = {
  champs: ["evelynn", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] can interrupt Janna's R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]]."],
    },
  },
};
