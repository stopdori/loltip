import type { ChampData } from "../interactions/types";

const lillia: ChampData = {
  id: "lillia",
  skills: {
    P: ["DEBUFF", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["MS_UP"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["Q_FLASH", "BUFF_STACK"] },
    ] },

    W: ["CC_BUFFER", "BUFF_STACK"],
    E: ["E_FLASH", "SLOW", "BUFF_STACK"],
    R: ["DROWSY", "SLOW", "SLEEP", "BUFF_STACK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DEBUFF_INTERACT", "Q", "W", "E", "DMG_MAGIC", "DOT", "ST_CONDITIONAL", "HEAL"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "BUFF_STACK", "DEBUFF", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_TRUE"] }
    ] },

    W: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DASH", "BUFF_STACK", "DEBUFF"],
    
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "BUFF_STACK", "DEBUFF"],
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["ST_CONDITIONAL", "TIMING_CAST", "PROJECTILE", "SWARM", "ST_DELAYED", "BUFF_STACK"] },
      { label: { ko: "수면", en: "Asleep" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },
   
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "E로 포킹하면서 자리 잡다가. \n [[Q_FLASH]]로 여려명을 맞히고 \n 다수 R을 시전하여 한타 캐리.",
        ], en: [
          "Poke with E to set up position, \n then hit multiple targets with [[Q_FLASH]] \n and cast multiple R's to carry the teamfight.",
        ] },
      note1: {

        ko: [
          "P는 Q, W, E 스킬에 맞은 대상에게 \n 꿈가루 [[DEBUFF]]. \n [[DEBUFF]]가 지속되는 동안 최대 체력 비례 지속 [[DMG_MAGIC]]. \n [[DEBUFF]]가 걸린 대상이 \n 챔피언, 대형 몬스터, 에픽 몬스터 이면 지속 [[HEAL]].",

          "Q의 [[PASSIVE_BONUS]]는 \n Q, W, E, R 스킬 적중 시 [[MS_UP]] [[BUFF_STACK]]. 최대 4스택. \n \n Q 적중 시 Q의 [[BUFF_STACK]], P의 [[DEBUFF]], [[DMG_MAGIC]]. \n 가장자리에 맞으면 [[DMG_TRUE]] 추가.",

          "W는 [[DASH]] 하여 내려찍음. \n 단, 벽을 넘을 수 없음. \n 적중 시 Q의 [[BUFF_STACK]], P의 [[DEBUFF]], [[DMG_MAGIC]]. \n 중앙에 맞으면 큰 [[DMG_MAGIC]].",

          "E는 씨앗을 굴려 적 또는 지형에 부딪힐 때까지 굴러감. \n 적중하면 [[AOE]] Q의 [[BUFF_STACK]], P의 [[DEBUFF]], [[DMG_MAGIC]].",

          "R은 P의 [[DEBUFF]]가 걸려있는 대상에게 졸음 시전. \n 졸음은 [[SLOW]]와 [[SLEEP]]에 걸리게 만듬. \n 피해를 받아 깨어나면 추가 [[DMG_MAGIC]].",
        ],

        en: [
          "P inflicts [[DEBUFF]] (Dream Dust) on targets hit by Q, W, or E. \n While [[DEBUFF]] lasts, it deals [[DMG_MAGIC]] over time based on max health. \n If the [[DEBUFF]]ed target is \n a champion, large monster, or epic monster, it grants [[HEAL]] over time.",

          "Q's [[PASSIVE_BONUS]] grants \n [[MS_UP]] [[BUFF_STACK]] when Q, W, E, or R hits. Max 4 stacks. \n \n On Q hit, gain Q's [[BUFF_STACK]], apply P's [[DEBUFF]], and deal [[DMG_MAGIC]]. \n Hitting the edge adds [[DMG_TRUE]].",

          "W [[DASH]]es and slams down. \n However, it cannot cross walls. \n On hit, gain Q's [[BUFF_STACK]], apply P's [[DEBUFF]], and deal [[DMG_MAGIC]]. \n Hitting the center deals large [[DMG_MAGIC]].",

          "E rolls a seed that keeps rolling until it hits an enemy or terrain. \n On hit, [[AOE]] gain Q's [[BUFF_STACK]], apply P's [[DEBUFF]], and deal [[DMG_MAGIC]].",

          "R casts drowsiness on a target with P's [[DEBUFF]]. \n Drowsiness inflicts [[SLOW]] and then [[SLEEP]]. \n Taking damage wakes them and deals additional [[DMG_MAGIC]].",
        ]

      },

      note2: {
        ko: [
        "Q의 [[MS_UP]] [[BUFF_STACK]]은 Q, W, E, R 스킬 시전당 1번만 발동. \n 한 번에 여러 명 맞혀도 1스택만 증가.",
        "W는 CC에 끊기지만, 모션에 따라 데미지가 들어가는 경우와 들어가지 않는 경우가 있음\n1. 릴리아가 지팡이를 회전할 때 CC를 맞으면\n데미지가 들어가지 않고\n2. 지팡이를 내려칠 때 CC를 맞으면\n이동은 끊기지만 데미지는 들어감."
      ],
        en: [
          "Q's [[MS_UP]] [[BUFF_STACK]] only triggers once per cast of Q, W, E, or R. \n Hitting multiple targets at once still only adds 1 stack.",
          "W is interrupted by CC, but whether damage lands depends on the motion:\n1. If CC lands while Lillia is winding up her staff,\nno damage is dealt\n2. If CC lands while she swings the staff down,\nmovement is interrupted but damage still lands."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default lillia;
