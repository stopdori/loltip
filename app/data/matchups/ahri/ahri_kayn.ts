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
      ko: ["E의 [[CHARM]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]] \n 단, Q는 [[CHARM]]의 [[KNOCKDOWN]]으로 [[DASH]]을 끊는 것. \n 단, Q는 돌진 단계에 맞히면, 베기 단계가 발동하지 않음."],
      en: ["E [[CHARM]] can interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]] and E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, Q's [[DASH]] is interrupted by the [[CHARM]]'s [[KNOCKDOWN]]. \n However, if Q is hit during its dash phase, the slash phase does not activate."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
