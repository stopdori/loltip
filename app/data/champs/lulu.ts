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
      { label: { ko: "E 상대", en: "E Enemy" }, tags: ["E_FLASH", "TRUE_SIGHT"] },
    ] },

    R: ["R_FLASH", "AIRBORNE", "SEPARATOR", "SIZE_UP", "MAX_HP_UP", "SLOW"],
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
      { label: { ko: "W 상대", en: "E Enemy" }, tags: ["POSITION_REVEAL", "TRUE_SIGHT"] },
    ] },
      R: [],
  },

  gimmick: {
      P: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"],

      Q: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", "PROJECTILE", "X2"],

      W: { phases: [
      { label: { ko: "W 아군", en: "W Ally" }, tags: ["TIMING_INSTANT", "TARGETED", "SEPARATOR", "AS_UP", "MS_UP"] },
      { label: { ko: "W 상대", en: "W Enemy" }, tags: ["TIMING_CAST", "PROJECTILE", "POLYMORPH"] },
    ] },

    E: { phases: [
      { label: { ko: "E 아군", en: "E Ally" }, tags: ["TIMING_INSTANT", "TARGETED", "SHIELD"] },
      { label: { ko: "E 상대", en: "E Enemy" }, tags: ["DMG_MAGIC", "TARGETED"] },
    ] },

      R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_INSTANT", "TARGETED", "AIRBORNE"] },
      { label: { ko: "R 버프 효과", en: "R Buff Effect" }, tags: ["SIZE_UP", "MAX_HP_UP", "SEPARATOR", "AURA", "SLOW"] },
    ] },
      
     
   },


  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 픽스가 아군을 보좌. \n 픽스가 부착된 상태의 아군은 \n [[BA]] 공격 시 픽스도 3발의 [[DMG_MAGIC]] [[PROJECTILE]] 발사. \n \n",

          "Q는 룰루와 픽스가 [[PIERCE]] [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[SLOW]]. \n 중첩된 대상은 1.5배 [[DMG_MAGIC]]. \n \n",

          "W는 아군에게 사용하면 [[AS_UP]], [[MS_UP]]. \n 상대에게 사용하면 [[POLYMORPH]]. \n \n",

          "E는 대상에게 픽스 부착. \n 아군에게 사용하면 [[SHIELD]]. \n 상대에게 사용하면 [[DMG_MAGIC]]와 [[TRUE_SIGHT]]. \n \n",

          "R은 아군 챔피언에게 사용할 수 있음. \n 대상 주변 [[AIRBORNE]]. \n [[SIZE_UP]]와 [[MAX_HP_UP]]. \n 주변에 [[AURA]] [[DOT]] [[SLOW]].",
        ],

        en: [
          "P: Pix assists an ally. \n An ally with Pix attached \n has Pix fire 3 [[DMG_MAGIC]] [[PROJECTILE]]s on [[BA]] attack. \n \n",

          "Q has Lulu and Pix each fire a [[PIERCE]] [[PROJECTILE]]. \n [[DMG_MAGIC]] and [[SLOW]]. \n Targets hit by both take 1.5x [[DMG_MAGIC]]. \n \n",

          "W grants [[AS_UP]] and [[MS_UP]] when cast on an ally. \n When cast on an enemy, it applies [[POLYMORPH]]. \n \n",

          "E attaches Pix to the target. \n Cast on an ally, it grants [[SHIELD]]. \n Cast on an enemy, it deals [[DMG_MAGIC]] and grants [[TRUE_SIGHT]]. \n \n",

          "R can be cast on an allied champion. \n [[AIRBORNE]]s enemies around the target. \n [[SIZE_UP]] and [[MAX_HP_UP]]. \n [[AURA]] [[DOT]] [[SLOW]] around them.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]]이 가능은 하지만 \n 픽스는 점멸로 따라오지 않음.", 
        "룰루 [[BA]]는 룰루가 [[PROJECTILE]] 1개 발사. \n 픽스가 룰루 또는 적군에게 붙어있을 때, 3개를 추가로 발사. \n E로 픽스를 아군에게 붙여주면 \n 아군 [[BA]] 공격 시 픽스도 공격.", 
        "R이 [[MAX_HP_UP]]. \n 풀피에 써도 유효하고 \n [[GW]]효과도 받지 않음. \n 부담없이 써서 [[AIRBORNE]], [[SLOW]]를 활용해야 좋음.",
      ],
        en: [
        "[[Q_FLASH]] is possible, \n but Pix does not follow the Flash.",
        "Lulu's [[BA]] fires 1 [[PROJECTILE]] from Lulu. \n When Pix is attached to Lulu or an enemy, it fires 3 more. \n If E attaches Pix to an ally, \n Pix also attacks when that ally makes a [[BA]] attack.",
        "R grants [[MAX_HP_UP]]. \n It's effective even at full HP \n and is unaffected by [[GW]]. \n Use it freely to take advantage of [[AIRBORNE]] and [[SLOW]].",
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
  // lol.stringtable.json의 spell_lulupassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V25.16)로 채움(CDragon 게임 데이터 lulu.bin.json과 대조).
  skillTooltip: {
    P: {
      ko: "요정 픽스가 룰루를 돕습니다. \n 룰루가 [[BA]] 공격 시 픽스도 같은 대상에게 광선을 3번 발사해 처음 적중한 적에게, 15~117([[LEVEL_SCALE]] 비례)(+15% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다.",
      en: "The faerie Pix assists Lulu. \n When Lulu makes a [[BA]] attack, Pix also fires 3 bolts at the same target, dealing 15~117 (based on [[LEVEL_SCALE]]) (+15% [[AP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit.",
    },
    Q: {
      ko: "룰루와 픽스가 각자 예리한 마법 화살을 발사하여 60/95/130/165/200(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 적중당한 적은 80% [[SLOW]]되었다가 2초에 걸쳐 원래대로 돌아옵니다. \n \n 적이 추가 마법 화살로 30/47.5/65/82.5/100(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입습니다. \n \n 7초의 [[COOLDOWN]].",
      en: "Lulu and Pix each fire a piercing magic bolt, dealing 60/95/130/165/200 (+50% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Enemies hit are [[SLOW]]ed by 80%, decaying over 2 seconds. \n \n Enemies take 30/47.5/65/82.5/100 (+25% [[AP_SCALE]]) [[DMG_MAGIC]] from the additional bolt. \n \n 7 second [[COOLDOWN]].",
    },
    W: {
      ko: "아군에게 사용하면 3/3.25/3.5/3.75/4초 동안 [[MS_SCALE]]가 25%(+[[AP_SCALE]] 100당 5%), [[AS_SCALE]]가 20/22.5/25/27.5/30% 증가합니다. \n \n 적에게 사용하면 룰루가 1.2/1.4/1.6/1.8/2초 동안 적을 [[POLYMORPH]]시킵니다. \n \n 18초의 [[COOLDOWN]].",
      en: "When cast on an ally, grants 25% (+5% per 100 [[AP_SCALE]]) [[MS_SCALE]] and 20/22.5/25/27.5/30% [[AS_SCALE]] for 3/3.25/3.5/3.75/4 seconds. \n \n When cast on an enemy, Lulu [[POLYMORPH]]s them for 1.2/1.4/1.6/1.8/2 seconds. \n \n 18 second [[COOLDOWN]].",
    },
    E: {
      ko: "아군에게 사용 시 픽스가 아군에게 날아가 6.25초 동안 요정 친구 픽스(P) 스킬을 부여합니다. \n 해당 아군이 챔피언이면 2.5초 동안 70/110/150/190/230(+50% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 추가로 부여합니다. \n \n 적 챔피언에게 사용 시 픽스가 적을 방해하여 70/110/150/190/230(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히며, \n 4초 동안 해당 적에 대한 [[TRUE_SIGHT]]가 생깁니다. \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "When cast on an ally, Pix flies to them and grants Pix, Faerie Companion (P) for 6.25 seconds. \n If the ally is a champion, it also grants a [[SHIELD]] that absorbs 70/110/150/190/230 (+50% [[AP_SCALE]]) damage for 2.5 seconds. \n \n When cast on an enemy champion, Pix hinders them, dealing 70/110/150/190/230 (+50% [[AP_SCALE]]) [[DMG_MAGIC]], \n and grants [[TRUE_SIGHT]] of them for 4 seconds. \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "룰루가 아군의 몸집을 키우며([[SIZE_UP]]) 주변 적을 1초 동안 [[AIRBORNE]]시킵니다. \n \n 몸집이 커진 아군은 7초 동안 [[HP_SCALE]]이 275/425/575(+55% [[AP_SCALE]]) 증가하며, \n 주변 적을 30/45/60% [[DOT]] [[SLOW]]시킵니다. ([[AURA]]) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Lulu enlarges an ally ([[SIZE_UP]]), [[AIRBORNE]]ing nearby enemies for 1 second. \n \n The enlarged ally gains 275/425/575 (+55% [[AP_SCALE]]) [[HP_SCALE]] for 7 seconds, \n and applies a 30/45/60% [[DOT]] [[SLOW]] to nearby enemies. ([[AURA]]) \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default lulu;
