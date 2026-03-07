import type { ChampData } from "../interactions/types";

const jayce: ChampData = {
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


  notes: {
    ko: [
    "해머폼 평타는 마나를 채워줌", "P의 [[MS_UP]]는 폼 변환할 때마다 생김", "캐논폼으로 변환 후 평타를 치면 상대 [[AR_MR_SHRED]]", "해머폼 E는 [[INSEC_KICK]] 됨",
  ],
    en: ["Hammer form basic attacks restore mana", "P's [[MS_UP]] activates on every form swap", "Swapping to cannon form then auto-attacking applies [[AR_MR_SHRED]] to the target", "Hammer form E is [[INSEC_KICK]] capable"]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default jayce;
