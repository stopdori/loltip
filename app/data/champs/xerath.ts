import type { ChampData } from "../interactions/types";

const xerath: ChampData = {
  id: "xerath",
  skills: {
    P: ["MANA_RESTORE"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "STUN"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "ON_HIT"],
    Q: { phases: [
      { label: { ko: "Q 충전", en: "Q Charging" }, tags: ["SKILL_CHARGED", "RANGE_UP"] },
      { label: { ko: "Q 발사", en: "Q Release" }, tags: ["DMG_MAGIC", "NON_PROJECTILE", "AOE"] },
    ] },
    
    W: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "ST_DELAYED"],
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"],
    R: { phases: [
      { label: { ko: "R 준비", en: "R Wind-up" }, tags: ["SKILL_CHANNEL", "SKILL_RECAST"] },
      { label: { ko: "R 발사", en: "R Shoot" }, tags: ["DMG_MAGIC", "NON_PROJECTILE", "ZONE", "SKILL_RECAST"] },
    ] },
    
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]]은 차징중에만 가능. \n Q 발사 발동 중에는 불가.", "W는 중심 부분에 적중하면 효과 증가", "E의 [[STUN]]은 거리가 멀 수록 시간 증가", "R은 찍을수록 발사수가 4/5/6\n시전 중 움직이면 종료"
      ],
        en: ["[[Q_FLASH]] only works during charging phase, not during firing", "W's effect increases when hitting the center", "E [[STUN]] duration increases with distance", "R shot count: 4/5/6 per rank.\nMoving during cast ends R"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 110,
  },

};

export default xerath;
