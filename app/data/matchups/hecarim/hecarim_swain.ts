// app/data/matchups/hecarim/hecarim_swain.ts
import type { MatchupSummary } from "../_types";

export const hecarim_swain: MatchupSummary = {
  champs: ["hecarim", "swain"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["R의 [[UNSTOPPABLE]]로 스웨인 E1의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음. \n 이때, 헤카림은 스웨인 E2의 대상에서 제외."],
      en: ["R [[UNSTOPPABLE]] can ignore Swain's E1 [[ROOT]]. \n However, [[ROOT]] remains after [[UNSTOPPABLE]] ends. \n In this case, Hecarim is excluded from being a target of Swain's E2 [[GRAB]]."],
    },
    swain: {
      ko: [],
      en: [],
    },
  },
};
