import type { ChampSkill } from "../types";

const hwei: ChampSkill = {
  id: "hwei",

  skills: {
    base: {
      // 🔫 Q스킬 기반
      P: [],
      Q: ["Q_FLASH"],
      W: ["W_FLASH"],
      E: ["SLOW"],
      R: ["R_FLASH", "SLOW"],
      ETC: [],
    },

    alt: {
      // 🔨 W스킬 기반
      P: [],
      Q: ["MS_UP"],
      W: ["W_FLASH", "SHIELD"],
      E: ["MANA_RESTORE"],
      R: ["R_FLASH", "SLOW"],
      ETC: [],
    },

    alt2: {
      // 🔨 E스킬 기반
      P: [],
      Q: ["Q_FLASH", "FEAR"],
      W: ["W_FLASH", "ROOT"],
      E: ["E_FLASH", "AIRBORNE", "SLOW"],
      R: ["R_FLASH", "SLOW"],
      ETC: [],
    },
  },

  notes: [
    "흐웨이 스킬은 색상별로 외우면 좋음", "Q스킬(빨강 - 딜)\nQW는 CC걸린 대상 또는 고립된 대상에게 추가데미지를 줌", "W스킬(파랑 - 유틸)", "E스킬(보라 - CC)\nEW는 날아가는 경로에 다른대상이 있다면 막힘"
  ],


  ultCooldown: {
    6: 140,
    11: 115,
    16: 80,
  },
};

export default hwei;