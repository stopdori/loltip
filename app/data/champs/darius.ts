import type { ChampSkill } from "../types";

const darius: ChampSkill = {
  id: "darius",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "HEAL"],
    W: ["AA_RESET", "SLOW"],
    E: ["E_FLASH", "GRAB", "SLOW", "AR_PEN"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "P는 5중첩 또는 R막타에 [[AD_UP]] 있음", "Q는 도끼 끝에 맞혀야 P중첩과 [[HEAL]]이 됨", "E스킬 [[AR_PEN]]은 기본지속임", "R은 P스택당 추가데미지 있음\nR로 대상을 처치하면\n1,2렙 궁은 20초간 재사용 가능. 사용하지 않으면 사라짐 \n3렙궁은 완전 초기화. 안써도 사라지지않음",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default darius;
