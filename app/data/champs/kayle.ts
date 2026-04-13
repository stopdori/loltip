import type { ChampData } from "../interactions/types";

const kayle: ChampData = {
  id: "kayle",
  skills: {
    P: { phases: [
      { label: { ko: "1 레벨", en: "1 Lv" }, tags: ["AS_UP", "MS_UP"] },
      { label: { ko: "6 레벨", en: "6 Lv" }, tags: ["RANGE_UP"] },
      { label: { ko: "11 레벨", en: "11 Lv" }, tags: [] },
      { label: { ko: "16 레벨", en: "16 Lv" }, tags: ["AS_UP", "MS_UP", "RANGE_UP"] },
    ] },
    
    Q: ["SLOW", "AR_MR_SHRED"],
    W: ["W_FLASH", "HEAL", "MS_UP"],
    E: ["AA_RESET"],
    R: ["R_FLASH", "INVULNERABLE", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND", "HIT_EFFECT"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "1 레벨", en: "1 Lv" }, tags: ["BUFF_STACK", "ON_HIT"] },
      { label: { ko: "6 레벨", en: "6 Lv" }, tags: ["RANGE_UP"] },
      { label: { ko: "11 레벨 희열", en: "11 Lv Exalted" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
       { label: { ko: "16 레벨 영구 희열", en: "16 Lv Permanent Exalted" }, tags: ["RANGE_UP", "DMG_MAGIC", "AOE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "적중", en: "Hit" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "NON_PROJECTILE", "AOE"] },
    ] },
    
    W: ["TIMING_CAST", "TARGETED", "CHAIN"],
    E: { phases: [
      { label: { ko: "1레벨", en: "1 Lv" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "11레벨", en: "11 Lv" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "AOE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "심판", en: "Judgment" }, tags: ["ST_DELAYED", "DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "앞 라인부터 침착하게 녹여나가는 느낌으로 카이팅 \n R을 정말 잘 써야 함. \n 케일 본인에게 쓰는 게 좋을 때가 많음.",
        ], en: [
          "Kite calmly through the frontline. \n R usage is crucial — \n casting it on Kayle herself is often the right call.",
        ] },
      note1: {

        ko: [
          "P는 R을 찍을 때 마다 능력이 추가됨. \n 1 레벨 [[AS_UP]] [[BUFF]]스택. 최대 5스택 일때 [[MS_UP]] 추가. \n 6 레벨 [[RANGE_UP]] \n 11 레벨 [[BUFF]] 5스택 일때 [[AOE]] [[DMG_MAGIC]] 추가. \n \n 16 레벨 추가 [[RANGE_UP]]와 \n 더 이상 [[BUFF]]스택이 쌓이지 않고 \n 5스택 효과들을 영구지속.",

          "Q는 적중하면 대상과 뒤쪽에 \n [[AOE]] [[DMG_MAGIC]]와 [[SLOW]] [[AR_MR_SHRED]].",

          "W는 자신과 주변 아군에게 [[MS_UP]]와 [[HEAL]]. \n [[NON_TARGETED]] 스킬.",

          "E의 [[PASSIVE_BONUS]]는 \n [[BA]]에 [[ON_HIT]] [[DMG_MAGIC]].",

          "E는 다음 [[BA]]를 [[EMPOWERED]]. \n 6레벨 이전에는 [[RANGE_UP]]도 추가.",

          "R은 대상을 [[INVULNERABLE]]으로 만들고 \n [[AOE]] [[DMG_MAGIC]] [[ST_DELAYED]].",
        ],

        en: [
          "P gains abilities each time R is leveled. \n Lv 1: [[AS_UP]] [[BUFF]] stacks, up to 5. At 5 stacks, also grants [[MS_UP]]. \n Lv 6: [[RANGE_UP]]. \n Lv 11: At 5 stacks, adds [[AOE]] [[DMG_MAGIC]] to attacks. \n \n Lv 16: Additional [[RANGE_UP]] and \n stacks no longer accumulate — \n 5-stack effects become permanent.",

          "Q deals [[AOE]] [[DMG_MAGIC]] to the target and behind them, \n applying [[SLOW]] and [[AR_MR_SHRED]].",

          "W grants [[MS_UP]] and [[HEAL]] to self and nearby allies. \n [[NON_TARGETED]] skill.",

          "E's [[PASSIVE_BONUS]] adds [[ON_HIT]] [[DMG_MAGIC]] to [[BA]].",

          "E empowers the next [[BA]]. \n Before level 6, also grants [[RANGE_UP]].",

          "R makes the target [[INVULNERABLE]], \n then deals [[AOE]] [[DMG_MAGIC]] after a [[ST_DELAYED]] delay.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", 
        "W [[HEAL]] 범위는, 진영외벽 1개정도.", 
        "사실 R을 찍으면 P가 강화되는것이 아니고 \n 6, 11, 16레벨에 아무 스킬이나 찍으면 강화 되는것. \n (스킬 잘못찍어도 강화됨).", "[[BA]] 사거리는 6레벨에 525 16레벨에 625", "3레벨 궁은 [[AOE]]도 증가."
      ],
        en: ["[[Q_FLASH]] not possible", "W [[HEAL]] range is roughly one outer wall width.", "P doesn't actually upgrade when R is leveled. \n Any skill leveled at 6, 11, or 16 triggers the upgrade. \n (Works even if you level the wrong skill).", "[[BA]] range is 525 at level 6 and 625 at level 16.", "R at rank 3 also increases the [[AOE]]."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 120,
    16: 80,
  },

};

export default kayle;
