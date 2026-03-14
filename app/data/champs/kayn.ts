import type { ChampData } from "../interactions/types";

const kayn: ChampData = {
  id: "kayn",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["WALL_HOP"],                // 인간 Q는 Q플 X
      W: ["SLOW"],
      E: ["WALL_HOP", "HEAL", "MS_UP"],
      R: ["R_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
      ETC: [],
    },

    alt: {
      // 그림자 암살자
      P: [],
      Q: ["WALL_HOP"],      // 변신 Q는 Q플 가능
      W: ["SLOW"],
      E: ["WALL_HOP", "HEAL", "MS_UP"],
      R: ["R_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
      ETC: [],
    },

    alt2: {
      // 다르킨
      P: ["LIFESTEAL"],
      Q: ["WALL_HOP"],      // 변신 Q는 Q플 가능
      W: ["AIRBORNE"],
      E: ["WALL_HOP", "HEAL", "MS_UP"],
      R: ["R_FLASH", "WALL_HOP", "HEAL", "UNTARGETABLE", "TOWER_DODGE"],
      ETC: [],
    },

  },

  notes: {
    ko: [
    "진화 전 케인은 정말 약함", "다르킨 P(패시브)에 [[LIFESTEAL]]이있어서 모든스킬이 [[LIFESTEAL]]이 가능함", "Q는 두단계로 나뉨. 돌진단계/베기단계\n돌진단계 중에 [[AIRBORNE]]류, [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 회전 단계를 하지 않음\n(이 밖에 회전 단계 멈추게 하는 거 있으면 제보 부탁드려요)"
  ],
    en: ["Kayn is very weak before evolving", "The Darkin P(Passive) grants [[LIFESTEAL]], allowing all skills to benefit from [[LIFESTEAL]]", "Q has two phases: dash phase / slash phase.\nIf hit by [[AIRBORNE]], [[FEAR]], [[SUPPRESS]], or [[SLEEP]] during the dash phase, Q will not perform the spin slash\n(Please report if there are any other effects that stop the spin slash)"]
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
    6: 120,
    11: 100,
    16: 80,
  },
};

export default kayn;