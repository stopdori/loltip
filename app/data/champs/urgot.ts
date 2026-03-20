import type { ChampData } from "../interactions/types";

const urgot: ChampData = {
  id: "urgot",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AA_RESET", "SLOW_RESIST"],
    E: ["E_FLASH", "SHIELD", "GRAB", "STUN"],
    R: ["SLOW", "GRAB", "EXECUTE", "FEAR"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "[[R_FLASH]] 안됨", "다리방향마다 추뎀과 쿨타임이 있음", "E스킬은 두단계로 나뉨 준비/돌진\n준비단계에 우르곳이 맞은 CC는 유효하지만\n돌진단계가 발동되어 앞으로 이동하는것\n돌진단계에는 CC저항력 없음", "R의 [[EXECUTE]]은 대상의 체력 25% 이하일 때\nR2를 사용하면 대상을 [[GRAB]] 해서 우르곳 몸에 일정시간 비벼져야 발동.\n이 때 주변에 [[FEAR]] 발동."
  ],
    en: ["[[R_FLASH]] not possible", "Each leg has individual bonus damage and cooldowns", "E has two phases: prep / dash.\nCC during prep is valid but the dash still fires.\nThere is no CC immunity during the dash phase", "R [[EXECUTE]] requires manual recast when the target falls below 25% HP"]
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default urgot;
