import type { ChampData } from "../interactions/types";

const ekko: ChampData = {
  id: "ekko",
  skills: {
    P: ["MS_UP",],
    Q: ["Q_FLASH",],
    W: ["W_FLASH", "SEPARATOR", "ST_DELAYED", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SHIELD", "STUN"],

    E: { phases: [
      { label: { ko: "구르기단계", en: "Roll"   }, tags: ["AA_RESET", "DASH", "WALL_HOP"] },
      { label: { ko: "경직단계",   en: "Buffer" }, tags: ["BLINK", "WALL_HOP", "CC_BUFFER"] },
      { label: { ko: "순간이동단계", en: "Blink" }, tags: ["E_FLASH", ] },
    ] },

    R: ["UNTARGETABLE", "TOWER_DODGE", "HEAL", "BLINK", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DEBUFF_INTERACT", "BA", "Q", "E", "R", "SEPARATOR", "PROC", "DMG_MAGIC"],

    Q: { phases: [
      { label: { ko: "가는 Q",        en: "Outgoing Q"      }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "DEBUFF_STACK"] },
      { label: { ko: "가는 Q 역장 모드", en: "Accelerated Mode" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "PIERCE", "AOE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DEBUFF_STACK"] },
      { label: { ko: "오는 Q",        en: "Return Q"        }, tags: ["ST_DELAYED", "DMG_MAGIC", "PROJECTILE", "PIERCE", "HOMING", "DEBUFF_STACK"] },
    ] },

    W: { phases: [
      { label: { ko: "패시브",   en: "Passive"      }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "액티브",   en: "Active"       }, tags: ["TIMING_CAST", "NON_PROJECTILE", "ZONE"] },
      { label: { ko: "시간 구체", en: "Time Sphere"  }, tags: ["ST_DELAYED", "ZONE", "SLOW"] },
      { label: { ko: "구체 폭발", en: "Sphere Detonates" }, tags: ["ST_CONDITIONAL", "ZONE", "STUN"] },
    ] },

    E: { phases: [
      { label: { ko: "구르기단계",   en: "Roll"   }, tags: ["AA_RESET", "DASH"] },
      { label: { ko: "경직단계",     en: "Buffer" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "순간이동단계", en: "Blink"  }, tags: ["HOMING", "BLINK", "DMG_MAGIC", "ON_HIT", "DEBUFF_STACK"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "ST_DELAYED", "AOE", "BLINK", "DEBUFF_STACK"],
  },

     notes: {
    skill: {
      note3: {
        ko: [
          "소규모 교전이 상당히 좋음.", "상대 딜러 라인에 W를 깔고 돌파해서 암살하거나 \n 진영을 헤집어 놓다가 R로 탈출하기."
        ], en: [
          "Very strong in small skirmishes.",
          "Place W in the enemy carry's path, dive in to assassinate, \n or disrupt their formation then escape with R.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]], 스킬들로 [[DEBUFF]]를 걸고. \n 3스택 일 때 효과 발동. \n 챔피언이면 [[MS_UP]] 추가. \n 대상당 5초 내부 쿨타임.",
          "Q는 [[SLOW]]. \n Q를 1번 시전했을 때 [[DEBUFF]]는 최대 2스택",
          "W는 지정된 장소에 시간 구체를 날리고 \n 도착하면 [[ZONE]]이 되어 광역 [[SLOW]]. \n 이때 에코가 [[ZONE]]에 들어가면 [[SHIELD]]와 범위 [[STUN]].",
          "E로 [[DASH]]하고 [[BA]] [[RANGE_UP]] \n [[BA]]로 공격하면 [[BLINK]] 공격하고 [[DEBUFF]] 1스택. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",
          "R은 4초전 지점으로 [[BLINK]] \n 이때 [[UNTARGETABLE]], [[TOWER_DODGE]], 잃은체력 비례 [[HEAL]]. \n 도착한 곳에 광역 [[DMG_MAGIC]]와 [[DEBUFF]] 1스택.",
        ],

        en: [
          "P's [[DEBUFF]] is applied by [[BA]] and skills. \n Effect triggers at 3 stacks. \n Against champions, also grants [[MS_UP]]. \n 5s internal cooldown per target.",
          "Q applies [[SLOW]]. \n A single Q cast can apply up to 2 [[DEBUFF]] stacks.",
          "W fires a time sphere to a target location. \n On arrival, it becomes a [[ZONE]] that applies AoE [[SLOW]]. \n If Ekko enters the [[ZONE]], he gains [[SHIELD]] and deals AoE [[STUN]].",
          "E [[DASH]]es and extends [[BA]] [[RANGE_UP]]. \n Attacking with [[BA]] triggers a [[BLINK]] attack and applies 1 [[DEBUFF]] stack. \n [[CC_BUFFER]] allows some CC to be ignored.",
          "R [[BLINK]]s Ekko to his position 4 seconds ago. \n While blinking: [[UNTARGETABLE]], [[TOWER_DODGE]], and [[HEAL]] based on missing HP. \n On arrival, deals AoE [[DMG_MAGIC]] and applies 1 [[DEBUFF]] stack.",
        ]

      },

      note2: {
        ko: [
        "Q의 [[SLOW]]는 가는 Q의 역장모드에 적용. \n 역장모드는 챔피언에 적중하거나 일정거리가 지나면 발동.",
        "E 스킬은 3단계로 나뉨 구르기/경직/순간이동.\n경직 단계에서 에코가 맞은 CC는 유효 하지만\n[[BLINK]] 단계가 발동되어 이동하고 공격하는 것.\n[[BLINK]] 단계에는 CC 저항력 없음.\n[[BLINK]] 했을 때 CC의 지속시간이 남아있다면 \n CC 효과 유효.", "E의 경직 단계의 경직 시간은 공격속도와 무관하게 일정함.",
        "W는 지속[[SLOW]].",
        "R을 6레벨에 배우지 않고 있다가 필요할 때 배우면 \n 돌아가는 위치를 숨길 수 있음."
      ],
        en: [
          "Q's [[SLOW]] applies in the accelerated mode of the outgoing Q. \n Accelerated mode triggers when Q hits a champion or travels past a certain distance.",
          "E has three phases: roll / buffer / blink.\nCC applied during the buffer phase is valid, but the blink still triggers and Ekko moves and attacks.\nThere is no CC immunity during the blink phase.\nIf CC duration remains when Ekko blinks, the CC effect still applies.",
          "The buffer duration of E's buffer phase is fixed and unaffected by attack speed.",
          "W applies persistent [[SLOW]].",
          "Delaying R until needed (instead of learning it at level 6) \n can hide the return location from enemies.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 80,
    16: 50,
  },

};

export default ekko;
