// app/data/matchups/akali/akali_belveth.ts
import type { MatchupSummary } from "../_types";

export const akali_belveth: MatchupSummary = {
  champs: ["akali", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 벨베스 Q, R의 [[DASH]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Bel'Veth's Q and R [[DASH]]."],
    },
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 있음.", 
        "벨베스 E의 [[HOMING]]으로 아칼리 W의 [[INVISIBILITY]]을 공격 할 수 있음."],
      en: [],
    },
  },
};
