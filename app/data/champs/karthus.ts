import type { ChampData } from "../interactions/types";

const karthus: ChampData = {
  id: "karthus",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "MR_SHRED", "SLOW"],
    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["ON_KILL", "MANA_RESTORE"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["AURA"] },
    ] },
    
    R: ["GLOBAL"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: ["VISION"],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["TIMING_CAST", "ZONE", "SEPARATOR", "ST_DELAYED", "DETONATE", "DMG_MAGIC"],
    W: ["TIMING_CAST", "ZONE", "MR_SHRED", "SLOW"],
    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ON_KILL", "MANA_RESTORE"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["SKILL_TOGGLE", "AURA", "DOT", "DMG_MAGIC"] },
    ] },
    
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "GLOBAL", "LOCKED"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 카서스가 죽으면 \n 7초동안 죽음을 유예하고 \n 마나소모 없이 스킬을 사용. \n \n",

          "Q는 [[ZONE]]을 생성. \n 잠시 뒤 [[DETONATE]] 하여 [[AOE]] [[DMG_MAGIC]]. \n 단일 대상 적중 시 [[DMG_MAGIC]] 2배. \n \n",
          
          "W는 가로로 긴 [[ZONE]] 생성. \n 닿은 적은 [[SLOW]]와 [[MR_SHRED]]. \n \n",

          "E의 [[PASSIVE_BONUS]]는 유닛을 처치하면 [[MANA_RESTORE]].", 
          "E는 [[AURA]] [[DOT]] [[DMG_MAGIC]]. \n \n",

          "R(진혼곡)은 모든 적 챔피언 대상 [[GLOBAL]] [[DMG_MAGIC]].",
        ],

        en: ["When Karthus dies, P \n delays his death for 7 seconds \n and lets him cast skills without mana cost. \n \n",
          "Q creates a [[ZONE]]. \n Shortly after, it [[DETONATE]]s for [[AOE]] [[DMG_MAGIC]]. \n Hitting a single target deals double [[DMG_MAGIC]]. \n \n",
          "W creates a long horizontal [[ZONE]]. \n Enemies touching it get [[SLOW]] and [[MR_SHRED]]. \n \n",
          "E's [[PASSIVE_BONUS]] grants [[MANA_RESTORE]] on unit kill.",
          "E deals [[AURA]] [[DOT]] [[DMG_MAGIC]]. \n \n",
          "R (Requiem) deals [[GLOBAL]] [[DMG_MAGIC]] to all enemy champions."
        ]

      },

      note2: {
        ko: [      
        "카서스가 죽었을 때 P로 죽음 유예 시 \n 데스 타이머는 흐르는것으로 판정.", 
        "R은 [[SKILL_CHANNEL]] 도중에 움직일 수 없음. \n 단, 카서스가 [[SPELL_FLASH]]을 사용하면 취소. \n 단, 카서스가 방해받거나, 죽으면 취소.",
        "R은 대상이 맵에서 사라지거나 [[UNTARGETABLE]] 상태 \n 또는 가엔, 존야 처럼[[STASIS]] 상태 일때 맞지 않음.", 
        "R은 샤코, 르블랑 니코처럼 \n 챔피언 [[CLONE]]에도 궁이 떨어짐.", 
      ],
        en: ["When Karthus delays his death with P, \n the death timer is still counting.",
          "Karthus cannot move while R is [[SKILL_CHANNEL]]ing. \n However, it's canceled if Karthus uses [[SPELL_FLASH]]. \n It's also canceled if Karthus is interrupted or dies.",
          "R doesn't hit targets that vanish from the map, are [[UNTARGETABLE]], \n or are in [[STASIS]] like Guardian Angel or Zhonya's.",
          "R also hits champion [[CLONE]]s \n like Shaco, LeBlanc, and Neeko."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 200,
    11: 180,
    16: 160,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_karthusdeathdefied_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.03)로 채움(CDragon 게임 데이터 karthus.bin.json과 일치 확인).
  // Q 쿨타임은 DDragon cooldownBurn이 0이라 위키 값(1초) 사용.
  skillTooltip: {
    P: {
      ko: "카서스는 죽은 뒤에 7초 동안 마나를 소비하지 않고 스킬을 사용할 수 있습니다.",
      en: "After dying, Karthus can cast skills without spending mana for 7 seconds.",
    },
    Q: {
      ko: "카서스가 마법으로 [[DETONATE]]을 일으켜 40/59/78/97/116(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 하나의 적만 맞힐 경우 80/118/156/194/232(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 1초의 [[COOLDOWN]].",
      en: "Karthus causes a magical [[DETONATE]], dealing 40/59/78/97/116 (+35% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n If it hits only one enemy, it deals 80/118/156/194/232 (+70% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 1 second [[COOLDOWN]].",
    },
    W: {
      ko: "카서스가 5초 동안 유지되는 벽을 생성합니다. ([[ZONE]]) \n \n 벽을 지나는 적은 5초간 마법 저항력이 25% 감소하고, ([[MR_SHRED]]) 40/50/60/70/80% [[SLOW]]됩니다. \n 둔화 효과는 시간이 지나면서 점차 사라집니다. \n \n 15초의 [[COOLDOWN]].",
      en: "Karthus creates a wall that lasts 5 seconds. ([[ZONE]]) \n \n Enemies passing through the wall have their magic resist reduced by 25% for 5 seconds, ([[MR_SHRED]]) and are [[SLOW]]ed by 40/50/60/70/80%. \n The slow decays over time. \n \n 15 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: 카서스가 적 유닛 [[ON_KILL]] 마나를 10/20/30/40/50 회복합니다. ([[MANA_RESTORE]]) \n \n E [[SKILL_TOGGLE]]: 카서스가 죽음의 영역을 생성해([[AURA]]) 근처 적들에게 초당 30/50/70/90/110(+20% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 0.5초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: When Karthus gets an enemy unit [[ON_KILL]], he restores 10/20/30/40/50 mana. ([[MANA_RESTORE]]) \n \n E [[SKILL_TOGGLE]]: Karthus creates a field of death ([[AURA]]), dealing 30/50/70/90/110 (+20% [[AP_SCALE]]) [[DMG_MAGIC]] per second to nearby enemies. \n \n 0.5 second [[COOLDOWN]].",
    },
    R: {
      ko: "카서스가 3초 동안 정신 집중을 하여([[SKILL_CHANNEL]]) 거리와 관계없이([[GLOBAL]]) 모든 적 챔피언에게 200/350/500(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Karthus channels for 3 seconds ([[SKILL_CHANNEL]]), dealing 200/350/500 (+70% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemy champions regardless of distance ([[GLOBAL]]). \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default karthus;
