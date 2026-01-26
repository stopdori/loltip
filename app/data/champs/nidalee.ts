import type { ChampSkill } from "../types";

const nidalee: ChampSkill = {
  id: "nidalee",

  skills: {
    base: {
      // 인간폼
      P: ["MS_UP"],
      Q: ["REVEALED"],                
      W: ["W_FLASH", "REVEALED", "ALLY_TP_OK"],
      E: ["E_FLASH", "HEAL", "AS_UP"],
      R: [],
      ETC: [],
    },

    alt: {
      // 쿠거폼
      P: ["MS_UP"],
      Q: [],      
      W: ["WALL_HOP"],
      E: [],
      R: [],
      ETC: [],
    },
  },

  notes: [
    "쿠거폼 점멸+스킬들 다 안됨", "인간폼 Q, W를 맞히면 사냥이 발동되고 사냥이 발동되면 R 쿨타임이 초기화되서 바로 변신가능"
  ],


  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default nidalee;
