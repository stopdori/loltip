import type { ChampData } from "../interactions/types";

const zac: ChampData = {
  id: "zac",
  skills: {
    P: ["REVIVE", "ALLY_TP_OK"],
    Q: ["SLOW", "AIRBORNE", "TETHER"],
    W: [],
    E: ["AIRBORNE", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]] 안됨", "P 쿨타임은 300s\n [[REVIVE]]은 [[GW]]효과 안받음", "E에 [[AIRBORNE]]은 충전시간에 비례", "R에 처음 맞으면 [[AIRBORNE]]\n그 다음은 [[SLOW]]"
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
    6: 120,
    11: 105,
    16: 90,
  },

};

export default zac;
