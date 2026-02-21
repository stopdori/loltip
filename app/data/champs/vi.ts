import type { ChampData } from "../interactions/types";

const vi: ChampData = {
  id: "vi",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "AIRBORNE", "WALL_HOP"],
    W: ["AR_SHRED", "AS_UP"],
    E: ["AA_RESET"],
    R: ["R_FLASH", "REVEALED", "UNSTOPPABLE", "KNOCKBACK", "STUN", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "바이가 cc를 먼저 넣어주면\n팀이 연계하기 상당히 편함", "Q로 적중 시키면 W 효과 적용", "R로 대상을 지정하면 [[INVISIBILITY]]도 보임\n대상경로 적들을 [[KNOCKBACK]], [[STUN]] 시킴"
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
    6: 140,
    11: 115,
    16: 90,
  },

};

export default vi;
