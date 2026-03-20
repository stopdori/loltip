import type { ChampData } from "../interactions/types";

const gragas: ChampData = {
  id: "gragas",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["DMG_REDUCE", "UNINTERRUPTIBLE_CHANNEL"],
    E: ["E_FLASH", "KNOCKBACK", "WALL_HOP"],
    R: ["R_FLASH", "AIRBORNE"],
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
    "Q1을 사용했을 때 그라가스가 CC에 걸리면 Q2를 사용 할 수 없음.", "E(배치기)로 날아가는 도중에 Q R 다 가능",
  ],
    en: ["If Gragas is hit by CC after casting Q1, Q2 cannot be activated.", "Q and R can be cast mid-flight during E"]
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default gragas;
