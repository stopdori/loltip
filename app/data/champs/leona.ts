import type { ChampData } from "../interactions/types";

const leona: ChampData = {
  id: "leona",
  skills: {
    P: ["MARK"],
    Q: ["AA_RESET", "STUN"],
    W: ["DMG_REDUCE", "AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "DURATION_EXT"],
    E: ["E_FLASH", "ROOT", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "CC_BUFFER"],
    R: ["R_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
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
      { label: { ko: "P 표식", en: "P Mark" }, tags: ["MARK"] },
      { label: { ko: "P 표식 폭발", en: "P Mark Burst" }, tags: ["MARK_CONSUME", "DMG_MAGIC"] },
    ] },

    Q: ["AA_RESET", "SEPARATOR", "DMG_MAGIC", "ON_HIT"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_REDUCE", "AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "DURATION_EXT"] },
      { label: { ko: "W 폭발", en: "W Burst" }, tags: ["ST_DELAYED", "DMG_MAGIC", "AOE"] },
    ] },

    E: { phases: [
      { label: { ko: "E 찌르기 단계", en: "E Stab Phase" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "PROJECTILE", "SEPARATOR", "ROOT", "SEPARATOR", "CC_BUFFER"] },
      { label: { ko: "E 돌진 단계",   en: "E Dash Phase" }, tags: ["DASH", "WALL_HOP"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 스킬이 적중한 적에게 [[MARK]]. \n [[MARK]]은 아군이 공격하면 소모하여 [[DMG_MAGIC]]. \n \n",

          "Q는 다음 [[BA]]를 [[EMPOWERED]] \n 공격 시 [[DMG_MAGIC]]와 [[STUN]]. \n \n",

          "W는 받는 [[DMG_REDUCE]]와 [[AR_MR_UP]]. \n [[DETONATE]]하여 [[AOE]] [[DMG_MAGIC]].", 
          "적이 하나라도 맞으면 \n [[DMG_REDUCE]]와 [[AR_MR_UP]] [[DURATION_EXT]]. \n \n",

          "E는 전방에 검을 찔러 \n [[PIERCE]] [[DMG_MAGIC]] [[PROJECTILE]] 공격. \n 마지막에 맞은 챔피언은 [[ROOT]]. \n 레오나가 대상에게 [[HOMING]] [[DASH]]. \n \n",

          "R은 [[ZONE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 중앙에 맞은 대상은 [[SLOW]] 대신 [[STUN]].",
        ],

        en: [
          "P applies [[MARK]] to enemies hit by skills. \n When an ally attacks, the [[MARK]] is consumed to deal [[DMG_MAGIC]]. \n \n",

          "Q makes the next [[BA]] [[EMPOWERED]], \n dealing [[DMG_MAGIC]] and [[STUN]] on attack. \n \n",

          "W grants [[DMG_REDUCE]] and [[AR_MR_UP]]. \n It then [[DETONATE]]s, dealing [[AOE]] [[DMG_MAGIC]].",
          "If it hits at least one enemy, \n [[DMG_REDUCE]] and [[AR_MR_UP]] get [[DURATION_EXT]]. \n \n",

          "E thrusts a sword forward, \n a [[PIERCE]] [[DMG_MAGIC]] [[PROJECTILE]] attack. \n The last champion hit is [[ROOT]]ed. \n Leona [[HOMING]] [[DASH]]es to the target. \n \n",

          "R deals [[ZONE]] [[DMG_MAGIC]] and [[SLOW]]. \n Targets hit at the center are [[STUN]]ned instead of [[SLOW]]ed.",
        ]

      },

      note2: {
        ko: [
        "E 스킬은 2단계로 나뉨 찌르기/돌진. \n 찌르기 단계에서 레오나가 맞은 CC는 유효 하지만 \n 돌진 단계가 발동되어 앞으로 이동하는 것. \n 돌진 단계에는 CC 저항력 없음."
      ],
        en: [
          "E has two phases: stab / dash. \n CC that hits Leona during the stab phase is registered, \n but the dash phase still activates and she moves forward. \n The dash phase has no CC resistance."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 90,
    11: 75,
    16: 60,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본(햇빛 1.5초는 옛 값)이라 CDragon ko_kr
  // lol.stringtable.json의 spell_leonasunlightpassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V25.20, 햇빛 2.5초는 V25.09)로 채움(CDragon 게임 데이터 leona.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "레오나의 스킬은 적에게 2.5초 동안 [[MARK]]를 남깁니다. \n 아군 챔피언이 공격할 경우 [[MARK]]를 터트리면서([[MARK_CONSUME]]) 적에게 32~151([[LEVEL_SCALE]] 비례)의 [[DMG_MAGIC]]를 추가로 입힙니다.",
      en: "Leona's skills leave a [[MARK]] on enemies for 2.5 seconds. \n When an allied champion attacks, the [[MARK]] bursts ([[MARK_CONSUME]]), dealing an additional 32~151 (based on [[LEVEL_SCALE]]) [[DMG_MAGIC]] to the enemy.",
    },
    Q: {
      ko: "레오나가 다음 [[BA]]를 [[EMPOWERED]]합니다. \n [[BA]] 공격 시 1초 동안 적을 [[STUN]]시키고 10/35/60/85/110(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 5초의 [[COOLDOWN]].",
      en: "Leona [[EMPOWERED]]s her next [[BA]]. \n On [[BA]] attack, it [[STUN]]s the enemy for 1 second and deals an additional 10/35/60/85/110 (+30% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 5 second [[COOLDOWN]].",
    },
    W: {
      ko: "레오나가 방패를 들어 받는 피해량을 8/12/16/20/24 감소시키고 ([[DMG_REDUCE]]), 3초 동안 [[AR_MR_SCALE]] 20/27.5/35/42.5/50(+추가 [[AR_SCALE]]·[[MR_SCALE]]의 20%)을 얻습니다. \n \n 잠시 후, 방패가 [[DETONATE]]하며 주변 적들에게 55/85/115/145/175(+40% [[AP_SCALE]])의 [[AOE]] [[DMG_MAGIC]]를 입힙니다. \n \n 적이 한 명이라도 공격에 적중당한 경우, [[AR_MR_UP]] 효과가 3초 더 유지됩니다. ([[DURATION_EXT]]) \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Leona raises her shield, reducing incoming damage by 8/12/16/20/24 ([[DMG_REDUCE]]) and gaining 20/27.5/35/42.5/50 (+20% of bonus [[AR_SCALE]]·[[MR_SCALE]]) [[AR_MR_SCALE]] for 3 seconds. \n \n Shortly after, the shield [[DETONATE]]s, dealing 55/85/115/145/175 (+40% [[AP_SCALE]]) [[AOE]] [[DMG_MAGIC]] to nearby enemies. \n \n If at least one enemy is hit, the [[AR_MR_UP]] effect lasts 3 seconds longer. ([[DURATION_EXT]]) \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "레오나가 빛의 검을 날려 50/90/130/170/210(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 마지막으로 맞은 챔피언은 0.5초 동안 [[ROOT]]되며 레오나가 그쪽으로 [[DASH]]합니다. \n \n 12/10.5/9/7.5/6초의 [[COOLDOWN]].",
      en: "Leona flings a blade of light, dealing 50/90/130/170/210 (+40% [[AP_SCALE]]) [[DMG_MAGIC]]. \n The last champion hit is [[ROOT]]ed for 0.5 seconds and Leona [[DASH]]es to them. \n \n 12/10.5/9/7.5/6 second [[COOLDOWN]].",
    },
    R: {
      ko: "태양 에너지를 소환하여 눈부신 광선으로 적에게 150/225/300(+80% [[AP_SCALE]])의 [[AOE]] [[DMG_MAGIC]]를 입히고, \n 1.75초 동안 80%만큼 [[SLOW]]시킵니다. \n 폭발의 중앙에 있는 적들은 [[SLOW]]되지 않고 [[STUN]]합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Leona calls down a beam of solar energy, dealing 150/225/300 (+80% [[AP_SCALE]]) [[AOE]] [[DMG_MAGIC]] to enemies, \n and [[SLOW]]ing them by 80% for 1.75 seconds. \n Enemies in the center of the blast are [[STUN]]ned instead of [[SLOW]]ed. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default leona;
