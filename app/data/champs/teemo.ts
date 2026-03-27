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
    ko: [
    "P의 [[AS_UP]]는 [[INVISIBILITY]] 했다 풀었을 때 발동\n[[INVISIBILITY]]는\n부쉬 안 → 안 점멸 안풀림 \n부쉬 안 → 밖 점멸 풀림\n부쉬 밖 → 안 점멸 안풀림\n부쉬 밖 → 밖 점멸 풀림",
  ],
    en: ["P's [[AS_UP]] activates when coming out of [[INVISIBILITY]].\n[[INVISIBILITY]] flash rules:\nBush inside → inside: doesn't break\nBush inside → outside: breaks\nBush outside → inside: doesn't break\nBush outside → outside: breaks"]
  },

  ultCooldown: {
    6: 35,
    11: 30,
    16: 25,
  },

};

export default teemo;
