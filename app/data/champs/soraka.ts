import type { ChampData } from "../interactions/types";

const soraka: ChampData = {
  id: "soraka",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "HEAL", "SLOW"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SILENCE", "ROOT"],
    R: ["HEAL"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q로 상대를 맞추고 W를 써야 효율이 좋음", "E의 [[SILENCE]]은 범위 안에 있는 대상에게 지속 적용\nE 위에 상대가 계속 서있으면 [[ROOT]]", "R은 체력 40% 이하 대상에게 효과 증가"
  ],
    en: []
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 150,
    11: 135,
    16: 120,
  },

};

export default soraka;
