import type { ChampData } from "../interactions/types";

const yuumi: ChampData = {
  id: "yuumi",
  skills: {
    P: ["HEAL"],
    Q: ["SLOW"],
    W: ["HEAL", "WALL_HOP", "UNTARGETABLE"],
    E: ["AS_UP", "MS_UP", "SHIELD", "MANA_RESTORE"],
    R: ["HEAL", "SHIELD", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 평타, 스킬로 피해를 주면 [[HEAL]]이 되고\n이 [[HEAL]]이 밀착한 아군에게 전이됨", "E는 내렸을 때 [[AS_UP]], [[MS_UP]], [[SHIELD]]이 유미에게 적용 ([[MANA_RESTORE]] 제외)\n밀착상태이면 밀착대상에게만 위 효과를 주고, [[MANA_RESTORE]]을 추가 적용", "내렸을 때 [[HARD_CC]] 맞으면 W 쿨타임 5초", "R은 [[HEAL]] 초과분이 [[SHIELD]]로 전환"
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
    6: 120,
    11: 110,
    16: 100,
  },

};

export default yuumi;
