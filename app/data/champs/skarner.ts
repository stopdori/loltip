import type { ChampData } from "../interactions/types";

const skarner: ChampData = {
  id: "skarner",
  skills: {
    P: [],
    Q: ["Q_FLASH", "AS_UP", "SLOW", "AA_RESET"],
    W: ["W_FLASH", "SLOW", "SHIELD"],
    E: ["SUPPRESS", "STUN", "WALL_HOP"],
    R: ["SUPPRESS"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q로 돌주으면 평캔 됨\n그리고 평타 3번이 강화되는데\n마지막 평타가 [[SLOW]]\n던진 돌에 맞아도 [[SLOW]]", "E는 상대에게 부딪히면 [[SUPPRESS]]\n그리고 3티모미터 정도 더 이동 가능\n그 안에 벽에 부딪히면 [[STUN]]", "R은 3명까지 [[SUPPRESS]] 가능\n이때 스카너는 이동이 가능하고\nW스킬과 (점멸을 제외한)스펠 사용 가능\n적중하면 [[MS_UP]]"
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
    6: 120,
    11: 105,
    16: 90,
  },

};

export default skarner;
