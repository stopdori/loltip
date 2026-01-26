import type { ChampSkill } from "../types";

const hecarim: ChampSkill = {
  id: "hecarim",
  skills: {
    P: ["AD_UP"],
    Q: [],
    W: ["HEAL"],
    E: ["WALL_HOP", "AIRBORNE", "GHOSTING"],
    R: ["WALL_HOP", "FEAR", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: [
    "헤카림은 이속이 증가하면 [[AD_UP]]가 증가함", "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "R 시전중에 CC를 맞으면 걸리지 않지만\n시전이 끝나고나서도 CC가 남아있으면 걸림"
  ],

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default hecarim;
