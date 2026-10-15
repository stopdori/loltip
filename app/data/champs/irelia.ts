import type { ChampData } from "../interactions/types";

const irelia: ChampData = {
  id: "irelia",
  skills: {
    P: ["AS_UP", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT"],
    Q: ["Q_FLASH", "HEAL", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "MARK_CONSUME", "CDR_RESET"],
    W: ["W_FLASH", "SEPARATOR", "MAGIC_DR", "PHYSICAL_DR"],
    E: ["STUN",   "MARK"],
    R: { phases: [
      { label: { ko: "R 투사체 / 폭발", en: "R Projectile / Explosion" }, tags: ["R_FLASH", "SLOW", "MARK"] },  
      { label: { ko: "R 결계 경계", en: "R Zone Boundary" }, tags: ["SLOW"] },
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
    P: { phases: [
      { label: { ko: "P 버프 스택", en: "P Buff Stack" }, tags: ["BUFF_STACK", "SEPARATOR", "PER_STACK", "AS_UP"] },
      { label: { ko: "P 버프 4 스택 온힛", en: "P 4-Stack Buff On-hit"  }, tags: ["ON_HIT", "DMG_MAGIC"] },
    ] },
    
    Q: ["DMG_PHYSICAL", "TARGETED", "ON_HIT", "HEAL", "SEPARATOR", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "MARK_CONSUME", "CDR_RESET", "SEPARATOR", "ON_KILL", "CDR_RESET"],

    W: { phases: [
      { label: { ko: "W 차징", en: "W Charging" }, tags: ["SKILL_CHARGED", "CAST_COMMIT", "CANCELLABLE", "SEPARATOR", "MAGIC_DR", "PHYSICAL_DR"] },
      { label: { ko: "W 발사", en: "W Release"  }, tags: ["DMG_PHYSICAL", "TIMING_AFTERCAST", "AOE", "SEPARATOR", "BUFF_STACK"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["PROJECTILE", "SEPARATOR", "ZONE", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["PROJECTILE", "SEPARATOR", "ZONE"] },
      { label: { ko: "E 발동", en: "E Trigger" }, tags: ["DMG_MAGIC", "PIERCE", "PROJECTILE", "SEPARATOR", "BUFF_STACK", "MARK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "SEPARATOR", "BUFF_STACK", "MARK"] },
      { label: { ko: "R 결계", en: "R Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "SEPARATOR", "BUFF_STACK", "MARK"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [],
        en: [] },
      note1: {

        ko: [
          "P는 스킬 적중 시 [[BUFF_STACK]] 획득. \n [[PER_STACK]] [[AS_UP]]. \n 4스택 시 [[ON_HIT]] [[DMG_MAGIC]]. \n \n",

          "Q는 [[DASH]]하여 [[DMG_PHYSICAL]]와 [[HEAL]]. \n [[MARK]]이 있거나 [[ON_KILL]] Q [[CDR_RESET]]. \n [[ON_HIT]] 추가 적용 가능. \n \n",

          "W는 [[CAST_COMMIT]] [[SKILL_CHARGED]] 스킬. \n 시전하는 동안 [[MAGIC_DR]]와 2배의 [[PHYSICAL_DR]]. \n 발사하면 충전량에 비례하여 \n [[AOE]] [[DMG_PHYSICAL]]. \n \n",

          "E는 2번 사용해야 발동. \n E1과 E2 사이에 [[PIERCE]] [[PROJECTILE]] [[DMG_MAGIC]]와 [[STUN]]. \n [[ON_CHAMP_HIT]] [[MARK]] 부여. \n \n",

          "R은 [[PIERCE_MINION]] [[PROJECTILE]]를 날려 [[DMG_MAGIC]]. \n [[ON_CHAMP_HIT]] 시 [[DETONATE]]하여 결계 [[ZONE]] 생성. \n 결계 [[AOE]] 안의 적은 [[DMG_MAGIC]]와 [[SLOW]], 챔피언은 [[MARK]]. \n 이후 결계에 닿으면 [[DMG_MAGIC]]와 [[SLOW]] 추가.",
        ],

        en: ["P gains a [[BUFF_STACK]] when a skill hits. \n [[AS_UP]] [[PER_STACK]]. \n At 4 stacks, [[ON_HIT]] [[DMG_MAGIC]]. \n \n",
          "Q [[DASH]]es, dealing [[DMG_PHYSICAL]] and granting [[HEAL]]. \n If the target has a [[MARK]] or on [[ON_KILL]], Q gets [[CDR_RESET]]. \n Can also apply [[ON_HIT]]. \n \n",
          "W is a [[CAST_COMMIT]] [[SKILL_CHARGED]] skill. \n While casting, gains [[MAGIC_DR]] and double [[PHYSICAL_DR]]. \n On release, based on the charge amount, \n deals [[AOE]] [[DMG_PHYSICAL]]. \n \n",
          "E must be used twice to trigger. \n Between E1 and E2, a [[PIERCE]] [[PROJECTILE]] deals [[DMG_MAGIC]] and [[STUN]]. \n [[ON_CHAMP_HIT]] applies a [[MARK]]. \n \n",
          "R fires a [[PIERCE_MINION]] [[PROJECTILE]], dealing [[DMG_MAGIC]]. \n On [[ON_CHAMP_HIT]], it [[DETONATE]]s and creates a barrier [[ZONE]]. \n Enemies inside the barrier [[AOE]] take [[DMG_MAGIC]] and [[SLOW]], and champions get a [[MARK]]. \n Afterwards, touching the barrier deals additional [[DMG_MAGIC]] and [[SLOW]]."
        ]

      },

      note2: {
        ko: [
        "P의 [[BUFF_STACK]] 유지는 \n [[BA]]로 챔피언, 구조물, 대형 몬스터 이상을 때려야 유지. \n 스킬로는 미니언, 소형몬스터도 가능.",

        "E, R 의 불안정 상태 [[MARK]]은 \n 대형, 에픽 몬스터에게도 생김.",

        "W, E, R로 P의 [[BUFF]] 스택을 채울때 상황마다 다름. \n 챔피언만 맞으면 챔피언당 1개 \n 챔피언과 미니언 몬스터가 함께 맞으면 챔피언당 1개 \n 미니언과 몬스터가 함께맞으면 그냥 1개. \n 에픽 몬스터도 몬스터와 같은 취급."
      ],
        en: ["P's [[BUFF_STACK]]s are maintained \n only by hitting champions, structures, or large monsters and above with [[BA]]s. \n With skills, minions and small monsters also work.",
          "The Unsteady [[MARK]] from E and R \n also applies to large and epic monsters.",
          "Filling P's [[BUFF]] stacks with W, E, R varies by situation. \n Hitting only champions: 1 per champion. \n Hitting champions together with minions/monsters: 1 per champion. \n Hitting minions and monsters together: just 1. \n Epic monsters are treated the same as monsters."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 125,
    11: 105,
    16: 85,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_ireliapassive_tooltip(인게임 원문)을 뼈대로 씀.
  // DDragon effectBurn/vars가 전부 비어 있어 수치는 공식 위키(V26.17)로 채움
  // (Q/W/E/R 기본 수치는 CDragon 게임 데이터 irelia.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "이렐리아가 스킬로 적을 맞히면 6초 동안 [[BUFF_STACK]]을 1개 얻습니다. (최대 4중첩) \n 이렐리아가 중첩당 10~25%([[LEVEL_SCALE]] 비례)의 [[AS_SCALE]]를 얻으며, \n 최대 중첩 시 [[ON_HIT]] 10~61([[LEVEL_SCALE]] 비례)(+20% 추가 [[AD_SCALE]])의 추가 [[DMG_MAGIC]]를 입힙니다. \n \n 챔피언이나 구조물, 대형 몬스터 공격 시 또는 \n [[BUFF_STACK]] 새로 획득 시 중첩 지속시간이 초기화됩니다 ([[DURATION_RESET]]).",
      en: "When Irelia hits an enemy with a skill, she gains 1 [[BUFF_STACK]] for 6 seconds. (Max 4 stacks) \n Irelia gains 10~25% (based on [[LEVEL_SCALE]]) [[AS_SCALE]] per stack, \n and at max stacks her attacks deal an additional 10~61 (based on [[LEVEL_SCALE]]) (+20% bonus [[AD_SCALE]]) [[DMG_MAGIC]] [[ON_HIT]]. \n \n Attacking a champion, structure, or large monster, or \n gaining a new [[BUFF_STACK]], refreshes the stack duration ([[DURATION_RESET]]).",
    },
    Q: {
      ko: "이렐리아가 적에게 [[DASH]]하여 5/25/45/65/85(+80% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 [[AD_SCALE]]의 9/10/11/12/13%만큼 체력을 [[HEAL]]합니다. \n 적 [[ON_KILL]] 또는 불안정 상태([[MARK]])일 경우 재사용 대기시간이 초기화됩니다. ([[CDR_RESET]]) \n \n 미니언에게는 5/25/45/65/85(+80% [[AD_SCALE]]) + 50~237([[LEVEL_SCALE]] 비례)의 피해를 입힙니다. \n \n 이 스킬은 [[ON_HIT]] 효과가 적용됩니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Irelia [[DASH]]es to an enemy, dealing 5/25/45/65/85 (+80% [[AD_SCALE]]) [[DMG_PHYSICAL]] and [[HEAL]]ing for 9/10/11/12/13% of [[AD_SCALE]]. \n If the enemy is killed ([[ON_KILL]]) or Unsteady ([[MARK]]), the cooldown is reset. ([[CDR_RESET]]) \n \n Deals 5/25/45/65/85 (+80% [[AD_SCALE]]) + 50~237 (based on [[LEVEL_SCALE]]) damage to minions. \n \n This skill applies [[ON_HIT]] effects. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "충전 시작 시: 이렐리아가 최대 1.5초 동안 [[SKILL_CHARGED]]하여 방어 태세에 돌입합니다. \n 받는 물리 피해가 40~70%([[LEVEL_SCALE]] 비례)(+[[AP_SCALE]] 100당 8%) 감소하고, ([[PHYSICAL_DR]]) \n 마법 피해가 20~35%([[LEVEL_SCALE]] 비례)(+[[AP_SCALE]] 100당 4%) 감소합니다. ([[MAGIC_DR]]) \n \n 발사 시: 이렐리아가 검을 날려 10/20/30/40/50(+40% [[AD_SCALE]])(+50% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 피해량은 [[SKILL_CHARGED]] 시간에 비례하여 최대 30/60/90/120/150(+120% [[AD_SCALE]])(+150% [[AP_SCALE]])만큼 증가합니다. \n \n 20/18/16/14/12초의 [[COOLDOWN]].",
      en: "Begin Charging: Irelia [[SKILL_CHARGED]]s for up to 1.5 seconds, entering a defensive stance. \n Physical damage taken is reduced by 40~70% (based on [[LEVEL_SCALE]]) (+8% per 100 [[AP_SCALE]]), ([[PHYSICAL_DR]]) \n and magic damage taken is reduced by 20~35% (based on [[LEVEL_SCALE]]) (+4% per 100 [[AP_SCALE]]). ([[MAGIC_DR]]) \n \n Release: Irelia lashes out with her blades, dealing 10/20/30/40/50 (+40% [[AD_SCALE]]) (+50% [[AP_SCALE]]) [[DMG_PHYSICAL]]. \n Damage increases with [[SKILL_CHARGED]] time, up to 30/60/90/120/150 (+120% [[AD_SCALE]]) (+150% [[AP_SCALE]]). \n \n 20/18/16/14/12 second [[COOLDOWN]].",
    },
    E: {
      ko: "이렐리아가 지면에 검을 던집니다. 3.5초 내에 스킬을 [[SKILL_RECAST]]할 수 있습니다. \n \n 재사용 시: 이렐리아가 두 번째 검을 던진 후 두 검이 서로를 향해 날아들어 0.75초 동안 적을 [[STUN]]시키고 70/110/150/190/230(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 챔피언과 대형 정글 몬스터는 5초 동안 불안정 상태([[MARK]])가 됩니다. \n \n 16/14.5/13/11.5/10초의 [[COOLDOWN]].",
      en: "Irelia throws a blade into the ground. She can [[SKILL_RECAST]] this skill within 3.5 seconds. \n \n Recast: Irelia throws a second blade, and the two blades fly toward each other, [[STUN]]ning enemies for 0.75 seconds and dealing 70/110/150/190/230 (+100% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Champions and large jungle monsters become Unsteady ([[MARK]]) for 5 seconds. \n \n 16/14.5/13/11.5/10 second [[COOLDOWN]].",
    },
    R: {
      ko: "이렐리아가 칼날 다발을 날려 125/200/275(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 챔피언 및 대형 정글 몬스터를 5초 동안 불안정 상태([[MARK]])로 만듭니다. \n \n 칼날 다발은 결계 형태로 [[DETONATE]]하여 2.5초 동안 첫 번째 적중한 챔피언을 둘러쌉니다. \n 결계는 125/200/275(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 적을 1.5초 동안 90% [[SLOW]]시킵니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Irelia fires a mass of blades, dealing 125/200/275 (+100% [[AP_SCALE]]) [[DMG_MAGIC]] and making champions and large jungle monsters Unsteady ([[MARK]]) for 5 seconds. \n \n The blades [[DETONATE]] into a barrier that surrounds the first champion hit for 2.5 seconds. \n The barrier deals 125/200/275 (+100% [[AP_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]s enemies by 90% for 1.5 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default irelia;
