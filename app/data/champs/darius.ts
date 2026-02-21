import type { ChampData } from "../interactions/types";

const darius: ChampData = {
  id: "darius",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "HEAL"],
    W: ["AA_RESET", "SLOW"],
    E: ["E_FLASH", "GRAB", "SLOW", "AR_PEN"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 5중첩 또는 R막타에 [[AD_UP]] 있음", "Q는 도끼 끝에 맞혀야 P중첩과 [[HEAL]]이 됨", "E스킬 [[AR_PEN]]은 기본지속임", "R은 P스택당 추가데미지 있음\nR로 대상을 처치하면\n1,2렙 궁은 20초간 재사용 가능. 사용하지 않으면 사라짐 \n3렙궁은 완전 초기화. 안써도 사라지지않음", "R은 시전중에 대상이 사라지거나 존야를 쓰면 쿨타임이 돌지않아 바로 다시 사용 가능함 (단, 샤코 R 제외)"
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

export default darius;
