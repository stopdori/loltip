// app/data/matchups/bard/bard_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const bard_xinzhao: MatchupSummary = {
  champs: ["bard", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 신짜오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 신짜오 E의 [[DASH]]을 끊을 수 있음.", 
        "바드 R(존야)을 신짜오 R의 범위 밖에서 맞히면 존야 상태로 만들 수 있음."],
      en: [""],
    },
    xinzhao: {
      ko: ["신짜오 Q3의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 바드 E(벽이동)의 [[DASH]]을 끊을 수 있음."],
      en: [],
    },
  },
};
