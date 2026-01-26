import type { ChampSkill } from "../types";

const yorick: ChampSkill = {
  id: "yorick",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["HEAL", "AA_RESET"],
    W: ["W_FLASH", "AIRBORNE", "WALL"],
    E: ["E_FLASH", "MS_UP", "SLOW", "AR_SHRED"],
    R: ["ALLY_TP_OK"],
    ETC: [],
  },

  notes: [
    "W에 텔 안됨", "R 재사용하면 다시 불러들일 수 없음"
  ],

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default yorick;
