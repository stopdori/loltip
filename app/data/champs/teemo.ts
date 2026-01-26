import type { ChampSkill } from "../types";

const teemo: ChampSkill = {
  id: "teemo",
  skills: {
    P: ["INVISIBILITY", "AS_UP"],
    Q: ["Q_FLASH", "BLIND"],
    W: ["MS_UP"],
    E: [],
    R: ["R_FLASH", "SLOW", "ALLY_TP_OK"],
    ETC: [],
  },

  notes: [
    "P의 [[AS_UP]]는 [[INVISIBILITY]] 했다 풀었을 때 발동\n[[INVISIBILITY]]는\n부쉬 안 → 안 점멸 안풀림 \n부쉬 안 → 밖 점멸 풀림\n부쉬 밖 → 안 점멸 안풀림\n부쉬 밖 → 밖 점멸 풀림",
  ],

  ultCooldown: {
    6: 35,
    11: 30,
    16: 25,
  },

};

export default teemo;
