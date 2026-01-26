import type { ChampSkill } from "../types";

const taric: ChampSkill = {
  id: "taric",
  skills: {
    P: ["AS_UP"],
    Q: ["HEAL"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "STUN"],
    R: ["R_FLASH", "INVULNERABLE"],
    ETC: [],
  },

  notes: [
    "P의 [[MS_UP]]은 스킬 사용 후 다음 평타 2대",
  ],

  ultCooldown: {
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taric;
