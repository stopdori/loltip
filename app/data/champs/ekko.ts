import type { ChampSkill } from "../types";

const ekko: ChampSkill = {
  id: "ekko",
  skills: {
    P: ["MS_UP",],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SHIELD", "SLOW", "STUN"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["HEAL", "WALL_HOP"],
    ETC: [],
  },

   notes: [
    "W 깔면 밤위 슬로우임\n사라지기 전에만 들어가면 효과 발동됨"
  ],

  ultCooldown: {
    6: 110,
    11: 80,
    16: 50,
  },

};

export default ekko;
