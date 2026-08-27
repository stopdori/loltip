// app/data/matchups/belveth/belveth_chogath.ts
import type { MatchupSummary } from "../_types";

export const belveth_chogath: MatchupSummary = {
  champs: ["belveth", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 초가스 Q의 [[AIRBORNE]], W의 [[SILENCE]]로 끊기지 않음. \n 단, [[AIRBORNE]], [[SILENCE]]은 남아있음."],
      en: ["Bel'Veth's R activates instantly and has [[TIMING_AFTERCAST]], so it cannot be interrupted by Cho'Gath's Q [[AIRBORNE]] or W [[SILENCE]]. \n However, the [[AIRBORNE]] and [[SILENCE]] still apply."],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Bel'Veth's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
