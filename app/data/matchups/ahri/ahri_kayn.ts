// app/data/matchups/ahri/ahri_kayn.ts
import type { MatchupSummary } from "../_types";

export const ahri_kayn: MatchupSummary = {
  champs: ["ahri", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 케인 Q(돌진단계)의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CHARM]]을 케인 Q의 돌진단계에 맞히면, 케인이 베기단계를 발동하지 않음."],
      en: ["E [[CHARM]] can interrupt Kayn's Q (dash phase) [[DASH]] and E [[SKILL_CHANNEL]].", "If E [[CHARM]] hits Kayn during Q's dash phase, Kayn will not execute the slash phase."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
