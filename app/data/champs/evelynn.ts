import type { ChampData } from "../interactions/types";

const evelynn: ChampData = {
  id: "evelynn",
  skills: {
    P: ["ST_CONDITIONAL", "CAMOUFLAGE", "SEPARATOR", "ST_CONDITIONAL", "HP_REGEN"],
    Q: [],
    W: ["W_FLASH", "MARK", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CHARM", "MR_SHRED"],

    E: { phases: [
      { label: { ko: "E", en: "E"  }, tags: ["E_FLASH", "MS_UP"] },
      { label: { ko: "E 강화", en: "Empowered E"  }, tags: ["E_FLASH", "MS_UP", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

    R: ["UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "BLINK", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "CAMOUFLAGE", "SEPARATOR", "ST_CONDITIONAL", "HP_REGEN"],

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "X3", "SEPARATOR", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["DMG_MAGIC", "PIERCE", "PROJECTILE", "HOMING"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["TARGETED", "TIMING_CAST", "MARK"] },
      { label: { ko: "W 표식 소모", en: "W Mark Consume" }, tags: ["MARK_CONSUME", "SEPARATOR", "SLOW", "MANA_RESTORE"] },
      { label: { ko: "W 표식 소모 (강화)", en: "W Mark Consume (Empowered)" }, tags: ["MARK_CONSUME", "SEPARATOR", "SLOW", "MANA_RESTORE", "SEPARATOR", "CHARM", "MR_SHRED"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "MS_UP"] },
      { label: { ko: "E 강화", en: "Empowered E"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "AOE", "MS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

    R: { phases: [
      { label: { ko: "R 타겟 불가 단계", en: "R Untargetable Phase" }, tags: ["UNTARGETABLE"] },
      { label: { ko: "R 전방 피해 단계", en: "R Frontal Damage Phase" }, tags: ["UNTARGETABLE", "SEPARATOR", "DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC"] },
      { label: { ko: "R 순간이동 단계", en: "R Blink Phase" }, tags: ["UNTARGETABLE", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR", "P", "CDR"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 4초간 [[OUT_OF_COMBAT]] 시 악의 장막 [[BUFF]]. \n 이때 일정 체력 이하라면 [[HP_REGEN]]. \n 6레벨부터 [[CAMOUFLAGE]] 추가. \n \n",

          "Q는 [[PROJECTILE]]를 발사. \n [[DMG_MAGIC]]와 [[DEBUFF_STACK]] 3개. \n [[DEBUFF_STACK]]은 이블린의 [[BA]], 스킬에 소모되어 [[DMG_MAGIC]] 추가.  \n 이후 3번을 추가로 [[SKILL_RECAST]]할 수 있음. (Q2)", 
          "Q2는 가장 최근에 피해를 입힌 챔피언 \n 또는 가장 가까운 적에게 \n [[PIERCE]] [[PROJECTILE]] 발사하여 [[DMG_MAGIC]]. \n \n",

          "W는 대상에게 [[MARK]]. \n [[BA]]나 스킬로 때리면 \n [[SLOW]]와 W의 마나소모량 [[MANA_RESTORE]].", 
          "[[MARK]]은 2.5초 지나면 [[EMPOWERED]] \n [[CHARM]], [[MR_SHRED]] 추가. \n (몬스터는 [[DMG_MAGIC]] 추가) \n \n",

          "E는 [[TARGETED]] [[DMG_MAGIC]]와 [[MS_UP]].", 
          "P의 [[BUFF]]가 활성화 되면 \n E가 [[CDR_RESET]]되고 [[EMPOWERED]]. \n [[DMG_MAGIC]]가 강해지고 \n [[DASH]]하여 경로의 대상에게 같은 피해. \n \n",

          "R은 즉시 [[UNTARGETABLE]]가 되고 \n 전방 반원 [[AOE]]에 [[DMG_MAGIC]]. \n 체력이 30% 이하인 적에게는 추가 [[DMG_MAGIC]]. \n 이후 뒤로 [[BLINK]]. \n P의 [[BUFF]] [[COOLDOWN]]이 1.25초로 감소.",
        ],

        en: [
          "After 4 seconds [[OUT_OF_COMBAT]], P grants the Demon Shade [[BUFF]]. \n If below a certain health threshold at this time, [[HP_REGEN]]. \n From level 6, [[CAMOUFLAGE]] is added. \n \n",
          "Q fires a [[PROJECTILE]]. \n [[DMG_MAGIC]] and 3 [[DEBUFF_STACK]]s. \n The [[DEBUFF_STACK]]s are consumed by Evelynn's [[BA]]s and skills, adding [[DMG_MAGIC]].  \n Afterward, it can be [[SKILL_RECAST]] 3 more times. (Q2)",
          "Q2 fires a [[PIERCE]] [[PROJECTILE]] \n at the champion most recently damaged \n or the nearest enemy, dealing [[DMG_MAGIC]]. \n \n",
          "W applies a [[MARK]] to the target. \n Hitting it with a [[BA]] or skill \n applies [[SLOW]] and [[MANA_RESTORE]]s W's mana cost.",
          "After 2.5 seconds, the [[MARK]] becomes [[EMPOWERED]], \n adding [[CHARM]] and [[MR_SHRED]]. \n (Against monsters, adds [[DMG_MAGIC]]) \n \n",
          "E deals [[TARGETED]] [[DMG_MAGIC]] and grants [[MS_UP]].",
          "When P's [[BUFF]] activates, \n E gets a [[CDR_RESET]] and becomes [[EMPOWERED]]. \n [[DMG_MAGIC]] is stronger, \n and she [[DASH]]es, dealing the same damage to targets in her path. \n \n",
          "R makes Evelynn instantly [[UNTARGETABLE]] \n and deals [[DMG_MAGIC]] in a frontal semicircle [[AOE]]. \n Bonus [[DMG_MAGIC]] against enemies below 30% health. \n Then she [[BLINK]]s backward. \n P's [[BUFF]] [[COOLDOWN]] is reduced to 1.25 seconds.",
        ]

      },

      note2: {
        ko: [
        "[[CAMOUFLAGE]] 중 점멸을 사용해도 [[CAMOUFLAGE]]이 풀리지 않음.", 
        "E의 [[DASH]]은 정말 어려운 조건에서 [[WALL_HOP]] 가능."
      ],
        en: [
          "Using Flash while in [[CAMOUFLAGE]] does not break [[CAMOUFLAGE]].",
          "E's [[DASH]] can [[WALL_HOP]] under very specific conditions.",
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

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Evelynn,
  // 스킬 수치 최근 변경 V25.S1.3). W/R 일부는 DDragon effectBurn과 위키가 일치, 나머지는 위키 본문/템플릿 수치로 채움.
  skillTooltip: {
    P: {
      ko: "이블린은 [[OUT_OF_COMBAT]] 상태일 때(4초) 악의 장막에 휩싸입니다. \n 악의 장막에 싸이면 낮은 체력(250~590([[LEVEL_SCALE]] 비례)(+250% [[AP_SCALE]]) 미만)에서 초당 15~150([[LEVEL_SCALE]] 비례)의 체력이 [[HEAL]]되며 \n 6레벨부터는 [[CAMOUFLAGE]] 효과도 제공합니다.",
      en: "When [[OUT_OF_COMBAT]] (4 seconds), Evelynn is shrouded in Demon Shade. \n While in Demon Shade at low health (below 250~590 (based on [[LEVEL_SCALE]]) (+250% [[AP_SCALE]])), she [[HEAL]]s 15~150 (based on [[LEVEL_SCALE]]) health per second, \n and from level 6 it also grants [[CAMOUFLAGE]].",
    },
    Q: {
      ko: "이블린이 가시를 발사해 처음 적중한 유닛에게 25/30/35/40/45(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 그 후 동일 대상에게 가하는 이블린의 다음 세 번의 [[BA]] 또는 스킬이 15/25/35/45/55(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n 이블린이 증오의 가시를 최대 3번까지 [[SKILL_RECAST]]할 수 있습니다. \n \n [[SKILL_RECAST]] 시: 이블린이 발사한 가시가 가장 가까운 적을 [[PIERCE]]하고 적중한 모든 적에게 25/30/35/40/45(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 4초의 [[COOLDOWN]].",
      en: "Evelynn fires a spike, dealing 25/30/35/40/45 (+25% [[AP_SCALE]]) [[DMG_MAGIC]] to the first unit hit. \n Evelynn's next three [[BA]]s or skills against that target deal an additional 15/25/35/45/55 (+25% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Evelynn can [[SKILL_RECAST]] Hate Spike up to 3 times. \n \n On [[SKILL_RECAST]]: Evelynn fires a spike that [[PIERCE]]s toward the nearest enemy, dealing 25/30/35/40/45 (+25% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemies hit. \n \n 4 second [[COOLDOWN]].",
    },
    W: {
      ko: "챔피언 또는 몬스터에게 5초 동안 [[MARK]]을 남깁니다. \n 표식을 남긴 대상에게 [[BA]]를 가하거나 스킬을 사용하면 표식이 사라지며 소모했던 만큼 [[MANA_RESTORE]]하고 0.75초 동안 대상을 45% [[SLOW]]시킵니다. \n \n 표식이 2.5초 이상 지속된 후 공격하면 다음 효과가 추가로 적용됩니다. \n 적 챔피언: 1.25/1.5/1.75/2/2.25초 동안 대상을 [[CHARM]]하고 4초 동안 35/37.5/40/42.5/45%의 [[MR_SHRED]]를 적용합니다. \n 몬스터: 3.5/3.75/4/4.25/4.5초 동안 대상을 [[CHARM]]하고 250/300/350/400/450(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 15/14/13/12/11초의 [[COOLDOWN]].",
      en: "Leaves a [[MARK]] on a champion or monster for 5 seconds. \n Hitting the marked target with a [[BA]] or skill consumes the mark, refunding its mana cost ([[MANA_RESTORE]]) and [[SLOW]]ing the target by 45% for 0.75 seconds. \n \n If the mark has lasted at least 2.5 seconds before the attack, the following additional effects apply. \n Enemy champions: [[CHARM]]ed for 1.25/1.5/1.75/2/2.25 seconds and affected by 35/37.5/40/42.5/45% [[MR_SHRED]] for 4 seconds. \n Monsters: [[CHARM]]ed for 3.5/3.75/4/4.25/4.5 seconds and take 250/300/350/400/450 (+60% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 15/14/13/12/11 second [[COOLDOWN]].",
    },
    E: {
      ko: "이블린이 채찍으로 적을 가격하여 60/90/120/150/180+[[TARGET_MAXHP_SCALE]]의 3%(+주문력 100당 1.5%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n 이후 이블린이 2초 동안 30/35/40/45/50%의 [[MS_UP]]를 얻습니다. \n \n 악의 장막이 활성화되면 이 스킬이 [[CDR_RESET]]되고 [[EMPOWERED]]됩니다. \n [[EMPOWERED]]된 스킬을 사용하면 이블린이 대상에게 [[DASH]]하며, 대상 및 경로에 있는 모든 적에게 80/120/160/200/240+[[TARGET_MAXHP_SCALE]]의 4%(+주문력 100당 2.5%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 8초의 [[COOLDOWN]].",
      en: "Evelynn lashes an enemy with her whip, dealing 60/90/120/150/180 + 3% (+1.5% per 100 AP) of [[TARGET_MAXHP_SCALE]] as [[DMG_MAGIC]]. \n Evelynn then gains 30/35/40/45/50% [[MS_UP]] for 2 seconds. \n \n When Demon Shade activates, this skill gets a [[CDR_RESET]] and becomes [[EMPOWERED]]. \n Using the [[EMPOWERED]] skill makes Evelynn [[DASH]] to the target, dealing 80/120/160/200/240 + 4% (+2.5% per 100 AP) of [[TARGET_MAXHP_SCALE]] as [[DMG_MAGIC]] to the target and all enemies in her path. \n \n 8 second [[COOLDOWN]].",
    },
    R: {
      ko: "이블린이 악마의 기운을 방출해 [[UNTARGETABLE]] 상태가 되며 125/250/375(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌 다음 뒤로 이동합니다. \n 체력이 30% 이하인 적들에게는 피해량이 300/600/900(+180% [[AP_SCALE]])까지 증가합니다. \n 사용 시 악의 장막에 1.25초 재사용 대기시간이 적용됩니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Evelynn unleashes demonic energy, becoming [[UNTARGETABLE]] and dealing 125/250/375 (+75% [[AP_SCALE]]) [[DMG_MAGIC]], then moving backward. \n Against enemies at or below 30% health, damage increases to 300/600/900 (+180% [[AP_SCALE]]). \n On cast, Demon Shade is put on a 1.25 second cooldown. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default evelynn;
