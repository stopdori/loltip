import type { ChampData } from "../interactions/types";

const nautilus: ChampData = {
  id: "nautilus",
  skills: {
    P: ["ROOT"],
    Q: ["GRAB", "STUN"],
    W: ["SHIELD", "AA_RESET"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "AIRBORNE", "STUN"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨\nQ는 벽이나 구조물에 적중하면 이동 가능함", "Q스킬은 두단계로 나뉨 투척/그렙\n투척탄계에 노틸러스가 맞은 CC는 유효하지만\n그렙단계가 발동되어 앞으로 이동하는것\n그렙단계에는 CC저항력 없음"
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
    11: 100,
    16: 80,
  },

};

export default nautilus;
