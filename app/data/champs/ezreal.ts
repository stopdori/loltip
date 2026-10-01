import type { ChampData } from "../interactions/types";

const ezreal: ChampData = {
  id: "ezreal",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "CDR", "ALL_SKILLS"],
    W: ["W_FLASH", "MARK", "SEPARATOR", "ST_CONDITIONAL", "MANA_RESTORE"],
    E: ["E_FLASH", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR", "CC_BUFFER"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_STACK", "SEPARATOR", "PER_STACK", "AS_UP"],

    Q: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "BUFF_STACK", "SEPARATOR", "CDR", "ALL_SKILLS"],

    W: { phases: [
      { label: { ko: "W",     en: "W" }, tags: ["TIMING_CAST", "PROJECTILE", "MARK", "BUFF_STACK"] },
      { label: { ko: "W 발동", en: "W Trigger" }, tags: ["DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "MANA_RESTORE"] },
    ] },

    E: { phases: [
      { label: { ko: "E 준비 단계",     en: "E Wind-up Phase" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "E 순간이동 단계", en: "E Blink Phase" }, tags: ["BLINK", "WALL_HOP"] },
      { label: { ko: "E 순간이동 단계 투사체", en: "E Blink Phase Projectile" }, tags: ["DMG_MAGIC", "PROJECTILE", "SINGLE", "HOMING", "BUFF_STACK"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "PROJECTILE", "SEPARATOR", "PER_HIT", "BUFF_STACK"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 스킬이 적중하면 [[BUFF_STACK]]. \n [[BUFF_STACK]]당 [[AS_UP]]. (최대 5스택) \n \n",

          "Q는 [[PROJECTILE]] 발사. \n [[DMG_PHYSICAL]]와 모든 스킬 [[CDR]] 1.5초. \n 이 공격에는 [[ON_HIT]] 효과가 발동. \n \n",

          "W는 [[PIERCE_MINION]] [[PROJECTILE]] 발사. \n 챔피언, 에픽 몬스터, 구조물에게 [[MARK]]. \n [[BA]] 또는 스킬 적중 시 [[MARK_CONSUME]]하여 [[DMG_MAGIC]].", 
          "스킬로 [[MARK_CONSUME]]를 하면 \n 발동시킨 스킬 비용 + 60만큼 [[MANA_RESTORE]]. \n \n",

          "E는 [[BLINK]]하고 가장 가까운 대상에게 [[PROJECTILE]] 발사. \n W의 [[MARK]]이 있다면 우선순위. \n [[PROJECTILE]]에 적중하면 [[DMG_MAGIC]].", 
          "[[CC_BUFFER]]로 일부 CC 무시 가능. \n \n",

          "R은 사거리 [[GLOBAL]] [[PIERCE]] [[PROJECTILE]] 발사. \n 적중하면 [[DMG_MAGIC]]. \n (에픽몬스터를 제외한 정글몬스터에게 피해감소)",
        ],

        en: [
          "P grants a [[BUFF_STACK]] on skill hit. \n [[AS_UP]] per [[BUFF_STACK]]. (Max 5 stacks) \n \n",
          "Q fires a [[PROJECTILE]]. \n [[DMG_PHYSICAL]] and 1.5 seconds of [[CDR]] on all skills. \n This attack applies [[ON_HIT]] effects. \n \n",
          "W fires a [[PIERCE_MINION]] [[PROJECTILE]]. \n Applies a [[MARK]] to champions, epic monsters, and structures. \n Hitting with a [[BA]] or skill [[MARK_CONSUME]]s it, dealing [[DMG_MAGIC]].",
          "When [[MARK_CONSUME]] is triggered by a skill, \n [[MANA_RESTORE]]s that skill's cost + 60. \n \n",
          "E [[BLINK]]s and fires a [[PROJECTILE]] at the nearest target. \n Prioritizes targets with W's [[MARK]]. \n The [[PROJECTILE]] deals [[DMG_MAGIC]] on hit.",
          "[[CC_BUFFER]] allows some CC to be ignored. \n \n",
          "R fires a [[GLOBAL]]-range [[PIERCE]] [[PROJECTILE]]. \n Deals [[DMG_MAGIC]] on hit. \n (Reduced damage to jungle monsters except epic monsters)",
        ]

      },

      note2: {
        ko: [
        "P의 [[BUFF_STACK]]을 5스택 유지가 중요.", 
        "[[R_FLASH]]은 기능적으로 가능하지만 \n [[PROJECTILE]]는 이전 위치에서 발사.", 

        "E 스킬은 2단계로 나뉨 준비 / [[BLINK]] 단계. \n 준비 단계에서 이즈리얼이 맞은 CC는 유효하지만 \n [[BLINK]] 단계가 발동되어 이동하는 것. \n [[BLINK]] 단계에는 CC 저항력 없음. \n [[BLINK]]했을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
      ],
        en: [
          "Maintaining 5 P [[BUFF_STACK]]s is important.",
          "[[R_FLASH]] technically works, \n but the [[PROJECTILE]] fires from the previous position.",
          "E has two phases: wind-up / [[BLINK]] phase. \n CC that hits Ezreal during the wind-up phase is valid, \n but the [[BLINK]] phase still triggers and he moves. \n There is no CC resistance during the [[BLINK]] phase. \n If CC duration remains after the [[BLINK]], the CC effect still applies.",
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

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Ezreal,
  // 스킬 수치 최근 변경 V26.09). DDragon effectBurn/vars가 비어 있어 위키 본문 수치로 채움.
  skillTooltip: {
    P: {
      ko: "이즈리얼이 스킬을 적중시킬 때마다 6초 동안 10%의 [[AS_UP]]를 얻습니다. \n (최대 5회 중첩, [[BUFF_STACK]])",
      en: "Each time Ezreal hits a skill, he gains 10% [[AS_UP]] for 6 seconds. \n (Stacks up to 5 times, [[BUFF_STACK]])",
    },
    Q: {
      ko: "이즈리얼이 에너지 화살을 발사하여 처음 적중한 적에게 20/45/70/95/120(+130% [[AD_SCALE]])(+40% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 이즈리얼의 스킬 재사용 대기시간을 1.5초 감소시킵니다. [[CDR]] \n 이 스킬은 [[ON_HIT]] 효과가 적용됩니다. \n \n 5.5/5.25/5/4.75/4.5초의 [[COOLDOWN]].",
      en: "Ezreal fires an energy bolt, dealing 20/45/70/95/120 (+130% [[AD_SCALE]]) (+40% [[AP_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit, \n and reducing his skill cooldowns by 1.5 seconds. [[CDR]] \n This skill applies [[ON_HIT]] effects. \n \n 5.5/5.25/5/4.75/4.5 second [[COOLDOWN]].",
    },
    W: {
      ko: "이즈리얼이 마법의 구체를 발사해 처음으로 적중한 챔피언이나 구조물, 에픽 정글 몬스터에게 4초 동안 남아 있게 합니다. \n 이즈리얼이 해당 대상에게 [[BA]]나 스킬을 적중시키면 구체가 폭발하며 80/135/190/245/300(+100% 추가 [[AD_SCALE]])(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 스킬로 구체를 폭발시키면 해당 스킬로 소모한 마나+60의 마나를 돌려받습니다. ([[MANA_RESTORE]]) \n \n 8초의 [[COOLDOWN]].",
      en: "Ezreal fires a magical orb that sticks to the first champion, structure, or epic jungle monster hit for 4 seconds. \n If Ezreal hits that target with a [[BA]] or skill, the orb detonates, dealing 80/135/190/245/300 (+100% bonus [[AD_SCALE]]) (+90% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Detonating the orb with a skill refunds that skill's mana cost + 60 mana. ([[MANA_RESTORE]]) \n \n 8 second [[COOLDOWN]].",
    },
    E: {
      ko: "이즈리얼이 [[BLINK]] 후 가장 가까이에 있는 적에게 화살을 발사하여 80/130/180/230/280(+60% 추가 [[AD_SCALE]])(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 화살은 정수의 흐름(W)의 [[MARK]]에 영향을 받은 대상을 우선적으로 공격합니다. \n \n 26/23/20/17/14초의 [[COOLDOWN]].",
      en: "Ezreal [[BLINK]]s, then fires a bolt at the nearest enemy, dealing 80/130/180/230/280 (+60% bonus [[AD_SCALE]]) (+75% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n The bolt prioritizes targets affected by Essence Flux (W)'s [[MARK]]. \n \n 26/23/20/17/14 second [[COOLDOWN]].",
    },
    R: {
      ko: "이즈리얼이 거대한 에너지파를 발사하여 350/550/750(+100% 추가 [[AD_SCALE]])(+110% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 미니언과 에픽 몬스터를 제외한 정글 몬스터에게는 150/225/300(+100% 추가 [[AD_SCALE]])(+110% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Ezreal fires a massive energy wave, dealing 350/550/750 (+100% bonus [[AD_SCALE]]) (+110% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Against minions and non-epic jungle monsters, it deals 150/225/300 (+100% bonus [[AD_SCALE]]) (+110% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default ezreal;
