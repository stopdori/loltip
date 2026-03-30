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
      ko: ["아리 E의 [[CHARM]]으로 케인 Q(돌진단계)의 [[DASH]], E(벽 이동)를 끊을 수 있음.", "아리 E의 [[CHARM]]을 케인 Q의 돌진단계에 맞히면, 케인이 베기단계를 발동하지 않음.", "아리 E의 [[CHARM]]으로 케인 W의 [[CAST_COMMIT]]를 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E can interrupt Kayn's Q (dash phase) and E (wall travel)", "If Ahri's E hits Kayn during his Q dash phase, Kayn's slash phase does not activate.", "Ahri's E [[CHARM]] cannot interrupt Kayn's W [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
