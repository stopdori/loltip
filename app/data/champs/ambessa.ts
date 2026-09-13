import type { ChampData } from "../interactions/types";

const ambessa: ChampData = {
  id: "ambessa",
  skills: {
    P: { phases: [
      { label: { ko: "P 돌진", en: "P Dash" }, tags: ["ST_CONDITIONAL", "DASH"] },
      { label: { ko: "P 버프 스택", en: "P Buff Stack"  }, tags: ["RANGE_UP", "AS_UP", "SEPARATOR", "ON_HIT", "ENERGY_RESTORE"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["Q_FLASH", "SKILL_RECAST", "SEPARATOR", "BUFF_STACK"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["Q_FLASH", "SEPARATOR", "BUFF_STACK"] },
    ] },
    
    W: ["W_FLASH", "SHIELD", "SEPARATOR", "BUFF_STACK"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "BUFF_STACK"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "AR_PEN", "SEPARATOR", "ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["SUPPRESS", "STUN", "UNSTOPPABLE", "SEPARATOR", "BLINK", "WALL_HOP"] },
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

    P: { phases: [
      { label: { ko: "P 돌진", en: "P Dash" }, tags: ["ST_CONDITIONAL", "DASH"] },
      { label: { ko: "P 버프 스택", en: "P Buff Stack"  }, tags: ["RANGE_UP", "AS_UP", "SEPARATOR_NEWLINE", "SEPARATOR", "ON_HIT", "STACK_CONSUME", "DMG_PHYSICAL", "ENERGY_RESTORE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "X2"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "X2"] },
    ] },

    W: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SHIELD", "SEPARATOR", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "X1.5"],

    E: ["DMG_PHYSICAL", "AOE", "SLOW", "SEPARATOR", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"],

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "AR_PEN", "SEPARATOR", "ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "LOCKED", "SINGLE", "SEPARATOR", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "BLINK", "WALL_HOP", "UNSTOPPABLE", "SUPPRESS", "STUN"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
        "P는 스킬을 사용하고 이동을 하면 [[DASH]]. \n 스킬을 사용하면 [[BUFF_STACK]] 획득. \n 체력바 밑에 표시.", 
        "[[BUFF_STACK]]이 있을 때 [[RANGE_UP]], [[AS_UP]]. \n [[BA]]를 치면 [[STACK_CONSUME]] [[DMG_PHYSICAL]], [[ENERGY_RESTORE]]. \n \n",
       
        "Q1은 [[AOE]] [[DMG_PHYSICAL]]. \n 가장자리 2배 피해. \n 적중 시 Q2 [[SKILL_RECAST]] 가능.", 
        "Q2는 좁은 직선 [[AOE]] [[DMG_PHYSICAL]]. \n 처음 대상에게 강한 피해. \n \n",

        "W는 [[SHIELD]]. \n 0.5초 뒤 [[AOE]] [[DMG_PHYSICAL]]. \n 0.5초 동안 피해를 받는다면 강화 [[DMG_PHYSICAL]]. \n \n",

        "E는 회전하여 [[AOE]] [[DMG_PHYSICAL]]. \n P로 [[DASH]] 시 도착하여 한 번 더 회전 [[AOE]] [[DMG_PHYSICAL]]. \n [[DASH]] 하지 않으면 추가 발동 없음. \n \n",

        "R의 [[PASSIVE_BONUS]]는 [[AR_PEN]]. \n 모든 스킬 피해에 [[OMNIVAMP]].", 
        "R은 경로상 맨 뒤 적챔피언에게 적중. \n [[SUPPRESS]]하고 착지할 때 [[DMG_PHYSICAL]], [[STUN]].",


        ],

        en: [
        "P triggers a [[DASH]] if you move after using a skill. \n Using a skill grants a [[BUFF_STACK]]. \n Shown below the health bar.",
        "While holding a [[BUFF_STACK]], gain [[RANGE_UP]] and [[AS_UP]]. \n Landing a [[BA]] [[STACK_CONSUME]]s it for bonus [[DMG_PHYSICAL]] and [[ENERGY_RESTORE]]. \n \n",

        "Q1 deals [[AOE]] [[DMG_PHYSICAL]]. \n Double damage at the edge. \n On hit, Q2 can be [[SKILL_RECAST]].",
        "Q2 deals narrow line [[AOE]] [[DMG_PHYSICAL]]. \n Deals increased damage to the first target hit. \n \n",

        "W grants a [[SHIELD]]. \n After 0.5 seconds, deals [[AOE]] [[DMG_PHYSICAL]]. \n If she takes damage during the 0.5 seconds, deals enhanced [[DMG_PHYSICAL]]. \n \n",

        "E spins, dealing [[AOE]] [[DMG_PHYSICAL]]. \n Triggering P's [[DASH]] makes her spin once more on arrival for additional [[AOE]] [[DMG_PHYSICAL]]. \n No extra spin without the [[DASH]]. \n \n",

        "R's [[PASSIVE_BONUS]] is [[AR_PEN]]. \n All skill damage grants [[OMNIVAMP]].",
        "R hits the rearmost enemy champion along its path. \n [[SUPPRESS]]es them, then deals [[DMG_PHYSICAL]] and [[STUN]]s on landing.",
        ]

      },

      note2: {
        ko: [
        "암베사 P로 [[WALL_HOP]] 불가.",
        "R은 판정이 상당히 강력한 [[SUPPRESS]]. \n [[CC_BUFFER]]도 무시하고 그 자리에서 [[SUPPRESS]]."
      ],
        en: [
          "Ambessa's P cannot [[WALL_HOP]].",
          "R applies a notably powerful [[SUPPRESS]]. \n It even ignores [[CC_BUFFER]] and [[SUPPRESS]]es on the spot.",
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

  // DDragon의 vars/effectBurn이 P/Q/W/E/R 전부 "0"으로 깨져 있어
  // 위키(wiki.leagueoflegends.com/en-us/Ambessa, V26.16 기준) 정보박스
  // 수치로 채웠다(Notes 섹션 문구는 배제, 몬스터 대상 피해 상한 등
  // 일부 예외 케이스 수치는 과밀 방지를 위해 생략). cooldownBurn/
  // rangeBurn은 DDragon 원본과 위키가 일치해 교차 검증됨.
  // R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "스킬 시전 중(경직 상태)에 공격 또는 이동 명령을 입력하면, 스킬 시전이 끝난 뒤 [[DASH]]한다. \n 스킬을 시전할 때마다 [[BUFF_STACK]] 1개를 얻으며(최대 3개, 4초 지속) \n 다음 평타 시 [[STACK_CONSUME]]하여 [[BA]]가 [[EMPOWERED]] 된다. \n [[RANGE_UP]] 75, [[AS_UP]] 50%를 얻고 5~30([[LEVEL_SCALE]])(+25% 추가 [[AD_SCALE]])의 추가 [[DMG_PHYSICAL]]를 입히며 40/55/70([[LEVEL_SCALE]])만큼 \n [[ENERGY_RESTORE]] 된다.",
      en: "Entering an attack or move command while casting a skill causes Ambessa to [[DASH]] once the cast finishes. \n Casting a skill grants 1[[BUFF_STACK]] (max 3, lasts 4 seconds); her next [[BA]] [[STACK_CONSUME]]s them to become [[EMPOWERED]] — gaining [[RANGE_UP]] of 75, [[AS_UP]] of 50%, dealing an additional 5~30([[LEVEL_SCALE]])(+25% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]], and restoring 40/55/70([[LEVEL_SCALE]]) [[ENERGY_RESTORE]].",
    },
    Q: {
      ko: "암베사가 전방 반원 범위로 쌍검을 휘둘러 20/30/40/50/60(+30% 추가 [[AD_SCALE]])(+2/2.25/2.5/2.75/3% [[TARGET_MAXHP_SCALE]])의 [[DMG_PHYSICAL]]를 입히며, 범위 가장자리에 맞은 적은 2배의 피해를 입는다. \n 적을 적중시키면 4초 이내에 Q가 Q2(파멸의 일격)로 전환된다. \n \n Q2 - 파멸의 일격: 전방 직선 범위로 쌍검을 내리쳐 25/37.5/50/62.5/75(+45% 추가 [[AD_SCALE]])(+2/2.25/2.5/2.75/3% [[TARGET_MAXHP_SCALE]])의 [[DMG_PHYSICAL]]를 입히며, 가장 먼저 맞은 적은 2배의 피해를 입는다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Ambessa sweeps her twin drakehounds in a semicircle in front of her, dealing 20/30/40/50/60(+30% bonus [[AD_SCALE]])(+2/2.25/2.5/2.75/3% [[TARGET_MAXHP_SCALE]]) [[DMG_PHYSICAL]]; enemies hit by the edge of the arc take double damage. \n Hitting an enemy transforms Q into Sundering Slam for the next 4 seconds. \n \n Sundering Slam: slams her twin drakehounds down in a line in front of her, dealing 25/37.5/50/62.5/75(+45% bonus [[AD_SCALE]])(+2/2.25/2.5/2.75/3% [[TARGET_MAXHP_SCALE]]) [[DMG_PHYSICAL]]; the first enemy hit takes double damage. \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    W: {
      ko: "암베사가 [[SHIELD]]를 얻고 0.5초간 버틴 뒤 땅을 내리쳐 주변 적에게 50/75/100/125/150(+50% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힌다. \n 버티는 동안 미니언이 아닌 피해를 막아냈다면 피해량이 75/112.5/150/187.5/225(+75% 추가 [[AD_SCALE]])로 증가한다. \n \n [[SHIELD]]량은 50~320([[LEVEL_SCALE]])(+150% 추가 [[AD_SCALE]]), 1.5초 지속. \n \n 18/17/16/15/14초의 [[COOLDOWN]].",
      en: "Ambessa gains a [[SHIELD]], braces herself for 0.5 seconds, then slams the ground, dealing 50/75/100/125/150(+50% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to nearby enemies. \n If she blocked any non-minion damage while bracing, the damage increases to 75/112.5/150/187.5/225(+75% bonus [[AD_SCALE]]). \n \n [[SHIELD]] amount is 50~320([[LEVEL_SCALE]])(+150% bonus [[AD_SCALE]]), lasting 1.5 seconds. \n \n 18/17/16/15/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "암베사가 쌍검을 주변으로 휘둘러 40/60/80/100/120(+50% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 99%만큼 [[SLOW]]시키며, 효과는 1초에 걸쳐 서서히 사라진다. \n E 시전 중 [[DASH]](P)을 발동시키면, [[DASH]]이 끝나는 지점에서 한 번 더 휘둘러 동일한 피해를 추가로 입힌다. \n (합산 시 최대 80/120/160/200/240(+100% 추가 [[AD_SCALE]])). \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
      en: "Ambessa whips her twin drakehounds around herself, dealing 40/60/80/100/120(+50% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and [[SLOW]]ing by 99%, decaying over 1 second. \n Triggering her passive [[DASH]] while casting E makes her strike a second time at the end of the dash for the same damage (total up to 80/120/160/200/240(+100% bonus [[AD_SCALE]])). \n \n 13/12/11/10/9 second [[COOLDOWN]].",
    },
    R: {
      ko: "[[PASSIVE_BONUS]]로 10/20/30%의 [[AR_PEN]]을 항상 얻고, 스킬 피해를 입힐 때마다 챔피언 상대로는 15/17.5/20%(+추가 [[LIFESTEAL]]의 50%) [[OMNIVAMP]]. \n (미니언·몬스터 상대로는 25%의 효과) \n \n 사용 시 암베사가 지정한 방향의 직선상에서 가장 먼 적 챔피언에게 [[BLINK]] 하여, 도착과 동시에 0.75초간 [[SUPPRESS]]한다. \n 이후 대상을 바닥에 내리쳐 150/250/350(+80% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 0.4초간 [[STUN]]시킨다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "As a [[PASSIVE_BONUS]], Ambessa permanently gains 10/20/30% [[AR_PEN]], and skill damage grants 15/17.5/20% (+50% of bonus [[LIFESTEAL]]) [[OMNIVAMP]] against champions. \n (25% against minions and monsters.) \n \n On cast, Ambessa blinks to the farthest enemy champion along a chosen line, [[SUPPRESS]]ing them for 0.75 seconds on arrival. \n She then slams the target into the ground, dealing 150/250/350(+80% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and [[STUN]]ning for 0.4 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default ambessa;
