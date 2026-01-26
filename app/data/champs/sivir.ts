import type { ChampSkill } from "../types";

const sivir: ChampSkill = {
  id: "sivir",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "AA_RESET"],
    E: ["SPELL_SHIELD", "HEAL"],
    R: ["MS_UP"],
    ETC: [],
  },

  notes: [
    "E는 챔핀언별로 아래 박스에 정리", "R 활성화 중 챔피언에 기본공격하면\n기본스킬 쿨타임 감소\nW(튕부)에 챔피언이 맞는건 감소 안함",
  ],

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default sivir;
