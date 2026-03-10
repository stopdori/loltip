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
    "레오나가 W를 사용하면 [[DMG_REDUECE]] 버프가 생기고, 끝날 때 피해 장판을 방출 하는데, 상대 챔피언을 적중시키면 [[DMG_REDUCE]]의 지속시간이 추가로 늘어남", "E는 마지막에 맞은 대상에게 돌진.", "E는 두단계로 나누어짐\n찌르기 단계에서는 [[PSEUDO_UNSTOPPABLE]]\n돌진 단계는 [[PSEUDO_UNSTOPPABLE]]가 아님\n찌르기 단계에서 하드CC를 맞으면 무시하고 이동\n돌진 단계에서 하드CC를 맞으면 끊김", "R은 중심 부분에 맞히면 [[STUN]], 주변에 맞으면 [[SLOW]]가 걸림"
  ],
    en: ["Using W grants a [[DMG_REDUCE]] buff. When it ends, a damage zone is released. Hitting an enemy champion with it extends the [[DMG_REDUCE]] duration.", "E dashes to the last target hit.", "E has two phases: sword-throw / dash.\nPhase 1 (sword throw) is [[PSEUDO_UNSTOPPABLE]].\nPhase 2 (dash) is not [[PSEUDO_UNSTOPPABLE]].\nHard CC during phase 1 is ignored; hard CC during phase 2 interrupts the dash", "R deals [[STUN]] if it hits the center, and [[SLOW]] if it hits the surrounding area"]
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
