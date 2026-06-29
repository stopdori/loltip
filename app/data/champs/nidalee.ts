import type { ChampData } from "../interactions/types";

const nidalee: ChampData = {
  id: "nidalee",

  skills: {
    base: {
      // 인간폼
      P: ["ST_CONDITIONAL", "MS_UP"],
      Q: ["MARK"],                
      W: ["W_FLASH", "MARK", "SEPARATOR", "ALLY_TP_OK"],
      E: ["E_FLASH", "HEAL", "AS_UP"],
      R: ["TRANSFORM", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"],
    },

    alt: {
      // 쿠거폼
      P: ["ST_CONDITIONAL", "MS_UP"],
      Q: [],      
      W: ["DASH", "WALL_HOP"],
      E: [],
      R: ["TRANSFORM"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["REVEALED"],
      W: ["REVEALED", "VISION"],
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
      P: { phases: [
      { label: { ko: "수풀 배회", en: "Prowl" }, tags: ["ST_CONDITIONAL", "MS_UP"] },
      { label: { ko: "사냥", en: "Hunt" }, tags: ["MARK_INTERACT", "Q", "W", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"] },
    ] },

      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "MARK"],

      W: ["DMG_MAGIC", "TIMING_CAST", "TRAP", "DOT", "MARK"],

      E: ["TIMING_CAST", "TARGETED", "HEAL", "SEPARATOR", "AS_UP"],

      R: ["TRANSFORM", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"],
    },

    alt: {
      P: ["ST_CONDITIONAL", "MS_UP"],
      Q: ["DMG_MAGIC", "ON_HIT"],
      W: ["DMG_MAGIC", "AOE", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "RANGE_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
      E: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
      R: ["TRANSFORM"],
    },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "난전이 정말 강함. \n 3데스 하면 진다는 느낌으로 스노우볼을 잘 굴려야 함.",
          "한타 대치는 인간폼이 좋음. \n Q, W로 시야 뚫어주면서 포킹하면서 E로 [[HEAL]]. \n 확실한 킬각에 쿠거폼 교전."
        ], en: [
          "Skirmishes are her strongest suit. \n Play like one death too many loses the game — snowball hard.",
          "Human form is better for teamfight standoffs. \n Poke with Q and W for vision while sustaining with E [[HEAL]]. \n Switch to cougar form only when a clear kill is available.",
        ] },
      note1: {

        ko: [
          "니달리는 1레벨부터 R로 [[TRANSFORM]] 가능.", 
          
          "P는 수풀에 들어가면 [[MS_UP]]. \n 밖으로 나왔을 때도 잠깐 유지. \n 적에게 다가갈 때 [[MS_UP]] 효과 증가. \n \n 인간폼 Q, W를 맞히면 [[MARK]](사냥). \n [[MARK]]은 [[TRUE_SIGHT]], [[MS_UP]]. \n P의 [[MS_UP]] 효과와 똑같고 중첩이 안됨. \n 하지만, 수풀 밖에서도 적용되는 차이가 있음.",
          
          "인간폼 \n \n Q는 [[PROJECTILE]]를 발사. \n 최소 피해량이 있고, 이동거리 비례 [[DMG_MAGIC]]. \n 최대 사거리는 미드 일자부쉬 정도. \n \n W는 [[TRAP]] 설치. \n 덫을 밟으면 지속 [[DMG_MAGIC]]. \n 최대 설치 개수는 레벨 비례 증가. \n \n E는 잃은 체력 비례 [[HEAL]], 7초동안 [[AS_UP]]. \n \n",

          "쿠거폼 \n \n Q는 다음 [[BA]]에 [[ON_HIT]] 잃은 체력 비례 [[DMG_MAGIC]]. \n [[MARK]] 대상에게 30% 추가 피해. \n \n W는 [[DASH]]하고 착지하여 [[AOE]] [[DMG_MAGIC]]. \n [[MARK]] 대상에겐 [[DASH]] 거리 증가와 [[CDR]]. \n 쿠거폼으로 적 처치 시 [[CDR]]. \n 단, [[MARK]] 대상을 W로 처치 시 [[CDR]] 중복 X. \n \n E는 전방 반원 [[AOE]] [[DMG_MAGIC]]. \n \n",

          "R의 [[PASSIVE_BONUS]]는 \n 인간폼 일 때 [[MARK]] 발동하면 R [[CDR_RESET]]. \n 바로 쿠거폼 변환 가능.",
        ],

        en: [
          "Nidalee can [[TRANSFORM]] via R starting at level 1.",

          "P grants [[MS_UP]] when entering a brush. \n Briefly persists after leaving. \n [[MS_UP]] increases when moving toward enemies. \n \n Hitting enemies with human form Q or W applies [[MARK]] (Hunt). \n [[MARK]] grants [[TRUE_SIGHT]] and [[MS_UP]]. \n Same effect as P's [[MS_UP]] and does not stack with it. \n However, it applies even outside of brush.",

          "Human Form \n \n Q fires a [[PROJECTILE]]. \n Has a minimum damage and scales [[DMG_MAGIC]] with travel distance. \n Max range is roughly the mid-lane straight brush. \n \n W places a [[TRAP]]. \n Enemies who step on it take sustained [[DMG_MAGIC]]. \n Max trap count increases with level. \n \n E [[HEAL]]s based on missing HP and grants [[AS_UP]] for 7 seconds. \n \n",

          "Cougar Form \n \n Q empowers the next [[BA]] with [[ON_HIT]] [[DMG_MAGIC]] scaling with missing HP. \n Deals 30% bonus damage to [[MARK]]ed targets. \n \n W [[DASH]]es and lands for [[AOE]] [[DMG_MAGIC]]. \n Against [[MARK]]ed targets, increases [[DASH]] range and grants [[CDR]]. \n Killing an enemy in cougar form grants [[CDR]]. \n However, killing a [[MARK]]ed target with W does not stack the [[CDR]]. \n \n E deals [[AOE]] [[DMG_MAGIC]] in a frontal semicircle. \n \n",

          "R's [[PASSIVE_BONUS]]: \n Triggering [[MARK]] while in human form resets R's cooldown ([[CDR_RESET]]). \n Allows immediate transformation to cougar form.",
        ]

      },

      note2: {
        ko: [
        "쿠거폼 점멸+스킬들 다 안됨.",
        "[[MARK]] 발동 최대 거리는 탑, 바텀 2~3차 타워 사이 거리 정도. \n [[MARK]] 효과 발동 실패하고 거리가 좁혀 저도 [[MARK]]이 생기지 않음."
      ],
        en: [
          "Flash + skills in cougar form are all not possible.",
          "The max range for [[MARK]] to trigger is roughly between the 2nd and 3rd towers in top/bot lane. \n If [[MARK]] fails to trigger and you close the distance, [[MARK]] still does not apply.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default nidalee;
