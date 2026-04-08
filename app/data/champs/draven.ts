import type { ChampData } from "../interactions/types";

const draven: ChampData = {
  id: "draven",
  skills: {
    P: [],
    Q: [],
    W: ["AS_UP", "MS_UP", "GHOSTING"],
    E: ["E_FLASH", "AIRBORNE", "SLOW"],
    R: ["EXECUTE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF_STACK"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["BUFF_FORM"] },
      { label: { ko: "회전도끼", en: "Spinning Axe"  }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "DROP"] },
    ] },
    W: ["BUFF_FORM"],
    E: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "AIRBORNE", "SLOW"],
    R: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "일단 원딜이라 카이팅을 하지만 \n 동시에 도끼 관리도 신경 써야 해서 매우 어려움.", "고수분들 제보 부탁."
        ], en: [
          "Kiting is essential as a marksman, \n but managing axes at the same time makes it very demanding.",
          "Tips from experts are welcome.",
        ] },
      note1: {

        ko: [
          "P는 막타 또는, Q를 주우면 1스택. \n 킬을 하면 25 + 스택의 골드 획득. ([[BUFF_STACK]]을 소모.) \n 드레이븐이 죽으면 가지고 있던 [[BUFF_STACK]]을 절반 잃어버림.",
          "Q로 공격하면 도끼가 하늘로 튕기는데 \n 바닥에 닿기 전에 받으면 Q를 돌려 줌. \n 튕기는 방향은 대체로 투사체가 적중할 때 \n 드레이븐이 바라보는 방향으로 떨어짐.",
          "W는 [[AS_UP]], [[MS_UP]]에 [[GHOSTING]]. \n Q를 받으면 쿨타임 초기화.",
          "E는 [[AIRBORNE]], [[SLOW]]",
          "R은 사거리 [[GLOBAL]] \n 적에게 맞을수록 피해 감소. \n 적 챔피언 적중 시 되돌아옴. 이때도 피해를 줌. \n \n 적 챔피언에게 R로 피해를 줬을 때 \n 체력이 [[BUFF_STACK]]보다 낮으면 [[EXECUTE]].",
        ],

        en: [
          "P gains 1 stack per last hit or caught Q axe. \n A kill grants 25 + stacks gold (consuming [[BUFF_STACK]]). \n Dying loses half of all held [[BUFF_STACK]]s.",
          "Attacking with Q launches the axe into the air. \n Catching it before it lands refreshes Q. \n The axe generally lands in the direction \n Draven is facing when the projectile hits.",
          "W grants [[AS_UP]], [[MS_UP]], and [[GHOSTING]]. \n Catching a Q axe resets W's cooldown.",
          "E applies [[AIRBORNE]] and [[SLOW]].",
          "R has [[GLOBAL]] range. \n Damage decreases with each target hit. \n Returns after hitting an enemy champion, dealing damage again. \n \n If the target's remaining HP after R's damage \n is lower than [[BUFF_STACK]], it triggers [[EXECUTE]].",
        ]

      },

      note2: {
        ko: [
        "Q [[AA_RESET]] 안됨.",
        "고수는 Q를 하늘에 1개, 손에 2개 총 3개를 유지 함.",
        "드레이븐 R [[EXECUTE]] 조건은\n R로 피해를 준 다음 대상의 남은 체력이 \n 드레이븐 스택보다 낮으면 처형.\n예) 대상 체력 1000, R 데미지 300, 스택이 700 이면 [[EXECUTE]].",
      ],
        en: [
          "Q does not [[AA_RESET]].",
          "Experts maintain 1 axe in the air and 2 in hand — 3 total.",
          "R [[EXECUTE]] condition: after R deals damage, if the target's remaining HP is lower than Draven's stack bonus, they are executed.\nExample: target HP 1000, R damage 300, stack bonus 700 → [[EXECUTE]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default draven;
