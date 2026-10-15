import type { ChampData } from "../interactions/types";

const janna: ChampData = {
  id: "janna",
  skills: {
    P: ["ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "OF_ALLY", "MS_UP"],
    Q: ["AIRBORNE"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["GHOSTING", "MS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["W_FLASH", "SLOW"] },
    ] },
    
    E: ["E_FLASH", "SHIELD", "SEPARATOR", "OF_TARGET", "AD_UP"],
    R: ["KNOCKBACK", "SEPARATOR", "HEAL"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 아군 이속증가 버프", en: "P Ally MS Up Buff" }, tags: ["ST_CONDITIONAL", "OF_ALLY", "MS_UP"] },
      { label: { ko: "P 온힛", en: "P On-hit" }, tags: ["ON_HIT", "DMG_MAGIC"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 회오리 생성", en: "Q Whirlwind Summon" }, tags: ["TIMING_CAST", "ZONE"] },
      { label: { ko: "Q 발사", en: "Q Release" }, tags: ["DMG_MAGIC", "PIERCE", "PROJECTILE", "SEPARATOR", "AIRBORNE"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "GHOSTING", "MS_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SLOW"] },
    ] },

    E: ["TARGETED", "SHIELD", "SEPARATOR", "OF_TARGET", "AD_UP"],

    R: ["SKILL_CHANNEL", "TIMING_CAST", "AOE", "HEAL", "SEPARATOR", "KNOCKBACK"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 잔나에게 다가오는 아군의 [[MS_UP]]. \n W로 증가한 [[MS_SCALE]]에 비례하여 \n [[ON_HIT]] [[DMG_MAGIC]] 추가. \n \n",

          "Q는 회오리 [[ZONE]]을 설치. \n  Q2를 누르면 [[RECAST_DETONATE]]. \n 충전 시간에 따라 [[DMG_MAGIC]], [[RANGE_SCALE]], [[AIRBORNE]] 효과 증가. \n \n",

          "W의 [[PASSIVE_BONUS]]로 잔나는 항상 \n [[GHOSTING]]와 [[AP_SCALE]] 비례 [[MS_UP]].",
          "W는 [[TARGETED]] [[PROJECTILE]] 발사. \n [[AP_SCALE]], [[MS_SCALE]] 비례 [[DMG_MAGIC]]와 \n [[AP_SCALE]] 비례 [[SLOW]]. \n \n",
          
          "E는 아군 챔피언, 포탑에게 [[SHIELD]]. \n [[SHIELD]]가 지속되는 동안 대상에게 [[AD_UP]] [[BUFF]]. \n [[SLOW]], [[AIRBORNE]], [[KNOCKBACK]]으로 [[ON_CHAMP_HIT]] [[CDR]]. \n \n",

          "R은 적 미니언과 챔피언을 [[KNOCKBACK]]. \n 잔나는 [[SKILL_CHANNEL]] [[ZONE]] [[HEAL]] 시전.",
        ],

        en: ["P grants [[MS_UP]] to allies moving toward Janna. \n Based on the [[MS_SCALE]] gained from W, \n adds [[ON_HIT]] [[DMG_MAGIC]]. \n \n",
          "Q places a whirlwind [[ZONE]]. \n  Pressing Q2 triggers [[RECAST_DETONATE]]. \n [[DMG_MAGIC]], [[RANGE_SCALE]], and [[AIRBORNE]] effects increase with charge time. \n \n",
          "W's [[PASSIVE_BONUS]] always grants Janna \n [[GHOSTING]] and [[MS_UP]] based on [[AP_SCALE]].",
          "W fires a [[TARGETED]] [[PROJECTILE]]. \n Deals [[DMG_MAGIC]] based on [[AP_SCALE]] and [[MS_SCALE]], \n and [[SLOW]] based on [[AP_SCALE]]. \n \n",
          "E grants a [[SHIELD]] to an allied champion or turret. \n While the [[SHIELD]] lasts, the target gains an [[AD_UP]] [[BUFF]]. \n [[SLOW]], [[AIRBORNE]], or [[KNOCKBACK]] on [[ON_CHAMP_HIT]] grants [[CDR]]. \n \n",
          "R [[KNOCKBACK]]s enemy minions and champions. \n Janna then casts a [[SKILL_CHANNEL]] [[ZONE]] [[HEAL]]."
        ]

      },

      note2: {
        ko: [
       "Q1을 사용했을 때 CC에 걸리면 \n Q2를 사용할 수 없음. \n 단, [[SLOW]], [[ROOT]] 제외.",
        "R은 가까운 적일수록 멀리 [[KNOCKBACK]]. \n 이때, 지형은 넘을 수 없음. ([[WALL_HOP]] 불가능)"
      ],
        en: ["If Janna is hit by CC after using Q1, \n Q2 cannot be used. \n Except for [[SLOW]] and [[ROOT]].",
          "R [[KNOCKBACK]]s closer enemies farther. \n However, they cannot cross terrain. (No [[WALL_HOP]])"
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_tailwindself_tooltip(인게임 원문)을 뼈대로 씀.
  // DDragon effectBurn/vars가 전부 비어 있어 수치는 공식 위키(V25.16)로 채움
  // (CDragon 게임 데이터 janna.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "아군 챔피언이 잔나를 향해 움직일 때 [[MS_SCALE]]가 6% 증가합니다. \n \n 잔나가 [[ON_HIT]] 및 서풍(W)으로 추가 [[MS_SCALE]]의 30%만큼 추가 [[DMG_MAGIC]]를 입힙니다.",
      en: "When allied champions move toward Janna, their [[MS_SCALE]] increases by 6%. \n \n Janna's [[ON_HIT]] and Zephyr (W) deal additional [[DMG_MAGIC]] equal to 30% of her bonus [[MS_SCALE]].",
    },
    Q: {
      ko: "잔나가 회오리바람을 소환합니다. ([[ZONE]]) \n 3초에 걸쳐 점점 세진 후 경로를 따라 이동합니다. \n 회오리바람은 최소 55/90/125/160/195(+50% [[AP_SCALE]]) ~ 최대 85/135/185/235/285(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 0.5~1.25초 동안 [[AIRBORNE]]시킵니다. \n 거리, 피해량, [[AIRBORNE]] 지속시간은 회오리바람이 커진 정도에 비례해 증가합니다. \n [[RECAST_DETONATE]]하면 회오리바람이 더 일찍 날아갑니다. \n \n 14초의 [[COOLDOWN]].",
      en: "Janna summons a whirlwind. ([[ZONE]]) \n It grows stronger over 3 seconds, then travels along its path. \n The whirlwind deals a minimum of 55/90/125/160/195 (+50% [[AP_SCALE]]) up to a maximum of 85/135/185/235/285 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] and knocks enemies [[AIRBORNE]] for 0.5~1.25 seconds. \n Distance, damage, and [[AIRBORNE]] duration increase with how much the whirlwind has grown. \n [[RECAST_DETONATE]] to send the whirlwind out sooner. \n \n 14 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 잔나가 [[GHOSTING]] 상태가 됩니다. 그리고 [[MS_SCALE]]가 6/7/8/9/10%(+[[AP_SCALE]] 100당 2%) 증가합니다. \n \n 사용 시: 잔나의 원소가 적을 공격하여 2초 동안 20/24/28/32/36%(+[[AP_SCALE]] 100당 6%) [[SLOW]]시키고, \n 55/85/115/145/175(+50% [[AP_SCALE]]) + 추가 [[MS_SCALE]]의 30%의 [[DMG_MAGIC]]를 입힙니다. \n \n 8/7.5/7/6.5/6초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Janna becomes [[GHOSTING]], and her [[MS_SCALE]] increases by 6/7/8/9/10% (+2% per 100 [[AP_SCALE]]). \n \n Active: Janna's elemental strikes an enemy, [[SLOW]]ing them by 20/24/28/32/36% (+6% per 100 [[AP_SCALE]]) for 2 seconds, \n and dealing 55/85/115/145/175 (+50% [[AP_SCALE]]) + 30% of bonus [[MS_SCALE]] [[DMG_MAGIC]]. \n \n 8/7.5/7/6.5/6 second [[COOLDOWN]].",
    },  
    E: {
      ko: "잔나가 4초 동안 아군 챔피언이나 포탑에 80/120/160/200/240(+55% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 부여합니다. \n 대상은 [[SHIELD]]가 지속되는 동안 10/15/20/25/30(+10% [[AP_SCALE]])의 [[AD_SCALE]]을 얻습니다. \n \n 잔나가 스킬로 적 챔피언의 이동을 방해할 때마다 재사용 대기시간의 20%를 돌려받습니다. ([[CDR]]) \n \n 16/15/14/13/12초의 [[COOLDOWN]].",
      en: "Janna grants an allied champion or turret a [[SHIELD]] that absorbs 80/120/160/200/240 (+55% [[AP_SCALE]]) damage for 4 seconds. \n While the [[SHIELD]] lasts, the target gains 10/15/20/25/30 (+10% [[AP_SCALE]]) [[AD_SCALE]]. \n \n Whenever Janna impairs an enemy champion's movement with a skill, she refunds 20% of the cooldown. ([[CDR]]) \n \n 16/15/14/13/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "잔나가 마법의 계절풍을 소환하여 주변 적들을 뒤로 [[KNOCKBACK]] 시킨 후, \n 3초에 걸쳐 주변 아군의 체력을 300/450/600(+150% [[AP_SCALE]])만큼 [[HEAL]]시킵니다. \n \n 이동하거나 R [[RECAST_CANCEL]] 시 계절풍이 일찍 종료됩니다. ([[SKILL_CHANNEL]]) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Janna summons a magical monsoon, [[KNOCKBACK]]ing nearby enemies, \n then [[HEAL]]s nearby allies for 300/450/600 (+150% [[AP_SCALE]]) over 3 seconds. \n \n Moving or R [[RECAST_CANCEL]] ends the monsoon early. ([[SKILL_CHANNEL]]) \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default janna;
