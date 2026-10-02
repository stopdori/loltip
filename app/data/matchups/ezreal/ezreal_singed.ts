// app/data/matchups/ezreal/ezreal_singed.ts
import type { MatchupSummary } from "../_types";

export const ezreal_singed: MatchupSummary = {
  champs: ["ezreal", "singed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ezreal: {
      ko: ["E는 [[BLINK]] 판정으로 신지드 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: [""],
    },
    singed: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["이즈리얼 E(비전 이동)의 [[BLINK]]과 신지드 E의 [[GRAB]] 상호작용 [[CLIP:https://www.youtube.com/shorts/mXR2X6kJ4xk]] \n \n 1. 평지에서 이즈리얼 E를 사용할 때 \n 1-1. 이즈리얼 E를 선입력 했을 때 = 신지드 E의 [[GRAB]] 판정이 대부분 우세. \n 1-2. 신지드 E를 선입력 했을 때 = 이즈리얼 E의 [[BLINK]]이 대부분 우세. \n \n 2. 벽넘어 이즈리얼 E를 사용할 때 \n 판정이 들쑥날쑥 해서 정확하지 않음. 이즈리얼 E가 발동하는 위치에 따라 판정이 다른걸로 추측. \n \n 2-1. 이즈리얼 E를 벽넘어로 선입력 했을 때 \n = 신지드 E가 발동하지 않거나, 발동해도 [[GRAB]]을 무시하고 벽 넘어 [[BLINK]]. \n \n 2-2. 신지드 E를 선입력 했을 때 \n = 신지드 E가 발동해도 무시하고 벽 넘어 [[BLINK]]을 하거나 \n = 벽 넘어 [[BLINK]]를 성공한 이즈리얼을 신지드 뒤쪽으로 [[GRAB]]."],
    en: [],
  },
};
