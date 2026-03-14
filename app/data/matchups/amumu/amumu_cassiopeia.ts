// app/data/matchups/amumu/amumu_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const amumu_cassiopeia: MatchupSummary = {
  champs: ["amumu", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q로 카시오페아 W의 [[GROUNDED]]를 벗어날 수 있음.\n단, 아무무가 Q를 던져 놨을 때 카시 W가 깔리고 아무무 Q가 대상에게 적중했을 때만 가능", "아무무 Q로 카시오페아 R의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q can escape Cassiopeia's W [[GROUNDED]].\nNote: This is only possible when Amumu has already cast Q before Cassiopeia's W lands and Q hits the target.", "Amumu's Q is affected by Cassiopeia's R [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    cassiopeia: {
      ko: [],
      en: [],
    },
  },
};
