import type { ChampData } from "../interactions/types";

const vex: ChampData = {
  id: "vex",
  skills: {
    P: ["FEAR"],
    Q: ["Q_FLASH"],
    W: ["SHIELD"],
    E: ["SLOW"],
    R: ["R_FLASH", "WALL_HOP", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 파멸", en: "P Doom" }, tags: ["ST_CONDITIONAL", "EMPOWERED", "Q", "W", "E"] },
      { label: { ko: "P 우울", en: "P Groom" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"] },
    ] },

    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"],
    W: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
    
    E: { phases: [
      { label: { ko: "E 투사체", en: "E Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ST_DELAYED", "DMG_MAGIC", "NON_PROJECTILE", "ZONE"] },
    ] },

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_MAGIC", "HOMING", "DASH", "UNSTOPPABLE"] },
    ] },
        
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[W_FLASH]], [[E_FLASH]] 안됨", "R2 설명에 [[UNSTOPPABLE]]가 없지만, 스킬로 날아갈 때 벡스 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝.", "R2로 날아갈 때 점멸로 멈출 수 있음 ", "R은 쿨타임이 일시적 초기화 되어 재사용할때, 내부 쿨타임은 이미 진행중."
      ],
        en: ["[[W_FLASH]] and [[E_FLASH]] not possible", "Flash can stop R mid-flight"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default vex;
