import type { ChampData } from "../interactions/types";

const twistedfate: ChampData = {
  id: "twistedfate",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "AA_RESET", "MANA_RESTORE", "SLOW","STUN"],
    E: ["AS_UP"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_BONUS"],
    Q: ["DMG_MAGIC", "TIMING_CAST"],

    W: { phases: [
      { label: { ko: "W1", en: "W1" }, tags: ["SKILL_TOGGLE", "SKILL_RECAST", "PROJECTILE"] },
      { label: { ko: "W2 블루", en: "W2 Blue" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "W2 레드", en: "W2 Red" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "AOE"] },
      { label: { ko: "W2 골드", en: "W2 Gold" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK"] },
      { label: { ko: "E 강화평타", en: "E Improved Basic Attack" }, tags: ["STACK_CONSUME", "PROC", "DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
    ] },

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["GLOBAL", "DEBUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "R2", en: "R2" }, tags: ["SKILL_CHANNEL", "LOCKED", "BLINK"] },
    ] },
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
        "W 카드 순서는\n블루([[MANA_RESTORE]]) 레드([[SLOW]]) 골드([[STUN]])", 
        "W1을 사용하고 CC에 걸려도 카드의 순서는 계속 변하고 W2로 카드를 집을 수 있음.", 
        "R2 [[SKILL_CHANNEL]] 중에 W1, W2 모두 사용할 수 있음.",
        "골카를 들고 대상에게 우클릭한 후 점멸을 누르면 점멸골카가 예쁘게 나감", 
        "E의 [[AS_UP]]는 지속효과", 
        "R1의 [[TRUE_SIGHT]]는 [[SPELL_SHIELD]]류(밴시, 밤끝 포함)로 막아짐"
      ],
        en: ["W card order: Blue ([[MANA_RESTORE]]) → Red ([[SLOW]]) → Yellow ([[STUN]])", "Even if you get CC'd after using W1, the card order keeps cycling and you can still pick a card with W2.", "Hold the gold card, right-click a target, then flash for a smooth [[W_FLASH]] gold card", "E's [[AS_UP]] is a passive effect", "R's [[TRUE_SIGHT]] can be blocked by spell shields (including Banshee's, Night's Edge)"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 170,
    11: 140,
    16: 110,
  },

};

export default twistedfate;
