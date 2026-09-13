import type { ChampData } from "../interactions/types";

const amumu: ChampData = {
  id: "amumu",
  skills: {
    P: ["MARK"],
    Q: ["Q_FLASH", "STUN", "SEPARATOR", "DASH", "WALL_HOP", "CC_BUFFER"],
    W: ["MARK"],
    E: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["R_FLASH", "STUN", "SEPARATOR", "MARK"],
  },

  vision: {
    P: ["VISION"],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["MARK", "SEPARATOR", "ST_CONDITIONAL", "DMG_TRUE"],

    Q: { phases: [
      { label: { ko: "투척 단계", en: "Throw" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "RECHARGE", "STUN", "CC_BUFFER"] },
      { label: { ko: "돌진 단계", en: "Dash"  }, tags: ["HOMING", "DASH", "WALL_HOP"] },
    ] },

    W: ["DOT", "DMG_MAGIC", "SKILL_TOGGLE", "AOE", "SEPARATOR", "MARK"],
    E: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "STUN", "KNOCKDOWN", "SEPARATOR", "MARK"],
  },

     notes: {
    skill: {
      note3: {

        ko: [],

        en: []

      },


      note1: {

        ko: [

        "[[BA]], W, R로 챔피언을 공격하면 [[MARK]]. \n 효과는 [[DMG_MAGIC]]를 받으면 [[DMG_TRUE]] 10% 추가. \n 여러명 동시 적용 가능.",

        "Q는 붕대 [[PROJECTILE]]를 발사. \n 적중하면 [[HOMING]] [[DASH]] 하여 [[DMG_MAGIC]], [[STUN]]. \n 최대 2회 [[RECHARGE]].",

        "W는 [[SKILL_TOGGLE]] 스킬로 \n 0.5초 마다 [[AOE]] [[DMG_MAGIC]].",

        "E는 [[AOE]] [[DMG_MAGIC]]. \n 아무무가 [[BA]], [[ON_HIT]]에 맞으면 [[CDR]]",

        "R은 넓은범위 [[AOE]] [[DMG_MAGIC]], [[STUN]]([[KNOCKDOWN]]).",
        ],

        en: [
        "Attacking a champion with [[BA]], W, or R applies [[MARK]]. \n Effect: when the target takes [[DMG_MAGIC]], it takes an additional 10% [[DMG_TRUE]]. \n Can be applied to multiple targets simultaneously.",

        "Q fires a bandage [[PROJECTILE]]. \n On hit, [[HOMING]] [[DASH]]es to them, dealing [[DMG_MAGIC]] and [[STUN]]. \n Has 2 max [[RECHARGE]] charges.",

        "W is a [[SKILL_TOGGLE]] skill \n that deals [[AOE]] [[DMG_MAGIC]] every 0.5 seconds.",

        "E deals [[AOE]] [[DMG_MAGIC]]. \n Getting hit by [[BA]] or [[ON_HIT]] grants [[CDR]].",

        "R deals wide-range [[AOE]] [[DMG_MAGIC]] and [[STUN]]s ([[KNOCKDOWN]]).",
        ]

      },

      note2: {
        ko: [
        "Q로 날아가면서 R 사용 불가.", 
        
        "Q는 두 단계로 나뉨. \n 투척 단계 / 돌진 단계 \n 투척 단계에 CC를 맞아도 붕대가 적중하면 \n 돌진 단계가 발동하여 이동하는 것. \n 단, CC는 남아있음.", 

        "Q의 [[HOMING]] [[DASH]]은 \n 대상과 충돌할 때까지 따라감. \n 단, 대상과 너무 멀어지면 [[DASH]] 종료.",

        "Q로 따라갈 수 있는 \n 최대 거리? 시간? 이 있는 것으로 추정. \n 거리라면, 약 미드 1~2차 타워 사이 거리 정도.", 

        "R은 버튼을 누르고 스킬이 발동하는 데까지 딜레이가 있음. \n [[TIMING_CAST]] 꽤 체감됨."
      ],
        en: [
          "R cannot be used while Q is in flight",
          "Q is split into two phases. \n Throwing phase / Dash phase \n Even if hit by CC during the throwing phase, \n the dash phase still activates and moves her if the bandage connects. \n However, the CC remains active.",
          "Q's [[HOMING]] [[DASH]] \n follows the target until it collides with them. \n However, the [[DASH]] ends if she gets too far from the target.",
          "There appears to be a maximum \n follow distance or time for Q. \n If it's distance-based, it's roughly the distance between the 1st and 2nd mid lane towers.",
          "There is a delay (wind-up) between pressing the R button and the skill being activated. \n [[TIMING_CAST]] is quite noticeable.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 150,
    11: 125,
    16: 100,
  },

  // DDragon의 Q cooldownBurn("3")이 실제 값과 달라 깨져 있었고(실제 16/15/14/13/12초
  // 충전식), W/E/R도 vars/effectBurn 다수가 "0"으로 깨져 있어 위키
  // (wiki.leagueoflegends.com/en-us/Amumu, V25.18 기준) 정보박스 수치로 채웠다
  // (Notes 섹션 문구는 배제). E의 armor/MR 비례(+3%)처럼 대응하는 태그가 없는
  // 수치는 태그 없이 평문으로 남김. R 쿨타임은 {{ultCooldown}}으로 참조(위키
  // 150/125/100과 파일 ultCooldown 일치 확인).
  skillTooltip: {
    P: {
      ko: "아무무의 [[BA]], W, R이 적중한 대상에게 3초간 [[MARK]](저주)을 남김. \n 저주가 걸린 대상을 [[BA]], W, R로 다시 적중 시키면 지속시간이 초기화 된다. \n 저주에 걸린 대상은 받는 모든 마법 피해에 10%의 추가 [[DMG_TRUE]]를 받는다.",
      en: "Amumu's [[BA]], W, and R [[MARK]] the target hit with Curse for 3 seconds. \n Hitting a cursed target again with [[BA]], W, or R refreshes the duration. \n Cursed targets take an additional 10% [[DMG_TRUE]] from all incoming magic damage.",
    },
    Q: {
      ko: "아무무가 붕대를 던져 적중한 첫 번째 적에게 [[DASH]] 하며, 70/95/120/145/170(+85% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초간 [[STUN]]시킨다. \n \n 최대 2개까지 쌓이는 [[RECHARGE]] 방식으로 \n 충전당 16/15/14/13/12초의 [[COOLDOWN]].",
      en: "Amumu tosses a bandage, [[DASH]]ing to the first enemy hit, dealing 70/95/120/145/170(+85% [[AP_SCALE]]) [[DMG_MAGIC]] and [[STUN]]ning for 1 second. \n \n Has 2 max charges ([[RECHARGE]]), each taking 16/15/14/13/12 seconds to recharge.",
    },
    W: {
      ko: "[[SKILL_TOGGLE]] 방식으로, 켜져 있는 동안 0.5초마다 주변 적에게 5(+0.5/0.625/0.75/0.875/1%(+0.25%/추가 [[AP_SCALE]] 100당) [[TARGET_MAXHP_SCALE]])의 [[DMG_MAGIC]]를 입히고 [[MARK]](저주)를 갱신한다. \n \n 초당 마나를 소모하며, 마나가 없으면 자동으로 꺼진다.",
      en: "A [[SKILL_TOGGLE]]: while active, deals 5(+0.5/0.625/0.75/0.875/1%(+0.25% per 100 bonus [[AP_SCALE]]) of [[TARGET_MAXHP_SCALE]]) [[DMG_MAGIC]] to nearby enemies every 0.5 seconds and refreshes [[MARK]] (Curse). \n \n Costs mana every second and automatically deactivates when out of mana.",
    },
    E: {
      ko: "패시브: 아무무는 받는 물리 피해를 5/7/9/11/13(+3% 추가 방어력)(+3% 추가 마법저항력)만큼 [[DMG_REDUCE]](최대 50%). \n \n 액티브: 아무무가 짜증을 내며 주변 적에게 65/95/125/155/185(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. \n 아무무가 [[BA]] 또는 [[ON_HIT]]에 당하면 [[COOLDOWN]]이 0.75초 [[CDR]]. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Passive: Amumu [[DMG_REDUCE]]s incoming physical damage by 5/7/9/11/13(+3% bonus armor)(+3% bonus magic resist), capped at 50%. \n \n Active: Amumu throws a tantrum, dealing 65/95/125/155/185(+50% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies. \n Getting hit by a [[BA]] or [[ON_HIT]] effect [[CDR]]s the active's [[COOLDOWN]] by 0.75 seconds. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    R: {
      ko: "아무무가 붕대를 넓게 펼쳐 주변 적에게 \n 200/300/400(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 \n 1.5초간 [[STUN]]([[KNOCKDOWN]])시키며 [[MARK]](저주)을 적용한다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Amumu flares out his bandages, dealing 200/300/400(+80% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies, [[STUN]]ning ([[KNOCKDOWN]]) them for 1.5 seconds and applying [[MARK]] (Curse). \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default amumu;
