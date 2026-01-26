import type { ChampSkill } from "../types";

const illaoi: ChampSkill = {
  id: "illaoi",
  skills: {
    P: ["HEAL", "ALLY_TP_OK"],
    Q: [],
    W: ["AA_RESET", "WALL_HOP"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: [
    "[[Q_FLASH]] 안됨", "촉수 공격 한대당 잃은체력 회복임\n그래서 사실상 Q, W, E, R 다 [[HEAL]] 됨", "일라오이 E로 상대를 끌었다면\n범위를 벗어날때까지 잘 패줘야함"
  ],

  ultCooldown: {
    6: 120,
    11: 95,
    16: 70,
  },

};

export default illaoi;
