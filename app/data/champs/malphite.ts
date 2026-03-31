import type { ChampData } from "../interactions/types";

const malphite: ChampData = {
  id: "malphite",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW", "MS_UP"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "AS_DOWN"],
    R: ["WALL_HOP", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: ["FEEDBACK_SOUND"],
  },

  gimmick: {
    P: ["ST_CONDITIONAL"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE"],
    W: { phases: [
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "W 충격파", en: "W Cone" }, tags: ["DMG_PHYSICAL", "AOE"] },
    ] },
    E: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
    R: ["DMG_MAGIC", "AOE", "DASH", "UNSTOPPABLE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[R_FLASH]] 안됨", "W는 사용하면 다음 공격에 추가 데미지가 있고, 충격파가 발산하는데, 다음 공격으로 적을 타격할때 추가데미지와 충격파 데미지도 같이 들어감.\nW 충격파는 5초 지속.", "E에는 상대 [[AS_DOWN]]가 있음", "R은 맨바닥에 박을 때랑 적을 박을 때 소리가 다름. 그래서 [[STEALTH]] 또는 모습이 보이지 않는 적을 맞히면 소리로 알 수 있음."
      ],
        en: ["[[R_FLASH]] not possible", "E reduces the target's attack speed"]
        },
    },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default malphite;
