import type { ChampData } from "../interactions/types";

const rammus: ChampData = {
  id: "rammus",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "TRANSFORM", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK", "SLOW"],
    W: ["BUFF_FORM"],
    E: ["E_FLASH", "TAUNT"],
    R: ["DASH", "WALL_HOP", "CC_IMMUNE", "SEPARATOR", "ZONE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_BONUS", "AD_UP"],
    Q: ["TRANSFORM", "CANCELLABLE", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "KNOCKBACK", "AOE", "SLOW"],
    W: ["BUFF_FORM", "CANCELLABLE", "AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC"],
    E: ["TIMING_CAST", "TARGETED", "TAUNT", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC"],
    R: ["ST_CONDITIONAL", "RANGE_UP", "SEPARATOR", "DMG_MAGIC", "AOE", "DASH", "CC_IMMUNE", "SEPARATOR_NEWLINE", "SEPARATOR", "ZONE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "AIRBORNE"]
    
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "라인전 개입력이 정말 강함.",
          "앞에서 맞아주다가 Q, R로 기습 이니시 하고 \n W, E로 상대 뒷라인 물기.",
        ], en: [
          "Very strong laning phase impact.",
          "Soak up damage in front, then surprise-engage with Q and R, \n and use W and E to bite the enemy backline.",
        ] },
      note1: {

        ko: [
          "P는 방마저 비례 [[AD_UP]]. \n \n",

          "Q는 공 모양으로 [[TRANSFORM]] [[MS_UP]]. \n 이후 6초간 점진적으로 [[MS_UP]] 레벨 비례 추가. \n 부딪히면 [[DMG_MAGIC]], [[KNOCKBACK]], 람머스 주변 [[AOE]] [[SLOW]]. \n \n 람머스가 [[HARD_CC]]에 맞거나 \n W를 사용하면 [[TRANSFORM]] 해제. \n Q [[SKILL_RECAST]]하여 [[CANCELLABLE]]. \n \n",

          "W는 [[AR_MR_UP]]. \n 람머스를 [[BA]] 공격하는 대상에게 [[DMG_MAGIC]] 반사. \n W [[SKILL_RECAST]]하여 [[CANCELLABLE]]. \n \n",

          "E는 챔피언, 몬스터를 [[TAUNT]]. \n 몬스터는 [[DMG_MAGIC]] 추가. \n \n",

          "R은 사용 지점으로 [[CC_IMMUNE]] 점프. \n 이동속도 비례 [[RANGE_UP]]. \n [[AOE]] [[DMG_MAGIC]], [[SLOW]]. \n 이후 3번 발동하는 [[DMG_MAGIC]], [[SLOW]] [[ZONE]]. \n \n Q [[TRANSFORM]] 도중에 R 시전 시 \n 중앙에 [[AOE]] [[DMG_MAGIC]], [[AIRBORNE]] 추가.",
        ],

        en: [
          "P grants [[AD_UP]] scaling with armor and MR. \n \n",

          "Q [[TRANSFORM]]s Rammus into ball form with [[MS_UP]]. \n Over the next 6 seconds, gains additional [[MS_UP]] scaling with rank. \n On collision, deals [[DMG_MAGIC]], [[KNOCKBACK]]s, and applies [[AOE]] [[SLOW]] around Rammus. \n \n [[TRANSFORM]] ends if Rammus is hit by [[HARD_CC]] \n or uses W. \n [[CANCELLABLE]] by recasting Q ([[SKILL_RECAST]]). \n \n",

          "W grants [[AR_MR_UP]]. \n Reflects [[DMG_MAGIC]] to anyone who [[BA]]s Rammus. \n [[CANCELLABLE]] by recasting W ([[SKILL_RECAST]]). \n \n",

          "E [[TAUNT]]s champions and monsters. \n Deals bonus [[DMG_MAGIC]] to monsters. \n \n",

          "R [[CC_IMMUNE]]-jumps to the target location. \n [[RANGE_UP]] scaling with movement speed. \n Deals [[AOE]] [[DMG_MAGIC]] and applies [[SLOW]]. \n Then leaves a [[ZONE]] that triggers [[DMG_MAGIC]] and [[SLOW]] 3 times. \n \n Casting R while [[TRANSFORM]]ed (Q) \n adds [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]] at the center.",
        ]

      },

      note2: {
        ko: [
        "R은 설명에 [[CC_IMMUNE]]이 없지만 \n 날아갈 때 람머스 체력바 위에 [[CC_IMMUNE]]. \n 도착하면 끝."
      ],
        en: [
          "R's tooltip doesn't mention [[CC_IMMUNE]], but \n [[CC_IMMUNE]] appears above Rammus's health bar while airborne. \n It ends on landing."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default rammus;
