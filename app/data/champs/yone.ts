import type { ChampSkill } from "../types";

const yone: ChampSkill = {
  id: "yone",
  skills: {
    P: [],
    Q: ["Q_FLASH", "AIRBORNE", "WALL_HOP"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "MS_UP", "WALL_HOP"],
    R: ["KNOCKBACK", "WALL_HOP"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]] 안됨", "P의 [[AD_UP]]는 치명타 초과분이 변환", "Q [[AIRBORNE]]은 Q3타에 발동", "W에 보호막은\n적중한 적 챔피언 수에 따라 증가", "E 발동 시 벽 못넘음\n돌아오는 E는 벽 넘음",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default yone;
