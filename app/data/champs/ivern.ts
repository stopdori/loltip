import type { ChampData } from "../interactions/types";

const ivern: ChampData = {
  id: "ivern",
  skills: {
    P: [],
    Q: ["ROOT", "WALL_HOP"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "SHIELD", "SLOW"],
    R: ["AIRBORNE", "ALLY_TP_OK"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "W는 일정시간 후 폭발하는데\n폭발에 상대가 맞으면 [[SLOW]]\n맞은대상이 없으면 추가 보호막 "
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
    11: 130,
    16: 120,
  },

};

export default ivern;
