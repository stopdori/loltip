import type { ChampData } from "../interactions/types";

const aatrox: ChampData = {
  id: "aatrox",
  skills: {
    P: ["ST_CONDITIONAL", "OMNIVAMP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "TETHER", "SLOW", "TRUE_SIGHT"] },
      { label: { ko: "사슬효과 발동", en: "Tether" }, tags: ["GRAB"] },
    ] },

    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["E_FLASH", "AA_RESET", "DASH", "WALL_HOP"] },
    ] },

    R: ["BUFF_FORM", "MS_UP", "AD_UP", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
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
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "GRAB"] },
] },

    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["AA_RESET", "DASH"] },
    ] },
    
    R: ["BUFF_FORM", "BUFF_FORM", "MS_UP", "AD_UP", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
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
            "P는 쿨타임이 있음 \n 준비되면 [[EMPOWERED]] [[BA]]에 대상의 최대 체력 비례 [[DMG_MAGIC]]. \n 피해량 100% [[HEAL]].",

            "Q는 [[AOE]] [[DMG_PHYSICAL]]. \n 추가로 두 번 [[SKILL_RECAST]] 가능. \n Q1, Q2는 끝 / Q3는 중앙에 맞히면 \n [[GRAB]] 추가와 증가한 [[DMG_PHYSICAL]]. \n Q2, Q3를 사용하지 않고 지속시간 종료 시 Q [[CDR]].", 

            "W로 [[DMG_PHYSICAL]], [[SLOW]], [[TETHER]]을 걸고 \n 대상이 벗어나지 못하면 중앙쪽으로 [[GRAB]], [[DMG_PHYSICAL]].",

            "E의 [[PASSIVE_BONUS]]는 \n 챔피언 대상 [[OMNIVAMP]]. \n \n E는 [[DASH]], [[AA_RESET]] 가능.\n 도중에 다른 스킬 사용 가능.",

            "R은  주변 미니언 [[FEAR]]. \n 10초간 [[MS_UP]], [[AD_UP]]. \n [[MS_UP]]는 시간이 지나면 점차 사라짐. \n 킬 관여시 지속시간 5초 추가. \n 10초를 넘을 수는 없음.",


        ],
        en: [
            "P has a cooldown. \n When ready, [[EMPOWERED]] [[BA]] deals [[DMG_MAGIC]] based on the target's max health. \n Heals for 100% of damage dealt [[HEAL]].",

            "Q deals [[AOE]] [[DMG_PHYSICAL]]. \n Can [[SKILL_RECAST]] twice more. \n Q1, Q2 sweetspot at the edge / Q3 sweetspot at the center: \n bonus [[GRAB]] and increased [[DMG_PHYSICAL]]. \n If Q2, Q3 expire unused, Q gets [[CDR]].",

            "W applies [[DMG_PHYSICAL]], [[SLOW]], and [[TETHER]]. \n If the target doesn't escape, they're pulled to the center with [[GRAB]] and [[DMG_PHYSICAL]].",

            "E's [[PASSIVE_BONUS]] grants \n [[OMNIVAMP]] against champions. \n \n E enables [[DASH]] and [[AA_RESET]]. \n Other skills can be used during the dash.",

            "R [[FEAR]]s nearby minions. \n Grants [[MS_UP]] and [[AD_UP]] for 10 seconds. \n [[MS_UP]] fades gradually over time. \n Kill participation extends duration by 5 seconds. \n Cannot exceed 10 seconds total.",
        ]
      },

      note2: {
        ko: [
          "P [[CDR]]은 \n 챔피언, 대형, 에픽 몬스터에게 [[BA]], 스킬 적중 시 [[CDR]]. \n Q로 [[AIRBORNE]] 시키면 2배 [[CDR]]. \n W는 적중, [[GRAB]] 따로 [[CDR]]. \n R [[FEAR]] 적중 시 에는 [[CDR]] 없음. \n 스킬이 여러 명 적중해도 1명 적중한 걸로 [[CDR]].",
          "Q는 미니언에게 데미지 반감. \n Q는 몬스터 [[AIRBORNE]] 시 지속시간 2배, 추가 피해.",
          "W는 원래 스킬설명에 [[TRUE_SIGHT]]가 없는데 \n 효과가 똑같이 작동함.",
          "W는 미니언에게 2배 피해."
      ],
        en: [
          "P [[CDR]] triggers \n on [[BA]] or skill hits against champions, large, or epic monsters. \n [[AIRBORNE]] via Q doubles the [[CDR]]. \n W's hit and [[GRAB]] each grant [[CDR]] separately. \n R [[FEAR]] hit does not trigger [[CDR]]. \n Even if a skill hits multiple targets, [[CDR]] counts as one hit.",
          "Q deals reduced damage to minions. \n Q [[AIRBORNE]] on monsters doubles duration and deals bonus damage.",
          "W has no [[TRUE_SIGHT]] in the tooltip, \n but the effect works the same.",
          "W deals double damage to minions.",
        ]
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
