import type { ChampData } from "../interactions/types";

const teemo: ChampData = {
  id: "teemo",
  skills: {
    P: ["INVISIBILITY", "AS_UP"],
    Q: ["Q_FLASH", "BLIND"],
    W: ["MS_UP"],
    E: [],
    R: ["R_FLASH", "SLOW", "ALLY_TP_OK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: { phases: [
      { label: { ko: "R 버섯", en: "R Mushroom" }, tags: ["VISION"] },
      { label: { ko: "R 폭발", en: "R Explodes" }, tags: ["REVEALED"] },
    ] },
  },

  gimmick: {
    P: ["ST_CONDITIONAL"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["BUFF_STACK"] },
    ] },

    E: ["PASSIVE_BONUS", "DMG_MAGIC", "PROJECTILE", "ON_HIT", "DOT"],
    R: { phases: [
      { label: { ko: "R 버섯", en: "R Mushroom" }, tags: ["TIMING_CAST", "TRAP", "RECHARGE"] },
      { label: { ko: "R 폭발", en: "R Explodes" }, tags: ["DMG_MAGIC", "ZONE", "DOT"] },
    ] },
    
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P의 [[AS_UP]]는 [[INVISIBILITY]] 했다 풀었을 때 발동\n[[INVISIBILITY]]는\n부쉬 안 → 안 점멸 안풀림 \n부쉬 안 → 밖 점멸 풀림\n부쉬 밖 → 안 점멸 안풀림\n부쉬 밖 → 밖 점멸 풀림",
      ],
        en: ["P's [[AS_UP]] activates when coming out of [[INVISIBILITY]].\n[[INVISIBILITY]] flash rules:\nBush inside → inside: doesn't break\nBush inside → outside: breaks\nBush outside → inside: doesn't break\nBush outside → outside: breaks"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 35,
    11: 30,
    16: 25,
  },

};

export default teemo;
