import type { ChampData } from "../interactions/types";

const hecarim: ChampData = {
  id: "hecarim",
  skills: {
    P: ["AD_UP"],
    Q: [],
    W: ["HEAL"],
    E: ["WALL_HOP", "KNOCKBACK", "GHOSTING"],
    R: ["WALL_HOP", "FEAR", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "헤카림은 이속이 증가하면 [[AD_UP]]", "E스킬은 두단계로 나뉨 추격/공격\n추격단계에 헤카림이 맞은 CC는 유효하지만 E가 해제되지는 않음\n공격단계가 발동(앞발들기)되면 CC를 맞아도 스킬이 유효함", "R의 [[FEAR]]는 판정이 좀 좋지않음\n타이밍 맞춰 상대가 이동기를 쓰면\n쉽게 피하는 모습을 자주 봄"
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
    11: 120,
    16: 100,
  },

};

export default hecarim;
