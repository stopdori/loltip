import type { ChampSkill } from "../types";

const kennen: ChampSkill = {
  id: "kennen",
  skills: {
    P: ["STUN"],
    Q: [],
    W: [],
    E: ["AS_UP", "MS_UP", "GHOSTING"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "Q플 안됨", "P가 3스택되면 스턴걸림", "E에 [[AS_UP]]은 종료하고 발동"
  ],


  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default kennen;
