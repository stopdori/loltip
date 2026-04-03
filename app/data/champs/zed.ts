import type { ChampData } from "../interactions/types";

const zed: ChampData = {
  id: "zed",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["WALL_HOP"],
    E: ["SLOW",],
    R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "ON_HIT", "DMG_MAGIC"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE"],

    W: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["CLONE", "SKILL_RECAST"] },
    ] },

    E: ["DMG_PHYSICAL", "AOE"],

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["UNTARGETABLE", "CLONE", "SKILL_RECAST"] },
      { label: { ko: "데미지", en: "DMG" }, tags: ["ST_DELAYED", "DMG_PHYSICAL"] },
    ] },
    
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "제드는 그림자와 같이 공격해야\n추가 효과들이 있음", "[[W_FLASH]], [[E_FLASH]] 안됨", "R은 제드가 사라졌다\n상대방 뒤에서 나옴(자리 고정)"
      ],
        en: ["Zed must attack alongside his shadow for bonus effects", "[[W_FLASH]] and [[E_FLASH]] not possible", "R makes Zed disappear then reappear behind the target (fixed position)"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default zed;
