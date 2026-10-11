import type { ChampData } from "../interactions/types";

const gnar: ChampData = {
  id: "gnar",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["AS_UP", "MS_UP", "RANGE_UP", "SEPARATOR", "ST_CONDITIONAL", "TRANSFORM"],
      Q: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      W: ["MS_UP"],

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["E_FLASH", "AS_UP", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "E 추가 돌진", en: "E Extra Dash" }, tags: ["ST_CONDITIONAL", "SLOW", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

      R: ["PASSIVE_BONUS", "SEPARATOR", "W", "MS_UP", "ADDITIONAL"],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MAX_HP_UP", "AR_MR_UP", "AD_UP", "SEPARATOR", "ST_DELAYED", "TRANSFORM"],
      Q: ["Q_FLASH", "SLOW", "DROP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      W: ["STUN"],
      E: ["DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
      R: ["KNOCKBACK", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
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
      E: [],
      R: [],
    },
  },

  gimmick: {

    base: {
      P: { phases: [
      { label: { ko: "P 미니 나르 보너스", en: "P Mini Gnar Bonus" }, tags: ["AS_UP", "MS_UP", "RANGE_UP"] },
      { label: { ko: "P 폼 변환", en: "P Transform" }, tags: ["ST_CONDITIONAL", "TRANSFORM"] },
    ] },
      
      Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "PIERCE"] },
      { label: { ko: "오는 Q", en: "Return Q" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
    ] },
      
      W: ["DEBUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["AS_UP", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "E 추가 돌진", en: "E Extra Dash" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "SLOW", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

      R: ["PASSIVE_BONUS", "SEPARATOR", "W", "MS_UP", "ADDITIONAL"],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: { phases: [
      { label: { ko: "P 메가 나르 보너스", en: "P Mega Gnar Bonus" }, tags: ["MAX_HP_UP", "AR_MR_UP", "AD_UP"] },
      { label: { ko: "P 폼 변환", en: "P Transform" }, tags: ["ST_DELAYED", "TRANSFORM"] },
    ] },

      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE", "SLOW", "DROP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      W: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "STUN"],
      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "E 중앙 범위", en: "E Center Area" }, tags: ["SLOW"] },
      ] },
      
      R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "KNOCKBACK", "SLOW"] },
      { label: { ko: "R 벽 충돌", en: "R Wall Collision" }, tags: ["WALL_COLLISION", "DMG_PHYSICAL", "STUN"] },
    ] },
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "미니나르에서 때리거나 맞을 때 분노 획득. \n 100일때 참을수 없는 [[BUFF]]가 생김. \n 잠시 후 메가나르로 [[TRANSFORM]]. \n 스킬을 사용하면 즉시 [[TRANSFORM]] 가능. \n \n",

          "미니 나르 \n 기본 [[MS_UP]], [[AS_UP]], [[RANGE_UP]].", 

          "Q는 부메랑 [[PROJECTILE]] 발사. \n 대상이 맞으면 [[DMG_PHYSICAL]]와 [[SLOW]]. \n 약간의 [[PIERCE]] 후 나르에게 되돌아옴. \n 돌아온 부메랑을 받으면 [[CDR]].", 

          "W의 [[PASSIVE_BONUS]]는  [[BA]]와 [[Q]]에 [[DEBUFF_STACK]]. \n 3개 쌓이면 \n [[TARGET_MAXHP_SCALE]] 비례 [[DMG_MAGIC]]와 [[MS_UP]].", 
          "E는 [[AS_UP]]하고 [[DASH]]. \n 적을 밟으면 [[DMG_PHYSICAL]], [[SLOW]]와 한 번 더 [[DASH]].", "R은 미니 나르일때는 사용할 수 없음. \n 대신 R의 [[PASSIVE_BONUS]] 효과로 \n W의 [[MS_UP]] 효과 [[EMPOWERED]]. \n \n",
          


          "메가 나르 \n 기본 [[MAX_HP_UP]], [[AR_MR_UP]], [[AD_UP]].", 

          "Q는 바위 [[PROJECTILE]]를 발사. \n 적중하면 [[AOE]] [[DMG_PHYSICAL]], [[SLOW]]. \n 바닥에 바위 [[DROP]] 생성. \n 주우면 [[CDR]].", 

          "W는 전방 [[AOE]] [[DMG_PHYSICAL]]와 [[STUN]].", 

          "E는 [[DASH]]하여 [[AOE]] [[DMG_PHYSICAL]]. \n 중앙 [[AOE]]는 [[SLOW]] 추가.", 

          "R은 주변 [[AOE]] [[DMG_PHYSICAL]]와 [[KNOCKBACK]], [[SLOW]]. \n [[WALL_COLLISION]] 시 추가 [[DMG_PHYSICAL]]와 [[STUN]]."
        ],

        en: ["Mini Gnar gains Rage when attacking or being hit. \n At 100, an Unstoppable [[BUFF]] appears. \n Shortly after, he [[TRANSFORM]]s into Mega Gnar. \n Using a skill lets him [[TRANSFORM]] immediately. \n \n",
          "Mini Gnar \n Base [[MS_UP]], [[AS_UP]], [[RANGE_UP]].",
          "Q fires a boomerang [[PROJECTILE]]. \n Targets hit take [[DMG_PHYSICAL]] and [[SLOW]]. \n After slightly [[PIERCE]]ing, it returns to Gnar. \n Catching the returning boomerang grants [[CDR]].",
          "W's [[PASSIVE_BONUS]] applies [[DEBUFF_STACK]] with [[BA]]s and [[Q]]. \n At 3 stacks, \n deals [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]] and grants [[MS_UP]].",
          "E grants [[AS_UP]] and [[DASH]]es. \n Hopping on an enemy deals [[DMG_PHYSICAL]], [[SLOW]], and [[DASH]]es once more.",
          "R cannot be used as Mini Gnar. \n Instead, R's [[PASSIVE_BONUS]] \n [[EMPOWERED]]s W's [[MS_UP]] effect. \n \n",
          "Mega Gnar \n Base [[MAX_HP_UP]], [[AR_MR_UP]], [[AD_UP]].",
          "Q throws a boulder [[PROJECTILE]]. \n On hit, deals [[AOE]] [[DMG_PHYSICAL]] and [[SLOW]]. \n The boulder creates a [[DROP]] on the ground. \n Picking it up grants [[CDR]].",
          "W deals [[AOE]] [[DMG_PHYSICAL]] and [[STUN]] in front.",
          "E [[DASH]]es and deals [[AOE]] [[DMG_PHYSICAL]]. \n The center [[AOE]] also applies [[SLOW]].",
          "R deals nearby [[AOE]] [[DMG_PHYSICAL]], [[KNOCKBACK]], and [[SLOW]]. \n On [[WALL_COLLISION]], deals bonus [[DMG_PHYSICAL]] and [[STUN]]."
        ]

      },

      note2: {
        ko: [
        "메가나르는 15초 고정지속. \n 늘리거나 줄일 수 없음.", 
        
        "분노 90이상일때 ''분노 [[BUFF]]''가 생기는데 \n 어떤 기능인지 모르겠음.", 
        
        "수정초, 솔방울 탄, 꿀열매를 공격해도 분노 획득.", 

        "미니 나르의 E는 미니언도 밟을 수 있음.", 
        
        "[[TRANSFORM]]이 준비됐을 때 \n 미니 나르 E로 발동하면, \n [[DASH]]할 때 메가나르로 [[TRANSFORM]] 하고 \n 적을 밟으면 미니 나르 E의 2단 [[DASH]]도 발동."
      ],
        en: ["Mega Gnar lasts a fixed 15 seconds. \n Cannot be extended or reduced.",
          "At 90+ rage, an 'Enraged [[BUFF]]' appears, \n but its exact effect is unknown.",
          "Attacking Scryer's Bloom, Blast Cones, and Honeyfruit also builds rage.",
          "Mini Gnar's E can also hop on minions.",
          "When [[TRANSFORM]] is ready \n and triggered with Mini Gnar's E, \n Gnar [[TRANSFORM]]s into Mega Gnar during the [[DASH]], \n and hopping on an enemy still triggers Mini Gnar's E second [[DASH]]."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 90,
    11: 60,
    16: 30,
  },

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 인게임 원문(CDragon ko_kr lol.stringtable의 spell_gnar*_tooltip)
  // + 공식 위키(wiki.leagueoflegends.com/en-us/Gnar, 스킬 수치 최근 변경 V25.16). DDragon tooltip은 미니 나르만,
  // P는 요약본만 담고 있어 메가 나르 스킬(spell_gnarbig*_tooltip)과 P는 문자열 테이블 원문을 뼈대로 삼고,
  // 수치는 위키 본문/템플릿으로 채움.
  // 2026-10-10: 흐웨이와 동일하게 base(미니)/alt(메가) 폼별로 쪼갬. 이전엔 슬롯 하나에
  // "미니 나르: ... 메가 나르: ..."를 같이 적었는데, 폼 탭에 따라 아이콘이 바뀌므로(forms.ts의
  // skillIcons) 문장도 그 폼 것만 보이게 나눔. P는 두 폼에 동일 문장 반복 기입.
  // Q·E 쿨타임은 두 형태 공통 표기였어서 양쪽에 반복. W·R 미니는 패시브 효과뿐이라 쿨타임 줄 없음.
  skillTooltip: {
    base: {
      P: {
        ko: "나르가 피해를 입거나 입힐 때 분노를 생성합니다. \n 분노가 최고치에 도달하면 다음번 스킬을 사용할 때 15초 동안 메가 나르로 [[TRANSFORM]]합니다. \n \n 미니 나르: 0~20([[LEVEL_SCALE]] 비례)의 [[MS_UP]], [[AS_UP]], [[RANGE_UP]]을 얻습니다. \n \n 메가 나르: 100~831의 [[MAX_HP_UP]], 3.5~54.5의 [[AR_UP]], 3.5~63의 [[MR_UP]], 6~48.5의 [[AD_UP]]를 얻습니다. ([[LEVEL_SCALE]] 비례)",
        en: "Gnar generates Rage when dealing or taking damage. \n At max Rage, his next skill [[TRANSFORM]]s him into Mega Gnar for 15 seconds. \n \n Mini Gnar: Gains 0~20 (based on [[LEVEL_SCALE]]) [[MS_UP]], [[AS_UP]], and [[RANGE_UP]]. \n \n Mega Gnar: Gains 100~831 [[MAX_HP_UP]], 3.5~54.5 [[AR_UP]], 3.5~63 [[MR_UP]], and 6~48.5 [[AD_UP]]. (based on [[LEVEL_SCALE]])",
      },
      Q: {
        ko: "나르가 부메랑을 던져 5/45/85/125/165(+125% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 2초 동안 15/20/25/30/35% [[SLOW]]시킵니다. \n 부메랑은 적 하나를 맞힌 다음 돌아오며, 이후 맞히는 적들은 받는 피해량이 감소합니다. \n 적 하나당 부메랑에 한 번만 맞습니다. \n \n 부메랑을 받으면 재사용 대기시간이 40% 감소합니다. ([[CDR]]) \n \n 16/14.5/13/11.5/10초의 [[COOLDOWN]].",
        en: "Gnar throws a boomerang that deals 5/45/85/125/165 (+125% [[AD_SCALE]]) [[DMG_PHYSICAL]] and [[SLOW]]s by 15/20/25/30/35% for 2 seconds. \n The boomerang returns after hitting one enemy, and enemies hit afterward take reduced damage. \n Each enemy can only be hit once per boomerang. \n \n Catching the boomerang reduces its cooldown by 40%. ([[CDR]]) \n \n 16/14.5/13/11.5/10 second [[COOLDOWN]].",
      },
      W: {
        ko: "[[PASSIVE_BONUS]]: 같은 적에게 세 번째 [[BA]]나 스킬을 가할 때마다 0/10/20/30/40(+100% [[AP_SCALE]]) + [[TARGET_MAXHP_SCALE]]의 6/8/10/12/14%에 해당하는 [[DMG_MAGIC]]를 추가로 입히며 20/40/60/80%(R [[SKILL_LEVEL_SCALE]] 비례)의 [[MS_UP]]를 얻은 뒤 3초에 걸쳐 원래대로 돌아옵니다.",
        en: "[[PASSIVE_BONUS]]: Every third [[BA]] or skill on the same enemy deals an additional 0/10/20/30/40 (+100% [[AP_SCALE]]) + 6/8/10/12/14% of [[TARGET_MAXHP_SCALE]] [[DMG_MAGIC]] and grants 20/40/60/80% (based on R's [[SKILL_LEVEL_SCALE]]) [[MS_UP]] that decays over 3 seconds.",
      },
      E: {
        ko: "나르가 폴짝 뛰어([[DASH]]) 6초 동안 40/45/50/55/60%의 [[AS_UP]]를 얻습니다. \n 유닛 위에 착지하면 튕겨서 한 번 더 [[DASH]]합니다. \n 적에게 착지하여 튕기면 50/85/120/155/190(+6% [[SELF_MAXHP_SCALE]])의 [[DMG_PHYSICAL]]를 입히며 잠시 80% [[SLOW]]시킵니다. \n \n 22/19.5/17/14.5/12초의 [[COOLDOWN]].",
        en: "Gnar hops ([[DASH]]) and gains 40/45/50/55/60% [[AS_UP]] for 6 seconds. \n Landing on a unit makes him bounce and [[DASH]] once more. \n Bouncing off an enemy deals 50/85/120/155/190 (+6% [[SELF_MAXHP_SCALE]]) [[DMG_PHYSICAL]] and briefly [[SLOW]]s them by 80%. \n \n 22/19.5/17/14.5/12 second [[COOLDOWN]].",
      },
      R: {
        ko: "[[PASSIVE_BONUS]]: 슝슝(W)의 [[MS_UP]] 효과가 증가합니다.",
        en: "[[PASSIVE_BONUS]]: Increases the [[MS_UP]] effect of Hyper (W).",
      },
    },

    alt: {
      P: {
        ko: "나르가 피해를 입거나 입힐 때 분노를 생성합니다. \n 분노가 최고치에 도달하면 다음번 스킬을 사용할 때 15초 동안 메가 나르로 [[TRANSFORM]]합니다. \n \n 미니 나르: 0~20([[LEVEL_SCALE]] 비례)의 [[MS_UP]], [[AS_UP]], [[RANGE_UP]]을 얻습니다. \n \n 메가 나르: 100~831의 [[MAX_HP_UP]], 3.5~54.5의 [[AR_UP]], 3.5~63의 [[MR_UP]], 6~48.5의 [[AD_UP]]를 얻습니다([[LEVEL_SCALE]] 비례).",
        en: "Gnar generates Rage when dealing or taking damage. \n At max Rage, his next skill [[TRANSFORM]]s him into Mega Gnar for 15 seconds. \n \n Mini Gnar: Gains 0~20 (based on [[LEVEL_SCALE]]) [[MS_UP]], [[AS_UP]], and [[RANGE_UP]]. \n \n Mega Gnar: Gains 100~831 [[MAX_HP_UP]], 3.5~54.5 [[AR_UP]], 3.5~63 [[MR_UP]], and 6~48.5 [[AD_UP]] (based on [[LEVEL_SCALE]]).",
      },
      Q: {
        ko: "나르가 돌덩이를 던져 처음 적중한 적과 주변 적에게 45/90/135/180/225(+140% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 2초 동안 30/35/40/45/50% [[SLOW]]시킵니다. \n 돌덩이를 집어 들면 이 스킬의 재사용 대기시간이 70% 감소합니다. ([[CDR]]) \n \n 16/14.5/13/11.5/10초의 [[COOLDOWN]].",
        en: "Gnar throws a boulder that deals 45/90/135/180/225 (+140% [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit and nearby enemies, [[SLOW]]ing them by 30/35/40/45/50% for 2 seconds. \n Picking up the boulder reduces this skill's cooldown by 70%. ([[CDR]]) \n \n 16/14.5/13/11.5/10 second [[COOLDOWN]].",
      },
      W: {
        ko: "나르가 일정 범위를 내리치며 해당 범위 내 유닛에게 45/75/105/135/165(+100% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 1.25초 동안 [[STUN]]시킵니다. \n \n 7초의 [[COOLDOWN]].",
        en: "Gnar smashes an area, dealing 45/75/105/135/165 (+100% [[AD_SCALE]]) [[DMG_PHYSICAL]] to units within it and [[STUN]]ning them for 1.25 seconds. \n \n 7 second [[COOLDOWN]].",
      },
      E: {
        ko: "나르가 폴짝 뛰어 착지하며 근처 적에게 80/115/150/185/220(+6% [[SELF_MAXHP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 착지 지점 바로 밑에 있는 적은 추가로 잠시 80% [[SLOW]]됩니다. \n \n 22/19.5/17/14.5/12초의 [[COOLDOWN]].",
        en: "Gnar hops and lands, dealing 80/115/150/185/220 (+6% [[SELF_MAXHP_SCALE]]) [[DMG_PHYSICAL]] to nearby enemies. \n Enemies directly beneath the landing spot are also briefly [[SLOW]]ed by 80%. \n \n 22/19.5/17/14.5/12 second [[COOLDOWN]].",
      },
      R: {
        ko: "근처 적을 던져 200/300/400(+50% 추가 [[AD_SCALE]])(+100% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 [[KNOCKBACK]]시키며 1.25/1.5/1.75초 동안 45% [[SLOW]]시킵니다. \n [[WALL_COLLISION]]하는 적은 300/450/600(+75% 추가 [[AD_SCALE]])(+150% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입고 [[STUN]]합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "Gnar throws nearby enemies, dealing 200/300/400 (+50% bonus [[AD_SCALE]]) (+100% [[AP_SCALE]]) [[DMG_PHYSICAL]], [[KNOCKBACK]]ing them and [[SLOW]]ing them by 45% for 1.25/1.5/1.75 seconds. \n Enemies that hit a wall ([[WALL_COLLISION]]) take 300/450/600 (+75% bonus [[AD_SCALE]]) (+150% [[AP_SCALE]]) [[DMG_PHYSICAL]] and are [[STUN]]ned. \n \n {{ultCooldown}} second [[COOLDOWN]].",
      },
    },
  },
};

export default gnar;
