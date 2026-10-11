import type { ChampData } from "../interactions/types";

const elise: ChampData = {
  id: "elise",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["Q_FLASH"],                // 인간 Q는 Q플 X
      W: [],
      E: ["E_FLASH", "STUN", "REVEALED"],
      R: ["TRANSFORM", "SUMMON"],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP", "ON_HIT", "HEAL", "SEPARATOR", "ALLY_TP_OK"],

      Q: ["Q_FLASH", "DASH"],      // 변신 Q는 Q플 가능

      W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AS_UP", "AA_RESET"] },
    ] },
    
      E: ["E_FLASH", "OVERHEAD_VISION", "UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "SEPARATOR_NEWLINE", "SEPARATOR", "BLINK", "WALL_HOP"],

      R: ["TRANSFORM"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: ["VISION"],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["BUFF_STACK"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE"],
      W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["TIMING_CAST", "SUMMON", "HOMING"] },
      { label: { ko: "W 폭발", en: "W Explosion" }, tags: ["DETONATE", "AOE", "DMG_MAGIC"] },
    ] },
    
      E: ["TIMING_CAST", "PROJECTILE", "SEPARATOR", "STUN", "REVEALED"],
      R: ["TRANSFORM", "SUMMON"],
    },
    alt: {
      P: { phases: [
      { label: { ko: "P 새끼 거미", en: "P Spiderlings" }, tags: ["BUFF", "PER_STACK", "SUMMON", "SEPARATOR", "ALLY_TP_OK"] },
      { label: { ko: "P 온힛", en: "P On-Hit" }, tags: ["ON_HIT", "DMG_MAGIC", "HEAL"] },
    ] },

      Q: ["DMG_MAGIC", "TIMING_CAST", "SEPARATOR", "DASH"],

      W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["OF_SUMMON", "AS_UP"] },
      { label: { ko: "W", en: "W" }, tags: ["AS_UP", "SEPARATOR", "OF_SUMMON", "AS_UP"] },
    ] },

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["OVERHEAD_VISION", "UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "RECAST_CANCEL"] },
      { label: { ko: "E 하강", en: "E Descent" }, tags: ["ST_CONDITIONAL", "BLINK", "WALL_HOP"] },
      { label: { ko: "E 하강 버프", en: "E Descent Buff" }, tags: ["P", "BUFF", "EFFECT_UP"] },
    ] },
    
      R: ["TRANSFORM"],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "R로 인간과 거미로 [[TRANSFORM]]. \n 1레벨부터 사용 가능. \n \n",

          "인간폼", 
          "P는 인간폼 스킬이 적중하면 [[BUFF_STACK]] 1개 획득.", 

          "Q는 [[TARGETED]] [[PROJECTILE]]를 발사. \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_MAGIC]].",

          "W는 적을 찾아 따라가는 폭발거미 [[SUMMON]]. \n [[DETONATE]] 하여 [[AOE]] [[DMG_MAGIC]].",

          "E는 [[PROJECTILE]]를 발사 \n 대상은 [[STUN]]. \n \n",

          "거미폼",
          "P는 [[BUFF_STACK]]만큼 새끼 거미 [[SUMMON]]. \n 거미폼은 사거리가 줄어드는 대신 항상 \n [[BA]]에 [[ON_HIT]] ([[DMG_MAGIC]], [[HEAL]]).",

          "Q는 엘리스와 새끼 거미가 [[TARGETED]] [[DASH]]. \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_MAGIC]]. \n 이 공격에는 [[ON_HIT]] 효과가 발동.", 

          "W의 [[PASSIVE_BONUS]]는 새끼거미 기본 [[AS_UP]]. \n W는 엘리스와 새끼 거미의 [[AS_UP]].", 

          "E는 엘리스와 새끼 거미가 공중으로 올라감. \n [[OVERHEAD_VISION]]를 획득하고, [[UNTARGETABLE]] 상태로 대기. \n 시간이 지나거나 대상에 [[RECAST_CANCEL]]하면 \n 대상뒤로 [[BLINK]]하여 하강.", 
          "하강 후 [[BUFF]] 획득. \n [[BUFF]]는 P([[ON_HIT]] [[DMG_MAGIC]], [[HEAL]])의 효과 증가.", 
        ],

        en: [
          "R [[TRANSFORM]]s between human and spider form. \n Usable from level 1. \n \n",
          "Human Form",
          "P grants 1 [[BUFF_STACK]] when a Human Form skill hits.",
          "Q fires a [[TARGETED]] [[PROJECTILE]]. \n [[DMG_MAGIC]] based on [[TARGET_MISSING_HP_SCALE]].",
          "W [[SUMMON]]s an exploding spider that seeks out and follows enemies. \n It [[DETONATE]]s, dealing [[AOE]] [[DMG_MAGIC]].",
          "E fires a [[PROJECTILE]] \n that [[STUN]]s the target. \n \n",
          "Spider Form",
          "P [[SUMMON]]s spiderlings equal to the [[BUFF_STACK]]s. \n Spider Form has reduced range, but its [[BA]]s always \n apply [[ON_HIT]] ([[DMG_MAGIC]], [[HEAL]]).",
          "Q: Elise and her spiderlings perform a [[TARGETED]] [[DASH]]. \n [[DMG_MAGIC]] based on [[TARGET_MISSING_HP_SCALE]]. \n This attack applies [[ON_HIT]] effects.",
          "W's [[PASSIVE_BONUS]] grants spiderlings base [[AS_UP]]. \n W grants [[AS_UP]] to Elise and her spiderlings.",
          "E sends Elise and her spiderlings into the air. \n She gains [[OVERHEAD_VISION]] and waits while [[UNTARGETABLE]]. \n When time runs out or on [[RECAST_CANCEL]] onto a target, \n she [[BLINK]]s down behind the target.",
          "After descending, she gains a [[BUFF]]. \n The [[BUFF]] increases the effects of P ([[ON_HIT]] [[DMG_MAGIC]], [[HEAL]]).",
        ]

      },

      note2: {
        ko: [
        "인간폼 W는 지정한 위치까지 보낼 수 있는데, \n 최대 사거리는 미드 일자부쉬 정도. \n 부쉬안에 지정해서 보내면 부쉬안에도 들어감.", "거미폼 Q는 벽을 넘을 수 없음. \n 간혹 특정조건에 넘어지는데 \n 버그인지 의도된 동작인지는 확인되지 않음."
      ],
        en: [
          "Human form W can be sent to a specific location, \n with max range roughly equivalent to the mid lane straight-line bush. \n If aimed inside a bush, it will enter the bush.",
          "Spider form Q cannot hop walls. \n It occasionally passes over under specific conditions, \n but it's unconfirmed whether this is a bug or intended.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  
  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Elise,
  // 최근 변경 V26.19). DDragon tooltip은 인간 형태만 제공하므로 거미 형태는 DDragon description 문장을
  // 뼈대로 삼고 수치는 위키 본문/템플릿으로 채움.
  // R은 변신 스킬이라 ultCooldown이 0으로 되어 있어 {{ultCooldown}} 대신 재사용 대기시간 3초를 직접 표기.
  // 2026-09-30: 흐웨이와 동일하게 base(인간폼)/alt(거미폼) 폼별로 쪼갬. 이전엔 슬롯 하나에
  // "인간 형태: ... 거미 형태: ..."를 같이 적었는데, 폼 탭에 따라 아이콘이 바뀌므로(forms.ts의
  // skillIcons) 문장도 그 폼 것만 보이게 나눔. Q·R 쿨타임은 두 형태 공통 표기였어서 양쪽에 반복 기입.
  // alt.R(거미 → 인간 복귀)은 DDragon에 해당 문장이 없어 새로 쓴 문장.
  skillTooltip: {
    base: { // 인간폼
      P: {
        ko: "엘리스의 스킬이 적에 적중하면 휴면 상태의 새끼 거미가 생깁니다(R 레벨에 따라 최대 2/3/4/5마리).",
        en: "When Elise's skills hit an enemy, she gains a dormant Spiderling (up to 2/3/4/5 based on R's level).",
      },
      Q: {
        ko: "엘리스가 신경독을 주입해 40/70/100/130/160+[[TARGET_CURRENT_HP_SCALE]]의 4%(+주문력 100당 3%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 6초의 [[COOLDOWN]].",
        en: "Elise injects neurotoxin, dealing 40/70/100/130/160 + 4% (+3% per 100 AP) of [[TARGET_CURRENT_HP_SCALE]] as [[DMG_MAGIC]]. \n \n 6 second [[COOLDOWN]].",
      },
      W: {
        ko: "엘리스가 폭발하는 새끼 거미를 [[SUMMON]] 합니다. \n 지정한 위치로 이동해 근처에 적이 있을 때 따라가거나, 3초 뒤에 폭발합니다. \n 거미는 60/100/140/180/220(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 12초의 [[COOLDOWN]].",
        en: "Elise [[SUMMON]]s an explosive Spiderling. \n It moves to the target location and follows nearby enemies, or explodes after 3 seconds. \n The spider deals 60/100/140/180/220 (+75% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 12 second [[COOLDOWN]].",
      },
      E: {
        ko: "엘리스가 고치를 던져 처음 적중한 적을 1.6/1.8/2/2.2/2.4초 동안 [[STUN]]시키며, 위치를 드러냅니다. ([[REVEALED]]) \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
        en: "Elise throws a cocoon that [[STUN]]s the first enemy hit for 1.6/1.8/2/2.2/2.4 seconds and reveals their position. ([[REVEALED]]) \n \n 12/11.5/11/10.5/10 second [[COOLDOWN]].",
      },
      R: {
        ko: "엘리스가 위협적인 거미로 [[TRANSFORM]]하여 근접 챔피언이 되며 거미 형태 스킬을 사용할 수 있고 휴면 상태의 새끼 거미를 모두 [[SUMMON]]합니다. \n \n 거미 형태: 공격 사거리가 줄어드는 대신 25 [[MS_UP]]를 얻습니다. \n 거미폼 스킬을 사용하고, 새끼 거미 떼가 적을 공격합니다. \n \n 3초의 [[COOLDOWN]].",
        en: "Elise [[TRANSFORM]]s into a menacing spider, becoming a melee champion with access to Spider Form skills, and [[SUMMON]]s all dormant Spiderlings. \n \n Spider Form: attack range is reduced, but she gains 25 [[MS_UP]]. \n She uses Spider Form skills, and her Spiderling swarm attacks enemies. \n \n 3 second [[COOLDOWN]].",
      },
    },

    alt: { //거미폼
      P: {
        ko: "[[BA]] 공격 시 14/24/34/44(+15% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]를 입히고, 엘리스의 체력이 6/8/10/12(+8% [[AP_SCALE]]) [[HEAL]]됩니다. (R [[SKILL_LEVEL_SCALE]]비례)",
        en: "[[BA]]s deal an additional 14/24/34/44 (+15% [[AP_SCALE]]) [[DMG_MAGIC]] and [[HEAL]] Elise for 6/8/10/12 (+8% [[AP_SCALE]]). (Based on R's [[SKILL_LEVEL_SCALE]])",
      },
      Q: {
        ko: "적 하나에게 [[DASH]]하여, 50/80/110/140/170+[[TARGET_MISSING_HP_SCALE]]의 8%(+주문력 100당 3%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 6초의 [[COOLDOWN]].",
        en: "Elise [[DASH]]es to an enemy, dealing 50/80/110/140/170 + 8% (+3% per 100 AP) of [[TARGET_MISSING_HP_SCALE]] as [[DMG_MAGIC]]. \n \n 6 second [[COOLDOWN]].",
      },
      W: {
        ko: "[[PASSIVE_BONUS]]: 새끼 거미들이 5/10/15/20/25% [[AS_UP]]를 얻습니다. \n \n 사용 시: 3초 동안 엘리스와 새끼 거미들이 70/85/100/115/130%의 [[AS_UP]]를 얻습니다. \n \n 6초의 [[COOLDOWN]].",
        en: "[[PASSIVE_BONUS]]: Spiderlings gain 5/10/15/20/25% [[AS_UP]]. \n \n Active: Elise and her Spiderlings gain 70/85/100/115/130% [[AS_UP]] for 3 seconds. \n \n 6 second [[COOLDOWN]].",
      },
      E: {
        ko: "엘리스와 새끼 거미들이 공중으로 올라가 [[OVERHEAD_VISION]]를 얻고 [[UNTARGETABLE]] 상태가 됩니다. \n 잠시 후에 하강해 5초 동안 거미 여왕(P)의 추가 피해량과 회복량이 40/55/70/85/100% 증가합니다. \n 주변에 대상이 있다면 E [[RECAST_CANCEL]]하여 일찍 하강할 수 있습니다. \n \n 22/21/20/19/18초의 [[COOLDOWN]].",
        en: "Elise and her Spiderlings ascend into the air, gaining [[OVERHEAD_VISION]] and becoming [[UNTARGETABLE]]. \n After a moment they descend, and for 5 seconds Spider Queen (P)'s bonus damage and healing are increased by 40/55/70/85/100%. \n If a target is nearby, she can E [[RECAST_CANCEL]] to descend early. \n \n 22/21/20/19/18 second [[COOLDOWN]].",
      },
      R: {
        ko: "엘리스가 인간 형태로 [[TRANSFORM]]하여 원거리 챔피언이 되며 인간 형태 스킬을 사용할 수 있고, 새끼 거미들은 휴면 상태로 돌아갑니다. \n \n 3초의 [[COOLDOWN]].",
        en: "Elise [[TRANSFORM]]s into human form, becoming a ranged champion with access to Human Form skills, and her Spiderlings return to dormancy. \n \n 3 second [[COOLDOWN]].",
      },
    },
  },
};

export default elise;
