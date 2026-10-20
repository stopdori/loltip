import type { ChampData } from "../interactions/types";

const karma: ChampData = {
  id: "karma",
  skills: {
    P: ["CDR", "R"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "SLOW"] },
      { label: { ko: "Q 만트라", en: "Mantra Q" }, tags: ["Q_FLASH", "SLOW"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "TETHER", "TRUE_SIGHT", "ROOT"] },
      { label: { ko: "W 만트라", en: "Mantra W" }, tags: ["W_FLASH", "TETHER", "TRUE_SIGHT", "ROOT", "HEAL", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["E_FLASH", "SHIELD", "MS_UP"] },
      { label: { ko: "E 만트라", en: "Mantra E" }, tags: ["E_FLASH", "SHIELD", "MS_UP", "SEPARATOR", "AOE", "SHIELD", "MS_UP"] },
    ] },
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "CDR", "R"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "SLOW"] },
      { label: { ko: "Q 만트라", en: "Mantra Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "SLOW"] },
      { label: { ko: "Q 만트라 장판", en: "Mantra Q Zone" }, tags: ["ZONE", "DOT", "SLOW", "SEPARATOR", "ST_DELAYED", "DMG_MAGIC"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "TETHER", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "ROOT"] },
      { label: { ko: "W 만트라", en: "Mantra W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "TETHER", "HEAL", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "ROOT", "HEAL"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TARGETED", "SHIELD", "MS_UP"] },
      { label: { ko: "E 만트라", en: "Mantra E" }, tags: ["TARGETED", "SHIELD", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "AOE", "OF_ALLY", "SHIELD", "MS_UP"] },
    ] },

    R: ["EMPOWERED", "Q", "W", "E", "SEPARATOR", "LOCKED"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 1레벨부터 R을 배우고 시작. \n R은 다음 스킬 [[EMPOWERED]]. \n [[ON_CHAMP_HIT]] R의 [[CDR]]. (1명당 4초) \n \n",

          "Q는 [[PROJECTILE]] 발사. \n 적중 시 [[DETONATE]] [[DMG_MAGIC]]와 [[SLOW]].", 
          "Q [[EMPOWERED]]는 적중 시 [[DMG_MAGIC]] 추가와 [[ZONE]]을 남김. \n [[ZONE]]은 [[DOT]] [[SLOW]]. \n 잠시 후 발동해서 [[DMG_MAGIC]]. \n \n",

          "W는 [[TARGETED]] [[TETHER]] [[TRUE_SIGHT]]. \n [[DMG_MAGIC]]와 끊어지지 않으면 [[ROOT]].", 
          "W [[EMPOWERED]]는 적중 시 [[SELF_MISSING_HP_SCALE]] 비례 [[HEAL]] 추가. \n 끊어지지 않으면 다시 [[HEAL]]하고 더 긴 [[ROOT]]시간. \n \n",

          "E는 [[SHIELD]]와 [[MS_UP]].", 
          "E [[EMPOWERED]]는 대상에게 2배의 [[SHIELD]]와 일반 [[MS_UP]]. \n 주변 아군들에게도 감소된 [[SHIELD]], [[MS_UP]]. \n \n",

          "R을 사용하면 다음 Q, W, E를 [[EMPOWERED]]. \n [[LOCKED]].",
        ],

        en: ["P starts with R learned from level 1. \n R makes the next skill [[EMPOWERED]]. \n [[ON_CHAMP_HIT]] grants R [[CDR]]. (4s per champion) \n \n",
          "Q fires a [[PROJECTILE]]. \n On hit, it [[DETONATE]]s for [[DMG_MAGIC]] and [[SLOW]].",
          "Q [[EMPOWERED]] adds [[DMG_MAGIC]] on hit and leaves a [[ZONE]]. \n The [[ZONE]] applies [[DOT]] [[SLOW]]. \n Shortly after, it triggers to deal [[DMG_MAGIC]]. \n \n",
          "W is a [[TARGETED]] [[TETHER]] with [[TRUE_SIGHT]]. \n [[DMG_MAGIC]], and [[ROOT]] if unbroken.",
          "W [[EMPOWERED]] adds a [[HEAL]] based on [[SELF_MISSING_HP_SCALE]] on hit. \n If unbroken, Karma [[HEAL]]s again with a longer [[ROOT]] duration. \n \n",
          "E grants a [[SHIELD]] and [[MS_UP]].",
          "E [[EMPOWERED]] grants the target double [[SHIELD]] and normal [[MS_UP]]. \n Nearby allies also receive reduced [[SHIELD]] and [[MS_UP]]. \n \n",
          "Using R [[EMPOWERED]]s the next Q, W, or E. \n [[LOCKED]]."
        ]

      },

      note2: {
        ko: [
      ],
        en: [],
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 38,
    11: 36,
    16: 34,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_karmapassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.10)로 채움(CDragon 게임 데이터 karma.bin.json과 일치 확인).
  // R(만트라)은 1레벨부터 4랭크(40/38/36/34)라 6/11/16 3칸인 ultCooldown 대신 직접 기입.
  skillTooltip: {
    P: {
      ko: "카르마는 만트라(R) 스킬을 가지고 게임을 시작합니다. \n \n 챔피언에게 스킬로 피해를 입히면 맞힌 챔피언 하나당 만트라(R)의 재사용 대기시간이 4초 줄어듭니다. ([[CDR]])",
      en: "Karma starts the game with Mantra (R). \n \n Damaging champions with skills reduces Mantra (R)'s cooldown by 4 seconds per champion hit. ([[CDR]])",
    },
    Q: {
      ko: "카르마가 에너지 구체를 발사하여 처음 적중한 대상과 그 주변 적들에게 60/110/160/210/260(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 1.5초 동안 40% [[SLOW]]시킵니다. \n \n Q - [[EMPOWERED]] \n 40/100/160/220(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입히고 원형의 불꽃을 남깁니다. ([[ZONE]]) \n 불꽃은 적들을 50% [[SLOW]]시키고 40/130/220/310(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n 불꽃은 1.5초 동안 유지된 뒤 [[DETONATE]]합니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Karma fires an orb of energy, dealing 60/110/160/210/260 (+70% [[AP_SCALE]]) [[DMG_MAGIC]] to the first target hit and nearby enemies, \n and [[SLOW]]s them by 40% for 1.5 seconds. \n \n Q - [[EMPOWERED]] \n Deals an additional 40/100/160/220 (+30% [[AP_SCALE]]) [[DMG_MAGIC]] and leaves a ring of flame. ([[ZONE]]) \n The flames [[SLOW]] enemies by 50% and deal an additional 40/130/220/310 (+50% [[AP_SCALE]]) [[DMG_MAGIC]]. \n The flames last 1.5 seconds and then [[DETONATE]]. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    W: {
      ko: "카르마가 챔피언이나 정글 몬스터와 자신을 연결하여([[TETHER]]) 40/65/90/115/140(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 2초 동안 모습을 드러냅니다. ([[REVEALED]]) \n 연결이 끊어지지 않으면 대상은 다시 40/65/90/115/140(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입고 1.6/1.7/1.8/1.9/2초 동안 [[ROOT]]됩니다. \n \n W - [[EMPOWERED]] \n 카르마가 지속시간 처음과 끝에 [[SELF_MISSING_HP_SCALE]] 비례의 17%(+[[AP_SCALE]] 100당 1%)를 [[HEAL]]하고, \n 0.5/0.75/1/1.25초 더 [[ROOT]]합니다. \n \n 12초의 [[COOLDOWN]].",
      en: "Karma tethers herself to a champion or jungle monster ([[TETHER]]), dealing 40/65/90/115/140 (+45% [[AP_SCALE]]) [[DMG_MAGIC]], \n and reveals them for 2 seconds. ([[REVEALED]]) \n If the tether isn't broken, the target takes another 40/65/90/115/140 (+45% [[AP_SCALE]]) [[DMG_MAGIC]] and is [[ROOT]]ed for 1.6/1.7/1.8/1.9/2 seconds. \n \n W - [[EMPOWERED]] \n Karma [[HEAL]]s for 17% (+1% per 100 [[AP_SCALE]]) of [[SELF_MISSING_HP_SCALE]] at the start and end of the duration, \n and [[ROOT]]s for an additional 0.5/0.75/1/1.25 seconds. \n \n 12 second [[COOLDOWN]].",
    },
    E: {
      ko: "카르마가 아군 챔피언에게 2.5초 동안 80/130/180/230/280(+60% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 씌우고, \n 2초 동안 [[MS_SCALE]]를 40% 상승시킵니다. \n \n E - [[EMPOWERED]] \n 카르마가 대상에게 피해를 45/85/125/165(+45% [[AP_SCALE]])만큼 더 흡수하는 [[SHIELD]]를 씌웁니다. \n 주변 아군에게도 45/85/125/165(+45% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 씌우고 [[MS_SCALE]]를 15% 상승시킵니다. \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "Karma grants an allied champion a [[SHIELD]] that absorbs 80/130/180/230/280 (+60% [[AP_SCALE]]) damage for 2.5 seconds, \n and increases their [[MS_SCALE]] by 40% for 2 seconds. \n \n E - [[EMPOWERED]] \n Karma grants the target a [[SHIELD]] that absorbs an additional 45/85/125/165 (+45% [[AP_SCALE]]) damage. \n Nearby allies also gain a [[SHIELD]] that absorbs 45/85/125/165 (+45% [[AP_SCALE]]) damage and have their [[MS_SCALE]] increased by 15%. \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "카르마가 8초 동안 다음 Q, W, E 스킬을 [[EMPOWERED]]합니다. \n \n 40/38/36/34초의 [[COOLDOWN]].",
      en: "Karma [[EMPOWERED]]s her next Q, W, or E skill within 8 seconds. \n \n 40/38/36/34 second [[COOLDOWN]].",
    },
  },

};

export default karma;
