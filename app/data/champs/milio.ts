import type { ChampData } from "../interactions/types";

const milio: ChampData = {
  id: "milio",
  skills: {
    P: ["ST_CONDITIONAL", "BUFF"],
    Q: ["KNOCKBACK", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SLOW", "SEPARATOR", "P", "BUFF"],
    W: ["W_FLASH", "HEAL", "SEPARATOR", "P", "BUFF"],
    E: ["E_FLASH", "SHIELD", "MS_UP", "SEPARATOR", "P", "BUFF"],
    R: ["CC_CLEANSE", "HEAL", "TENACITY", "SEPARATOR", "P", "BUFF"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC"],
    Q: ["PROJECTILE", "KNOCKBACK", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "AOE", "DMG_MAGIC", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "P", "BUFF"],

    W: ["TIMING_CAST", "HOMING", "ZONE", "HEAL", "SKILL_STEERABLE", "SEPARATOR", "P", "BUFF"],

    E: ["TARGETED", "RECHARGE", "SHIELD", "MS_UP", "SEPARATOR", "P", "BUFF"],

    R: ["TIMING_AFTERCAST", "AOE", "CC_CLEANSE", "HEAL", "TENACITY", "SEPARATOR", "P", "BUFF"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "정말 최후방에 위치해서 \n 원딜에게 들어오는 대상을 Q로 방해하고 \n R로 [[CC_CLEANSE]] 해주면서 \n 지속적인 [[BUFF]], [[HEAL]], [[SHIELD]]로 서포팅에 집중.",
        ], en: [
          "Stay at the very backline, \n disrupt enemies diving the ADC with Q, \n [[CC_CLEANSE]] with R, \n and focus on supporting with sustained [[BUFF]], [[HEAL]], and [[SHIELD]].",
        ] },
      note1: {

        ko: [
          "P는 밀리오의 스킬에 닿은 아군의 다음 [[BA]] 또는 스킬 강화. \n 아군 공격력 비례한 [[DMG_MAGIC]]와 불태워서 지속 [[DMG_MAGIC]]. \n 불태우기 중첩X.",

          "Q는 [[PROJECTILE]] 발사. \n 적중하면 [[KNOCKBACK]], [[SLOW]]. \n 공이 폭발하면서 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 하나라도 적중하면 50% [[MANA_RESTORE]] \n 경로에 있는 아군에게 P의 [[BUFF]].",

          "W는 아군을 따라다니는 [[ZONE]] 생성. \n [[BA]] [[RANGE_UP]]와 지속 [[HEAL]]. \n 3초마다 P의 [[BUFF]] 제공. \n 다른 아군에게 [[SKILL_RECAST]]하면 따라다니는 대상 변경.",

          "E는 아군 대상에게 [[SHIELD]]와 [[MS_UP]]. \n 최대 2회 [[RECHARGE]]. \n P의 [[BUFF]] 적용.",

          "R는 [[AOE]] [[HEAL]], [[TENACITY]], [[CC_CLEANSE]]. \n 밀리오의 [[CC_CLEANSE]]는 [[AIRBORNE]]은 해제 불가. \n P의 [[BUFF]] 적용.",
        ],

        en: [
          "P empowers the next [[BA]] or skill of allies touched by Milio's skills. \n Deals [[DMG_MAGIC]] scaling with the ally's AD and burns for continuous [[DMG_MAGIC]]. \n Burns do not stack.",

          "Q fires a [[PROJECTILE]]. \n On hit: [[KNOCKBACK]] and [[SLOW]]. \n The ball explodes for [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n Hitting at least one enemy restores 50% [[MANA_RESTORE]]. \n Allies in the path receive P's [[BUFF]].",

          "W creates a [[ZONE]] that follows an ally. \n Grants [[BA]] [[RANGE_UP]] and continuous [[HEAL]]. \n Provides P's [[BUFF]] every 3 seconds. \n [[SKILL_RECAST]] on another ally to change the target.",

          "E grants [[SHIELD]] and [[MS_UP]] to an ally. \n Recharges up to 2 times. \n Applies P's [[BUFF]].",

          "R provides [[AOE]] [[HEAL]], [[TENACITY]], and [[CC_CLEANSE]]. \n Milio's [[CC_CLEANSE]] cannot remove [[AIRBORNE]]. \n Applies P's [[BUFF]].",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[R_FLASH]] 안됨.", 
        "Q는 미니언, 몬스터 [[KNOCKBACK]] 시 더 큰 폭발 [[AOE]].", 
        "P는 스킬에 닿은 아군은 평타가 강화됨.\n Q도 경로에 아군이 서있으면 강화됨.", 
        "W는 P [[BUFF]]를 [[ZONE]] 생성될 때, 중간, 사라질 때. \n 총 세번 제공.",
        "W [[ZONE]]의 이동속도는 따라가는 대상에 비례.",
        "W에 텔 안됨.",
        "W는 따라가기를 지정을 해놓으면 \n 밀리오가 녹턴 R, 그브 W처럼 시야 축소에 당해도 유지됨.",
        "E의 [[MS_UP]]는 [[SHIELD]]가 사라져도 남아있음.", 
        "R은 밀리오가 시전방해 CC에 맞으면 사용 불가.",
        "R은 [[TIMING_AFTERCAST]]이 있어서 잠시 동안 공격, 스킬 사용 불가.",        
      ],
        en: [
          "[[Q_FLASH]] and [[R_FLASH]] are not possible.",
          "Q produces a larger explosion [[AOE]] when it [[KNOCKBACK]]s a minion or monster.",
          "P empowers the [[BA]] of allies touched by skills.\n Q also triggers the buff if an ally stands in its path.",
          "W grants P's [[BUFF]] when the [[ZONE]] is created, once mid-duration, and when it expires. \n A total of three times.",
          "W [[ZONE]]'s movement speed scales with the target it's following.",
          "Teleport cannot target W's [[ZONE]].",
          "Once W's follow target is set, \n it keeps following even if Milio is caught in vision-reducing effects like Nocturne R or Graves W.",
          "E's [[MS_UP]] persists even after the [[SHIELD]] is broken.",
          "R cannot be used if Milio is hit by a cast-interrupting CC.",
          "R has [[TIMING_AFTERCAST]], briefly preventing attacks and skill use.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 145,
    16: 130,
  },

};

export default milio;
