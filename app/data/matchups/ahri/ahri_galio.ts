// app/data/matchups/ahri/ahri_galio.ts
import type { MatchupSummary } from "../_types";

export const ahri_galio: MatchupSummary = {
  champs: ["ahri", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 갈리오 E(돌진단계), R(시전집중)을 끊을 수 있음"],
      en: [""],
    },
    galio: {
      ko: ["갈리오 E(후진단계)에 아리 E를 맞으면 [[CHARM]]을 무시하고 이동할 수 있음. 단, [[CHARM]]은 남아있음", "갈리오 W의 [[TAUNT]]로 아리 R을 끊을 수 없음. 단, [[TAUNT]]은 남아있음", "갈리오 E, R의 [[AIRBORNE]]으로 아리 R을 끊을 수 있음"],
      en: [],
    },
  },
};
