import type { ChampData } from "../interactions/types";

const kogmaw: ChampData = {
  id: "kogmaw",
  skills: {
    P: ["ON_DEATH", "GHOSTING", "MS_UP", "SEPARATOR", "DETONATE"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["AS_UP"] },
      { label: { ko: "Q", en: "Q" }, tags: ["AR_MR_SHRED"] },
    ] },
    
    W: ["ON_HIT", "RANGE_UP"],
    E: ["SLOW"],
    R: ["R_FLASH", "REVEALED"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["REVEALED"],
  },

  gimmick: {
    P: ["ON_DEATH", "DMG_TRUE", "AOE"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS", "AS_UP"] },
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AR_MR_SHRED"] },
    ] },
    
    W: ["BUFF_FORM", "RANGE_UP", "BA", "DMG_MAGIC", "ON_HIT"],
    E: { phases: [
      { label: { ko: "E 투사체", en: "E Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ZONE", "SLOW"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "BUFF_STACK"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 코그모가 [[ON_DEATH]] \n [[GHOSTING]], [[MS_UP]]. (점점 효과 증가) \n 잠시 뒤 [[DETONATE]]하여 코그모 [[LEVEL_SCALE]] 비례 [[AOE]] [[DMG_TRUE]]. \n \n",

          "Q의 [[PASSIVE_BONUS]]는 [[AS_UP]].", 
          "Q는 [[PROJECTILE]] 발사. \n 적중하면 [[DMG_MAGIC]]와 [[AR_MR_SHRED]]. \n \n",

          "W는 [[BA]] [[RANGE_UP]]. \n [[TARGET_MAXHP_SCALE]] 비례 [[ON_HIT]] [[DMG_MAGIC]]. \n \n",

          "E는 [[PIERCE]] [[PROJECTILE]]를 발사하여 [[DMG_MAGIC]]. \n 지나간 자리에 [[ZONE]]생성. \n [[ZONE]]은 [[DOT]] [[SLOW]]. \n \n",

          "R은 [[ZONE]] 지정하고 [[BUFF_STACK]] 획득. \n 잠시 뒤 [[ZONE]]에 [[AOE]] [[REVEALED]]과 \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_MAGIC]]. \n 체력이 40% 이하인 적은 [[DMG_MAGIC]] 2배.", 
          "[[BUFF_STACK]]당 마나소모 40 증가. (최대 400)",
        ],

        en: [
          "P activates [[ON_DEATH]] \n [[GHOSTING]] and [[MS_UP]]. (effect increases gradually) \n After a moment, [[DETONATE]]s, dealing [[AOE]] [[DMG_TRUE]] (based on Kog'Maw's [[LEVEL_SCALE]]). \n \n",

          "Q's [[PASSIVE_BONUS]] is [[AS_UP]].",
          "Q fires a [[PROJECTILE]]. \n On hit, deals [[DMG_MAGIC]] and [[AR_MR_SHRED]]. \n \n",

          "W grants [[BA]] [[RANGE_UP]]. \n [[ON_HIT]] [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]]. \n \n",

          "E fires a [[PIERCE]] [[PROJECTILE]], dealing [[DMG_MAGIC]]. \n Leaves a [[ZONE]] along its path. \n The [[ZONE]] applies [[DOT]] [[SLOW]]. \n \n",

          "R targets a [[ZONE]] and grants a [[BUFF_STACK]]. \n After a moment, [[AOE]] [[REVEALED]] in the [[ZONE]] and \n [[DMG_MAGIC]] based on [[TARGET_MISSING_HP_SCALE]]. \n Enemies below 40% HP take double [[DMG_MAGIC]].",
          "Mana cost increases by 40 per [[BUFF_STACK]]. (Max 400)",
        ]

      },

      note2: {
        ko: [
        "W는 [[AA_RESET]] 불가."
      ],
        en: [
        "W cannot [[AA_RESET]]."
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 2,
    11: 1.5,
    16: 1,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_kogmawicathiansurprise_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.16)로 채움(CDragon 게임 데이터 kogmaw.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "코그모가 죽은 후 4초 동안 [[GHOSTING]] 상태가 됩니다. \n 계속 움직일 수 있으며 [[MS_SCALE]]가 10% 증가하고, \n 지속시간 동안 [[MS_SCALE]]가 50%까지 증가합니다. \n \n 지속시간이 끝나면 [[DETONATE]]하여 근처 적에게 140~650([[LEVEL_SCALE]] 비례)의 [[DMG_TRUE]]를 입힙니다.",
      en: "After dying, Kog'Maw becomes [[GHOSTING]] for 4 seconds. \n He can keep moving and his [[MS_SCALE]] increases by 10%, \n and his [[MS_SCALE]] ramps up to 50% over the duration. \n \n When the duration ends, he [[DETONATE]]s, dealing 140~650 (based on [[LEVEL_SCALE]]) [[DMG_TRUE]] to nearby enemies.",
    },
    Q: {
      ko: "[[PASSIVE_BONUS]]: 코그모의 [[AS_SCALE]]가 5/10/15/20/25% 증가합니다. \n \n 사용 시: 코그모가 부식성 침을 토하여 처음 맞은 적에게 80/125/170/215/260(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 4초 동안 마법 저항력과 방어력을 16/20/24/28/32% 낮춥니다. ([[AR_MR_SHRED]]) \n \n 7초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Kog'Maw's [[AS_SCALE]] increases by 5/10/15/20/25%. \n \n Active: Kog'Maw launches a corrosive glob, dealing 80/125/170/215/260 (+90% [[AP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit, \n and reducing their Magic Resist and Armor by 16/20/24/28/32% for 4 seconds. ([[AR_MR_SHRED]]) \n \n 7 second [[COOLDOWN]].",
    },
    W: {
      ko: "코그모의 [[RANGE_SCALE]]가 130/150/170/190/210 증가하고, \n 8초 동안 [[ON_HIT]] 추가로 [[TARGET_MAXHP_SCALE]] 비례의 3/3.75/4.5/5.25/6%(+[[AP_SCALE]] 100당 1.5%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 17초의 [[COOLDOWN]].",
      en: "Kog'Maw's [[RANGE_SCALE]] increases by 130/150/170/190/210, \n and for 8 seconds his attacks deal additional [[ON_HIT]] [[DMG_MAGIC]] equal to 3/3.75/4.5/5.25/6% (+1.5% per 100 [[AP_SCALE]]) of [[TARGET_MAXHP_SCALE]]. \n \n 17 second [[COOLDOWN]].",
    },
    E: {
      ko: "코그모가 분비물을 뱉어 70/110/150/190/230(+65% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 3초 동안 유지되는 분비물 흔적을 남깁니다. ([[ZONE]]) \n 흔적을 지나는 적은 40/45/50/55/60% [[SLOW]]됩니다. \n \n 12초의 [[COOLDOWN]].",
      en: "Kog'Maw spits ooze, dealing 70/110/150/190/230 (+65% [[AP_SCALE]]) [[DMG_MAGIC]] and leaving a trail of ooze that lasts 3 seconds. ([[ZONE]]) \n Enemies passing through the trail are [[SLOW]]ed by 40/45/50/55/60%. \n \n 12 second [[COOLDOWN]].",
    },
    R: {
      ko: "코그모가 범위 내에 산성을 뿌려, \n 100/140/180(+75% 추가 [[AD_SCALE]])(+35/40/45% [[AP_SCALE]]) + [[TARGET_MISSING_HP_SCALE]]의 1%당 0.833%에 해당하는 [[DMG_MAGIC]]를 입히고, \n 2초 동안 적중당한 적의 위치를 드러냅니다. ([[REVEALED]]) \n \n 체력이 40% 이하인 적들은 대신 200/280/360(+150% 추가 [[AD_SCALE]])(+70/80/90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입습니다. \n \n 8초 안에 사용한 후속 공격(R)은 40의 마나를 추가로 소모합니다. (최대: 400의 마나) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Kog'Maw sprays acid over an area, \n dealing 100/140/180 (+75% bonus [[AD_SCALE]]) (+35/40/45% [[AP_SCALE]]) + 0.833% per 1% of [[TARGET_MISSING_HP_SCALE]] as [[DMG_MAGIC]], \n and revealing enemies hit for 2 seconds. ([[REVEALED]]) \n \n Enemies at or below 40% HP instead take 200/280/360 (+150% bonus [[AD_SCALE]]) (+70/80/90% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Subsequent casts (R) within 8 seconds cost an additional 40 mana. (Max: 400 mana) \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default kogmaw;
