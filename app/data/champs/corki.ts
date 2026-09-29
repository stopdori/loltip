import type { ChampData } from "../interactions/types";

const corki: ChampData = {
  id: "corki",
  skills: {
    P: [],
    Q: ["Q_FLASH", "REVEALED"],
    W: ["W_FLASH", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "AR_MR_SHRED"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: ["VISION", "REVEALED"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_TRUE", "ON_HIT"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"],

    W: ["DMG_MAGIC", "PROJECTILE", "ZONE", "DOT", "SEPARATOR", "DASH", "WALL_HOP"],
    
    E: ["BUFF_FORM", "LOCKED", "DMG_PHYSICAL", "AOE", "DOT", "AR_MR_SHRED"],

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "PROJECTILE", "SINGLE", "RECHARGE", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
      { label: { ko: "R 투사체 폭발", en: "R Projectile Explosion" }, tags: ["DETONATE", "DMG_PHYSICAL"] },
      { label: { ko: "R 강화 투사체 폭발", en: "R Empowered Projectile Explosion" }, tags: ["DETONATE", "DMG_PHYSICAL", "X2"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 기본공격과 주문검(아이템) 효과에 \n [[DMG_TRUE]] 추가. \n \n",

          "Q는 [[AOE]] [[DMG_MAGIC]]. \n 맞은 대상은 [[REVEALED]]. \n \n",

          "W는 [[DASH]]하면서 경로에 [[ZONE]] 생성. \n [[ZONE]]은 [[DOT]] [[DMG_MAGIC]]. \n \n",

          "E는 4초간 코르키의 전방에 게틀링건 발사. \n 틱당 [[DOT]] [[DMG_PHYSICAL]]와 [[AR_MR_SHRED]]. \n [[AR_MR_SHRED]]은 상한이 있음. \n \n",

          "R은 미사일을 4개까지 [[RECHARGE]]. \n 체력바 밑에 보유한 개수 표시.", 
          "미사일 [[PROJECTILE]]를 발사. \n 적중 시 [[DETONATE]]하여 [[AOE]] [[DMG_PHYSICAL]]. \n 3번째 마다 [[EMPOWERED]](빨간색) 미사일 장전. \n 2배의 [[DMG_PHYSICAL]]. \n \n 챔피언에게 [[BA]]를 때리면 [[CRIT]] 확률 비례 [[CDR]].",
        ],

        en: [
          "P adds [[DMG_TRUE]] to basic attacks \n and Spellblade (item) effects. \n \n",
          "Q deals [[AOE]] [[DMG_MAGIC]]. \n Targets hit are [[REVEALED]]. \n \n",
          "W [[DASH]]es and creates a [[ZONE]] along the path. \n The [[ZONE]] deals [[DOT]] [[DMG_MAGIC]]. \n \n",
          "E fires a gatling gun in front of Corki for 4 seconds. \n Each tick deals [[DOT]] [[DMG_PHYSICAL]] and applies [[AR_MR_SHRED]]. \n [[AR_MR_SHRED]] has a cap. \n \n",
          "R [[RECHARGE]]s up to 4 missiles. \n The number held is shown below the health bar.",
          "Fires a missile [[PROJECTILE]]. \n On hit, it [[DETONATE]]s, dealing [[AOE]] [[DMG_PHYSICAL]]. \n Every 3rd missile is loaded as an [[EMPOWERED]] (red) missile. \n Deals double [[DMG_PHYSICAL]]. \n \n Hitting a champion with a [[BA]] grants [[CDR]] based on [[CRIT]] chance.",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]]은 R누르고 바로 점멸하면 안됨. \n R을 누르고 점멸을 약간 천천히 써야 적용."
      ],
        en: [
          "[[R_FLASH]] doesn't work if you Flash right after pressing R. \n Press R, then use Flash slightly later for it to apply.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Corki,
  // 스킬 수치 최근 변경 V26.14). DDragon effectBurn/vars가 비어 있어 위키 본문 수치로 채움.
  // R은 충전형 스킬이라 ultCooldown이 0으로 되어 있어 {{ultCooldown}} 대신 재사용 대기시간 2초를 직접 표기.
  // R은 위키 템플릿 원자료에 5랭크 값이 섞여 있으나 페이지 표시값(3랭크)을 채택.
  skillTooltip: {
    P: {
      ko: "코르키의 [[BA]], 주문검 피해에 (20% [[AD_SCALE]])가 [[DMG_TRUE]]로 추가됩니다.",
      en: "Corki's [[BA]]s and Spellblade damage deal an additional (20% [[AD_SCALE]]) as [[DMG_TRUE]].",
    },
    Q: {
      ko: "코르키가 폭탄을 던져 60/105/150/195/240(+125% 추가 [[AD_SCALE]])(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 6초 동안 폭탄에 맞은 지역과 챔피언이 드러납니다. \n \n 9/8.5/8/7.5/7초의 [[COOLDOWN]].",
      en: "Corki lobs a bomb, dealing 60/105/150/195/240 (+125% bonus [[AD_SCALE]]) (+100% [[AP_SCALE]]) [[DMG_MAGIC]]. \n The area and champions hit by the bomb are revealed for 6 seconds. \n \n 9/8.5/8/7.5/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "코르키가 비행하며([[DASH]]) 경로를 2.5초 동안 불태웁니다([[ZONE]]). \n 경로에 있는 적들은 지속시간 동안 150/225/300/375/450(+200% 추가 [[AD_SCALE]])(+150% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입습니다. \n \n 20/18/16/14/12초의 [[COOLDOWN]].",
      en: "Corki flies ([[DASH]]), burning his path for 2.5 seconds ([[ZONE]]). \n Enemies in the path take 150/225/300/375/450 (+200% bonus [[AD_SCALE]]) (+150% [[AP_SCALE]]) [[DMG_MAGIC]] over the duration. \n \n 20/18/16/14/12 second [[COOLDOWN]].",
    },
    E: {
      ko: "코르키가 전방에 개틀링 건을 발사하여 4초 동안 80/130/180/230/280(+240% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 마법 저항력과 방어력을 최대 12/14/16/18/20만큼 감소시킵니다([[AR_MR_SHRED]]). \n \n 12초의 [[COOLDOWN]].",
      en: "Corki fires a gatling gun in front of him for 4 seconds, dealing 80/130/180/230/280 (+240% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and reducing magic resistance and armor by up to 12/14/16/18/20 ([[AR_MR_SHRED]]). \n \n 12 second [[COOLDOWN]].",
    },
    R: {
      ko: "코르키가 처음으로 적을 맞히면 폭발하는 [[PROJECTILE]]을 발사하여 주변 적에게 90/170/250(+85% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 세 번째 미사일은 매번 180/340/500(+170% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 이 스킬은 최대 4회 [[RECHARGE]]됩니다(20초마다). \n 챔피언을 상대로 [[BA]] 적중 시 충전 시간이 2~6초 감소합니다([[CRIT]] 확률 비례). \n \n 2초의 [[COOLDOWN]].",
      en: "Corki fires a [[PROJECTILE]] that explodes on the first enemy hit, dealing 90/170/250 (+85% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to nearby enemies. \n Every third missile deals 180/340/500 (+170% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n This skill holds up to 4 [[RECHARGE]] charges (one every 20 seconds). \n Hitting a champion with a [[BA]] reduces the recharge time by 2~6 seconds (based on [[CRIT]] chance). \n \n 2 second [[COOLDOWN]].",
    },
  },
};

export default corki;
