import type { ChampData } from "../interactions/types";

const sivir: ChampData = {
  id: "sivir",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "AA_RESET"],
    E: ["SPELL_SHIELD", "HEAL"],
    R: ["MS_UP"],
  },

  vision: {
    P: [],
    Q: ["FEEDBACK_SOUND"],
    W: ["FEEDBACK_INDICATOR", "REVEALED"],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["DMG_PHYSICAL", "TIMING_CAST"],
    W: ["BUFF_FORM", "DMG_PHYSICAL"],
    E: ["BUFF_FORM"],
    R: ["BUFF_FORM"],
  },

  notes: {
    ko: [
    "W(튕부)를 사용하고 시비르가 부쉬에서 공격을 하면 상대에게 위치가 보이는데, 튕기는 부메랑이 튕기는 동안 계속 평타를 치는 판정으로 시비르의 위치가 보임.", "E는 챔핀언별로 아래 박스에 정리", "R 활성화 중 챔피언에 기본공격하면\n기본스킬 쿨타임 감소\nW(튕부)에 챔피언이 맞는건 감소 안함",
  ],
    en: ["E is detailed per champion in the box below", "During R, basic attacking a champion reduces basic skill cooldowns.\nW (Ricochet) bouncing off champions does NOT reduce cooldowns"]
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default sivir;
