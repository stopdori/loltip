import type { ChampData } from "../interactions/types";

const diana: ChampData = {
  id: "diana",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "VISION"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "GRAB"],
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
    "P는 레벨별 [[AS_UP]]이 있고\n스킬 사용시 [[AS_UP]] 추가로 있음", "W 구체를 다 터뜨리면 추가 [[SHIELD]] 얻음", "EQ로 E 초기화 안됨",
  ],
    en: ["P has a level-based [[AS_UP]] plus additional [[AS_UP]] from using skills", "Fully detonating all W spheres grants a bonus [[SHIELD]]", "E+Q does not reset E"]
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default diana;
