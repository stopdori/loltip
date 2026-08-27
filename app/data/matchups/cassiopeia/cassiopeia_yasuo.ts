// app/data/matchups/cassiopeia/cassiopeia_yasuo.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_yasuo: MatchupSummary = {
  champs: ["cassiopeia", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 야스오 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Yasuo's E [[DASH]]."],
    },
    yasuo: {
      ko: ["W의 [[WINDSHIELD]] 효과로 카시오페아 W, E의 [[PROJECTILE]]를 막을 수 있음. \n 단, W의 [[PROJECTILE]]는 [[WINDSHIELD]]에 닿는순간 바닥에 [[ZONE]]으로 변형되어 깔림.",
        "E는 [[DASH]], R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.", ],
      en: ["W's [[WINDSHIELD]] can block Cassiopeia's W and E [[PROJECTILE]]. \n However, the moment W's [[PROJECTILE]] touches the [[WINDSHIELD]], it transforms into a [[ZONE]] on the ground.",
        "E [[DASH]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
