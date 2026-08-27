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
      ko: ["Q는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.", 
        "Q의 [[DASH]]로 카시오페아 W의 [[GROUNDED]]를 벗어날 수 있음. \n 단, 아무무가 Q를 미리 던져 놨을 때 카시 W가 깔리고 아무무 Q가 [[ZONE]] 밖의 대상에게 적중했을 때만 가능.", 
        "Q의 [[CC_BUFFER]]로 카시오페아 R의 [[STUN]]을 무시하고 [[DASH]]을 할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].", "Q [[DASH]] can escape Cassiopeia's W [[GROUNDED]]. \n However, this is only possible when Amumu has already cast Q before Cassiopeia's W lands and Q hits a target outside the [[ZONE]].", "Q [[CC_BUFFER]] can ignore Cassiopeia's R [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Amumu's Q [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
