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
      en: ["E's [[CC_BUFFER]] can ignore Singed's E [[GRAB]]. \n However, the [[DASH]] activates while being pulled by E's [[GRAB]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Singed's E [[GRAB]] and continue [[DASH]]."],
    },
    singed: {
      ko: ["신지드 W의 [[GROUNDED]] [[ZONE]]으로 오로라 W, R의 [[DASH]]를 끊을 수 없음. \n 단, [[GROUNDED]] [[ZONE]] 위에서 W, R을 사용할 수 없음.",
        "신지드 W의 [[GROUNDED]] [[ZONE]]으로 오로라 E의 [[DASH]]를 끊을 수 있음. \n 단, [[GROUNDED]] [[ZONE]] 위에서 E를 사용할 수 있지만 [[DASH]]하지 않음.",
        "신지드 W의 [[GROUNDED]] [[ZONE]]으로 오로라 R의 [[UNTARGETABLE]] [[BLINK]]을 막을 수 없음.",
        "신지드 E의 [[GRAB]]으로 오로라 W의 [[DASH]]을 완전 무시하고 던질 수 있음."],
      en: ["Singed's W [[GROUNDED]] [[ZONE]] cannot interrupt Aurora's W or R [[DASH]]. \n However, W and R cannot be used while standing on the [[GROUNDED]] [[ZONE]].",
        "Singed's W [[GROUNDED]] [[ZONE]] can interrupt Aurora's E [[DASH]]. \n However, E can still be used while standing on the [[GROUNDED]] [[ZONE]] — it just doesn't [[DASH]].",
        "Singed's W [[GROUNDED]] [[ZONE]] cannot block Aurora's R [[UNTARGETABLE]] [[BLINK]].",
        "Singed's E [[GRAB]] can completely ignore Aurora's W [[DASH]] and throw her."],
    },
  },
};
