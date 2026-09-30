import type { ChampData } from "../interactions/types";

const lulu: ChampData = {
  id: "lulu",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],

    W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: ["W_FLASH", "AS_UP", "MS_UP"] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["W_FLASH", "POLYMORPH"] },
    ] },

    E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: ["E_FLASH", "SHIELD"] },
      { label: { ko: "E 상대", en: "E Enemy" }, tags: ["E_FLASH", "REVEALED"] },
    ] },

    R: ["R_FLASH", "SIZE_UP", "MAX_HP_UP", "AIRBORNE", "SLOW"],
  },

  vision: {
      P: [],
      Q: ["HIT_SOUND"],
      W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: [] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["POSITION_REVEAL"] },
    ] },
      E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: [] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["POSITION_REVEAL", "TRUE_SIGHT"] },
    ] },
      R: [],
  },

  gimmick: {
      P: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"],

      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "X2", "PIERCE"],

      W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: ["TIMING_INSTANT", "TARGETED", "AS_UP", "MS_UP"] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["TIMING_CAST", "PROJECTILE", "POLYMORPH"] },
    ] },

    E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: ["TIMING_INSTANT", "TARGETED"] },
      { label: { ko: "E 상대", en: "E Enemy" }, tags: ["DMG_MAGIC", "TARGETED", "NON_PROJECTILE"] },
    ] },

      R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_INSTANT", "TARGETED", "SIZE_UP", "MAX_HP_UP"] },
      { label: { ko: "R 주변효과", en: "R Slowing Aura" }, tags: ["AOE", "AIRBORNE", "SLOW"] },
    ] },
      
     
   },


  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 요정 픽스가 도와줌. \n [[BA]] 공격 시 픽스도 공격해 3발의 [[PROJECTILE]]의 [[DMG_MAGIC]].",

          "Q는 룰루와 픽스가 [[PROJECTILE]]를 발사. \n [[SLOW]], [[DMG_MAGIC]].",

          "W는 아군에게 사용하면 [[AS_UP]], [[MS_UP]] [[BUFF]]. \n 상대에게 사용하면 [[POLYMORPH]].",

          "E는 대상에게 P의 요정 픽스 부착. \n 아군에게 사용하면 [[SHIELD]]. \n 상대에게 사용하면 [[TRUE_SIGHT]]와 [[DMG_MAGIC]].",

          "R은 자신 또는 아군에게 사용. \n 대상 주변 [[AIRBORNE]]. \n 크기가 커지고 [[MAX_HP_UP]]. \n 주변에 지속 [[SLOW]].",
        ],

        en: [
          "P is helped by the fairy Pix. \n When attacking with [[BA]], Pix also attacks, firing 3 [[PROJECTILE]]s of [[DMG_MAGIC]].",

          "Q has Lulu and Pix fire [[PROJECTILE]]s. \n [[SLOW]] and [[DMG_MAGIC]].",

          "W grants [[AS_UP]] and [[MS_UP]] [[BUFF]] when cast on an ally. \n When cast on an enemy, it applies [[POLYMORPH]].",

          "E attaches P's fairy Pix to the target. \n Cast on an ally grants [[SHIELD]]. \n Cast on an enemy applies [[TRUE_SIGHT]] and [[DMG_MAGIC]].",

          "R is cast on herself or an ally. \n [[AIRBORNE]]s nearby enemies. \n The target grows larger and gains [[MAX_HP_UP]]. \n Applies persistent [[SLOW]] around the target.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]]이 가능은 하지만 \n 픽스는 점멸로 따라오지 않아 데미지가 덜 들어감", 
        "룰루 [[BA]]는 룰루가 1개를 날리고 \n 픽스가 룰루 또는 적군에게 붙어있을 때, 3개를 추가로 날림 \n E로 픽스를 아군에게 붙여주면 \n 아군 [[BA]]에 따라 픽스 공격 횟수 변경.", 
        "R은 지속[[SLOW]].", 
        "R이 [[MAX_HP_UP]]여서 풀피에 써도 유효하고\n[[GW]]효과도 안받음 \n 부담없이 써서 [[AIRBORNE]], [[SLOW]]를 활용해야 좋음.",
      ],
        en: [
        "[[Q_FLASH]] technically works \n but Pix doesn't follow the Flash, so damage is reduced",
        "Lulu's [[BA]] fires 1 shot, \n and when Pix is attached to Lulu or an enemy, it fires 3 additional shots. \n If E attaches Pix to an ally instead, \n the number of Pix attacks follows that ally's [[BA]]s.",
        "R is a persistent [[SLOW]].",
        "R is [[MAX_HP_UP]] so it's effective even at full HP\nand is unaffected by [[GW]] \n Use it freely to take advantage of [[AIRBORNE]] and [[SLOW]].",
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

};

export default lulu;
