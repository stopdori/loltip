import type { ChampData } from "../interactions/types";

const ziggs: ChampData = {
  id: "ziggs",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "AIRBORNE", "WALL_HOP"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[W_FLASH]], [[E_FLASH]] 안됨", "W로 타워[[EXECUTE]] 가능", "R은 중심이 효과가 큼"
      ],
        en: ["[[W_FLASH]] and [[E_FLASH]] not possible", "W can [[EXECUTE]] towers", "R deals maximum damage in the center"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 95,
    16: 70,
  },

};

export default ziggs;
