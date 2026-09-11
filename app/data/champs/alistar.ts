import type { ChampData } from "../interactions/types";

const alistar: ChampData = {
  id: "alistar",
  skills: {
    P: ["ST_CONDITIONAL", "HEAL"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["W_FLASH", "DASH", "WALL_HOP", "SEPARATOR", "KNOCKBACK"],
    E: ["BUFF_FORM", "GHOSTING", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: ["CC_CLEANSE", "SEPARATOR", "BUFF_FORM", "DMG_REDUCE"],
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
      { label: { ko: "P 버프 스택", en: "P Buff Stack" }, tags: ["ST_CONDITIONAL", "BUFF_STACK_A"] },
      { label: { ko: "P 회복", en: "P Heal"  }, tags: ["STACK_CONSUME_A", "HEAL"]},
    ] },

    Q: ["DMG_MAGIC", "TIMING_CAST", "AOE", "AIRBORNE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK_A"],

    W: ["DMG_MAGIC", "TARGETED", "KNOCKBACK", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK_A"],

    E: { phases: [
      { label: { ko: "E 버프", en: "E Buff" }, tags: ["BUFF_FORM", "GHOSTING"] },
      { label: { ko: "E 범위 피해", en: "E AoE Damage" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK_B"] },
      { label: { ko: "E 온힛", en: "E On-Hit"  }, tags: ["STACK_CONSUME_B", "DMG_MAGIC", "ON_HIT", "STUN", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK_A"]},
    ] },

    R: ["CC_CLEANSE", "SEPARATOR", "BUFF_FORM", "DMG_REDUCE"],
  },

     notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
        "P는 근처 적 미니언 처치 시 1[[BUFF_STACK]]. \n CC를 맞히면 1스택. \n 적 챔피언 7스택, 에픽몬스터 7스택. \n 7스택이 차면 알리와 근처아군 1명 [[HEAL]]. \n \n",
        "Q는 주변 [[AOE]] [[DMG_MAGIC]], [[AIRBORNE]]. \n \n",
        "W는 [[TARGETED]] [[DMG_MAGIC]], [[KNOCKBACK]]. \n \n",
        "E는 주기적으로 주변 [[AOE]] [[DMG_MAGIC]]. \n 챔피언에게 적중 시 1[[BUFF_STACK]]. \n 4개가 차면 다음 [[BA]]가 [[EMPOWERED]]. \n [[ON_HIT]] [[DMG_MAGIC]], [[STUN]]. \n \n",
        "R은 [[CC_CLEANSE]], [[DMG_REDUCE]].",

        ],

        en: [
        "P gains 1[[BUFF_STACK]] on killing a nearby enemy minion. \n Landing CC grants 1 stack. \n Enemy champion 7 stacks, epic monster 7 stacks. \n At 7 stacks, [[HEAL]]s Alistar and one nearby ally. \n \n",
        "Q deals nearby [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]]s. \n \n",
        "W is [[TARGETED]] [[DMG_MAGIC]] and [[KNOCKBACK]]. \n \n",
        "E periodically deals nearby [[AOE]] [[DMG_MAGIC]]. \n Hitting a champion grants 1[[BUFF_STACK]]. \n At 4 stacks, the next [[BA]] becomes [[EMPOWERED]]. \n [[ON_HIT]] [[DMG_MAGIC]] and [[STUN]]. \n \n",
        "R grants [[CC_CLEANSE]] and [[DMG_REDUCE]].",
        ]

      },

      note2: {
        ko: [
        "알리 쿵쾅콤보 (WQ) \n W로 대상에게 [[DASH]]하고 부딪히기 전에 Q \n 작성자는 W 스마트키를 해제하고 실수가 거의 없어짐.", 
        "W는 [[INSEC_KICK]] 불가. \n 점멸 + W만 가능.", 
        "R에 [[TENACITY]] 없음. (오해 많이함.) \n R의 [[CC_CLEANSE]]로 범위 지속적인 CC를 해제하면 \n 바로 다시 걸림. \n 예) 코그모 E의 [[SLOW]].", 
        "E의 [[BUFF_STACK]]은 \n 알리 밑에 쇠사슬 시각 효과로 볼 수 있음.", 
        "R로 [[AIRBORNE]]류를 해제하면 \n 이동은 불가능하지만 스킬은 사용 가능. \n 단, W는 버그인지 모르겠는데 스킬 사용은 되지만 효과가 없음. \n 알리가 [[DASH]] 하지도 않고, 대상이 밀려나지 않고, 데미지도 들어가지 않음."
      ],

        en: [
        "Alistar's \"Bang Bang\" combo (WQ) \n [[DASH]] to the target with W, then cast Q right before impact \n The author turns off W's smartcast for this — it almost never misses now.",
        "W cannot be used for [[INSEC_KICK]]. \n Only Flash + W works for that.",
        "R has no [[TENACITY]]. (Commonly misunderstood.) \n Removing a persistent-zone CC with R's [[CC_CLEANSE]] \n gets it reapplied immediately. \n e.g. Kog'Maw E's [[SLOW]].",
        "E's [[BUFF_STACK]] \n can be seen as a chain visual effect beneath Alistar.",
        "Removing [[AIRBORNE]]-type CC with R \n prevents movement but still allows skill use. \n However, W seems bugged — the skill activates but has no effect: \n Alistar doesn't [[DASH]], the target isn't knocked back, and no damage is dealt.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

  // DDragon의 vars/effectBurn 첫 항목(totaldamage 등)이 전부 "0"으로
  // 깨져 있어(P/Q/W/E/R 공통 패턴) 위키(wiki.leagueoflegends.com/en-us/Alistar,
  // V26.15 기준) 정보박스 수치로 채움. cooldownBurn/costBurn/rangeBurn과
  // E/W의 effectBurn 뒷부분 수치(지속시간/거리 등)는 DDragon 원본과
  // 위키가 서로 일치해 교차 검증됨. R 쿨타임은 {{ultCooldown}}으로 참조.
  // KO 확정 후 EN 동기화 완료.
  skillTooltip: {
    P: {
      ko: "근처 적 미니언 또는 몬스터가 죽거나, 알리스타의 스킬이 적 챔피언에게 [[IMMOBILIZING]]([[STUN]], [[AIRBORNE]], [[KNOCKBACK]])을 적중시키면 [[BUFF_STACK]] 1개를 얻는다. \n 근처 적 챔피언 또는 에픽 몬스터가 죽으면 즉시 7[[BUFF_STACK]](최대치)를 얻는다. \n \n 7[[BUFF_STACK]]을 [[STACK_CONSUME]]하면 알리스타 자신은 [[SELF_MAXHP_SCALE]]의 5%, 근처 아군 챔피언은 [[TARGET_MAXHP_SCALE]]의 7%만큼 [[HEAL]]된다.",
      en: "Gains 1[[BUFF_STACK]] when a nearby enemy minion or monster dies, or when Alistar's skills land [[IMMOBILIZING]]([[STUN]], [[AIRBORNE]], [[KNOCKBACK]]) on an enemy champion. \n Immediately gains 7[[BUFF_STACK]] (max) when a nearby enemy champion or epic monster dies. \n \n [[STACK_CONSUME]]ing 7[[BUFF_STACK]] [[HEAL]]s Alistar himself for 5% of his [[SELF_MAXHP_SCALE]] and nearby allied champions for 7% of their [[TARGET_MAXHP_SCALE]].",
    },
    Q: {
      ko: "알리스타가 땅을 내리쳐 주변 적에게 60/100/140/180/220(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초간 [[AIRBORNE]]시킨다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Alistar smashes the ground, dealing 60/100/140/180/220(+80% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies and [[AIRBORNE]]ing them for 1 second. \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    W: {
      ko: "알리스타가 대상에게 [[DASH]]하여, 도착 시 55/110/165/220/275(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 0.75초간 [[STUN]]한 뒤 700만큼 [[KNOCKBACK]]시킨다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Alistar [[DASH]]es to the target; on arrival, deals 55/110/165/220/275(+100% [[AP_SCALE]]) [[DMG_MAGIC]], [[STUN]]s for 0.75 seconds, then [[KNOCKBACK]]s them by 700. \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "알리스타가 [[GHOSTING]] 상태로 5초 동안 주변 적에게 0.5초 간격으로 피해를 입혀 총 80/110/140/170/200(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다(1회당 8/11/14/17/20(+7% [[AP_SCALE]])). \n 챔피언에게 적중할 때마다 [[BUFF_STACK]] 1개를 얻으며, 5[[BUFF_STACK]]을 채우면 다음 [[BA]]가 [[EMPOWERED]]되어 [[ON_HIT]]으로 20~275(챔피언 [[LEVEL_SCALE]])의 추가 [[DMG_MAGIC]]를 입히고 1초간 [[STUN]]시킨다. \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
      en: "Alistar becomes [[GHOSTING]] and deals damage to nearby enemies every 0.5 seconds for 5 seconds, totaling 80/110/140/170/200(+70% [[AP_SCALE]]) [[DMG_MAGIC]] (8/11/14/17/20(+7% [[AP_SCALE]]) per tick). \n Gains 1[[BUFF_STACK]] each time a champion is hit; at 5[[BUFF_STACK]], the next [[BA]] becomes [[EMPOWERED]], dealing an additional 20~275(based on champion [[LEVEL_SCALE]]) [[DMG_MAGIC]] [[ON_HIT]] and [[STUN]]ning for 1 second. \n \n 12/11.5/11/10.5/10 second [[COOLDOWN]].",
    },
    R: {
      ko: "알리스타가 즉시 자신에게 걸린 모든 방해 효과를 [[CC_CLEANSE]]하고, 7초 동안 55/65/75%의 [[DMG_REDUCE]]를 얻는다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Alistar immediately [[CC_CLEANSE]]s all disabling effects on himself and gains 55/65/75% [[DMG_REDUCE]] for 7 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default alistar;
