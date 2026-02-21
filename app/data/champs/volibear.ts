import type { ChampData } from "../interactions/types";

const volibear: ChampData = {
  id: "volibear",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH","MS_UP", "STUN", "AA_RESET"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SHIELD", "SLOW"],
    R: ["MAX_HP_UP", "SLOW", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[R_FLASH]] 안됨", "P는 최대 5스택", "Q스킬은 두단계로 나뉨 추격/공격\n추격단계에 볼리베어가 맞은 CC는 유효하여 Q스킬이 해제되지만, 쿨타임을 돌려줌\n공격단계가 발동되면 CC를 맞아도 스킬이 유효함", "Q로 얇은벽 넘어의 적을 공격하면 벽 넘어짐", "W에 [[HEAL]]은 W로 2번 때려야 발동", "R은 [[MAX_HP_UP]]여서 풀피에도 유효함\n[[GW]]영향도 안받음", "R타워 비활성화\n이미 발사한 타워공격을 무효화 시킬 수 없음\n타워 어그로를 해제할 수 없음",
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
    6: 160,
    11: 135,
    16: 110,
  },

};

export default volibear;
