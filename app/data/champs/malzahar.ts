import type { ChampSkill } from "../types";

const malzahar: ChampSkill = {
  id: "malzahar",
  skills: {
    P: ["DMG_REDUCE", "CC_IMMUNE"],
    Q: ["Q_FLASH", "SILENCE"],
    W: ["ALLY_TP_OK"],
    E: ["E_FLASH"],
    R: ["R_FLASH", "SUPPRESS"],
    ETC: [],
  },

  notes: [
    "P(패시브)는 CC기 무시임\nP있을 때 타워데미지 들어옴\n대신 90% 딜감소 임", "[[R_FLASH]]이 진짜 좋음"
  ],

  ultCooldown: {
    6: 140,
    11: 110,
    16: 80,
  },

};

export default malzahar;
