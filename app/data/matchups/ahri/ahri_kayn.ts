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
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 케인 / 그암 / 다르킨 Q(돌진 단계)의 [[DASH]], E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]. \n 단, Q의 돌진 단계에 맞히면, 베기 단계가 발동하지 않음. \n 단, E는 즉시 벽에서 가장 가까운 땅으로 이동."],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Kayn's Q (dash phase) and E (wall traversal) [[SKILL_CHANNEL]] [[DASH]]. [[EXIST]] \n However, Kayn's E is immediately ejected to the nearest ground next to the wall.", "If E [[CHARM]] hits Kayn during Q's dash phase, Kayn will not execute the slash phase."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
