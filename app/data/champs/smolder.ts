import type { ChampSkill } from "../types";

const smolder: ChampSkill = {
  id: "smolder",
  skills: {
    P: [],
    Q: ["Q_FLASH", "EXECUTE"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "MS_UP", "WALL_HOP"],
    R: ["SLOW", "HEAL"],
    ETC: [],
  },

  notes: [
    "P스택은 25 스플레쉬 /125 추가투사체\n225 3초지속 고정피해, [[EXECUTE]]", "R의 브레스를 스몰더 자신이 맞아야 [[HEAL]]", "E스킬은 [[HARD_CC]]에 끊김"
  ],

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default smolder;
