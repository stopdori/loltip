import type { ChampData } from "../interactions/types";

const ashe: ChampData = {
  id: "ashe",
  skills: {
    P: ["SLOW"],
    Q: ["AA_RESET", "AS_UP"],
    W: ["W_FLASH"],
    E: ["VISION", "REVEALED"],
    R: ["STUN"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]] 되는데 마우스 방향 잘 조준해야함\nW에는 [[SLOW]]가 없음\nP의 [[SLOW]]가 걸리는것", "E는 부쉬 안에도 보여줌"
  ],
    en: []
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },



  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default ashe;
