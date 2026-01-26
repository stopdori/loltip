import type { ChampSkill } from "../types";

const naafiri: ChampSkill = {
  id: "naafiri",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["Q_FLASH", "LIFESTEAL"],
    W: ["W_FLASH", "AD_UP", "MS_UP", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["WALL_HOP"],
    R: ["WALL_HOP", "SLOW", "SHIELD"],
    ETC: [],
  },

  notes: [
    "Q는 2타가 [[LIFESTEAL]]임", "R은 원래는 기본 스킬이었지만, 리워크 되면서 궁으로 바뀌었는데 앞에서 가로 막아주기가 없어짐\n하지만 R은 CC로 끊길 수 있음", "R은 처음엔 쉴드가 없고\n초기화로 다시 사용하면 생김",
  ],

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default naafiri;
