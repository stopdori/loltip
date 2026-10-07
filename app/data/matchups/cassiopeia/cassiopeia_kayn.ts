// app/data/matchups/cassiopeia/cassiopeia_kayn.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_kayn: MatchupSummary = {
  champs: ["cassiopeia", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 (케인 / 그암 / 다르킨) Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["R [[STUN]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]]. [[NOT_EXIST]] \n However, the [[STUN]] still applies.", 
        "R [[STUN]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    kayn: {
      ko: ["Q는 [[DASH]] / E는 [[IGNORE_TERRAIN]] / R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["Q ([[DASH]]) / E ([[IGNORE_TERRAIN]]) / R ([[BLINK]]) cannot be used while affected by Cassiopeia's W [[GROUNDED]]. [[NOT_EXIST]]"],
    },
  },
};
