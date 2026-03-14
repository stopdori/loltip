// app/data/matchups/amumu/amumu_lissandra.ts
import type { MatchupSummary } from "../_types";

export const amumu_lissandra: MatchupSummary = {
  champs: ["amumu", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 리산드라 W의 [[ROOT]], R의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[ROOT]], [[STUN]]도 남아있음."],
      en: ["Amumu's Q is affected by Lissandra's W [[ROOT]] and R [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[ROOT]], [[STUN]] remain active."],
    },
    lissandra: {
      ko: [],
      en: [],
    },
  },
};
