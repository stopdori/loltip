import type { ChampData } from "../interactions/types";

const gragas: ChampData = {
  id: "gragas",
  skills: {
    P: ["COOLDOWN", "HEAL"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["DMG_REDUCE"],
    E: ["E_FLASH", "KNOCKBACK", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["R_FLASH", "KNOCKBACK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["COOLDOWN", "ST_CONDITIONAL"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["TIMING_CAST", "PROJECTILE", "SEPARATOR", "ZONE", "RECAST_CANCEL"] },
      { label: { ko: "Q 폭발", en: "Q Explosion" }, tags: ["DMG_MAGIC", "ZONE", "SLOW"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["SKILL_CHANNEL", "DMG_REDUCE", "SEPARATOR", "ST_CONDITIONAL", "EMPOWERED", "BA"] },
      { label: { ko: "W 취중 분노 (강화 평타)", en: "W Drunken Rage (Empowered Attack)" }, tags: ["SEPARATOR", "DMG_MAGIC", "ON_HIT", "AOE"] },
    ] },
    
    E: ["DMG_MAGIC", "AOE", "KNOCKBACK", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],

    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "KNOCKBACK"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[COOLDOWN]]이 있고 \n 스킬을 사용하면 [[HEAL]]. \n \n",

          "Q는 술통([[PROJECTILE]])을 발사. \n 도착하면 [[ZONE]]으로 남음. \n 지속 시간 종료 또는 Q [[RECAST_DETONATE]]로 폭발. \n 지속시간에 비례해서 [[DMG_MAGIC]], [[SLOW]] 효과 증가. \n \n",

          "W는 [[DMG_REDUCE]] 버프 획득. \n 잠시 [[SKILL_CHANNEL]] 하여 다음 [[BA]] [[EMPOWERED]]. \n 공격 시 대상은 [[ON_HIT]]과 주변 [[AOE]] [[DMG_MAGIC]]. \n \n",

          "E(배치기)는 [[DASH]]하여 부딪힌 적들에게 \n [[AOE]] [[DMG_MAGIC]]와 [[KNOCKBACK]]. \n 적중하면 [[CDR]]. \n \n",

          "R은 술통([[PROJECTILE]])을 발사하여 \n [[AOE]] [[DMG_MAGIC]]와 [[KNOCKBACK]](술통 기준).",
        ],

        en: ["P has a [[COOLDOWN]], and \n using a skill grants [[HEAL]]. \n \n",
          "Q fires a barrel ([[PROJECTILE]]). \n On arrival, it remains as a [[ZONE]]. \n Explodes when the duration ends or on Q [[RECAST_DETONATE]]. \n [[DMG_MAGIC]] and [[SLOW]] increase with the duration. \n \n",
          "W grants a [[DMG_REDUCE]] buff. \n After a brief [[SKILL_CHANNEL]], the next [[BA]] becomes [[EMPOWERED]]. \n On attack, the target takes [[ON_HIT]] and nearby [[AOE]] [[DMG_MAGIC]]. \n \n",
          "E (Body Slam) [[DASH]]es and deals \n [[AOE]] [[DMG_MAGIC]] and [[KNOCKBACK]] to enemies collided with. \n Hitting an enemy grants [[CDR]]. \n \n",
          "R fires a barrel ([[PROJECTILE]]), dealing \n [[AOE]] [[DMG_MAGIC]] and [[KNOCKBACK]] (away from the barrel)."
        ]

      },

      note2: {
        ko: [
        "P의 [[COOLDOWN]]은 스킬가속에 영향 없음.", 
        "Q를 사용했을 때 그라가스가 CC에 걸리면 \n Q [[RECAST_CANCEL]]를 사용 할 수 없음.", 
        "E로 [[DASH]]하는 도중에 Q, R 사용 가능.", 
        
      ],
        en: ["P's [[COOLDOWN]] is not affected by ability haste.",
          "If Gragas is hit by CC after casting Q, \n Q [[RECAST_CANCEL]] cannot be used.",
          "Q and R can be cast while [[DASH]]ing with E."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Gragas,
  // 스킬 수치 최근 변경 V26.09). Q는 DDragon effectBurn과 위키가 일치, 나머지는 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // generatedtip_passive_gragaspassive_tooltip, 제목줄의 쿨타임 포함)을 사용.
  skillTooltip: {
    P: {
      ko: "그라가스가 스킬을 사용하면 술을 마셔 [[SELF_MAXHP_SCALE]] 비례 5.5%만큼 체력을 [[HEAL]]합니다. \n \n 12/10/8/6초([[LEVEL_SCALE]] 비례)의 [[COOLDOWN]].",
      en: "When Gragas uses a skill, he takes a drink and [[HEAL]]s for 5.5% of [[SELF_MAXHP_SCALE]]. \n \n 12/10/8/6 second (based on [[LEVEL_SCALE]]) [[COOLDOWN]].",
    },
    Q: {
      ko: "그라가스가 술통을 굴립니다. \n 술통은 4초 후 폭발해 80/120/160/200/240(+80% [[AP_SCALE]])~120/180/240/300/360(+120% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 2초 동안 40/45/50/55/60~60/67.5/75/82.5/90% [[SLOW]]시킵니다. \n [[DMG_MAGIC]], [[SLOW]] 효과는 \n 폭발 전 술통이 유지됐던 시간에 비례해 증가합니다. \n \n Q [[RECAST_DETONATE]]로 술통을 더 빨리 폭발시킬 수 있습니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Gragas rolls a barrel. \n The barrel explodes after 4 seconds, dealing 80/120/160/200/240 (+80% [[AP_SCALE]]) ~ 120/180/240/300/360 (+120% [[AP_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]ing by 40/45/50/55/60 ~ 60/67.5/75/82.5/90% for 2 seconds. \n The [[DMG_MAGIC]] and [[SLOW]] effects \n increase based on how long the barrel was out before exploding. \n \n Q [[RECAST_DETONATE]] can make the barrel explode sooner. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "그라가스가 술을 맛보고 2.5초 동안 받는 피해량이 10/14/18/22/26%(+주문력 100당 4%) [[DMG_REDUCE]]됩니다. \n 또한 다음 [[BA]]가 [[EMPOWERED]]되어 대상과 주변 적에게 20/50/80/110/140(+70% [[AP_SCALE]])+[[TARGET_MAXHP_SCALE]]의 7%에 해당하는 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 5초의 [[COOLDOWN]].",
      en: "Gragas takes a drink, gaining 10/14/18/22/26% (+4% per 100 AP) [[DMG_REDUCE]] for 2.5 seconds. \n His next [[BA]] is also [[EMPOWERED]], dealing an additional 20/50/80/110/140 (+70% [[AP_SCALE]]) + 7% of [[TARGET_MAXHP_SCALE]] [[DMG_MAGIC]] to the target and nearby enemies. \n \n 5 second [[COOLDOWN]].",
    },
    E: {
      ko: "그라가스가 앞으로 [[DASH]]하여 첫 번째 적에게 부딪히면 1초 동안 주변 적을 [[KNOCKBACK]]시키고 80/125/170/215/260(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 그라가스가 적과 충돌하면 이 스킬의 재사용 대기시간이 40% 단축됩니다. ([[CDR]]) \n \n 14/13.5/13/12.5/12초의 [[COOLDOWN]].",
      en: "Gragas [[DASH]]es forward, and upon colliding with the first enemy, [[KNOCKBACK]]s nearby enemies for 1 second and deals 80/125/170/215/260 (+60% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n If Gragas collides with an enemy, this skill's cooldown is reduced by 40%. ([[CDR]]) \n \n 14/13.5/13/12.5/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "그라가스가 술통을 던져 200/300/400(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 적들을 폭발 지점으로부터 [[KNOCKBACK]]시킵니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Gragas hurls a cask, dealing 200/300/400 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] and [[KNOCKBACK]]ing enemies away from the blast point. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default gragas;
