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
      ko: ["R의 [[STUN]]로 케인, 그암, 다르킨 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R의 [[STUN]]로 케인, 그암, 다르킨 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. \n 즉시 가장 가까운 땅으로 위치 이동."
      ],
      en: ["R [[STUN]] cannot interrupt Kayn's (base, Shadow Assassin, Darkin) Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "R [[STUN]] can interrupt Kayn's (base, Shadow Assassin, Darkin) E (wall movement) [[SKILL_CHANNEL]] [[DASH]]. \n He is immediately repositioned to the nearest ground."
      ],
    },
    kayn: {
      ko: ["Q, E는 [[DASH]] / R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Q and E [[DASH]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
