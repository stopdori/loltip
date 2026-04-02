import type { ChampData } from "../interactions/types"; 

const jarvaniv: ChampData = { 
  id: "jarvaniv", 
  skills: { 
    P: [], 
    Q: ["Q_FLASH", "AR_SHRED", "AIRBORNE", "WALL_HOP", "CC_BUFFER"], 
    W: ["SHIELD", "SLOW"], 
    E: ["AS_UP"], 
    R: ["R_FLASH", "TERRAIN", "WALL_HOP", "UNSTOPPABLE"], 
  }, 

  vision: { 
    P: [], 
    Q: [], 
    W: [], 
    E: [], 
    R: [], 
  }, 

  gimmick: { 
    P: ["DMG_PHYSICAL", "ON_HIT"], 
    Q: { phases: [ 
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "AOE"] }, 
      { label: { ko: "EQ 준비단계", en: "EQ Wind-up" }, tags: ["CC_BUFFER"] }, 
      { label: { ko: "EQ 돌진단계", en: "EQ Dash"    }, tags: ["DASH"] }, 
    ] }, 
    W: ["AOE"], 
    E: ["DMG_MAGIC", "ZONE"], 
    R: ["UNSTOPPABLE", "DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "ZONE", "AOE", "SKILL_RECAST"], 
  }, 

  notes: {
    skill: {
      note2: {
      ko: [   
      "P는 상대 챔피언 하나당 한번.\n챔피언 개별의 쿨타임이 존재.", "Q(창)에 [[AIRBORNE]]은 E(깃발)에 적중해야 됨", "EQ(깃창)은 2단계로 나뉨 준비/돌진.\n준비단계에서 자르반이 맞은 CC는 유효 하지만\n돌진단계가 발동되어 앞으로 이동하는 것.\n돌진단계에는 CC 저항력 없음.\n단, 정말 짧은시간 준비단계가 있음.", "E는 주변에 [[AS_UP]] 버프가 있음", "W는 상대 챔피언을 많이 맞힐수록 [[SHIELD]] 증가", "R은 자르반이 점프 했을때 상대가 점멸을 쓰면 피해짐", "R은 설명에 [[UNSTOPPABLE]]가 없지만, 점프해서 날아갈 때 자르반 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝.", "R1을 사용했을 때 자르반이 CC에 걸리면 R2를 사용 할 수 없음. 즉, 벽 해제 못함."   
    ],   
      en: ["Q's [[AIRBORNE]] requires hitting the E (flag)", "EQ (Flag-Toss Combo) has two phases: wind-up / dash.\nCC that hits Jarvan IV during the wind-up phase applies, but the dash phase still activates and he moves forward.\nThere is no CC resistance during the dash phase.\nNote: the wind-up phase is very brief.", "E provides [[AS_UP]] to nearby allies", "W's shield increases with more enemy champions hit", "If a target flashes after R is cast, they can escape", "If Jarvan IV is hit by CC after casting R1, R2 cannot be activated.\nThe arena wall cannot be removed."]
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
