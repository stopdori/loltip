// app/data/matchups/ahri/ahri_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const ahri_caitlyn: MatchupSummary = {
  champs: ["ahri", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 케틀 E(투망)의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R은 케이틀린 W의 [[ROOT]]에 걸리면 사용할 수 없음."],
      en: ["E [[CHARM]] can interrupt Caitlyn's E (net) [[DASH]] and R [[SKILL_CHANNEL]].",
        "R cannot be used while [[ROOT]]ed by Caitlyn's W."],
    },
    caitlyn: {
      ko: ["W의 [[ROOT]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]와 헤드샷은 남아있음."],
      en: ["Caitlyn's W [[ROOT]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
  },
};
