import type { ChampData } from "../interactions/types";

const thresh: ChampData = {
  id: "thresh",
  skills: {
    P: [],
    Q: ["STUN", "GRAB", "TRUE_SIGHT", "WALL_HOP"],
    W: ["W_FLASH", "SHIELD", "ALLY_TP_OK"],
    E: ["AIRBORNE", "SLOW"],
    R: ["SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[E_FLASH]], [[R_FLASH]] 안됨\nQ 돌진단계에 점멸은 되긴 함", "Q는 두단계로 나뉨 투척/돌진단계\n투척단계에 CC를 맞아도 대부분 유효\n돌진단계에 [[HARD_CC]]를 맞으면 끊길 수 있음", "W(랜턴)은 아군의 진행방향에 깔아주면 좋음"
  ],
    en: ["[[Q_FLASH]], [[E_FLASH]], [[R_FLASH]] not possible.\nFlash during Q dash phase technically works", "Q has two phases: throw / dash.\nCC during the throw phase is mostly valid.\nHard CC during the dash can interrupt it", "W (lantern) is best placed in the ally's direction of movement"]
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
    11: 100,
    16: 80,
  },

};

export default thresh;
