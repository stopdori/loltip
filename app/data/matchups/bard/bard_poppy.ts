// app/data/matchups/bard/bard_poppy.ts
import type { MatchupSummary } from "../_types";

export const bard_poppy: MatchupSummary = {
  champs: ["bard", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "바드 R(존야)로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: [""],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 바드 E(터널)의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음."],
      en: [],
    },
  },
};
