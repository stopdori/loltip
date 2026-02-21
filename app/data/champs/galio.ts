import type { ChampData } from "../interactions/types";

const galio: ChampData = {
  id: "galio",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["SHIELD", "DMG_REDUCE", "TAUNT"],
    E: ["AIRBORNE", "UNSTOPPABLE"],
    R: ["R_FLASH", "SHIELD", "AIRBORNE", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]] 안됨. 막혔습니다\nW는 스마트키를 풀고 쓰시면 좋음", "[[E_FLASH]] 안됨", "E스킬은 두단계로 나뉨 후진/돌진\n후진단계에 갈리오가 맞은 CC는 유효하지만\n돌진단계가 발동되어 앞으로 이동하는것\n돌진단계에는 CC저항력 없음"
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
    6: 180,
    11: 160,
    16: 140,
  },

};

export default galio;
