import type { ChampSkill } from "../types";

const irelia: ChampSkill = {
  id: "irelia",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL", "WALL_HOP"],
    W: ["W_FLASH", "DMG_REDUCE"],
    E: ["STUN"],
    R: ["R_FLASH", "SLOW"],
    ETC: [],
  },

  notes: [
    "[[E_FLASH]] 안됨", "P는 4스택까지\n 중첩 유지는 챔피언, 타워 때려야 됨", "W는 CC(침묵,변이 포함)걸려도 유지됨\n하지만 CC가 걸리기는 하니까 저지불가는 아님"
  ],

  ultCooldown: {
    6: 125,
    11: 105,
    16: 85,
  },

};

export default irelia;
