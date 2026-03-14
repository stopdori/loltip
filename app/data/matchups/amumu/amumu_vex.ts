// app/data/matchups/amumu/amumu_vex.ts
import type { MatchupSummary } from "../_types";

export const amumu_vex: MatchupSummary = {
  champs: ["amumu", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 벡스 R2를 끊을 수 없음.", "아무무 Q로 벡스 P의 [[FEAR]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, P를 발동시킨 Q, W, E의 데미지는 유효하고 [[FEAR]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Vex's R2.", "Amumu's Q is affected by Vex's passive [[FEAR]], but can still move if the dash phase activates.\nHowever, damage from the Q, W, or E that triggered the passive is applied and [[FEAR]] remains active."],
    },
    vex: {
      ko: [],
      en: [],
    },
  },
};
