import type { ChampData } from "../interactions/types";

const fizz: ChampData = {
  id: "fizz",
  skills: {
    P: ["GHOSTING", "DMG_REDUCE"],
    Q: ["Q_FLASH", "DASH", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"],
    W: ["AA_RESET", "ON_HIT", "SEPARATOR", "ON_KILL", "MANA_RESTORE", "CDR"],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "RECAST_CANCEL"] },
      { label: { ko: "E2", en: "E2" }, tags: ["E_FLASH", "UNTARGETABLE", "SEPARATOR", "DASH", "WALL_HOP", "ST_CONDITIONAL", "SLOW"] },
    ] },
    R: { phases: [
      { label: { ko: "R 미끼 투척", en: "R Bait Throw" }, tags: ["R_FLASH"] },
      { label: { ko: "R 미끼 부착 대상", en: "R Bait-Attached Target" }, tags: ["TRUE_SIGHT", "SLOW", "SEPARATOR", "AIRBORNE", "SLOW"] },
      { label: { ko: "R 미끼 부착 대상 주변", en: "R Around Bait-Attached Target" }, tags: ["KNOCKBACK", "SLOW"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: ["GHOSTING", "DMG_REDUCE"],

    Q: ["DMG_MAGIC", "TARGETED", "ON_HIT", "DASH", "SEPARATOR", "ST_CONDITIONAL", "WALL_HOP"],

    W: { phases: [
      { label: { ko: "W 기본효과", en: "W Passive" }, tags: ["PASSIVE_BONUS", "DOT", "DMG_MAGIC", "ON_HIT"] },
      { label: { ko: "W 사용", en: "W Active" }, tags: ["AA_RESET", "DMG_MAGIC", "ON_HIT", "SEPARATOR", "ON_KILL", "MANA_RESTORE", "CDR"] },
    ] },

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["UNTARGETABLE", "TOWER_DODGE", "RECAST_CANCEL", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "E2 (재시전)", en: "E2 (Recast)" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "E2", en: "E2" }, tags: ["ST_DELAYED", "DMG_MAGIC", "AOE", "SLOW", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

    R: 
    
    { phases: [
      { label: { ko: "R 미끼 투척", en: "R Bait Throw" }, tags: ["TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "SLOW"] },
      { label: { ko: "R 미끼 부착 대상", en: "R Bait-Attached Target" }, tags: [ "TRUE_SIGHT", "SLOW"] },
      { label: { ko: "R 대상 상어 깨물기", en: "R Shark Bite on Target" }, tags: ["DMG_MAGIC", "SLOW", "AIRBORNE"] },
      { label: { ko: "R 주변 상어 깨물기", en: "R Shark Bite Around Target" }, tags:["DMG_MAGIC", "AOE", "SLOW", "KNOCKBACK"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[GHOSTING]]와 \n 모든 공격에 대해 [[DMG_REDUCE]]. (최대 50%) \n \n",

          "Q는 대상을 지나치는 \n [[TARGETED]] [[DASH]] [[DMG_MAGIC]]. \n 이 공격에는 [[ON_HIT]] 효과가 발동. \n \n",

          "W의 [[PASSIVE_BONUS]]는 [[ON_HIT]] [[DOT]] [[DMG_MAGIC]].", 
          
          "W는 다음 [[BA]] [[EMPOWERED]]하여 [[DMG_MAGIC]]. \n [[ON_KILL]] [[MANA_RESTORE]], 1초로 [[CDR]]. \n 처치하지 못하면 [[BUFF]] 생성. \n  [[BUFF]]는 [[ON_HIT]] 시 [[DMG_MAGIC]] 추가. \n \n", 

          "E는 [[UNTARGETABLE]] 상태로 [[DASH]]. \n 잠시 후 착지하면서 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 우클릭으로 방향을 지정하면 \n 착지 [[AOE]] 이동 가능.", 
          "E [[RECAST_CANCEL]]로 일찍 종료하면 \n 좁은 [[AOE]] [[DMG_MAGIC]]. \n [[SLOW]] 효과 없음. \n \n",

          "R은 지정한 위치에 미끼([[PROJECTILE]]) 투척. \n 위치에 도착하기 전에 적 챔피언이 닿으면 [[ATTACH]]. \n [[DISTANCE_SCALE]]에 비례한 [[SLOW]].", 
          "[[ATTACH]] 시 카운팅하고 상어가 튀어나와 \n 대상은 [[AIRBORNE]] \n 주변은 [[AOE]] [[KNOCKBACK]]. \n [[DISTANCE_SCALE]]에 비례한 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]].", 
          "부착되지 않으면 \n 미끼가 도착한 곳에 [[ZONE]] 생성. \n [[AOE]] [[KNOCKBACK]]과 \n [[DISTANCE_SCALE]]에 비례한 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]].",
        ],

        en: [
          "P grants [[GHOSTING]] and \n [[DMG_REDUCE]] against all attacks. (Up to 50%) \n \n",
          "Q is a [[TARGETED]] [[DASH]] \n that passes through the target, dealing [[DMG_MAGIC]]. \n This attack applies [[ON_HIT]] effects. \n \n",
          "W's [[PASSIVE_BONUS]] applies [[ON_HIT]] [[DOT]] [[DMG_MAGIC]].",
          "W makes the next [[BA]] [[EMPOWERED]], dealing [[DMG_MAGIC]]. \n [[ON_KILL]]: [[MANA_RESTORE]] and [[CDR]] to 1 second. \n If it doesn't kill, grants a [[BUFF]]. \n  The [[BUFF]] adds [[DMG_MAGIC]] [[ON_HIT]]. \n \n",
          "E [[DASH]]es while [[UNTARGETABLE]]. \n Shortly after, Fizz lands, dealing [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n Right-clicking to set a direction \n moves the landing [[AOE]].",
          "Ending E early with [[RECAST_CANCEL]] \n deals a narrow [[AOE]] [[DMG_MAGIC]]. \n No [[SLOW]] effect. \n \n",
          "R throws a bait ([[PROJECTILE]]) to the target location. \n If it touches an enemy champion before arriving, it [[ATTACH]]es. \n [[SLOW]] based on [[DISTANCE_SCALE]].",
          "On [[ATTACH]], a countdown starts and a shark erupts: \n the target is [[AIRBORNE]], \n and nearby enemies take an [[AOE]] [[KNOCKBACK]]. \n [[AOE]] [[DMG_MAGIC]] and [[SLOW]] based on [[DISTANCE_SCALE]].",
          "If it doesn't attach, \n a [[ZONE]] is created where the bait lands. \n [[AOE]] [[KNOCKBACK]], and \n [[AOE]] [[DMG_MAGIC]] and [[SLOW]] based on [[DISTANCE_SCALE]].",
        ]

      },

      note2: {
        ko: [
        "Q의 [[WALL_HOP]]는 \n 벽 넘어 대상에게 시전해야지만 발동. \n 아니면 [[WALL_HOP]]가 발동하지 않음.", 
        "E의 [[SLOW]]는 재사용 없이 착지해야만 적용.", 
        "R은 마우스를 멀리놓고 사용해야 멀리 발사."
      ],
        en: [
          "Q's [[WALL_HOP]] only triggers \n when cast on a target across a wall. \n Otherwise, [[WALL_HOP]] does not trigger.",
          "E's [[SLOW]] only applies if Fizz lands without recasting.",
          "Place the mouse far away when using R to throw it far.",
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

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Fizz,
  // 최근 변경 V26.04). Q 마법 피해는 DDragon effectBurn, 나머지는 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_fizzpassive_tooltip)을 사용.
  // R은 위키 템플릿 원자료에 5랭크 값이 섞여 있으나 페이지 표시값(3랭크)을 채택.
  skillTooltip: {
    P: {
      ko: "피즈가 [[GHOSTING]] 상태가 되고 모든 공격으로부터 받는 피해가 4(+1% [[AP_SCALE]])만큼 [[DMG_REDUCE]]됩니다.",
      en: "Fizz becomes [[GHOSTING]], and damage taken from all attacks is [[DMG_REDUCE]]d by 4 (+1% [[AP_SCALE]]).",
    },
    Q: {
      ko: "피즈가 적을 관통하며 [[DASH]]해 100% [[AD_SCALE]]의 [[DMG_PHYSICAL]]에 10/25/40/55/70(+55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 이 스킬은 [[ON_HIT]] 효과가 적용됩니다. \n \n 8/7.5/7/6.5/6초의 [[COOLDOWN]].",
      en: "Fizz [[DASH]]es through an enemy, dealing 100% [[AD_SCALE]] [[DMG_PHYSICAL]] plus an additional 10/25/40/55/70 (+55% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n This skill applies [[ON_HIT]] effects. \n \n 8/7.5/7/6.5/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 피즈가 적에게 [[BA]]를 가하면 출혈을 일으켜 3초 동안 30/45/60/75/90(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 사용 시: 피즈의 다음 [[BA]]가 50/75/100/125/150(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n 이 공격으로 대상을 처치하면 피즈가 30/40/50/60/70의 마나를 돌려받고 이 스킬의 재사용 대기시간이 1초로 감소합니다. \n 대상을 처치하지 못하면 피즈의 [[BA]]가 5초 동안 20/25/30/35/40(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 7/6/5/4/3초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Fizz's [[BA]]s cause enemies to bleed, dealing 30/45/60/75/90 (+25% [[AP_SCALE]]) [[DMG_MAGIC]] over 3 seconds. \n \n Active: Fizz's next [[BA]] deals an additional 50/75/100/125/150 (+45% [[AP_SCALE]]) [[DMG_MAGIC]]. \n If this attack kills the target, Fizz is refunded 30/40/50/60/70 mana and this skill's cooldown is reduced to 1 second. \n If it doesn't kill the target, Fizz's [[BA]]s deal an additional 20/25/30/35/40 (+30% [[AP_SCALE]]) [[DMG_MAGIC]] for 5 seconds. \n \n 7/6/5/4/3 second [[COOLDOWN]].",
    },
    E: {
      ko: "피즈가 삼지창 위에 서고 0.75초 동안 [[UNTARGETABLE]] 상태가 됩니다. \n 이후 근처 적에게 80/130/180/230/280(+95% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 2초 동안 40/45/50/55/60% [[SLOW]]시킵니다. \n \n 피즈가 [[UNTARGETABLE]] 상태에서 이 스킬을 [[RECAST_CANCEL]]하면 다시 [[DASH]]하면서 효과가 일찍 끝나며 보다 작은 [[AOE]]에 피해를 입히고 [[SLOW]] 효과를 적용하지 않습니다. \n \n 16/14/12/10/8초의 [[COOLDOWN]].",
      en: "Fizz hops onto his trident and becomes [[UNTARGETABLE]] for 0.75 seconds. \n He then deals 80/130/180/230/280 (+95% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies and [[SLOW]]s them by 40/45/50/55/60% for 2 seconds. \n \n If Fizz [[RECAST_CANCEL]]s this skill while [[UNTARGETABLE]], he [[DASH]]es again and the effect ends early, dealing damage in a smaller [[AOE]] without applying the [[SLOW]] effect. \n \n 16/14/12/10/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "피즈가 물고기를 풀어 처음으로 부딪힌 챔피언에게 붙게 합니다. \n 대상 챔피언은 [[TRUE_SIGHT]]의 영향을 받으며 물고기가 대상에게 붙기 전 이동한 [[DISTANCE_SCALE]]에 비례해 40%~80% [[SLOW]]됩니다. \n \n 2초 후 상어가 튀어나와 물고기가 붙은 대상을 1초 동안 [[AIRBORNE]]시키고 다른 대상을 모두 [[KNOCKBACK]]시키며 물고기가 대상에게 붙기 전 이동한 [[DISTANCE_SCALE]]에 비례해 180/300/420(+60% [[AP_SCALE]])~270/450/630(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Fizz releases a fish that attaches to the first champion it hits. \n The target is affected by [[TRUE_SIGHT]] and [[SLOW]]ed by 40%~80% based on the [[DISTANCE_SCALE]] the fish traveled before attaching. \n \n After 2 seconds, a shark erupts, knocking the target [[AIRBORNE]] for 1 second and [[KNOCKBACK]]ing all other targets, dealing 180/300/420 (+60% [[AP_SCALE]]) ~ 270/450/630 (+90% [[AP_SCALE]]) [[DMG_MAGIC]] based on the [[DISTANCE_SCALE]] the fish traveled before attaching. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default fizz;
