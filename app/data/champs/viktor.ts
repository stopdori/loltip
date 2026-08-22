import type { ChampData } from "../interactions/types";

const viktor: ChampData = {
  id: "viktor",
  skills: {
    P: ["STACKING"],

    Q: { phases: [
      { label: { ko: "Q 일반 / Q 진화 / W 진화", en: "Q Base / Q Evolved / W Evolved" }, tags: ["Q_FLASH", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "SLOW"] },
    ] },

    W: ["W_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],

    E: { phases: [
      { label: { ko: "E 일반 / W 진화", en: "E Base / W Evolved" }, tags: ["SEPARATOR", "ST_CONDITIONAL", "SLOW"] },
    ] },

    R: { phases: [
      { label: { ko: "R 일반 / W 진화 / R 진화", en: "R Base / W Evolved / R Evolved" }, tags: ["R_FLASH", "DISRUPT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SKILL_SIZE_UP", "DURATION_EXT"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["VISION"],
    R: [],
  },

  gimmick: {
    P: ["STACKING"],

    Q: { phases: [
      { label: { ko: "일반 Q", en: "Base Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "BUFF_STACK", "SHIELD"] },
      { label: { ko: "Q 진화", en: "Q Evolved" }, tags: ["MS_UP", "SEPARATOR", "EMPOWERED", "SHIELD"] },
      { label: { ko: "W 진화", en: "W Evolved" }, tags: ["SLOW"] },
      { label: { ko: "버프 스택", en: "Buff Stack" }, tags: ["STACK_CONSUME", "ON_HIT", "NON_PROJECTILE", "DMG_MAGIC"] },
    ] },

    W: ["TIMING_CAST", "ZONE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],

    E: { phases: [
      { label: { ko: "일반 E", en: "Base E" }, tags: ["DMG_MAGIC", "SKILL_VECTOR", "PROJECTILE", "PIERCE"] },
      { label: { ko: "W 진화", en: "W Evolved" }, tags: ["SLOW"] },
      { label: { ko: "E 진화", en: "E Evolved" }, tags: ["ZONE", "PROJECTILE", "PIERCE", "ST_DELAYED", "DMG_MAGIC"] },
    ] },

    R: { phases: [
      { label: { ko: "일반 R", en: "Base R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "HOMING", "DOT"] },
      { label: { ko: "W 진화", en: "W Evolved" }, tags: ["SLOW"] },
      { label: { ko: "R 진화", en: "R Evolved" }, tags: ["ST_CONDITIONAL", "SKILL_SIZE_UP", "DURATION_EXT"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "빅토르 잘하는 법 = 죽지 않으면서 성장하는 것",
        ], en: [
          "How to play Viktor well = grow without dying.",
        ] },
      note1: {

        ko: [
          "P는 [[STACKING]]. \n 1개 획득 - 미니언, 몬스터 처치 시 \n 10개 획득 - 대포, 슈퍼 미니언 처치 시 \n 10개 획득 - 에픽 몬스터 처치 관여 시 \n 20개 획득 - 챔피언 처치 관여 시 \n 100개 모을 때마다 스택을 소모하여 스킬 진화 \n \n",

          "진화 ( 업그레이드 ) \n Q 진화 - Q 스킬의 [[SHIELD]]량 증가와 [[MS_UP]] 추가. \n W 진화 - Q, E, R 스킬에 [[SLOW]] 추가. \n E 진화 - E 스킬 경로에 [[ZONE]] 생성. \n [[ZONE]]은 잠시 후 폭발하여 [[AOE]] [[DMG_MAGIC]].", 
          "R 진화 - Q,W,E 스킬을 모두 진화 해야 가능. \n 폭풍의 [[MS_UP]].", "R로 피해를 입힌 챔피언이 처치되면 \n R [[SKILL_SIZE_UP]]. \n R [[DURATION_EXT]] 3초. \n \n",

          "Q는 [[TARGETED]] [[DMG_MAGIC]], [[SHIELD]], [[BUFF_STACK]]. \n [[BUFF_STACK]]은 [[ON_HIT]] [[DMG_MAGIC]].",

          "W는 지속 [[SLOW]] [[ZONE]] 생성. \n [[ZONE]] 위에 오래 머물면 [[STUN]].",

          "E는 [[SKILL_VECTOR]] [[PIERCE]] [[PROJECTILE]] 발사하여 \n [[DMG_MAGIC]].",

          "R은 [[ZONE]] 생성. \n 생성 될때 [[DISRUPT]] [[DMG_MAGIC]]. \n 이후 주기적으로 [[AOE]] [[DMG_MAGIC]]. \n 최근 R로 피해입힌 챔피언을 자동 [[HOMING]]. \n [[SKILL_RECAST]]으로 조종 가능.",
        ],

        en: [
          "P [[STACKING]]. \n Gain 1 - killing a minion or monster \n Gain 10 - killing a cannon minion or super minion \n Gain 10 - assisting an epic monster kill \n Gain 20 - assisting a champion kill \n Every 100 stacks consumed evolves a skill \n \n",

          "Evolve (Upgrade) \n Q Evolved - increases Q's [[SHIELD]] amount and adds [[MS_UP]]. \n W Evolved - adds [[SLOW]] to Q, E, and R. \n E Evolved - creates a [[ZONE]] along E's path. \n The [[ZONE]] explodes shortly after for [[AOE]] [[DMG_MAGIC]].",
          "R Evolved - requires Q, W, and E to all be evolved first. \n Grants [[MS_UP]] during the storm.", "If a champion damaged by R is killed, \n R [[SKILL_SIZE_UP]]. \n R [[DURATION_EXT]] by 3 seconds. \n \n",

          "Q deals [[TARGETED]] [[DMG_MAGIC]], grants a [[SHIELD]], and applies a [[BUFF_STACK]]. \n The [[BUFF_STACK]] deals [[ON_HIT]] [[DMG_MAGIC]].",

          "W creates a [[ZONE]] with a lingering [[SLOW]]. \n Staying inside it too long applies [[STUN]].",

          "E fires a [[SKILL_VECTOR]] [[PIERCE]] [[PROJECTILE]] that \n deals [[DMG_MAGIC]].",

          "R creates a [[ZONE]]. \n Upon creation, it deals [[DISRUPT]] [[DMG_MAGIC]]. \n Afterward, it periodically deals [[AOE]] [[DMG_MAGIC]]. \n It auto-[[HOMING]]s toward the champion most recently damaged by R. \n Can be steered via [[SKILL_RECAST]].",
        ]

      },

      note2: {
        ko: [
        "W 진화 시 \n W 자체의 [[SLOW]] 효과가 증가되지 않음."
      ],
        en: [
          "When W is Evolved, \n W's own [[SLOW]] effect does not increase.",
        ]
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

export default viktor;
