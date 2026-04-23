// app/data/matchups/azir/azir_poppy.ts
import type { MatchupSummary } from "../_types";

export const azir_poppy: MatchupSummary = {
  champs: ["azir", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: [""],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 아지르 E의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음.", "뽀삐 W의 [[ANTI_DASH]]로 아지르 Q(병사 돌진)를 막을 수 없음."],
      en: [],
    },
  },
};
