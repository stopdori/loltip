import type { ChampData } from "../interactions/types";

const missfortune: ChampData = {
  id: "missfortune",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ST_CONDITIONAL", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "X2"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AS_UP", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
    ] },
    
    E: ["E_FLASH", "SLOW"],
    R: [],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: [],
    E: ["VISION"],
    R: [],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "ON_HIT"],

    Q: ["DMG_PHYSICAL", "TARGETED", "TIMING_CAST", "PROJECTILE", "P", "ON_HIT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "CHAIN", "PROJECTILE", "P", "ON_HIT"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ST_CONDITIONAL", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "X2"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AS_UP", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
    ] },

    E: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "SLOW"],

    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "AOE", "CANCELLABLE"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "R을 쏘기 전에 E로 [[SLOW]]를 걸어야 좋음.", "R을 잘 쏘면 굉장한 데미지가 나옴. \n 아군 스킬에 잘 연계해서 R을",
        ], en: [
          "Apply [[SLOW]] with E before firing R.", "A well-placed R deals enormous damage. \n Combo it with allied skills to land R.",
        ] },
      note1: {

        ko: [
          "P는 새로운 대상 [[BA]] 시 [[DMG_PHYSICAL]] 추가. \n [[ON_HIT]] 효과. 쿨타임 따로 없음.",

          "Q는 대상에게 [[PROJECTILE]] 발사 [[DMG_PHYSICAL]]. \n 뒤에 있는 적에게 두 번째 탄환 [[CHAIN]] 가능. \n 두 번째 탄환은 [[CRIT]] 적용 가능. \n 첫 번째 대상이 처치되면 두 번째는 항상 [[CRIT]]. \n Q의 [[PROJECTILE]]는 P의 [[ON_HIT]] 효과 적용.",

          "W의 [[PASSIVE_BONUS]]는 4초간 피해를 입지 않으면 [[MS_UP]]. \n 3초간 피해를 입지 않으면 2배 [[MS_UP]]. \n \n W 사용 시 [[AS_UP]], 즉시 2배 [[MS_UP]]. \n 이때 피해를 입으면 [[AS_UP]] 지속, [[MS_UP]] 해제.\n P의 [[ON_HIT]] 효과가 발동할 때마다 W의 [[CDR]].",

          "E는 [[ZONE]] 지속 [[DMG_MAGIC]] [[SLOW]].",

          "R은 [[SKILL_CHANNEL]] 스킬. \n 움직이거나 다른 행동을 하면 중단. \n 광역 [[AOE]] 지속 [[DMG_PHYSICAL]]. \n [[CRIT]] 적용 가능.",
        ],

        en: [
          "P deals bonus [[DMG_PHYSICAL]] on [[BA]] against a new target. \n [[ON_HIT]] effect. No cooldown.",

          "Q fires a [[PROJECTILE]] at a target for [[DMG_PHYSICAL]]. \n Can [[CHAIN]] a second bullet to an enemy behind the target. \n The second bullet can [[CRIT]]. \n If the first target dies, the second bullet always [[CRIT]]s. \n Q's [[PROJECTILE]] applies P's [[ON_HIT]] effect.",

          "W's [[PASSIVE_BONUS]] grants [[MS_UP]] after 4 seconds without taking damage. \n After 3 more seconds without damage, [[MS_UP]] doubles. \n \n Activating W grants [[AS_UP]] and immediately doubles [[MS_UP]]. \n Taking damage removes [[MS_UP]] but keeps [[AS_UP]].\n P's [[ON_HIT]] effect reduces W's [[CDR]] each time it triggers.",

          "E creates a [[ZONE]] that applies continuous [[DMG_MAGIC]] and [[SLOW]].",

          "R is a [[SKILL_CHANNEL]] skill. \n Moving or taking other actions cancels it. \n Wide [[AOE]] continuous [[DMG_PHYSICAL]]. \n Can [[CRIT]].",
        ]

      },

      note2: {
        ko: [
        "Q의 뒤쪽 연쇄는 모습이 보이지 않아도 [[CHAIN]] 가능. \n [[STEALTH]], [[INVISIBILITY]], 부쉬 등등.", 
        "E의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", 
        "R은 E로 [[SLOW]]를 걸고 그 다음 쓰는 게 좋음 \n R [[SKILL_CHANNEL]]에 움직이면 풀림",
        "R은 [[DOT]] 판정이기 때문에 \n [[SLEEP]]을 깨우지 않음. \n [[SPELL_SHIELD]]를 무시하고 피해를 줌.",
        "R 사용할 때 \n 점멸, 순간 이동을 사용하면 R 해제. \n 다른 소환사 주문들은 해제되지 않음."
      ],
        en: [
          "Q's [[CHAIN]] can fire at targets behind even if they aren't visible. \n Includes [[STEALTH]], [[INVISIBILITY]], bushes, etc.",
          "E's [[SLOW]] is continuously applied to targets inside the zone.",
          "Apply E's [[SLOW]] first, then use R. \n Moving cancels R's [[SKILL_CHANNEL]].",
          "R is [[DOT]] damage, so \n it does not wake targets from [[SLEEP]]. \n It also ignores [[SPELL_SHIELD]] and still deals damage.",
          "Using Flash or Teleport while channeling R cancels it. \n Other summoner spells do not cancel R.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default missfortune;
