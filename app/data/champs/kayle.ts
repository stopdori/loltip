import type { ChampData } from "../interactions/types";

const kayle: ChampData = {
  id: "kayle",
  skills: {
    P: { phases: [
      { label: { ko: "1 레벨", en: "1 Lv" }, tags: ["BUFF_STACK", "AS_UP", "SEPARATOR", "MS_UP"] },
      { label: { ko: "6 레벨", en: "6 Lv" }, tags: ["RANGE_UP"] },
      { label: { ko: "11 레벨 희열", en: "11 Lv Exalted" }, tags: ["ON_HIT"] },
      { label: { ko: "16 레벨 영구 희열", en: "16 Lv Permanent Exalted" }, tags: ["RANGE_UP", "ADDITIONAL"] },
    ] },
    
    Q: ["SLOW", "AR_MR_SHRED"],
    W: ["W_FLASH", "HEAL", "MS_UP"],
    E: ["AA_RESET"],
    R: ["R_FLASH", "INVULNERABLE"],
  },

  vision: {
    P: [],
    Q: ["HIT_SOUND", "HIT_EFFECT"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "1 레벨", en: "1 Lv" }, tags: ["BUFF_STACK", "ON_HIT", "AS_UP", "SEPARATOR", "MS_UP"] },
      { label: { ko: "6 레벨", en: "6 Lv" }, tags: ["RANGE_UP"] },
      { label: { ko: "11 레벨 희열", en: "11 Lv Exalted" }, tags: ["ON_HIT", "DMG_MAGIC", "AOE"] },
       { label: { ko: "16 레벨 영구 희열", en: "16 Lv Permanent Exalted" }, tags: ["RANGE_UP", "ADDITIONAL", "SEPARATOR", "DMG_MAGIC", "AOE"] },
    ] },

    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "DETONATE"], 
    W: ["TIMING_CAST", "TARGETED", "HEAL", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "CHAIN"],
    E: { phases: [
      { label: { ko: "1레벨", en: "1 Lv" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "11레벨", en: "11 Lv" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "DETONATE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "TARGETED", "INVULNERABLE"] },
      { label: { ko: "R 폭발", en: "R Explosion" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 R을 찍을 때 마다 [[BA]]에 능력 추가.", 
          "1 레벨 \n [[AS_UP]] [[BUFF_STACK]]. \n 최대 5스택 일때 [[MS_UP]] 추가.", 
          "6 레벨 \n [[RANGE_UP]]. (525)", 
          "11 레벨 \n 5 [[BUFF_STACK]] 일때 \n [[ON_HIT]]에 [[AOE]] [[DMG_MAGIC]] 추가.", 
          "16 레벨 \n [[RANGE_UP]] 추가. (625) \n 항상 5 [[BUFF_STACK]]을 유지한 것처럼 유지. \n \n",

          "Q는 [[PROJECTILE]]를 발사. \n 적중 시 갈라져 [[PIERCE]] [[PROJECTILE]]로 변경. \n [[DMG_MAGIC]]와 [[SLOW]], [[AR_MR_SHRED]]. \n \n",

          "W는 자신에게 [[MS_UP]]와 [[HEAL]]. \n 주변 아군 챔피언 한 명에게 동일한 효과 [[CHAIN]]. \n \n",

          "E의 [[PASSIVE_BONUS]]는 \n [[BA]]에 [[ON_HIT]] [[DMG_MAGIC]].",

          "E는 다음 [[BA]]를 [[EMPOWERED]]. \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_MAGIC]].", 
          "6레벨까지는 [[RANGE_UP]]. \n 11레벨 부터는 [[DETONATE]]효과 추가. \n \n",

          "R은 아군 대상에게 [[INVULNERABLE]]. \n 잠시 후 [[DETONATE]]하여 [[AOE]] [[DMG_MAGIC]].",
        ],

        en: ["Each time R is leveled, P adds abilities to [[BA]]s.",
          "Level 1 \n [[AS_UP]] [[BUFF_STACK]]. \n At max 5 stacks, also grants [[MS_UP]].",
          "Level 6 \n [[RANGE_UP]]. (525)",
          "Level 11 \n At 5 [[BUFF_STACK]]s, \n [[ON_HIT]] adds [[AOE]] [[DMG_MAGIC]].",
          "Level 16 \n Additional [[RANGE_UP]]. (625) \n Always acts as if at 5 [[BUFF_STACK]]s. \n \n",
          "Q fires a [[PROJECTILE]]. \n On hit, it splits into [[PIERCE]] [[PROJECTILE]]s. \n [[DMG_MAGIC]], [[SLOW]], and [[AR_MR_SHRED]]. \n \n",
          "W grants [[MS_UP]] and [[HEAL]] to herself. \n The same effect [[CHAIN]]s to one nearby allied champion. \n \n",
          "E's [[PASSIVE_BONUS]] \n adds [[ON_HIT]] [[DMG_MAGIC]] to [[BA]]s.",
          "E makes the next [[BA]] [[EMPOWERED]]. \n [[DMG_MAGIC]] based on [[TARGET_MISSING_HP_SCALE]].",
          "Up to level 6, [[RANGE_UP]]. \n From level 11, adds a [[DETONATE]] effect. \n \n",
          "R makes an allied target [[INVULNERABLE]]. \n Shortly after, it [[DETONATE]]s for [[AOE]] [[DMG_MAGIC]]."
        ]

      },

      note2: {
        ko: [
        "사실 R을 찍으면 P가 강화되는것이 아니고 \n 6, 11, 16레벨에 아무 스킬이나 찍으면 강화 되는것. \n (스킬 잘못찍어도 강화됨).", 
        "3레벨 궁은 [[AOE]]도 증가."
      ],
        en: ["Actually, P isn't upgraded by leveling R; \n it upgrades when you level any skill at levels 6, 11, and 16. \n (It upgrades even if you level the wrong skill).",
          "Rank 3 R also increases the [[AOE]]."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 120,
    16: 80,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_kaylepassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(정보박스 V26.04)로 채움(CDragon 게임 데이터 kayle.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "챔피언 레벨 및 스킬 레벨이 오를수록 케일의 공격이 강화됩니다. \n \n - 1레벨 - 열광: 케일이 [[BA]] 공격 시 5초 동안 [[AS_SCALE]]가 6% 상승합니다. (최대 5회 중첩) ([[BUFF_STACK]]) \n 최대 중첩 시 희열 상태가 되며 [[MS_SCALE]]가 10% 상승합니다. \n \n - 6레벨 - 비상: [[RANGE_SCALE]]가 525까지 증가합니다. \n \n - 11레벨 - 작열: 희열 상태 공격 시 화염파를 발사해, \n 20~41([[LEVEL_SCALE]] 비례)(+10% 추가 [[AD_SCALE]])(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n - 16레벨 - 승천: 영구히 희열 상태를 유지하며 [[RANGE_SCALE]]가 625까지 늘어납니다.",
      en: "Kayle's attacks are empowered as her champion level and skill levels increase. \n \n - Level 1 - Zealous: Kayle's [[BA]]s increase her [[AS_SCALE]] by 6% for 5 seconds. (Stacks up to 5 times) ([[BUFF_STACK]]) \n At max stacks she becomes Exalted, increasing her [[MS_SCALE]] by 10%. \n \n - Level 6 - Aflight: Her [[RANGE_SCALE]] increases to 525. \n \n - Level 11 - Starfire: Attacks while Exalted fire a wave of fire, \n dealing 20~41 (based on [[LEVEL_SCALE]]) (+10% bonus [[AD_SCALE]]) (+25% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n - Level 16 - Ascension: She remains permanently Exalted and her [[RANGE_SCALE]] increases to 625.",
    },
    Q: {
      ko: "케일이 처음으로 적을 맞히면 멈추는 천상의 검을 발사합니다. \n 검은 대상과 그 뒤에 있는 적들에게 60/90/120/150/180(+60% 추가 [[AD_SCALE]])(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 2초 동안 25/30/35/40/45% [[SLOW]]시키며 4초 동안 15%의 방어력과 마법 저항력을 감소시킵니다. ([[AR_MR_SHRED]]) \n \n 12/11/10/9/8초의 [[COOLDOWN]].",
      en: "Kayle fires a celestial sword that stops at the first enemy hit. \n The sword deals 60/90/120/150/180 (+60% bonus [[AD_SCALE]]) (+50% [[AP_SCALE]]) [[DMG_MAGIC]] to the target and enemies behind it, \n [[SLOW]]s them by 25/30/35/40/45% for 2 seconds, and reduces their armor and magic resist by 15% for 4 seconds. ([[AR_MR_SHRED]]) \n \n 12/11/10/9/8 second [[COOLDOWN]].",
    },
    W: {
      ko: "케일이 자신에게 빛을 불어넣어 체력을 55/80/105/130/155(+25% [[AP_SCALE]]) [[HEAL]]하고, \n 2초 동안 [[MS_SCALE]]를 24/28/32/36/40%(+[[AP_SCALE]] 100당 8%) 상승시킵니다. \n \n 이 효과가 주변 아군 챔피언 한 명에게 [[CHAIN]]되어 동일한 효과를 적용합니다. \n \n 15초의 [[COOLDOWN]].",
      en: "Kayle infuses herself with light, [[HEAL]]ing for 55/80/105/130/155 (+25% [[AP_SCALE]]) health, \n and increasing her [[MS_SCALE]] by 24/28/32/36/40% (+8% per 100 [[AP_SCALE]]) for 2 seconds. \n \n This effect [[CHAIN]]s to one nearby allied champion, applying the same effect. \n \n 15 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: [[BA]]가 [[ON_HIT]] 15/20/25/30/35(+10% 추가 [[AD_SCALE]])(+20% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 사용 시: 케일의 다음 [[BA]]를 [[EMPOWERED]] 하여 [[RANGE_SCALE]]가 증가하며, \n [[TARGET_MISSING_HP_SCALE]] 비례의 8/8.5/9/9.5/10%(+[[AP_SCALE]] 100당 1.5%)만큼 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 이 공격은 케일이 11레벨에 도달하면 대상에게 적중 시 [[DETONATE]]하여 주변 적에게 피해를 입힙니다. \n \n 8/7.5/7/6.5/6초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: [[BA]]s deal an additional 15/20/25/30/35 (+10% bonus [[AD_SCALE]]) (+20% [[AP_SCALE]]) [[DMG_MAGIC]] [[ON_HIT]]. \n \n Active: Kayle's next [[BA]] is [[EMPOWERED]], gaining increased [[RANGE_SCALE]], \n and dealing additional [[DMG_MAGIC]] equal to 8/8.5/9/9.5/10% (+1.5% per 100 [[AP_SCALE]]) of [[TARGET_MISSING_HP_SCALE]]. \n \n Once Kayle reaches level 11, this attack [[DETONATE]]s on hitting the target, damaging nearby enemies. \n \n 8/7.5/7/6.5/6 second [[COOLDOWN]].",
    },
    R: {
      ko: "케일이 아군 챔피언 한 명을 2.5초 동안 [[INVULNERABLE]] 상태로 만든 뒤, \n 대상 주위 지역을 정화해 주변 적들에게 200/300/400(+100% 추가 [[AD_SCALE]])(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Kayle makes an allied champion [[INVULNERABLE]] for 2.5 seconds, \n then purifies the area around the target, dealing 200/300/400 (+100% bonus [[AD_SCALE]]) (+70% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default kayle;
