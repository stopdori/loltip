import type { ChampData } from "../interactions/types";

const milio: ChampData = {
  id: "milio",
  skills: {
    P: [],
    Q: ["AIRBORNE", "SLOW"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: ["HEAL", "CC_CLEANSE", "TENACITY"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[R_FLASH]] 안됨", "P는 스킬에 닿은 아군은 평타가 강화됨.\n Q도 경로에 아군이 서있으면 강화됨.", "W에 텔 안됨", "R은 자신이 CC걸리면 사용이 안됨"
  ],
    en: ["[[Q_FLASH]] and [[R_FLASH]] not possible", "P: allies hit by skills have their basic attacks empowered.\nQ also empowers allies standing in its path.", "Cannot TP onto W", "R cannot be cast while Milio is CC'd"]
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
    6: 160,
    11: 145,
    16: 130,
  },

};

export default milio;
