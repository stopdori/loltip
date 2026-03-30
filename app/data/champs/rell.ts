import type { ChampData } from "../interactions/types";

const rell: ChampData = {
  id: "rell",

  skills: {
    P: ["AR_MR_SHRED"],
    Q: ["Q_FLASH", "STUN", "SHIELD_BREAK"],

    W: { phases: [
      { label: { ko: "W 붕괴", en: "W Dismounted" }, tags: ["SHIELD", "AS_UP", "AIRBORNE", "WALL_HOP", "BUFF_FORM"] },
      { label: { ko: "W 철마술", en: "W Mount Up" }, tags: ["MS_UP", "GRAB", "WALL_HOP", "BUFF_FORM"] },
    ] },

    E: ["MS_UP"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: ["FEEDBACK_INDICATOR"],
    W: { phases: [
      { label: { ko: "W 붕괴", en: "W Dismounted" }, tags: ["FEEDBACK_INDICATOR"] },
    ] },
    
    E: [],
    R: ["FEEDBACK_INDICATOR"],
  },

  gimmick: {
    P: ["DMG_MAGIC", "ON_HIT"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "W 붕괴", en: "W Dismounted" }, tags: ["BUFF_FORM", "DMG_MAGIC", "TIMING_CAST"] },
      { label: { ko: "W 철마술", en: "W Mount Up" }, tags: ["BUFF_FORM", "BUFF_STACK"] },
      { label: { ko: "W 철마술 버프", en: "W Mount Up Buff" }, tags: ["STACK_CONSUME", "DMG_MAGIC", "ON_HIT"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["BUFF_STACK"] },
      { label: { ko: "E 평타 강화", en: "E Improved Basic Attack" }, tags: ["DMG_MAGIC", "ON_HIT", "AOE"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DOT"],
  },

  notes: {
    ko: [
      "P는 방마저를 훔치는것\n(대상은 감소 렐은 증가)",
      "렐은 W가 좀 복잡함\n승마폼에서 W하면, 붕괴로 벽넘기 가능\n뿐만 아니라 W로 다시 승마하고 일정 시간 안에 평타를 치면 대상을 [[GRAB]] 하는데\n이때 얇은 벽넘어 대상을 공격하면 렐이 벽을 넘으면서 [[GRAB]]함",
      "승마폼 일 때 상시[[MS_UP]] (W효과로)\n낙마할 때 보호막을 줌",
      "E는 [[AA_RESET]] 안됨",
    ],
    en: [
      "P steals armor and MR from the target\n(target loses, Rell gains)",
      "Rell's W is complex.\nIn mounted form, W can wall-hop into dismounted form.\nAlso, re-mounting after W and quickly auto-attacking [[GRAB]]s the target.\nAttacking through a thin wall while doing this causes Rell to wall-hop and [[GRAB]] simultaneously",
      "Mounted form grants constant [[MS_UP]] from W.\nDismounting grants a shield",
      "E does not [[AA_RESET]]",
    ],
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default rell;
