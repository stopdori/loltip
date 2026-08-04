// app/data/matchups/ambessa/ambessa_belveth.ts
import type { MatchupSummary } from "../_types";

export const ambessa_belveth: MatchupSummary = {
  champs: ["ambessa", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["R의 [[SUPPRESS]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 벨베스 W의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["R [[SUPPRESS]] can interrupt Bel'Veth's Q [[DASH]] and E [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Bel'Veth's W [[AIRBORNE]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 암베사 P의 [[DASH]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 암베사 R의 [[SUPPRESS]]으로 끊기지 않음. \n 단, [[SUPPRESS]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Ambessa's P [[DASH]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Ambessa's R [[SUPPRESS]]. \n However, the [[SUPPRESS]] effect still applies."],
    },
  },
};
