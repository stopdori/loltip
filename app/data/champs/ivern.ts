import type { ChampData } from "../interactions/types";

const ivern: ChampData = {
  id: "ivern",
  skills: {
    P: [],
    Q: ["ROOT", "WALL_HOP"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "SHIELD", "SLOW"],
    R: ["AIRBORNE", "ALLY_TP_OK"],
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
    "[[Q_FLASH]] 안됨", "W는 일정시간 후 폭발하는데\n폭발에 상대가 맞으면 [[SLOW]]\n맞은대상이 없으면 추가 보호막 "
  ],
    en: ["[[Q_FLASH]] not possible", "W explodes after a delay.\nHitting an enemy with the explosion applies [[SLOW]].\nIf no enemy is hit, Ivern gains a bonus shield"]
  },

  ultCooldown: {
    6: 140,
    11: 130,
    16: 120,
  },

};

export default ivern;
