import type { ChampData } from "../interactions/types";

const nasus: ChampData = {
  id: "nasus",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["AA_RESET", "SEPARATOR", "ST_CONDITIONAL", "STACKING"],
    W: ["W_FLASH", "SLOW", "CRIPPLE"],
    E: ["E_FLASH", "AR_SHRED"],
    R: ["BUFF_FORM", "SIZE_UP", "MAX_HP_UP", "AR_MR_UP"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: ["POSITION_REVEAL"],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["LIFESTEAL"],

    Q: ["DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "STACKING"],

    W: ["TIMING_CAST", "TARGETED", "DEBUFF_STACK"],

    E: { phases: [
      { label: { ko: "E 불길", en: "E Fire" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE"] },
      { label: { ko: "E 지속피해", en: "E Zone" }, tags: ["DMG_MAGIC", "ZONE", "DOT"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "SIZE_UP", "MAX_HP_UP", "AR_MR_UP"] },
      { label: { ko: "R 범위피해", en: "R AOE" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DOT"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "앞라인에서 잘 맞아주다가 \n 공속 기반 챔프에게 W를 걸기.",
        ], en: [
          "Absorb damage at the frontline, \n then apply W to attack speed-reliant champions.",
        ] },
      note1: {

        ko: [
          "P는 [[BA]]에 [[LIFESTEAL]].",

          "Q는 다음 [[BA]] 강화. \n [[RANGE_UP]], [[DMG_PHYSICAL]] + 스택당 [[DMG_PHYSICAL]].",

          "W는 적에게 5초동안 점점 강화되는 [[SLOW]], [[CRIPPLE]]. \n [[CRIPPLE]]는 [[SLOW]] 수치의 75% ",

          "E는 [[AOE]] 최초 강한 [[DMG_MAGIC]]. \n [[ZONE]] 지속 [[DMG_MAGIC]], [[AR_SHRED]].",
          
          "R은 15초 동안 [[MAX_HP_UP]], [[AR_MR_UP]]. \n Q의 재사용 대기시간 50% 감소. \n 나서스 주변에 [[AURA]]. \n 대상의 최대 체력 비례 지속 [[DMG_MAGIC]].",
        ],

        en: [
          "P grants [[LIFESTEAL]] on [[BA]].",
          "Q empowers the next [[BA]]. \n Gains [[RANGE_UP]] and [[DMG_PHYSICAL]], plus bonus [[DMG_PHYSICAL]] per stack.",
          "W applies a gradually increasing [[SLOW]] and [[CRIPPLE]] for 5 seconds. \n [[CRIPPLE]] is 75% of the [[SLOW]] value.",
          "E deals initial strong [[AOE]] [[DMG_MAGIC]]. \n The [[ZONE]] applies ongoing [[DMG_MAGIC]] and [[AR_SHRED]].",
          "R grants [[MAX_HP_UP]] and [[AR_MR_UP]] for 15 seconds. \n Reduces Q's cooldown by 50%. \n Creates an [[AURA]] around Nasus. \n Deals ongoing [[DMG_MAGIC]] based on the target's max health.",
        ]

      },

      note2: {
        ko: [
        "Q 스택 획득 정리 \n 0 스택 - 솔방울, 수정초, 꿀열매, 유충 소환수, 억제기. \n 3 스택 - 미니언, 작은 몬스터, 타워, 와드, 소환수, 덫. \n 12 스택 - 챔피언, 대형, 에픽 몬스터. \n 넥서스는 스택 관측을 못함. 아시는분 제보 부탁.",
        "Q로 인한 룬 효과 발동으로 인한 처치는 \n Q로 처치한 걸로 간주 \n 예) 감전, 콩콩이, 어둠의 수확 등등.",
        "Q는 아이템 효과로 여러마리 동시 처치 하면 공격 대상만 적용. \n 예) 거드라 Q 막타로 둘을 잡을 때, 공격 대상만 스택 획득.",
        "R은 [[MAX_HP_UP]]여서 풀피에도 유효. \n [[GW]] 영향 받지 않음."
      ],
        en: [
          "Q stack breakdown: \n 0 stacks — Pine Sentinel, Crystal Flower, Honey Fruit, Larva Summon, Inhibitor. \n 3 stacks — Minions, small monsters, towers, wards, summons, traps. \n 12 stacks — Champions, large, and epic monsters. \n Nexus is unconfirmed — let us know if you have data.",
          "Kills triggered by rune effects procced by Q \n count as kills by Q. \n e.g. Electrocute, Liandry's, Dark Harvest, etc.",
          "If item effects triggered by Q kill multiple targets simultaneously, \n only the direct attack target grants stacks. \n e.g. When Q last-hits two targets at once, only the attack target counts.",
          "R is [[MAX_HP_UP]], so it's effective even at full HP. \n Not affected by [[GW]].",
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

export default nasus;
