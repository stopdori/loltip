import type { ChampData } from "../interactions/types"; 
const rengar: ChampData = {
  id: "rengar",

  skills: {
    P: { phases: [
      { label: { ko: "P", en: "P" }, tags: ["ST_CONDITIONAL", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"] },
      { label: { ko: "P 뼈 목걸이", en: "P Bonetooth Necklace" }, tags: ["ST_CONDITIONAL", "AD_UP"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["AS_UP", "AA_RESET"] },
      { label: { ko: "강화 Q", en: "Empowered Q" }, tags: ["AS_UP", "AA_RESET"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["ST_CONDITIONAL", "HEAL"] },
      { label: { ko: "강화 W", en: "Empowered W" }, tags: ["ST_CONDITIONAL", "HEAL", "CC_CLEANSE"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["E_FLASH", "REVEALED", "SLOW"] },
      { label: { ko: "강화 E", en: "Empowered E" }, tags: ["E_FLASH", "REVEALED", "ROOT"] },
    ] },

    R: ["R_FLASH", "MS_UP", "CAMOUFLAGE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "TRUE_SIGHT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AR_SHRED"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["REVEALED"],
    R: ["TRUE_SIGHT", "VISION"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P", en: "P" }, tags: ["ST_CONDITIONAL", "DASH", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"] },
      { label: { ko: "P 뼈 목걸이", en: "P Bonetooth Necklace" }, tags: ["ST_CONDITIONAL", "AD_UP"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "P", "BUFF_STACK", "SEPARATOR", "AS_UP", "BUFF_STACK", "X2"] },
      { label: { ko: "강화 Q", en: "Empowered Q" }, tags: ["STACK_CONSUME", "SEPARATOR", "DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "AS_UP"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "P", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
      { label: { ko: "강화 W", en: "Empowered W" }, tags: ["STACK_CONSUME", "SEPARATOR", "DMG_MAGIC", "AOE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "REVEALED", "SLOW", "SEPARATOR", "P", "BUFF_STACK"] },
      { label: { ko: "강화 E", en: "Empowered E" }, tags: ["STACK_CONSUME", "SEPARATOR", "DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "REVEALED", "ROOT"] },
    ] },

    R: ["MS_UP", "CAMOUFLAGE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "TRUE_SIGHT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AR_SHRED"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "렝가 잘 할줄 모름 \n 고수분들 제보 부탁드립니다.",
        ], en: [
          "I don't really know how to play Rengar well \n Experienced players, please send tips.",
        ] },
      note1: {

        ko: [
          "P는 수풀에서 일정 범위 생성. \n 범위 내 [[BA]] 공격 시 대상에게 [[DASH]] 공격. \n \n Q, W, E 스킬 사용 시 야성 1스택 추가. 최대 4스택. \n 4스택이 되면 다음 스킬을 강화하고 야성 [[STACK_CONSUME]]. \n 동시에 잠시 [[MS_UP]]. \n \n P의 [[DASH]]도 야성 1스택. (보라색) \n 보라색 야성은 한개만 쌓을 수 있음. \n 소모하거나 비전투로 사라지면 다시 한번 쌓을 수 있음.",
          "P2 뼈 목걸이는 킬당 [[AD_UP]] \n 킬마다 %로 증가. \n 5킬에 최대로 25% [[AD_UP]] \n \n",

          "Q는 [[AS_UP]] [[BUFF_STACK]] [[X2]]와 \n 다음 [[BA]]를 [[EMPOWERED]]하여 [[DMG_PHYSICAL]].", 
          "[[EMPOWERED]] Q는 [[AS_UP]] [[BUFF]]와 \n 다음 [[BA]]를 [[EMPOWERED]]하여 강한 [[DMG_PHYSICAL]]. \n \n",

          "W는 [[AOE]] [[DMG_MAGIC]]. \n 지난 1.5초 동안 받은 피해의 50%를 [[HEAL]].", 
          "[[EMPOWERED]] W는 동일하지만 \n 강한 [[DMG_MAGIC]]와 [[CC_CLEANSE]] 추가. \n \n",

          "E는 [[PROJECTILE]]를 발사. \n 맞은 대상은 [[DMG_PHYSICAL]], [[REVEALED]], [[SLOW]].", 
          "[[EMPOWERED]] E는 강한 [[DMG_PHYSICAL]]와 [[REVEALED]], [[ROOT]]. \n \n",

          "R의 [[PASSIVE_BONUS]]는 렝가가 [[CAMOUFLAGE]]상태에서 [[DASH]] 가능. \n \n R은 [[MS_UP]]와 2초뒤 [[CAMOUFLAGE]] 상태 돌입. \n 가장 가까운 적에게 [[DEBUFF]]. \n [[DEBUFF]]는 대상과 대상 주변에 [[TRUE_SIGHT]]. \n [[DEBUFF]] 대상 공격 시 [[DMG_PHYSICAL]]와 [[AR_SHRED]]. \n 다른 대상을 공격하면 효과 없음.",
        ],

        en: [
          "P creates a zone in brush. \n [[BA]]ing a target inside the zone triggers a [[DASH]] attack. \n \n Using Q, W, or E adds 1 Ferocity stack. Max 4 stacks. \n At 4 stacks, the next skill becomes empowered and [[STACK_CONSUME]]s Ferocity. \n Also grants brief [[MS_UP]]. \n \n P's [[DASH]] also adds 1 Ferocity stack. (purple) \n Only one purple Ferocity stack can be held at a time. \n It can be gained again once consumed or cleared by leaving combat.",
          "P2 (Bonetooth Necklace) grants [[AD_UP]] per kill \n increasing in % per kill. \n Max 25% [[AD_UP]] at 5 kills \n \n",

          "Q grants [[AS_UP]] as [[BUFF_STACK]] [[X2]] \n and [[EMPOWERED]]s the next [[BA]] to deal [[DMG_PHYSICAL]].",
          "[[EMPOWERED]] Q grants [[AS_UP]] as a [[BUFF]] \n and [[EMPOWERED]]s the next [[BA]] to deal stronger [[DMG_PHYSICAL]]. \n \n",

          "W deals [[AOE]] [[DMG_MAGIC]]. \n [[HEAL]]s for 50% of damage taken over the last 1.5 seconds.",
          "[[EMPOWERED]] W works the same, \n but deals stronger [[DMG_MAGIC]] and adds [[CC_CLEANSE]]. \n \n",

          "E fires a [[PROJECTILE]]. \n Targets hit take [[DMG_PHYSICAL]] and get [[REVEALED]] and [[SLOW]].",
          "[[EMPOWERED]] E deals stronger [[DMG_PHYSICAL]] and applies [[REVEALED]] and [[ROOT]]. \n \n",

          "R's [[PASSIVE_BONUS]] lets Rengar [[DASH]] while [[CAMOUFLAGE]]d. \n \n R grants [[MS_UP]] and enters [[CAMOUFLAGE]] after 2 seconds. \n Applies a [[DEBUFF]] to the nearest enemy. \n The [[DEBUFF]] grants [[TRUE_SIGHT]] on the target and its surroundings. \n Attacking the [[DEBUFF]]ed target deals [[DMG_PHYSICAL]] and applies [[AR_SHRED]]. \n Attacking a different target has no effect.",
        ]

      },

      note2: {
        ko: [
          "수풀 안에서 밖으로 점멸 쓰면서 [[DASH]] 불가. \n 단, P의 사거리보다 약간 먼 거리는 \n 수풀을 벗어나면서 [[DASH]] 가능. \n 즉, 융통성 있음.",
          "P의 [[DASH]] 도중에 점멸이 가능하지만 \n 수풀밖으로 점멸을 사용하고 [[DASH]]은 불가능 하기에 \n 불가로 판정.",
          "P에 [[AD_UP]]은 킬당 1, 4, 9, 16, 25 % \n (5킬 최대)",
          "Q의 [[BA]] [[EMPOWERED]]는 구조물에 60%만 적용.",
          "W는 1.5초동안 몬스터에게 받은 피해의 100% [[HEAL]].",
          "E는 [[DASH]]중에 사용하면 [[TIMING_CAST]]이 없음.",
          "R의 [[CAMOUFLAGE]] 중 점멸 사용해도 [[CAMOUFLAGE]] 유지.",
        ],
        en: [
          "Cannot [[DASH]] by flashing from inside a bush to outside. \n However, at distances slightly beyond P's range, \n [[DASH]]ing while leaving the bush is possible. \n So there's some flexibility.",
          "Flash is possible during P's [[DASH]], \n but since flashing outside the bush and then [[DASH]]ing isn't possible, \n it's ruled as not possible.",
          "P's [[AD_UP]] is 1, 4, 9, 16, 25% per kill \n (max at 5 kills)",
          "Q's [[BA]] [[EMPOWERED]] effect only applies at 60% against structures.",
          "W [[HEAL]]s for 100% of damage taken from monsters over 1.5 seconds.",
          "E has no [[TIMING_CAST]] when used during a [[DASH]].",
          "Using Flash during R's [[CAMOUFLAGE]] does not break [[CAMOUFLAGE]].",
        ],
       },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default rengar;