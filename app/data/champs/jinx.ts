import type { ChampSkill } from "../types";

const jinx: ChampSkill = {
  id: "jinx",
  skills: {
    P: ["AS_UP", "MS_UP"],
    Q: ["AS_UP"],
    W: ["REVEALED"],
    E: ["VISION"],
    R: ["VISION"],
    ETC: [],
  },

  notes: [
    "[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "P[[MS_UP]]는 챔피언, 에픽 몬스터, 구조물에 한함", "Q는 미니건 ([[MS_UP]])\n생선 대가리(스플, 사거리증가)"
  ],


  ultCooldown: {
    6: 85,
    11: 65,
    16: 45,
  },

};

export default jinx;
