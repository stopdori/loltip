import type { ChampData } from "../interactions/types"; 

const azir: ChampData = { 
  id: "azir", 
  skills: { 
    P: ["COOLDOWN", "SEPARATOR", "ST_CONDITIONAL", "SUMMON", "SEPARATOR", "ALLY_TP_OK"], 
    Q: ["SLOW"], 
    W: ["SUMMON"], 
    E: ["E_FLASH", "SHIELD", "SEPARATOR", "DASH", "WALL_HOP"], 
    R: ["KNOCKBACK", "SEPARATOR", "TERRAIN"], 
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
      { label: { ko: "P 타워 소환", en: "Summon Turret" }, tags: ["COOLDOWN", "SEPARATOR", "ST_CONDITIONAL", "TIMING_CAST", "SUMMON", "SEPARATOR", "ALLY_TP_OK"] },
      { label: { ko: "P 타워", en: "P Turret" }, tags: ["DMG_MAGIC", "SINGLE"] },
    ] }, 

    Q: ["ST_CONDITIONAL", "DMG_MAGIC", "PIERCE", "PROJECTILE", "SLOW"], 
    
    W: { phases: [ 
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["SUMMON", "RECHARGE"] },
      { label: { ko: "W 모래 병사", en: "W Arise" }, tags: ["DMG_MAGIC", "PIERCE", "ON_HIT"] }, 
    ] }, 

    E: ["ST_CONDITIONAL", "DMG_MAGIC", "PIERCE_MINION", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "W", "CDR_RESET"], 

    R: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "PROJECTILE", "KNOCKBACK", "SEPARATOR", "TERRAIN"], 
  }, 

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 포탑이 무너진곳에 우클릭으로 설치. \n 상대 진영에는 불가능. \n \n",

          "Q는 W(모래 병사) 1기 이상 [[SUMMON]]되어 있어야 [[ACTIVATION_CONDITION]]. \n 모든 W를 커서 위치로 돌진. \n [[PIERCE]]하여 [[DMG_MAGIC]], [[SLOW]]. \n \n",

          "W는 모래 병사 소환. \n 병사는 조종거리와 공격 사거리가 있음.", 
          "조종 거리 이내의 병사는 \n 사거리 안의 적을 [[BA]]로 공격 명령. \n 공격은 직선으로 찌르는 [[PIERCE]], [[ON_HIT]], [[DMG_MAGIC]]. \n 피해는 중첩되나 감소. \n \n",

          "E는 W(모래 병사) 1기 이상 [[SUMMON]]되어 있어야 [[ACTIVATION_CONDITION]].", 
          "E는 [[SHIELD]]를 얻고 \n 커서 근처 병사 방향으로 아지르가 [[DASH]]. \n 경로의 적들과 부딪히면 [[DMG_MAGIC]].", 
          "적 챔피언과 부딪히면 [[DASH]] 중단. \n [[DMG_MAGIC]]와 W [[RECHARGE]] 1개 획득. \n \n",

          "R은 등 뒤에서 방패를 든 모래 병사들을 일자 [[TERRAIN]]으로 [[SUMMON]]. \n 전방으로 돌진시켜 [[TERRAIN]]에 부딪힌 적은 [[DMG_MAGIC]], [[KNOCKBACK]] \n [[TERRAIN]]은 아군만 통과 가능. \n R의 병사는 조종 불가능.",
        ],

        en: [
          "P is placed with a right-click where a turret has fallen. \n Cannot be placed in the enemy's territory. \n \n",

          "Q meets its [[ACTIVATION_CONDITION]] only while at least 1 [[SUMMON]]ed W (soldier) exists. \n Charges all W soldiers toward the cursor position. \n [[PIERCE]]s, dealing [[DMG_MAGIC]] and [[SLOW]]. \n \n",

          "W summons a sand soldier. \n The soldier has a control range and an attack range.",
          "A soldier within control range \n can be ordered to attack enemies in its range with a [[BA]]. \n The attack is a straight-line thrust: [[PIERCE]], [[ON_HIT]], and [[DMG_MAGIC]]. \n Damage stacks across soldiers but is reduced. \n \n",

          "E meets its [[ACTIVATION_CONDITION]] only while at least 1 [[SUMMON]]ed W (soldier) exists.",
          "E grants a [[SHIELD]] \n and Azir [[DASH]]es toward the soldier nearest the cursor. \n Colliding with enemies along the path deals [[DMG_MAGIC]].",
          "Colliding with an enemy champion stops the [[DASH]]. \n Deals [[DMG_MAGIC]] and grants 1 W [[RECHARGE]] charge. \n \n",

          "R [[SUMMON]]s a line of shield-bearing sand soldiers behind Azir as [[TERRAIN]]. \n They charge forward, dealing [[DMG_MAGIC]] and [[KNOCKBACK]] to enemies who collide with the [[TERRAIN]]. \n Only allies can pass through the [[TERRAIN]]. \n R's soldiers cannot be controlled.",
        ]

      },

      note2: {
      ko: [ 
      "W, R의 모래 병사는 [[ALLY_TP_OK]] 제외.", 
      "E는 EQ로 사용하면 [[DASH]]을 더 멀리할 수 있음. \n 이 때 방향도 바꿀 수 있음. \n 원리는 도착지점 병사를 Q로 움직여서 더 멀리 [[DASH]]." 
  
    ], 
  
      en: [
        "W and R soldiers are excluded from [[ALLY_TP_OK]].",
        "Using E then Q (EQ) lets the [[DASH]] travel farther. \n The direction can also be changed this way. \n The trick is using Q to move the destination soldier further, extending the [[DASH]]."
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

  // skillTooltip 근거: DDragon P/Q/W/E/R 전부 vars가 빈 배열이라 실제 계수를
  // 못 얻었고, 위키(wiki.leagueoflegends.com/en-us/Azir, V26.16 기준) 정보박스
  // 기준으로 채웠다(Notes 섹션 제외). R은 위키 fetch가 도중에 잘려 정확한
  // 피해량이 자동요약(신뢰 불가)으로만 나왔는데, 데이터 템플릿 페이지
  // (Template:Data_Azir/Emperor's_Divide)와 패치노트(V13.4)를 추가로 대조해서
  // verbatim으로 재확인했다(200/300/400/500/600 +75%AP, 5랭크 표기가 실제
  // 3랭크 궁극기 표시 200/400/600과 일치). R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "아지르는 아군 또는 적 진영 밖에서 파괴된 포탑 유적에 주기적으로 태양의 원반을 [[SUMMON]]할 수 있다. 0.5초의 시전 시간 후 5초에 걸쳐 조립된다(시전 방해나 스킬 잠금 상태에서는 시전 불가). \n \n 태양의 원반은 일반 1차 포탑과 동일하게 작동하되 [[DMG_MAGIC]]를 입히고 40% [[AP_SCALE]]의 추가 공격력을 얻으며, 처치 보상은 아지르에게 돌아간다. 아지르가 사망하거나 너무 멀어지면 체력이 45초에 걸쳐 서서히 줄고 방어력·마법저항력이 각각 100씩 감소한다.",
      en: "Azir can periodically [[SUMMON]] a Disc of the Sun at a destroyed turret ruin outside enemy territory (or his own). It takes 0.5 seconds to cast and 5 seconds to assemble (cannot be cast while disrupted or locked out of skills). \n \n The Disc of the Sun functions like a normal tier-1 turret, but deals [[DMG_MAGIC]] and gains 40% bonus attack power from [[AP_SCALE]], with takedown rewards going to Azir. If Azir dies or moves too far away, its health drains gradually over 45 seconds and its armor/magic resist each drop by 100.",
    },
    Q: {
      ko: "아지르가 [[SUMMON]]된 모든 W(모래 병사)를 지정 위치로 돌진시켜, 지나가는 경로와 도착 지점 주변의 모든 적에게 75/95/115/135/155(+35~55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초간 25%만큼 [[SLOW]]시킨다(같은 대상에게 이후 병사가 추가로 적중해도 중복 피해·둔화 없음). \n \n 소환된 W(모래 병사)가 최소 1기 있어야 [[ACTIVATION_CONDITION]] 된다. \n \n 14/12/10/8/6초의 [[COOLDOWN]].",
      en: "Azir charges all [[SUMMON]]ed W (soldiers) toward the target location, dealing 75/95/115/135/155 (+35~55% [[AP_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]ing by 25% for 1 second to all enemies along the path and around the destination (no duplicate damage or slow if more soldiers hit the same target afterward). \n \n Meets its [[ACTIVATION_CONDITION]] only while at least 1 [[SUMMON]]ed W (soldier) exists. \n \n 14/12/10/8/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "아지르가 지정 위치에 병사를 [[SUMMON]]한다(10초 지속, [[UNTARGETABLE]], 주변에 [[VISION]] 제공, 적 포탑 사거리 안에서는 2배 빠르게 소멸하고 아지르와 너무 멀어지면 즉시 소멸). 최대 2회까지 [[RECHARGE]]. \n \n 병사 사거리 안의 적에게 평타를 명령하면 평타 대신 병사가 그 방향으로 찌르기 공격을 해 직선상의 적에게 [[DMG_MAGIC]]를 입힌다(주 대상 0~72(레벨 비례)(+50~110)(+35~65% [[AP_SCALE]]), [[ON_HIT]] 효과는 50%만 적용, 2차 대상은 20~100%(레벨 비례)만 적용, 같은 대상에게 이어지는 병사 공격은 25%만 적용하고 [[ON_HIT]] 효과는 미적용). 구조물·와드·트랩은 공격할 수 없다. \n \n 충전당 12/10.5/9/7.5/6초의 [[COOLDOWN]].",
      en: "Azir [[SUMMON]]s a soldier at the target location (lasts 10 seconds, [[UNTARGETABLE]], grants [[VISION]] around it, decays twice as fast within enemy turret range, and disappears instantly if Azir moves too far away). [[RECHARGE]]s up to 2 charges. \n \n Ordering a basic attack against an enemy within the soldier's range makes the soldier thrust in that direction instead, dealing [[DMG_MAGIC]] to enemies in a line (primary target 0~72 (level-based) (+50~110) (+35~65% [[AP_SCALE]]); [[ON_HIT]] effects apply at only 50%; secondary targets take only 20~100% (level-based); a following soldier attack on the same target deals only 25% and applies no [[ON_HIT]] effects). Cannot attack structures, wards, or traps. \n \n 12/10.5/9/7.5/6 second [[COOLDOWN]] per charge.",
    },
    E: {
      ko: "아지르가 자신에게 1.5초간 70/110/150/190/230(+60% [[AP_SCALE]])의 [[SHIELD]]를 부여하고 커서에 가장 가까운 병사에게 [[DASH]]하여 경로상의 적에게 70/110/150/190/230(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. \n \n [[DASH]] 중 적 챔피언과 부딪히면 그 자리에서 멈추고 [[W]]의 [[RECHARGE]] 1개를 즉시 얻는다. [[DASH]] 중에도 다른 스킬을 자유롭게 사용할 수 있다. \n \n 소환된 W(모래 병사)가 최소 1기 있어야 [[ACTIVATION_CONDITION]] 된다. \n \n 22/20.5/19/17.5/16초의 [[COOLDOWN]].",
      en: "Azir grants himself a 70/110/150/190/230 (+60% [[AP_SCALE]]) [[SHIELD]] for 1.5 seconds and [[DASH]]es to the soldier nearest the cursor, dealing 70/110/150/190/230 (+60% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies along the path. \n \n Colliding with an enemy champion during the [[DASH]] stops him on the spot and immediately grants 1 [[W]] [[RECHARGE]] charge. Other skills can be used freely while dashing. \n \n Meets its [[ACTIVATION_CONDITION]] only while at least 1 [[SUMMON]]ed W (soldier) exists. \n \n 22/20.5/19/17.5/16 second [[COOLDOWN]].",
    },
    R: {
      ko: "아지르가 자신의 뒤쪽 175유닛 지점에서 병사 장벽(6/7/8기)을 소환해 지정 방향으로 575만큼 전방 돌진시킨다(자신의 뒤쪽 최대 325유닛까지의 적도 함께 밀려남). 적중한 모든 적에게 200/400/600(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 전방 650 지점까지 1초에 걸쳐 [[KNOCKBACK]]시킨다. \n \n 돌진이 끝나면 병사들은 그 자리에 5초간 [[TERRAIN]]으로 남아 적의 이동을 막고(아군은 통과 가능) 주변에 [[VISION]]을 제공한다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Azir summons a wall of soldiers (6/7/8) 175 units behind himself and charges them forward 575 units in the chosen direction (enemies up to 325 units behind him are also pushed). All enemies hit take 200/400/600 (+75% [[AP_SCALE]]) [[DMG_MAGIC]] and are [[KNOCKBACK]]ed up to 650 units forward over 1 second. \n \n Once the charge ends, the soldiers remain as [[TERRAIN]] for 5 seconds, blocking enemy movement (allies can pass through) and granting [[VISION]] around them. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

}; 

export default azir; 
