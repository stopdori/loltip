import type { ChampSkill } from "../types";

const graves: ChampSkill = {
  id: "graves",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "NEARSIGHT", "SLOW"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "두꺼운벽에 붙어서 평E평하면 평캔 엄청빠름",
  ],

  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default graves;
