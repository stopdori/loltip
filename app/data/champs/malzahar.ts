import type { ChampData } from "../interactions/types";

const malzahar: ChampData = {
  id: "malzahar",
  skills: {
    P: ["DMG_REDUCE", "CC_IMMUNE"],
    Q: ["Q_FLASH", "SILENCE"],
    W: ["ALLY_TP_OK"],
    E: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "MANA_RESTORE", "CHAIN"],
    R: ["R_FLASH", "SUPPRESS"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: ["VISION"],
    E: ["POSITION_REVEAL"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: ["DMG_REDUCE", "CC_IMMUNE"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "AOE", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "DURATION_RESET", "E"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "BUFF_INTERACT", "Q", "E", "R"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "SUMMON", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "SUMMON"] },
    ] },

    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MANA_RESTORE", "CHAIN"],
 
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "TARGETED", "SINGLE", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DURATION_RESET", "E"] },
      { label: { ko: "R 장판", en: "R Zone" }, tags: ["DMG_MAGIC", "ZONE"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "멀리서 Q로 포킹 하면서 W로 시야를 뚫어주다가 \n 앞라인부터 같이보기",
          "삐죽 튀어나온 몸이약한 적을 \n R로 [[SUPPRESS]]하여 잘라먹기."
        ], en: [
          "Poke from afar with Q while clearing vision with W, \n then group up starting from the frontline",
          "Pick off squishy enemies who overextend \n by [[SUPPRESS]]ing them with R."
        ] },
      note1: {

        ko: [
          "P는 피해나 CC를 맞지 않으면 특별한 보호막이 생김. \n 피해를 입거나 CC를 맞으면 0.25초간 90% [[DMG_REDUCE]], [[IMMOBILIZING]] 면역.",

          "Q는 [[DMG_MAGIC]]와 [[SILENCE]].",

          "W의 [[PASSIVE_BONUS]]는 Q, E, R 스킬을 사용하면 [[BUFF_STACK]]. \n 지속시간 없음. 최대 2스택. \n \n W는 공허충을 [[SUMMON]]. \n [[BUFF_STACK]]을 소모하여 [[SUMMON]] 마리수 추가.",

          "E는 대상에게 [[DEBUFF]]를 걸고 지속 [[DMG_MAGIC]]. \n Q, R 스킬을 맞으면 지속시간 초기화. \n [[DEBUFF]] 지속동안 대상이 처치되면 [[MANA_RESTORE]]하고 \n 근처 다른 대상에게 [[CHAIN]]. ",

          "R은 대상을 [[SUPPRESS]]하여 [[DMG_MAGIC]]. \n 대상의 최대 체력 비례 [[DMG_MAGIC]]를 입히는 [[ZONE]]도 생성.",
        ],

        en: [
          "P grants a special shield if it doesn't take damage or CC. \n Taking damage or CC grants 90% [[DMG_REDUCE]] and [[IMMOBILIZING]] immunity for 0.25s.",

          "Q deals [[DMG_MAGIC]] and applies [[SILENCE]].",

          "W's [[PASSIVE_BONUS]] gains a [[BUFF_STACK]] when casting Q, E, or R. \n No duration. Max 2 stacks. \n \n W [[SUMMON]]s voidlings. \n Consuming [[BUFF_STACK]] adds extra [[SUMMON]]ed voidlings.",

          "E applies a [[DEBUFF]] and deals [[DMG_MAGIC]] over time. \n Duration refreshes if the target is hit by Q or R. \n If the target dies while [[DEBUFF]]ed, [[MANA_RESTORE]] and \n [[CHAIN]] to another nearby target. ",

          "R [[SUPPRESS]]es the target and deals [[DMG_MAGIC]]. \n Also creates a [[ZONE]] that deals [[DMG_MAGIC]] based on the target's max health.",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]]이 진짜 좋음", 
        "P는 미니언의 피해에는 영향이 없음. \n 쿨타임 도중 피해를 받으면 \n 쿨타임이 처음부터 다시 도는데 \n 미니언 피해에는 쿨타임이 새로 돌지 않음. \n 대신 미니언은 [[DMG_REDUCE]]가 없음.",
        "공허충은 E가 걸린 미니언에게 300% 데미지.",
        "E는 체력 20미만 미니언 처형.",
        "R은 시전중에 대상과의 거리가 멀어지면 해제되는데 \n 최대 유지거리는 미드 일자부쉬 정도.",
        "[[SUPPRESS]]당한 대상은 [[ZONE]] 피해도 같이 입음."
      ],
        en: [
        "[[R_FLASH]] is really good",
        "P doesn't react to minion damage. \n Taking damage resets its cooldown from the start, \n but minion damage doesn't reset the cooldown. \n However, minions don't get [[DMG_REDUCE]].",
        "Voidlings deal 300% damage to minions affected by E.",
        "E executes minions below 20 health.",
        "R is cancelled if the target moves too far away during the cast, \n with a max range of roughly the mid lane bush.",
        "The [[SUPPRESS]]ed target also takes [[ZONE]] damage."
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 110,
    16: 80,
  },

};

export default malzahar;
