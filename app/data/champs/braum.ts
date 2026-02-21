import type { ChampData } from "../interactions/types";

const braum: ChampData = {
  id: "braum",
  skills: {
    P: ["STUN"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "WALL_HOP"],
    E: ["E_FLASH", "DMG_REDUCE"],
    R: ["AIRBORNE", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "E는 첫 투사체 데미지를 무시함", "E의 막을 수 있다의 개념은 두 가지로 정리함 \n1. [[DAMAGE_NULLIFY]] 브라움에게 가해지는 첫 피해를 무효\n2. [[INTERCEPT_PROJECTILE]] 아군에게 날아가는 것을 대신 맞아줌. (투사체 삭제)", "E의 챔피언별 정보는 원래는 막을 수 없는 투사체를 막을 수 있게 되는것을 중점적으로 기록함", "E를 쓰고 존야를 쓰면 E효과는 발동하지 않음", "[[R_FLASH]] 안됨\nR은 첫대상은 1초 나머지는 0.6초 [[AIRBORNE]]임"
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
    6: 130,
    11: 115,
    16: 100,
  },

};

export default braum;
