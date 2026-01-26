import type { ChampSkill } from "../types";

const lux: ChampSkill = {
  id: "lux",
  skills: {
    P: [],
    Q: ["Q_FLASH", "PIERCE", "ROOT"],
    W: ["SHIELD"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: ["VISION"],
    ETC: [],
  },

  notes: [
    "[[W_FLASH]], [[R_FLASH]] 안됨", "Q에 [[PIERCE]]은 1번만", "E에 텔 안타짐"
  ],

  ultCooldown: {
    6: 60,
    11: 50,
    16: 40,
  },

};

export default lux;
