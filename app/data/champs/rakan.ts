import type { ChampData } from "../interactions/types";

const rakan: ChampData = {
  id: "rakan",
  skills: {
    P: ["COOLDOWN", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["Q_FLASH", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "CHAIN", "HEAL"],
    W: ["AIRBORNE", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "SHIELD", "DASH", "WALL_HOP", "SEPARATOR", "SKILL_RECAST"],
    R: ["MS_UP", "CHARM", "BUFF_FORM", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "Q 회복", en: "Q Heal" }, tags: ["ST_CONDITIONAL", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "CHAIN", "HEAL"] },
    ] },
    
    W: ["DMG_MAGIC", "DASH", "SEPARATOR", "TIMING_AFTERCAST", "AIRBORNE"],

    E: ["TARGETED", "DASH", "SHIELD", "SEPARATOR", "SKILL_RECAST"],

    R: ["BUFF_FORM", "TIMING_CAST", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "X2", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "CHARM", "SLOW"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "앞선에서 Q로 포킹하면서 대치 하다가 \n [[R_FLASH]] 또는 RW로 기습 이니시.",
        ], en: [
          "Poke with Q from the frontline while stand off, \n then surprise engage with [[R_FLASH]] or R into W.",
        ] },
      note1: {

        ko: [
          "P는 준비되면 [[SHIELD]]. \n [[SHIELD]]가 사라지면 [[COOLDOWN]]. \n [[BA]], 스킬 적중 시 [[CDR]] 1초.",

          "Q는 [[PROJECTILE]] 발사. \n 적중하면 [[DMG_MAGIC]]. \n 챔피언, 에픽 몬스터일 경우 3초 뒤 [[HEAL]]. \n 아군 챔피언 한명이 몸에 닿으면 둘 모두 즉시 [[HEAL]].",

          "W는 [[DASH]]하고 잠시 뒤 [[AOE]] [[DMG_MAGIC]], [[AIRBORNE]].",

          "E는 아군에게 [[DASH]]하여 [[SHIELD]]. \n 5초안에 [[SKILL_RECAST]] 가능.",

          "R은 4초간 엄청난 [[MS_UP]]. \n 몸에 닿은 대상은 [[DMG_MAGIC]], [[CHARM]], [[SLOW]]. \n 처음 닿고나면 잠시동안 [[MS_UP]] 효과 2배. (점차 사라짐)",
        ],

        en: [
          "P grants a [[SHIELD]] once ready. \n Goes on [[COOLDOWN]] once the [[SHIELD]] is gone. \n [[BA]] and ability hits give 1 second of [[CDR]].",

          "Q fires a [[PROJECTILE]]. \n Deals [[DMG_MAGIC]] on hit. \n If it hits a champion or epic monster, grants [[HEAL]] 3 seconds later. \n If an ally champion touches it, both are instantly [[HEAL]]ed.",

          "W [[DASH]]es then deals [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]] shortly after.",

          "E [[DASH]]es to an ally, granting a [[SHIELD]]. \n Can [[SKILL_RECAST]] within 5 seconds.",

          "R grants a massive [[MS_UP]] for 4 seconds. \n Anyone it touches gets [[DMG_MAGIC]], [[CHARM]], and [[SLOW]]. \n After the first contact, the [[MS_UP]] is doubled for a short time. (fades gradually)",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]], [[R_FLASH]] 불가.", 
        "W는 두단계로 나뉨. \n 돌진/도약단계 \n 돌진단계에 [[HARD_CC]]를 맞으면 도약단계가 발동하지 않음.", 
        "자야, 라칸 시너지 \n 1. 귀환 [[SKILL_CHANNEL]] 중인 대상에게 다가가서 귀환을 누르면 \n 앞서 진행한 귀환게이지를 공유받음. \n \n 2. 자야 W 효과를 라칸이 공유받음 \n [[MS_UP]]는 자야가 공격해야 라칸도 증가 \n \n 3. 라칸 E의 사용 범위가 자야에게는 2배."
      ],
        en: [
          "[[W_FLASH]] and [[R_FLASH]] are not possible.",
          "W is split into two phases. \n Dash phase / leap phase. \n If hit by [[HARD_CC]] during the dash phase, the leap phase will not activate.",
          "Xayah & Rakan synergy \n 1. Walking up to an ally who is [[SKILL_CHANNEL]]ing recall and pressing recall \n shares their existing recall progress. \n \n 2. Rakan shares Xayah's W effect. \n The [[MS_UP]] only increases for Rakan when Xayah attacks. \n \n 3. Rakan's E usable range is doubled when targeting Xayah.",
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

export default rakan;
