import type { ChampData } from "../interactions/types";

const camille: ChampData = {
  id: "camille",
  skills: {
    P: ["SHIELD"],
    Q: ["AA_RESET", "MS_UP"],
    W: ["W_FLASH", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SLOW"],
    E: ["DASH", "WALL_HOP", "CC_BUFFER", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE", "STUN"],
    R: ["R_FLASH", "SILENCE", "DASH", "WALL_HOP", "UNTARGETABLE", "UNSTOPPABLE", "TOWER_DODGE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1"  }, tags: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "강화 Q2", en: "Empowered Q2"  }, tags: ["ST_CONDITIONAL", "AA_RESET", "DMG_PHYSICAL", "DMG_TRUE", "ON_HIT"] },
    ] },

    W: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],

    E: { phases: [
      { label: { ko: "E1 투척단계", en: "E1 Throw" }, tags: ["PROJECTILE", "CC_BUFFER"] },
      { label: { ko: "E1 벽돌진단계", en: "E1 Wall-dash"  }, tags: ["SKILL_CHANNEL", "DASH"] },
      { label: { ko: "E1 대기단계", en: "E1 Hold"  }, tags: ["SKILL_CHANNEL", "SKILL_RECAST"] },
      { label: { ko: "E2 돌진단계", en: "E2 Dash"  }, tags: ["DMG_PHYSICAL", "DASH", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE", "STUN"] },
    ] },

    R:{ phases: [
      { label: { ko: "도약", en: "Dash" }, tags: ["TIMING_CAST", "SILENCE", "DASH", "WALL_HOP", "UNTARGETABLE", "UNSTOPPABLE", "TOWER_DODGE"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ST_DELAYED", "ZONE", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"] },
      { label: { ko: "표식", en: "Mark"  }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "사이드가 강한편이고 한타가 약한편.",
          "최고의 팀 전술은 본대는 대치를 최대한 하고, \n 카밀이 사이드를 뚫다가 \n 뒷텔로 합류하기.",
          "E로 진입해서 어그로 끌다가 \n 상대 핵심딜러에게 R로 가두면서 스킬 흡수하기.",
          "R로 상대 핵심 딜러 하나를 가두고 \n 팀의 호응을 이끌어내기.",
        ], en: [
          "Strong in the sidelane, relatively weak in teamfights.",
          "The ideal team strategy is to stall in a standoff while Camille splits,\nthen joins via back-Teleport.",
          "Engage with E to draw aggro,\nthen lock down the key enemy carry with R to absorb their abilities.",
          "Isolate the enemy carry with R\nand let your team follow up.",
        ] },
      note1: {

        ko: [
          "P의 [[SHIELD]]는 [[BA]], Q로 상대를 때리면 생김. \n 표식 색깔에 따라 물리[[SHIELD]], 마법[[SHIELD]]",
          "Q1으로 때리면 [[MS_UP]]. \n 바로 재사용하면 약한 Q2. \n 노란 테두리일 때 쓰면 80% [[DMG_TRUE]]의 Q2.",
          "W는 바깥쪽에 맞혀야지만 [[HEAL]]과 [[SLOW]] 효과 발동",
          "E는 벽에 [[DASH]]해서 붙었다가 다시 E2로 [[DASH]] 가능. \n E2로 [[DASH]] 할 때 [[AS_UP]] \n 적 챔피언에게 E2 [[DASH]]하면 사거리 2배. \n 챔피언과 부딪히면 [[STUN]]과 피해를 주고 멈춤. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",
          "R은 [[UNTARGETABLE]], [[UNSTOPPABLE]]로 한 대상에게 [[DASH]]. \n 대상을 일정 범위에 가두고 [[MARK]]을 찍음. \n 짧은 [[SILENCE]]과 [[MARK]] 대상에게 [[BA]] [[DMG_MAGIC]] 추가. \n 범위에 있던 다른 적들을 [[KNOCKBACK]]. \n 스킬을 찍을수록 가두는 시간 증가. \n 카밀이 범위를 벗어나면 스킬 해제."
        ],

        en: [
          "P's [[SHIELD]] activates when hitting an enemy with [[BA]] or Q.\nThe shield type (physical/magic) depends on the mark color.",
          "Q1 grants [[MS_UP]] on hit.\nRecasting immediately deals a weak Q2.\nRecasting when the border glows yellow deals Q2 with 80% [[DMG_TRUE]].",
          "W only triggers [[HEAL]] and [[SLOW]] when hitting with the outer ring.",
          "E [[DASH]]es to a wall, then allows an E2 [[DASH]].\nThe E2 [[DASH]] grants [[AS_UP]].\nUsing E2 [[DASH]] toward an enemy champion doubles the range.\nColliding with a champion deals damage and applies [[STUN]].\n[[CC_BUFFER]] allows some CC to be ignored.",
          "R [[DASH]]es to a target while [[UNTARGETABLE]] and [[UNSTOPPABLE]].\nTraps them in an arena and applies a [[MARK]].\nBriefly [[SILENCE]]s the target; [[BA]]s against the [[MARK]]ed target deal bonus [[DMG_MAGIC]].\nOther nearby enemies are [[KNOCKBACK]]ed out.\nArena duration increases with rank.\nThe arena ends if Camille leaves its boundaries.",
        ]

      },

      note2: {
        ko: [
        "E스킬은 네단계로 나뉨 \n E1 투척/벽돌진/대기 \n E2 돌진", "E1 투척단계에 카밀이 맞은 CC는 유효하지만 \n 벽돌진단계가 발동되어 벽으로 [[DASH]]. \n 대기단계에서 [[SILENCE]], [[IMMOBILIZING]] 등의 CC가 남아있다면 \n E1이 해제될 수 있음." ,"E는 웬만한 생성된 벽에도 사용 가능.", "R은 설명에 [[UNSTOPPABLE]]가 없지만, \n 점프해서 날아갈 때 체력바 위에 [[UNSTOPPABLE]]가 생김.", "R은 시전 한 대상을 범위에 가두고 [[SILENCE]]을 잠깐 걸고, 범위가 펼쳐질 때 근처에 있던 다른 적 챔피언은 범위 밖으로 [[KNOCKBACK]]시킴."
      ],
        en: [
          "E has four phases \n E1: Throw / Wall-dash / Hold \n E2: Dash",
          "CC applied to Camille during the E1 Throw phase is still valid, but the Wall-dash phase still triggers and she [[DASH]]es to the wall. \n If CC such as [[SILENCE]] or [[IMMOBILIZING]] persists into the Hold phase, \n E1 may be canceled.",
          "E can be used on most generated terrain walls.",
          "R's [[UNSTOPPABLE]] is not shown in the description, but appears above Camille's health bar while leaping to the target.",
          "R traps the target inside an arena, briefly applies [[SILENCE]], and [[KNOCKBACK]]s nearby enemy champions out when the arena expands.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default camille;
