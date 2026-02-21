import type { ChampData } from "../interactions/types";

const azir: ChampData = {
  id: "azir",
  skills: {
    P: [],
    Q: ["SLOW"],
    W: [],
    E: ["E_FLASH", "SHIELD", "WALL_HOP"],
    R: ["WALL", "AIRBORNE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[R_FLASH]] 안됨", "병사에 텔 안됨", "아지르 E의 이동거리는 생각보다 짧음\n그래서 E를 쓰고 도착하기전에\nQ를 써서 더 멀리 갈 수 있음\nQ로 방향도 바꿀 수 있음"
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
    11: 105,
    16: 90,
  },

};

export default azir;
