import type { ChampData } from "../interactions/types";

const aurora: ChampData = {
  id: "aurora",
  skills: {
    P: ["ST_CONDITIONAL", "HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "GHOSTING", "INVISIBILITY", "SEPARATOR", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "DASH", "WALL_HOP", "CC_BUFFER"],
    R: ["SLOW", "SEPARATOR", "DASH", "WALL_HOP", "UNSTOPPABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "UNTARGETABLE", "DASH", "WALL_HOP"],
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
      { label: { ko: "P 디버프 스택", en: "P Debuff Stack" }, tags: ["DEBUFF_STACK"] },
      { label: { ko: "P 디버프 스택 발동", en: "P Debuff Stack Trigger" }, tags: ["STACK_CONSUME", "DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    ] },

    Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "DEBUFF_STACK", "MARK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST", "RECAST_TRIGGER"] },
      { label: { ko: "오는 Q", en: "Return Q" }, tags: ["MARK_CONSUME", "DMG_MAGIC", "PROJECTILE", "PIERCE", "DEBUFF_STACK"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W 버프", en: "W Buff" }, tags: ["MS_UP", "GHOSTING", "INVISIBILITY"] },
      { label: { ko: "W 돌진", en: "W Dash" }, tags: ["DASH", "WALL_HOP", "SEPARATOR", "ON_TAKEDOWN", "CDR_RESET"] },
    ] },

    E: { phases: [
      { label: { ko: "E 준비 단계", en: "Wind-up" }, tags: ["TIMING_CAST", "LOCKED", "CC_BUFFER"] },
      { label: { ko: "E 후진 단계", en: "Retreat" }, tags: ["DMG_MAGIC", "AOE", "DEBUFF_STACK", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

    R: { phases: [
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DEBUFF_STACK", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP", "UNSTOPPABLE"], },
      { label: { ko: "R 경계넘기", en: "Zone Dash" }, tags: ["ST_CONDITIONAL", "UNTARGETABLE", "DASH", "WALL_HOP"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P의 [[DEBUFF]]가 3스택이 되면 추가 [[DMG_MAGIC]]. \n 챔피언에게서 발동하면 [[DMG_MAGIC]], [[HEAL]]. \n [[BA]], [[Q]], [[E]], [[R]]로 부여. \n \n",

          "Q1은 전방에 [[PIERCE]] [[PROJECTILE]] 발사. \n 적중 시 [[DMG_MAGIC]], P의 [[DEBUFF_STACK]], [[MARK]].", 

          "Q2는 [[MARK]]이 있을 때 Q키를 [[SKILL_RECAST]]해서 [[RECAST_TRIGGER]]. \n 또는 지속시간 종료 시 자동으로 [[RECAST_TRIGGER]]. \n 오로라에게 돌아오는 [[PIERCE]] [[PROJECTILE]] 발사. \n [[PROJECTILE]]는 [[DMG_MAGIC]], P의 [[DEBUFF_STACK]] 부여. \n (여러 발일 수 있고, 피해가 감소한 중첩도 가능) \n \n",
          
          "W는 [[DASH]]하여 [[MS_UP]], [[GHOSTING]], [[INVISIBILITY]]. \n 3초 이내 챔피언 [[ON_TAKEDOWN]] 시 [[CDR_RESET]]. \n \n", 

          "E는 전방에 [[AOE]] [[DMG_MAGIC]], [[SLOW]], P의 [[DEBUFF_STACK]]. \n 잠시 후 뒤로 [[DASH]]. \n [[CC_BUFFER]]로 일부 CC 무시 가능. \n \n", 

          "R은 넓은 [[AOE]] [[ZONE]]을 펼침. \n 펼쳐질 때 적중하면 [[DMG_MAGIC]], [[SLOW]]. \n 적이 경계에 닿으면 [[EMPOWERED]] [[SLOW]]. \n 오로라가 닿으면 반대편으로 [[UNTARGETABLE]] [[DASH]]. \n R키로 [[SKILL_RECAST]] [[RECAST_CANCEL]] 가능.",
        ],

        en: [
          "When P's [[DEBUFF]] reaches 3 stacks, it deals bonus [[DMG_MAGIC]]. \n Triggering it on a champion also grants [[DMG_MAGIC]] and [[HEAL]]. \n Applied via [[BA]], [[Q]], [[E]], and [[R]]. \n \n",

          "Q1 fires a [[PIERCE]] [[PROJECTILE]] forward. \n On hit: [[DMG_MAGIC]], P's [[DEBUFF_STACK]], and [[MARK]].",

          "Q2 [[RECAST_TRIGGER]]s via Q's [[SKILL_RECAST]] while the [[MARK]] is active. \n Or automatically [[RECAST_TRIGGER]]s when the duration ends. \n Fires a [[PIERCE]] [[PROJECTILE]] back toward Aurora. \n The [[PROJECTILE]] deals [[DMG_MAGIC]] and applies P's [[DEBUFF_STACK]]. \n (Can hit multiple targets, with reduced damage on repeat hits) \n \n",

          "W [[DASH]]es, granting [[MS_UP]], [[GHOSTING]], and [[INVISIBILITY]]. \n An [[ON_TAKEDOWN]] on a champion within 3 seconds triggers [[CDR_RESET]]. \n \n",

          "E deals [[AOE]] [[DMG_MAGIC]], [[SLOW]], and P's [[DEBUFF_STACK]] in front. \n Shortly after, [[DASH]]es backward. \n [[CC_BUFFER]] lets it ignore some CC. \n \n",

          "R expands a wide [[AOE]] [[ZONE]]. \n Hitting enemies as it expands deals [[DMG_MAGIC]] and [[SLOW]]. \n Enemies touching the boundary take an [[EMPOWERED]] [[SLOW]]. \n Aurora touching it [[DASH]]es to the opposite side while [[UNTARGETABLE]]. \n Can [[SKILL_RECAST]] with R to [[RECAST_CANCEL]] it.",
        ]

      },

      note2: {
        ko: [
       "Q를 미니언과 상대 챔피언이 함께 맞도록 사용하고, \n [[MARK]]이 [[RECAST_TRIGGER]]해서 돌아올 때 중첩해서 맞도록 유도하면 좋음. \n W로 각도를 비틀어서 맞추면 좋음.", 
       "W, E, R의 [[DASH]] 거리는 \n W = 300 고정, E = 250 고정, R = 250 ~ 450 \n 즉, R은 커서 위치에 따라 [[DASH]] 거리가 다름.", 
       "E 스킬은 2단계로 나뉨 준비/후진. \n 준비 단계에서 오로라가 맞은 CC는 유효 하지만 \n 후진 단계가 발동되어 뒤로 이동하는 것. \n 후진 단계에는 CC 저항력 없음.", 
       "R은 원래 설명에 [[UNSTOPPABLE]]가 없지만, \n 스킬을 시전할때 오로라 체력바 위에 [[UNSTOPPABLE]]가 생김. \n (처음 도약하며 경계를 펼칠 때만)."
      ],
        en: [
          "Use Q so both a minion and the enemy champion get hit, \n and when the [[MARK]] [[RECAST_TRIGGER]]s back, aim to land it on them again for overlapping damage. \n Angling with W can help land it.",
          "The [[DASH]] distance for W/E/R is: \n W = fixed 300, E = fixed 250, R = 250~450 \n meaning R's [[DASH]] distance varies with cursor position.",
          "E has two phases: Wind-up / Retreat. \n CC applied to Aurora during the wind-up phase still counts, \n but the retreat phase still triggers and moves her backward. \n There is no CC resistance during the retreat phase.",
          "R's tooltip doesn't originally mention [[UNSTOPPABLE]], but \n the [[UNSTOPPABLE]] icon appears above Aurora's health bar when the skill is cast. \n (Only during the initial leap when expanding the boundary.)"
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

  // skillTooltip 근거: DDragon P/Q/W/E/R 전부 vars가 빈 배열이고 effectBurn도
  // "0"으로 깨져 있어 위키(wiki.leagueoflegends.com/en-us/Aurora, V25.22 기준)
  // 정보박스 수치로 채웠다(Notes 섹션 제외). R 하단부는 위키 fetch가 잘려서
  // 자동요약된 부분(넉백 75, Realm Hopper 이속 2배 등)이 있었는데, 원문과
  // 모순되고 신뢰할 수 없어 전부 배제하고 verbatim으로 확인된 수치만 반영했다.
  // R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "오로라의 평타와 스킬이 적에게 적중하면 4초 지속되는 [[DEBUFF_STACK]] 1개를 부여한다(최대 3개, 적중 시 [[DURATION_RESET]]). \n 3개가 쌓이면 [[STACK_CONSUME]]하여 [[TARGET_MAXHP_SCALE]] 1%(+주문력 100당 2.7%)만큼의 추가 [[DMG_MAGIC]]를 입힌다(몬스터 상대로는 [[LEVEL_SCALE]] 100~270 고정 상한). \n \n 챔피언에게서 [[STACK_CONSUME]]하면 추가로 영혼을 방출해 4초간 오로라를 따라다니는 [[BUFF_STACK]](영혼) 1개를 얻으며(최대 4개, 새로 방출될 때마다 지속시간 전체 갱신), 영혼 하나당 매초 3~20([[LEVEL_SCALE]])(+2% [[AP_SCALE]])만큼 [[HEAL]]된다(최대 4개 시 초당 12~80(+8% [[AP_SCALE]])).",
      en: "Aurora's basic attacks and abilities landing on enemies apply 1 stack of [[DEBUFF_STACK]] lasting 4 seconds (max 3 stacks, [[DURATION_RESET]] on hit). \n At 3 stacks, [[STACK_CONSUME]]s them for bonus [[DMG_MAGIC]] equal to 1% of the target's [[TARGET_MAXHP_SCALE]] (+2.7% per 100 AP) (capped at [[LEVEL_SCALE]] 100~270 against monsters). \n \n [[STACK_CONSUME]]ing on a champion additionally releases a spirit, granting a [[BUFF_STACK]] (Spirit) that follows Aurora for 4 seconds (max 4, each new one refreshes the full duration for all) — each Spirit [[HEAL]]s her for 3~20 ([[LEVEL_SCALE]]) (+2% [[AP_SCALE]]) per second (12~80 (+8% [[AP_SCALE]]) per second at max 4).",
    },
    Q: {
      ko: "오로라가 지정 방향으로 [[DMG_MAGIC]] 탄환을 발사해 45/70/95/120/145(+40% [[AP_SCALE]])의 피해를 입히고 P의 [[DEBUFF_STACK]] 1개와 3.5초간 [[MARK]](저주)를 건다. \n \n 저주는 0.1초 후부터 [[SKILL_RECAST]] 하여 [[RECAST_TRIGGER]] 가능하며(지속시간이 끝나면 자동 시전), 저주 건 모든 대상으로부터 영혼을 끌어당겨 [[PIERCE]]하는 경로의 적에게 P의 [[DEBUFF_STACK]] 1개와 [[TARGET_MISSING_HP_SCALE]]으로 45~217.5(+40~60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다(미니언 40%, 몬스터 50%로 감소, 이미 맞은 대상에게 재적중 시 20%로 감소). \n \n 9/8.5/8/7.5/7초의 [[COOLDOWN]].",
      en: "Aurora fires a [[DMG_MAGIC]] bolt in a chosen direction, dealing 45/70/95/120/145 (+40% [[AP_SCALE]]) damage and applying 1 stack of P's [[DEBUFF_STACK]] plus a 3.5 second [[MARK]] (Curse). \n \n Starting 0.1 seconds later, the Curse can be [[RECAST_TRIGGER]]ed via [[SKILL_RECAST]] (auto-casts when the duration ends), pulling spirits from all Cursed targets and firing a [[PIERCE]] projectile back along that path, dealing 45~217.5 (+40~60% [[AP_SCALE]]) [[DMG_MAGIC]] scaling with [[TARGET_MISSING_HP_SCALE]] and applying 1 stack of P's [[DEBUFF_STACK]] to enemies hit (reduced to 40% against minions, 50% against monsters, and 20% on repeat hits to an already-hit target). \n \n 9/8.5/8/7.5/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "오로라가 지정 방향으로 [[DASH]]하여 정령계로 진입해 1~1.6초([[LEVEL_SCALE]]) 동안 [[INVISIBILITY]] 상태가 되며, 4초간 [[GHOSTING]] 상태로 20~40%([[LEVEL_SCALE]])의 [[MS_UP]]를 얻는다. \n 최근(3초 이내) 챔피언 [[ON_TAKEDOWN]] 시 [[CDR_RESET]]. \n \n 22/21/20/19/18초의 [[COOLDOWN]].",
      en: "Aurora [[DASH]]es in a chosen direction into the Spirit Realm, becoming [[INVISIBILITY|invisible]] for 1~1.6 seconds ([[LEVEL_SCALE]]) and gaining [[GHOSTING]] with 20~40% ([[LEVEL_SCALE]]) [[MS_UP]] for 4 seconds. \n A recent (within 3 seconds) champion [[ON_TAKEDOWN]] triggers [[CDR_RESET]]. \n \n 22/21/20/19/18 second [[COOLDOWN]].",
    },
    E: {
      ko: "오로라가 직선으로 정령 마법을 시전해 적에게 70/110/150/190/230(+70% [[AP_SCALE]])의 [[AOE]] [[DMG_MAGIC]]를 입히고 80%의 [[SLOW]]를 걸며(1초, 첫 0.15초 이후부터 감소), P의 [[DEBUFF_STACK]] 1개를 부여하고, 시전 후 반대 방향으로 250만큼 [[DASH]]한다. \n \n 15/14/13/12/11초의 [[COOLDOWN]].",
      en: "Aurora casts a line of spirit magic, dealing 70/110/150/190/230 (+70% [[AP_SCALE]]) [[AOE]] [[DMG_MAGIC]] to enemies hit and applying 80% [[SLOW]] (1 second, decaying after the first 0.15 seconds), granting 1 stack of P's [[DEBUFF_STACK]], then [[DASH]]es 250 units in the opposite direction after casting. \n \n 15/14/13/12/11 second [[COOLDOWN]].",
    },
    R: {
      ko: "오로라가 지정 방향으로 0.4초에 걸쳐 [[UNSTOPPABLE]] 상태로 [[DASH]]한 뒤, 전방에서 0.75초에 걸쳐 퍼지는 충격파로 175/275/375(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 2초간 30%의 [[SLOW]]를 건다. \n \n 착지 후 3.5/4.25/5초간 [[GHOSTING]] 상태의 [[BUFF_FORM]](Realm Hopper)을 얻으며, 충격파 자리에 1.75/2.5/3.25초간 유지되는 균열을 남긴다. 이 균열의 경계에 적이 부딪히면 1.5/1.75/2초간 50%의 [[SLOW]]를 받는다. \n 오로라가 부딪히면 반대편으로 0.4초에 걸쳐 [[UNTARGETABLE]] [[DASH]]한다. \n \n R 버튼으로 [[SKILL_RECAST]]하여 균열을 [[RECAST_CANCEL]]할 수 있다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Aurora [[DASH]]es in a chosen direction over 0.4 seconds while [[UNSTOPPABLE]], then a shockwave spreads forward over 0.75 seconds, dealing 175/275/375 (+70% [[AP_SCALE]]) [[DMG_MAGIC]] and applying 30% [[SLOW]] for 2 seconds. \n \n After landing, she gains a [[GHOSTING]] [[BUFF_FORM]] (Realm Hopper) for 3.5/4.25/5 seconds, and leaves a rift where the shockwave landed that lasts 1.75/2.5/3.25 seconds. Enemies touching the rift's boundary take 50% [[SLOW]] for 1.5/1.75/2 seconds. \n Aurora touching it [[DASH]]es to the opposite side over 0.4 seconds while [[UNTARGETABLE]]. \n \n Pressing R again [[SKILL_RECAST]]s to [[RECAST_CANCEL]] the rift early. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default aurora;
