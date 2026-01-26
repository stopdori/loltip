import type { ChampSkill } from "../types";

const sylas: ChampSkill = {
  id: "sylas",
  skills: {
    P: [],
    Q: ["SLOW"],
    W: ["W_FLASH", "LIFESTEAL", "WALL_HOP"],
    E: ["AIRBORNE", "WALL_HOP"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: ["[[Q_FLASH]], [[E_FLASH]] 안됨", "P는 평캔이 아니고, 공속증가임", "R은 챔피언별로 아래 박스에 정리"
  ],

  ultCooldown: {
    6: 80,
    11: 55,
    16: 30,
  },

};

export default sylas;
