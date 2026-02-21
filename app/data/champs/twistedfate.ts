import type { ChampData } from "../interactions/types";

const twistedfate: ChampData = {
  id: "twistedfate",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "AA_RESET", "STUN", "SLOW"],
    E: ["AS_UP"],
    R: ["R_FLASH", "TRUE_SIGHT"],
    ETC: [],
  },

  notes: {
    ko: [
    "W 카드 순서는\n파랑(마나) 빨강([[SLOW]]) 노랑([[STUN]])", "골카를 들고 대상에게 우클릭한 후 점멸을 누르면 점멸골카가 예쁘게 나감", "E의 [[AS_UP]]는 지속효과", "R의 [[TRUE_SIGHT]]는 방어막류(밴시, 밤끝 포함)로 막아짐"
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
    6: 170,
    11: 140,
    16: 110,
  },

};

export default twistedfate;
