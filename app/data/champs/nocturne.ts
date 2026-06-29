import type { ChampData } from "../interactions/types";

const nocturne: ChampData = {
  id: "nocturne",
  skills: {
    P: ["HEAL", "SEPARATOR", "ST_CONDITIONAL", "CDR"],

    Q: ["DEBUFF", "SEPARATOR", "ST_CONDITIONAL", "AD_UP", "MS_UP", "GHOSTING"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["AS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["SPELL_SHIELD", "SEPARATOR", "ST_CONDITIONAL", "AS_UP", "X2"] },
    ] },

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["ST_CONDITIONAL", "MS_UP"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["E_FLASH", "TETHER", "SEPARATOR", "ST_CONDITIONAL", "FEAR"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["GLOBAL", "NEAR_SIGHT"] },
      { label: { ko: "R2", en: "R2" }, tags: ["R_FLASH", "UNSTOPPABLE", "DASH", "WALL_HOP"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "CDR"],

    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "DEBUFF"] },
      { label: { ko: "Q 디버프", en: "Q Debuff" }, tags: ["HOMING", "ZONE"] },
      { label: { ko: "Q 버프", en: "Q Buff" }, tags: ["ST_CONDITIONAL", "AD_UP", "MS_UP", "GHOSTING"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["AS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["SPELL_SHIELD", "SEPARATOR", "ST_CONDITIONAL", "AS_UP", "X2"] },
    ] },

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["ST_CONDITIONAL", "MS_UP"] },
      { label: { ko: "E 사슬", en: "E Tether" }, tags: ["DMG_MAGIC", "TARGETED", "TETHER", "SEPARATOR", "ST_CONDITIONAL", "FEAR"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["GLOBAL", "NEAR_SIGHT"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_PHYSICAL", "TARGETED", "LOCKED", "UNSTOPPABLE", "DASH", "WALL_HOP"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "1:1이 정말 강함.",
          "R2로 날아가면 되돌릴 수 없음. \n 정말 신중하게 상대 뒷라인에 날아가야 함.",
        ], en: [
          "Extremely strong in 1v1 situations.",
          "Once you fly with R2, there's no going back. \n Be very deliberate about diving into the enemy backline.",
        ] },
      note1: {

        ko: [
          "P는 활성화 시 다음 [[BA]]가 [[AOE]] [[DMG_PHYSICAL]]. \n 적중한 대상당 [[HEAL]]. \n [[BA]] 공격 시 [[CDR]] 1초. \n 챔피언, 몬스터 대상은 [[CDR]] 3초.",

          "Q는 [[PROJECTILE]]를 발사하여 [[DMG_PHYSICAL]]. \n 궤적에 [[ZONE]] 생성. \n 적중당한 챔피언, 중형, 에픽 몬스터는 [[DEBUFF]]에 걸림 \n [[DEBUFF]]는 지속시간 동안 [[ZONE]] 생성. \n [[ZONE]] 위의 녹턴은 [[AD_UP]], [[MS_UP]], [[GHOSTING]].",

          "W의 [[PASSIVE_BONUS]]는 [[AS_UP]]. \n \n W는 [[SPELL_SHIELD]]. \n 스킬을 막아 내면 잠시 동안 W [[PASSIVE_BONUS]]의 [[AS_UP]] [[X2]].",

          "E의 [[PASSIVE_BONUS]]는 [[FEAR]]에 빠진 대상에게 다가갈 때 엄청난 [[MS_UP]]. \n \n E는 대상에게 [[TETHER]]. 지속 [[DMG_MAGIC]]. \n 끊어지지 않으면 [[FEAR]].",

          "R은 맵 전체 모든 적 챔피언에게 [[NEAR_SIGHT]]. \n [[NEAR_SIGHT]]는 자기 챔피언의 시야만 보임. \n \n R2는 적 챔피언에게 [[SKILL_RECAST]]하면 [[UNSTOPPABLE]], [[DASH]], [[DMG_PHYSICAL]]. \n",
        ],

        en: [
          "P: When activated, the next [[BA]] deals [[AOE]] [[DMG_PHYSICAL]]. \n [[HEAL]]s per target hit. \n Each [[BA]] grants 1s [[CDR]]. \n Against champions and monsters, grants 3s [[CDR]].",

          "Q fires a [[PROJECTILE]] dealing [[DMG_PHYSICAL]]. \n Creates a [[ZONE]] along its path. \n Champions, large, and epic monsters hit are afflicted with [[DEBUFF]]. \n [[DEBUFF]] creates a [[ZONE]] for its duration. \n Nocturne standing in the [[ZONE]] gains [[AD_UP]], [[MS_UP]], and [[GHOSTING]].",

          "W [[PASSIVE_BONUS]] grants [[AS_UP]]. \n \n W activates a [[SPELL_SHIELD]]. \n Blocking a skill temporarily doubles the W [[PASSIVE_BONUS]] [[AS_UP]] ([[X2]]).",

          "E [[PASSIVE_BONUS]] grants massive [[MS_UP]] when moving toward a [[FEAR]]ed target. \n \n E applies a [[TETHER]] to the target, dealing sustained [[DMG_MAGIC]]. \n If not broken, applies [[FEAR]].",

          "R applies [[NEAR_SIGHT]] to all enemy champions globally. \n [[NEAR_SIGHT]] limits vision to only the area around their own champion. \n \n R2: [[SKILL_RECAST]] on an enemy champion to [[UNSTOPPABLE]] [[DASH]] toward them, dealing [[DMG_PHYSICAL]]. \n",
        ]

      },

      note2: {
        ko: [
        "P는 미니언에게는 피해량, 회복량 50% 적용.",
        "[[Q_FLASH]] 안됨",
        "R을 사용하면 날아갈수 있는 대상 발밑에 표식이 보임.",
        "R2 설명에 [[UNSTOPPABLE]]가 없지만 \n 스킬로 날아갈 때 녹턴 체력바 위에 [[UNSTOPPABLE]]가 생김. \n 도착하면 끝."
      ],
        en: [
          "P deals and heals at 50% effectiveness against minions.",
          "[[Q_FLASH]] not possible.",
          "Activating R shows a marker under valid R2 targets.",
          "[[UNSTOPPABLE]] is not listed in R2's description, \n but the [[UNSTOPPABLE]] buff appears on Nocturne's health bar while dashing. \n It ends upon arrival.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default nocturne;
