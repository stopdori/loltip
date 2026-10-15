import type { ChampData } from "../interactions/types";

const jax: ChampData = {
  id: "jax",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "DASH", "WALL_HOP"],
    W: ["AA_RESET"],
    E: ["DODGE", "STUN", "SEPARATOR", "ST_CONDITIONAL", "AOE", "DMG_REDUCE"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["R_FLASH", "SEPARATOR", "ON_CHAMP_HIT", "AR_MR_UP"] },
    ] },
    
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_STACK", "AS_UP"],
    Q: ["DMG_PHYSICAL", "TARGETED", "SEPARATOR", "DASH", "WALL_HOP"],
    W: ["DMG_MAGIC", "ON_HIT"],

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DODGE", "RECAST_DETONATE", "SEPARATOR", "ST_CONDITIONAL", "AOE", "DMG_REDUCE"] },
      { label: { ko: "E2", en: "E2" }, tags: ["DMG_MAGIC", "AOE", "STUN", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "ADDITIONAL"] },
    ] },

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT", "DMG_MAGIC"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "ADDITIONAL"] },
      { label: { ko: "R 버프", en: "R Buff" }, tags: ["ON_CHAMP_HIT", "AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "AR_MR_UP", "ADDITIONAL"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[BA]] 공격 시 [[BUFF_STACK]]. \n [[PER_STACK]] [[AS_UP]]. (최대 8스택) \n \n",

          "Q는 대상에게 [[DASH]]하여 [[DMG_PHYSICAL]]. \n 아군, 적군, 와드, 수정초 등등 \n 웬만한 대상에 [[DASH]] 가능. \n \n",

          "W는 다음 [[BA]] 또는 Q에 [[DMG_MAGIC]] 추가. \n [[AA_RESET]] 가능. \n \n",

          "E는 2초간 방어태세 돌입. \n [[BA]] 공격을 [[DODGE]]하고 [[AOE]] [[DMG_REDUCE]].", 
          "E2 [[RECAST_DETONATE]] 시 \n [[TARGET_MAXHP_SCALE]] 비례 [[DMG_MAGIC]]와 [[STUN]]. \n [[DODGE]]한 공격당 피해량 20%씩 증가. (최대 100%) \n 미니언 공격도 포함. \n \n",

          "R의 [[PASSIVE_BONUS]]는 [[BA]] 2대 공격 시 [[BUFF]]. \n [[BUFF]]는 다음 [[BA]]에 [[DMG_MAGIC]] 추가. (쿵쿵따) \n R로 [[ON_CHAMP_HIT]] (쿵따) 패턴으로 변경. ",
          "R은 [[AOE]] [[DMG_MAGIC]]. \n [[ON_CHAMP_HIT]] [[AR_MR_UP]]. \n 챔피언 하나당 [[AR_MR_UP]] 추가."
        ],

        en: ["P gains a [[BUFF_STACK]] on [[BA]]. \n [[AS_UP]] [[PER_STACK]]. (Max 8 stacks) \n \n",
          "Q [[DASH]]es to the target, dealing [[DMG_PHYSICAL]]. \n Allies, enemies, wards, Scryer's Bloom, etc. \n Can [[DASH]] to most targets. \n \n",
          "W adds [[DMG_MAGIC]] to the next [[BA]] or Q. \n Can [[AA_RESET]]. \n \n",
          "E enters a defensive stance for 2 seconds. \n [[DODGE]]s [[BA]]s and grants [[AOE]] [[DMG_REDUCE]].",
          "On E2 [[RECAST_DETONATE]], \n deals [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]] and [[STUN]]. \n Damage increases by 20% per [[DODGE]]d attack. (Max 100%) \n Minion attacks also count. \n \n",
          "R's [[PASSIVE_BONUS]] grants a [[BUFF]] after 2 [[BA]]s. \n The [[BUFF]] adds [[DMG_MAGIC]] to the next [[BA]]. (beat-beat-hit) \n R [[ON_CHAMP_HIT]] changes the pattern to (beat-hit). ",
          "R deals [[AOE]] [[DMG_MAGIC]]. \n [[ON_CHAMP_HIT]] grants [[AR_MR_UP]]. \n Additional [[AR_MR_UP]] per champion."
        ]

      },

      note2: {
        ko: [
        "R 배우고는 항상 마음속으로 ''쿵쿵따''를 생각. \n R을 사용하면 ''쿵따''로 변경. \n''따'' 리듬에 상대를 패기.", 
        "E1을 사용중일 때 CC에 걸리면 \n E2를 사용 할 수 없음. \n 단, [[SLOW]], [[ROOT]] 제외"
      ],
        en: ["After learning R, always think 'beat-beat-hit' in your head. \n After using R it changes to 'beat-hit'. \n On the 'hit' rhythm, attack the enemy.",
          "If Jax is hit by CC while using E1, \n E2 cannot be used. \n Except for [[SLOW]] and [[ROOT]]"
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 game_character_passivetooltip_jax(인게임 원문)를
  // 뼈대로 씀. 수치는 공식 위키(V26.12)로 채움(CDragon 게임 데이터
  // jax.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "잭스가 [[BA]] 시 2.5초 동안 [[BUFF_STACK]]을 1개 얻습니다. (최대 8스택) \n [[PER_STACK]] [[AS_SCALE]]가 5~12.5%([[LEVEL_SCALE]] 비례) 상승합니다. \n \n 최대 [[AS_SCALE]] 40~100%([[LEVEL_SCALE]] 비례)",
      en: "On [[BA]], Jax gains 1 [[BUFF_STACK]] for 2.5 seconds. (Max 8 stacks) \n [[AS_SCALE]] increases by 5~12.5% (based on [[LEVEL_SCALE]]) [[PER_STACK]]. \n \n Max [[AS_SCALE]] 40~100% (based on [[LEVEL_SCALE]])",
    },
    Q: {
      ko: "잭스가 아군 또는 적 유닛, 와드를 향해 도약([[DASH]]) 합니다. \n 적인 경우 65/105/145/185/225(+100% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 8/7.5/7/6.5/6초의 [[COOLDOWN]].",
      en: "Jax leaps ([[DASH]]) toward an allied or enemy unit or ward. \n If it's an enemy, he deals 65/105/145/185/225 (+100% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n 8/7.5/7/6.5/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "잭스가 무기에 힘을 모아 다음 [[BA]]나 도약 공격 시 50/85/120/155/190(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. ([[EMPOWERED]]) \n \n 7/6/5/4/3초의 [[COOLDOWN]].",
      en: "Jax charges his weapon with energy, making his next [[BA]] or Leap Strike deal an additional 50/85/120/155/190 (+60% [[AP_SCALE]]) [[DMG_MAGIC]]. ([[EMPOWERED]]) \n \n 7/6/5/4/3 second [[COOLDOWN]].",
    },
    E: {
      ko: "잭스가 2초간 방어 태세에 들어가 [[BA]]를 [[DODGE]]하고, 광역 스킬로부터 받는 피해가 25% 감소합니다. ([[DMG_REDUCE]]) \n 2초가 지나거나 E [[RECAST_DETONATE]]하면, \n 근처 적들에게 40/70/100/130/160(+70% [[AP_SCALE]]) + [[TARGET_MAXHP_SCALE]] 비례의 4%에 해당하는 [[DMG_MAGIC]]를 입히고 1초 동안 [[STUN]]시킵니다. \n \n [[DODGE]]한 [[BA]] 1회당 피해량이 20%씩, \n 최대 80/140/200/260/320(+140% [[AP_SCALE]]) + [[TARGET_MAXHP_SCALE]] 비례의 8%까지 증가합니다. \n \n 17/15/13/11/9초의 [[COOLDOWN]].",
      en: "Jax takes a defensive stance for 2 seconds, [[DODGE]]ing [[BA]]s and taking 25% less damage from area-of-effect skills. ([[DMG_REDUCE]]) \n After 2 seconds or on E [[RECAST_DETONATE]], \n he deals 40/70/100/130/160 (+70% [[AP_SCALE]]) + 4% of [[TARGET_MAXHP_SCALE]] [[DMG_MAGIC]] to nearby enemies and [[STUN]]s them for 1 second. \n \n Damage increases by 20% per [[DODGE]]d [[BA]], \n up to 80/140/200/260/320 (+140% [[AP_SCALE]]) + 8% of [[TARGET_MAXHP_SCALE]]. \n \n 17/15/13/11/9 second [[COOLDOWN]].",
    },
    R: {
      ko: "[[PASSIVE_BONUS]]: 2.5초 안에 세 번째 공격을 할 때마다 75/130/185(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 사용 시: 잭스가 가로등을 내리쳐 주변 적에게 100/175/250(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 챔피언을 맞히면 [[AR_SCALE]]이 45/60/75(+40% 추가 [[AD_SCALE]]), [[MR_SCALE]]이 27/36/45(+24% 추가 [[AD_SCALE]]) 증가하며, \n 다음 8초 안에 맞힌 챔피언 하나당 [[AR_SCALE]]이 20/25/30(+10% 추가 [[AD_SCALE]]), [[MR_SCALE]]이 12/15/18(+6% 추가 [[AD_SCALE]])씩 추가로 증가합니다. \n \n 이때 세 번째가 아닌 두 번째 [[BA]]마다 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Every third attack within 2.5 seconds deals an additional 75/130/185 (+60% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Active: Jax slams his lamppost, dealing 100/175/250 (+100% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies. \n If he hits a champion, his [[AR_SCALE]] increases by 45/60/75 (+40% bonus [[AD_SCALE]]) and [[MR_SCALE]] by 27/36/45 (+24% bonus [[AD_SCALE]]), \n and for each champion hit within the next 8 seconds, his [[AR_SCALE]] increases by an additional 20/25/30 (+10% bonus [[AD_SCALE]]) and [[MR_SCALE]] by 12/15/18 (+6% bonus [[AD_SCALE]]). \n \n During this time, every second [[BA]] instead of every third deals additional [[DMG_MAGIC]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default jax;
