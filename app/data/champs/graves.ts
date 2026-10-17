import type { ChampData } from "../interactions/types";

const graves: ChampData = {
  id: "graves",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "NEAR_SIGHT", "SLOW"],
    E: { phases: [
      { label: { ko: "E 돌진", en: "E Dash" }, tags: ["E_FLASH", "AA_RESET", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "E 버프 스택", en: "E Buff Stack" }, tags: ["BUFF_STACK", "AR_MR_UP"] },
    ] },
    R: ["R_FLASH", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "CC_BUFFER"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["VOLLEY_OVERLAP", "PROJECTILE"],
    Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "ZONE"] },
      { label: { ko: "폭발 Q", en: "Explosion Q" }, tags: ["ST_CONDITIONAL", "DETONATE", "DMG_PHYSICAL", "AOE"] },
      { label: { ko: "오는 Q", en: "Return Q" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "AOE"] },
    ] },
    
    W: ["DMG_MAGIC", "PROJECTILE", "ZONE", "SEPARATOR", "NEAR_SIGHT", "SLOW"],

    E: { phases: [
      { label: { ko: "E 돌진", en: "E Dash" }, tags: ["AA_RESET", "BUFF_STACK", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK", "X2"] },
      { label: { ko: "E 버프 스택", en: "E Buff Stack" }, tags: ["PER_STACK", "AR_MR_UP"] },
    ] },
    
    R:{ phases: [
      { label: { ko: "R 준비 단계", en: "R Wind-up Phase" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "R 후진 단계", en: "R Retreat Phase" }, tags: ["DASH", "WALL_HOP"] },
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE_MINION", "DETONATE"] },
      { label: { ko: "R 폭발", en: "R Explosion" }, tags: ["DMG_PHYSICAL", "AOE"] },
    ] },
     
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "그브 [[BA]]는 2발 샷건 \n 1발에 4개의 [[PROJECTILE]]를 한번에 발사. \n 최초 1개만 피해가 쌔고 중첩 적중당 1/3 데미지 추가. \n 다 쓰면 재장전. \n \n",

          "Q는 탄환을 발사하여 경로에 [[DMG_PHYSICAL]]. \n 잠시 뒤 또는 [[WALL_COLLISION]] 시 [[DETONATE]]하고 되돌아 옴. \n [[DETONATE]]이나 돌아오는 경로에 닿으면 [[DMG_PHYSICAL]] 추가. \n \n",

          "W는 연막탄([[PROJECTILE]])을 발사. \n 도착하면 [[AOE]] [[DMG_MAGIC]]. \n [[ZONE]] 안에 있으면 [[SLOW]]와 [[NEAR_SIGHT]]. \n \n",

          "E는 [[DASH]]하고 [[BA]] 한발 즉시 장전. \n 그리고 [[AR_MR_UP]] [[BUFF_STACK]] 1개 \n 상대 방향으로 [[DASH]]하면 [[BUFF_STACK]] 2개. (최대 8개) \n 미니언이 아닌 대상을 공격하면 [[DURATION_RESET]]. \n [[AA_RESET]] 가능. \n \n",

          "R은 전방에 탄환([[PROJECTILE]]) 발사. \n 탄환에 맞으면 [[DMG_PHYSICAL]]. \n 적중하거나 끝에 다다르면 [[DETONATE]]하여 [[AOE]]피해. \n 두 피해는 중첩되지 않음. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",
        ],

        en: ["Graves's [[BA]] is a 2-shot shotgun. \n Each shot fires 4 [[PROJECTILE]]s at once. \n Only the first pellet deals full damage; each overlapping hit adds 1/3 damage. \n Reloads after both shots are spent. \n \n",
          "Q fires a bullet that deals [[DMG_PHYSICAL]] along its path. \n After a short delay or on [[WALL_COLLISION]], it [[DETONATE]]s and returns. \n Enemies hit by the [[DETONATE]] or the return path take additional [[DMG_PHYSICAL]]. \n \n",
          "W fires a smoke grenade ([[PROJECTILE]]). \n On arrival, it deals [[AOE]] [[DMG_MAGIC]]. \n Enemies inside the [[ZONE]] get [[SLOW]] and [[NEAR_SIGHT]]. \n \n",
          "E [[DASH]]es and instantly reloads one [[BA]] shot. \n It also grants 1 [[AR_MR_UP]] [[BUFF_STACK]], \n or 2 [[BUFF_STACK]]s when [[DASH]]ing toward an enemy. (Max 8) \n Attacking a non-minion target triggers [[DURATION_RESET]]. \n Can [[AA_RESET]]. \n \n",
          "R fires a shell ([[PROJECTILE]]) forward. \n Enemies hit by the shell take [[DMG_PHYSICAL]]. \n On hit or at max range, it [[DETONATE]]s for [[AOE]] damage. \n The two damage instances do not stack. \n [[CC_BUFFER]] can ignore some CC."
        ]

      },

      note2: {
        ko: [
        "그브 [[BA]]의 치명타는 일반 치명타와 다르게 \n 1발에 6개 [[PROJECTILE]]와 50% 추가데미지.",

        "그브 [[BA]]는 각각의 적이 처음 맞은 탄환만 [[ON_HIT]] 효과.", 

        "E의 [[BUFF_STACK]]은 수정초, 꿀열매, 솔방울탄을 공격해도 유지.", 

        "두꺼운벽에 붙어서 평E평하면 [[AA_RESET]]이 엄청빠름"
      ],
        en: ["Unlike a normal crit, Graves's critical [[BA]] \n fires 6 [[PROJECTILE]]s per shot with 50% bonus damage.",
          "Graves's [[BA]] applies [[ON_HIT]] effects only with the first pellet that hits each enemy.",
          "E's [[BUFF_STACK]] is maintained when attacking Scryer's Bloom, Honeyfruit, and Blast Cones.",
          "Hugging a thick wall and using AA-E-AA makes the [[AA_RESET]] extremely fast."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Graves,
  // 스킬 수치 최근 변경 V26.17). W는 DDragon effectBurn과 위키가 일치, 나머지는 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_gravespassive_tooltip)을 사용.
  skillTooltip: {
    P: {
      ko: "그레이브즈의 [[BA]]에는 몇 가지 특징이 있습니다. \n \n 탄환 두 발을 발사하면 재장전해야 합니다. \n 공격 속도가 재장전 시간은 약간 줄이지만, 공격 후 다음 공격까지 걸리는 시간은 대폭 감소시킵니다. \n \n 공격 시 4개의 탄환을 발사합니다. \n 대상에게 적중한 첫 번째 탄환은 70~100%([[LEVEL_SCALE]] 비례) [[AD_SCALE]]의 [[DMG_PHYSICAL]]를 입히고 이후의 탄환은 각각 23.31~33.3%([[LEVEL_SCALE]] 비례) [[AD_SCALE]]의 [[DMG_PHYSICAL]]를 입힙니다. \n [[CRIT]] 공격 시 일반 치명타 효과 대신 6발의 탄환을 발사하고 추가 피해를 입힙니다. \n 구조물의 경우 피해량이 25% 감소합니다. \n \n 탄환은 적중한 첫 번째 유닛을 [[PIERCE]]할 수 없습니다. \n 챔피언이 아닌 유닛이 탄환을 여러 개 맞으면 뒤로 밀려납니다.",
      en: "Graves's [[BA]] has a few special traits. \n \n He must reload after firing two shots. \n Attack speed slightly reduces the reload time, but greatly reduces the time between attacks. \n \n Each attack fires 4 bullets. \n The first bullet to hit a target deals 70~100% (based on [[LEVEL_SCALE]]) [[AD_SCALE]] [[DMG_PHYSICAL]], and each subsequent bullet deals 23.31~33.3% (based on [[LEVEL_SCALE]]) [[AD_SCALE]] [[DMG_PHYSICAL]]. \n On [[CRIT]], he fires 6 bullets and deals bonus damage instead of the normal critical strike effect. \n Damage against structures is reduced by 25%. \n \n Bullets cannot [[PIERCE]] the first unit hit. \n Non-champion units hit by multiple bullets are knocked back.",
    },
    Q: {
      ko: "그레이브즈가 화약을 흩뿌리는 탄환을 발사하여 50/75/100/125/150(+55% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 탄환은 1초 뒤 또는 [[WALL_COLLISION]] 시 [[DETONATE]]하여 탄환의 경로나 근처에 있는 적들에게 80/125/170/215/260(+45/60/75/90/105% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 13/11.25/9.5/7.75/6초의 [[COOLDOWN]].",
      en: "Graves fires a powder-trailing bullet, dealing 50/75/100/125/150 (+55% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n After 1 second or on [[WALL_COLLISION]], the bullet [[DETONATE]]s, dealing 80/125/170/215/260 (+45/60/75/90/105% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies along its path or nearby. \n \n 13/11.25/9.5/7.75/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "그레이브즈가 4초간 지속되는 검은 연막([[ZONE]])을 만들어냅니다. \n 연막 안에 있는 적은 50% [[SLOW]]되며 시야가 차단됩니다([[NEAR_SIGHT]]). \n 연막탄은 처음 적중 시 60/110/160/210/260(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 26/24/22/20/18초의 [[COOLDOWN]].",
      en: "Graves creates a cloud of black smoke ([[ZONE]]) that lasts 4 seconds. \n Enemies inside the smoke are [[SLOW]]ed by 50% and have their vision blocked ([[NEAR_SIGHT]]). \n The smoke canister deals 60/110/160/210/260 (+60% [[AP_SCALE]]) [[DMG_MAGIC]] on initial impact. \n \n 26/24/22/20/18 second [[COOLDOWN]].",
    },
    E: {
      ko: "그레이브즈가 [[DASH]]하여 산탄총에 탄환 하나를 장전합니다. \n 또한 4초 동안 중첩을 1 획득합니다([[BUFF_STACK]], 최대 8중첩). 적 챔피언을 향해 [[DASH]]하면 중첩을 2 획득합니다. \n 중첩당 7/10/13/16/19의 [[AR_UP]], 3.5/5/6.5/8/9.5의 [[MR_UP]]를 얻습니다. \n 미니언이 아닌 대상을 공격하면 중첩 [[DURATION_RESET]]가 됩니다. \n \n 그레이브즈의 [[BA]]로 적중한 탄환 하나당 이 스킬의 재사용 대기시간이 0.5초 감소합니다. ([[CDR]]) \n \n 16/15/14/13/12초의 [[COOLDOWN]].",
      en: "Graves [[DASH]]es and loads one shell into his shotgun. \n He also gains 1 stack for 4 seconds ([[BUFF_STACK]], max 8 stacks). [[DASH]]ing toward an enemy champion grants 2 stacks. \n Each stack grants 7/10/13/16/19 [[AR_UP]] and 3.5/5/6.5/8/9.5 [[MR_UP]]. \n Attacking a non-minion target triggers a stack [[DURATION_RESET]]. \n \n Each bullet Graves lands with his [[BA]] reduces this skill's cooldown by 0.5 seconds. ([[CDR]]) \n \n 16/15/14/13/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "그레이브즈가 폭발성 탄환을 발사합니다. \n 발사 시 그레이브즈는 뒤로 밀려납니다. ([[DASH]]) \n \n 탄환은 첫 번째로 맞은 적에게 275/425/575(+150% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 탄환은 적 챔피언을 맞히거나 사거리 끝까지 날아간 다음 [[DETONATE]]하여 200/320/440(+120% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Graves fires an explosive shell. \n On firing, Graves is pushed backward. ([[DASH]]) \n \n The shell deals 275/425/575 (+150% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit. \n After hitting an enemy champion or reaching the end of its range, the shell [[DETONATE]]s, dealing 200/320/440 (+120% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default graves;
