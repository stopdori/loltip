import type { ChampData } from "../interactions/types";

const gwen: ChampData = {
  id: "gwen",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "UNTARGETABLE"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "SLOW"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q는 중앙에 명중해야 좋음", "W는 범위 밖에서 날아오는 투사체를 맞지않음\n그웬에게 시전한 타겟팅 스킬도 날아오다 그웬이 W를 키면 맞지 않음"
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
    11: 100,
    16: 80,
  },

};

export default gwen;
