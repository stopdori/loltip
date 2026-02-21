import type { ChampData } from "../interactions/types";

const leona: ChampData = {
  id: "leona",
  skills: {
    P: [],
    Q: ["AA_RESET", "STUN"],
    W: ["DMG_REDUCE"],
    E: ["E_FLASH", "ROOT", "WALL_HOP"],
    R: ["R_FLASH", "SLOW", "STUN"],
    ETC: [],
  },

  notes: {
    ko: [
    "W를 상대 챔피언에게 적중시키면 지속시간이 늘어남", "E는 두단계로 나누어짐\n1단계 검을 날리는 단계에서는 [[UNSTOPPABLE]]\n2단계 돌진단계는 [[UNSTOPPABLE]]가 아님\n1단계에서 하드CC를 맞으면 무시하고 이동\n2단계에서 하드CC를 맞으면 끊김", "R은 중앙에 맞혀야 [[SLOW]]대신 [[STUN]]이 걸림"
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
    6: 90,
    11: 75,
    16: 60,
  },

};

export default leona;
