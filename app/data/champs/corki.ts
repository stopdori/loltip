import type { ChampData } from "../interactions/types";

const corki: ChampData = {
  id: "corki",
  skills: {
    P: [],
    Q: ["Q_FLASH", "REVEALED"],
    W: ["W_FLASH", "WALL_HOP"],
    E: ["E_FLASH", "AR_MR_SHRED"],
    R: ["R_FLASH"],
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
    "[[R_FLASH]]은 R누르고 바로 점멸하면 안됨.\nR누르고 점멸을 약간 천천히 써야 적용.", "R의 스택 개수는 코르키 마나바 아래에 표시됨.\n상대도 볼 수 있음."
  ],
    en: ["[[R_FLASH]] requires a slight delay after pressing R — using flash immediately cancels it.", "The R stack count is displayed below Corki's mana bar and is visible to enemies."]
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default corki;
