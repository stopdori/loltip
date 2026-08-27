// app/data/matchups/cassiopeia/cassiopeia_gwen.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_gwen: MatchupSummary = {
  champs: ["cassiopeia", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 그웬 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Gwen's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    gwen: {
      ko: ["E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.",
        "W(그면상)의 [[UNTARGETABLE]] 효과로 카시오페아 평타, Q, W, E, R을 범위 밖에서 맞지 않음 \n 평타, E의 [[PROJECTILE]]는 날아오던 중 범위 안에 들어올 때 사라짐"],
      en: ["E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].",
        "Gwen's W (Hallowed Mist) [[UNTARGETABLE]] prevents Cassiopeia's auto attacks, Q, W, E, and R from hitting her when cast from outside the mist. \n Auto attack and E [[PROJECTILE]]s already in flight disappear upon entering the mist."],
    },
  },
};
