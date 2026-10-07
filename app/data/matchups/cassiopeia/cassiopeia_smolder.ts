// app/data/matchups/cassiopeia/cassiopeia_smolder.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_smolder: MatchupSummary = {
  champs: ["cassiopeia", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["R [[STUN]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    smolder: {
      ko: ["E는 [[IGNORE_TERRAIN]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["E ([[IGNORE_TERRAIN]]) cannot be used while affected by Cassiopeia's W [[GROUNDED]]. [[NOT_EXIST]]"],
    },
  },
};
