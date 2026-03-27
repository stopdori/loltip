import type { ChampData } from "../interactions/types";

const ashe: ChampData = {
  id: "ashe",
  skills: {
    P: ["SLOW"],
    Q: ["AA_RESET", "AS_UP"],
    W: ["W_FLASH"],
    E: ["VISION", "REVEALED"],
    R: ["STUN", "SLOW"],
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
    "[[W_FLASH]] 되는데 마우스 방향 잘 조준해야함\nW에는 [[SLOW]]가 없음\nP의 [[SLOW]]가 걸리는것", "E는 사거리 제한이 없음.\n부쉬 안에도 보여줌.", "R의 [[STUN]] 시간은 이동한 거리에 비례해서 증가."
  ],
    en: ["[[W_FLASH]] works but mouse aim is important.\nW itself has no [[SLOW]] — the [[SLOW]] comes from P", "E has no range limit and reveals targets inside brushes.", "R's [[STUN]] duration increases with the distance traveled."]
  },

  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default ashe;
