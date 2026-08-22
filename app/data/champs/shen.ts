import type { ChampData } from "../interactions/types";

const shen: ChampData = {
  id: "shen",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
    W: ["BLOCKED"],
    E: ["E_FLASH", "TAUNT", "DASH", "WALL_HOP"],
    R: ["SHIELD", "BLINK", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR", "POSITION_REVEAL"],
    W: [],
    E: ["HIT_INDICATOR"],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "기의 검", en: "Spirit Blade" }, tags: ["SUMMON"] },
      { label: { ko: "보호막", en: "Barrier" }, tags: ["ST_CONDITIONAL", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "P", "CDR"] },
    ] },

    Q: { phases: [
      { label: { ko: "검 이동", en: "Blade Moving" }, tags: ["PROJECTILE", "PIERCE", "SEPARATOR", "BUFF_STACK", "X3", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "SLOW"] },
      { label: { ko: "버프 스택", en: "Buff Stacks" }, tags: ["DMG_MAGIC", "ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "ENERGY_RESTORE"] },
    ] },

    W: ["BLOCKED", "ZONE"],
    
    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "Q", "E"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "TAUNT", "SEPARATOR", "ST_CONDITIONAL", "ENERGY_RESTORE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "TARGETED", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "BLINK"] },
      { label: { ko: "검 순간이동", en: "Blade Teleport" }, tags: ["ST_CONDITIONAL", "SUMMON"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "쉔 고수분들 제보 부탁드림.",
        ], en: [
          "Feedback from experienced Shen players is welcome.",
        ] },
      note1: {

        ko: [
          "기의 검 \n Q, R 스킬로 조종 가능.", 

          "P는 스킬을 사용할 때마다 [[SHIELD]]. \n 적 또는 아군 챔피언에게 스킬 적중 시 \n P의 [[CDR]]. \n \n",

          "Q는 기의 검을 쉔에게 불러옴. \n 쉔과 부딪히면 이동 종료. \n 이때 검과 부딪힌 적들은 조건부 [[SLOW]]. \n 쉔과 멀어지려 할 때만 적용.",
          "Q는 동시에 [[BUFF_STACK]] 3개 제공. \n 효과는 [[ON_HIT]] 상대 최대 체력 비례 [[DMG_MAGIC]] \n E의 [[PASSIVE_BONUS]]효과로 40 [[ENERGY_RESTORE]].", 
          "Q로 기의 검과 적 챔피언이 부딪혔다면 \n [[BUFF_STACK]] 효과 [[EMPOWERED]]. \n [[BUFF_STACK]]이 있는 동안 [[AS_UP]] \n [[ON_HIT]] 데미지 2배. \n \n",

          "W는 기의 검 에게 명령하여 \n 비활성화된 [[ZONE]] 생성. \n \n 2초안에 아군 챔피언이 [[ZONE]]에 올라가면 즉시 활성화. \n 활성화 효과는 [[AOE]] 내의 아군 챔피언 [[DODGE]]. \n 2초가 지나면 아군이 올라가지 않아도 자동 활성화. \n \n",

          "E의 [[PASSIVE_BONUS]]는 \n Q의 [[STACK_CONSUME]] 또는 E로 피해를 입히면 \n 40 [[ENERGY_RESTORE]].",
          "E는 [[DASH]]하여 \n 경로상 적 챔피언, 정글 몬스터에게 \n [[TAUNT]]과 최대체력 비례 [[DMG_PHYSICAL]]. \n \n",
          
          "R은 사거리 무제한. \n 아군 챔피언에게 \n 대상의 잃은 체력 비례 [[SHIELD]]. \n 쉔이 3초간 [[SKILL_CHANNEL]]하여 \n 대상에게 쉔과 기의 검이 [[BLINK]].",
        ],

        en: [
          "Spirit Blade \n Can be controlled via Q and R.",

          "P grants a [[SHIELD]] whenever a skill is used. \n Hitting an enemy or ally champion with a skill \n reduces P's cooldown ([[CDR]]). \n \n",

          "Q recalls the Spirit Blade to Shen. \n Its movement ends when it collides with Shen. \n Enemies hit by the blade get a conditional [[SLOW]]. \n It only applies when they try to move away from Shen.",
          "Q also grants 3 [[BUFF_STACK]]s at once. \n Their effect deals [[ON_HIT]] [[DMG_MAGIC]] based on the target's max HP, \n and via E's [[PASSIVE_BONUS]] restores 40 energy ([[ENERGY_RESTORE]]).",
          "If the Spirit Blade collides with an enemy champion via Q, \n the [[BUFF_STACK]] effect becomes [[EMPOWERED]]. \n While the [[BUFF_STACK]] is active, gain [[AS_UP]] \n and [[ON_HIT]] damage is doubled. \n \n",

          "W commands the Spirit Blade to \n create an inactive [[ZONE]]. \n \n If an ally champion steps into the [[ZONE]] within 2 seconds, it activates immediately. \n Once active, allied champions inside the [[AOE]] gain [[DODGE]]. \n If 2 seconds pass without an ally entering, it activates automatically anyway. \n \n",

          "E's [[PASSIVE_BONUS]]: \n dealing damage via Q's [[STACK_CONSUME]] or via E \n restores 40 energy ([[ENERGY_RESTORE]]).",
          "E [[DASH]]es, \n applying [[TAUNT]] and max-HP-scaling [[DMG_PHYSICAL]] \n to enemy champions and jungle monsters in its path. \n \n",

          "R has unlimited range. \n Grants an ally champion \n a [[SHIELD]] scaling with their missing HP. \n Shen [[SKILL_CHANNEL]]s for 3 seconds, \n then [[BLINK]]s to the target along with the Spirit Blade.",
        ]

      },

      note2: {
        ko: [
        "쉔과 검 사이에 상대 챔프를 두는게 핵심 \n 검을 적중시켜야 [[SLOW]], [[AS_UP]]", 
        "기의 검은 수풀 안에 있을 때 상대에게 보이지 않음.", 
        "P의 효과로 생기는 [[SHIELD]]는 \n Q 즉시 \n W는 [[ZONE]]이 사라질 때 \n E는 [[DASH]] 종료 시 \n R은 [[BLINK]] 도착했을 때."
      ],
        en: [
          "The key is positioning the enemy champion between Shen and the blade. \n [[SLOW]] and [[AS_UP]] only trigger if the blade actually hits.",
          "The Spirit Blade is invisible to enemies while inside a bush.",
          "The [[SHIELD]] granted by P's effect triggers: \n for Q, immediately; \n for W, when the [[ZONE]] disappears; \n for E, when the [[DASH]] ends; \n for R, upon arriving via [[BLINK]]."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 200,
    11: 180,
    16: 160,
  },

};

export default shen;
