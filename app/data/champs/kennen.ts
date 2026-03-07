import type { ChampData } from "../interactions/types";

const kennen: ChampData = {
  id: "kennen",
  skills: {
    P: ["STUN"],
    Q: [],
    W: [],
    E: ["AS_UP", "MS_UP", "GHOSTING"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q플 안됨", "P가 3스택되면 스턴걸림", "E에 [[AS_UP]]은 종료하고 발동", "R은 어떤 CC를 맞아도 해제되지 않음"
  ],
    en: ["Q flash not possible", "P at 3 stacks applies a stun", "E's [[AS_UP]] activates on deactivation", "R cannot be cancelled by any CC"]
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
    11: 100,
    16: 80,
  },

};

export default kennen;
