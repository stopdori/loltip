import type { ChampData } from "../interactions/types";

const belveth: ChampData = {
  id: "belveth",
  skills: {
    P: ["AS_UP", "GHOSTING", "ALLY_TP_OK"],
    Q: ["WALL_HOP"],
    W: ["AIRBORNE"],
    E: ["DMG_REDUCE", "LIFESTEAL"],
    R: ["MS_UP", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "스킬 사용후 [[AS_UP]]이 증가하고 [[GHOSTING]]가 됨", "애기 벌레들에 [[ALLY_TP_OK]]", "Q에 벽넘기는 R로 변신했을때만 가능", "[[W_FLASH]] 안됨", "E 시전중에 CC맞으면 풀림"
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
    6: 0,
    11: 0,
    16: 0,
  },

};

export default belveth;
