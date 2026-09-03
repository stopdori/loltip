import type { ChampData } from "../interactions/types";

const camille: ChampData = {
  id: "camille",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD"],
    Q: ["AA_RESET", "MS_UP"],
    W: ["W_FLASH", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "SLOW"],
    E: ["DASH", "WALL_HOP", "CC_BUFFER", "AS_UP", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK", "STUN"],
    R: ["R_FLASH", "DISRUPT", "DASH", "WALL_HOP", "UNTARGETABLE", "UNSTOPPABLE", "TOWER_DODGE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "GRAB", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"],
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
      { label: { ko: "E1 벽돌진단계", en: "E2 Wall-dash"  }, tags: ["SKILL_CHANNEL", "DASH"] },
      { label: { ko: "E1 대기단계", en: "E3 Hold"  }, tags: ["SKILL_CHANNEL", "SKILL_RECAST"] },
      { label: { ko: "E2 돌진단계", en: "E4 Dash"  }, tags: ["DMG_PHYSICAL", "DASH", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK", "STUN"] },
    ] },

    R:{ phases: [
      { label: { ko: "도약", en: "Dash" }, tags: ["TIMING_CAST", "DISRUPT", "DASH", "WALL_HOP", "UNTARGETABLE", "UNSTOPPABLE", "TOWER_DODGE"] },
      { label: { ko: "장판", en: "Zone" }, tags: ["ST_DELAYED", "ZONE", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"] },
      { label: { ko: "표식", en: "Mark"  }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "소규모 교전이 강함.",
          "E로 진입해서 어그로 끌다가 \n 상대 핵심딜러에게 R로 가두면서 스킬 흡수하기.",
          "R로 상대 핵심 딜러 하나를 가두고 \n 팀의 호응을 이끌어내기.",
        ], en: [
          "Strong in small-scale skirmishes.",
          "Engage with E to draw aggro,\nthen lock down the key enemy carry with R to absorb their abilities.",
          "Isolate the enemy carry with R\nand let your team follow up.",
        ] },
      note1: {

        ko: [
          "P의 [[SHIELD]]는 [[BA]], Q로 상대를 때리면 생김. \n 표식 색깔에 따라 물리[[SHIELD]], 마법[[SHIELD]] \n \n",

          "Q1으로 때리면 [[MS_UP]]. \n 바로 재사용하면 약한 Q2. \n 노란 테두리일 때 쓰면 80% [[DMG_TRUE]]의 Q2. \n \n",

          "W는 바깥쪽에 맞혀야지만 [[HEAL]]과 [[SLOW]] 효과 발동 \n \n",

          "E는 \n 1. 벽에 갈고리를 발사. \n 2. 갈고리가 닿으면 벽으로 [[DASH]]. \n 3. 벽에서 대기 \n 4. E2로 [[DASH]] 가능.", 
          "E2로 [[DASH]] 할 때 [[AS_UP]] [[BUFF]]. \n 적 챔피언에게 [[DASH]]하면 [[RANGE_UP]] 2배. \n 적 챔피언과 부딪히면 \n 약간의 [[KNOCKBACK]], [[STUN]]과 피해를 주고 멈춤.", 
          "갈고리 투척단계에 [[CC_BUFFER]]가 있어서 \n 일부 CC 무시 가능. \n \n",
          
          "R은 [[UNTARGETABLE]], [[UNSTOPPABLE]]로 한 대상에게 [[DASH]]. \n 대상을 중심으로 [[ZONE]]을 생성하고 \n 대상을 제외한 적들을 [[ZONE]] 밖으로 [[KNOCKBACK]]. \n 대상은 [[ZONE]] 밖으로 나갈 수 없음. \n 대상은 잠시 [[DISRUPT]]. \n [[ON_HIT]] [[DMG_MAGIC]]가 추가되는 [[MARK]]을 찍음. \n \n 스킬을 찍을수록 [[ZONE]] 지속시간 시간 증가. \n 카밀이 벗어나면 [[ZONE]], [[MARK]] 해제."
        ],

        en: [
          "P's [[SHIELD]] activates when hitting an enemy with [[BA]] or Q.\nThe shield type (physical/magic) depends on the mark color.\n\n",

          "Q1 grants [[MS_UP]] on hit.\nRecasting immediately deals a weak Q2.\nRecasting when the border glows yellow deals Q2 with 80% [[DMG_TRUE]].\n\n",

          "W only triggers [[HEAL]] and [[SLOW]] when hitting with the outer ring.\n\n",

          "E:\n1. Throws a hook toward a wall.\n2. If the hook connects, [[DASH]]es to the wall.\n3. Holds on the wall.\n4. Can [[DASH]] again as E2.",
          "The E2 [[DASH]] grants [[AS_UP]] [[BUFF]].\nDashing toward an enemy champion doubles the [[RANGE_UP]].\nColliding with an enemy champion\napplies a slight [[KNOCKBACK]] and [[STUN]], dealing damage and stopping her.",
          "The hook-throw phase has [[CC_BUFFER]],\nallowing some CC to be ignored.\n\n",

          "R [[DASH]]es to a target while [[UNTARGETABLE]] and [[UNSTOPPABLE]].\nCreates a [[ZONE]] centered on the target,\n[[KNOCKBACK]]ing enemies other than the target out of the [[ZONE]].\nThe target cannot leave the [[ZONE]].\nThe target is briefly [[DISRUPT]]ed.\nApplies a [[MARK]] that adds [[ON_HIT]] [[DMG_MAGIC]].\n\nSkill rank increases the [[ZONE]]'s duration.\nThe [[ZONE]] and [[MARK]] end if Camille leaves it.",
        ]

      },

      note2: {
        ko: [
        "E스킬은 네단계로 나뉨 \n E1 투척/벽돌진/대기 \n E2 돌진", 
        "E1 투척단계에 카밀이 맞은 CC는 유효하지만 \n 벽돌진단계가 발동되어 벽으로 [[DASH]]. \n 대기단계에서 [[IMMOBILIZING]]가 남아있다면 \n E1이 해제될 수 있음.", 
        "E는 웬만한 생성된 벽에도 사용 가능. \n \n", 
        "R은 설명에 [[UNSTOPPABLE]]가 없지만, \n 점프해서 날아갈 때 체력바 위에 [[UNSTOPPABLE]]가 생김."
      ],
        en: [
          "E has four phases \n E1: Throw / Wall-dash / Hold \n E2: Dash",
          "CC applied to Camille during the E1 Throw phase is still valid, but the Wall-dash phase still triggers and she [[DASH]]es to the wall. \n If [[IMMOBILIZING]] persists into the Hold phase, \n E1 may be canceled.",
          "E can be used on most generated terrain walls.\n\n",
          "R's [[UNSTOPPABLE]] is not shown in the description, but appears above Camille's health bar while leaping to the target.",
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
