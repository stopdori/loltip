import type { ChampData } from "../interactions/types";

const yunara: ChampData = {
  id: "yunara",
  skills: {
    base : {
    P: [],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: ["MS_UP"],
    R: [],
  },

  alt : {
    P: [],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "WALL_HOP"],
    R: [],
  },
},

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "W를 쓰고 R을 쓰면 쿨타임 80% 감소", "E를 쓰고 R을 쓰면 E 초기화"
      ],
        en: ["Using W then R reduces W cooldown by 80%", "Using E then R resets E"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default yunara;
