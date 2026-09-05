import type { ChampData } from "../interactions/types";

const sylas: ChampData = {
  id: "sylas",
  skills: {
    P: [],
    Q: ["SLOW"],
    W: ["W_FLASH", "LIFESTEAL", "DASH", "WALL_HOP"],
    E: ["AIRBORNE", "DASH", "WALL_HOP", "CC_BUFFER"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL", "HIT_EFFECT"],
    W: ["POSITION_REVEAL"],
    E: { phases: [
      { label: { ko: "", en: "" }, tags: [] },
      { label: { ko: "", en: "" }, tags: ["HIT_INDICATOR"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1 강탈", en: "R1 Hijack" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R2", en: "R2" }, tags: [] },
    ] },
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 버프스택", en: "P Buff Stack" }, tags: ["BUFF_INTERACT", "Q", "W", "E", "R"] },
      { label: { ko: "P 온힛", en: "P On-Hit" }, tags: ["DMG_MAGIC", "ON_HIT", "AOE", "STACK_CONSUME"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "BUFF_STACK"] },
      { label: { ko: "Q 폭발", en: "Q Explodes" }, tags: ["DMG_MAGIC", "ZONE"] },
    ] },
    
    W: ["DMG_MAGIC", "TARGETED", "DASH", "BUFF_STACK"],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["BUFF_STACK"] },
      { label: { ko: "E2", en: "E2" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DASH", "BUFF_STACK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1 강탈", en: "R1 Hijack" }, tags: ["TIMING_CAST", "TARGETED", "PROJECTILE", "BUFF_STACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["BUFF_STACK"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "상대 궁극기를 잘 활용해서 \n 자신만의 무궁무진한 각을 만들 수 있음.",
        ], en: [
          "By mastering the opponent's ultimate, \n you can create endless opportunities of your own.",
        ] },
      note1: {

        ko: [
          "P는 스킬을 사용하면 [[BA]]강화 [[BUFF]]스택. 최대 3회 \n [[AS_UP]]와 [[AOE]]피해 \n Q, W, E1, E2, R1, R2에 1스택씩.",

          "Q는 사슬에 [[SLOW]]. 사슬 교차지점에 한 번 더 폭발.",

          "W는 [[DASH]]해서 피해를주고 [[LIFESTEAL]].",

          "E는 E1 [[DASH]], \n E2는 사슬을 날려서 맞으면 다시 [[DASH]].",

          "R은 상대 궁극기를 강탈해서 사용할 수 있음. \n 각 챔피언별로 쿨타임 따로 존재",
        ],

        en: [
          "Using a skill grants [[BA]] empowerment [[BUFF]] stacks. Up to 3 \n [[AS_UP]] and [[AOE]] damage \n Q, W, E1, E2, R1, R2 each give 1 stack.",

          "Q [[SLOW]]s with chains. Chains detonate again at the crossing point.",

          "W [[DASH]]es to deal damage and [[LIFESTEAL]].",

          "E1 is a [[DASH]], \n E2 throws chains that pull Sylas back in on hit.",

          "R steals the opponent's ultimate to use. \n Each champion has its own separate cooldown.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[E_FLASH]] 불가.", 

        "E는 E1, E2로 나뉘는데 \n E2는 투척/돌진단계로 나뉨 \n 투척단계에 [[IMMOBILIZING]]를 맞으면 무시하고 돌진단계를 발동 \n 돌진단계에 맞으면 [[DASH]]이 끊길 수 있음.",

        "R로 궁극기를 훔칠 때 사일러스가 [[IMMOBILIZING]]에 걸리면. \n [[COOLDOWN]]은 소모되고 궁극기를 훔치지 못함.",

        "R은 챔피언별로 아래 박스에 정리"
      ],
        en: ["[[Q_FLASH]] and [[E_FLASH]] not possible", "E splits into E1 and E2. \n E2 has a throw / dash phase. \n Being hit by [[IMMOBILIZING]] during the throw phase is ignored and the dash phase still triggers. \n If hit during the dash phase, the [[DASH]] can be interrupted.", "If Sylas is hit by [[IMMOBILIZING]] while stealing an ultimate with R, \n the [[COOLDOWN]] is consumed and the ultimate cannot be stolen.", "R is detailed per champion in the box below"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 80,
    11: 55,
    16: 30,
  },

};

export default sylas;
