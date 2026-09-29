import type { ChampData } from "../interactions/types";

const camille: ChampData = {
  id: "camille",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD"],
    Q: ["AA_RESET", "MS_UP", "SEPARATOR", "SKILL_RECAST"],
    W: ["W_FLASH", "SEPARATOR", "ST_CONDITIONAL", "SLOW", "HEAL",],
    
    E: { phases: [
      { label: { ko: "E1 벽 돌진", en: "E1 Wall-dash" }, tags: ["DASH", "WALL_HOP", "SEPARATOR", "CC_BUFFER"] },
      { label: { ko: "E2 돌진", en: "E2 Dash" }, tags: ["E_FLASH", "AS_UP", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "KNOCKBACK", "STUN"] },
    ] },

    R: ["R_FLASH", "DISRUPT", "UNTARGETABLE", "UNSTOPPABLE", "TOWER_DODGE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "GRAB", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "SHIELD", "SEPARATOR", "COOLDOWN"],
    
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1"  }, tags: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "강화 Q2", en: "Empowered Q2"  }, tags: ["ST_CONDITIONAL", "AA_RESET", "DMG_PHYSICAL", "DMG_TRUE", "ON_HIT"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "AOE", "ST_DELAYED"] },
      { label: { ko: "W 바깥", en: "W Outer Edge" }, tags: ["DMG_PHYSICAL", "AOE", "ST_DELAYED", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    ] },

    E: { phases: [
      { label: { ko: "E1 투척 단계", en: "E1 Throw Phase" }, tags: ["PROJECTILE", "CC_BUFFER"] },
      { label: { ko: "E1 벽 돌진 단계", en: "E1 Wall-dash Phase" }, tags: ["SKILL_CHANNEL", "DASH"] },
      { label: { ko: "E1 대기 단계", en: "E1 Hold Phase" }, tags: ["SKILL_CHANNEL", "SKILL_RECAST"] },
      { label: { ko: "E2 돌진 단계", en: "E2 Dash Phase" }, tags: ["DMG_PHYSICAL", "AS_UP", "KNOCKBACK", "STUN", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

    R:{ phases: [
      { label: { ko: "도약", en: "Leap" }, tags: ["TIMING_CAST", "DISRUPT", "UNTARGETABLE", "UNSTOPPABLE", "TOWER_DODGE", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ZONE", "SEPARATOR", "ST_CONDITIONAL", "GRAB", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"] },
      { label: { ko: "표식", en: "Mark"  }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[ON_HIT]]으로 상대를 때리면 \n [[SELF_MAXHP_SCALE]] 비례 [[SHIELD]]. \n 표식 색깔에 따라 물리[[SHIELD]], 마법[[SHIELD]] \n \n",

          "Q는 다음 평타를 [[EMPOWERED]] 하고 \n 공격 시 [[DMG_PHYSICAL]]와 [[MS_UP]]. \n Q2로 [[SKILL_RECAST]]하면 같은 효과.", 
          "바로 [[SKILL_RECAST]] 하지 않고 조금 기다리면 [[EMPOWERED]]. \n (Q 아이콘이 노란 테두리로 바뀜) \n 일반 Q2 효과에 추가 [[DMG_PHYSICAL]]. \n 총 피해량의 일정 %만큼 [[DMG_TRUE]]로 전환 ([[LEVEL_SCALE]] 비례). \n \n",

          "W는 전방 부채꼴의 [[AOE]] [[DMG_PHYSICAL]].", 
          "바깥쪽에 맞히면 [[SLOW]]. \n 챔피언이 맞았다면 피해량의 100%만큼 [[HEAL]]. \n \n",

          "E는 4단계로 나뉨 \n 1. 갈고리 [[PROJECTILE]]를 발사. \n 2. 벽에 갈고리가 닿으면 벽으로 [[DASH]]. \n 3. 벽에 붙어서 대기 \n 4. E를 [[SKILL_RECAST]] 또는 우클릭하여 E2로 [[DASH]].", 
          "E2로 [[DASH]] 할 때 [[AS_UP]]. \n 적 챔피언에게 [[DASH]]하면 [[RANGE_UP]] 2배. \n 적 챔피언과 부딪히면 \n [[DMG_PHYSICAL]]와 잠깐의 [[KNOCKBACK]], [[STUN]].", 
          "갈고리 투척 단계에 [[CC_BUFFER]]가 있어서 \n 일부 CC 무시 가능. \n \n",
          
          "R은 적 챔피언에게 [[DISRUPT]]를 걸고 [[DASH]](도약). \n 이때 카밀은 [[UNTARGETABLE]], [[UNSTOPPABLE]].", 
          "도착하면 대상을 중심으로 [[ZONE]] 생성. \n 이때 대상을 제외한 적들을 [[ZONE]] 밖으로 [[KNOCKBACK]]. \n 대상에게 [[MARK]]. \n [[MARK]]이 있는 동안 [[ON_HIT]] [[DMG_MAGIC]]. \n 대상은 [[ZONE]] 밖으로 나갈 수 없음.", 
          "카밀이 벗어나면 [[ZONE]], [[MARK]] 해제."
        ],

        en: [
          "When P hits an enemy [[ON_HIT]], \n Camille gains a [[SHIELD]] based on [[SELF_MAXHP_SCALE]]. \n Physical [[SHIELD]] or magic [[SHIELD]] depending on the mark color \n \n",
          "Q makes the next basic attack [[EMPOWERED]], \n dealing [[DMG_PHYSICAL]] and granting [[MS_UP]] on hit. \n [[SKILL_RECAST]]ing as Q2 gives the same effect.",
          "If you wait a moment instead of [[SKILL_RECAST]]ing immediately, it becomes [[EMPOWERED]]. \n (The Q icon gets a yellow border) \n Adds bonus [[DMG_PHYSICAL]] on top of the normal Q2 effect. \n A percentage of the total damage is converted to [[DMG_TRUE]] (based on [[LEVEL_SCALE]]). \n \n",
          "W deals cone-shaped [[AOE]] [[DMG_PHYSICAL]] in front.",
          "Hitting with the outer edge applies [[SLOW]]. \n If a champion is hit, Camille [[HEAL]]s for 100% of the damage. \n \n",
          "E is divided into 4 phases \n 1. Fires a hook [[PROJECTILE]]. \n 2. When the hook reaches a wall, [[DASH]]es to the wall. \n 3. Holds onto the wall \n 4. [[SKILL_RECAST]] E or right-click to [[DASH]] as E2.",
          "Gains [[AS_UP]] when [[DASH]]ing with E2. \n [[DASH]]ing toward an enemy champion doubles the [[RANGE_UP]]. \n Colliding with an enemy champion \n deals [[DMG_PHYSICAL]] with a brief [[KNOCKBACK]] and [[STUN]].",
          "The hook-throw phase has [[CC_BUFFER]], \n allowing some CC to be ignored. \n \n",
          "R applies [[DISRUPT]] to an enemy champion and [[DASH]]es (leaps) to them. \n During this, Camille is [[UNTARGETABLE]] and [[UNSTOPPABLE]].",
          "On arrival, creates a [[ZONE]] centered on the target. \n Enemies other than the target are [[KNOCKBACK]]ed out of the [[ZONE]]. \n [[MARK]]s the target. \n While the [[MARK]] lasts, [[ON_HIT]] [[DMG_MAGIC]]. \n The target cannot leave the [[ZONE]].",
          "If Camille leaves, the [[ZONE]] and [[MARK]] end.",
        ]

      },

      note2: {
        ko: [
        "E스킬은 4단계로 나뉨 \n E1 투척 / 벽 돌진 / 대기 \n E2 돌진", 
        "E1 투척 단계에 카밀이 맞은 CC는 유효하지만 \n 벽 돌진 단계가 발동되어 벽으로 [[DASH]]. \n 대기 단계에서 [[IMMOBILIZING]]가 남아있다면 \n E1이 해제될 수 있음.", 
        "E는 웬만한 생성된 벽에도 사용 가능.", 
        "R은 설명에 [[UNSTOPPABLE]]가 없지만, \n 점프해서 날아갈 때 체력바 위에 [[UNSTOPPABLE]]가 생김."
      ],
        en: [
          "E has four phases \n E1: Throw / Wall-dash / Hold \n E2: Dash",
          "CC applied to Camille during the E1 Throw phase is still valid, \n but the Wall-dash phase still triggers and she [[DASH]]es to the wall. \n If [[IMMOBILIZING]] persists into the Hold phase, \n E1 may be canceled.",
          "E can be used on most generated terrain walls.",
          "R's description does not mention [[UNSTOPPABLE]], \n but [[UNSTOPPABLE]] appears above Camille's health bar while she leaps.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Camille,
  // 스킬 수치 최근 변경 V26.16). DDragon effectBurn/vars가 비어 있어 위키 본문/템플릿 수치로 채움.
  // Q 재사용 시간은 ko_KR 원문이 "초 후에"로 되어 있으나 en_US("in the next X seconds")·위키 기준 "안에"로 표기.
  skillTooltip: {
    P: {
      ko: "챔피언에게 [[BA]] 시 2초 동안 카밀 [[SELF_MAXHP_SCALE]]의 \n 10/15/20%([[LEVEL_SCALE]] 비례)에 해당하는 피해를 흡수하는 [[SHIELD]]가 생깁니다. \n 적 챔피언이 어떤 피해를 주는지에 따라 물리 혹은 마법 [[SHIELD]] 중 하나만 생성됩니다. \n \n 14/11/8초([[LEVEL_SCALE]])의 [[COOLDOWN]].",
      en: "Basic attacking ([[BA]]) a champion grants a [[SHIELD]] for 2 seconds that absorbs damage equal to \n 10/15/20% (based on [[LEVEL_SCALE]]) of Camille's [[SELF_MAXHP_SCALE]]. \n Only one of a physical or magic [[SHIELD]] is created, depending on which damage type the enemy champion deals. \n \n 14/11/8 second ([[LEVEL_SCALE]]) [[COOLDOWN]].",
    },
    Q: {
      ko: "카밀이 다음 [[BA]] 시 20/25/30/35/40% [[AD_SCALE]]의 추가 [[DMG_PHYSICAL]]를 입히고 1초 동안 25/30/35/40/45%의 [[MS_UP]]를 얻습니다. \n 3.5초 안에 스킬을 [[SKILL_RECAST]]할 수 있습니다. \n \n 첫 번째 [[BA]] 후 1.5초가 지난 뒤 스킬을 [[SKILL_RECAST]]하여 공격 시 추가 피해량이 증가해 40/50/60/70/80% [[AD_SCALE]]의 피해를 입히고, 이 중 40~100%([[LEVEL_SCALE]] 비례)는 [[DMG_TRUE]]로 적용됩니다. \n \n 이 스킬은 피해를 입힐 때 효과가 발동합니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Camille's next [[BA]] deals an additional 20/25/30/35/40% [[AD_SCALE]] [[DMG_PHYSICAL]] and grants 25/30/35/40/45% [[MS_UP]] for 1 second. \n This skill can be [[SKILL_RECAST]] within the next 3.5 seconds. \n \n If the skill is [[SKILL_RECAST]] at least 1.5 seconds after the first [[BA]], the bonus damage increases to 40/50/60/70/80% [[AD_SCALE]], and 40~100% (based on [[LEVEL_SCALE]]) of it is dealt as [[DMG_TRUE]]. \n \n This skill applies its effect on dealing damage. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    W: {
      ko: "카밀이 다리를 감아올려 휩쓸며 60/85/110/135/160(+60% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 바깥쪽 절반에서 맞은 적은 80% [[SLOW]]되었다가 2초에 걸쳐 원래대로 돌아오며, 추가로 [[TARGET_MAXHP_SCALE]]의 7/7.5/8/8.5/9%(+추가 공격력 100당 2.5%)에 해당하는 [[DMG_PHYSICAL]]를 입습니다. \n 이때 카밀은 챔피언에게 입힌 추가 피해량의 100%만큼 [[HEAL]]합니다. \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
      en: "Camille winds up and sweeps her leg, dealing 60/85/110/135/160 (+60% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n Enemies hit by the outer half are [[SLOW]]ed by 80%, decaying over 2 seconds, and take additional [[DMG_PHYSICAL]] equal to 7/7.5/8/8.5/9% (+2.5% per 100 bonus AD) of their [[TARGET_MAXHP_SCALE]]. \n Camille [[HEAL]]s for 100% of the bonus damage dealt to champions. \n \n 12/11.5/11/10.5/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "카밀이 지형에 걸리는 갈고리[[PROJECTILE]]를 발사해 1초 동안 자신을 지형으로 끌어당깁니다. 이 스킬은 [[SKILL_RECAST]]할 수 있습니다. \n \n [[SKILL_RECAST]] 시: 카밀이 지형으로부터 [[DASH]]해 처음 마주치는 적 챔피언과 충돌합니다. \n 충돌 시 5초 동안 40/45/50/55/60%의 [[AS_UP]]를 얻고 주변 적에게 60/90/120/150/180(+75% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히며 적 챔피언을 0.75초 동안 [[STUN]]시킵니다. (잠깐동안 [[KNOCKBACK]]) \n \n 적 챔피언을 향해 도약할 경우 도약 거리가 두 배로 증가합니다. \n \n 16/15/14/13/12초의 [[COOLDOWN]].",
      en: "Camille fires a hookshot [[PROJECTILE]] that attaches to terrain, pulling her to it over 1 second. This skill can be [[SKILL_RECAST]]. \n \n On [[SKILL_RECAST]]: Camille [[DASH]]es off the terrain, colliding with the first enemy champion she meets. \n On collision, she gains 40/45/50/55/60% [[AS_UP]] for 5 seconds, deals 60/90/120/150/180 (+75% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to nearby enemies, and [[STUN]]s enemy champions for 0.75 seconds. (Brief [[KNOCKBACK]]) \n \n Leap distance is doubled when leaping toward an enemy champion. \n \n 16/15/14/13/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "카밀이 잠시 [[UNTARGETABLE]] 상태가 되며 적 챔피언에게 [[DASH]]해 [[DISRUPT]]와 2.5/3.25/4초 동안 어떤 방법으로도 탈출할 수 없도록 일정 지역([[ZONE]]) 내에 가둡니다. \n 근처의 다른 적은 [[KNOCKBACK]]됩니다. \n \n 갇힌 적에 대한 카밀의 [[BA]]는 [[TARGET_CURRENT_HP_SCALE]]의 4/6/8%에 해당하는 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Camille briefly becomes [[UNTARGETABLE]] and [[DASH]]es to an enemy champion, applying [[DISRUPT]] and trapping them in an area ([[ZONE]]) they cannot escape by any means for 2.5/3.25/4 seconds. \n Other nearby enemies are [[KNOCKBACK]]ed. \n \n Camille's [[BA]]s against the trapped enemy deal additional [[DMG_MAGIC]] equal to 4/6/8% of their [[TARGET_CURRENT_HP_SCALE]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default camille;
