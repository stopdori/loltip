import type { ChampData } from "../interactions/types";

const masteryi: ChampData = {
  id: "masteryi",
  skills: {
    P: [],
    Q: ["Q_FLASH", "UNTARGETABLE", "TOWER_DODGE", "WALL_HOP"],
    W: ["DMG_REDUCE", "HEAL", "AA_RESET"],
    E: [],
    R: ["AS_UP", "MS_UP", "SLOW_IMMUNE", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PROC", "ON_HIT"],
    Q: ["DMG_PHYSICAL", "TARGETED", "CHAIN", "BLINK"],
    W: ["SKILL_CHANNEL"],
    E: ["BUFF_FORM", "DMG_TRUE", "ON_HIT"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "한타에서 마음속으로 3초를 세고 진입하자.",
        ], en: [
          "In team fights, count to 3 in your head before engaging.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]에 [[BUFF_STACK]]. \n 3스택 시 다음 [[BA]]가 두 번 공격. \n [[BA]]1은 100%, [[BA]]2는 50% [[DMG_PHYSICAL]]. \n [[ON_HIT]], [[CRIT]] 모두 적용 가능.",
          
          "Q는 [[UNTARGETABLE]] 상태가 되어 4회 [[CHAIN]] [[DMG_PHYSICAL]]. \n 같은 대상 공격 시 피해량 감소. \n [[BA]]는 1초 [[CDR]]. \n  [[TOWER_DODGE]] 가능. \n 대상의 주변에 나오는 방향을 지정할 수 있음.",

          "W는 [[SKILL_CHANNEL]] 중 [[DMG_REDUCE]]. \n 처음 0.5초 동안은 강한 [[DMG_REDUCE]]. \n 잃은 체력 비례 지속 [[HEAL]]. \n 1초마다 P의 [[BUFF_STACK]]. \n W를 해제하면 [[AA_RESET]] 가능.",

          "E는 사용 시 [[BUFF]]하여 [[ON_HIT]]에 [[DMG_TRUE]]. \n E의 지속시간은 Q, W 사용 중에 줄지 않음.",

          "R의 [[PASSIVE_BONUS]]는 킬 관여 시 기본 스킬 [[CDR]]. \n \n R은 [[AS_UP]], [[MS_UP]], [[SLOW_IMMUNE]]. \n R의 지속시간은 Q, W 사용 중에 줄지 않음. \n 킬 관여 시 지속시간 7초 증가.",
        ],

        en: [
          "P [[BUFF_STACK]]s on [[BA]]. \n At 3 stacks, the next [[BA]] strikes twice. \n [[BA]]1 deals 100% and [[BA]]2 deals 50% [[DMG_PHYSICAL]]. \n Both [[ON_HIT]] and [[CRIT]] can apply.",

          "Q becomes [[UNTARGETABLE]] and deals [[CHAIN]] [[DMG_PHYSICAL]] 4 times. \n Damage is reduced when hitting the same target again. \n [[BA]] grants 1s [[CDR]]. \n [[TOWER_DODGE]] is possible. \n You can choose the direction you reappear around the target.",

          "W grants [[DMG_REDUCE]] while [[SKILL_CHANNEL]]ing. \n Strong [[DMG_REDUCE]] during the first 0.5 seconds. \n Continuous [[HEAL]] based on missing health. \n [[BUFF_STACK]]s P every 1 second. \n Releasing W can trigger [[AA_RESET]].",

          "Using E grants a [[BUFF]] that adds [[DMG_TRUE]] on [[ON_HIT]]. \n E's duration does not decrease while using Q or W.",

          "R's [[PASSIVE_BONUS]] grants [[CDR]] on basic skills upon kill participation. \n \n R grants [[AS_UP]], [[MS_UP]], [[SLOW_IMMUNE]]. \n R's duration does not decrease while using Q or W. \n Kill participation extends its duration by 7 seconds.",
        ]

      },

      note2: {
        ko: [
        "P의 [[BUFF_STACK]]이 활성화된 [[BA]] 공격 시 \n Q [[CDR]] 2초.",
        "Q는 가까운 대상 우선 공격. \n 주변에 충분한 대상이 없다면 같은 대상 공격 가능. \n ",
        "Q는 [[ON_HIT]], [[CRIT]] 효과가 75% 적용 되고. \n 여러 번 맞으면 25%씩 추가 적용.",
        "W의 [[DMG_REDUCE]] 효과는 타워에 절반 적용.",
        "E를 사용하고 Q를 사용하면 E가 적용됨.",
        "R은 킬관여 하면\n쿨타임 70%감소, 지속시간 7초 증가.",
      ],
        en: [
          "When a [[BA]] attack triggers P's [[BUFF_STACK]], \n Q gets 2s [[CDR]].",
          "Q prioritizes attacking the closest target. \n If there aren't enough nearby targets, it can hit the same target again.",
          "Q applies [[ON_HIT]] and [[CRIT]] effects at 75%. \n Getting hit multiple times applies an additional 25% each time.",
          "W's [[DMG_REDUCE]] effect is halved against towers.",
          "Using E and then Q will apply E's effect.",
          "Kill participation with R reduces its cooldown by 70% and extends its duration by 7s.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 85,
    11: 85,
    16: 85,
  },

};

export default masteryi;
