import type { ChampData } from "../interactions/types";

const ekko: ChampData = {
  id: "ekko",
  skills: {
    P: ["ST_CONDITIONAL", "MS_UP",],

    Q: ["Q_FLASH", "SLOW"],

    W: ["W_FLASH", "SEPARATOR", "ST_DELAYED", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SHIELD", "STUN"],

    E: { phases: [
      { label: { ko: "구르기 단계", en: "Roll"   }, tags: ["E_FLASH", "SEPARATOR", "AA_RESET", "RANGE_UP", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "경직 단계",   en: "Buffer" }, tags: ["BLINK", "WALL_HOP", "CC_BUFFER"] },
      { label: { ko: "순간이동 단계", en: "Blink" }, tags: ["E_FLASH"] },
    ] },

    R: ["UNTARGETABLE", "TOWER_DODGE", "HEAL", "SEPARATOR", "BLINK", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DEBUFF_STACK", "DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"], 

    Q: { phases: [
      { label: { ko: "가는 Q",        en: "Outgoing Q"      }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "DEBUFF_STACK"] },
      { label: { ko: "가는 Q (역장 모드)", en: "Outgoing Q (Field Mode)" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PIERCE", "PROJECTILE", "DEBUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "DOT", "SLOW"] },
      { label: { ko: "오는 Q",        en: "Return Q"        }, tags: ["ST_DELAYED", "DMG_MAGIC", "PIERCE", "PROJECTILE", "HOMING", "DEBUFF_STACK"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브",   en: "W Passive"}, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT", "DMG_MAGIC"] },
      { label: { ko: "W 액티브",   en: "W Active"}, tags: ["TIMING_CAST", "ZONE", "SEPARATOR", "ST_DELAYED", "DOT", "SLOW"] },
      { label: { ko: "시간 구체", en: "Time Sphere"  }, tags: ["ST_DELAYED", "NON_PROJECTILE"] },
      { label: { ko: "구체 폭발", en: "Sphere Detonates" }, tags: ["ST_CONDITIONAL", "ZONE", "STUN"] },
    ] },

    E: { phases: [
      { label: { ko: "구르기 단계",   en: "Roll"   }, tags: ["AA_RESET", "RANGE_UP", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "경직 단계",     en: "Buffer" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "순간이동 단계", en: "Blink"  }, tags: ["HOMING", "BLINK", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "DMG_MAGIC", "ON_HIT", "DEBUFF_STACK"] },
    ] },

    R: { phases: [
      { label: { ko: "R",   en: "R" }, tags: ["TIMING_CAST", "UNTARGETABLE", "HEAL", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "R 회복효과",   en: "R Heal Effect" }, tags: ["ST_CONDITIONAL", "SELF_MISSING_HP_SCALE", "HS_POWER"] },
      { label: { ko: "R 폭발",     en: "R Explosion" }, tags: ["ST_DELAYED", "SEPARATOR", "DMG_MAGIC", "AOE", "DEBUFF_STACK"] },
    ] },
  },

     notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[BA]], 스킬로 [[DEBUFF_STACK]]. \n 3스택 일 때 발동하여 [[DMG_MAGIC]]. \n 챔피언에 발동 시 [[MS_UP]] 추가. \n [[ON_TARGET_CD]] 5초. \n \n",
          
          "Q는 [[PIERCE_MINION]] 장치([[PROJECTILE]])를 발사. \n [[DMG_MAGIC]], [[DEBUFF_STACK]] 1개. ", 
          "사거리 끝에 도달하거나 \n [[ON_CHAMP_HIT]] [[PROJECTILE]]가 역장으로 변환. \n 역장 안의 적은 [[SLOW]].([[PIERCE]] [[PROJECTILE]]) \n 단, 역장은 가는 Q로 판정.", 
          "이후 장치로 되돌아오며 \n [[DMG_MAGIC]], [[DEBUFF_STACK]] 1개. \n \n",

          "W는 처음에 아군만 보이는 [[ZONE]] 생성. \n 이후 에코의 환영 분신이 시간 구체([[NON_PROJECTILE]])를 [[ZONE]]에 투척. \n [[ZONE]] 중앙에 낙하하면 [[AOE]] [[DOT]] [[SLOW]]. \n 이때 에코가 [[ZONE]]에 들어가 있으면 [[DETONATE]]하여 \n [[ZONE]] [[AOE]] [[STUN]]과 [[SHIELD]]. \n \n",

          "E로 [[DASH]]하여 다음 [[BA]]를 [[EMPOWERED]]하여 [[RANGE_UP]]. \n 공격하면 대상에게 [[BLINK]]. \n [[DMG_MAGIC]]와 [[DEBUFF_STACK]] 1개.", 
          "[[CC_BUFFER]]로 일부 CC 무시 가능. \n \n",

          "R은 [[COOLDOWN]]이 준비되면, \n 4초 이전의 에코 위치를 보여줌.", 
          "사용하면 [[UNTARGETABLE]] 상태가 되고 \n 4초 전 위치로 재빠르게 돌아감. \n 동시에 [[HEAL]]하는데 \n 4초간 [[SELF_MISSING_HP_SCALE]]에 비례하여 회복량 증가.", 
          "되돌아간 곳에 [[AOE]] [[DMG_MAGIC]]와 [[DEBUFF_STACK]] 1개.",
        ],

        en: [
          "P applies [[DEBUFF_STACK]] with [[BA]]s and skills. \n Triggers at 3 stacks, dealing [[DMG_MAGIC]]. \n Also grants [[MS_UP]] when triggered on a champion. \n 5 second [[ON_TARGET_CD]]. \n \n",
          "Q fires a [[PIERCE_MINION]] device ([[PROJECTILE]]). \n [[DMG_MAGIC]] and 1 [[DEBUFF_STACK]]. ",
          "On reaching max range or \n [[ON_CHAMP_HIT]], the [[PROJECTILE]] turns into a field. \n Enemies inside the field are [[SLOW]]ed. ([[PIERCE]] [[PROJECTILE]]) \n Note that the field counts as the outgoing Q.",
          "It then returns as the device, \n dealing [[DMG_MAGIC]] and 1 [[DEBUFF_STACK]]. \n \n",
          "W first creates a [[ZONE]] visible only to allies. \n Ekko's afterimage then throws a time sphere ([[NON_PROJECTILE]]) into the [[ZONE]]. \n When it lands at the center of the [[ZONE]], [[AOE]] [[DOT]] [[SLOW]]. \n If Ekko is inside the [[ZONE]] at this point, it [[DETONATE]]s, \n applying [[ZONE]] [[AOE]] [[STUN]] and granting a [[SHIELD]]. \n \n",
          "E [[DASH]]es and makes the next [[BA]] [[EMPOWERED]] with [[RANGE_UP]]. \n Attacking [[BLINK]]s to the target. \n [[DMG_MAGIC]] and 1 [[DEBUFF_STACK]].",
          "[[CC_BUFFER]] allows some CC to be ignored. \n \n",
          "When R's [[COOLDOWN]] is ready, \n it shows Ekko's position from 4 seconds ago.",
          "When used, Ekko becomes [[UNTARGETABLE]] \n and quickly returns to his position from 4 seconds ago. \n He also [[HEAL]]s, \n with the amount increased based on [[SELF_MISSING_HP_SCALE]] over those 4 seconds.",
          "Deals [[AOE]] [[DMG_MAGIC]] and applies 1 [[DEBUFF_STACK]] at the return location.",
        ]

      },

      note2: {
        ko: [
        "P의 [[DEBUFF_STACK]]이 쌓이는 것들은 \n [[BA]], 가는Q(역장), 오는Q, R", 
        "Q의 [[DOT]] [[SLOW]]는 가는 Q의 역장에만 적용.",
        "E 스킬은 3단계로 나뉨 구르기 / 경직 / [[BLINK]] 단계. \n 경직 단계에서 에코가 맞은 CC는 유효 하지만 \n [[BLINK]] 단계가 발동되어 이동하고 공격하는 것. \n [[BLINK]] 단계에는 CC 저항력 없음. \n [[BLINK]] 했을 때 CC의 지속시간이 남아있다면 \n CC 효과 유효.", 
        "E의 경직단계의 경직 시간은 공격속도와 무관하게 일정.",
        "W는 지속[[SLOW]].", 
        "R을 6레벨에 배우지 않고 있다가 필요할 때 배우면 \n 돌아가는 위치를 상대에게 숨길 수 있음."
      ],
        en: [
          "P's [[DEBUFF_STACK]] is applied by \n [[BA]], outgoing Q (field), returning Q, and R",
          "Q's [[DOT]] [[SLOW]] only applies in the outgoing Q's field.",
          "E has three phases: roll / buffer / [[BLINK]] phase. \n CC that hits Ekko during the buffer phase is valid, \n but the [[BLINK]] phase still triggers and he moves and attacks. \n There is no CC resistance during the [[BLINK]] phase. \n If the CC's duration remains after the [[BLINK]], \n the CC effect still applies.",
          "The buffer duration of E's buffer phase is fixed and unaffected by attack speed.",
          "W applies persistent [[SLOW]].",
          "Delaying R until needed (instead of learning it at level 6) \n can hide the return location from enemies.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 80,
    16: 50,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Ekko,
  // 최근 변경 V26.18). W/E는 DDragon effectBurn과 위키가 일치, P/Q/R은 위키 본문 수치로 채움.
  // Q 첫 피해는 DDragon effectBurn(70~130)과 위키(80~140)가 달라 위키 값을 채택.
  // R "잃은 체력 1%당 3%"는 위키의 0~300% 증가 표기에서 환산한 값.
  skillTooltip: {
    P: {
      ko: "같은 대상에 대한 세 번째 [[BA]] 및 스킬 공격마다 30~150([[LEVEL_SCALE]] 비례)(+80% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]를 입힙니다. \n 대상이 챔피언일 경우, 에코가 2/2.5/3초 동안 50/60/70/80%([[LEVEL_SCALE]] 비례)의 [[MS_UP]]를 얻습니다.",
      en: "Every third [[BA]] or skill hit against the same target deals 30~150 (based on [[LEVEL_SCALE]]) (+80% [[AP_SCALE]]) bonus [[DMG_MAGIC]]. \n If the target is a champion, Ekko gains 50/60/70/80% (based on [[LEVEL_SCALE]]) [[MS_UP]] for 2/2.5/3 seconds.",
    },
    Q: {
      ko: "에코가 장치를 던져 80/95/110/125/140(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 장치는 챔피언에게 맞거나 사거리 끝에 도달하면 역장을 펼쳐 안에 있는 적을 40/45/50/55/60% [[SLOW]]시킵니다. \n 이후 에코가 장치를 불러들이며 40/65/90/115/140(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 9/8.5/8/7.5/7초의 [[COOLDOWN]].",
      en: "Ekko throws a device, dealing 80/95/110/125/140 (+30% [[AP_SCALE]]) [[DMG_MAGIC]]. \n On hitting a champion or reaching max range, the device expands into a field that [[SLOW]]s enemies inside by 40/45/50/55/60%. \n Ekko then recalls the device, dealing 40/65/90/115/140 (+70% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 9/8.5/8/7.5/7 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 에코의 [[BA]]는 체력이 30% 미만인 적에게 [[TARGET_MISSING_HP_SCALE]]의 3%(+주문력 100당 3%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 사용 시: 에코가 잠시 후 1.5초 동안 유지되는 시간의 구체([[ZONE]])를 발사하여 안에 있는 적을 40% [[SLOW]]시킵니다. \n 에코가 구체 안에 들어가면 구체를 폭발시켜 2.25초 동안 [[STUN]]시키고 100/120/140/160/180(+150% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 얻습니다. \n \n 22/20/18/16/14초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Ekko's [[BA]]s deal [[DMG_MAGIC]] equal to 3% (+3% per 100 AP) of [[TARGET_MISSING_HP_SCALE]] to enemies below 30% health. \n \n Active: After a delay, Ekko launches a chronosphere ([[ZONE]]) that lasts 1.5 seconds and [[SLOW]]s enemies inside by 40%. \n If Ekko enters the sphere, it detonates, [[STUN]]ning enemies for 2.25 seconds and granting him a [[SHIELD]] that absorbs 100/120/140/160/180 (+150% [[AP_SCALE]]) damage. \n \n 22/20/18/16/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "에코가 [[DASH]]합니다. \n 다음 [[BA]]가 [[EMPOWERED]]되어 [[RANGE_UP]]을 얻고 에코가 대상 쪽으로 [[BLINK]]하며 50/75/100/125/150(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 9/8.5/8/7.5/7초의 [[COOLDOWN]].",
      en: "Ekko [[DASH]]es. \n His next [[BA]] is [[EMPOWERED]], gaining [[RANGE_UP]]; Ekko [[BLINK]]s to the target and deals an additional 50/75/100/125/150 (+40% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 9/8.5/8/7.5/7 second [[COOLDOWN]].",
    },
    R: {
      ko: "에코가 시간을 되돌려 [[STASIS]] [[UNTARGETABLE]] 상태에 빠지며 4초 전에 있던 지점으로 되돌아가 근처의 적에게 200/350/500(+175% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 체력을 100/150/200(+60% [[AP_SCALE]]) [[HEAL]]합니다. \n \n [[HEAL]]량은 이 4초 동안 에코가 잃은 체력에 따라 증가하며, 잃은 체력 1%당 회복량이 3% 증가합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Ekko rewinds time, entering [[STASIS]] and becoming [[UNTARGETABLE]] as he returns to where he was 4 seconds ago, dealing 200/350/500 (+175% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies and [[HEAL]]ing for 100/150/200 (+60% [[AP_SCALE]]). \n \n The [[HEAL]] amount increases based on the health Ekko lost during those 4 seconds, by 3% for every 1% of health lost. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default ekko;
