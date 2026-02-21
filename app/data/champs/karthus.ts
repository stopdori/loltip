import type { ChampData } from "../interactions/types";

const karthus: ChampData = {
  id: "karthus",
  skills: {
    P: [],
    Q: ["Q_FLASH", "VISION"],
    W: ["W_FLASH", "VISION", "MR_SHRED", "SLOW"],
    E: [],
    R: [],
    ETC: [],
  },

  notes: {
    ko: [
    "Q는 단일 대상 명중 시 피해가 증가함", "카서스 R 시전중에 점멸쓰면 절대 안됨\n궁 취소됨",
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
    6: 200,
    11: 180,
    16: 160,
  },

};

export default karthus;
