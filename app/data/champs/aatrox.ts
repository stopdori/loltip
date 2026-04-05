import type { ChampData } from "../interactions/types";

const aatrox: ChampData = {
  id: "aatrox",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "TETHER", "SLOW", "TRUE_SIGHT"] },
      { label: { ko: "사슬효과 발동", en: "Tether" }, tags: ["AIRBORNE"] },
    ] },

    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["LIFESTEAL"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["E_FLASH", "AA_RESET", "DASH", "WALL_HOP"] },
    ] },

    R: ["BUFF_FORM", "MS_UP", "AD_UP"],
  },
  vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"],

    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"] },
      { label: { ko: "Q3", en: "Q3"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"] },
    ] },

    W: { phases: [
      { label: { ko: "투사체", en: "Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "SINGLE", "TETHER", "SLOW"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL"] },
] },

    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["DASH"] },
    ] },
    
    R: ["BUFF_FORM"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
            "Q, EQ, W, [[EMPOWERED]][[BA]]로 살짝씩 간보다가 \n R키고 진심모드로 패기", "R쓰고 뒤에서 나타나기"

        ], en: [
            "Poke gradually with Q, EQ, W, and [[EMPOWERED]][[BA]], \n then activate R and go all-in.",
            "Use R and appear from behind.",
        ] },
      note1: {
        ko: [
            "P [[EMPOWERED]][[BA]]에 쿨타임이 있음.",
            "Q1, Q2는 끝 / Q3는 중앙에 맞히면 \n 추가 [[DMG_PHYSICAL]], [[AIRBORNE]].", 
            "Q2, Q3를 사용하지 않으면 \n 쿨타임이 더 빨리 돌아옴.",
            "W로 [[SLOW]], [[TETHER]]을 걸고 \n 대상이 벗어나지 못하면 중앙쪽으로 [[GRAB]]",
            "평타, Q, W, 아이템효과 등등 다 모든피해 [[LIFESTEAL]]. \n E의 [[PASSIVE_BONUS]]에 있음. \n E로 [[AA_RESET]] 가능.",
            "R은 [[MS_UP]], [[AD_UP]], 주변 미니언 [[FEAR]]",


        ],
        en: [
            "P's empowered auto has a cooldown.",
            "Q1, Q2 deal bonus [[DMG_PHYSICAL]] and [[AIRBORNE]] at the tip.\n Q3 does so at the center.",
            "If Q2 or Q3 is not used,\n Q1's cooldown returns faster.",
            "[[LIFESTEAL]] applies to all damage — \n basic attacks, Q, W, items, etc. \n This is part of E's [[PASSIVE_BONUS]].",
            "R grants [[MS_UP]], [[AD_UP]], and [[FEAR]] on nearby minions.",
        ]
      },

      note2: {
        ko: ["W는 원래 스킬설명에 [[TRUE_SIGHT]]가 없는데\n효과가 똑같이 작동함.",
      ],
        en: ["W has no [[TRUE_SIGHT]] in the tooltip,\nbut the effect works the same."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default aatrox;
