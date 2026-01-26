import type { ChampSkill } from "../types";

const mordekaiser: ChampSkill = {
  id: "mordekaiser",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["SHIELD", "HEAL"],
    E: ["E_FLASH", "GRAB", "MR_PEN"],
    R: ["R_FLASH", "NEARSIGHT"],
    ETC: [],
  },

  notes: [
    "Q는 단일 대상 명중 시 피해가 증가함", "R에 관련된 챔피언별 메커니즘은 하단 박스에 정리했음"
  ],

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default mordekaiser;
