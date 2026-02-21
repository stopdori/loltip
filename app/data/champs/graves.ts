import type { ChampData } from "../interactions/types";

const graves: ChampData = {
  id: "graves",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "NEARSIGHT", "SLOW"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "WALL_HOP"],
    ETC: [],
  },

  notes: {
    ko: [
    "두꺼운벽에 붙어서 평E평하면 평캔 엄청빠름", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "R 시전중에 방해 받으면 투사체는 발사되고 이동은 경우에따라 제한됨"
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

export default graves;
