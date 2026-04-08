import type { ChampData } from "../interactions/types";

const evelynn: ChampData = {
  id: "evelynn",
  skills: {
    P: ["ST_CONDITIONAL", "CAMOUFLAGE", "HEAL"],
    Q: [],
    W: ["W_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CHARM", "MR_SHRED"],
    E: ["E_FLASH", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "DASH", "WALL_HOP"],
    R: ["BLINK", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF", "CAMOUFLAGE"],

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SKILL_RECAST"] },
      { label: { ko: "Q2~Q4", en: "Q2~Q4"  }, tags: ["DMG_MAGIC", "PROJECTILE", "HOMING", "PIERCE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
    ] },

    W: ["TARGETED", "TIMING_CAST", "MARK", "SEPARATOR", "ST_CONDITIONAL", "CHARM", "MR_SHRED"],

    E: { phases: [
      { label: { ko: "E", en: "E"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"] },
      { label: { ko: "E 강화", en: "Empowered E"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "DASH", "AOE"] },
    ] },

    R: ["DMG_MAGIC", "AOE", "BLINK"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "사이드 잘라먹기가 정말 좋음.", "상대가 모르는 위치에 숨어있다가 \n 상대 핵심 딜러에 W를 걸고 잠시 기다렸다가 \n [[E_FLASH]] QQQQ R로 암살하고 빠져나오기.",
        ], en: ["Great at sidelaning.", "Hide in a position the enemy is unaware of, \n apply W to the enemy carry and wait briefly, \n then [[E_FLASH]] QQQQ R to assassinate and escape."] },
      note1: {

        ko: [
          "P는 4초간 비 전투시 악의 장막 [[BUFF]]가 생김. \n 이때 일정 체력 이하라면 [[HEAL]]. \n 6레벨부터 [[CAMOUFLAGE]] 추가.",
          "Q는 1개의 투사체를 날리고 \n 3번의 가시를 재사용할 수 있음. \n 투사체는 [[DEBUFF]]를 걸고 3번의 공격이 추가 데미지를 줌. \n 가시는 [[PIERCE]] 가능.",
          "W는 대상에게 [[MARK]]. \n [[BA]]나 스킬로 때리면 [[SLOW]]. \n 2.5초 지나고 때리면 [[CHARM]], [[MR_SHRED]] 추가.",
          "E로 공격하면 [[MS_UP]]. \n \n P의 [[BUFF]]상태가 되면 \n 쿨타임이 초기화 되고 \n [[DASH]]이 추가되고 경로에도 데미지.",
          "R은 전방에 광역피해를 주고 뒤로 [[BLINK]]. \n 체력 30% 미만 적에게 추가 데미지. \n P의 [[BUFF]] 1.5초 뒤에 활성화.",
        ],

        en: [
          "P grants Demon Shade [[BUFF]] after 4 seconds out of combat. \n If below a certain HP threshold, also grants [[HEAL]]. \n Gains [[CAMOUFLAGE]] at level 6.",
          "Q fires one projectile \n and allows 3 recast needles. \n The projectile applies a [[DEBUFF]], and all 3 attacks deal bonus damage. \n Needles can [[PIERCE]].",
          "W applies [[MARK]] to a target. \n Hitting with [[BA]] or a skill applies [[SLOW]]. \n Hitting after 2.5 seconds also triggers [[CHARM]] and [[MR_SHRED]].",
          "E grants [[MS_UP]] on hit. \n \n While in Demon Shade [[BUFF]], \n the cooldown resets, \n gains [[DASH]], and deals damage along the path.",
          "R deals area damage in front and [[BLINK]]s backward. \n Deals bonus damage to enemies below 30% HP. \n Demon Shade [[BUFF]] activates 1.5 seconds after casting.",
        ]

      },

      note2: {
        ko: [
        "[[CAMOUFLAGE]] 중 점멸 써도 [[CAMOUFLAGE]] 안 풀림.", "W는 정글몹에 사용하면 [[DMG_MAGIC]] 추가.", "E의 돌진은 악의 장막 버프가 있을 때 강화.\nE가 정말 어려운 조건에서 [[WALL_HOP]] 가능."
      ],
        en: ["[[CAMOUFLAGE]] does not break on flash", "W's [[CHARM]] and [[MR_SHRED]] are secondary effects triggered only by attacking a target with full stacks", "E's dash is empowered while in [[CAMOUFLAGE]].\nE can [[WALL_HOP]] under very specific conditions", "R deals increased damage to targets below 30% HP"]
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

export default evelynn;
