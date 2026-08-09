// app/data/matchups/aurora/aurora_singed.ts
import type { MatchupSummary } from "../_types";

export const aurora_singed: MatchupSummary = {
  champs: ["aurora", "singed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E의 [[CC_BUFFER]]로 신지드 E의 [[GRAB]]을 무시할 수 있음. \n 단, E의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 신지드 E의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음."],
      en: [],
    },
    singed: {
      ko: ["신지드 W의 [[GROUNDED]] [[ZONE]]으로 오로라 W, R의 [[DASH]]를 끊을 수 없음. \n 단, [[GROUNDED]] [[ZONE]] 위에서 W, R을 사용할 수 없음.", 
        "신지드 W의 [[GROUNDED]] [[ZONE]]으로 오로라 E의 [[DASH]]를 끊을 수 있음. \n 단, [[GROUNDED]] [[ZONE]] 위에서 E를 사용할 수 있지만 [[DASH]]하지 않음.", 
        "신지드 W의 [[GROUNDED]] [[ZONE]]으로 오로라 R의 [[UNTARGETABLE]] [[BLINK]]을 막을 수 없음.",
        "신지드 E의 [[GRAB]]으로 오로라 W의 [[DASH]]을 완전 무시하고 던질 수 있음."],
      en: [],
    },
  },
};
