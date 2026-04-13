import type { ChampData } from "../interactions/types";

const sona: ChampData = {
  id: "sona",
  skills: {
    P: ["SLOW"],
    Q: [],
    W: ["HEAL", "SHIELD"],
    E: ["MS_UP"],
    R: ["STUN"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "Q 파워코드", en: "Q Power Chord" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "STACK_CONSUME", "DEBUFF_STACK"] },
      { label: { ko: "W, E 파워코드", en: "W, E Power Chord" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "STACK_CONSUME", "DEBUFF_STACK"] },
    
    ] },
    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS", "STACKING"] },
      { label: { ko: "Q 오라", en: "Q Aura" }, tags: ["AURA", "BUFF_STACK"] },
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["DMG_MAGIC", "PROJECTILE", "HOMING"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W 오라", en: "W Aura" }, tags: ["AURA", "BUFF_STACK"] },
      { label: { ko: "W 투사체", en: "W Projectile" }, tags: ["HOMING"] },
    ] },

    E: ["AURA", "BUFF_STACK"],

    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "스킬+점멸이 하나도 안됨.", "P의 [[SLOW]]는 E강화 평타만", "W강화 평타는 대상의 피해를 감소시킴\n(탈진과 비슷)"
      ],
        en: ["No skill+flash combos work at all. Needs a rework", "P's [[SLOW]] only applies through E-enhanced basic attacks", "W-enhanced basic attack reduces incoming damage on the target (similar to Exhaust)"]
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

export default sona;
