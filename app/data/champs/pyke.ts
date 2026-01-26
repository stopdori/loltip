import type { ChampSkill } from "../types";

const pyke: ChampSkill = {
  id: "pyke",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW", "GRAB"],
    W: ["W_FLASH", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP", "STUN"],
    R: ["R_FLASH", "WALL_HOP", "EXECUTE"],
    ETC: [],
  },

  notes: [
    "파이크 P는 체력14를 공격력1로 변환", "W [[STEALTH]] 중 점멸써도 [[STEALTH]] 안풀림", "E [[STUN]]은 잔상이 돌아오면서 적용"
  ],

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default pyke;
