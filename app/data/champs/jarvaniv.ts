import type { ChampData } from "../interactions/types"; 

const jarvaniv: ChampData = { 
  id: "jarvaniv", 
  skills: { 
    P: ["ON_TARGET_CD"], 
    Q: { phases: [ 
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "AR_SHRED"] }, 
      { label: { ko: "EQ(깃창) 돌진", en: "EQ (Flag-Spear) Dash" }, tags: ["Q_FLASH", "AIRBORNE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "CC_BUFFER"] }, 
    ] }, 

    W: ["SHIELD", "SLOW"], 

    E: { phases: [ 
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["AS_UP"] }, 
      { label: { ko: "E 깃발", en: "E Flag" }, tags: ["AS_UP", "SEPARATOR", "OF_ALLY", "AS_UP", "SEPARATOR", "ALLY_TP"] }, 
    ] },

    R: ["R_FLASH", "UNSTOPPABLE", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "TERRAIN", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"], 
  }, 

  vision: { 
    P: [], 
    Q: [], 
    W: [], 
    E: [], 
    R: [], 
  }, 

  gimmick: { 
    P: ["DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "ON_TARGET_CD"],

    Q: { phases: [ 
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "AOE", "AR_SHRED"] }, 
      { label: { ko: "EQ 준비 단계", en: "EQ Wind-up Phase" }, tags: ["CC_BUFFER"] }, 
      { label: { ko: "EQ 돌진 단계", en: "EQ Dash Phase" }, tags: ["DASH", "WALL_HOP", "AIRBORNE"] }, 
    ] }, 

    W: ["AOE", "SLOW", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "ADDITIONAL", "SHIELD"], 

    E: { phases: [ 
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["AS_UP"] }, 
      { label: { ko: "E 깃발", en: "E Flag" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "ZONE"] }, 
      { label: { ko: "E 버프", en: "E Buff" }, tags: ["AS_UP", "SEPARATOR", "OF_ALLY", "AS_UP"] }, 
    ] },

    R: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "AOE", "SEPARATOR", "TERRAIN", "RECAST_CANCEL", "SEPARATOR_NEWLINE", "SEPARATOR", "UNSTOPPABLE", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"], 
  }, 

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [

          "P는 [[BA]]에 챔피언 현재체력 % [[DMG_PHYSICAL]]. \n 챔피언 [[ON_TARGET_CD]]. \n \n",

          "Q는 전방에 [[AOE]] 창 찌르기. \n [[DMG_PHYSICAL]]와 [[AR_SHRED]]. \n E(깃발)에 맞히면 [[DASH]]하여 경로 대상 [[AIRBORNE]]. \n \n",

          "W는 [[AOE]] [[SLOW]]와 [[SHIELD]]. \n  [[ON_CHAMP_HIT]] [[PER_HIT]] [[SELF_MAXHP_SCALE]] 비례 [[SHIELD]] 추가. \n \n",

          "E의 [[PASSIVE_BONUS]]는 [[AS_UP]].", 
          "E는 깃발을 던지고 맞은 적들은 [[DMG_MAGIC]]. \n 깃발은 [[AOE]] [[AS_UP]]. \n [[AOE]]가 상당히 넓고 \n 자르반과 아군에게 적용. \n \n",

          "R은 [[UNSTOPPABLE]] [[DASH]]. \n [[AOE]] [[DMG_PHYSICAL]]와 원형 [[TERRAIN]] 생성. \n R로 [[RECAST_CANCEL]] 가능.",

        ],

        en: ["P adds [[DMG_PHYSICAL]] equal to a % of the champion's current health to [[BA]]s. \n Per-champion [[ON_TARGET_CD]]. \n \n",
          "Q is a forward [[AOE]] spear thrust. \n [[DMG_PHYSICAL]] and [[AR_SHRED]]. \n If it hits E (flag), Jarvan [[DASH]]es and knocks targets along the path [[AIRBORNE]]. \n \n",
          "W grants [[AOE]] [[SLOW]] and a [[SHIELD]]. \n  [[ON_CHAMP_HIT]] adds a [[SHIELD]] [[PER_HIT]] based on [[SELF_MAXHP_SCALE]]. \n \n",
          "E's [[PASSIVE_BONUS]] grants [[AS_UP]].",
          "E throws a flag, and enemies hit take [[DMG_MAGIC]]. \n The flag grants [[AOE]] [[AS_UP]]. \n The [[AOE]] is quite wide \n and applies to Jarvan and allies. \n \n",
          "R is an [[UNSTOPPABLE]] [[DASH]]. \n Deals [[AOE]] [[DMG_PHYSICAL]] and creates a circular [[TERRAIN]]. \n Can [[RECAST_CANCEL]] with R."
        ]

      },

      note2: {
      ko: [ 
  
        "EQ(깃창)은 2단계로 나뉨 준비/돌진. \n 준비 단계에서 자르반이 맞은 CC는 유효 하지만 \n 돌진 단계가 발동되어 앞으로 이동하는 것. \n 돌진 단계에는 CC 저항력 없음. \n 단, 정말 짧은시간 준비 단계가 있음.", 

        "EQ로 [[DASH]] 하는 도중에 [[SPELL_FLASH]]을 사용하면 \n 점멸 위치에 [[AIRBORNE]] 적용. (데미지는 없음)",

        "R은 내려찍기 전에 상대가 \n [[DASH]], [[BLINK]], [[SPELL_FLASH]]을 사용하면 피할 수도 있음.", 

        "R은 설명에 [[UNSTOPPABLE]]가 없지만 \n [[DASH]] 중 체력바 위에 [[UNSTOPPABLE]] 상태가 생김. \n 도착하면 종료.", 

        "R1의 [[TERRAIN]]이 생성되어 있을 때 \n 자르반이 CC에 걸리면 \n R2로 [[RECAST_CANCEL]] 불가능. \n 단, [[SLOW]], [[ROOT]] 제외." 
  
    ], 
  
      en: ["EQ (flag-spear) has two phases: wind-up / dash. \n CC that hits Jarvan IV during the wind-up phase applies, but \n the dash phase still activates and he moves forward. \n There is no CC resistance during the dash phase. \n However, the wind-up phase is very brief.",
        "Using [[SPELL_FLASH]] during the EQ [[DASH]] \n applies [[AIRBORNE]] at the Flash destination. (No damage)",
        "Before R slams down, if the target \n uses a [[DASH]], [[BLINK]], or [[SPELL_FLASH]], they may dodge it.",
        "R is not labeled [[UNSTOPPABLE]] in its description, \n but the [[UNSTOPPABLE]] icon appears above the health bar during the [[DASH]]. \n It ends upon landing.",
        "While R1's [[TERRAIN]] is up, \n if Jarvan IV is hit by CC, \n he cannot [[RECAST_CANCEL]] with R2. \n Except for [[SLOW]] and [[ROOT]]."
      ]
      },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120, 
    11: 105, 
    16: 90,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_jarvanivmartialcadence_tooltip(인게임 원문)을
  // 뼈대로 씀. 수치는 공식 위키(V25.19)로 채움(CDragon 게임 데이터
  // jarvaniv.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "자르반 4세의 [[BA]]가 [[TARGET_CURRENT_HP_SCALE]]의 8%에 해당하는 [[DMG_PHYSICAL]]를 추가로 입힙니다. \n \n [[ON_TARGET_CD]]이 따로 적용되어 6/5/4/3초([[LEVEL_SCALE]] 비례)마다 한 번씩 효과가 발휘됩니다.",
      en: "Jarvan IV's [[BA]]s deal additional [[DMG_PHYSICAL]] equal to 8% of [[TARGET_CURRENT_HP_SCALE]]. \n \n With a separate [[ON_TARGET_CD]], the effect triggers once every 6/5/4/3 seconds (based on [[LEVEL_SCALE]]).",
    },
    Q: {
      ko: "자르반 4세가 창을 길게 늘려 90/130/170/210/250(+145% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 3초 동안 방어력을 10/14/18/22/26% 감소시킵니다. ([[AR_SHRED]]) \n \n 창이 데마시아의 깃발(E)에 맞으면 자르반 4세가 깃발을 향해 [[DASH]]하며 경로에 있는 적들을 0.75초 동안 [[AIRBORNE]]시킵니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Jarvan IV extends his lance, dealing 90/130/170/210/250 (+145% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and reducing armor by 10/14/18/22/26% for 3 seconds. ([[AR_SHRED]]) \n \n If the lance hits Demacian Standard (E), Jarvan IV [[DASH]]es to the flag, knocking enemies in his path [[AIRBORNE]] for 0.75 seconds. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "자르반 4세가 방패를 소환해 2초 동안 근처 적들을 15/20/25/30/35% [[SLOW]]시키고, \n 60/80/100/120/140(+70% 추가 [[AD_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 얻으며, \n 적중한 적 챔피언 하나당 [[SELF_MAXHP_SCALE]] 비례의 1.3%의 추가 [[SHIELD]]를 얻습니다. \n \n 9초의 [[COOLDOWN]].",
      en: "Jarvan IV summons a shield, [[SLOW]]ing nearby enemies by 15/20/25/30/35% for 2 seconds, \n gaining a [[SHIELD]] that absorbs 60/80/100/120/140 (+70% bonus [[AD_SCALE]]) damage, \n and gaining an additional [[SHIELD]] of 1.3% of [[SELF_MAXHP_SCALE]] per enemy champion hit. \n \n 9 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: 자르반 4세의 [[AS_SCALE]]가 20/22.5/25/27.5/30% 상승합니다. \n \n 사용 시: 자르반 4세가 지면에 깃발을 던져 80/120/160/200/240(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 8초 동안 깃발 근처 아군의 [[AS_SCALE]]를 20/22.5/25/27.5/30% 상승시킵니다. \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Jarvan IV's [[AS_SCALE]] increases by 20/22.5/25/27.5/30%. \n \n Active: Jarvan IV throws a flag into the ground, dealing 80/120/160/200/240 (+80% [[AP_SCALE]]) [[DMG_MAGIC]], \n and increases the [[AS_SCALE]] of nearby allies by 20/22.5/25/27.5/30% for 8 seconds. \n \n 12/11.5/11/10.5/10 second [[COOLDOWN]].",
    },
    R: {
      ko: "자르반 4세가 적 챔피언을 향해 용감하게 뛰어들어([[UNSTOPPABLE]] [[DASH]]) 대상과 근처 적들에게 200/325/450(+180% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 3.5초 동안 지나갈 수 없는 [[TERRAIN]]으로 둘러쌉니다. \n \n R [[RECAST_CANCEL]]로 벽을 무너뜨릴 수 있습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Jarvan IV heroically leaps at an enemy champion ([[UNSTOPPABLE]] [[DASH]]), dealing 200/325/450 (+180% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the target and nearby enemies, \n and surrounds them with impassable [[TERRAIN]] for 3.5 seconds. \n \n R [[RECAST_CANCEL]] collapses the walls. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

}; 

export default jarvaniv; 
