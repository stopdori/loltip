import type { ChampSkill } from "../types";

const rammus: ChampSkill = {
  id: "rammus",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "AIRBORNE", "SLOW"],
    W: [],
    E: ["E_FLASH", "TAUNT"],
    R: ["WALL_HOP", "AIRBORNE", "SLOW"],
    ETC: [],
  },

  notes: [
    "P [[AD_UP]]은 방마저 비례", "R의 점프 거리가 이속 비례임\n[[AIRBORNE]]은 Q상태일 때만 가능함\n[[SLOW]]도 지역에 3회 추가 적용임",
  ],

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default rammus;
