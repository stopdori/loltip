import type { ChampData } from "../interactions/types";

const qiyana: ChampData = {
  id: "qiyana",
  skills: {
    P: [],
    Q: { phases: [
      { label: { ko: "속성 없음", en: "None" }, tags: ["Q_FLASH"] },
      { label: { ko: "숲", en: "Brush" }, tags: ["Q_FLASH", "INVISIBILITY", "SEPARATOR", "MS_UP"] },
      { label: { ko: "물", en: "River" }, tags: ["Q_FLASH", "ROOT", "SLOW"] },
      { label: { ko: "땅", en: "Terrain" }, tags: ["Q_FLASH"] },
    ] },
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ST_CONDITIONAL", "ON_HIT", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["W_FLASH", "BUFF_STACK", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },
    
    E: ["E_FLASH", "DASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_INTERACT", "Q", "W", "E", "R"],

    Q: { phases: [
      { label: { ko: "속성 없음", en: "None" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"] },
      { label: { ko: "숲", en: "Brush" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "CAMOUFLAGE", "SEPARATOR_NEWLINE", "SEPARATOR", "ZONE", "MS_UP", "SEPARATOR", "STACK_CONSUME", "W"] },
      { label: { ko: "물", en: "River" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "ROOT", "SEPARATOR", "STACK_CONSUME", "W"] },
      { label: { ko: "땅", en: "Terrain" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "SEPARATOR", "STACK_CONSUME", "W", "SEPARATOR_NEWLINE", "SEPARATOR","ST_CONDITIONAL", "DMG_PHYSICAL"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT", "AS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DASH", "BUFF_STACK"] },
    ] },

    E: ["DMG_PHYSICAL", "TARGETED", "DASH", "SEPARATOR", "ST_CONDITIONAL", "HOMING", "Q"],

    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["PROJECTILE", "PIERCE", "KNOCKBACK"] },
      { label: { ko: "R 폭발", en: "R Explodes" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "ZONE", "STUN"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "키아나 어려움. \n 고수분들 제보 부탁.",
        ], en: [
          "Qiyana is hard. \n Tips from experienced players are welcome.",
        ] },
      note1: {

        ko: [
          "키아나는 흐름상 W부터 설명하는게 좋아서 W부터 설명. \n \n W로 3가지 원소를 바꿔 다룰 수 있음. \n 수풀(숲), 강(물), 땅(땅)에 사용하면 [[DASH]]. \n 해당 속성을 획득하고 Q [[CDR_RESET]]. \n \n W의 [[PASSIVE_BONUS]]는 속성을 가지고 있는 지형에서 [[MS_UP]].",

          "P는 [[BA]] 또는 스킬에 [[DMG_PHYSICAL]] 추가. \n [[ON_TARGET_CD]]. \n W로 다른 속성을 획득하면 모든 대상 P [[CDR_RESET]].",

          "Q는 좁은 [[AOE]] [[DMG_PHYSICAL]]. \n \n 원소를 획득하면 Q 스킬이 변화. \n [[PROJECTILE]]가 되고, 적중 시 파편화로 뒤쪽 추가 적중. (리산드라 Q) \n \n 1. 숲Q는 키아나가 [[INVISIBILITY]]이 되고 \n [[PROJECTILE]]가 키아나만 적용되는 [[ZONE]] [[MS_UP]]. \n 벗어나면 사라짐. \n \n 2. 물Q는 적중 시 [[ROOT]]과 잠깐의 [[SLOW]]. \n \n 3. 땅Q는 체력이 50% 이하인 대상에게 추가 [[DMG_PHYSICAL]].",

          "E는 대상을 관통하여 [[DASH]]. \n 이때 Q를 사용하면 자동으로 대상에게 사용.",

          "R은 [[PROJECTILE]]를 발사하여 적을 [[KNOCKBACK]]. \n [[PROJECTILE]]가 벽에 닿으면 \n 가까운 곳부터 먼곳까지 이어진벽들이 순차적으로 폭발. \n 폭발은 최대체력 비례 [[DMG_PHYSICAL]]와 \n [[PROJECTILE]] 이동 거리에 비례한 [[STUN]]. \n \n 추가로 [[PROJECTILE]]가 수풀, 강을 통과하면 \n ''지나간 경로만'' 폭발.",
        ],

        en: [
          "Since Qiyana flows better explained starting with W, W comes first. \n \n W lets her switch between 3 elements. \n Using it on brush, river, or terrain grants [[DASH]]. \n She gains that element and Q gets [[CDR_RESET]]. \n \n W's [[PASSIVE_BONUS]] is [[MS_UP]] while standing on terrain with an element.",

          "P adds [[DMG_PHYSICAL]] to [[BA]]s or abilities. \n Has a separate [[ON_TARGET_CD]] per target. \n Gaining a different element from W triggers [[CDR_RESET]] for P on all targets.",

          "Q deals [[DMG_PHYSICAL]] in a narrow [[AOE]]. \n \n Gaining an element changes the Q ability. \n It becomes a [[PROJECTILE]] and fragments on hit for an extra hit behind (Lissandra Q). \n \n 1. Brush Q makes Qiyana [[INVISIBILITY]] \n and creates a [[ZONE]] [[MS_UP]] that only applies to the [[PROJECTILE]]'s path for Qiyana. \n Disappears if she leaves it. \n \n 2. River Q applies [[ROOT]] and a brief [[SLOW]] on hit. \n \n 3. Terrain Q deals bonus [[DMG_PHYSICAL]] to targets below 50% HP.",

          "E [[DASH]]es through a target. \n Using Q during this automatically casts it on the target.",

          "R fires a [[PROJECTILE]] that [[KNOCKBACK]]s enemies. \n When the [[PROJECTILE]] hits a wall, \n connected walls explode in sequence from nearest to farthest. \n The explosions deal max-HP-based [[DMG_PHYSICAL]] and \n [[STUN]] proportional to the [[PROJECTILE]]'s travel distance. \n \n Additionally, if the [[PROJECTILE]] passes through brush or river, \n only the path it traveled through explodes.",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]]은 되긴 하는데, 실용성은 잘 모르겠음.",
        "R은 판정이 특이함\nR은 일반적으로 벽에 닿으면 폭발하여 [[STUN]]. \n 하지만, R 경로에 강가, 수풀이 있으면 폭발하여 \n 벽에 닿지 않아도 데미지와 [[STUN]]. \n 예) R로 [[KNOCKBACK]]을 했는데 착지점이 \n 강가, 수풀이 끝나고 벽이 없는 그냥 맨땅이라면 \n [[STUN]]은커녕 데미지도 없음."
      ],
        en: [
          "[[W_FLASH]] technically works, but not sure how practical it actually is.",
          "R has unique hit detection.\nNormally R explodes on wall contact to apply [[STUN]]. \n However, if river or brush is in R's path, it explodes \n and deals damage + [[STUN]] even without hitting a wall. \n Ex) if R's [[KNOCKBACK]] lands where the river or brush \n ends and there's no wall, just flat ground, \n neither the damage nor [[STUN]] applies."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

};

export default qiyana;
