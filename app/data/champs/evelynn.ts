import type { ChampSkill } from "../types";

const evelynn: ChampSkill = {
  id: "evelynn",
  skills: {
    P: ["STEALTH", "HEAL"],
    Q: [],
    W: ["W_FLASH", "SLOW", "CHARM", "MR_SHRED"],
    E: ["E_FLASH", "MS_UP", "WALL_HOP"],
    R: ["WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    ETC: [],
  },

  notes: [
    "[[STEALTH]] 중 점멸써도 [[STEALTH]] 안풀림", "W에 [[CHARM]], [[MR_SHRED]]은 추가발동 느낌으로\n표식이 다 찬 대상을 공격해야 발동", "E가 정말 어려운 조건에서 [[WALL_HOP]] 가능", "R은 체력 30%이하 대상에게 피해증가"
  ],


  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default evelynn;
