// app/data/matchups/belveth/belveth_malphite.ts
import type { MatchupSummary } from "../_types";

export const belveth_malphite: MatchupSummary = {
  champs: ["belveth", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 말파이트 R의 [[AIRBORNE]]으로 끊기지 않음. \n 단, [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 벨베스 W의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Bel'Veth's W [[AIRBORNE]]."],
    },
  },
};
