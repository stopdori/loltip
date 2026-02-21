import type { ChampData } from "../interactions/types";

const zed: ChampData = {
  id: "zed",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["WALL_HOP"],
    E: ["SLOW",],
    R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "제드는 그림자와 같이 공격해야\n추가 효과들이 있음", "[[W_FLASH]], [[E_FLASH]] 안됨", "R은 제드가 사라졌다\n상대방 뒤에서 나옴(자리 고정)"
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

export default zed;
