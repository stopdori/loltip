import type { ChampData } from "../interactions/types";

const syndra: ChampData = {
  id: "syndra",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "KNOCKBACK", "STUN"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "구체에 텔 안됨", "P는 40 Q강화(2스택), 60 W강화(고정피해 추가),80개 E강화([[SLOW]])", "W로 집을 때, 던질 때 다 [[W_FLASH]] 됨", "E는 밀려난 구체에 적이 맞으면 [[STUN]]", "EQ 콤보 안됨 QE 해야함\nWE 콤보도 아직 가능"
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
    6: 120,
    11: 100,
    16: 80,
  },

};

export default syndra;
