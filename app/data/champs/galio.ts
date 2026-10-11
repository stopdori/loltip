import type { ChampData } from "../interactions/types";

const galio: ChampData = {
  id: "galio",
  skills: {
    P: ["COOLDOWN", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: ["Q_FLASH"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["COOLDOWN", "MAGIC_SHIELD"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["MS_DOWN", "DMG_REDUCE", "SEPARATOR", "TAUNT", "SLOW"] },
    ] },
    E: ["DASH", "AIRBORNE", "CC_BUFFER"],

    R: { phases: [
      { label: { ko: "R 채널링", en: "R Channeling" }, tags: ["R_FLASH", "MAGIC_SHIELD"] },
      { label: { ko: "R 착지", en: "R Landing" }, tags: ["BLINK", "WALL_HOP", "SEPARATOR", "AIRBORNE"] },
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
    P: ["DMG_MAGIC", "ON_HIT", "AOE", "COOLDOWN", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE"] },
      { label: { ko: "와류", en: "Tornado" }, tags: ["DOT", "DMG_MAGIC", "ZONE"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "COOLDOWN", "MAGIC_SHIELD"] },
      { label: { ko: "W 차징", en: "W Charging" }, tags: ["SKILL_CHARGED", "MS_DOWN","DMG_REDUCE"] },
      { label: { ko: "W 도발", en: "W Taunt" }, tags: ["DMG_MAGIC", "AOE", "TAUNT", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "DMG_REDUCE"] },
    ] },

    E: { phases: [
      { label: { ko: "E 후진 단계", en: "E Retreat Phase" }, tags: ["LUNGE", "SEPARATOR", "CC_BUFFER"] },
      { label: { ko: "E 돌진 단계", en: "E Dash Phase" }, tags: ["DMG_MAGIC", "PIERCE_MINION", "SINGLE", "AIRBORNE", "SEPARATOR", "DASH"] },
    ] },

    R: { phases: [
      { label: { ko: "R 시전 집중", en: "R Channeling" }, tags: ["SKILL_CHANNEL_MOVEMENT", "TARGETED", "SEPARATOR", "MAGIC_SHIELD"] },
      { label: { ko: "R 착지", en: "R Landing" }, tags: ["DMG_MAGIC", "TIMING_AFTERCAST", "SEPARATOR", "BLINK", "WALL_HOP", "AIRBORNE", "SEPARATOR_NEWLINE", "SEPARATOR", "CC_IMMUNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 사용 가능할때 [[AS_UP]] \n 스킬로 상대 챔피언, 에픽몬스터를 맞히면 \n [[CDR]] 3초. \n \n",

          "Q는 각각 날개에서 바람 [[PROJECTILE]] 발사. \n 경로에 [[DMG_MAGIC]]. \n 도착하여 바람끼리 부딪히면 와류([[ZONE]]) 생성. \n [[TARGET_MAXHP_SCALE]] 비례 [[DOT]] [[DMG_MAGIC]]. \n \n",

          "W의 [[PASSIVE_BONUS]]는 \n 일정시간 피해를 입지 않으면 [[MAGIC_SHIELD]] 생성.", 
          "W는 [[SKILL_CHARGED]]하는 동안 \n 갈리오가 [[MS_DOWN]] 되지만 [[DMG_REDUCE]]를 획득. \n 발사하면 [[AOE]] [[DMG_MAGIC]]와 [[TAUNT]], [[SLOW]].  \n [[TAUNT]]에 성공하면 [[DMG_REDUCE]] 지속시간 2초 연장. \n [[TAUNT]]시간과 사거리는 충전시간에 비례. \n \n",

          "E는 [[DASH]]하여 [[DMG_MAGIC]], [[AIRBORNE]]. \n 적 챔피언 또는 지형과 부딪히면 [[DASH]] 종료. \n [[CC_BUFFER]]로 일부 CC 무시 가능. \n \n",

          "R은 아군에게 사용하면 [[ZONE]] 생성. \n [[ZONE]] 내의 모든 아군에게 [[MAGIC_SHIELD]]를 부여. \n 잠시 후 갈리오가 지면을 내려찍어서 \n [[ZONE]] [[AOE]] [[DMG_MAGIC]]와 [[AIRBORNE]].",
        ],

        en: ["P grants [[AS_UP]] when available. \n Hitting enemy champions or epic monsters with a skill \n grants a 3s [[CDR]]. \n \n",
          "Q fires a wind [[PROJECTILE]] from each wing. \n Deals [[DMG_MAGIC]] along the path. \n When the winds collide at the destination, they create a tornado ([[ZONE]]). \n [[DOT]] [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]]. \n \n",
          "W's [[PASSIVE_BONUS]] \n creates a [[MAGIC_SHIELD]] after not taking damage for a while.",
          "While W is [[SKILL_CHARGED]], \n Galio gets [[MS_DOWN]] but gains [[DMG_REDUCE]]. \n On release, deals [[AOE]] [[DMG_MAGIC]], [[TAUNT]], and [[SLOW]].  \n A successful [[TAUNT]] extends the [[DMG_REDUCE]] duration by 2s. \n [[TAUNT]] duration and range scale with charge time. \n \n",
          "E [[DASH]]es, dealing [[DMG_MAGIC]] and [[AIRBORNE]]. \n The [[DASH]] ends on colliding with an enemy champion or terrain. \n [[CC_BUFFER]] can ignore some CC. \n \n",
          "R cast on an ally creates a [[ZONE]]. \n Grants a [[MAGIC_SHIELD]] to all allies within the [[ZONE]]. \n Shortly after, Galio slams down onto the ground, \n dealing [[ZONE]] [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]]."
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]] 불가. 패치로 막힘.", 

        "E 스킬은 2단계로 나뉨 후진/돌진. \n 후진 단계에서 갈리오가 맞은 CC는 유효 하지만 \n 돌진 단계가 발동되어 앞으로 이동하는 것. \n 돌진 단계에는 CC 저항력 없음.", 
        
        "R은 [[SKILL_CHANNEL]] 중 일 때 CC 저항력이 없지만 \n 착지하고 아주 잠시동안 ''시전 집중'' 상태에 돌입하는데 \n 이때 걸린 CC는 완전 무시. [[SUPPRESS]] 포함."
      ],
        en: ["[[W_FLASH]] not possible. Blocked by a patch.",
          "E is split into 2 phases: retreat / dash. \n CC that hits Galio during the retreat phase still applies, but \n the dash phase still triggers and he moves forward. \n There is no CC resistance during the dash phase.",
          "R has no CC resistance during [[SKILL_CHANNEL]], but \n Galio briefly enters a 'channeling' state upon landing, \n and CC applied during this time is completely ignored. [[SUPPRESS]] included."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 180,
    11: 160,
    16: 140,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Galio,
  // 최근 변경 V26.10). DDragon effectBurn/vars가 비어 있어 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_galiopassive_tooltip)을 사용, 쿨타임(5초)은 위키 값을 문장 끝에 덧붙임.
  // R은 위키 템플릿 원자료에 5랭크 값이 섞여 있으나 페이지 표시값(3랭크)을 채택.
  skillTooltip: {
    P: {
      ko: "갈리오가 [[BA]] 공격 시 40%의 [[AS_UP]]를 얻고 주변 적들에게 15~115([[LEVEL_SCALE]] 비례)(+100% [[AD_SCALE]])(+40% [[AP_SCALE]])(+60% 추가 [[MR_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 갈리오의 스킬이 적 챔피언 또는 에픽 몬스터에게 적중하면 이 효과의 재사용 대기시간이 3초 감소합니다. ([[CDR]] 3초) \n 단, 재사용 대기시간은 스킬 사용 한 번당 한 번만 감소합니다. \n \n 5초의 [[COOLDOWN]].",
      en: "When Galio performs a [[BA]], he gains 40% [[AS_UP]] and deals 15~115 (based on [[LEVEL_SCALE]]) (+100% [[AD_SCALE]]) (+40% [[AP_SCALE]]) (+60% bonus [[MR_SCALE]]) [[DMG_MAGIC]] to nearby enemies. \n \n When Galio's skills hit an enemy champion or epic monster, this effect's cooldown is reduced by 3 seconds. ([[CDR]] 3s) \n However, the cooldown can only be reduced once per skill cast. \n \n 5 second [[COOLDOWN]].",
    },
    Q: {
      ko: "갈리오가 두 개의 돌풍을 발사해 각각 70/105/140/175/210(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 두 돌풍이 합쳐지면 소용돌이([[ZONE]])가 일어나 2초 동안 [[TARGET_MAXHP_SCALE]]의 8%(+[[AP_SCALE]] 100당 4%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Galio fires two gusts of wind, each dealing 70/105/140/175/210 (+70% [[AP_SCALE]]) [[DMG_MAGIC]]. \n When the two gusts meet, they form a tornado ([[ZONE]]) that deals [[DMG_MAGIC]] equal to 8% (+4% per 100 [[AP_SCALE]]) of [[TARGET_MAXHP_SCALE]] over 2 seconds. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 갈리오가 12/10/8초([[LEVEL_SCALE]] 비례) 동안 피해를 입지 않으면 [[SELF_MAXHP_SCALE]]의 7.5/9/10.5/12/13.5%만큼 마법 피해를 흡수하는 [[MAGIC_SHIELD]]를 얻습니다. \n \n [[SKILL_CHARGED]] 시작 시: 갈리오가 15% [[MS_DOWN]] 되지만, \n 받는 [[MAGIC_DR]]가 25/30/35/40/45%(+[[AP_SCALE]] 100당 4%)(+추가 [[MR_SCALE]] 100당 8%)(+추가 체력 100당 1%), \n 받는 [[PHYSICAL_DR]]가 12.5/15/17.5/20/22.5%(+[[AP_SCALE]] 100당 1.5%)(+추가 [[MR_SCALE]] 100당 4%)(+추가 체력 100당 0.5%) 됩니다.  \n \n 발사 시: 0.5~1.5초 동안 적 챔피언들을 [[TAUNT]] [[MS_SCALE]]가 60으로 고정 시키고, 20/30/40/50/60(+30% [[AP_SCALE]])~60/90/120/150/180(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히며, [[DMG_REDUCE]] 효과가 2초 추가됩니다. \n 도발 사거리 및 지속시간과 피해량은 [[SKILL_CHARGED]] 시간에 비례합니다. \n \n 18/17/16/15/14초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: If Galio hasn't taken damage for 12/10/8 seconds (based on [[LEVEL_SCALE]]), he gains a [[MAGIC_SHIELD]] that absorbs magic damage equal to 7.5/9/10.5/12/13.5% of [[SELF_MAXHP_SCALE]]. \n \n Begin [[SKILL_CHARGED]]: Galio gets 15% [[MS_DOWN]], \n but gains 25/30/35/40/45% (+4% per 100 [[AP_SCALE]]) (+8% per 100 bonus [[MR_SCALE]]) (+1% per 100 bonus health) [[MAGIC_DR]], \n and 12.5/15/17.5/20/22.5% (+1.5% per 100 [[AP_SCALE]]) (+4% per 100 bonus [[MR_SCALE]]) (+0.5% per 100 bonus health) [[PHYSICAL_DR]].  \n \n Release: [[TAUNT]]s enemy champions for 0.5~1.5 seconds, fixing their [[MS_SCALE]] at 60, deals 20/30/40/50/60 (+30% [[AP_SCALE]]) ~ 60/90/120/150/180 (+90% [[AP_SCALE]]) [[DMG_MAGIC]], and extends the [[DMG_REDUCE]] effect by 2 seconds. \n Taunt range, duration, and damage scale with [[SKILL_CHARGED]] time. \n \n 18/17/16/15/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "갈리오가 전방으로 [[DASH]]해 처음 적중한 적 챔피언을 0.75초 동안 [[AIRBORNE]]시키고 100/135/170/205/240(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 돌진 경로에 있는 다른 적은 모두 80/108/136/164/192(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입습니다. \n \n 갈리오의 [[DASH]]은 지형에 부딪히면 멈춥니다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Galio [[DASH]]es forward, knocking the first enemy champion hit [[AIRBORNE]] for 0.75 seconds and dealing 100/135/170/205/240 (+100% [[AP_SCALE]]) [[DMG_MAGIC]]. \n All other enemies in the path take 80/108/136/164/192 (+80% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Galio's [[DASH]] stops when it hits terrain. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    R: {
      ko: "갈리오가 아군 챔피언의 위치를 착지 지점으로 정해, 해당 지점 주변의 모든 아군 챔피언에게 5초 동안 듀란드의 방패(W) 기본 지속 효과 [[MAGIC_SHIELD]]를 씌웁니다. \n 이후 착지 지점으로 날아갑니다. \n \n 착지 시 0.75초 동안 [[AIRBORNE]]시키고 150/250/350(+70% [[AP_SCALE]])(+100% 추가 [[MR_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Galio designates an allied champion's position as his landing spot, granting all allied champions around it the Shield of Durand (W) passive [[MAGIC_SHIELD]] for 5 seconds. \n He then flies to the landing spot. \n \n On landing, he knocks enemies [[AIRBORNE]] for 0.75 seconds and deals 150/250/350 (+70% [[AP_SCALE]]) (+100% bonus [[MR_SCALE]]) [[DMG_MAGIC]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default galio;
