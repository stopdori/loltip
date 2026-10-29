import type { ChampData } from "../interactions/types";

const lissandra: ChampData = {
  id: "lissandra",
  skills: {
    P: ["ST_CONDITIONAL", "SUMMON", "SEPARATOR", "SLOW"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ROOT"],
    E: ["RECAST_SWAP", "SEPARATOR", "BLINK", "WALL_HOP"],
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["R_FLASH", "STUN", "SEPARATOR", "ZONE", "SLOW"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: ["UNTARGETABLE", "TOWER_DODGE", "HEAL", "SEPARATOR", "ZONE", "SLOW"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: [] },
    ] },
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 얼음 노예 소환", en: "P Thrall Summon" }, tags: ["ST_CONDITIONAL", "SUMMON"] },
      { label: { ko: "P 얼음 노예 효과", en: "P Thrall Effect" }, tags: ["HOMING", "DOT", "ZONE", "SLOW", "SEPARATOR", "DETONATE", "DMG_MAGIC"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE", "SLOW"] },
      { label: { ko: "Q 관통 파편", en: "Q Piercing Shard" }, tags: ["DMG_MAGIC", "PIERCE", "PROJECTILE", "SLOW"] },
    ] },

    W: ["DMG_MAGIC", "AOE", "ROOT"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "PROJECTILE", "SEPARATOR", "RECAST_SWAP"] },
      { label: { ko: "E 위치 변환", en: "E Swap" }, tags: ["BLINK", "WALL_HOP"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["TIMING_CAST", "TARGETED", "SEPARATOR", "STUN", "KNOCKDOWN"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: ["TIMING_INSTANT", "TARGETED", "SEPARATOR", "UNTARGETABLE", "TOWER_DODGE", "HEAL"] },
      { label: { ko: "R 공통 장판", en: "R Shared Zone" }, tags: ["DOT", "ZONE", "DMG_MAGIC", "SLOW"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 리산드라 근처의 적 챔피언 [[ON_DEATH]] \n 상대를 따라다니는 노예 [[SUMMON]]. \n 노예는 [[AOE]] [[DOT]] [[SLOW]]. \n 잠시 뒤 [[DETONATE]] 하여 [[AOE]] [[DMG_MAGIC]]. \n \n",

          "Q는 전방에 [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[SLOW]]. \n 적중 시 뒤쪽에 [[PIERCE]] [[PROJECTILE]] 파편이 튀어 같은 효과. \n \n",

          "W는 리산드라 주변 \n [[AOE]] [[DMG_MAGIC]]와 [[ROOT]]. \n \n",

          "E는 갈퀴모양 [[PIERCE]] [[DMG_MAGIC]] [[PROJECTILE]] 발사. \n E [[SKILL_RECAST]] 시 갈퀴 위치로 [[BLINK]]. ([[RECAST_SWAP]]) \n \n",

          "R은 자신/상대 에게 시전 가능. \n 공통적으로 대상 발 밑에 [[ZONE]] 생성. \n [[AOE]] [[DOT]] [[SLOW]]와 [[DMG_MAGIC]].", 
          "R을 상대 챔피언에게 사용하면 대상은 [[STUN]].", 
          "R을 자신에게 사용하면 \n [[UNTARGETABLE]]가 되고 [[SELF_MISSING_HP_SCALE]] 비례 [[HEAL]].",
        ],

        en: [
          "P: On an enemy champion's [[ON_DEATH]] near Lissandra, \n [[SUMMON]]s a thrall that follows enemies. \n The thrall applies [[AOE]] [[DOT]] [[SLOW]]. \n After a moment, it [[DETONATE]]s for [[AOE]] [[DMG_MAGIC]]. \n \n",

          "Q fires a [[PROJECTILE]] forward. \n Deals [[DMG_MAGIC]] and [[SLOW]]. \n On hit, [[PIERCE]] [[PROJECTILE]] shards burst behind the target with the same effect. \n \n",

          "W, around Lissandra, \n deals [[AOE]] [[DMG_MAGIC]] and [[ROOT]]. \n \n",

          "E fires a claw-shaped [[PIERCE]] [[DMG_MAGIC]] [[PROJECTILE]]. \n On E [[SKILL_RECAST]], [[BLINK]]s to the claw's location. ([[RECAST_SWAP]]) \n \n",

          "R can be cast on herself / an enemy. \n Either way, creates a [[ZONE]] beneath the target. \n Applies [[AOE]] [[DOT]] [[SLOW]] and [[DMG_MAGIC]].",
          "When R is cast on an enemy champion, the target is [[STUN]]ned.",
          "When R is cast on herself, \n she becomes [[UNTARGETABLE]] and [[HEAL]]s based on [[SELF_MISSING_HP_SCALE]].",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]] 안됨", 
        "P는 처치 관여하지 않아도 얼음 노예 [[SUMMON]].\n [[AOE]]는 1350.", 
        "P와 R의 [[SLOW]]는 지속 [[AOE]] [[SLOW]].", 
        "R은 적에게 사용할때 [[TIMING_CAST]]이 있음. \n 그래서 상대에게는 [[R_FLASH]] 가능. \n 자신에게 쓸 때는 즉시시전이라 [[R_FLASH]] 불가능.",
        "R은 상대에게 쓰나 자신에게 쓰나 데미지 차이가 없음. \n 심지어 대상과 대상 주변의 피해량이 같음."
      ],
        en: [
        "[[W_FLASH]] not possible",
        "P [[SUMMON]]s an ice thrall even without kill participation.\n [[AOE]] range is 1350.",
        "P's and R's [[SLOW]] are persistent [[AOE]] [[SLOW]].",
        "R has [[TIMING_CAST]] when cast on an enemy. \n So [[R_FLASH]] is possible on enemies. \n When cast on herself, it's instant, so [[R_FLASH]] is not possible.",
        "R deals the same damage whether cast on an enemy or on herself. \n Even the damage to the target and to those around it is identical."
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_lissandrapassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.10)로 채움(CDragon 게임 데이터 lissandra.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "리산드라 주변의 적 챔피언은 [[ON_DEATH]] 살아있는 적을 쫓는 얼음 노예가 됩니다. ([[SUMMON]]) \n \n 얼음 노예는 근처 적들을 25% [[DOT]] [[SLOW]]시키고, \n 4초 후 [[DETONATE]]하며 120~520([[LEVEL_SCALE]] 비례)(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다.",
      en: "Enemy champions near Lissandra become ice thralls on [[ON_DEATH]], chasing living enemies. ([[SUMMON]]) \n \n Thralls [[DOT]] [[SLOW]] nearby enemies by 25%, \n and [[DETONATE]] after 4 seconds, dealing 120~520 (based on [[LEVEL_SCALE]]) (+50% [[AP_SCALE]]) [[DMG_MAGIC]].",
    },
    Q: {
      ko: "리산드라가 처음으로 적에게 적중하면 부서지는 얼음창을 던져 80/115/150/185/220(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 1.5초 동안 20/24/28/32/36% [[SLOW]]시킵니다. \n \n 대상 뒤의 적들에게도 [[DMG_MAGIC]]와 [[SLOW]]시킵니다. \n \n 7/6/5/4/3초의 [[COOLDOWN]].",
      en: "Lissandra throws a spear of ice that shatters on the first enemy hit, dealing 80/115/150/185/220 (+75% [[AP_SCALE]]) [[DMG_MAGIC]], \n and [[SLOW]]ing them by 20/24/28/32/36% for 1.5 seconds. \n \n Enemies behind the target also take [[DMG_MAGIC]] and are [[SLOW]]ed. \n \n 7/6/5/4/3 second [[COOLDOWN]].",
    },
    W: {
      ko: "리산드라가 얼음 지대를 생성해 1.25/1.35/1.45/1.55/1.65초 동안 근처 적들을 [[ROOT]]하고, \n 70/105/140/175/210(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "Lissandra freezes the ground, [[ROOT]]ing nearby enemies for 1.25/1.35/1.45/1.55/1.65 seconds, \n and dealing 70/105/140/175/210 (+70% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
    },
    E: {
      ko: "리산드라가 전방으로 얼음갈퀴를 던져 70/105/140/175/210(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n E [[SKILL_RECAST]] 시 얼음갈퀴의 현재 위치로 [[BLINK]]합니다. ([[RECAST_SWAP]]) \n \n 24/21/18/15/12초의 [[COOLDOWN]].",
      en: "Lissandra casts an ice claw forward, dealing 70/105/140/175/210 (+60% [[AP_SCALE]]) [[DMG_MAGIC]]. \n On E [[SKILL_RECAST]], she [[BLINK]]s to the claw's current location. ([[RECAST_SWAP]]) \n \n 24/21/18/15/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "리산드라가 자신 또는 적 챔피언을 얼음으로 감쌉니다. \n \n 적에게 사용하면 1.5초 동안 [[STUN]]시키고, \n \n 자신에게 사용하면 2.5초 동안 [[UNTARGETABLE]]가 되어 체력을 100/150/200(+55% [[AP_SCALE]]) [[HEAL]]합니다. \n 회복량은 [[SELF_MISSING_HP_SCALE]] 1%당 1%씩 증가합니다. (최대 200/300/400(+110% [[AP_SCALE]])) \n \n 그 다음 검은 얼음이 대상에게서 번져나가 150/250/350(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. ([[ZONE]]) \n 얼음은 3초 동안 유지되며 적들을 45/60/75% [[DOT]] [[SLOW]]시킵니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Lissandra encases herself or an enemy champion in ice. \n \n Cast on an enemy, it [[STUN]]s them for 1.5 seconds, \n \n Cast on herself, she enters [[UNTARGETABLE]] for 2.5 seconds and [[HEAL]]s 100/150/200 (+55% [[AP_SCALE]]) HP. \n The heal increases by 1% per 1% of [[SELF_MISSING_HP_SCALE]]. (Max 200/300/400 (+110% [[AP_SCALE]])) \n \n Then dark ice spreads from the target, dealing 150/250/350 (+75% [[AP_SCALE]]) [[DMG_MAGIC]]. ([[ZONE]]) \n The ice lasts 3 seconds and [[DOT]] [[SLOW]]s enemies by 45/60/75%. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default lissandra;
