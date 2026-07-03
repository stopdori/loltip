import type { ChampData } from "../interactions/types";

const ornn: ChampData = {
  id: "ornn",
  skills: {
    P: [],
    Q: ["SLOW", "TERRAIN", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    W: ["UNSTOPPABLE"],
    E: ["DASH", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["MARK", "SLOW"] },
      { label: { ko: "R2", en: "R2" }, tags: ["R_FLASH", "MARK_CONSUME", "MARK", "AIRBORNE"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],

    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "TERRAIN", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "DOT", "MOBILITY", "UNSTOPPABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MARK"] },
      { label: { ko: "표식 (불안정 상태)", en: "MARK (Brittle)" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
      { label: { ko: "표식 평타 (불안정 상태)", en: "Mark On-Hit (Brittle)" }, tags: ["ST_CONDITIONAL", "ON_HIT", "DMG_MAGIC", "KNOCKBACK"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 돌진", en: "E Dash" }, tags: ["DMG_PHYSICAL", "SKILL_CHANNEL", "TIMING_AFTERCAST", "AOE", "DASH"] },
      { label: { ko: "E 벽꿍", en: "E Shockwave" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE", "AIRBORNE"] },
    ] },

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "MARK", "SLOW"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_MAGIC", "TIMING_AFTERCAST", "PROJECTILE", "PIERCE", "MARK", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "R로 먼저 이니시 하는게 정말 위협적임.",
          "앞선에서 Q로 견제만 하다 \n E 벽꿍으로 [[AOE]] [[AIRBORNE]].",
        ], en: [
          "Initiating with R first is very threatening.",
          "Poke from the front line with Q, \n then land E's Shockwave for [[AOE]] [[AIRBORNE]].",
        ] },
      note1: {

        ko: [
          "오른은 비-전투 상태일 때 \n 골드를 내고 상점의 아이템을 제작할 수 있음.",

          "P의 효과로 아이템 하나를 걸작으로 강화 가능. \n 아이템 슬롯 1번에 가까운 템 강화. \n 13 레벨에 오른 1개. \n 14 레벨부터 레벨당 아군 1개씩 \n 걸작은 한 번씩만 만들어 줄 수 있음.",

          "P는 오른이 획득한 체력, 방어력, 마법 저항력이 10% 증가. \n 오른이 걸작을 소유하면 14%.",

          "Q는 [[PROJECTILE]] 발사하여 [[DMG_PHYSICAL]], [[SLOW]]. \n 최대 도착지점에 [[TERRAIN]] 생성. \n 단, 적 챔피언에게 적중하면 바로 뒤에 [[TERRAIN]] 생성.",

          "W는 [[UNSTOPPABLE]]로 전진. \n 대상의 최대 체력 비례 [[DMG_MAGIC]]. \n 마지막에 강한 불꽃을 맞히면 [[MARK]]. \n \n [[MARK]] 효과는 경우에 따라 다름. \n 1. [[IMMOBILIZING]] CC 지속시간 30% 증가. \n 2. 대상에게 오른 [[BA]] 시 약간의 [[KNOCKBACK]]. \n 공통적으로 대상의 최대 체력 비례 [[DMG_MAGIC]] 추가.",

          "E는 [[DASH]]하여 방마저 비례 [[DMG_PHYSICAL]]. \n 구조물, 벽에 부딪히면 그 주변 [[AOE]] [[DMG_PHYSICAL]], [[AIRBORNE]]. \n 피해를 중복해서 받지 않음.",

          "R은 오른에게 다가오는 [[PIERCE]] [[PROJECTILE]]를 [[SUMMON]]. \n 적에게 닿으면 [[DMG_MAGIC]], [[SLOW]], 챔피언이면 [[MARK]]. \n [[PROJECTILE]]에 맞춰 [[SKILL_RECAST]] 하면 원하는 방향으로 발사 가능. \n \n R2도 똑같이 [[PIERCE]] [[PROJECTILE]] [[DMG_MAGIC]], [[MARK]]. \n [[MARK]]은 이미 걸려있었다면 소모하고 다시 적용. \n R2에 처음 닿은 대상은 1초, 나머지는 0.5초 [[AIRBORNE]].",
        ],

        en: [
          "While out of combat, \n Ornn can spend gold to forge items from the shop.",

          "P lets one item be upgraded into a Masterwork. \n Upgrades the item closest to slot 1. \n Ornn gets 1 at level 13. \n From level 14, allies get 1 per level. \n Each ally can only receive a Masterwork once.",

          "P increases Ornn's bonus Health, Armor, and Magic Resist by 10%. \n 14% if Ornn owns a Masterwork item.",

          "Q fires a [[PROJECTILE]] dealing [[DMG_PHYSICAL]] and [[SLOW]]. \n Creates [[TERRAIN]] at max range. \n If it hits an enemy champion, [[TERRAIN]] spawns right behind them instead.",

          "W advances Ornn while [[UNSTOPPABLE]]. \n Deals [[DMG_MAGIC]] based on the target's max Health. \n Hitting the final, stronger flame applies [[MARK]]. \n \n The [[MARK]] effect varies by condition. \n 1. Increases [[IMMOBILIZING]] CC duration by 30%. \n 2. Ornn's [[BA]] on the target applies a small [[KNOCKBACK]]. \n Both cases add bonus [[DMG_MAGIC]] based on the target's max Health.",

          "E [[DASH]]es dealing [[DMG_PHYSICAL]] based on Armor and Magic Resist. \n Colliding with a structure or wall deals [[AOE]] [[DMG_PHYSICAL]] and [[AIRBORNE]] around it. \n A target cannot be hit by both instances of damage.",

          "R [[SUMMON]]s a [[PIERCE]] [[PROJECTILE]] that travels toward Ornn. \n On hit, deals [[DMG_MAGIC]] and [[SLOW]]; applies [[MARK]] to champions. \n [[SKILL_RECAST]] as the [[PROJECTILE]] passes to fire it in a chosen direction. \n \n R2 similarly fires a [[PIERCE]] [[PROJECTILE]] dealing [[DMG_MAGIC]] and applying [[MARK]]. \n If [[MARK]] is already applied, it is consumed and reapplied. \n The first target hit by R2 is [[AIRBORNE]] for 1 second; others for 0.5 seconds.",
        ]

      },

      note2: {
        ko: [
        "오른의 아이템 제작은 \n 미니언, 몬스터 피해에 취소되지 않음.",
        "오른 걸작은 아이템 1000골드 가치만큼 강화. \n 능력치마다 균등하게 분배하여 강화. \n 영향받는 능력치는 공,주,공속,가속,방,마저,체력 \n \n 예) 무한의 대검 \n 공 75, [[CRIT]] 25%, [[CRIT]] 피해량 30% -> \n 공 103, [[CRIT]] 25%, [[CRIT]] 피해량 30%.",
        "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], 안됨.",
        "[[R_FLASH]]는 R2 타이밍에 정말 빠르게 R2플 하면 가능.",
        "Q의 [[TERRAIN]]에 [[ALLY_TP_OK]] 불가.",
        "E의 [[DASH]] 상대팀이 만든 [[TERRAIN]]이면 파괴.",
        "R은 R1, R2 [[PROJECTILE]] 모두 불안정상태 [[MARK]] 부여. \n R2 [[DASH]]은 [[UNSTOPPABLE]]가 아님."
      ],
        en: [
        "Ornn's item forging \n is not cancelled by damage from minions or monsters.",
        "Ornn's Masterwork upgrades an item by 1000 gold worth of stats. \n The bonus is distributed evenly across all affected stats. \n Affected stats: AD, AP, AS, AH, Armor, MR, Health. \n \n e.g. Infinity Edge \n AD 75, [[CRIT]] 25%, [[CRIT]] Damage 30% -> \n AD 103, [[CRIT]] 25%, [[CRIT]] Damage 30%.",
        "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]] not possible.",
        "[[R_FLASH]] is possible by recasting R2 extremely quickly at the R2 timing.",
        "Cannot [[ALLY_TP_OK]] onto Q's [[TERRAIN]].",
        "E's [[DASH]] destroys [[TERRAIN]] if it belongs to the enemy team.",
        "Both R1 and R2 [[PROJECTILE]]s apply the Brittle [[MARK]]. \n R2's [[DASH]] is not [[UNSTOPPABLE]]."
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

export default ornn;
