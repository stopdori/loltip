import type { ChampData } from "../interactions/types";

const hwei: ChampData = {
  id: "hwei",

  skills: {
    base: {
      // 🔫 Q스킬 기반
      P: [],
      Q: ["Q_FLASH"],
      W: ["W_FLASH"],
      E: ["SLOW"],
      R: ["R_FLASH", "SLOW"],
    },

    alt: {
      // 🔨 W스킬 기반
      P: [],
      Q: ["MS_UP"],
      W: ["W_FLASH", "SHIELD"],
      E: ["MANA_RESTORE"],
      R: ["R_FLASH", "SLOW"],
    },

    alt2: {
      // 🔨 E스킬 기반
      P: [],
      Q: ["Q_FLASH", "FEAR"],
      W: ["W_FLASH", "ROOT"],
      E: ["E_FLASH", "GRAB", "SLOW"],
      R: ["R_FLASH", "SLOW"],
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
    alt2: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["DMG_MAGIC", "PROC", "ZONE", "ST_DELAYED"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK"],
      W: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DEBUFF_STACK", "ST_DELAYED"],
      E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "ZONE", "DOT", "DEBUFF_STACK", "ST_DELAYED", "SLOW"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },


    alt: {
      P: ["DMG_MAGIC", "ZONE", "PROC"],
      Q: ["PROJECTILE", "ZONE"],
      W: ["ZONE"],
      E: ["DMG_MAGIC", "PROJECTILE", "BUFF_STACK", "DEBUFF_STACK", "ON_HIT"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },


    alt2: {
      P: ["DMG_MAGIC", "ZONE", "PROC"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "FEAR"],

      W:{ phases: [
      { label: { ko: "EW 장판", en: "EW Zone" }, tags: ["TIMING_CAST", "PROJECTILE", "ZONE", "ST_DELAYED"] },
      { label: { ko: "EW 투사체", en: "EW Projectile" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "HOMING", "SINGLE", "DEBUFF_STACK", "ROOT"] },
    ] },

      E: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "DEBUFF_STACK", "ST_DELAYED", "GRAB"],
      R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK", "ST_DELAYED"],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q 계열로 포킹을 하다 \n E 계열로 이동을 제한하고 \n R을 묻혀 광역피해.", "R을 맞히면 QE, EE로 최대한 P의 [[DEBUFF]]를 많이 터뜨려 \n [[AOE]] [[DMG_MAGIC]]를 많이 넣는게 좋음.",
        ],
        en: [
          "Poke with Q skills, \n then limit movement with E skills \n and land R for area damage.",
          "After landing R, use QE and EE to trigger as many P [[DEBUFF]] explosions as possible \n for maximum [[AOE]] [[DMG_MAGIC]].",
        ] },
      note1: {

        ko: [
          "흐웨이는 Q, W, E를 눌러서 스킬을 준비. \n 이때 Q, W, E, R이 변경됨. R은 취소버튼. \n \n Q는 큰 피해를 주는 3개의 스킬 \n W는 아군에게 이로운 3개의 스킬 \n E는 CC 계열 3개의 스킬 \n \n 그래서 일반 R까지 총 10개의 스킬이 있음. \n \n",

          "P는 스킬로 [[DEBUFF]]를 걸고 \n 스킬로 한 번 더 걸면 \n 발밑에 폭발이 일어나 [[AOE]] [[DMG_MAGIC]]. \n \n",

          "Q는 빨강 데미지 계열 \n \n QQ 적 최대체력 비례 [[AOE]] [[DMG_MAGIC]]와 [[DEBUFF]]. \n \n QW [[AOE]] [[DMG_MAGIC]]와 [[DEBUFF]]. \n 고립, 이동불가 챔피언에 잃은체력 비례 데미지. \n \n QE [[ZONE]] [[DOT]] [[DMG_MAGIC]]와 [[DEBUFF]]와 [[SLOW]]. \n \n",

          "W는 파랑 아군 [[BUFF]] 계열. \n \n WQ 아군 [[MS_UP]] [[ZONE]]. \n \n WW 지속적으로 차는 [[SHIELD]] [[ZONE]]. \n \n WE [[BUFF]]스택 3개 추가. \n 스킬과 [[BA]]마다 1개 소모. \n [[BUFF]] 하나당 [[MANA_RESTORE]]과 [[DMG_MAGIC]]. \n [[BA]]에는 [[DEBUFF]]도 추가. \n \n",

          "E는 보라 CC 계열 \n \n EQ [[SINGLE]]대상 [[FEAR]] [[DEBUFF]] [[PROJECTILE]] 발사. \n \n EW [[ZONE]]을 깔고 잠시뒤에 \n [[ZONE]]이 사라지면서 [[AOE]]내의 적 챔피언에게 \n [[ROOT]] [[DEBUFF]] [[PROJECTILE]] 발사. \n [[PIERCE]] 안됨. 미니언에도 막힘. \n \n EE [[AOE]] [[AIRBORNE]]과 [[SLOW]]와 [[DEBUFF]]. \n \n ",

          "R은 [[PROJECTILE]]를 발사. \n 적 챔피언이 맞으면 대상 주변에 [[AURA]]를 생성. \n [[AURA]]는 [[DOT]] [[DMG_MAGIC]]와 중첩되는 [[SLOW]]. \n [[DEBUFF]]는 1번. \n 시간이 지나면 [[AURA]]가 폭발하여 광역 [[DMG_MAGIC]].",
        ],

        en: [
          "Hwei prepares a skill by pressing Q, W, or E. \n This changes Q, W, E, and R — R becomes a cancel button. \n \n Q: 3 high-damage skills \n W: 3 ally utility skills \n E: 3 CC skills \n \n Including the base R, Hwei has 10 skills total. \n \n",

          "P: Applying [[DEBUFF]] with a skill, \n then applying it again \n triggers an explosion at the target's feet for [[AOE]] [[DMG_MAGIC]]. \n \n",

          "Q — Red damage skills. \n \n QQ: [[AOE]] [[DMG_MAGIC]] and [[DEBUFF]] scaling with enemy max HP. \n \n QW: [[AOE]] [[DMG_MAGIC]] and [[DEBUFF]]. \n Bonus damage scaling with missing HP against isolated or immobilized champions. \n \n QE: [[ZONE]] [[DOT]] [[DMG_MAGIC]] with [[DEBUFF]] and [[SLOW]]. \n \n",

          "W — Blue ally [[BUFF]] skills. \n \n WQ: [[ZONE]] that grants ally [[MS_UP]]. \n \n WW: [[ZONE]] that continuously regenerates a [[SHIELD]]. \n \n WE: Adds 3 [[BUFF]] stacks. \n Each skill or [[BA]] consumes 1 stack. \n Each stack provides [[MANA_RESTORE]] and [[DMG_MAGIC]]. \n [[BA]]s also apply [[DEBUFF]]. \n \n",

          "E — Purple CC skills. \n \n EQ: Fires a [[SINGLE]]-target [[PROJECTILE]] applying [[FEAR]] and [[DEBUFF]]. \n \n EW: Places a [[ZONE]], then after a delay the zone collapses \n and fires a [[ROOT]] [[DEBUFF]] [[PROJECTILE]] at enemy champions inside. \n Cannot [[PIERCE]] — blocked by minions. \n \n EE: [[AOE]] [[AIRBORNE]], [[SLOW]], and [[DEBUFF]]. \n \n",

          "R: Fires a [[PROJECTILE]]. \n Hitting an enemy champion creates an [[AURA]] around them. \n The [[AURA]] deals [[DOT]] [[DMG_MAGIC]] and stacking [[SLOW]]. \n Applies [[DEBUFF]] once. \n After a delay, the [[AURA]] explodes for [[AOE]] [[DMG_MAGIC]].",
        ]

      },

      note2: {
        ko: [
        "QE, R은 지속[[SLOW]].",
        "WW [[SHIELD]]는 아군에게 효과 15% 감소",
        "P의 [[DEBUFF]]가 쌓이는 스킬\nQQ, QW, QE, WE([[BA]]) \n EQ, EW, EE, R ([[AURA]] 범위에 닿으면)",
        "귀환 중에 Q, W, E로 준비를 해도 \n 귀환이 끊기지 않음.",
      ],
        en: [
          "QE and R apply persistent [[SLOW]].",
          "WW [[SHIELD]] is 15% less effective on allies.",
          "Skills that apply P's [[DEBUFF]]:\nQQ, QW, QE, WE ([[BA]]) \n EQ, EW, EE, R (on contact with the [[AURA]])",
          "Preparing a skill with Q, W, or E during recall \n does not cancel the recall.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 80,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. DDragon 자동 fetch는 Q/W/E가
  // 테마 전환용 스킬이라 하위 9개 스킬(QQ/QW/QE, WQ/WW/WE, EQ/EW/EE)의
  // 수치가 비어있어(cooldownBurn만 있고 effectBurn/vars가 전부 "0") 그대로
  // 쓸 수 없었고, 전량 공식 위키(wiki.leagueoflegends.com) 수치로 작성함.
  // 스킬 한국어 명칭은 Community Dragon ko_KR 데이터(champions/910.json)
  // spellbookOverride 배열 기준.
  // 2026-09-15: base/alt/alt2(화풍) 폼별로 쪼갬. 이전엔 Q/W/E 한 칸에
  // 하위 3스킬(QQ/QW/QE 등) 설명을 전부 욱여넣었는데, 실제 화면에서
  // 사용자가 보는 슬롯 위치(예: Q폼에서 E슬롯 = QE)와 안 맞고 문장이
  // 길어 iframe에서 말풍선이 잘리는 문제가 있어 폼별로 나눔(사용자 지적).
  // P/R은 폼과 무관하게 같은 스킬이라 세 폼에 동일 문장을 반복 기입
  // (skills/gimmick의 기존 컨벤션과 동일).
  skillTooltip: {
    base: {
      P: {
        ko: "흐웨이가 [[DMG_MAGIC]]를 입히는 스킬로 적 챔피언을 맞히면 4초 동안 [[MARK]]를 남깁니다. \n [[MARK]]가 남아있는 동안 다른 피해 스킬로 같은 대상을 다시 맞히면 [[MARK_CONSUME]]되며, 0.85초 뒤 그 자리에서 [[AOE]] [[DETONATE]]하여 주변 적에게 [[LEVEL_SCALE]] 40~285(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다.",
        en: "",
      },
      Q: {
        ko: "파멸의 화염: [[NON_TARGETED]] [[PROJECTILE]]를 날려 처음 맞은 적이나 최대 사거리에서 [[AOE]] 폭발하며 50/80/110/140/170(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]와 대상 [[TARGET_MAXHP_SCALE]] 3~7%(몬스터 최대 250)에 해당하는 추가 피해를 입힙니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
        en: "",
      },
      W: {
        ko: "절단의 번개: [[NON_TARGETED]]로 지정한 위치에 1초 뒤 낙뢰가 떨어져 [[AOE]] 60/85/110/135/160(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히며, 고립되었거나 CC에 걸린 대상에게는 [[TARGET_MISSING_HP_SCALE]]에 비례해 최대 200~560(+60~105% [[AP_SCALE]])까지 피해가 증가합니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
        en: "",
      },
      E: {
        ko: "녹아내린 균열: [[NON_TARGETED]]로 지정한 선을 따라 1.4초에 걸쳐 [[X7]] [[DMG_MAGIC]] 폭발(회당 20/35/50/65/80(+30% [[AP_SCALE]]))이 일어나고, 2.5초 동안 유지되는 [[ZONE]]을 남겨 0.25초마다 [[DOT]] [[DMG_MAGIC]](총 50/87.5/125/162.5/200(+60% [[AP_SCALE]]))과 35% [[SLOW]]를 적용합니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
        en: "",
      },
      R: {
        ko: "R을 사용하면 흐웨이가 구체를 발사해 처음 맞은 적 챔피언에게 [[PROJECTILE]]이 달라붙습니다. 이후 3초 동안 대상에게 0.25초마다 2.5/5/7.5(+1.25% [[AP_SCALE]])의 [[DMG_MAGIC]] [[DOT]]를 입히고 [[DEBUFF_STACK]]을 쌓아(최대 12스택, 스택당 10%) 최대 120%까지 [[SLOW]]시킵니다. \n 지속시간이 끝나거나 대상이 사망하면 [[AOE]] [[DETONATE]]하여 주변 적에게 200/325/450(+80% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]를 입히고, 적중한 대상을 3초 동안 [[TRUE_SIGHT]]로 드러냅니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "",
      },
    },

    alt: {
      P: {
        ko: "흐웨이가 [[DMG_MAGIC]]를 입히는 스킬로 적 챔피언을 맞히면 4초 동안 [[MARK]]를 남깁니다. \n [[MARK]]가 남아있는 동안 다른 피해 스킬로 같은 대상을 다시 맞히면 [[MARK_CONSUME]]되며, 0.85초 뒤 그 자리에서 [[AOE]] [[DETONATE]]하여 주변 적에게 [[LEVEL_SCALE]] 40~285(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다.",
        en: "",
      },
      Q: {
        ko: "쏜살같은 물살: [[NON_TARGETED]]로 4/4.5/5/5.5/6초 동안 유지되는 [[ZONE]] 물살을 만들어, 그 안에 있는 아군에게 30/32.5/35/37.5/40%(+[[AP_SCALE]] 100당 3%)의 [[MS_UP]]와 [[GHOSTING]]을 계속 재부여합니다. \n \n 18/17.5/17/16.5/16초의 [[COOLDOWN]].",
        en: "",
      },
      W: {
        ko: "반사의 웅덩이: [[NON_TARGETED]]로 [[ZONE]] 물웅덩이를 3초간 만들어 그 안에 머무르는 아군에게 [[SHIELD]]를 부여합니다. 처음 50/70/90/110/130(+30% [[AP_SCALE]])에서 시작해 시간이 지날수록 최대 100/140/180/220/260(+60% [[AP_SCALE]])까지 증가하며, 아군은 자신의 85%만큼 받습니다. \n \n 18/17.5/17/16.5/16초의 [[COOLDOWN]].",
        en: "",
      },
      E: {
        ko: "요동치는 빛: 이후 [[X3]]회의 [[BA]] 또는 스킬 적중에 20/30/40/50/60(+15% [[AP_SCALE]])의 추가 [[DMG_MAGIC]](미니언·몬스터 대상은 절반)과 45/50/55/60/65의 [[MANA_RESTORE]]를 주는 [[EMPOWERED]] 상태가 됩니다(9초 내 소모). \n \n 18/17.5/17/16.5/16초의 [[COOLDOWN]].",
        en: "",
      },
      R: {
        ko: "R을 사용하면 흐웨이가 구체를 발사해 처음 맞은 적 챔피언에게 [[PROJECTILE]]이 달라붙습니다. 이후 3초 동안 대상에게 0.25초마다 2.5/5/7.5(+1.25% [[AP_SCALE]])의 [[DMG_MAGIC]] [[DOT]]를 입히고 [[DEBUFF_STACK]]을 쌓아(최대 12스택, 스택당 10%) 최대 120%까지 [[SLOW]]시킵니다. \n 지속시간이 끝나거나 대상이 사망하면 [[AOE]] [[DETONATE]]하여 주변 적에게 200/325/450(+80% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]를 입히고, 적중한 대상을 3초 동안 [[TRUE_SIGHT]]로 드러냅니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "",
      },
    },

    alt2: {
      P: {
        ko: "흐웨이가 [[DMG_MAGIC]]를 입히는 스킬로 적 챔피언을 맞히면 4초 동안 [[MARK]]를 남깁니다. \n [[MARK]]가 남아있는 동안 다른 피해 스킬로 같은 대상을 다시 맞히면 [[MARK_CONSUME]]되며, 0.85초 뒤 그 자리에서 [[AOE]] [[DETONATE]]하여 주변 적에게 [[LEVEL_SCALE]] 40~285(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다.",
        en: "",
      },
      Q: {
        ko: "암울한 형상: [[NON_TARGETED]] [[PROJECTILE]]를 날려 처음 맞은 적을 짧게 쓰러뜨리고 1/1.125/1.25/1.375/1.5초 동안 [[FEAR]] 상태로 만들며 70/110/150/190/230(+65% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. 동시에 70~99%의 [[SLOW]]가 적용되며 흐웨이와 가까울수록 강해집니다. \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
        en: "",
      },
      W: {
        ko: "심연의 응시: [[NON_TARGETED]]로 눈알을 던져 주변에 [[VISION]]을 밝히고, 가장 가까운 적을 향해 자동으로 날아가 명중 시 1.2/1.4/1.6/1.8/2초 동안 [[ROOT]]시키고 2.5초 동안 [[TRUE_SIGHT]]로 드러내며 70/110/150/190/230(+65% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
        en: "",
      },
      E: {
        ko: "파괴의 아귀: [[NON_TARGETED]]로 지정 지역에 턱을 만들어 0.6초 뒤 다물리며, 범위 안의 적을 중앙으로 당겨 70/110/150/190/230(+65% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1.25초에 걸쳐 40/47.5/55/62.5/70%에서 점점 약해지는 [[SLOW]]를 적용합니다. \n \n 12/11.5/11/10.5/10초의 [[COOLDOWN]].",
        en: "",
      },
      R: {
        ko: "R을 사용하면 흐웨이가 구체를 발사해 처음 맞은 적 챔피언에게 [[PROJECTILE]]이 달라붙습니다. 이후 3초 동안 대상에게 0.25초마다 2.5/5/7.5(+1.25% [[AP_SCALE]])의 [[DMG_MAGIC]] [[DOT]]를 입히고 [[DEBUFF_STACK]]을 쌓아(최대 12스택, 스택당 10%) 최대 120%까지 [[SLOW]]시킵니다. \n 지속시간이 끝나거나 대상이 사망하면 [[AOE]] [[DETONATE]]하여 주변 적에게 200/325/450(+80% [[AP_SCALE]])의 추가 [[DMG_MAGIC]]를 입히고, 적중한 대상을 3초 동안 [[TRUE_SIGHT]]로 드러냅니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "",
      },
    },
  },
};

export default hwei;