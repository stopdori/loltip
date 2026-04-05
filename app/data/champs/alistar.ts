import type { ChampData } from "../interactions/types";

const alistar: ChampData = {
  id: "alistar",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["W_FLASH", "DASH", "WALL_HOP", "KNOCKBACK"],
    E: ["GHOSTING", "STUN"],
    R: ["CC_CLEANSE", "DMG_REDUCE", "BUFF_FORM"],
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
    Q: ["DMG_MAGIC", "TIMING_CAST", "AOE", "BUFF_STACK", "AIRBORNE"],
    W: ["DMG_MAGIC", "TARGETED", "DASH", "BUFF_STACK", "KNOCKBACK"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "AOE", "DOT", "GHOSTING"] },
      { label: { ko: "E On-Hit", en: "On-Hit"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT", "BUFF_STACK", "STUN"]},
    ] },

    R: ["BUFF_FORM", "DMG_REDUCE"],
  },

     notes: {
    skill: {
      note3: { 
        ko: [
          "R쓰고 맞아주면서 Q, W, E로 적절히 수비.", "상대 핵심 딜러진에 WQ 박아서 딜로스 만들어내기.", "[[Q_FLASH]]로 진입해서 W로 상대 딜러 낚아오기."
        ], en: [
          "Use R to tank hits while peeling with Q, W, and E.",
          "Land WQ on the enemy carry to create a window of lost damage.",
          "Use [[Q_FLASH]] to engage, then W to pull in the enemy carry.",
        ] },
      note1: {

        ko: [
        "P([[BUFF_STACK]])의 [[HEAL]]은 CC를 맞히면 1스택.\n근처 적 미니언이 죽으면 1스택.\n적 챔피언 7스택, 에픽몬스터 7스택.\n7스택이 차면 알리와 근처아군 1명 [[HEAL]].",
        "Q는 주변 적을 [[AIRBORNE]]",
        "W는 적 하나를 [[KNOCKBACK]]",
        "쿵쾅은 WQ \n W로 대상을 박치기하러 갈 때, 근처에서 Q \n W 스마트키를 해제하고 쓰면 쉬움.",
        "E는 사용하고 적 챔피언 근처에서 비비면 \n 알리 밑에 쇠사슬이 차고 \n 4개가 차면 다음 [[BA]]가 강화되어 [[STUN]].",
        "R은 CC에 맞았을 때 사용하면 \n CC가 풀리고 [[DMG_REDUCE]].",

        ],

        en: [
        "P's [[BUFF_STACK]] gains 1 stack on landing CC or when a nearby enemy minion dies. \n Stacks cap at 7 per champion or epic monster. \n At 7 stacks, heals Alistar and a nearby ally.",
        "Q launches nearby enemies [[AIRBORNE]].",
        "W [[KNOCKBACK]]s a single enemy.",
        "The combo is W → Q. \n Dash to the target with W, then cast Q nearby. \n Disabling W's smartcast makes this easier.",
        "After casting E, staying near an enemy champion builds chains beneath Alistar. \n At 4 chains, the next [[BA]] is empowered and applies [[STUN]].",
        "Using R after getting hit by CC removes it and grants [[DMG_REDUCE]].",
        ]

      },

      note2: {
        ko: [
        "W는 [[INSEC_KICK]] 안됨.", "R에 [[TENACITY]] 없음. \n R의 [[CC_CLEANSE]]로 범위 지속적인 CC를 해제하면 \n 바로 다시 걸림. \n 예) 코그모 E의 [[SLOW]], 그브 W(연막탄)의 [[SLOW]].", "R로 [[AIRBORNE]]류를 해제하면 \n 이동은 불가능하지만 스킬은 사용 가능.\n단, W는 버그인지 모르겠는데 돌진은 되지만 스킬이 무효임. 대상이 밀려나지 않고, 데미지도 들어가지 않음."
      ],

        en: ["P's [[HEAL]] gains 1 stack from landing CC or when a nearby enemy minion dies.\nAt 7 stacks per champion or epic monster, heals Alistar and a nearby ally", "Disabling smartcast on W makes the Pulverize-Headbutt combo easier", "R is best used after getting hit by CC.\nR has no [[TENACITY]].\nUsing R's [[CC_CLEANSE]] to remove persistent CC will reapply it (e.g. Kog'Maw E [[SLOW]], Graves W [[SLOW]])", "Cleansing [[AIRBORNE]] with R stops movement but still allows skill use.\nHowever, W may be bugged — the charge triggers but the skill is nullified: the target is not knocked back and takes no damage"]
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

};

export default alistar;
