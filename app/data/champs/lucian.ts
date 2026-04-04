import type { ChampData } from "../interactions/types";

const lucian: ChampData = {
  id: "lucian",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "MS_UP"],
    E: ["WALL_HOP"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: [],
    R: ["HIT_INDICATOR"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "2타", en: "Additional Shot" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "2타 추뎀", en: "Vigilance" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
    ] },
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "NON_PROJECTILE", "AOE"],
    W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "MARK"],
    E: ["DASH", "BUFF_STACK"],
    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "CANCELLABLE", "SKILL_RECAST"],
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "스킬을 사용하면 P(2타)가 발동하고, 아군이 [[HEAL]], [[SHIELD]]를 주거나 상대가 이동불가가 되면 P(2타 추뎀)이 추가 발동.", "W는 상대에게 적중하고 공격하면 루시안의 [[MS_UP]]가 되는데, 아군이 공격해도 루시안의 [[MS_UP]]가 발동.", "R 쓰는 도중에 E 사용 가능."
      ],
        en: ["W grants [[MS_UP]] to Lucian when the marked target is attacked by any ally, not just Lucian"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default lucian;
