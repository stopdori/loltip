import type { ChampData } from "../interactions/types";

const khazix: ChampData = {
  id: "khazix",
  skills: {
    base : {
    P: ["SLOW"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "HEAL"],
    E: ["WALL_HOP"],
    R: ["INVISIBILITY", "MS_UP"],
    ETC: [],
  },

  alt: {
      
      P: ["SLOW"],
      Q: ["Q_FLASH"],
      W: ["W_FLASH", "HEAL", "SLOW", "REVEALED"],
      E: ["WALL_HOP"],
      R: ["INVISIBILITY", "MS_UP"],
      ETC: [],
    },
  },

  notes: {
    ko: [
    "P에 [[SLOW]]는 내 모습이 상대에게 안 보일 때 발동", "W [[HEAL]]은 폭발 범위내에 서 있어야 발동", "[[INVISIBILITY]] 상태일 때 점멸 써도 안 풀림\nE(점프)는 풀림", "E로 날아가는 도중 스킬 시전 가능"
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
    6: 100,
    11: 85,
    16: 70,
  },

};

export default khazix;
