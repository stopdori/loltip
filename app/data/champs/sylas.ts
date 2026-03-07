import type { ChampData } from "../interactions/types";

const sylas: ChampData = {
  id: "sylas",
  skills: {
    P: [],
    Q: ["SLOW"],
    W: ["W_FLASH", "LIFESTEAL", "WALL_HOP"],
    E: ["AIRBORNE", "WALL_HOP"],
    R: ["R_FLASH"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[E_FLASH]] 안됨", "P는 평캔이 아니고, 공속증가임", "E는 E1, E2로 나뉘는데\nE2는 투척/돌진단계로 나뉨\n투척단계에 CC를 맞으면 무시하고 돌진단계를 발동\n돌진단계에 [[HARD_CC]]를 맞으면 끊길 수 있음", "R은 챔피언별로 아래 박스에 정리"
  ],
    en: ["[[Q_FLASH]] and [[E_FLASH]] not possible", "P is not an AA cancel — it increases attack speed", "E splits into E1 and E2.\nE2 has a throw / dash phase.\nCC during the throw phase is ignored and the dash still triggers.\nHard CC during the dash can interrupt it", "R is detailed per champion in the box below"]
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
    6: 80,
    11: 55,
    16: 30,
  },

};

export default sylas;
