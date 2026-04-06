import type { ChampData } from "../interactions/types"; 

const azir: ChampData = { 
  id: "azir", 
  skills: { 
    P: [], 
    Q: ["SLOW"], 
    W: ["SUMMON"], 
    E: ["E_FLASH", "SHIELD", "WALL_HOP"], 
    R: ["TERRAIN", "KNOCKBACK"], 
  }, 

  vision: { 
    P: [], 
    Q: [], 
    W: [], 
    E: [], 
    R: [], 
  }, 

  gimmick: { 
    P: { phases: [ 
      { label: { ko: "타워 소환", en: "Summon Turret" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "TIMING_CAST", "SINGLE"] }, 
    ] }, 
    Q: ["ST_CONDITIONAL", "DMG_MAGIC", "PIERCE", "SLOW"], 
    W: { phases: [ 
      { label: { ko: "W", en: "W" }, tags: ["SUMMON", "RECHARGE"] }, 
      { label: { ko: "모래 병사", en: "Arise" }, tags: ["DMG_MAGIC", "ON_HIT", "PIERCE"] }, 
    ] }, 
    E: ["ST_CONDITIONAL", "DMG_MAGIC", "PIERCE_MINION", "DASH", "WALL_HOP"], 
    R: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "TERRAIN", "KNOCKBACK"], 
  }, 

  notes: {
    skill: {
      note3: {
        ko: [
          "EQ로 [[DASH]] 해서 R로 딜러진에 선물하기.",
          "W, Q로 치속 스택을 쌓고 견제하다가 \n EQ로 깊게 들어가서 R로 상대 딜러진 퍼올리기.",
          "W, Q로 카이팅 하면서 R로 수비하기."
        ], en: [
          "Dash in with EQ, then gift the enemy carries with R.",
          "Poke and build attack speed stacks with W and Q,\nthen dive deep with EQ and scoop up their carries with R.",
          "Kite with W and Q while using R defensively.",
        ] },
      note1: {

        ko: [
          "P는 포탑이 무너진곳에 우클릭으로 설치 가능. \n 넥서스 앞에는 불가능.",
          "Q는 W(병사)를 소환해야 사용할 수 있음. \n [[SLOW]]와 피해, 병사마다 피해 중첩 가능.",
          "W로 병사 소환. \n 병사를 조종할수 있는 거리가 있음. \n 이 때 [[BA]]를 때리면 병사로 공격. \n [[PIERCE]]에 피해는 중첩되나 감소.",
          "E는 병사 방향으로 아지르가 [[DASH]] \n 경로에 적 챔피언과 부딪히면 \n 피해를주고 [[DASH]]을 멈춤. \n E로 날아갈 때, 병사에 닿기 전에 Q로 더 멀리 [[DASH]].",
          "R 적군이 통과할 수 없는 모래 병사를 소환. \n W랑 다르게 조종 불가능.\n 병사가 이동을 끝 맞힐 때까지 [[KNOCKBACK]].",
        ],

        en: [
          "P can be right-clicked to place a turret where one has fallen.\nCannot be placed in front of the Nexus.",
          "Q requires a summoned W (soldier) to use.\nDeals [[SLOW]] and damage; damage stacks per soldier.",
          "W summons a soldier.\nSoldiers have a control range; while within range, [[BA]]s command them to attack.\nDamage [[PIERCE]]s and stacks but is reduced per target.",
          "E makes Azir [[DASH]] toward a soldier.\nIf he collides with an enemy champion along the path, he deals damage and stops.\nWhile dashing, cast Q before reaching the soldier to push it further and extend the range.",
          "R summons sand soldiers that enemies cannot pass through.\nUnlike W soldiers, these cannot be controlled.\nEnemies are [[KNOCKBACK]]ed until the soldiers finish moving.",
        ]

      },

      note2: {
      ko: [ 
  
      "[[Q_FLASH]], [[R_FLASH]] 안됨", "W(병사)에 텔 안됨", "E는 병사에게 [[DASH]]을 시작하는 순간 [[SHIELD]]. \n E로 날아갈 때, 병사에 닿기 전에 Q로 더 멀리 [[DASH]]. \n 이 때 방향도 바꿀 수 있음." 
  
    ], 
  
      en: ["[[Q_FLASH]] and [[R_FLASH]] not possible", "Cannot TP onto soldiers", "E activates [[SHIELD]] at the start of movement toward the W (soldier).\nBecause the travel distance is short, cast E toward the soldier then Q before arriving to push the soldier further and travel farther.\nThe direction can also be changed."]
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

export default azir; 
