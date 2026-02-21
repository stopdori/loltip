import type { ChampData } from "../interactions/types";

const poppy: ChampData = {
  id: "poppy",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ANTI_DASH", "MS_UP", "GROUNDED"],
    E: ["E_FLASH", "STUN", "WALL_HOP"],
    R: ["R_FLASH", "AIRBORNE", ],
    ETC: [],
  },

  notes: {
    ko: [
    "P는 방패를 주워야 방어막이 생김", "[[E_FLASH]]은 [[INSEC_KICK]] 안됨", "[[R_FLASH]]은 짧게 모은것만 됨\n차징하면 불가\n차징하면 넥서스방향으로 날려보냄", "뽀삐가 W로 상대 이동스킬을 저지하면\n더이상 이동기를 사용하지 못하게 만듦\n[[GROUNDED]]를 [[CC_CLEANSE]]하면 이동기 사용 가능", "예) 레넥톤이 뽀삐에 붙어서 E를 쓰면 스킬이 유효하고 E 쿨타임을 돌려줌. 그리고나서 뽀삐 W에 막혀 [[AIRBORNE]]과 [[GROUNDED]]가 걸림\n이때 레넥톤이 [[CC_CLEANSE]]를 사용하면 E 사용 가능"
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

export default poppy;
