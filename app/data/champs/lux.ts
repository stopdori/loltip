import type { ChampData } from "../interactions/types";

const lux: ChampData = {
  id: "lux",
  skills: {
    P: ["MARK"],
    Q: ["Q_FLASH", "ROOT", "SEPARATOR", "PIERCE_ONCE"],
    W: ["SHIELD"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["VISION"],
    R: ["VISION"],
  },

  gimmick: {
    P: ["MARK_CONSUME", "DMG_MAGIC"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "PIERCE_ONCE", "PROJECTILE", "ROOT", "SEPARATOR", "MARK"],

    W: ["PIERCE", "PROJECTILE", "SHIELD"],

    E: { phases: [
      { label: { ko: "E 투사체", en: "E Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ZONE", "DOT", "SLOW", "SEPARATOR", "RECAST_DETONATE", "E"] },
      { label: { ko: "E 폭발", en: "E Burst" }, tags: ["DMG_MAGIC", "AOE", "SLOW", "SEPARATOR", "MARK"] },
    ] },
    
    R: ["DMG_MAGIC", "PIERCE", "BEAM", "SEPARATOR", "MARK_CONSUME", "MARK"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 Q, E, R 스킬로 피해를 주면 [[MARK]]. \n [[BA]] 공격 시 [[MARK_CONSUME]]하여 [[DMG_MAGIC]]. \n \n",

          "Q는 [[PIERCE_ONCE]] [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[ROOT]]. \n \n",

          "W는 [[PIERCE]] [[PROJECTILE]] 발사. \n 적에게는 효과가 없고 \n 아군 챔피언은 [[SHIELD]]. \n \n",

          "E는 지정한 위치에 [[PROJECTILE]] 발사. \n 도착하면 [[ZONE]]으로 [[DOT]] [[SLOW]].", 
          "시간이 경과하거나 E [[RECAST_DETONATE]] 시 \n [[DETONATE]] 하여 [[DMG_MAGIC]]와 [[SLOW]]. \n \n",

          "R은 [[PIERCE]] [[DMG_MAGIC]] [[BEAM]] 발사. \n [[MARK]]이 있던 대상은 [[MARK_CONSUME]] 하고 다시 [[MARK]]을 남김.",
        ],

        en: [
          "P applies [[MARK]] when Q, E, or R deals damage. \n On [[BA]] attack, [[MARK_CONSUME]] to deal [[DMG_MAGIC]]. \n \n",

          "Q fires a [[PIERCE_ONCE]] [[PROJECTILE]]. \n [[DMG_MAGIC]] and [[ROOT]]. \n \n",

          "W fires a [[PIERCE]] [[PROJECTILE]]. \n It has no effect on enemies, \n and grants [[SHIELD]] to allied champions. \n \n",

          "E fires a [[PROJECTILE]] at the target location. \n On arrival, it creates a [[ZONE]] with [[DOT]] [[SLOW]].",
          "After a duration or on E [[RECAST_DETONATE]], \n it [[DETONATE]]s, dealing [[DMG_MAGIC]] and [[SLOW]]. \n \n",

          "R fires a [[PIERCE]] [[DMG_MAGIC]] [[BEAM]]. \n Targets with a [[MARK]] get [[MARK_CONSUME]] and a new [[MARK]] is applied.",
        ]

      },

      note2: {
        ko: [
        "E [[ZONE]]은 [[ALLY_TP]] 불가능."
      ],
        en: [
        "Cannot [[ALLY_TP]] onto the E [[ZONE]]."
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 60,
    11: 50,
    16: 40,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. P/Q/W/E/R 모두 DDragon(ko_KR, 16.20.1) 원문을 뼈대로 씀
  // (P 인게임 원문은 CDragon 문자열 테이블에서 찾지 못해 DDragon description 사용).
  // 수치는 공식 위키(V26.04)로 채움(CDragon 게임 데이터 lux.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "럭스의 공격 스킬은 6초 동안 적을 빛의 에너지로 가득 채웁니다. ([[MARK]]) \n 럭스의 [[BA]] 공격으로 이 에너지를 불태우면, ([[MARK_CONSUME]]) \n 적은 30~200([[LEVEL_SCALE]] 비례)(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 받습니다.",
      en: "Lux's damaging skills charge enemies with light energy for 6 seconds. ([[MARK]]) \n When Lux's [[BA]] attack ignites the energy, ([[MARK_CONSUME]]) \n the enemy takes an additional 30~200 (based on [[LEVEL_SCALE]]) (+35% [[AP_SCALE]]) [[DMG_MAGIC]].",
    },
    Q: {
      ko: "럭스가 빛의 구체를 발사하여 처음 적중한 적 둘을 2초 동안 [[ROOT]]하고, \n 각각 80/120/160/200/240(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 10초의 [[COOLDOWN]].",
      en: "Lux fires a sphere of light that [[ROOT]]s the first two enemies hit for 2 seconds, \n dealing 80/120/160/200/240 (+75% [[AP_SCALE]]) [[DMG_MAGIC]] to each. \n \n 10 second [[COOLDOWN]].",
    },
    W: {
      ko: "럭스가 마법봉을 던져 봉에 닿은 모든 아군에게 2.5초 동안 40/55/70/85/100(+40% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 씌웁니다. \n 마법봉은 돌아올 때도 똑같이 [[SHIELD]]를 부여합니다. \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
      en: "Lux throws her wand, granting all allies it touches a [[SHIELD]] that absorbs 40/55/70/85/100 (+40% [[AP_SCALE]]) damage for 2.5 seconds. \n The wand grants the same [[SHIELD]] on its return. \n \n 12/11.5/11/10.5/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "럭스가 빛의 영역을 생성해([[ZONE]]) 적들을 25/30/35/40/45% [[SLOW]]시키고 해당 지역을 드러냅니다. ([[VISION]]) \n \n 5초가 지나거나 E [[RECAST_DETONATE]] 시 [[DETONATE]]하며 65/115/165/215/265(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 추가로 1초 동안 [[SLOW]]시킵니다. \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "Lux creates an area of light ([[ZONE]]) that [[SLOW]]s enemies by 25/30/35/40/45% and reveals the area. ([[VISION]]) \n \n After 5 seconds or on E [[RECAST_DETONATE]], it [[DETONATE]]s, dealing 65/115/165/215/265 (+80% [[AP_SCALE]]) [[DMG_MAGIC]], \n and [[SLOW]]s enemies for an additional 1 second. \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "럭스가 눈부신 광선을 발사하여([[BEAM]]) 일직선상에 있는 모든 적에게 300/400/500(+120% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n [[MARK]]이 있는 대상은 [[MARK_CONSUME]]를 하고 다시 [[MARK]]을 남깁니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Lux fires a dazzling ray of light ([[BEAM]]), dealing 300/400/500 (+120% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemies in a line. \n \n Targets with a [[MARK]] get [[MARK_CONSUME]] and a new [[MARK]] is applied. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default lux;
