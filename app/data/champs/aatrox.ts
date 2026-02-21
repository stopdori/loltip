import type { ChampData } from "../interactions/types";

const aatrox: ChampData = {
  id: "aatrox",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["W_FLASH", "SLOW", "TETHER", "TRUE_SIGHT"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP", "LIFESTEAL"],
    R: ["MS_UP"],
    ETC: [],
  },
  notes: {
    ko: ["Q는 끝에 맞히면 [[AIRBORNE]]", "W는 스킬설명에 [[TRUE_SIGHT]]가 없는데\n효과가 똑같이 작동함", "E스킬 기본효과에는 챔피언을 대상으로\n모든피해 [[LIFESTEAL]]이 붙어있음\n그래서 평타, Q, W, 아이템효과 등등 다 적용",
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

export default aatrox;
