import type { ChampData } from "../interactions/types";

const irelia: ChampData = {
  id: "irelia",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL", "DASH", "WALL_HOP"],
    W: ["W_FLASH", "DMG_REDUCE"],
    E: ["STUN"],
    R: ["R_FLASH", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC"],
    Q: ["DMG_PHYSICAL", "TARGETED", "ON_HIT", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME", "CDR_RESET", "Q"],

    W: { phases: [
      { label: { ko: "W 차징", en: "R Charging" }, tags: ["SKILL_CHARGED", "CAST_COMMIT", "CANCELLABLE", "TIMING_AFTERCAST", ] },
      { label: { ko: "W 발사", en: "W Release"  }, tags: ["DMG_PHYSICAL", "AOE", "BUFF_STACK"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["PROJECTILE", "SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "ST_DELAYED"] },
      { label: { ko: "E2", en: "E2" }, tags: ["PROJECTILE", "DMG_MAGIC", "AOE", "BUFF_STACK", "MARK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "BUFF_STACK", "MARK"] },
      { label: { ko: "R 결계", en: "R Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "BUFF_STACK", "MARK"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "사이드가 강함", "이렐리아 고수분들 제보 부탁드림."
        ],
        en: [
          "Strong in side lanes.",
          "Irelia mains, please share any tips!",
        ] },
      note1: {

        ko: [
          "P는 [[BUFF]] 스택당 [[AS_UP]]와 \n 4스택 시 [[ON_HIT]] [[DMG_MAGIC]].",

          "Q는 [[DASH]]하여 [[LIFESTEAL]]과 [[BUFF]]스택. \n 대상이 처치되거나 [[MARK]]이 있다면 Q [[CDR_RESET]]. \n E, R로 [[MARK]]을 걸 수 있음.",

          "W는 시전하는 동안 [[DMG_REDUCE]]. \n 발사하면 충전량에 비례하여 [[AOE]] [[DMG_PHYSICAL]]와 [[BUFF]]스택.",

          "E는 2번 사용해야 발동. \n E1과 E2 사이에 범위 피해와 [[STUN]]과 [[BUFF]]스택. \n 적 챔피언에게는 [[MARK]]을 부여.",

          "R은 [[PROJECTILE]]를 날려 챔피언에게 적중 시 \n 짧은순간 엄청난 [[SLOW]]와 [[BUFF]]와 [[MARK]]. \n 그리곤 결계가 펼쳐짐. \n 결계에 닿으면 [[MARK]]과 [[SLOW]].",
        ],

        en: [
          "P: Gains [[AS_UP]] per [[BUFF]] stack. \n At 4 stacks, [[BA]]s deal bonus [[ON_HIT]] [[DMG_MAGIC]].",

          "Q: [[DASH]]es to the target, applying [[LIFESTEAL]] and gaining a [[BUFF]] stack. \n If the target dies or has a [[MARK]], Q's [[CDR_RESET]]. \n E and R apply [[MARK]].",

          "W: [[DMG_REDUCE]] while charging. \n On release, deals [[AOE]] [[DMG_PHYSICAL]] and grants [[BUFF]] stacks based on charge amount.",

          "E: Must be used twice to trigger. \n Between E1 and E2, deals area damage, applies [[STUN]], and grants [[BUFF]] stacks. \n Applies [[MARK]] to enemy champions.",

          "R: Fires a [[PROJECTILE]] that briefly applies massive [[SLOW]], [[BUFF]], and [[MARK]] on champion hit. \n Then deploys a zone. \n Touching the zone applies [[MARK]] and [[SLOW]].",
        ]

      },

      note2: {
        ko: [
        "[[E_FLASH]] 안됨",
        "P의 [[BUFF]] 중첩 유지는 \n [[BA]]로 챔피언, 타워, 대형 몬스터 이상을 때려야 유지. \n 스킬로는 미니언, 소형몬스터도 가능.",
        "E, R 의 불안정 상태 [[DEBUFF]]는 \n 대형, 에픽 몬스터에게도 생김.",
        "W는 [[CAST_COMMIT]] \n 시전중에 CC를 맞아도 W를 풀지 않음.",
        "W, E, R로 P의 [[BUFF]] 스택을 채울때 상황마다 다름. \n 챔피언만 맞으면 챔피언당 1개 \n 챔피언과 미니언 몬스터가 함께 맞으면 챔피언당 1개 \n 미니언과 몬스터가 함께맞으면 그냥 1개. \n 에픽 몬스터도 몬스터와 같은 취급."
      ],
        en: [
          "[[E_FLASH]] not possible",
          "P [[BUFF]] stacks are maintained by hitting champions, towers, or large monsters+ with [[BA]]. \n Skills can also maintain stacks by hitting minions and small monsters.",
          "E and R's Defiant [[DEBUFF]] also applies to large and epic monsters.",
          "W is [[CAST_COMMIT]] — \n receiving CC during the charge does not cancel W.",
          "Stack gain from W, E, R varies by what is hit: \n Hitting only champions: 1 stack per champion. \n Hitting champions along with minions/monsters: 1 stack per champion. \n Hitting only minions/monsters: 1 stack total. \n Epic monsters count the same as regular monsters.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 125,
    11: 105,
    16: 85,
  },

};

export default irelia;
