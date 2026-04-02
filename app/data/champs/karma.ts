import type { ChampData } from "../interactions/types";

const karma: ChampData = {
  id: "karma",
  skills: {
    base : {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "ROOT", "TETHER", "REVEALED"],
    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: [],
  },

  alt: {
      
      P: [],
      Q: ["Q_FLASH", "SLOW"],
      W: ["W_FLASH", "ROOT", "TETHER", "REVEALED", "HEAL"],
      E: ["E_FLASH", "SHIELD", "MS_UP"],
      R: [],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: [],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"],
      W:    { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },
      E: ["TARGETED"],
      R: ["BUFF_STACK", "LOCKED"],
    },
    alt: {
      P: [],
      Q:    { phases: [
      { label: { ko: "만트라 Q", en: "Mantra Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ST_DELAYED", "ZONE"] },
    ] },
      W:    { phases: [
      { label: { ko: "만트라 W", en: "Mantra W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },
      E: ["TARGETED", "SWARM", ],
      R: [],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "만트라 W는 발동할 때 [[HEAL]]\n[[TETHER]]효과 발동 해서 [[ROOT]]되면 한번 더 [[HEAL]]",
      ],
        en: ["Mantra W heals on activation.\nIf the [[TETHER]] triggers and [[ROOT]] is applied, it heals again"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 38,
    11: 36,
    16: 34,
  },

};

export default karma;
