import type { ChampData } from "../interactions/types";

const nunu: ChampData = {
  id: "nunu",
  skills: {
    P: ["MARK", "AS_UP", "MS_UP", "SEPARATOR", "ON_HIT", "AOE", "DMG_PHYSICAL"],
    Q: ["Q_FLASH", "HEAL"],
    W: ["W_FLASH", "AIRBORNE"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "ROOT"],
    R: ["SHIELD", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["MARK", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME", "AS_UP", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "BA", "AOE", "ON_HIT", "DMG_PHYSICAL"],

    Q: { phases: [
      { label: { ko: "Q 미니언", en: "Q Minion" }, tags: ["DMG_TRUE", "TIMING_CAST", "TARGETED", "HEAL"] },
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "HEAL"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["SKILL_CHANNEL", "SKILL_STEERABLE"] },
      { label: { ko: "W 재시전", en: "W Recast" }, tags: ["PROJECTILE"] },
      { label: { ko: "W 눈덩이", en: "W Snowball" }, tags: ["DMG_MAGIC", "AOE", "AIRBORNE"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 눈덩이", en: "E Snowball" }, tags: ["DMG_MAGIC", "PROJECTILE", "SINGLE", "SLOW", "DEBUFF"] },
      { label: { ko: "E 파편", en: "E Shatter" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "NON_PROJECTILE", "AOE", "SLOW", "DEBUFF"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ST_CONDITIONAL", "AOE", "DMG_MAGIC", "ROOT"] },
    ] },
    
    R: ["SKILL_CHANNEL", "AOE", "SHIELD", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AOE", "DMG_MAGIC", "SLOW"]
    
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "잘하는 법 모르겠음. \n 고수분들 제보 부탁.",
        ], en: [
          "Not sure how to play this well. \n Tips from experienced players welcome.",
        ] },
      note1: {

        ko: [
          "P는 챔피언, 대형, 에픽 몬스터, 구조물에 [[MARK]]이 생김. \n 피해를 입히면 [[MARK_CONSUME]]. \n 누누와 아군 챔피언 1명 [[AS_UP]], [[MS_UP]]. \n [[BUFF]]가 있는 동안 누누의 [[BA]]에 [[ON_HIT]] [[AOE]] [[DMG_PHYSICAL]] 추가.",

          "Q는 [[TARGETED]] 스킬. \n 미니언, 몬스터에게 사용 시 강한 [[DMG_TRUE]], [[HEAL]]. \n 챔피언에게는 [[DMG_MAGIC]], 미니언 몬스터 대상의 절반 정도 [[HEAL]]. \n 누누의 체력이 50% 밑 일 때 [[HEAL]]량 1.5배.",

          "W는 [[SKILL_CHANNEL]] 스킬로 [[SKILL_STEERABLE]]한 눈덩이를 굴림. \n 이동 거리 비례 [[DMG_MAGIC]], [[AIRBORNE]]. \n W [[SKILL_RECAST]]으로 중단하여 [[PROJECTILE]]로 발사 가능.",
          
          "E는 작은 눈덩이 [[PROJECTILE]]를 발사. \n 적중 시 [[DMG_MAGIC]], [[SLOW]]. \n [[SLOW]]는 대상당 한 번씩만 적용. 2회 추가 [[SKILL_RECAST]] 가능. \n 지속시간 종료 시 [[SLOW]]에 한 번이라도 걸린 대상은 \n 누누 주변 [[AOE]] [[DMG_MAGIC]], [[ROOT]].",

          "R은 [[SKILL_CHANNEL]] 스킬로 \n [[SHIELD]]를 얻고 점점 강해지는 [[AOE]] 지속 [[SLOW]]. \n [[SKILL_CHANNEL]] 종료 시 충전 시간 비례 [[AOE]] [[DMG_MAGIC]]. \n 다른 행동을 하면 [[SKILL_CHANNEL]] 종료.",
        ],

        en: [
          "P applies [[MARK]] to champions, large/epic monsters, and structures. \n Dealing damage [[MARK_CONSUME]]s the mark. \n Nunu and 1 allied champion gain [[AS_UP]] and [[MS_UP]]. \n While the [[BUFF]] is active, Nunu's [[BA]] deals bonus [[ON_HIT]] [[AOE]] [[DMG_PHYSICAL]].",
          "Q is a [[TARGETED]] skill. \n Deals heavy [[DMG_TRUE]] and [[HEAL]] when used on minions or monsters. \n Against champions, deals [[DMG_MAGIC]] with about half the [[HEAL]] amount. \n [[HEAL]] is 1.5x when Nunu's HP is below 50%.",
          "W is a [[SKILL_CHANNEL]] skill that rolls a [[SKILL_STEERABLE]] snowball. \n [[DMG_MAGIC]] and [[AIRBORNE]] scale with distance traveled. \n Can be interrupted via W [[SKILL_RECAST]] to launch the snowball as a [[PROJECTILE]].",
          "E fires a small snowball [[PROJECTILE]]. \n On hit, deals [[DMG_MAGIC]] and applies [[SLOW]]. \n [[SLOW]] applies once per target. Up to 2 additional [[SKILL_RECAST]]s available. \n When the duration ends, any target hit by the [[SLOW]] at least once \n takes [[AOE]] [[DMG_MAGIC]] and [[ROOT]] around Nunu.",
          "R is a [[SKILL_CHANNEL]] skill. \n Grants a [[SHIELD]] and applies an escalating [[AOE]] [[SLOW]] over time. \n When the [[SKILL_CHANNEL]] ends, deals [[AOE]] [[DMG_MAGIC]] scaling with charge duration. \n Any action cancels the [[SKILL_CHANNEL]].",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]] 불가.",
        "P의 [[MARK]]이 생기는 범위는 미드 일자부쉬 정도. \n [[MARK_CONSUME]]는 데미지로 발동. \n 아이템 효로도 가능.",
      ],
        en: [
          "[[R_FLASH]] not possible.",
          "P [[MARK]] range is roughly the length of the mid lane straight bush. \n [[MARK_CONSUME]] is triggered by dealing damage. \n Item effects can also proc it.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default nunu;
