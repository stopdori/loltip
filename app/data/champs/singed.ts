import type { ChampSkill } from "../types";

const singed: ChampSkill = {
  id: "singed",
  skills: {
    P: ["MS_UP" ],
    Q: [],
    W: ["W_FLASH", "GROUNDED", "SLOW"],
    E: ["E_FLASH", "GRAB", "ROOT"],
    R: ["HEAL", "MS_UP", "GW"],
    ETC: [],
  },

  notes: [
    "[[E_FLASH]] 되는데, [[INSEC_KICK]]은 불가능\nE에 [[ROOT]]은 W 위에 던져야 발동", "R에 [[GW]]은 Q에만 적용"
  ],

  ultCooldown: {
    6: 100,
    11: 100,
    16: 100,
  },

};

export default singed;
