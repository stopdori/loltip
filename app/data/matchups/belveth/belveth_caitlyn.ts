// app/data/matchups/belveth/belveth_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const belveth_caitlyn: MatchupSummary = {
  champs: ["belveth", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 케이틀린 W의 [[ROOT]]으로 끊기지 않음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Caitlyn's E [[DASH]] and R [[SKILL_CHANNEL]].",
        "Bel'Veth's R is instant-cast with [[TIMING_AFTERCAST]], so it isn't interrupted by Caitlyn's W [[ROOT]]. \n However, the [[ROOT]] still applies."],
    },
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
      "W([[TRAP]])의 [[ROOT]]으로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Bel'Veth's E [[SKILL_CHANNEL]].",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
  },
};
