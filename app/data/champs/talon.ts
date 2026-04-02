import type { ChampData } from "../interactions/types";

const talon: ChampData = {
  id: "talon",
  skills: {
    P: [],
    Q: ["Q_FLASH", "CRIT", "AA_RESET", "HEAL"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "INVISIBILITY", "MS_UP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ON_HIT", "DOT", "PROC"],

    Q: { phases: [
      { label: { ko: "Q 근접", en: "Q Melee" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "DEBUFF_STACK"] },
      { label: { ko: "Q 돌진", en: "Q Dash" }, tags: ["DMG_PHYSICAL", "TARGETED", "DASH", "DEBUFF_STACK"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "DEBUFF_STACK"] },
      { label: { ko: "W 호밍백", en: "W Homing Back" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "PROJECTILE", "HOMING", "PIERCE", "DEBUFF_STACK"] },
    ] },
    
    E: ["ST_CONDITIONAL"],

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE", "DEBUFF_STACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "HOMING", "PIERCE", "DEBUFF_STACK"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "근접 Q는 [[CRIT]]\nQ로 대상을 처치하면 [[HEAL]]", 
        "W [[SLOW]]는 돌아올 때", 
        "E의 쿨타임은 벽마다 다르게 계산.",
        "R [[INVISIBILITY]]중에 점멸써도 안풀림", 
        "R1을 사용하고 R2로 종료하면 탈론에게 칼날이 돌아와서 약함. \n 평타나 Q로 상대 때리면 칼날이 상대에게 날아감. \n 즉, 평타나 Q로 대상에게 해제해야 딜이 쌤",
      ],
        en: ["Melee Q applies [[CRIT]].\nKilling a target with Q triggers [[HEAL]]", "W [[SLOW]] only applies on the return", "R [[INVISIBILITY]] does not break on flash", "If Talon is doing less damage than expected, he may be canceling R manually.\nR damage spikes when deactivated via basic attack or Q on a target"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  
  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default talon;
