import type { ChampData } from "../interactions/types";

const varus: ChampData = {
  id: "varus",
  skills: {
    P: ["AS_UP", "AD_UP", "AP_UP"],
    Q: ["Q_FLASH"],
    W: [],
    E: ["SLOW", "GW"],
    R: ["R_FLASH", "ROOT"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[E_FLASH]] 안됨", "P는 적처치(미니언, 와드, 정글몹)에 발동\n챔피언 처치 관여 시 2.5배", "Q 관통은 첫대상 이후 데미지 감소", "W는 Q 차징하면서 사용 가능", "E의 [[SLOW]], [[GW]]는 범위 안에 있는 대상에게 지속 적용", "R은 대상 주변 챔피언들에 전염가능\n원 범위를 벗어나면 걸리지 않음", 
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
    6: 100,
    11: 80,
    16: 60,
  },

};

export default varus;
