// app/data/matchups/bard/bard_samira.ts
import type { MatchupSummary } from "../_types";

export const bard_samira: MatchupSummary = {
  champs: ["bard", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 사미라 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "바드 R(존야)를 사미라 W([[WINDSHIELD]])에 맞히면 존야에 걸림. 사미라 W도 즉시 해제."],
      en: [""],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
