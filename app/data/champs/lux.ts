import type { ChampData } from "../interactions/types";

const lux: ChampData = {
  id: "lux",
  skills: {
    P: [],
    Q: ["Q_FLASH", "PIERCE", "ROOT"],
    W: ["SHIELD"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: ["VISION"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[W_FLASH]], [[R_FLASH]] 안됨", "Q에 [[PIERCE]]은 1번만", "E의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "E에 텔 안타짐"
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
    6: 60,
    11: 50,
    16: 40,
  },

};

export default lux;
