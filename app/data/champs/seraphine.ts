import type { ChampData } from "../interactions/types";

const seraphine: ChampData = {
  id: "seraphine",
  skills: {
    P: [],
    Q: [],
    W: ["MS_UP", "SHIELD", "HEAL"],
    E: ["E_FLASH", "SLOW", "ROOT", "STUN"],
    R: ["R_FLASH", "CHARM"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[W_FLASH]] 안됨", "P 스택은 세라핀의 평타 사거리를 증가시킴", "W는 보호막이 있을 때 [[HEAL]]으로 발동하는데\n아군이 씌워준 보호막에도 발동하는지 궁금함 제보 부탁드림", "E는 그냥 맞히면 [[SLOW]]\n[[SLOW]]인 대상은 [[ROOT]]\n[[ROOT]]인 대상은 [[STUN]]이 걸림", "R의 사거리는 아군, 적군 챔피언 맞히면 늘어남\n[[R_FLASH]] 개사기임"
  ],
    en: ["[[Q_FLASH]] and [[W_FLASH]] not possible", "P stacks extend Seraphine's basic attack range", "W heals when Seraphine already has a shield.\nConfirmation needed on whether ally-applied shields also proc this", "E applies [[SLOW]] on a direct hit.\n[[SLOW]]ed targets become [[ROOT]]ed.\n[[ROOT]]ed targets become [[STUN]]ed", "R range increases when hitting ally or enemy champions.\n[[R_FLASH]] is extremely powerful"]
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
    6: 160,
    11: 140,
    16: 120,
  },

};

export default seraphine;
