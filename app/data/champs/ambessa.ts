import type { ChampData } from "../interactions/types";

const ambessa: ChampData = {
  id: "ambessa",
  skills: {
    P: ["RANGE_UP", "AS_UP", "ENERGY_RESTORE"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "SLOW"],
    R: ["LIFESTEAL", "AR_PEN", "SUPPRESS", "STUN", "WALL_HOP", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "암베사 P로 [[WALL_HOP]] 안됨", "P의 [[ENERGY_RESTORE]]은 스킬을 사용하면 버프스택이 쌓이고, 평타를 치면 버프스택을 소모하여 기력을 회복하는 구조", "R의 스킬[[LIFESTEAL]], [[AR_PEN]]은 기본지속 효과\n그래서 궁배우면 사실상 모든스킬 피흡", "R은 경로상 맨 뒤 적챔피언만 적중"
  ],
    en: []
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default ambessa;
