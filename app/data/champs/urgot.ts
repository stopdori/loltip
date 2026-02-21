import type { ChampData } from "../interactions/types";

const urgot: ChampData = {
  id: "urgot",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AA_RESET", "SLOW_RESIST"],
    E: ["E_FLASH", "SHIELD", "GRAB", "STUN"],
    R: ["SLOW", "EXECUTE", "FEAR"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[R_FLASH]] 안됨", "다리방향마다 추뎀과 쿨타임이 있음", "E스킬은 두단계로 나뉨 준비/돌진\n준비단계에 우르곳이 맞은 CC는 유효하지만\n돌진단계가 발동되어 앞으로 이동하는것\n돌진단계에는 CC저항력 없음", "R [[EXECUTE]]은 대상의 체력 25% 이하일 때\n재사용을 눌러야 발동"
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
    6: 100,
    11: 85,
    16: 70,
  },

};

export default urgot;
