import type { ChampData } from "../interactions/types";

const caitlyn: ChampData = {
  id: "caitlyn",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "ROOT"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["TRUE_SIGHT"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "PROC"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "LOCKED"],
    W: { phases: [
      { label: { ko: "덫", en: "TRAP" }, tags: ["TIMING_CAST", "TRAP", "MARK"] },
      { label: { ko: "헤드샷", en: "Head Shot"  }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
    ] },
    E: { phases: [
      { label: { ko: "투망", en: "Neat" }, tags: ["DMG_MAGIC", "PROJECTILE", "MARK", "DASH"] },
      { label: { ko: "헤드샷", en: "Head Shot"  }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
    ] },
    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "TIMING_CAST", "TARGETED", "PROJECTILE", "PIERCE_MINION", "LOCKED"],
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
        "P 스택은 부쉬에서 2씩참\nW([[TRAP]])에 걸린 대상에겐 헤드샷 가능.", "[[Q_FLASH]] 안됨 \nQ는 여러대상 관통할수록 딜이 덜 들어감 \n그런데 W(덫)에 걸린 대상에겐 항상 100% Q딜이 들어감", "W(덫)에 텔 안됨", "E를 적중시키면 [[AA_RESET]] 됨",
      ],
        en: ["P stacks charge at 2 per bush auto.\nW (Yordle Snap Trap) also deals bonus damage to trapped targets", "[[Q_FLASH]] not possible.\nQ damage decreases per additional target pierced.\nHowever Q always deals 100% damage to targets trapped by W", "Cannot TP onto W (traps)", "E applies [[AA_RESET]] on hit"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 90,
    11: 90,
    16: 90,
  },

};

export default caitlyn;
