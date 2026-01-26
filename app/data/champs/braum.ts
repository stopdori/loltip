import type { ChampSkill } from "../types";

const braum: ChampSkill = {
  id: "braum",
  skills: {
    P: ["STUN"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "WALL_HOP"],
    E: ["E_FLASH", "DMG_REDUCE"],
    R: ["AIRBORNE", "SLOW"],
    ETC: [],
  },

  notes: [
    "E(방패)는 첫 투사체 데미지를 무시함\nE(방패)의 챔피언별 정보는 원래는 막을 수 없는 투사체를 막을 수 있게 되는것을 중점적으로 기록함", "[[R_FLASH]] 안됨\nR은 첫대상은 1초 나머지는 0.6초 [[AIRBORNE]]임"
  ],


  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default braum;
