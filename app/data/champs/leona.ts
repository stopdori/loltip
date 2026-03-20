import type { ChampData } from "../interactions/types";

const leona: ChampData = {
  id: "leona",
  skills: {
    P: [],
    Q: ["AA_RESET", "STUN"],
    W: ["DMG_REDUCE"],
    E: ["E_FLASH", "ROOT", "WALL_HOP", "CC_BUFFER"],
    R: ["R_FLASH", "SLOW", "STUN"],
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
    "레오나가 W를 사용하면 [[DMG_REDUCE]] 버프가 생기고, 끝날 때 피해 장판을 방출 하는데, 상대 챔피언을 적중시키면 [[DMG_REDUCE]]의 지속시간이 추가로 늘어남", "E는 마지막에 맞은 대상에게 돌진.", "E 스킬은 2단계로 나뉨 찌르기/돌진.\n찌르기단계에서 갈리오가 맞은 CC는 유효 하지만\n돌진단계가 발동되어 앞으로 이동하는 것.\n돌진단계에는 CC 저항력 없음.", "R은 중심 부분에 맞히면 [[STUN]], 주변에 맞으면 [[SLOW]]가 걸림"
  ],
    en: ["Using W grants a [[DMG_REDUCE]] buff. When it expires, a damage zone is released — hitting an enemy champion extends the [[DMG_REDUCE]] duration.", "E dashes to the last target hit.", "E has two phases: stab / dash.\nCC that hits Leona during the stab phase is registered,\nbut the dash phase still activates and she moves forward.\nThe dash phase has no CC resistance.", "R deals [[STUN]] to targets hit at the center, and [[SLOW]] to those hit in the surrounding area"]
  },

  ultCooldown: {
    6: 90,
    11: 75,
    16: 60,
  },

};

export default leona;
