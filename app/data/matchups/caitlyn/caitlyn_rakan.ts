// app/data/matchups/caitlyn/caitlyn_rakan.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_rakan: MatchupSummary = {
  champs: ["caitlyn", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음. \n 단, 라칸 W는 도약단계를 발동하지 않음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Rakan's W and E [[DASH]]. \n However, the [[ROOT]] and headshot still apply. \n However, Rakan's W does not trigger its leap phase."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 케이틀린 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 케이틀린 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: [],
    },
  },
};
