// app/data/matchups/ahri/ahri_belveth.ts
import type { MatchupSummary } from "../_types";

export const ahri_belveth: MatchupSummary = {
  champs: ["ahri", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 벨베스 Q의 [[DASH]], W의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Bel'Veth's Q [[DASH]] and W [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아리 E의 [[CHARM]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 아리 E의 [[CHARM]]으로 끊기지 않음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Ahri's E [[CHARM]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Ahri's E [[CHARM]]. \n However, the [[CHARM]] effect still applies."],
    },
  },
};
