import type { ChampData } from "../interactions/types";

const leesin: ChampData = {
  id: "leesin",
  skills: {
    P: ["AS_UP"],
    Q: ["WALL_HOP"],
    W: ["W_FLASH", "SHIELD", "LIFESTEAL", "WALL_HOP"],
    E: ["E_FLASH", "REVEALED"],
    R: ["R_FLASH", "AIRBORNE", "UNINTERRUPTIBLE_CAST"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "R에 당구로 맞으면\n날아간 대상의 최대체력의 %데미지가\n부딪힌 대상에게 추가"
  ],
    en: ["[[Q_FLASH]] not possible", "Enemies hit by the billiard bounce take bonus damage based on a % of the launched target's max HP"]
  },

  ultCooldown: {
    6: 110,
    11: 85,
    16: 60,
  },

};

export default leesin;
