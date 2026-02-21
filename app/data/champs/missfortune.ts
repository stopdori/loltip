import type { ChampData } from "../interactions/types";

const missfortune: ChampData = {
  id: "missfortune",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "MS_UP"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: [],
    ETC: [],
  },

  notes: {
    ko: [
    "E의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "R은 E로 [[SLOW]]를 걸고 그 다음 쓰는 게 좋음\nR 채널링에 움직이면 풀림"
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
    11: 110,
    16: 100,
  },

};

export default missfortune;
