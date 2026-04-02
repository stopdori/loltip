import type { ChampData } from "../interactions/types";

const maokai: ChampData = {
  id: "maokai",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW", "AIRBORNE"],
    W: ["W_FLASH", "ROOT", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: ["ROOT", "MS_UP"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND"],
    W: ["POSITION_REVEAL"],
    E: ["VISION"],
    R: ["VISION"],
  },

  gimmick: {
    P: ["ON_HIT"],
    Q: { phases: [
      { label: { ko: "Q 범위", en: "Q 범위" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE"] },
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"] },
    ] },
    
    W: ["DMG_MAGIC", "SKILL_CHANNEL", "LOCKED", "TARGETED", "DASH"],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "HOMING", "AOE", "TRAP"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "HOMING", "AOE", "DOT", "TRAP"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "VOLLEY"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[R_FLASH]] 안됨", "Q의 주변 범위 피해와 Q 투사체의 피해는 동일하고, 같은대상에게 두번적용되지 않음.", "W는 시전하면 멈출 수 없음.", "E는 부쉬에 소환하면 강화.", "E의 시야 범위는 넥서스 크기정도.", "묘목에 텔 안됨", "R의 [[MS_UP]]는 상대에게 적중하면 적용됨"
      ],
        en: ["[[R_FLASH]] not possible", "Cannot TP onto saplings", "R's [[MS_UP]] applies when hitting an enemy"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 110,
    16: 90,
  },

};

export default maokai;
