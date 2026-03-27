import type { ChampData } from "../interactions/types";

const nami: ChampData = {
  id: "nami",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SUSPENDING"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SLOW"],
    R: ["AIRBORNE", "SLOW", "UNINTERRUPTIBLE_CAST"],
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
    "Q는 놀랍게도 [[SUSPENDING]]", "R을 아군도 같이 맞추면 좋음 \n아군에게 패시브가 두배로 발동됨",
  ],
    en: ["Q is surprisingly [[SUSPENDING]]", "Having allies hit by R together doubles P's effect on them"]
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default nami;
