import type { ChampData } from "../interactions/types";

const katarina: ChampData = {
  id: "katarina",
  skills: {
    P: ["ON_TAKEDOWN", "CDR", "ALL_SKILLS"],
    Q: ["Q_FLASH", "DROP", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    W: ["MS_UP", "DROP"],
    E: ["E_FLASH", "AA_RESET", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["GW"],
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
      { label: { ko: "P 단검 줍기", en: "P Dagger Pickup" }, tags: ["ST_CONDITIONAL", "CDR", "ALL_SKILLS"] },
      { label: { ko: "P 단검 줍기 공격", en: "P Dagger Pickup Attack" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },
    
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "DROP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],

    W: ["MS_UP", "DROP"],

    E: ["AA_RESET", "SEPARATOR", "DMG_MAGIC", "ON_HIT", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],

    R: ["SKILL_CHANNEL", "PROJECTILE", "SWARM", "CANCELLABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "DMG_MAGIC", "ON_HIT", "GW"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 3초 안에 [[ON_TAKEDOWN]] 모든스킬 [[CDR]].", 
          "단검([[DROP]])을 주우면 [[AOE]] [[DMG_MAGIC]]. \n \n",

          "Q는 [[TARGETED]] 하여 단검 [[PROJECTILE]]를 발사. \n [[DMG_MAGIC]]를 주고 주변 2명에게 [[CHAIN]] 가능. \n 첫대상 뒤에 단검 [[DROP]]. \n \n",

          "W는 [[MS_UP]]. \n 발 밑에 단검 [[DROP]]. \n \n",

          "E는 대상에게 [[BLINK]]. \n 대상이 적이라면 [[DMG_MAGIC]]. \n 적이 아니라면 주변에 가장 가까운 적을 공격하여 [[DMG_MAGIC]]. \n 단검([[DROP]])을 주우면 [[CDR]]. \n [[AA_RESET]] 가능. \n \n",

          "R은 [[SKILL_CHANNEL]]하여 최대 3명의 적 챔피언에게 \n [[DMG_MAGIC]]와 [[DMG_PHYSICAL]]를 입히는 [[GW]] [[PROJECTILE]] 발사.",
        ],

        en: ["P: [[ON_TAKEDOWN]] within 3 seconds grants all-skill [[CDR]].",
          "Picking up a dagger ([[DROP]]) deals [[AOE]] [[DMG_MAGIC]]. \n \n",
          "Q fires a dagger [[PROJECTILE]] at a [[TARGETED]] enemy. \n Deals [[DMG_MAGIC]] and can [[CHAIN]] to 2 nearby enemies. \n A dagger [[DROP]]s behind the first target. \n \n",
          "W grants [[MS_UP]]. \n A dagger [[DROP]]s at her feet. \n \n",
          "E [[BLINK]]s to a target. \n If the target is an enemy, deals [[DMG_MAGIC]]. \n Otherwise, attacks the nearest enemy, dealing [[DMG_MAGIC]]. \n Picking up a dagger ([[DROP]]) grants [[CDR]]. \n Can [[AA_RESET]]. \n \n",
          "R [[SKILL_CHANNEL]]s, firing [[GW]] [[PROJECTILE]]s that deal \n [[DMG_MAGIC]] and [[DMG_PHYSICAL]] to up to 3 enemy champions."
        ]

      },

      note2: {
        ko: [
        "E는 아군, 적, 단검([[DROP]]), 중립 식생에 사용 가능. \n 와드는 불가능.", 
        "단검([[DROP]])은 [[ALLY_TP_OK]] 불가.",
        "R의 [[SKILL_CHANNEL]]은 움직이면 취소."
      ],
        en: ["E can be used on allies, enemies, daggers ([[DROP]]), and neutral plants. \n Not on wards.",
          "Daggers ([[DROP]]) are not [[ALLY_TP_OK]].",
          "R's [[SKILL_CHANNEL]] is canceled if Katarina moves."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 75,
    11: 60,
    16: 45,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_katarinapassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.08)로 채움(CDragon 게임 데이터 katarina.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "카타리나가 3초 안에 [[ON_TAKEDOWN]] \n 카타리나의 스킬 재사용 대기시간이 15초 감소합니다. ([[CDR]]) \n \n 카타리나가 단검([[DROP]])을 다시 주우면 근처의 적을 모두 공격해, \n 68~240([[LEVEL_SCALE]] 비례)(+60% 추가 [[AD_SCALE]])(+70/80/90/100% [[AP_SCALE]], [[LEVEL_SCALE]] 비례)의 [[DMG_MAGIC]]를 입힙니다.",
      en: "If Katarina gets an [[ON_TAKEDOWN]] within 3 seconds, \n her skill cooldowns are reduced by 15 seconds. ([[CDR]]) \n \n When Katarina picks up a dagger ([[DROP]]) again, she strikes all nearby enemies, \n dealing 68~240 (based on [[LEVEL_SCALE]]) (+60% bonus [[AD_SCALE]]) (+70/80/90/100% [[AP_SCALE]], based on [[LEVEL_SCALE]]) [[DMG_MAGIC]].",
    },
    Q: {
      ko: "카타리나가 단검을 던져 대상과 주변 2명의 적에게 80/115/150/185/220(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. ([[CHAIN]]) \n 그 후 단검은 최초 대상 뒤에 떨어집니다. ([[DROP]]) \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Katarina throws a dagger, dealing 80/115/150/185/220 (+40% [[AP_SCALE]]) [[DMG_MAGIC]] to the target and 2 nearby enemies. ([[CHAIN]]) \n The dagger then lands behind the initial target. ([[DROP]]) \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "카타리나가 공중에 단검을 던지고([[DROP]]) [[MS_SCALE]]가 50/60/70/80/90% 상승했다가 1.25초에 걸쳐 원래대로 돌아옵니다. \n \n 15/14/13/12/11초의 [[COOLDOWN]].",
      en: "Katarina tosses a dagger into the air ([[DROP]]), and her [[MS_SCALE]] increases by 50/60/70/80/90%, decaying back to normal over 1.25 seconds. \n \n 15/14/13/12/11 second [[COOLDOWN]].",
    },
    E: {
      ko: "카타리나가 아군, 적, 또는 단검에게 [[BLINK]]로 이동합니다. \n 대상이 적일 경우 20/30/40/50/60(+40% [[AD_SCALE]])(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 그 외의 경우에는 사거리 안에 있으면서 이동한 지점에서 가장 가까운 적을 공격합니다. \n \n 단검을 다시 주우면 이 스킬의 재사용 대기시간이 78/84/90/96%([[LEVEL_SCALE]] 비례) 줄어듭니다. ([[CDR]]) \n 카타리나는 대상 근처의 어느 지점으로든 순간적으로 이동할 수 있습니다. \n \n 이 스킬은 [[ON_HIT]] 효과가 적용됩니다. \n \n 12/11/10/9/8초의 [[COOLDOWN]].",
      en: "Katarina [[BLINK]]s to an ally, enemy, or dagger. \n If the target is an enemy, she deals 20/30/40/50/60 (+40% [[AD_SCALE]]) (+25% [[AP_SCALE]]) [[DMG_MAGIC]], \n otherwise she strikes the nearest enemy within range of the destination. \n \n Picking up a dagger again reduces this skill's cooldown by 78/84/90/96% (based on [[LEVEL_SCALE]]). ([[CDR]]) \n Katarina can instantly move to any point near the target. \n \n This skill applies [[ON_HIT]] effects. \n \n 12/11/10/9/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "카타리나가 칼날의 돌풍을 일으켜([[SKILL_CHANNEL]]) 매우 빠른 속도로 근처 적 챔피언 세 명을 단검으로 공격합니다. \n 각 단검은 25/37.5/50(+19% [[AP_SCALE]])의 [[DMG_MAGIC]] 및 16% 추가 [[AD_SCALE]](+추가 [[AS_SCALE]] 100%당 50%)의 [[DMG_PHYSICAL]]를 입히고, \n 3초 동안 40%의 고통스러운 상처([[GW]])를 남깁니다. \n \n 적 하나당 2.5초 동안 받는 총 피해량: \n 375/562.5/750(+285% [[AP_SCALE]])의 [[DMG_MAGIC]] 및 240% 추가 [[AD_SCALE]](+추가 [[AS_SCALE]] 100%당 750%)의 [[DMG_PHYSICAL]] \n \n 이 스킬은 [[ON_HIT]] 효과가 적용됩니다. (효율 25/30/35%) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Katarina creates a storm of blades ([[SKILL_CHANNEL]]), rapidly throwing daggers at the three nearest enemy champions. \n Each dagger deals 25/37.5/50 (+19% [[AP_SCALE]]) [[DMG_MAGIC]] and 16% bonus [[AD_SCALE]] (+50% per 100% bonus [[AS_SCALE]]) [[DMG_PHYSICAL]], \n and applies 40% Grievous Wounds ([[GW]]) for 3 seconds. \n \n Total damage per enemy over 2.5 seconds: \n 375/562.5/750 (+285% [[AP_SCALE]]) [[DMG_MAGIC]] and 240% bonus [[AD_SCALE]] (+750% per 100% bonus [[AS_SCALE]]) [[DMG_PHYSICAL]] \n \n This skill applies [[ON_HIT]] effects. (25/30/35% effectiveness) \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default katarina;
