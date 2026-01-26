import type { ChampSkill } from "../types";

const viego: ChampSkill = {
  id: "viego",
  skills: {
    P: ["HEAL", "MS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL"],
    W: ["W_FLASH", "STUN", "AA_RESET"],
    E: ["STEALTH", "AS_UP", "MS_UP"],
    R: ["WALL_HOP", "KNOCKBACK", "SLOW"],
    ETC: [],
  },

  notes: [
    "P로 챔피언을 지배했다면\n적에게 다가갈 때 [[MS_UP]]", "벽에 E쓰면 암흑시야여도 보임\n정글링할때 벽에 E를 쓰면\n상대가 내 위치를 알 수 있음",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default viego;
