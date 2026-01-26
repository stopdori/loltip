import type { ChampSkill } from "../types";

const jayce: ChampSkill = {
  id: "jayce",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["MS_UP"],
      Q: ["Q_FLASH"],                // 인간 Q는 Q플 X
      W: ["AA_RESET", "AS_UP"],
      E: ["MS_UP"],
      R: [],
      ETC: [],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP"],
      Q: ["Q_FLASH", "SLOW", "WALL_HOP"],      // 변신 Q는 Q플 가능
      W: [],
      E: ["E_FLASH", "AIRBORNE"],
      R: [],
      ETC: [],
    },
  },


  notes: [
    "P의 [[MS_UP]]는 폼 변환할 때마다 생김", "캐논폼으로 변환 후 평타를 치면 상대 [[AR_MR_SHRED]]", "해머폼 E는 [[INSEC_KICK]] 됨",
  ],

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default jayce;
