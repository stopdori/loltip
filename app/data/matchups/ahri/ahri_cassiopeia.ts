// app/data/matchups/ahri/ahri_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const ahri_cassiopeia: MatchupSummary = {
  champs: ["ahri", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 카시오페아 R의 [[CAST_COMMIT]]를 막을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E [[CHARM]] cannot interrupt Cassiopeia's R [[CAST_COMMIT]].\nHowever, the [[CHARM]] still applies."],
    },
    cassiopeia: {
      ko: ["카시오페아 W의 [[GROUNDED]]로 아리 R을 사용하지 못하게 할 수 있음.\n단, 이미 돌진중인 아리 R을 끊을 수는 없음."],
      en: ["Cassiopeia's W [[GROUNDED]] can prevent Ahri from casting R\nHowever, it cannot interrupt Ahri's R once already activated"],
    },
  },
};
