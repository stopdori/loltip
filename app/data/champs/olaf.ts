import type { ChampData } from "../interactions/types";

const olaf: ChampData = {
  id: "olaf",
  skills: {
    P: ["ST_CONDITIONAL", "AS_UP", "LIFESTEAL"],

    Q: ["AR_SHRED", "SLOW", "DROP"],

    W: ["AA_RESET", "AS_UP", "SHIELD"],

    E: ["E_FLASH"],

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["AR_MR_UP"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM", "AD_UP", "CC_CLEANSE", "CC_IMMUNE", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"] },
     ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "AS_UP", "LIFESTEAL"],

    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "AR_SHRED", "SLOW", "DROP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],

    W: ["AS_UP", "SHIELD"],

    E: ["DMG_TRUE", "TIMING_CAST", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "AR_MR_UP"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM", "AD_UP", "CC_CLEANSE", "CC_IMMUNE", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BA", "E", "DURATION_EXT"] },
     ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "정면 등장보다 측면, 후면 등장이 위협적임.",
          "Q를 던지고 잘 주우면서 싸워야 함.",
          "R을 시전하고 죽을 각오로 싸워야 함.",
        ], en: [
          "Flanking or approaching from the rear is more threatening than a frontal engage.",
          "You need to throw Q and pick it up efficiently while fighting.",
          "After using R, commit and fight as if your life depends on it.",
        ] },
      note1: {

        ko: [
          "P는 잃은 체력 비례 [[AS_UP]], [[LIFESTEAL]] 획득.",

          "Q는 도끼 [[PROJECTILE]]를 투척. \n [[DMG_PHYSICAL]], [[AR_SHRED]], 이동 거리 비례 [[SLOW]]. \n 해당 지점에 도끼 [[DROP]] 생성. \n 닿으면 2.5초로 [[CDR]]. \n 2.5초 남은 상태에서 닿으면 [[CDR_RESET]].",

          "W는 [[AS_UP]], 잃은 체력 비례 [[SHIELD]].",

          "E는 [[TARGETED]] [[DMG_TRUE]]. \n 처치 시 소모 값 회복. \n 마나 대신 체력을 소모. \n [[BA]] 공격 시 [[CDR]] 1초. \n 몬스터 [[BA]] 공격 시 [[CDR]] 2초.",

          "R의 [[PASSIVE_BONUS]]는 [[AR_MR_UP]]. \n \n R은 지속시간 3초 [[AD_UP]], [[CC_CLEANSE]], 3초간 [[CC_IMMUNE]]. \n [[BA]], E로 챔피언 공격 시 지속시간 2.5초 연장. \n 처음 1초간 적 챔피언에게 다가갈 때 [[MS_UP]].",
        ],

        en: [
          "P grants [[AS_UP]] and [[LIFESTEAL]] scaling with missing HP.",
          "Q throws an axe [[PROJECTILE]]. \n Deals [[DMG_PHYSICAL]], applies [[AR_SHRED]], and [[SLOW]] scaling with distance traveled. \n Creates a [[DROP]] at the landing location. \n Picking it up sets the cooldown to 2.5s. \n Picking it up with 2.5s remaining [[CDR_RESET]]s the cooldown.",
          "W grants [[AS_UP]] and a [[SHIELD]] scaling with missing HP.",
          "E is a [[TARGETED]] [[DMG_TRUE]]. \n Refunds the cost on kill. \n Costs HP instead of mana. \n [[BA]] on any target reduces cooldown by 1s. \n [[BA]] on monsters reduces cooldown by 2s.",
          "R's [[PASSIVE_BONUS]] is [[AR_MR_UP]]. \n \n R grants [[AD_UP]] and [[CC_CLEANSE]] for 3s, and [[CC_IMMUNE]] for 3s. \n Attacking a champion with [[BA]] or E extends duration by 2.5s. \n Grants [[MS_UP]] when approaching enemy champions for the first 1s.",
        ]

      },

      note2: {
        ko: [
        "P의 [[BUFF]], W의 [[SHIELD]]는 체력이 30%일 때 최대.",
        "Q는 최소 투척 거리가 있음. \n 벽에 붙어서 벽으로 던지면 바로 주울 수 있음.",
        "[[Q_FLASH]]은 가능하지만 최대 사거리가 늘어나지는 않음. \n [[Q_FLASH]]을 가까운 거리에 던지면 \n 엉뚱하게 날아갈 수 있음.",
        "Q [[DROP]]에 [[ALLY_TP_OK]] 불가.",
        "E의 시전 속도는 공격 속도에 비례"
      ],
        en: [
          "P [[BUFF]] and W [[SHIELD]] are maximized at 30% HP.",
          "Q has a minimum throw distance. \n Throwing it into a wall while standing next to it lets you pick it up immediately.",
          "[[Q_FLASH]] is possible, but does not extend max range. \n Throwing [[Q_FLASH]] at close range \n may cause the axe to fly in an unintended direction.",
          "[[ALLY_TP_OK]] to Q [[DROP]] is not possible.",
          "E's cast speed scales with attack speed.",
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

export default olaf;
