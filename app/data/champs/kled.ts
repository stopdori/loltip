import type { ChampSkill } from "../types";

const kled: ChampSkill = {
  id: "kled",
  skills: {
    base : {
    P: ["UNTARGETABLE", "TOWER_DODGE"],
    Q: ["Q_FLASH", "GRAB", "SLOW", "VISION"],
    W: ["AS_UP"],
    E: ["MS_UP"],
    R: ["SHIELD", "AIRBORNE", "WALL_HOP"],
    ETC: [],
  },
  
  alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP", "HEAL"],
      Q: ["Q_FLASH"],      // 변신 Q는 Q플 가능
      W: ["AS_UP"],
      E: [],
      R: [],
      ETC: [],
    },
  },

    notes: [
    "승마폼\nQ가 끝까지 유지되어야 [[GRAB]], [[SLOW]]가 걸림\nE는 대상에게 처음 적중하면 [[MS_UP]]가 증가하고, 추가로 사용 가능", "승마W 낙마W 둘다 평캔 안됨", "승마할 때 [[GW]]영향 받는지 궁금함 문의 바람",
  ],

  ultCooldown: {
    6: 140,
    11: 125,
    16: 110,
  },

};

export default kled;
