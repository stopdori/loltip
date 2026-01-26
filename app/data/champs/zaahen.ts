import type { ChampSkill } from "../types";

const zaahen: ChampSkill = {
  id: "zaahen",
  skills: {
    P: ["AD_UP", "REVIVE"],
    Q: ["HEAL", "AA_RESET"],
    W: ["W_FLASH", "GRAB"],
    E: ["E_FLASH",],
    R: ["AR_PEN", "DMG_REDUCE", "LIFESTEAL", "UNSTOPPABLE", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "P는 12스택 다 채우면 [[AD_UP]] 효과 두배\nP를 다 채워야 [[REVIVE]] 가능", "[[E_FLASH]]은 정말 어렵게 되긴함", "R에 [[AR_PEN]]은 기본지속"
  ],

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default zaahen;
