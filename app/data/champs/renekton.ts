import type { ChampData } from "../interactions/types";

const renekton: ChampData = {
  id: "renekton",

  skills: {
    P: [],
    Q: ["HEAL"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "AA_RESET", "STUN"] },
      { label: { ko: "강화 W", en: "Empowered W" }, tags: ["W_FLASH", "AA_RESET", "STUN", "SHIELD_BREAK"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DASH", "WALL_HOP"] },
      { label: { ko: "강화 E", en: "Empowered E" }, tags: ["DASH", "WALL_HOP", "AR_SHRED"] },
    ] },

    R: ["R_FLASH", "SIZE_UP", "MAX_HP_UP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["HIT_INDICATOR"],
    R: [],
  },

  gimmick: {
    P: [],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "AOE", "HEAL"] },
      { label: { ko: "강화 Q", en: "Empowered Q" }, tags: ["DMG_PHYSICAL", "AOE", "HEAL"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "ON_HIT", "STUN"] },
      { label: { ko: "강화 W", en: "Empowered W" }, tags: ["DMG_PHYSICAL", "ON_HIT", "STUN", "SEPARATOR", "ST_CONDITIONAL", "SHIELD_BREAK"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "WALL_HOP"] },
      { label: { ko: "강화 E2", en: "Empowered E2" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "WALL_HOP", "SEPARATOR", "AR_SHRED"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "TIMING_CAST", "SIZE_UP", "MAX_HP_UP"] },
      { label: { ko: "R 오라", en: "R Aura" }, tags: ["AOE", "DOT", "DMG_MAGIC"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "[[EMPOWERED]] W가 정말 중요함.", "R을 쓰고 분노를 100근처로 채우고 \n 상대 뒷라인에 [[EMPOWERED]] E2를 긁고 \n 하나를 [[EMPOWERED]] W, Q로 끔살",
        ], en: [
          "[[EMPOWERED]] W is really important.",
          "Cast R, build Fury up to near 100, \n graze the enemy backline with [[EMPOWERED]] E2, \n then delete one target with [[EMPOWERED]] W and Q.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]] 시 5의 분노. 최대 100. \n 분노가 50 이상일 때 다음 스킬 [[EMPOWERED]]. \n \n 체력이 50% 미만이면 분노 획득 50% 증가.",

          "Q는 [[AOE]] [[DMG_PHYSICAL]]. \n 적중한 대상 하나당 약간 [[HEAL]], 2.5의 분노. \n 적중한 챔피언 하나당 [[HEAL]], 10의 분노. \n 단, 최대 100 [[HEAL]]. \n 단, 최대 30의 분노 획득 가능. \n \n [[EMPOWERED]] Q는 [[DMG_PHYSICAL]] 증가. \n 대상당 [[HEAL]] 효과가 증가. \n 단, 최대 400 [[HEAL]]. \n 단, 분노는 획득하지 않음.",

          "W는 다음 [[BA]]가 두 번 공격. \n [[STUN]], [[DMG_PHYSICAL]]. \n 대상이 챔피언이면 10의 분노. \n \n [[EMPOWERED]] W는 다음 [[BA]]가 세 번 공격. \n 2배 [[STUN]], [[DMG_PHYSICAL]] 증가, [[SHIELD_BREAK]] 추가. \n 단, 분노는 획득하지 않음.",

          "E는 [[DASH]]하여 [[DMG_PHYSICAL]]. \n 적중한 대상 당 2의 분노. \n 챔피언이라면 10의 분노. \n 한 명 이상의 적에게 피해를 입혔다면 [[SKILL_RECAST]] 즉, E2 가능. \n \n [[EMPOWERED]] E는 E2에만 발동. \n 적중한 대상은 [[AR_SHRED]]. \n 단, E2로 분노는 획득하지 않음.",

          "R은 [[SIZE_UP]], [[MAX_HP_UP]], 20의 분노 획득. \n 초당 5의 분노 획득. \n 주변에 지속 [[DMG_MAGIC]]를 주는 [[AURA]] 생성.",
        ],

        en: [
          "P grants 5 Fury on [[BA]]. Max 100. \n At 50+ Fury, the next skill becomes [[EMPOWERED]]. \n \n Below 50% HP, Fury gain increases by 50%.",

          "Q deals [[AOE]] [[DMG_PHYSICAL]]. \n Each target hit grants a small [[HEAL]] and 2.5 Fury. \n Each champion hit grants [[HEAL]] and 10 Fury. \n However, [[HEAL]] caps at 100. \n However, Fury gain caps at 30. \n \n [[EMPOWERED]] Q deals increased [[DMG_PHYSICAL]]. \n The [[HEAL]] per target is increased. \n However, [[HEAL]] caps at 400. \n However, no Fury is gained.",

          "W makes the next [[BA]] strike twice. \n Applies [[STUN]] and [[DMG_PHYSICAL]]. \n Grants 10 Fury if the target is a champion. \n \n [[EMPOWERED]] W makes the next [[BA]] strike three times. \n Doubles [[STUN]] duration, increases [[DMG_PHYSICAL]], and adds [[SHIELD_BREAK]]. \n However, no Fury is gained.",

          "E [[DASH]]es, dealing [[DMG_PHYSICAL]]. \n Grants 2 Fury per target hit. \n Grants 10 Fury if it's a champion. \n Hitting at least one enemy enables [[SKILL_RECAST]], i.e. E2. \n \n [[EMPOWERED]] E only applies on E2. \n Targets hit take [[AR_SHRED]]. \n However, no Fury is gained from E2.",

          "R grants [[SIZE_UP]], [[MAX_HP_UP]], and 20 Fury. \n Grants 5 Fury per second. \n Creates an [[AURA]] that deals continuous [[DMG_MAGIC]] to nearby enemies.",
        ]

      },

      note2: {
        ko: [
          "W의 [[BA]]에는 [[ON_HIT]] 효과 적용.",
          "[[EMPOWERED]] W는 몬스터의 [[SHIELD]]는 파괴할 수 없음.",
          "[[EMPOWERED]] E는 E2에만 발동. \n 즉, 분노가 50 이상일 때 E1을 사용해도 분노를 소모하지 않음.",
          "[[W_FLASH]]은 챔피언을 우클릭 해놓고 점멸.",
          "R은 [[MAX_HP_UP]]여서 풀피에 써도 유효. \n [[GW]]에 영향받지 않음.",
          "R의 [[SIZE_UP]]는 Q의 [[AOE]]를 증가 시킴."
        ],
        en: [
          "W's [[BA]]s apply [[ON_HIT]] effects.",
          "[[EMPOWERED]] W cannot break monster [[SHIELD]]s.",
          "[[EMPOWERED]] E only applies on E2. \n So using E1 at 50+ Fury doesn't consume Fury.",
          "[[W_FLASH]]: right-click a champion, then Flash.",
          "R is [[MAX_HP_UP]], so it's still effective at full HP. \n Unaffected by [[GW]].",
          "R's [[SIZE_UP]] increases Q's [[AOE]].",
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

export default renekton;
