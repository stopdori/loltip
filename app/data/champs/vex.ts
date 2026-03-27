import type { ChampData } from "../interactions/types";

const vex: ChampData = {
  id: "vex",
  skills: {
    P: ["FEAR"],
    Q: ["Q_FLASH"],
    W: ["SHIELD"],
    E: ["SLOW"],
    R: ["R_FLASH", "WALL_HOP", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]], [[E_FLASH]] 안됨", "R2 설명에 [[UNSTOPPABLE]]가 없지만, 스킬로 날아갈 때 벡스 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝.", "R2로 날아갈 때 점멸로 멈출 수 있음 ",
  ],
    en: ["[[W_FLASH]] and [[E_FLASH]] not possible", "Flash can stop R mid-flight"]
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default vex;
