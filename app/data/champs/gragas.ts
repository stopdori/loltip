import type { ChampData } from "../interactions/types";

const gragas: ChampData = {
  id: "gragas",
  skills: {
    P: ["ST_CONDITIONAL", "HEAL"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["BUFF_FORM", "DMG_REDUCE"],
    E: ["E_FLASH", "KNOCKBACK", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["R_FLASH", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["TIMING_CAST", "PROJECTILE", "ZONE", "SKILL_RECAST"] },
      { label: { ko: "폭발", en: "Explosion" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["BUFF_FORM", "TIMING_CAST", "DMG_REDUCE", "BUFF"] },
      { label: { ko: "강화 평타", en: "Empowered AA" }, tags: ["DMG_MAGIC", "ON_HIT", "AOE"] },
    ] },
    
    E: ["DMG_MAGIC", "AOE", "DASH", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "AIRBORNE"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q로 포킹하다 R로 진영붕괴하고 앞라인 잘라먹기. \n 또는 E로 아군 지키면서 앞라인 같이 밀기.", "Q를 깔아놓고 W로 술 마시고 \n [[E_FLASH]] R, [[BA]]로 상대딜러 Q 위로 토스하고 터뜨리기.",
        ], en: [
          "Poke with Q, then disrupt enemy formation with R and pick off the frontline. \n Or protect allies with E while pushing the frontline together.",
          "Place Q, drink with W, \n then [[E_FLASH]] R or [[BA]] to toss the enemy carry onto Q and detonate.",
        ] },
      note1: {

        ko: [
          "P는 스킬을 사용하면 [[HEAL]].",

          "Q는 바닥에 술통을 설치. \n 지속시간 비례해서 [[DMG_MAGIC]], [[SLOW]] 효과 증가. \n 시간이 다 되거나 [[SKILL_RECAST]]으로 폭발.",

          "W는 [[BA]] [[EMPOWERED]]와 2.5초 동안 [[DMG_REDUCE]]. \n 공격 시 대상은 [[ON_HIT]]과 주변 [[AOE]] [[DMG_MAGIC]].",

          "E(배치기)는 [[DASH]]하여 [[AOE]] [[DMG_MAGIC]]와 [[KNOCKBACK]]. \n 적중하면 [[CDR]]. \n E로 [[DASH]]하는 도중에 Q, R 사용 가능.",

          "R은 [[AOE]] [[DMG_MAGIC]]와 [[AIRBORNE]].",
        ],

        en: [
          "P heals Gragas whenever he uses a skill.",
          "Q places a barrel on the ground. \n [[DMG_MAGIC]] and [[SLOW]] increase with time. \n Detonates when the timer expires or on [[SKILL_RECAST]].",
          "W [[EMPOWERED]]s the next [[BA]] and grants [[DMG_REDUCE]] for 2.5 seconds. \n The hit deals [[ON_HIT]] and [[AOE]] [[DMG_MAGIC]] around the target.",
          "E (Body Slam) [[DASH]]es and deals [[AOE]] [[DMG_MAGIC]] and [[KNOCKBACK]]. \n Hitting an enemy grants [[CDR]]. \n Q and R can be cast during the [[DASH]].",
          "R deals [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]].",
        ]

      },

      note2: {
        ko: [
        "Q를 사용했을 때 그라가스가 CC에 걸리면 \n [[SKILL_RECAST]]을 사용 할 수 없음.", "P의 [[COOLDOWN]] 스킬가속 영향 없음."
      ],
        en: ["If Gragas is hit by CC after placing Q, the [[SKILL_RECAST]] cannot be activated.", "P's [[COOLDOWN]] is not affected by ability haste."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default gragas;
