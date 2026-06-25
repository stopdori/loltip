import type { ChampData } from "../interactions/types";

const locke: ChampData = {
  id: "locke",
  skills: {
    P: ["ON_HIT"],
    Q: ["Q_FLASH", "MARK", "SLOW"],
    W: ["AS_UP", "MS_UP", "SEPARATOR", "HEAL"],

    E: { phases: [
      { label: { ko: "E 순간이동", en: "E Blink" }, tags: ["MARK_CONSUME", "BLINK", "WALL_HOP", "CC_BUFFER", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"] },
      { label: { ko: "E 돌진공격", en: "E Dash" }, tags: ["E_FLASH", "AA_RESET", "MARK_CONSUME", "DASH", "WALL_HOP"] },
    ] },

    R: ["SLOW", "DEBUFF", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE", "DURATION_RESET", "DEBUFF"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ON_HIT"],

    Q: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "MARK", "SLOW", "SEPARATOR", "SKILL_RECAST", "X2"],

    W: ["AS_UP", "MS_UP", "CANCELLABLE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],

    E: { phases: [
      { label: { ko: "E 순간이동", en: "E Blink" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "MARK_CONSUME", "BLINK", "WALL_HOP", "CC_BUFFER", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"] },

      { label: { ko: "E 평타 돌진", en: "E BA Dash" }, tags: ["DMG_MAGIC", "AOE", "MARK_CONSUME", "DASH", "WALL_HOP"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "ST_DELAYED", "SLOW", "DEBUFF", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE", "DURATION_RESET", "DEBUFF"],
    
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q로 포킹하다 E로 진입해서 W키고 극딜. \n 암살 성공하면 E [[CDR_RESET]]를 이용해서 탈출 또는 계속 딜.", "다른것보다 R을 최대한 많이 맞히는게 가장 중요함. \n [[EXECUTE]]이 아군 공격에도 발동하기 때문. \n R을 그냥쓰면 발동하는 시간이 오래걸림. \n Q [[SLOW]], 아군 스킬과 연계가 중요.",
        ], en: [
          "Poke with Q, then engage with E and turn on W to burst. \n If the assassination succeeds, use E [[CDR_RESET]] to escape or keep dealing damage.",
          "More than anything, landing as much of R as possible is the most important. \n Because [[EXECUTE]] can also be triggered by allied attacks. \n Casting R plainly takes a long time to trigger. \n Q [[SLOW]] and coordination with allied skills are crucial.",
        ] },
      note1: {

        ko: [
          "P는 [[ON_HIT]] [[DMG_MAGIC]]. \n 대상의 잃은 체력 비례 [[DMG_MAGIC]] 증가. \n 30%에 최대.",
          
          "Q는 지속시간 동안 [[PIERCE]] [[PROJECTILE]]를 최대 3개 발사. \n [[DMG_MAGIC]]와 [[MARK]], [[SLOW]]. \n Q3는 강화 [[SLOW]]. \n 던지지 않은 Q 갯수만큼 [[MANA_RESTORE]], [[CDR]]. \n \n [[BA]], E1, E [[DASH]][[BA]]를 맞히면 [[MARK_CONSUME]] [[DMG_MAGIC]]. \n [[MARK]] 중첩 갯수에 따라 [[MARK_CONSUME]] [[DMG_MAGIC]] 증가.",

          "W를 사용하면 처음 2초 동안 강화 [[MS_UP]]. \n 이후 지속시간 동안 [[AS_UP]], [[MS_UP]]. \n 대신 로크의 체력이 12%만큼 지속 감소. \n 지속시간 종료 또는 중단하면 12%만큼 [[HEAL]]. \n \n W는 작성자가 정확히 이해를 못 했음. \n 이렇게 이해했음. 틀렸으면 제보 부탁.",

          "E는 [[BLINK]]하여 [[AOE]] [[DMG_MAGIC]]. \n 다음 [[BA]]는 강화되어 [[DASH]] [[AOE]] [[DMG_MAGIC]]. \n [[MARK]]이 있다면 [[MARK_CONSUME]] [[DMG_MAGIC]]. \n 킬 관여 시 [[CDR_RESET]]. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",

          "R은 [[ZONE]] [[DMG_MAGIC]]와 [[SLOW]], [[DEBUFF]]. \n [[DEBUFF]]를 받는 동안 대상의 체력이 10%로 떨어지면 [[EXECUTE]]. \n 다른 대상들의 [[DEBUFF]] 지속시간 초기화. \n 지속시간이 끝나고 [[EXECUTE]]이 됐었다면 바닥에 유물 생성. \n 유물을 주우면 [[CDR]], 처형 기준치 0.5% 영구 증가.",
        ],

        en: [
          "P is [[ON_HIT]] [[DMG_MAGIC]]. \n [[DMG_MAGIC]] increases based on the target's missing health. \n Caps at 30%.",

          "During its duration, Q fires up to 3 [[PIERCE]] [[PROJECTILE]]s. \n Deals [[DMG_MAGIC]] and applies [[MARK]], [[SLOW]]. \n The 3rd Q applies an enhanced [[SLOW]]. \n Restores [[MANA_RESTORE]] and [[CDR]] for each Q not thrown. \n \n Hitting with [[BA]], E1, or E [[DASH]][[BA]] triggers [[MARK_CONSUME]] [[DMG_MAGIC]]. \n [[MARK_CONSUME]] [[DMG_MAGIC]] increases with the number of stacked [[MARK]]s.",

          "Casting W grants an enhanced [[MS_UP]] for the first 2 seconds. \n Afterward, grants [[AS_UP]] and [[MS_UP]] for the duration. \n In exchange, Locke's health continuously decreases by 12%. \n When the duration ends or is canceled, [[HEAL]] for 12%. \n \n The author wasn't able to fully understand W. \n This is the current understanding — please report if it's wrong.",

          "E [[BLINK]]s and deals [[AOE]] [[DMG_MAGIC]]. \n The next [[BA]] is enhanced into a [[DASH]] [[AOE]] [[DMG_MAGIC]]. \n If [[MARK]] is present, deals [[MARK_CONSUME]] [[DMG_MAGIC]]. \n [[CDR_RESET]] on kill participation. \n [[CC_BUFFER]] allows ignoring some CC.",

          "R creates a [[ZONE]] dealing [[DMG_MAGIC]] and applying [[SLOW]], [[DEBUFF]]. \n If a target's health drops to 10% while under [[DEBUFF]], it triggers [[EXECUTE]]. \n Resets the [[DEBUFF]] duration on other targets. \n If [[EXECUTE]] occurred before the duration ends, drops a relic on the ground. \n Picking up the relic permanently increases [[CDR]] and the execute threshold by 0.5%.",
        ]

      },

      note2: {
        ko: [
          "W는 CC에 걸렸을 때 사용불가. \n 단, W 도중에는 CC에 맞아도 [[CANCELLABLE]].",
          "E 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 로크가 맞은 CC는 유효 하지만\n[[BLINK]]단계가 발동되어 이동하는 것.\n[[BLINK]]단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효.",

        ],
        en: [
          "W cannot be cast while affected by CC. \n However, while W is active, it is [[CANCELLABLE]] even if hit by CC.",
          "The E skill is split into 2 phases: windup/teleport.\nDuring the windup phase, CC that hits Locke is still effective,\nbut the [[BLINK]] phase still triggers and moves him.\nThere is no CC resistance during the [[BLINK]] phase.\nIf the CC's duration remains after teleporting, the CC effect still applies.",
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

export default locke;
