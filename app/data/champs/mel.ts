import type { ChampData } from "../interactions/types";

const mel: ChampData = {
  id: "mel",
  skills: {
    P: ["ST_CONDITIONAL", "EXECUTE"],
    Q: ["Q_FLASH", "SEPARATOR", "BUFF_STACK", "DEBUFF_STACK"],
    W: ["REFLECT", "SHIELD", "MS_UP", "SEPARATOR", "BUFF_STACK", "DEBUFF_STACK"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "BUFF_STACK", "DEBUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "ROOT"],
    R: ["BUFF_STACK", "DEBUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE"],
  },

  vision: {
    P: [],
    Q: ["VISION", "POSITION_REVEAL"],
    W: ["POSITION_REVEAL"],
    E: ["VISION"],
    R: ["VISION"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "이글거리는 광휘", en: "Searing Radiance" }, tags: ["BUFF_INTERACT", "Q", "W", "E", "R", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BA", "STACK_CONSUME", "DMG_MAGIC"] },
      { label: { ko: "압도", en: "Overwhelm" }, tags: ["DEBUFF_INTERACT", "BA", "Q", "W", "E", "R","SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "DURATION_RESET"] },
    ] },

    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "BUFF_STACK", "DEBUFF_STACK"],

    W: ["REFLECT", "DMG_MAGIC", "PROJECTILE", "SEPARATOR", "BUFF_STACK", "DEBUFF_STACK"],

    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "BUFF_STACK", "DEBUFF_STACK"],

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "TIMING_CAST", "SKILL_CHANNEL", "CAST_COMMIT", "GLOBAL", "SEPARATOR_NEWLINE", "SEPARATOR", "BUFF_STACK", "DEBUFF_STACK"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "멀리서 Q, E로 포킹하다가 \n 상대의 초필살 [[PROJECTILE]]를 [[REFLECT]]시키면 한타 캐리.",
        ], en: [
          "Poke from range with Q and E, \n then [[REFLECT]] an enemy ultimate [[PROJECTILE]] to carry teamfights.",
        ] },
      note1: {

        ko: [
          "P는 스택이 2종류. \n \n [[BUFF_STACK]] - 이글거리는 광휘 \n 스킬 사용 후 3개씩 쌓이고 최대 9개. \n [[BA]] 공격 시 [[STACK_CONSUME]]. \n  [[DMG_MAGIC]] [[PROJECTILE]] 추가 발사. \n \n [[DEBUFF_STACK]] - 압도 \n 쌓일 때마다 기본 [[DMG_MAGIC]] + 스택당 [[DMG_MAGIC]] 발동. \n 중첩이 사라지지 않고 다시 적용되고 [[DURATION_RESET]]. \n 비축량이 체력, 보호막을 넘어서면 체력바가 붉은색이 됨. \n 다음 [[BA]] 또는 스킬에 [[EXECUTE]]. \n \n 평타 [[PROJECTILE]] 1개당 압도1. \n Q [[PROJECTILE]] 1개당 압도1 (최소 6 최대10). \n E에 닿는 시간 동안 압도1. \n 멀어 질 수록 E의 원 크기 증가하기 때문에 \n 멀리서 많이 쌓임 (최소4 최대 11까지 관측).",

          "Q는 [[PROJECTILE]] 8개 발사 [[DMG_MAGIC]]. \n 처음 폭발피해가 딜의 60%정도.",

          "W([[REFLECT]])는 날아오는 [[PROJECTILE]]를 시전자에게 돌려보냄. \n  디테일한 판정은 챔피언별로 상호작용 박스에 정리.",

          "E는 중심부에 강한 [[DMG_MAGIC]]와 [[ROOT]]. \n 주변부는 약한 지속 [[DMG_MAGIC]]와 지속 [[SLOW]].",

          "R의 [[PASSIVE_BONUS]]는 압도 피해량 증가. \n \n R은 압도에 영향을 받는 대상들에게 \n [[DMG_MAGIC]] + 스택당 [[DMG_MAGIC]]. \n R로 [[EXECUTE]]이 가능해지면 R의 아이콘에 황금색 테두리.",
        ],

        en: [
          "P has 2 stack types. \n \n [[BUFF_STACK]] - Searing Radiance \n Gains 3 stacks per skill cast, up to 9. \n [[STACK_CONSUME]] on [[BA]]. \n Fires an additional [[DMG_MAGIC]] [[PROJECTILE]]. \n \n [[DEBUFF_STACK]] - Overwhelm \n Each stack triggers base [[DMG_MAGIC]] + [[DMG_MAGIC]] per stack. \n Stacks don't expire — they reapply and [[DURATION_RESET]]. \n When accumulated damage exceeds HP and shields, the health bar turns red. \n [[EXECUTE]] on next [[BA]] or skill. \n \n 1 basic attack [[PROJECTILE]] = 1 Overwhelm. \n 1 Q [[PROJECTILE]] = 1 Overwhelm (min 6, max 10). \n Each tick of E contact = 1 Overwhelm. \n E's circle grows larger the farther away, \n so more stacks are gained at range (min 4, max 11 observed).",

          "Q fires 8 [[PROJECTILE]]s for [[DMG_MAGIC]]. \n The initial explosion deals ~60% of total damage.",

          "W ([[REFLECT]]) sends incoming [[PROJECTILE]]s back to the caster. \n Detailed interactions are listed per champion in the interaction box.",

          "E deals strong [[DMG_MAGIC]] and [[ROOT]] at the center. \n The outer area applies weaker continuous [[DMG_MAGIC]] and [[SLOW]].",

          "R's [[PASSIVE_BONUS]] increases Overwhelm damage. \n \n R deals [[DMG_MAGIC]] + [[DMG_MAGIC]] per stack \n to targets affected by Overwhelm. \n A golden border appears on R's icon when [[EXECUTE]] becomes possible.",
        ]

      },

      note2: {
        ko: [
        "P의 [[EXECUTE]] 기준치보다 \n R의 [[EXECUTE]] 기준치가 더 높을 수 있음. \n R로 잡을지, [[BA]] 또는 스킬로 잡을지 판단해야 함.",
        "[[REFLECT]]된 [[DMG_PHYSICAL]]는 30% 감소되어 [[DMG_MAGIC]]로 적용. \n [[SWARM]] [[PROJECTILE]]는 [[REFLECT]]되지 않지만 파괴.",
        "R 시전 중에 멜이 죽으면 [[COOLDOWN]]이 되지 않음."
      ],
        en: [
          "R's [[EXECUTE]] threshold can be higher than P's. \n Decide whether to finish with R \n or with [[BA]] / a skill.",
          "[[REFLECT]]ed [[DMG_PHYSICAL]] is reduced by 30% and applied as [[DMG_MAGIC]]. \n [[SWARM]] [[PROJECTILE]]s cannot be [[REFLECT]]ed but are destroyed.",
          "If Mel dies while channeling R, [[COOLDOWN]] does not apply.",
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

export default mel;
