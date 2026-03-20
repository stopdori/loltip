import type { ChampData } from "../interactions/types";

const lucian: ChampData = {
  id: "lucian",
  skills: {
    P: [],
    Q: ["Q_FLASH", "UNINTERRUPTIBLE_CAST"],
    W: ["W_FLASH", "MS_UP"],
    E: ["WALL_HOP"],
    R: [],
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
    "W는 상대에게 적중하고 공격하면 루시안의 [[MS_UP]]가 되는데, 아군이 공격해도 루시안의 [[MS_UP]]가 발동함",
  ],
    en: ["W grants [[MS_UP]] to Lucian when the marked target is attacked by any ally, not just Lucian"]
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default lucian;
