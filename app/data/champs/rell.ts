import type { ChampData } from "../interactions/types";

const rell: ChampData = {
  id: "rell",

  skills: {
    base: {  //승마
      P: ["AR_MR_SHRED"],
      Q: ["Q_FLASH", "STUN", "SHIELD_BREAK"],
      W: ["SHIELD", "AS_UP", "AIRBORNE", "WALL_HOP"],
      E: ["MS_UP"],
      R: ["R_FLASH", "GRAB"],
      ETC: [],
   },

   alt: {    //중갑
      P: ["AR_MR_SHRED"],
      Q: ["Q_FLASH", "STUN", "SHIELD_BREAK"],
      W: ["MS_UP", "GRAB", "WALL_HOP"],
      E: ["MS_UP"],
      R: ["R_FLASH", "GRAB"],
      ETC: [],
   },
  },
  notes: {
    ko: [
    "P는 방마저를 훔치는것\n(대상은 감소 렐은 증가)", "렐은 W가 좀 복잡함\n승마폼에서 W하면, 중갑폼으로 벽넘기 가능\n뿐만 아니라 W로 다시 승마하고 일정 시간 안에 평타를 치면 대상을 [[GRAB]] 하는데\n이때 얇은 벽넘어 대상을 공격하면 렐이 벽을 넘으면서 [[GRAB]]함", "승마폼 일 때 상시[[MS_UP]] (W효과로)\n낙마할 때 보호막을 줌", "E는 [[AA_RESET]] 안됨"
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
    6: 120,
    11: 100,
    16: 80,
  },
};

export default rell;
