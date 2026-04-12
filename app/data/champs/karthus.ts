import type { ChampData } from "../interactions/types";

const karthus: ChampData = {
  id: "karthus",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "MR_SHRED", "SLOW"],
    E: [],
    R: ["GLOBAL"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: ["VISION"],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["DMG_MAGIC", "TIMING_CAST", "ZONE"],
    W: ["TIMING_CAST", "ZONE", "MR_SHRED", "SLOW"],
    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["DMG_MAGIC", "SKILL_TOGGLE", "AURA", "DOT"] },
    ] },
    
    R: ["DMG_MAGIC", "GLOBAL", "LOCKED"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "묫자리를 잘 찾아야함. \n W, Q 앞라인부터 카이팅 하다 \n 상대 한가운데 들어가서 묫자리 잡기.",
        ], en: [
          "Find a good spot to die. \n Kite with W and Q from the frontline, \n then position yourself in the middle of the enemy team.",
        ] },
      note1: {

        ko: [
          "P는 카서스의 죽음을 잠시 유예하고 \n 마나소모 없이 스킬을 사용.",

          "Q는 작은 폭발을 일으켜서 [[AOE]] [[DMG_MAGIC]]. \n 단일 대상 명중 시 피해가 증가.",
          
          "W는 [[SLOW]], [[MR_SHRED]] 장판을 생성.",

          "E의 [[PASSIVE_BONUS]]는 유닛을 처치하면 [[MANA_RESTORE]].",

          "E는 [[AURA]] [[DOT]] [[DMG_MAGIC]].",

          "R(진혼곡)은 모든 적 챔피언 대상 [[GLOBAL]] [[DMG_MAGIC]].",
        ],

        en: [
          "P delays Karthus's death briefly, \n allowing him to cast skills without mana cost.",

          "Q creates a small explosion dealing [[AOE]] [[DMG_MAGIC]]. \n Deals increased damage if it hits only one target.",

          "W creates a zone that applies [[SLOW]] and [[MR_SHRED]].",

          "E's [[PASSIVE_BONUS]] restores [[MANA_RESTORE]] on unit kill.",

          "E deals [[AURA]] [[DOT]] [[DMG_MAGIC]].",

          "R (Requiem) deals [[GLOBAL]] [[DMG_MAGIC]] to all enemy champions.",
        ]

      },

      note2: {
        ko: [      
        "R(진혼곡) 시전중에 점멸쓰면 R 취소.",
        "R(진혼곡)은 샤코, 르블랑 니코처럼 \n 챔피언 [[CLONE]]에도 궁이 떨어짐."
      ],
        en: ["Using flash during R (Requiem) channeling cancels R.", "R (Requiem) also hits champion [[CLONE]]s, \n like Shaco, LeBlanc, and Neeko."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 200,
    11: 180,
    16: 160,
  },

};

export default karthus;
