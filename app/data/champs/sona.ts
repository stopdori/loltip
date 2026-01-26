import type { ChampSkill } from "../types";

const sona: ChampSkill = {
  id: "sona",
  skills: {
    P: ["SLOW"],
    Q: [],
    W: ["HEAL", "SHIELD"],
    E: ["MS_UP"],
    R: ["STUN"],
    ETC: [],
  },

  notes: [
    "스킬+점멸이 하나도 안됨\n리메이크 필요해보임", "P의 [[SLOW]]는 E강화 평타만", "W강화 평타는 대상의 피해를 감소시킴\n(탈진과 비슷)"
  ],

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default sona;
