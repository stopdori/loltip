import type { ChampData } from "../interactions/types";

const mordekaiser: ChampData = {
  id: "mordekaiser",
  skills: {
    P: ["ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "AURA"],
    Q: ["Q_FLASH", "SEPARATOR", "BUFF_STACK", "P"],
    W: ["SHIELD", "SEPARATOR", "SKILL_RECAST", "HEAL"],
    E: 
    { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["MR_PEN"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["E_FLASH", "GRAB", "SEPARATOR", "BUFF_STACK", "P"] },
    ] },

    R: ["R_FLASH", "NEAR_SIGHT", "TRUE_SIGHT", "SEPARATOR", "BUFF"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND"],
    W: [],
    E: ["VISION"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P", en: "P" }, tags: ["DMG_MAGIC", "ON_HIT"] },
      { label: { ko: "P 오라", en: "P Aura" }, tags: ["ST_CONDITIONAL", "MS_UP", "DMG_MAGIC", "AURA"] },
    ] },

    Q: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "AOE", "SEPARATOR", "BUFF_STACK", "P"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "W1", en: "W1" }, tags: ["SHIELD",] },
      { label: { ko: "W2", en: "W2" }, tags: ["SKILL_RECAST", "HEAL"] },
    ] },

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "MR_PEN"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "ZONE", "GRAB", "SEPARATOR", "BUFF_STACK", "P"] },
    ] },
    
    R: ["TIMING_CAST", "NON_PROJECTILE", "SEPARATOR", "BUFF"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "앞선에서 Q, E로 각 보다가, R로 하나 납치",
          "R을 전략적으로 잘 써야함. \n 잘큰 대상을 데려가서 시간을 끌거나 \n 1:1에 취약한 대상을 데려가서 쉽게 처치하기.",
        ], en: [
          "Poke with Q and E in the frontline, then kidnap one with R.",
          "Use R strategically. \n Take a fed target to buy time for your team, \n or take a target weak in 1v1 to eliminate easily.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]에 [[ON_HIT]] [[DMG_MAGIC]]. \n 적 챔피언, 대형, 에픽 몬스터 에게 \n [[BA]], Q, E 스킬을 맞히면 [[BUFF_STACK]]. \n 3 스택 시 [[MS_UP]] 되고, \n [[DMG_MAGIC]] [[AURA]] 생성.",

          "Q는 [[AOE]] [[DMG_MAGIC]]. \n 맞은 대상 하나당 P의 [[BUFF_STACK]] 1개 \n Q는 단일 대상 명중 시 피해가 증가함",

          "W의 [[PASSIVE_BONUS]]는 받는 피해, 주는 피해를 비축. \n \n W 사용 시 비축분 만큼 [[SHIELD]] 획득. \n 지속시간 내에 [[SKILL_RECAST]]하면 \n 남아있는 [[SHIELD]]의 일부만큼 [[HEAL]].",

          "E의 [[PASSIVE_BONUS]]는 [[MR_PEN]] 획득. \n \n E는 [[ZONE]] [[DMG_MAGIC]] [[GRAB]]. \n 맞은 대상 하나당 P의 [[BUFF_STACK]] 1개 ",

          "R은 상대방 하나를 지정해서 \n 격리된 공간으로 초대해서 7초간 1:1을 함. \n \n 이때, 상대의 능력치를 10% 훔침. \n (주문력, 공격력, 공속, 방어력, 마저, 체력, 크기) \n 즉, 상대는 10% 약해지고 모데는 10% 강해짐. \n \n 격리된 공간에서 적이 죽으면 (직접 처치 아니어도 됨) \n 대상이 부활할 때까지 훔친 능력치 유지.",
        ],

        en: [
          "P deals [[ON_HIT]] [[DMG_MAGIC]] on [[BA]]. \n Hitting enemy champions, large, or epic monsters \n with [[BA]], Q, or E applies [[BUFF_STACK]]. \n At 3 stacks, gain [[MS_UP]] and \n generate a [[DMG_MAGIC]] [[AURA]].",

          "Q deals [[AOE]] [[DMG_MAGIC]]. \n Each target hit grants 1 [[BUFF_STACK]] for P. \n Damage increases when hitting a single target.",

          "W's [[PASSIVE_BONUS]] stores incoming and outgoing damage. \n \n Activating W grants a [[SHIELD]] equal to stored amount. \n [[SKILL_RECAST]]ing within duration \n [[HEAL]]s for a portion of remaining [[SHIELD]].",

          "E's [[PASSIVE_BONUS]] grants [[MR_PEN]]. \n \n E is a [[ZONE]] [[DMG_MAGIC]] [[GRAB]]. \n Each target hit grants 1 [[BUFF_STACK]] for P.",

          "R targets one enemy and \n invites them to an isolated realm for a 7-second 1v1. \n \n During this time, steals 10% of the target's stats. \n (AP, AD, attack speed, armor, MR, HP, size) \n The target becomes 10% weaker, Mordekaiser becomes 10% stronger. \n \n If the enemy dies in the realm (doesn't have to be a direct kill), \n stolen stats are retained until the target revives.",
        ]

      },

      note2: {
        ko: [
        "R의 죽음의 세계는 \n 모데카이저와 대상의 중간지점을 중심으로 펼쳐짐.",
        "R을 시전하는 [[TIMING_CAST]] 도중 \n 대상과의 거리가 모데의 이 세계 크기보다 멀어지면,\nR 시전이 취소되고 쿨타임을 소모하지 않음.", 
        "R을 시전하는 [[TIMING_CAST]] 도중 \n 대상이 [[STEALTH]]류로 숨어도 \n R의 [[TRUE_SIGHT]]로 모습이 보이고 이세계로 이동.", 
        "R로 다른세계로 이동했을 때 \n 밖에서 상대 미니언이 죽으면 경험치가 들어오지 않음.", 
        "R의 디테일한 판정은 챔피언별로 상호작용 박스에 정리."
      ],
        en: [
          "The Death Realm from R \n is centered on the midpoint between Mordekaiser and the target.",
          "If during [[TIMING_CAST]] of R \n the target moves farther than the Death Realm's range,\nR is cancelled without consuming cooldown.",
          "Even if the target uses [[STEALTH]] \n during R's [[TIMING_CAST]], \n R's [[TRUE_SIGHT]] reveals them and they are pulled into the realm.",
          "While in the Death Realm, \n enemy minions that die outside do not grant experience.",
          "Detailed R interactions are organized in the champion-specific interaction boxes.",
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

export default mordekaiser;
