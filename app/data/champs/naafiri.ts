import type { ChampData } from "../interactions/types";

const naafiri: ChampData = {
  id: "naafiri",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["Q_FLASH", "LIFESTEAL"],
    W: ["W_FLASH", "AD_UP", "MS_UP", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["WALL_HOP"],
    R: ["WALL_HOP", "SLOW", "SHIELD"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q는 2타가 [[LIFESTEAL]]임", "R은 원래는 기본 스킬이었지만, 리워크 되면서 궁으로 바뀌었는데 앞에서 가로 막아주기가 없어짐\n하지만 R은 CC로 끊길 수 있음", "R은 사용하고 7초이내 킬관여 하면 초기화\n처음 사용에는 [[SHIELD]]이 없고\n초기화 궁은 사용하면 생김\n초기화 궁은 사용하지 않으면 사라짐",
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
    6: 110,
    11: 95,
    16: 80,
  },

};

export default naafiri;
