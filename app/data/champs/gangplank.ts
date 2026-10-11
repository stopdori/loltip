import type { ChampData } from "../interactions/types";

const gangplank: ChampData = {
  id: "gangplank",
  skills: {
    P: ["COOLDOWN", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["Q_FLASH", "SEPARATOR", "ON_KILL", "STACKING"],
    W: ["HEAL", "CC_CLEANSE"],
    E: ["E_FLASH", "SUMMON", "AR_PEN", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    R: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "EMPOWERED", "MS_UP"],
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
      { label: { ko: "P", en: "P" }, tags: ["COOLDOWN", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"] },
      { label: { ko: "P 온힛 효과", en: "P On-hit Effect" }, tags: ["ON_HIT", "DOT", "DMG_TRUE"] },
    ] },


    Q: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR", "ON_KILL", "STACKING"],

    W: ["HEAL", "CC_CLEANSE"],

    E: { phases: [
      { label: { ko: "E 화약통", en: "E Powder Keg" }, tags: ["TIMING_CAST", "ZONE", "SUMMON", "RECHARGE"] },
      { label: { ko: "E 화약통 폭발", en: "E Keg Explosion" }, tags: ["DMG_PHYSICAL", "AR_PEN", "AOE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "DOT", "ZONE", "SLOW"] },
      { label: { ko: "R 강화 : 가차없는 포격", en: "R Upgrade: Fire at Will" }, tags: ["DURATION_EXT"] },
      { label: { ko: "R 강화 : 죽음의 여신", en: "R Upgrade: Death's Daughter" }, tags: ["AOE", "DMG_TRUE", "SLOW"] },
      { label: { ko: "R 강화 : 사기진작", en: "R Upgrade: Raise Morale" }, tags: ["AOE", "MS_UP"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[BA]]에 [[ON_HIT]]. \n 발동하면 [[DOT]] [[DMG_TRUE]]와 [[MS_UP]]. \n E(화약통)을 [[BA]]나 Q로 터뜨리면 [[CDR_RESET]]. \n \n",

          "Q는 [[SINGLE]] 대상 [[DMG_PHYSICAL]] [[PROJECTILE]]. \n [[ON_KILL]] 추가 골드와 은화([[STACKING]]). \n 상점에서 500 은화당 R을 [[EMPOWERED]]. \n E를 Q로 터뜨리면 Q로 처치한걸로 간주. \n \n",

          "W는 [[HEAL]]과 [[CC_CLEANSE]]. \n \n",

          "E는 갱플과 상대가 공격할 수 있는 화약통 [[SUMMON]]. \n 화약통의 체력은 3칸 \n 1칸이 남을 때까지 지속적으로 줄어듬.", 
          "상대가 [[ON_KILL]] 무효. \n 갱플이 [[ON_KILL]] 시 화약통 [[DETONATE]]. \n [[AR_PEN]] [[AOE]] [[DMG_PHYSICAL]]와 [[SLOW]] \n 범위가 겹쳐있다면 [[CHAIN]] [[DETONATE]]. \n \n",

          "R은 사거리 [[GLOBAL]]인 [[DOT]] [[ZONE]] 생성. \n 3번씩 4세트 떨어짐. \n 포탄이 떨어질 때 [[DMG_MAGIC]]와 [[SLOW]]. \n 직접적으로 맞지 않아도 범위 전체 적용.", 
          "R [[EMPOWERED]]는 3종류 \n 비용은 은화 500개. \n \n 1. 3번씩 2세트 추가. \n 2. 생성 시 한번 가운데 [[AOE]] [[DMG_TRUE]] [[SLOW]] 추가. \n 3. [[ZONE]]에 아군 [[MS_UP]] 추가."
          
        ],

        en: ["P applies [[ON_HIT]] to [[BA]]s. \n When triggered, deals [[DOT]] [[DMG_TRUE]] and grants [[MS_UP]]. \n Detonating an E (powder keg) with a [[BA]] or Q triggers [[CDR_RESET]]. \n \n",
          "Q is a [[SINGLE]]-target [[DMG_PHYSICAL]] [[PROJECTILE]]. \n [[ON_KILL]]: bonus gold and Silver Serpents ([[STACKING]]). \n In the shop, every 500 Silver Serpents make R [[EMPOWERED]]. \n Detonating E with Q counts as a Q kill. \n \n",
          "W grants [[HEAL]] and [[CC_CLEANSE]]. \n \n",
          "E [[SUMMON]]s a powder keg that both Gangplank and enemies can attack. \n The keg has 3 HP, \n which steadily decreases until 1 remains.",
          "If an enemy gets the [[ON_KILL]], the keg is defused. \n If Gangplank gets the [[ON_KILL]], the keg [[DETONATE]]s. \n [[AR_PEN]] [[AOE]] [[DMG_PHYSICAL]] and [[SLOW]] \n If ranges overlap, kegs [[CHAIN]] [[DETONATE]]. \n \n",
          "R creates a [[DOT]] [[ZONE]] with [[GLOBAL]] range. \n Drops 4 sets of 3 cannonballs. \n Each cannonball deals [[DMG_MAGIC]] and [[SLOW]] on impact. \n Applies to the entire area even without a direct hit.",
          "R has 3 [[EMPOWERED]] types, \n each costing 500 Silver Serpents. \n \n 1. Adds 2 more sets of 3. \n 2. Adds a one-time center [[AOE]] [[DMG_TRUE]] [[SLOW]] on creation. \n 3. Adds ally [[MS_UP]] within the [[ZONE]]."
        ]

      },

      note2: {
        ko: [ 
        "E는 갱플 체력바 밑에 사용할 수 있는 갯수 표시. \n [[CHAIN]] [[DETONATE]] 범위에 겹쳐있어도 \n [[DMG_PHYSICAL]]은 한 번만 적용.", 

        "R은 틱 간격이 좀 있는 [[DOT]] [[SLOW]]."
      ],
        en: ["E's available charges are shown below Gangplank's health bar. \n Even when overlapping multiple [[CHAIN]] [[DETONATE]] ranges, \n [[DMG_PHYSICAL]] applies only once.",
          "R is a [[DOT]] [[SLOW]] with a noticeable interval between ticks."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Gangplank).
  // W/E는 DDragon effectBurn과 위키가 일치, 나머지는 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본, Q는 DDragon tooltip이 내부 참조 문자열뿐이라
  // 인게임 원문(CDragon ko_kr lol.stringtable의 spell_gangplankpassive_tooltip /
  // spell_gangplankqwrapper_tooltip_1 = 소환사의 협곡)을 사용. P 쿨타임(15초)은 위키 값을 문장 끝에 덧붙임.
  skillTooltip: {
    P: {
      ko: "갱플랭크의 근접 공격이 대상을 불태워 2.5초간 50~250([[LEVEL_SCALE]] 비례)(+100% 추가 [[AD_SCALE]])의 [[DMG_TRUE]]를 추가로 입히고 2초간 15~30%([[LEVEL_SCALE]] 비례)의 [[MS_UP]]를 얻습니다. \n \n 화약통을 파괴하면 재사용 대기시간이 초기화되며 갱플랭크가 동일한 [[MS_UP]]를 얻습니다. ([[CDR_RESET]]) \n \n 15초의 [[COOLDOWN]].",
      en: "Gangplank's melee attacks set the target on fire, dealing an additional 50~250 (based on [[LEVEL_SCALE]]) (+100% bonus [[AD_SCALE]]) [[DMG_TRUE]] over 2.5 seconds and granting him 15~30% (based on [[LEVEL_SCALE]]) [[MS_UP]] for 2 seconds. \n \n Destroying a powder keg resets the cooldown and grants Gangplank the same [[MS_UP]]. ([[CDR_RESET]]) \n \n 15 second [[COOLDOWN]].",
    },
    Q: {
      ko: "갱플랭크가 총알을 발사해 10/40/70/100/130(+100% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 이 공격으로 대상을 처치할 경우 3/4/5/6/7골드와 바다뱀 은화 4/5/6/7/8개를 추가로 얻습니다. \n \n 상점에서 바다뱀 은화를 써서 포탄 세례(R) 스킬을 업그레이드할 수 있습니다. ([[EMPOWERED]]) \n \n 이 스킬은 [[ON_HIT]] 효과가 적용됩니다. \n \n 4.5초의 [[COOLDOWN]].",
      en: "Gangplank fires a bullet, dealing 10/40/70/100/130 (+100% [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n If this attack kills the target, he gains an additional 3/4/5/6/7 gold and 4/5/6/7/8 Silver Serpents. \n \n Silver Serpents can be spent in the shop to upgrade Cannon Barrage (R). ([[EMPOWERED]]) \n \n This skill applies [[ON_HIT]] effects. \n \n 4.5 second [[COOLDOWN]].",
    },
    W: {
      ko: "갱플랭크가 귤을 많이 먹어서 모든 방해 효과를 제거하고([[CC_CLEANSE]]) 체력을 45/70/95/120/145(+90% [[AP_SCALE]])+[[SELF_MISSING_HP_SCALE]]의 13%만큼 [[HEAL]]합니다. \n \n 22/20/18/16/14초의 [[COOLDOWN]].",
      en: "Gangplank eats a large quantity of citrus, removing all crowd control effects ([[CC_CLEANSE]]) and [[HEAL]]ing for 45/70/95/120/145 (+90% [[AP_SCALE]]) + 13% of [[SELF_MISSING_HP_SCALE]]. \n \n 22/20/18/16/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "25초 동안 갱플랭크와 적 챔피언이 공격할 수 있는 화약통을 설치합니다. 적이 파괴하는 통은 사라집니다. \n 갱플랭크가 파괴하는 통은 폭발하여 2초 동안 적을 40/50/60/70/80% [[SLOW]]시키고 40%의 [[AR_PEN]]을 적용하며 [[BA]]의 피해량만큼 피해를 입힙니다. \n 챔피언은 75/95/115/135/155의 [[DMG_PHYSICAL]]를 추가로 입습니다. \n \n 통의 체력은 2/1/0.5초([[LEVEL_SCALE]] 비례)마다 줄어듭니다. \n 통이 폭발하면 폭발 지대에 겹쳐 있는 통들이 연쇄 폭발하지만 같은 대상이 여러 번 피해를 입지는 않습니다. \n \n 혀어어어업상(Q) 스킬로 통을 터뜨리면 대상 처치 시 추가 골드를 얻습니다. \n \n 17/16/15/14/13초의 [[RECHARGE]] [[COOLDOWN]].",
      en: "Places a powder keg that Gangplank and enemy champions can attack for 25 seconds. Kegs destroyed by enemies disappear. \n Kegs destroyed by Gangplank explode, [[SLOW]]ing enemies by 40/50/60/70/80% for 2 seconds, applying 40% [[AR_PEN]], and dealing damage equal to his [[BA]] damage. \n Champions take an additional 75/95/115/135/155 [[DMG_PHYSICAL]]. \n \n The keg's health decays every 2/1/0.5 seconds (based on [[LEVEL_SCALE]]). \n When a keg explodes, kegs overlapping the blast zone chain-explode, but the same target cannot be damaged more than once. \n \n Detonating a keg with Parrrley (Q) grants bonus gold if it kills the target. \n \n 17/16/15/14/13 second [[RECHARGE]] [[COOLDOWN]].",
    },
    R: {
      ko: "갱플랭크가 배에 신호를 보내 맵 어느 위치로든 8초 동안 12차례 포탄을 발사하도록 합니다([[ZONE]]). \n 대포 세례마다 0.5초 동안 30%의 [[SLOW]]를 적용하며 40/70/100(+10% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 최대 피해량: 480/840/1200(+120% [[AP_SCALE]]) \n \n 이 스킬은 혀어어어업상(Q) 스킬을 통해 은화를 모아 상점에서 업그레이드할 수 있습니다. \n \n 1. 가차없는 포격: 6차례 추가로 포탄을 발사합니다. \n 2. 죽음의 여신: [[ZONE]] 중앙에 대형 포탄을 발사해 120/210/300(+30% [[AP_SCALE]])의 [[DMG_TRUE]]를 입히고 1초 동안 75% [[SLOW]]를 적용합니다. \n 3. 사기진작: 포탄 세례 범위 안에 있는 아군이 2초 동안 40%의 [[MS_UP]]를 얻습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Gangplank signals his ship to fire 12 waves of cannonballs at any location on the map over 8 seconds ([[ZONE]]). \n Each wave applies a 30% [[SLOW]] for 0.5 seconds and deals 40/70/100 (+10% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Maximum damage: 480/840/1200 (+120% [[AP_SCALE]]) \n \n This skill can be upgraded in the shop with Silver Serpents collected through Parrrley (Q). \n \n 1. Fire at Will: Fires 6 additional waves of cannonballs. \n 2. Death's Daughter: Fires a mega-cannonball at the center of the [[ZONE]], dealing 120/210/300 (+30% [[AP_SCALE]]) [[DMG_TRUE]] and applying a 75% [[SLOW]] for 1 second. \n 3. Raise Morale: Allies within the barrage gain 40% [[MS_UP]] for 2 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default gangplank;
