import type { ChampData } from "../interactions/types";

const maokai: ChampData = {
  id: "maokai",
  skills: {
    P: ["ST_CONDITIONAL", "HEAL"],
    Q: ["Q_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"],
    W: ["W_FLASH", "ROOT", "UNTARGETABLE", "TOWER_DODGE", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "TRAP", "HOMING", "SLOW"],
    R: ["ROOT", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND"],
    W: ["POSITION_REVEAL"],
    E: ["VISION"],
    R: ["VISION"],
  },

  gimmick: {
    P: ["ON_HIT", "ST_CONDITIONAL", "HEAL"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "KNOCKBACK", "SEPARATOR", "P", "CDR"] },
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SLOW"] },
    ] },
    
    W: ["DMG_MAGIC", "SKILL_CHANNEL", "LOCKED", "TARGETED", "DASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "P", "CDR"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "HOMING", "AOE", "TRAP", "SEPARATOR", "P", "CDR"] },
      { label: { ko: "E 강화", en: "E Improved" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "HOMING", "AOE", "DOT", "TRAP"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "VOLLEY", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "SEPARATOR", "P", "CDR"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "마오카이 궁은 전술 핵 버튼임. \n 성급히 사용하면 억제력이 없어져서 구도가 불리해짐. \n 타이밍 정말 신중하게 사용해야 함.",
        ], en: [
          "Maokai's ult is a strategic nuke button. \n Using it carelessly removes your deterrence and puts you at a disadvantage. \n Timing must be used very carefully.",
        ] },
      note1: {

        ko: [
          "P는 활성화 되면 다음 [[BA]]에 [[HEAL]]. \n 쿨타임이 있고 여러가지 [[CDR]] 조건이 있음.",

          "Q는 [[PROJECTILE]]를 날려 [[DMG_MAGIC]] [[SLOW]]. \n 주변은 [[DMG_MAGIC]]와 [[KNOCKBACK]]. \n 두 피해 모두 대상의 최대 체력 비례 [[DMG_MAGIC]].",

          "W는 [[DASH]]하여 [[UNTARGETABLE]]와 [[TOWER_DODGE]]. \n 도착하면 대상에게 [[DMG_MAGIC]]와 [[ROOT]].",

          "E는 해당 위치에 묘목을 날려 설치. \n 묘목은 주변에 적이 다가오면 [[HOMING]]하여 폭발. \n 폭발은 최대 체력 비례 [[DMG_MAGIC]], [[SLOW]], P의 [[CDR]]. \n \n 수풀에 설치하면 묘목이 강화. \n [[DMG_MAGIC]] 2배 \n 최대 체력 비례하여 \n 설치 지속시간 증가. [[SLOW]] 강화. ",

          "R은 [[SINGLE]] [[PROJECTILE]]를 5개 발사. \n 적중하면 [[DMG_MAGIC]]와 이동거리 비례 [[ROOT]]. \n 적중하면 [[MS_UP]]. \n 또 적중하면 [[MS_UP]] 지속시간 초기화.",
        ],

        en: [
          "When P is active, the next [[BA]] grants [[HEAL]]. \n It has a cooldown with various [[CDR]] conditions.",

          "Q launches a [[PROJECTILE]] that deals [[DMG_MAGIC]] and [[SLOW]]. \n The surrounding area deals [[DMG_MAGIC]] and [[KNOCKBACK]]. \n Both deal [[DMG_MAGIC]] based on the target's max health.",

          "W [[DASH]]es, granting [[UNTARGETABLE]] and [[TOWER_DODGE]]. \n On arrival, deals [[DMG_MAGIC]] and [[ROOT]] to the target.",

          "E launches and plants a sapling at the target location. \n The sapling [[HOMING]]s and explodes when an enemy comes near. \n The explosion deals max-health-based [[DMG_MAGIC]], [[SLOW]], and grants [[CDR]] for P. \n \n Planting it in a bush improves the sapling. \n 2x [[DMG_MAGIC]] \n Increased duration based on max health. \n Improved [[SLOW]]. ",

          "R fires 5 [[SINGLE]] [[PROJECTILE]]s. \n On hit, deals [[DMG_MAGIC]] and [[ROOT]] based on travel distance. \n On hit, grants [[MS_UP]]. \n Hitting again refreshes [[MS_UP]] duration.",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]] 안됨",
        "P의 쿨타임은 \n 마오카이가 스킬을 사용하거나, 스킬을 맞거나 \n 대형, 에픽 몬스터 에게 피해를 받으면 [[CDR]].",
        "Q의 주변 범위 피해와 \n Q 투사체의 피해는 동일하고 \n 같은 대상에게 두 번 적용되지 않음.",
        "W는 시전하면 멈출 수 없음.",
        "E(묘목)의 시야 범위는 넥서스 크기정도.",
        "E(묘목)에 텔 안됨.",
        "E(묘목)의 이동속도는 마오카이 레벨에 비례.",
      ],
        en: [
        "[[R_FLASH]] not possible",
        "P's cooldown gets [[CDR]] when Maokai casts a skill, gets hit by a skill, \n or takes damage from a large or epic monster.",
        "Q's surrounding area damage and \n Q's projectile damage are identical \n and don't apply twice to the same target.",
        "W cannot be stopped once cast.",
        "E (sapling)'s vision range is about the size of the Nexus.",
        "Cannot TP onto E (sapling).",
        "E (sapling)'s movement speed scales with Maokai's level.",
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 110,
    16: 90,
  },

};

export default maokai;
