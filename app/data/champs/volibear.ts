import type { ChampSkill } from "../types";

const volibear: ChampSkill = {
  id: "volibear",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH","MS_UP", "STUN", "AA_RESET"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SHIELD", "SLOW"],
    R: ["MAX_HP_UP", "SLOW", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]] 안됨", "P는 최대 5스택", "Q 썼을 때 [[HARD_CC]]걸리면 Q 쿨타임 초기화\nQ로 얇은벽 넘어의 적을 공격하면 벽 넘어짐", "W에 [[HEAL]]은 W로 2번 때려야 발동", "R은 [[MAX_HP_UP]]여서 풀피에도 유효함\n[[GW]]영향도 안받음", "R타워 비활성화\n이미 발사한 타워공격을 무효화 시킬 수 없음\n타워 어그로를 해제할 수 없음",
  ],

  ultCooldown: {
    6: 160,
    11: 135,
    16: 110,
  },

};

export default volibear;
