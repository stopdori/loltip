import type { ChampData } from "../interactions/types";

const pyke: ChampData = {
  id: "pyke",
  skills: {
    P: ["ST_CONDITIONAL", "AD_UP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],

    Q: { phases: [
      { label: { ko: "Q 짧게", en: "Q Tap" }, tags: ["Q_FLASH", "SLOW"] },
      { label: { ko: "Q 길게", en: "Q Charged" }, tags: ["Q_FLASH", "GRAB", "SLOW"] },
    ] },
    
    W: ["W_FLASH", "MS_UP", "GHOSTING", "CAMOUFLAGE"],

    E: ["E_FLASH", "DASH", "WALL_HOP", "SEPARATOR", "ST_DELAYED", "STUN"],

    R: ["R_FLASH", "BLINK", "WALL_HOP", "CC_BUFFER", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE", "SKILL_RECAST"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "AD_UP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],

    Q: { phases: [
      { label: { ko: "Q 짧게", en: "Q Stab" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "NON_PROJECTILE", "SINGLE", "SLOW"] },
      { label: { ko: "Q 길게", en: "Q Charged" }, tags: ["DMG_PHYSICAL", "SKILL_CHARGED", "TIMING_CAST", "PROJECTILE", "GRAB", "SLOW"] },
    ] },

    W: ["BUFF_FORM", "MS_UP", "GHOSTING", "CAMOUFLAGE"],

    E: ["DASH", "WALL_HOP", "SEPARATOR", "ST_DELAYED", "DMG_PHYSICAL", "STUN"],

    R: { phases: [
      { label: { ko: "R 준비",     en: "Wind-up" }, tags: ["TIMING_CAST", "MOBILITY", "LOCKED", "CC_BUFFER"] },
      { label: { ko: "R 순간이동", en: "Blink"   }, tags: ["DMG_PHYSICAL", "AOE", "BLINK", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE", "SKILL_RECAST"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "소규모 교전, 난전에 정말 강함. \n 대신 한타가 정말 약함.",
          "Q로 [[GRAB]]만 하고 눈치 잘 보다가 \n E로 광역 [[STUN]], R [[EXECUTE]] 등등으로 잘 해야함. \n 난이도 정말 어려움."
        ], en: [
          "Really strong in small skirmishes and chaotic fights. \n But quite weak in teamfights.",
          "You need to only [[GRAB]] with Q while reading the situation, \n then follow up well with E's [[STUN]] and R's [[EXECUTE]]. \n Very high difficulty.",
        ] },
      note1: {

        ko: [
          "P는 적 챔피언에게 받는 피해의 일부를 비축. \n 주변에 적이 2명 이상이면 4배 정도 효과 증가. \n \n 파이크는 최대 체력을 늘릴 수 없음. (레벨업 제외) \n 체력 14당 공격력 1로 변환. \n 룰루 R(커져라)을 받아도 [[MAX_HP_UP]], [[HEAL]] 대신 [[AD_UP]]. \n \n",

          "Q는 짧게, 길게 누르는 효과가 다름. \n \n Q를 짧게 쓰면 [[SINGLE]] [[DMG_PHYSICAL]], [[SLOW]]. \n 챔피언 우선 적중. \n \n Q를 길게 누르면 [[SINGLE]] [[PROJECTILE]] [[DMG_PHYSICAL]], [[GRAB]], [[SLOW]]. \n \n Q가 적중하거나 [[SKILL_CHARGED]]을 사용하지 않으면 [[MANA_RESTORE]] 75%. \n \n",

          "W는 [[CAMOUFLAGE]], [[MS_UP]]. \n [[MS_UP]]는 5초에 걸쳐 감소. \n [[MS_UP]] 효과는 [[AR_PEN]] 비례 증가. \n \n",

          "E는 [[DASH]]스킬. \n [[DASH]] 시작 지점에 유령 [[SUMMON]]. \n 잠시 뒤 파이크에게 돌아와 경로 [[AOE]] [[DMG_PHYSICAL]], [[STUN]]. \n [[STUN]] 시간은 [[AR_PEN]] 비례 증가. \n \n",

          "R은 X모양 [[AOE]] [[DMG_PHYSICAL]]. \n 일정 체력 이하는 [[EXECUTE]]. \n [[EXECUTE]]되지 않으면 절반의 [[DMG_PHYSICAL]]. \n [[DMG_PHYSICAL]]는 공격력, [[AR_PEN]] 비례 증가. \n \n R의 [[TIMING_CAST]] 중에, X [[AOE]] 내에서 적 챔피언이 처치되면 \n 1. 파이크가 처치 시 \n 마지막에 어시스트 한 아군에게 챔피언 처치골드 복사. \n 2. 아군이 처치 시 \n 파이크에게 챔피언 처치골드 복사 \n \n 처치에 성공 하면 \n 20초간 [[SKILL_RECAST]] 가능. 시간 지나면 사라짐. \n 또 처치 성공 시 계속 반복.",
        ],

        en: [
          "P stores a portion of damage taken from enemy champions. \n The effect is roughly quadrupled when 2 or more enemies are nearby. \n \n Pyke cannot increase his max HP. (except from leveling up) \n Converts every 14 HP into 1 AD. \n Even from Lulu's R (Wild Growth), he gets [[AD_UP]] instead of [[MAX_HP_UP]] and [[HEAL]]. \n \n",

          "Q has different effects when tapped or charged. \n \n Tapping Q deals [[SINGLE]] [[DMG_PHYSICAL]] and [[SLOW]]. \n Prioritizes hitting champions. \n \n Holding Q fires a [[SINGLE]] [[PROJECTILE]] for [[DMG_PHYSICAL]], [[GRAB]], and [[SLOW]]. \n \n If Q hits or is not [[SKILL_CHARGED]], restores 75% of the [[MANA_RESTORE]] cost. \n \n",

          "W grants [[CAMOUFLAGE]] and [[MS_UP]]. \n The [[MS_UP]] decays over 5 seconds. \n The [[MS_UP]] amount increases with [[AR_PEN]]. \n \n",

          "E is a [[DASH]] ability. \n Summons a ghost [[SUMMON]] at the dash's starting point. \n It returns to Pyke shortly after, dealing [[AOE]] [[DMG_PHYSICAL]] and [[STUN]] along the path. \n The [[STUN]] duration increases with [[AR_PEN]]. \n \n",

          "R deals [[AOE]] [[DMG_PHYSICAL]] in an X shape. \n [[EXECUTE]]s targets below a certain HP threshold. \n Deals half the [[DMG_PHYSICAL]] if it doesn't [[EXECUTE]]. \n The [[DMG_PHYSICAL]] scales with AD and [[AR_PEN]]. \n \n During R's [[TIMING_CAST]], if an enemy champion dies within the X [[AOE]]: \n 1. If Pyke gets the kill, \n the kill gold is copied to the ally with the last assist. \n 2. If an ally gets the kill, \n the kill gold is copied to Pyke. \n \n On a successful kill, \n [[SKILL_RECAST]] becomes available for 20 seconds, then disappears. \n This also repeats on each successful kill.",
        ]

      },

      note2: {
        ko: [
        "우물에서 복귀할 때 E쓰고 W쓰면 좋음. \n W 쓰고 E 쓰면 [[CAMOUFLAGE]] 풀림.", 
        "W [[CAMOUFLAGE]] 중 점멸써도 [[CAMOUFLAGE]] 유지.",
        "R 스킬은 2단계로 나뉨 준비/순간이동. \n 준비단계에서 파이크가 맞은 CC는 유효 하지만 \n [[BLINK]]단계가 발동되어 이동하는 것. \n [[BLINK]]단계에는 CC 저항력 없음. \n [[BLINK]]하고 내려 찍었을 때 CC의 지속시간이 남아있다면 CC 효과 유효.",
        "파이크 스킬에 [[AR_PEN]] 비례 효과 증가는 \n % 수치는 반영 안됨."
      ],
        en: [
          "Using E then W when recalling to base is good. \n Using W then E breaks [[CAMOUFLAGE]].",
          "[[CAMOUFLAGE]] stays active even if you flash during W.",
          "R has two phases: wind-up / blink. \n CC taken by Pyke during the wind-up phase is valid, \n but the [[BLINK]] phase still triggers and he moves. \n There is no CC resistance during the [[BLINK]] phase. \n If CC duration remains after [[BLINK]]ing and landing, the CC effect still applies.",
          "The [[AR_PEN]]-scaling effect increases on Pyke's abilities \n do not account for percentage-based values.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default pyke;
