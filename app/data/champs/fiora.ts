import type { ChampData } from "../interactions/types";

const fiora: ChampData = {
  id: "fiora",
  skills: {
    P: ["MS_UP", "HEAL"],
    Q: ["WALL_HOP"],
    W: ["AS_UP", "MS_UP", "SLOW", "STUN"],
    E: ["AS_UP", "SLOW", "AA_RESET"],
    R: ["R_FLASH", "HEAL", "MS_UP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_TRUE", "ON_HIT"],
    Q: ["DMG_PHYSICAL", "ON_HIT", "DASH"],
    W: ["DMG_MAGIC", "SKILL_CHANNEL", "PROJECTILE", "PIERCE_MINION"],
    E: ["DMG_PHYSICAL", "ON_HIT", "SKILL_RECAST"],
    R: { phases: [
      { label: { ko: "R 시전", en: "R Active" }, tags: ["DMG_TRUE", "TARGETED", "ON_HIT", "MARK"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ZONE"] },
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
       "P는 ''급소''를 찔러야 발동함", "[[Q_FLASH]](찌르기) 안됨", "[[W_FLASH]](응수) 안됨", "W는 [[SLOW]]를 걸고\n시전중에 CC기를 맞으면 효과를 완전히 무시하고. [[SLOW]] 대신 [[STUN]]을 검.", "W로 상대 스킬을 막았을때 [[STUN]]이 발동되는 것들은 하단 박스에 따로 정리.", "R에 [[MS_UP]]는 P효과 증가임\nR을 걸고 급소를 한번이라도 찌른 후 대상이 처치되면 장판 생성"
      ],
        en: ["P activates only when a ''vital'' is struck", "[[Q_FLASH]](Lunge) not possible", "[[W_FLASH]](Riposte) not possible", "W applies [[SLOW]]; if Fiora is hit by CC while casting, the CC is completely negated and [[STUN]] is applied instead of [[SLOW]]", "Abilities that trigger [[STUN]] when blocked by W are listed separately in the box below.", "[[MS_UP]] from R enhances P effectiveness\nIf a vital is hit at least once while R is active and the target dies, a geyser is created"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 90,
    16: 70,
  },

};

export default fiora;
