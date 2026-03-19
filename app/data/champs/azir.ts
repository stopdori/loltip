import type { ChampData } from "../interactions/types";

const azir: ChampData = {
  id: "azir",
  skills: {
    P: [],
    Q: ["SLOW"],
    W: [],
    E: ["E_FLASH", "SHIELD", "WALL_HOP"],
    R: ["WALL", "AIRBORNE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[R_FLASH]] 안됨", "병사에 텔 안됨", "E는 W(병사)에게 이동을 시작하면서 [[SHIELD]] 발동.\n이동거리가 짧아서 W(병사)에 E를 사용하고 도착하기 전에 Q를 써서 W(병사)와의 거리를 벌려 더 멀리 갈 수 있음.\n이 때 방향도 바꿀 수 있음."
  ],
    en: ["[[Q_FLASH]] and [[R_FLASH]] not possible", "Cannot TP onto soldiers", "E activates [[SHIELD]] at the start of movement toward the W (soldier).\nBecause the travel distance is short, cast E toward the soldier then Q before arriving to push the soldier further and travel farther.\nThe direction can also be changed."]
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
    6: 120,
    11: 105,
    16: 90,
  },

};

export default azir;
