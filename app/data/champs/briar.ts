import type { ChampData } from "../interactions/types";

const briar: ChampData = {
  id: "briar",
  skills: {
    P: ["Q_FLASH", "HEAL"],
    Q: ["W_FLASH", "AR_MR_SHRED", "DASH", "WALL_HOP"],
    W: ["AA_RESET", "SEPARATOR", "BUFF_FORM", "AS_UP", "MS_UP", "HEAL", "DASH", "WALL_HOP"],
    E: ["DMG_REDUCE", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: ["TRUE_SIGHT", "SEPARATOR", "ST_CONDITIONAL", "FEAR", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AS_UP", "MS_UP", "AR_MR_UP", "LIFESTEAL", "DASH", "WALL_HOP", "CC_IMMUNE", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "DOT", "DEBUFF_STACK"],
    Q: ["DMG_PHYSICAL", "ON_HIT", "DASH", "DEBUFF_STACK"],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["BUFF_FORM", "AA_RESET", "DMG_PHYSICAL", "ON_HIT", "DEBUFF_STACK", "DASH", "HOMING", "SKILL_RECAST"] },
      { label: { ko: "범위피해", en: "AOE" }, tags: ["DMG_PHYSICAL", "AOE"] },
      { label: { ko: "W2", en: "W2" }, tags: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT", "DEBUFF_STACK"] },
    ] },
   
    E: ["DMG_MAGIC", "SKILL_CHARGED", "CAST_COMMIT", "AOE", "KNOCKBACK", "DEBUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],

    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["LOCKED", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "CC_IMMUNE"] },
      { label: { ko: "돌진", en: "Dash"  }, tags: ["ST_CONDITIONAL", "LOCKED", "TIMING_CAST", "DASH", "HOMING", "SEPARATOR_NEWLINE", "SEPARATOR", "DMG_PHYSICAL", "AOE", "UNSTOPPABLE", "ST_CONDITIONAL", "FEAR"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "난전에 정말 까다로움.",
          "R1을 딜러진에 맞히기.", "이니시 보단 중간에 진입해서 쓸어먹는게 그림이 예쁨.",
        ], en: [
          "Extremely difficult to deal with in skirmishes.",
          "Land R1 on the enemy carries.",
          "Rather than initiating, diving in mid-fight to clean up looks cleaner.",
        ] },
      note1: {

        ko: [
          "브라이어는 기본 체젠 X. \n 마나 X, 스킬 소모값은 현재체력 5%. \n 잃은 체력 비례 [[HEAL]]효과 엄청나게 증가.",

          "P는 [[BA]], 스킬에 출혈 [[DEBUFF]] 부여. 최대 5스택. \n 스택 비례 출혈 [[DMG_PHYSICAL]] 증가. \n [[BA]] 1개, Q 1개, E 1개, R2 1개  \n 감소 전 출혈 피해에 비례 [[HEAL]]. \n ([[HEAL]]량은 상대 방어력과 영향 없다는 소리)",

          "Q는 [[TARGETED]] [[DMG_PHYSICAL]], [[STUN]]. 5초간 [[AR_MR_SHRED]]. \n [[DASH]]으로 [[WALL_HOP]] 가능.",

          "W는 [[DASH]]을 하고 핏빛 광분 상태 돌입. \n 광분은 적 챔피언을 우선 타겟으로 도발되어 자동공격. \n [[BA]]가 대상 주변 [[AOE]] [[DMG_PHYSICAL]]. [[AS_UP]], [[MS_UP]]. \n \n 광분 상태에서 W를 [[SKILL_RECAST]] 하면 다음 [[BA]] [[EMPOWERED]]. \n [[EMPOWERED]] [[BA]]는 [[DMG_PHYSICAL]], 최대 체력 비례 [[HEAL]]. \n \n Q로 타겟을 바꿀 수 있음. \n E로 광분상태를 빠져나올 수 있음.",

          "E는 1초동안 [[DMG_REDUCE]], 최대 체력 비례 [[HEAL]]. \n CC에 맞아도 시전을 멈추지 않음 ([[CAST_COMMIT]]). \n \n E는 충전 시간 비례 [[AOE]] [[DMG_MAGIC]], [[SLOW]]. \n 완전 충전 시 [[KNOCKBACK]]. \n 벽에 부딪힌 적은 추가 [[DMG_MAGIC]]와 [[STUN]].",

          "R은 브라이어가 온 맵에 울부짖음. \n 잠시 뒤 사거리가 정말 긴 [[PROJECTILE]] 발사. \n 시전하는 중에 [[CC_IMMUNE]]. \n \n 맞은 적 챔피언은 잠시 [[SILENCE]]. \n 대상 주변에 원이 생기고 [[UNSTOPPABLE]] [[DASH]]. \n [[AOE]] [[DMG_MAGIC]]와 대상을 제외한 적에게 [[FEAR]]. \n \n 이후 강화 핏빛 광분 상태 돌입. \n W의 [[AOE]] [[DMG_PHYSICAL]], [[AS_UP]], [[MS_UP]] \n 추가 [[AR_MR_UP]], [[MS_UP]], [[LIFESTEAL]]. \n 무제한 광분. \n E로 해제 가능.",
        ],

        en: [
          "Briar has no base HP regen. \n No mana — skills cost 5% of current health. \n [[HEAL]] effectiveness increases massively based on missing health.",

          "P applies a bleed [[DEBUFF]] on [[BA]] and skills. Max 5 stacks. \n Bleed [[DMG_PHYSICAL]] scales with stacks. \n [[BA]] gives 1 stack, Q 1, E 1, R2 1. \n [[HEAL]] based on bleed damage before mitigation. \n (Meaning [[HEAL]] is unaffected by enemy armor.)",

          "Q deals [[TARGETED]] [[DMG_PHYSICAL]] and applies [[STUN]]. Applies [[AR_MR_SHRED]] for 5 seconds. \n [[DASH]] can [[WALL_HOP]].",

          "W performs a [[DASH]] and enters Blood Frenzy. \n Frenzy taunts Briar to auto-attack, prioritizing enemy champions. \n [[BA]] deals [[AOE]] [[DMG_PHYSICAL]] around the target. Gains [[AS_UP]] and [[MS_UP]]. \n \n [[SKILL_RECAST]]ing W during Frenzy empowers the next [[BA]]. \n [[EMPOWERED]] [[BA]] deals [[DMG_PHYSICAL]] and [[HEAL]]s based on max health. \n \n Q can switch targets. \n E can cancel Frenzy.",

          "E grants [[DMG_REDUCE]] and [[HEAL]]s based on max health for 1 second. \n Does not stop casting when hit by CC ([[CAST_COMMIT]]). \n \n E deals [[AOE]] [[DMG_MAGIC]] and [[SLOW]] based on charge time. \n Fully charged applies [[KNOCKBACK]]. \n Enemies knocked into a wall take bonus [[DMG_MAGIC]] and are [[STUN]]ned.",

          "R makes Briar howl across the entire map. \n After a moment, fires a very long-range [[PROJECTILE]]. \n [[CC_IMMUNE]] during cast. \n \n The hit champion is briefly [[SILENCE]]d. \n A circle appears around the target and Briar [[DASH]]es [[UNSTOPPABLE]]y toward them. \n Deals [[AOE]] [[DMG_MAGIC]] and [[FEAR]]s all enemies except the target. \n \n Briar then enters enhanced Blood Frenzy. \n Retains W's [[AOE]] [[DMG_PHYSICAL]], [[AS_UP]], and [[MS_UP]], \n with bonus [[AR_MR_UP]], [[MS_UP]], and [[LIFESTEAL]]. \n Unlimited Frenzy duration. \n Can be cancelled with E.",
        ]

      },

      note2: {
        ko: [
        "브라이어 [[LIFESTEAL]] 귀신임. \n 브라이어 상대로는 [[GW]] 필수.",
        "출혈 [[DEBUFF_STACK]]이 남아있는 대상이 죽으면 \n 남은 피해량에 비례하여 [[HEAL]].",
        "W를 사용하고 주변에 적이 없으면 \n 광분상태에 빠지지 않음.",
        "E를 완전 충전하여 발사하면 \n [[SLOW]]가 여전히 걸리지만 [[STUN]]상태라 의미가 크진 않음.",
        "R은 시전 중 일 때는 [[CC_IMMUNE]] \n 적중해서 날아갈 때는 [[UNSTOPPABLE]]",
        "[[R_FLASH]]는 기능적으로는 가능하지만, 효과적으로는 불가능. \n 이즈 R처럼 이전위치에서 투사체가 날아감.",
      ],
        en: [
          "Briar has insane [[LIFESTEAL]]. \n [[GW]] is mandatory when playing against her.",
          "If a target dies with bleed [[DEBUFF_STACK]]s remaining, \n Briar [[HEAL]]s based on the remaining damage.",
          "If there are no enemies nearby when W is used, \n Briar does not enter Frenzy.",
          "Firing a fully charged E still applies [[SLOW]], \n but it has little meaning since the target is already [[STUN]]ned.",
          "R is [[CC_IMMUNE]] during cast, \n and [[UNSTOPPABLE]] while dashing to the target after hitting.",
          "[[R_FLASH]] is technically possible but not practical. \n Like Ezreal's R, the projectile fires from the original position.",
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

export default briar;
