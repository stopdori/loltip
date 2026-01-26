import type { ChampSkill } from "../types";

const yasuo: ChampSkill = {
  id: "yasuo",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["WINDSHIELD"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["AIRBORNE", "AR_SHRED", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "[[W_FLASH]], [[R_FLASH]] 안됨", "P의 [[AD_UP]]는 치명타 초과분이 변환", "Q에 [[AIRBORNE]]은 Q3타에 발동", "E 도중에 Q를 하면\n이동하면서 주변에 피해를 줌", "E로 이동하고 나서 땅을 우클릭하면\nQ가 회전공격을 하지 않음", "R은  [[AIRBORNE]]인 대상에게만 사용 가능\nR에 [[AR_SHRED]]은 R적중한 모든 대상"
  ],


  ultCooldown: {
    6: 70,
    11: 50,
    16: 30,
  },

};

export default yasuo;
