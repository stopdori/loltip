import type { ChampData } from "../interactions/types";

const katarina: ChampData = {
  id: "katarina",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["MS_UP"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["GW"],
    ETC: [],
  },

  notes: {
    ko: [
    "단검에 텔 안됨", "E스킬은 대상 근처로 순간이동하고 때리는 스킬임 \n그래서 대상 또는 근처 땅에 쓰면 그 위치로 이동함",
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
    6: 75,
    11: 60,
    16: 45,
  },

};

export default katarina;
