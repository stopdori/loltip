// app/data/matchups/ahri/ahri_poppy.ts
import type { MatchupSummary } from "../_types";

export const ahri_poppy: MatchupSummary = {
  champs: ["ahri", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Poppy's E [[DASH]] and R [[SKILL_CHARGED]]."],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 아리 R의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음."],
      en: ["Poppy's W [[ANTI_DASH]] can block Ahri's R [[DASH]] and apply a [[GROUNDED]] debuff."],
    },
  },
};
