import type { ChampData } from "../interactions/types";

const briar: ChampData = {
  id: "briar",
  skills: {
    P: ["Q_FLASH", "LIFESTEAL"],
    Q: ["W_FLASH", "AR_MR_SHRED", "DASH", "WALL_HOP"],
    W: ["BUFF_FORM", "AA_RESET", "AS_UP", "MS_UP", "LIFESTEAL", "DASH", "WALL_HOP"],
    E: ["DMG_REDUCE", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: ["MS_UP", "LIFESTEAL", "FEAR", "WALL_HOP", "CC_IMMUNE", "UNSTOPPABLE"],
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
      { label: { ko: "W", en: "W" }, tags: ["BUFF_FORM", "DMG_PHYSICAL", "ON_HIT", "DEBUFF_STACK", "DASH", "HOMING", "SKILL_RECAST"] },
      { label: { ko: "범위피해", en: "AOE" }, tags: ["DMG_PHYSICAL", "AOE"] },
      { label: { ko: "W2", en: "W2" }, tags: ["DMG_PHYSICAL", "ON_HIT", "DEBUFF_STACK"] },
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
          "브라이어는 기본 체력재생이 없고 \n 스킬 소모값은 현재체력 5%. \n 잃은 체력이 많을수록 [[LIFESTEAL]]량 엄청나게 증가.",
          "P의 [[DEBUFF]]는 최대 5스택. \n [[BA]] 1개, Q 1개, E 1개, R2 1개  \n 출혈 피해도 [[LIFESTEAL]] 함.",
          "Q는 [[TARGETED]] 스킬. [[STUN]]과 [[AR_MR_SHRED]]. \n Q는 [[DASH]]으로 [[WALL_HOP]] 가능.",
          "W는 [[DASH]]을 하고 광분가 됨. [[WALL_HOP]] 가능. \n 적 챔피언을 우선 타겟으로 자동공격. \n 광분 상태에서 W를 다시 사용하면 강하게 한방. \n Q로 타겟을 바꿀 수 있음. \n E로 광분상태를 빠져나올 수 있음.",
          "E는 [[DMG_REDUCE]]와 최대체력 10% 이상을 [[HEAL]]. \n CC에 맞아도 시전을 멈추지 않음. \n E 맞은 적은 [[KNOCKBACK]]. \n [[STUN]]은 적이 벽에 부딪혀야 걸림.",
          "R1을 시전하는 중에 [[CC_IMMUNE]]에 사거리가 정말 김. \n 맞은 적 챔피언 주변에 원이 생기고 \n [[UNSTOPPABLE]] [[DASH]]하여 광역피해와 광역 [[FEAR]]. \n [[FEAR]]는 대상만 제외. \n \n 도착하면 자동 W상태로 \n W 원래버프에 [[AR_MR_UP]], [[MS_UP]], [[LIFESTEAL]] 추가에 무제한 광분 \n 똑같이 E로 빠져나올 수 있음.",
        ],

        en: [
          "Briar has no base health regen, and skills cost 5% of current HP.\n[[LIFESTEAL]] scales dramatically the lower her health gets.",
          "P's [[DEBUFF]] stacks up to 5.\n[[BA]] +1, Q +1, E +1, R2 +1.\nBleed damage also triggers [[LIFESTEAL]].",
          "Q is a [[TARGETED]] skill that applies [[STUN]] and [[AR_MR_SHRED]].\nQ [[DASH]]es and can [[WALL_HOP]].",
          "W [[DASH]]es and enters frenzy (can [[WALL_HOP]]).\nPrioritizes auto-attacking enemy champions.\nRe-casting W during frenzy deals a strong single hit.\nQ can change targets; E can exit the frenzy state.",
          "E grants [[DMG_REDUCE]] and [[HEAL]] over 10% max HP.\n Casting is not interrupted by crowd control. \nHit enemies are [[KNOCKBACK]]ed.\n[[STUN]] only triggers if the enemy collides with a wall.",
          "R1 has very long range and grants [[CC_IMMUNE]] while casting.\nOn hit, a circle appears around the target; Briar [[UNSTOPPABLE|unstoppably]] [[DASH]]es in, dealing AoE damage and applying AoE [[FEAR]] (excluding the target itself).\nOn arrival, automatically enters a powered-up W state with [[AR_MR_UP]], [[MS_UP]], enhanced [[LIFESTEAL]], and unlimited frenzy.\nE can still exit this state.",
        ]

      },

      note2: {
        ko: [
        "브라이어 [[LIFESTEAL]] 귀신임. \n 브라이어 상대로는 [[GW]] 필수.", 
        "R은 시전 중 일 때는 [[CC_IMMUNE]] \n 적중해서 날아갈 때는 [[UNSTOPPABLE]]", 
        "W를 사용하고 주변에 적이 없으면 \n 광분상태에 빠지지 않음.", "[[R_FLASH]]는 기능적으로는 가능하지만, 효과적으로는 불가능. \n 이즈 R처럼 이전위치에서 투사체가 날아감."
      ],
        en: [
          "Briar's [[LIFESTEAL]] is exceptional — [[GW]] is essential against her.",
          "R is [[CC_IMMUNE]] while casting; once it hits and Briar dashes toward the target, it becomes [[UNSTOPPABLE]].",
          "If W is used with no nearby enemies, Briar does not enter frenzy.",
          "[[R_FLASH]] technically works but is effectively useless.\nLike Ezreal's R, the projectile fires from Briar's original position.",
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
