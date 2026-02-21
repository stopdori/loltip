import type { ChampData } from "../interactions/types";

const bard: ChampData = {
  id: "bard",
  skills: {
    P: ["MS_UP", "SLOW"],
    Q: ["Q_FLASH", "SLOW", "STUN"],
    W: ["HEAL", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "P의 [[SLOW]]는 5스택부터\n스택이 쌓일수록 여러 효과 증가", "Q는 그냥 맞히면 [[SLOW]]\n관통해서 다른 적이나 벽에 닿으면 [[STUN]]", "W는 땅에 깔아두고 시간이 지나면 효과증가\n상대편이 밟으면 사라짐", "E로 이동하는 도중에 공격도 당할 수 있고\nCC맞으면 벽에서 튀어나옴"
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
    6: 110,
    11: 95,
    16: 80,
  },

};

export default bard;
