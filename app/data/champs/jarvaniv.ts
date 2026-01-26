import type { ChampSkill } from "../types";

const jarvaniv: ChampSkill = {
  id: "jarvaniv",
  skills: {
    P: [],
    Q: ["Q_FLASH", "AR_SHRED", "AIRBORNE", "WALL_HOP"],
    W: ["SHIELD", "SLOW"],
    E: ["AS_UP"],
    R: ["R_FLASH", "WALL", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "Q(창)에 [[AIRBORNE]]은 E(깃발)에 적중해야 됨", "E는 주변에 [[AS_UP]] 버프가 있음", "W는 상대 챔피언을 많이 맞힐수록 방어막 증가", "R은 발동했을 때 상대가 점멸을 쓰면 피해짐"
  ],

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default jarvaniv;
