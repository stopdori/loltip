import type { ChampSkill } from "../types";

const yunara: ChampSkill = {
  id: "yunara",
  skills: {
    base : {
    P: [],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: ["MS_UP"],
    R: [],
    ETC: [],
  },

  alt : {
    P: [],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "WALL_HOP"],
    R: [],
    ETC: [],
  },
},

  notes: [
    "W를 쓰고 R을 쓰면 쿨타임 80% 감소", "E를 쓰고 R을 쓰면 초기화"
  ],

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default yunara;
