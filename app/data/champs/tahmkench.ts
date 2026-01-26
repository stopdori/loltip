import type { ChampSkill } from "../types";

const tahmkench: ChampSkill = {
  id: "tahmkench",
  skills: {
    P: [],
    Q: ["Q_FLASH", "HEAL", "SLOW", "STUN"],
    W: ["AIRBORNE", "WALL_HOP"],
    E: ["SHIELD", "HEAL"],
    R: ["R_FLASH", "SHIELD", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "Q는 챔피언에 적중하면 [[HEAL]]이 됨", "적 3스택 일 때 Q를 맞히면 [[STUN]]\nQR 하면 멀리 있어도 먹어짐", "E는 사용하면 [[SHIELD]]\n사용하지 않으면 [[HEAL]]", "R에 벽넘기 태그는 아군을 삼킬 때\n아군이 벽을 넘는다는 관점에서 가능",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default tahmkench;
