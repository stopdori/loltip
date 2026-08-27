// app/data/matchups/cassiopeia/cassiopeia_ksante.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_ksante: MatchupSummary = {
  champs: ["cassiopeia", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 크산테 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt K'Sante's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ksante: {
      ko: ["W, E는 [[DASH]] / R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, [[GROUNDED]] 효과를 받기 전에 미리 [[SKILL_CHARGED]]한 W는 문제 없이 발동."],
      en: ["W and E [[DASH]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, if W is already [[SKILL_CHARGED]] before the [[GROUNDED]] effect applies, it still casts normally."],
    },
  },
};
