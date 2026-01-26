import type { ChampSkill } from "../types";

const nunu: ChampSkill = {
  id: "nunu",
  skills: {
    P: ["AS_UP", "MS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL"],
    W: ["W_FLASH", "AIRBORNE"],
    E: ["E_FLASH", "SLOW", "ROOT"],
    R: ["SHIELD", "SLOW"],
    ETC: [],
  },

  notes: [
    "W로 눈덩이를 굴리다가 재사용하면 놓을 수 있음", "E를 사용하면 누누에게 원이 생기는데 이 원이 끝날 때 [[ROOT]]을 검\n단, E가 적중한 대상에게만 [[ROOT]]을 검", "[[R_FLASH]] 안됨. R은 다른 행동하면 시전이 풀림"
  ],


  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default nunu;
