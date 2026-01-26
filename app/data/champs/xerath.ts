import type { ChampSkill } from "../types";

const xerath: ChampSkill = {
  id: "xerath",
  skills: {
    P: ["MANA_RESTORE"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "STUN"],
    R: [],
    ETC: [],
  },

  notes: [
    "Q플은 차징중에만 가능\n발사 중에는 안됨", "W는 중앙부에 적중하면 효과 증가", "E는 거리가 멀 수록 [[STUN]] 시간 증가", "R은 찍을수록 발사수가 4/5/6\n시전 중 움직이면 종료"
    ],

  ultCooldown: {
    6: 130,
    11: 115,
    16: 110,
  },

};

export default xerath;
