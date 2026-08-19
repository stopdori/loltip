import type { ChampData } from "../interactions/types";

const rell: ChampData = {
  id: "rell",

  skills: {
    P: ["BUFF_STACK", "AR_MR_UP", "SEPARATOR", "DEBUFF_STACK", "AR_MR_SHRED"],
    Q: ["Q_FLASH", "STUN", "SHIELD_BREAK"],

    W: { phases: [
      { label: { ko: "철마술 - 붕괴 (중갑폼 폼변환)", en: "Ferromancy: Crash Down (→ Armored Form)" }, tags: ["TRANSFORM", "SHIELD", "SEPARATOR", "AIRBORNE", "DASH", "WALL_HOP"] },
      { label: { ko: "중갑폼", en: "Armored Form" }, tags: ["AR_MR_UP", "AS_UP", "SEPARATOR", "BA", "RANGE_UP"] },
      { label: { ko: "철마술 - 탑승 (탑승폼 폼변환)", en: "Ferromancy: Mount Up (→ Mounted Form)" }, tags: ["TRANSFORM", "MS_UP", "SEPARATOR", "ON_HIT", "DASH", "GRAB", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"] },
      { label: { ko: "탑승폼", en: "Mounted Form" }, tags: ["MS_UP"] },
    ] },

    E: ["MS_UP"],
    R: ["R_FLASH", "GRAB", "KINEMATICS"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: { phases: [
      { label: { ko: "철마술 - 붕괴 (중갑폼 폼변환)", en: "Ferromancy: Crash Down (→ Armored Form)" }, tags: ["HIT_INDICATOR"] },
    ] },
    
    E: [],
    R: ["HIT_INDICATOR"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 패시브", en: "P Passive" }, tags: ["BUFF_STACK", "AR_MR_UP", "SEPARATOR", "DEBUFF_STACK", "AR_MR_SHRED"] },
      { label: { ko: "P 평타 강화", en: "P Improved Basic Attack" }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },

    Q: ["DMG_MAGIC", "TIMING_CAST", "AOE", "STUN", "SHIELD_BREAK"],

    W: { phases: [
      { label: { ko: "철마술 - 붕괴 (중갑폼 폼변환)", en: "Ferromancy: Crash Down (→ Armored Form)" }, tags: ["TRANSFORM", "DMG_MAGIC", "TIMING_CAST", "SHIELD", "SEPARATOR", "AIRBORNE", "DASH", "WALL_HOP"] },
      { label: { ko: "중갑폼", en: "Armored Form" }, tags: ["BUFF_FORM", "AR_MR_UP", "AS_UP", "SEPARATOR", "BA", "RANGE_UP"] },
      { label: { ko: "철마술 - 탑승 (탑승폼 폼변환)", en: "Ferromancy: Mount Up (→ Mounted Form)" }, tags: ["TRANSFORM", "MS_UP", "SEPARATOR", "DMG_MAGIC", "ON_HIT", "DASH", "GRAB", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"] },
      { label: { ko: "탑승폼", en: "Mounted Form" }, tags: ["MS_UP"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["BUFF_STACK", "CHAIN", "MS_UP"] },
      { label: { ko: "Q, 평타 강화", en: "Q & Improved Basic Attack" }, tags: ["DMG_MAGIC", "ON_HIT", "AOE"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DOT", "GRAB", "KINEMATICS"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "승마폼으로 앞선에서 각보다가 \n [[Q_FLASH]] 또는 W, R로 기습 이니시.",
        ], en: [
          "Sit up front in mounted form looking for an angle, \n then engage with [[Q_FLASH]] or a surprise W or R.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]에 렐의 방마저 비례 [[DMG_MAGIC]]. \n \n [[BA]]와 스킬이 [[DEBUFF_STACK]] 부여. 최대 5회. \n [[DEBUFF_STACK]] 효과는 대상의 방마저를 훔침. \n 즉, 적 챔피언은 [[AR_MR_SHRED]] 렐은 [[AR_MR_UP]].",

          "Q는 전방에 창을찔러 \n [[AOE]] [[STUN]], [[SHIELD_BREAK]], [[DMG_MAGIC]].",

          "W는 [[TRANSFORM]] 스킬.", "W (철마술 - 붕괴) \n [[AOE]] [[AIRBORNE]], [[DMG_MAGIC]]. \n 말에서 내리면서 [[SHIELD]]. \n [[SHIELD]]는 다시 탑승하기 전까지 유지. \n \n 그리고 중갑폼으로 [[TRANSFORM]]. \n 중갑폼 일 때는 항상 [[AR_MR_UP]], [[AS_UP]], [[BA]] [[RANGE_UP]]", "W (철마술 - 탑승) \n 탑승폼으로 [[TRANSFORM]]. \n 탑승폼 일 때는 항상 [[MS_UP]]. \n \n 그리고 탑승 시 잠깐 동안 추가 [[MS_UP]], 다음 1대 [[BA]] [[EMPOWERED]]. \n 대상에게 [[DASH]]하고 \n [[DMG_MAGIC]]와 렐 뒤쪽으로 [[GRAB]].",

          "E는 렐과 아군 1명에게 [[MS_UP]] [[BUFF]]. \n 아군이나 적군에게 다가갈 때 [[MS_UP]] 효과 증가. \n 다음 1대 [[BA]] 또는 Q [[EMPOWERED]]. \n [[EMPOWERED]] 효과는 [[AOE]] [[DMG_MAGIC]].",

          "R은 [[AOE]] [[GRAB]]. \n 그리고 2초간 8번의 지속 [[DMG_MAGIC]]. \n 이때 주변 적들을 지속적으로 [[KINEMATICS]].",
        ],

        en: [
          "P deals [[DMG_MAGIC]] on [[BA]] that scales with Rell's armor and MR. \n \n [[BA]]s and skills apply [[DEBUFF_STACK]], up to 5 stacks. \n [[DEBUFF_STACK]] steals armor and MR from the target. \n In other words, the enemy champion gets [[AR_MR_SHRED]] while Rell gains [[AR_MR_UP]].",

          "Q thrusts a spear forward, \n dealing [[AOE]] [[STUN]], [[SHIELD_BREAK]], and [[DMG_MAGIC]].",

          "W is a [[TRANSFORM]] skill.", "W (Ferromancy: Crash Down) \n [[AOE]] [[AIRBORNE]] and [[DMG_MAGIC]]. \n Grants a [[SHIELD]] while dismounting. \n The [[SHIELD]] lasts until she mounts up again. \n \n Then [[TRANSFORM]]s into armored form. \n While in armored form, always has [[AR_MR_UP]], [[AS_UP]], [[BA]] [[RANGE_UP]]", "W (Ferromancy: Mount Up) \n [[TRANSFORM]]s into mounted form. \n While in mounted form, always has [[MS_UP]]. \n \n Also grants bonus [[MS_UP]] briefly upon mounting, and [[EMPOWERED]]s the next [[BA]]. \n [[DASH]]es to the target and \n deals [[DMG_MAGIC]], [[GRAB]]bing them behind Rell.",

          "E [[BUFF]]s Rell and one ally with [[MS_UP]]. \n The [[MS_UP]] effect increases while approaching an ally or enemy. \n [[EMPOWERED]]s the next [[BA]] or Q. \n The [[EMPOWERED]] effect deals [[AOE]] [[DMG_MAGIC]].",

          "R [[AOE]] [[GRAB]]s. \n Then deals [[DMG_MAGIC]] 8 times over 2 seconds. \n During this, continuously [[KINEMATICS]]s nearby enemies.",
        ]

      },

      note2: {
        ko: [
          "Q의 [[SHIELD_BREAK]]는 몬스터 대상으로는 적용되지 않음.",
          "W의 [[TRANSFORM]]으로 탑승폼이 됐을 때 \n [[BA]] [[EMPOWERED]] 효과로 공격하면 [[DASH]] 하는데 [[WALL_HOP]] 가능.",
          "승마폼 일 때 상시[[MS_UP]] (W효과로)\n낙마할 때 보호막을 줌",
          "E는 [[AA_RESET]] 안됨",
        ],
        en: [
          "Q's [[SHIELD_BREAK]] does not apply to monsters.",
          "While in mounted form from W's [[TRANSFORM]], \n attacking with the [[EMPOWERED]] [[BA]] causes a [[DASH]] that can [[WALL_HOP]].",
          "Mounted form grants constant [[MS_UP]] from W.\nDismounting grants a shield",
          "E does not [[AA_RESET]]",
        ],
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

export default rell;
