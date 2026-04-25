// app/data/matchups/bard/bard_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const bard_tahmkench: MatchupSummary = {
  champs: ["bard", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]], R(존야)로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: [],
    },
    tahmkench: {
      ko: ["탐켄치 R로 아군을 삼켰을 때 바드 R(존야)에 맞으면, 정상적으로 뱉을 수 있음.", 
        "탐켄치 R로 적군을 삼켰을 때 바드 R(존야)에 맞으면, R2로 뱉을 수 없고 지속시간이 끝나면 자동적으로 뱉을 수 있음."],
      en: [],
    },
  },
};
