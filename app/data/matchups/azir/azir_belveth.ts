// app/data/matchups/azir/azir_belveth.ts
import type { MatchupSummary } from "../_types";

export const azir_belveth: MatchupSummary = {
  champs: ["azir", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Bel'Veth's Q [[DASH]] and E [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아지르 E의 [[DASH]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 아지르 R의 [[KNOCKBACK]]으로 끊기지 않음. \n 단, [[KNOCKBACK]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Azir's E [[DASH]].",
        "Bel'Veth's R is instant with [[TIMING_AFTERCAST]], so it cannot be interrupted by Azir's R [[KNOCKBACK]]. \n However, the [[KNOCKBACK]] still applies."],
    },
  },
};
