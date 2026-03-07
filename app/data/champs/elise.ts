import type { ChampData } from "../interactions/types";

const elise: ChampData = {
  id: "elise",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["Q_FLASH"],                // 인간 Q는 Q플 X
      W: ["VISION"],
      E: ["E_FLASH", "STUN", "VISION"],
      R: [],
      ETC: [],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP", "LIFESTEAL", "ALLY_TP_OK"],
      Q: ["Q_FLASH"],      // 변신 Q는 Q플 가능
      W: ["AS_UP", "AA_RESET"],
      E: ["E_FLASH", "VISION", "LIFESTEAL", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
      R: [],
      ETC: [],
    },
  },

  notes: {
    ko: [
    "거미폼 Q가 벽을 못넘음", "거미폼 E는 부쉬 안에도 시야가 보임\n[[LIFESTEAL]] 맞음 오타아님 \n정확한 메커니즘은 거미폼 E를 대상에게 하강하면 엘리스 P(패시브)효과가 증가함. 그래서 [[LIFESTEAL]]량이 증가함",
  ],
    en: ["Spider form Q cannot hop walls", "Spider form E reveals inside brushes.\n[[LIFESTEAL]] is correct, not a typo.\nThe exact mechanic: using Spider E to descend on a target increases Elise's P passive effect, boosting [[LIFESTEAL]]"]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },

  
  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default elise;
