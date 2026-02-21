import type { ChampData } from "../interactions/types";

const fiddlesticks: ChampData = {
  id: "fiddlesticks",
  skills: {
    P: [],
    Q: ["Q_FLASH", "FEAR"],
    W: ["LIFESTEAL"],
    E: ["E_FLASH", "SLOW", "SILENCE"],
    R: ["WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "허수아비에 텔 안됨", "Q [[FEAR]]는 지속효과임 \n비전투, 시야 밖, 허수아비인 척(2초 동안 가만히 서있기)을 하면 [[FEAR]] 조건이 성립됨\n이 때 스킬로 피해를 입히면 [[FEAR]]가 발동함\n[[FEAR]]는 상대챔피언 개별로 쿨타임이 돔\n쿨타임은 대상 주변에 원형 쿨타임이 생김"
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
    11: 110,
    16: 80,
  },

};

export default fiddlesticks;
