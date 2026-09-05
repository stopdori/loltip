import type { ChampData } from "../interactions/types"; 

const jarvaniv: ChampData = { 
  id: "jarvaniv", 
  skills: { 
    P: [], 
    Q: ["Q_FLASH", "AR_SHRED", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE", "WALL_HOP", "CC_BUFFER"], 
    W: ["SHIELD", "SLOW"], 
    E: ["AS_UP"], 
    R: ["R_FLASH", "TERRAIN", "WALL_HOP", "UNSTOPPABLE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"], 
  }, 

  vision: { 
    P: [], 
    Q: [], 
    W: [], 
    E: [], 
    R: [], 
  }, 

  gimmick: { 
    P: ["ST_CONDITIONAL", "DMG_PHYSICAL", "ON_HIT"],

    Q: { phases: [ 
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "AOE", "AR_SHRED"] }, 
      { label: { ko: "EQ 준비단계", en: "EQ Wind-up" }, tags: ["CC_BUFFER"] }, 
      { label: { ko: "EQ 돌진단계", en: "EQ Dash"    }, tags: ["ST_CONDITIONAL", "DASH", "WALL_HOP", "AIRBORNE"] }, 
    ] }, 

    W: ["AOE", "SLOW"], 
    E: ["DMG_MAGIC", "ZONE", "BUFF"], 

    R: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "AOE", "SKILL_RECAST", "UNSTOPPABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"], 
  }, 

  notes: {
    skill: {
      note3: { 
        ko: [
          "별명은 미드갱의 악마 \n 그만큼 뚜벅이 미드를 잘 잡음.", "EQ R 또는 [[R_FLASH]]로 기습 이니시가 정말 강함.", "R로 들어가서 상대를 가두고 \n W로 [[SHIELD]]와 [[SLOW]]를 걸고 EQ로 빠져나와서 \n [[BA]] 챔피언당 한 대씩"
        ], en: [
          "Nicknamed the Demon of Mid Ganks — \n lives up to it by easily catching immobile mid laners.",
          "EQ→R or [[R_FLASH]] ambush initiations are incredibly powerful.",
          "Dive in with R to trap enemies, \n apply [[SHIELD]] and [[SLOW]] with W, escape with EQ, \n then [[BA]] each champion once.",
        ] },
      note1: {

        ko: [

          "P는 [[BA]]에 챔피언 현재체력 % [[DMG_PHYSICAL]] \n 첫 한 대씩 적용. \n 챔피언 [[ON_TARGET_CD]].",

          "Q는 [[AR_SHRED]]. \n E(깃발)에 맞히면 [[DASH]]하여 경로 [[AIRBORNE]].",

          "W는 [[SHIELD]]와 [[AOE]] [[SLOW]]. \n [[AOE]]에 닿은 적 챔피언 하나당 [[SHIELD]] 추가.",

          "E의 [[PASSIVE_BONUS]]는 [[AS_UP]].",

          "E는 깃발을 던지고 상대가 맞으면 [[DMG_MAGIC]]. \n [[AOE]] [[BUFF]]로 자르반과 아군의 [[AS_UP]].",

          "R은 [[UNSTOPPABLE]] [[DASH]]을 해서 [[AOE]] [[DMG_PHYSICAL]]. \n 주변에 [[TERRAIN]]을 생성해서 길을 막음. \n R을 [[SKILL_RECAST]] 해서 [[TERRAIN]] 해제 가능.",

        ],

        en: [
          "P: Each [[BA]] deals % of the target's current HP as [[DMG_PHYSICAL]]. \n Applies once per champion. \n Each champion has its own individual [[ON_TARGET_CD]].",

          "Q: Applies [[AR_SHRED]]. \n Hitting the E (flag) causes Jarvan to [[DASH]] forward, [[AIRBORNE]]ing enemies along the path.",

          "W: Grants [[SHIELD]] and [[AOE]] [[SLOW]]. \n Each enemy champion hit increases the [[SHIELD]] amount.",

          "E's [[PASSIVE_BONUS]]: [[AS_UP]].",

          "E: Throws a flag that deals [[DMG_MAGIC]] on hit. \n Creates an [[AOE]] [[BUFF]] zone granting [[AS_UP]] to Jarvan and nearby allies.",

          "R: [[UNSTOPPABLE]] [[DASH]] dealing [[AOE]] [[DMG_PHYSICAL]]. \n Creates [[TERRAIN]] around the target to block escape. \n [[SKILL_RECAST]] R to remove the [[TERRAIN]].",
        ]

      },

      note2: {
      ko: [ 
  
        "EQ(깃창)은 2단계로 나뉨 준비/돌진. \n 준비단계에서 자르반이 맞은 CC는 유효 하지만 \n 돌진단계가 발동되어 앞으로 이동하는 것. \n 돌진단계에는 CC 저항력 없음. \n 단, 정말 짧은시간 준비단계가 있음.", 
        "EQ로 [[DASH]] 하는 도중에 점멸을 사용하면 \n 점멸 위치에 [[AIRBORNE]] 적용.",
        "R은 내려찍기 전에 상대가 \n [[DASH]], [[BLINK]] 점멸을 사용하면 피할 수도 있음.", 
        "R은 설명에 [[UNSTOPPABLE]]가 없지만 \n [[DASH]] 중 체력바 위에 [[UNSTOPPABLE]]가 생김. \n 도착하면 끝.", 
        "R1을 사용했을 때 자르반이 CC에 걸리면 \n R2로 [[TERRAIN]]을 해제할 수 없음. \n 단, [[SLOW]], [[ROOT]] 제외." 
  
    ], 
  
      en: [
        "EQ (Flag-Toss Combo) has two phases: wind-up / dash.\nCC that hits Jarvan IV during the wind-up phase applies, but the dash phase still activates and he moves forward.\nThere is no CC resistance during the dash phase.\nNote: the wind-up phase is very brief.",
        "Using Flash during the EQ [[DASH]] \n applies [[AIRBORNE]] at the Flash destination.",
        "If the target uses [[DASH]], [[BLINK]], or Flash while Jarvan is mid-air (R), they can escape.",
        "R is not labeled [[UNSTOPPABLE]] in its description, \n but the [[UNSTOPPABLE]] icon appears above the health bar during the [[DASH]]. \n It ends upon landing.",
        "If Jarvan IV is hit by CC after casting R1, \n he cannot use R2 to remove the [[TERRAIN]]. \n Exception: [[SLOW]] and [[ROOT]] do not prevent this.",
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

}; 

export default jarvaniv; 
