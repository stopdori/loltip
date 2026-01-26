import type { ChampSkill } from "../types";

const kayle: ChampSkill = {
  id: "kayle",
  skills: {
    P: ["AS_UP", "MS_UP"],
    Q: ["SLOW", "AR_MR_SHRED"],
    W: ["W_FLASH", "HEAL", "MS_UP"],
    E: ["AA_RESET"],
    R: ["R_FLASH", "INVULNERABLE"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨", "P효과는 E스킬을 찍어야 발동\nP에 [[MS_UP]]는 5스택일 때 기본 공격 시 발동", "6 / 11 / 16 레벨에 R을 찍으면 강화\n6은 [[RANGE_UP]]\n11은 5스택 일 때 기본공격 시 화염파발동\n화염파는 범위+추뎀 (기본공격은 한대상만)\n16은 추가 [[RANGE_UP]] + 항상 5스택효과"
  ],

  ultCooldown: {
    6: 160,
    11: 120,
    16: 80,
  },

};

export default kayle;
