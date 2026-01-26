import type { ChampSkill } from "../types";

const leesin: ChampSkill = {
  id: "leesin",
  skills: {
    P: ["AS_UP"],
    Q: ["TRUE_SIGHT", "WALL_HOP"],
    W: ["W_FLASH", "SHIELD", "LIFESTEAL", "WALL_HOP"],
    E: ["E_FLASH", "REVEALED"],
    R: ["R_FLASH", "AIRBORNE"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨", "R에 당구로 맞으면\n날아간 대상의 최대체력의 %데미지가\n부딪힌 대상에게 추가"
  ],

  ultCooldown: {
    6: 110,
    11: 85,
    16: 60,
  },

};

export default leesin;
