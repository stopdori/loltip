// app/data/matchups/aatrox/aatrox_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const aatrox_caitlyn: MatchupSummary = {
  champs: ["aatrox", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 케이틀린 E의 [[DASH]]을 끊을 수 있음.", 
        "E는 케이틀린 W의 [[ROOT]]에 걸리면 사용할 수 없음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Caitlyn's E [[DASH]].",
        "E cannot be used while [[ROOT]]ed by Caitlyn's W."],
    },
    caitlyn: {
      ko: ["W의 [[ROOT]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]와 헤드샷은 남아있음."],
      en: ["Caitlyn's W [[ROOT]] cannot interrupt Aatrox's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
  },
};
