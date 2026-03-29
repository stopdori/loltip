import type { ChampData } from "../interactions/types";

const pantheon: ChampData = {
  id: "pantheon",
  skills: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q 짧게", en: "Q Tap" }, tags: ["Q_FLASH", "CRIT"] },
      { label: { ko: "Q 길게", en: "Q Charged" }, tags: ["Q_FLASH", "CRIT"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "STUN", "WALL_HOP"] },
      { label: { ko: "W 강화", en: "W Improved" }, tags: ["W_FLASH", "STUN", "WALL_HOP"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["INVULNERABLE", "BUFF_FORM"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["INVULNERABLE", "MS_UP", "BUFF_FORM"] },
    ] },
    R: ["AR_PEN", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_INTERACT", "Q", "W", "E"],
    Q: { phases: [
      { label: { ko: "Q 짧게", en: "Q Tap" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"] },
      { label: { ko: "Q 길게", en: "Q Charged" }, tags: ["DMG_PHYSICAL", "SKILL_CHARGED", "PROJECTILE", "PIERCE", "BUFF_STACK"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TARGETED", "DASH", "BUFF_STACK"] },
      { label: { ko: "W 강화", en: "W Improved" }, tags: ["DMG_PHYSICAL", "TARGETED", "DASH", "BUFF_STACK"] },
      { label: { ko: "W 강화평타", en: "W Improved BA" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "SKILL_CHANNEL", "ON_HIT", "BUFF_STACK"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["BUFF_FORM", "DMG_PHYSICAL", "AOE", "DOT", "CANCELLABLE", "SKILL_RECAST", "BUFF_STACK"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["BUFF_FORM", "DMG_PHYSICAL", "AOE", "DOT", "CANCELLABLE", "SKILL_RECAST", "BUFF_STACK"] },
      { label: { ko: "E 방패타격", en: "E Slams" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "TIMING_CAST", "AOE"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "MOBILITY"] },
      { label: { ko: "R 창", en: "R Spear" }, tags: ["DMG_PHYSICAL", "NON_PROJECTILE"] },
      { label: { ko: "R 착지", en: "R Crashes Down" }, tags: ["DMG_PHYSICAL", "SKILL_CHANNEL", "MOBILITY", "BUFF_STACK"] },
    ] },
  },

  notes: {
    ko: [
    "Q의 [[CRIT]]는 체력20% 이하인 적에게 적용", "E의 [[INVULNERABLE]]은 바라보는 방향만 적용\n단, 타워 데미지는 막을 수 없음", "R 기본효과에 [[AR_PEN]]이 있음", "R로 점프해서 사라진 후 착지 전까지 [[INVULNERABLE]] 판정"
  ],
    en: ["Q's [[CRIT]] applies to enemies below 20% HP", "E's [[INVULNERABLE]] only applies in the direction Pantheon is facing.\nTower damage cannot be blocked", "R has [[AR_PEN]] as a passive base effect", "Becomes [[INVULNERABLE]] after jumping with R until landing"]
  },

  ultCooldown: {
    6: 180,
    11: 165,
    16: 150,
  },

};

export default pantheon;
