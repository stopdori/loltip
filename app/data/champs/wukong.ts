import type { ChampData } from "../interactions/types";

const wukong: ChampData = {
  id: "wukong",
  skills: {
    P: [],
    Q: ["AR_SHRED", "AA_RESET"],
    W: ["W_FLASH", "WALL_HOP", "INVISIBILITY"],
    E: ["E_FLASH", "WALL_HOP", "AS_UP"],
    R: ["R_FLASH", "MS_UP", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_INTERACT", "BA", "Q", "W", "E", "R"],
    Q: ["DMG_PHYSICAL", "ON_HIT", "BUFF_STACK"],
    W: ["CLONE", "CAMOUFLAGE", "BUFF_STACK"],
    E: ["DMG_MAGIC", "TARGETED", "SWARM", "DASH", "BUFF_STACK"],
    R: ["DMG_PHYSICAL", "SKILL_TOGGLE", "AOE", "DOT", "BUFF_STACK"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "W에 [[INVISIBILITY]] 중에 점멸 써도 안풀림", "E의 [[MS_UP]]는 분신도 같이 증가함", "E는 적중한 대상 하나당 P [[BUFF_STACK]] 증가.", "R은 CC를 맞아도 시전을 멈추지 않음",
        ],
        en: ["W [[INVISIBILITY]] does not break on flash", "E's [[MS_UP]] also applies to the clone", "R cannot be cancelled by any CC"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 110,
    16: 90,
  },

};

export default wukong;
