// app/data/matchups/camille/camille_twitch.ts
import type { MatchupSummary } from "../_types";

export const camille_twitch: MatchupSummary = {
  champs: ["camille", "twitch"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["R의 [[UNTARGETABLE]]로 트위치 평타, W, E, R(평타, [[PIERCE]]피해)을 피할 수 있음. \n 단, 트위치가 E를 사용할 때 카밀이 [[UNTARGETABLE]] 상태라면 대상에서 제외.", 
        "R의 [[UNTARGETABLE]]로 트위치 P의 [[DEBUFF_STACK]] 지속피해를 피할 수 없음."
      ],
      en: ["Camille's R [[UNTARGETABLE]] can dodge Twitch's auto-attacks, W, E, and R (auto-attack, [[PIERCE]] damage). \n However, if Camille is [[UNTARGETABLE]] when Twitch uses E, she is excluded as a target.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Twitch's P [[DEBUFF_STACK]] damage-over-time."
      ],
    },
    twitch: {
      ko: [],
      en: [],
    },
  },
};
