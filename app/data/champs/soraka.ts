import type { ChampSkill } from "../types";

const soraka: ChampSkill = {
  id: "soraka",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "HEAL", "SLOW"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SILENCE", "ROOT"],
    R: ["HEAL"],
    ETC: [],
  },

  notes: [
    "Q로 상대를 맞추고 W를 써야 효율이 좋음", "E 위에 상대가 계속 서있으면 [[ROOT]]", "R은 체력 40% 이하 대상에게 효과 증가"
  ],

  ultCooldown: {
    6: 150,
    11: 135,
    16: 120,
  },

};

export default soraka;
