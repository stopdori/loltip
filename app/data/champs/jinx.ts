import type { ChampData } from "../interactions/types";

const jinx: ChampData = {
  id: "jinx",
  skills: {
    P: ["AS_UP", "MS_UP"],
    Q: ["AS_UP"],
    W: ["REVEALED"],
    E: ["VISION", "ROOT"],
    R: ["VISION"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "P[[MS_UP]]는 챔피언, 에픽 몬스터, 구조물에 한함", "Q는 미니건 ([[MS_UP]])\n생선 대가리(스플, 사거리증가)", "E의 [[ROOT]]은 다른 스킬들의 [[ROOT]]보다 판정이 좋음\n이동기 계열을 꽤 많이 끊음"
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
    6: 85,
    11: 65,
    16: 45,
  },

};

export default jinx;
