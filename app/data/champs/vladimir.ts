import type { ChampData } from "../interactions/types";

const vladimir: ChampData = {
  id: "vladimir",
  skills: {
    P: ["AP_UP", "MAX_HP_UP"],
    Q: ["Q_FLASH", "LIFESTEAL", "MS_UP"],
    W: ["W_FLASH", "LIFESTEAL", "MS_UP", "GHOSTING", "SLOW", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "LIFESTEAL"],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 주문력당 체력, 체력당 주문력 증가", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "E 쓰면서 W 쓸 수 있음\nE는 스마트키 풀면 편함", "R은 ''받는 모든피해 증가''여서\nR 대상에게 아군 데미지도 증가시킴"
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
    11: 120,
    16: 120,
  },

};

export default vladimir;
