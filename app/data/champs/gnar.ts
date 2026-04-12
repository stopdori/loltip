import type { ChampData } from "../interactions/types";

const gnar: ChampData = {
  id: "gnar",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: ["AS_UP", "MS_UP", "RANGE_UP", "SEPARATOR", "ST_CONDITIONAL", "TRANSFORM"],
      Q: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      W: ["MS_UP"],
      E: ["E_FLASH", "AS_UP", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SLOW", "DASH", "WALL_HOP"],
      R: ["MS_UP"],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MAX_HP_UP", "AR_MR_UP", "AD_UP", "SEPARATOR", "ST_DELAYED", "TRANSFORM"],
      Q: ["Q_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      W: ["STUN"],
      E: ["DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
      R: ["KNOCKBACK", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
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
  },

  gimmick: {
    base: {
      P: ["ST_CONDITIONAL", "TRANSFORM"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "DEBUFF_STACK"],
      W: ["PASSIVE_BONUS", "DMG_MAGIC", "PROC"],
      E: ["DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "SLOW", "DASH", "WALL_HOP"],
      R: ["EMPOWERED", "W"],
    },
    alt: {
      P: ["ST_DELAYED", "TRANSFORM"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      W: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "STUN"],
      E: ["DMG_PHYSICAL", "DASH", "AOE"],
      R: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "KNOCKBACK", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "STUN"],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "미니나르에서 분노 관리를 잘 해야 함.", "미니나르 E로 상대 앞라인을 밟으면서 \n 메가나르로 변신하고 \n 뒷라인에 R로 긁어서 벽꿍하면 그냥 한타 끝.",
        ], en: [
          "Managing rage in mini form is key.",
          "Hop over the enemy frontline with mini E, \n transform into Mega Gnar, \n then sweep the backline with R into a wall stun to end the teamfight.",
        ] },
      note1: {

        ko: [
          "미니나르에서 때리거나 맞을 때 분노가 차고 \n 분노가 100일때 참을수 없는 [[BUFF]]가 생김. \n 기다리면 메가나르로 [[TRANSFORM]]. \n 이때 스킬을 사용하면 즉시 [[TRANSFORM]]. \n \n",

          "미니 나르 \n 기본 [[MS_UP]], [[AS_UP]], [[RANGE_UP]]. \n \n Q에 대상이 맞으면 [[DMG_PHYSICAL]]와 [[SLOW]]. \n 약간의 [[PIERCE]] 후에 되돌아옴. \n 나르가 서있는 쪽으로 돌아오고. \n 돌아올 때도 데미지. (처음 Q에 맞지 않았다면) \n 돌아온 걸 받으면 [[CDR]]. \n \n W의 [[PASSIVE_BONUS]]는  [[BA]]와 [[Q]]로 \n 총 3대 때리면 \n 최대체력 비례 [[DMG_MAGIC]]와 [[MS_UP]][[BUFF]]. \n \n E는 [[DASH]]하여 [[AS_UP]]. \n 적을 밟으면 [[DMG_PHYSICAL]], [[SLOW]]. \n 그리고 자동으로 다시 [[DASH]]. \n \n R은 W의 [[PASSIVE_BONUS]] [[MS_UP]]를 [[EMPOWERED]]. \n \n",
          
          "메가 나르 \n 기본 [[MAX_HP_UP]], [[AR_MR_UP]], [[AD_UP]].\n \n Q는 돌을 던져 적중하면 [[AOE]] [[DMG_PHYSICAL]], [[SLOW]]. \n 바닥에 떨어진 돌을 다시 주우면 [[CDR]]. \n \n W는 일직선상 [[AOE]] [[DMG_PHYSICAL]], [[STUN]]. \n \n E는 [[DASH]]하여 [[AOE]] [[DMG_PHYSICAL]]. \n 중앙은 [[SLOW]] 추가. \n \n R은 사용하면 [[AOE]] [[DMG_PHYSICAL]], [[KNOCKBACK]], [[SLOW]]. \n 벽에 부딪히면 추가 [[DMG_PHYSICAL]], [[STUN]]."
        ],

        en: [
          "Rage builds when Mini Gnar attacks or is hit. \n At 100 rage, the Unstoppable [[BUFF]] activates. \n Waiting triggers [[TRANSFORM]] into Mega Gnar. \n Using a skill during the buff transforms immediately. \n \n",

          "Mini Gnar \n Base [[MS_UP]], [[AS_UP]], [[RANGE_UP]]. \n \n Q hits deal [[DMG_PHYSICAL]] and [[SLOW]], \n slightly [[PIERCE]]s then returns. \n Catching the return grants [[CDR]]. \n \n W [[PASSIVE_BONUS]]: hitting 3 times total with [[BA]] or [[Q]] \n deals [[DMG_MAGIC]] scaled by max HP and grants [[MS_UP]] [[BUFF]]. \n \n E [[DASH]]es and grants [[AS_UP]]. \n Hopping on an enemy deals [[DMG_PHYSICAL]], [[SLOW]], \n then automatically [[DASH]]es again. \n \n R [[EMPOWERED]]s W [[PASSIVE_BONUS]] [[MS_UP]]. \n \n",

          "Mega Gnar \n Base [[MAX_HP_UP]], [[AR_MR_UP]], [[AD_UP]]. \n \n Q throws a boulder that deals [[AOE]] [[DMG_PHYSICAL]] and [[SLOW]] on hit. \n Picking up the boulder again grants [[CDR]]. \n \n W deals [[AOE]] [[DMG_PHYSICAL]] and [[STUN]] in a line. \n \n E [[DASH]]es and deals [[AOE]] [[DMG_PHYSICAL]]. \n Center hit applies [[SLOW]]. \n \n R deals [[AOE]] [[DMG_PHYSICAL]], [[KNOCKBACK]], and [[SLOW]]. \n Enemies knocked into a wall take bonus [[DMG_PHYSICAL]] and [[STUN]].",
        ]

      },

      note2: {
        ko: [
        "메가나르는 15초 고정지속. \n 늘리거나 줄일 수 없음.", "분노 90이상일때 ''분노 [[BUFF]]''가 생기는데 \n 무슨 기능인지 모르겠음. 아시는분 제보 부탁드림.", "수정초, 빨콩, 꿀열매를 공격해도 분노오름.", "메가 나르로 변신할 때 E로 변신하면 \n [[DASH]]할 때 메가나르로 [[TRANSFORM]] 하고 \n 적을 밟으면 미니 나르 E의 2단[[DASH]]도 유효.",
        "미니 나르의 E는 미니언도 밟을 수 있음.", 
      ],
        en: [
          "Mega Gnar lasts a fixed 15 seconds. \n Cannot be extended or reduced.",
          "At 90+ rage, an 'Enraged [[BUFF]]' appears — \n its exact effect is unclear. Tips welcome.",
          "Attacking Honeyfruit, Blast Cones, and Scryer's Bloom also builds rage.",
          "Transforming into Mega Gnar via E: \n Gnar [[TRANSFORM]]s mid-[[DASH]], \n and the mini E double-[[DASH]] still applies if an enemy is hopped on.",
          "Mini Gnar's E can hop over minions.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 90,
    11: 60,
    16: 30,
  },
};

export default gnar;
