import type { ChampData } from "../interactions/types";

const aurora: ChampData = {
  id: "aurora",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "INVISIBILITY", "WALL_HOP"],
    E: ["E_FLASH", "SLOW", "WALL_HOP", "CC_BUFFER"],
    R: ["SLOW", "WALL_HOP", "UNSTOPPABLE", "SEPARATOR", "ST_CONDITIONAL", "UNTARGETABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "PROC"],
    Q: { phases: [
      { label: { ko: "가는 Q", en: "Initial Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "DEBUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "오는 Q", en: "Return Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "DEBUFF_STACK"] },
    ] },
    
    W: ["DASH"],
    E: { phases: [
      { label: { ko: "준비단계", en: "Wind-up" }, tags: ["TIMING_CAST", "LOCKED", "CC_BUFFER", "SLOW"] },
      { label: { ko: "후진단계", en: "Retreat" }, tags: ["DMG_MAGIC", "AOE", "BUFF_STACK", "DASH"] },
    ] },
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DASH", "DEBUFF_STACK", "UNSTOPPABLE", "SLOW"], },
      { label: { ko: "경계넘어", en: "Zone Dash" }, tags: ["UNTARGETABLE", "DASH"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "R로 광역피해와 [[SLOW]]를 걸고 Q, E로 폭딜.",
          "W의 [[INVISIBILITY]]으로 다가가서 딜러진 Q, E로 암살",
        ], en: [
          "Use R for AoE damage and [[SLOW]], then burst with Q and E.",
          "Approach with W's [[INVISIBILITY]], then assassinate the carry with Q and E.",
        ] },
      note1: {

        ko: [
          "P의 [[DEBUFF]]가 3스택이 되면 추가 [[DMG_MAGIC]]와 [[HEAL]]. \n [[BA]], [[Q]], [[E]], [[R]]에 쌓임.",
          "오는 Q는 적중한 숫자만큼 돌아오는 개수 증가. \n 여러대 맞혀서 감소된 중첩피해와 \n [[DEBUFF]]를 여러번 터뜨리는게 핵심.",
          "W는 [[DASH]]하고 [[INVISIBILITY]], [[WALL_HOP]] 가능. \n 킬 관여 시 쿨타임 초기화.", 
          "E는 범위 데미지에 [[SLOW]]. 뒤로 [[DASH]] \n [[CC_BUFFER]]로 일부 CC 무시가능.", 
          "R은 광역피해 [[SLOW]] \n 경계를 넘어 [[DASH]]이나 이동을 하면 반대편에서 나옴. \n [[SKILL_RECAST]] 해서 끌 수 있음.",
        ],

        en: [
          "P's [[DEBUFF]] stacks 3 times; at 3 stacks, deals bonus [[DMG_MAGIC]] and [[HEAL]]s.\nStacks via [[BA]], [[Q]], [[E]], and [[R]].",
          "Return Q fires one projectile per enemy hit on the way out.\nThe key is landing multiple hits to trigger [[DEBUFF]] multiple times despite reduced stacking damage.",
          "W lets Aurora [[DASH]], go [[INVISIBILITY|invisible]], and [[WALL_HOP]].\nCooldown resets on kill participation.",
          "E deals AoE damage with [[SLOW]] and [[DASH]]es backward.\n[[CC_BUFFER]] allows her to ignore some CC.",
          "R deals AoE damage and [[SLOW]]s.\nCrossing the boundary exits from the opposite side.\nCan be ended early with [[SKILL_RECAST]].",
        ]

      },

      note2: {
        ko: [
       "Q1은 적에게 적중하면 표식을 남기고, 지속시간이 끝나거나 Q2를 누르면 표식이 되돌아 오면서 경로의 적을 타격함. \n Q를 미니언과 상대 챔피언에게 같이 사용하고, 미니언에남은 표식이 돌아올 때 상대 챔피언을 맞혀야함. \n W로 각을 틀어서 맞추면 좋음." ,"W는 얇은 벽, E는 더 얇은 벽을 넘을 수 있음." ,"E 스킬은 2단계로 나뉨 준비/후진.\n준비단계에서 오로라가 맞은 CC는 유효 하지만\n후진단계가 발동되어 뒤로 이동하는 것.\n후진단계에는 CC 저항력 없음.", "R은 원래 설명에 [[UNSTOPPABLE]]가 없지만, \n 스킬을 시전할때 오로라 체력바 위에 [[UNSTOPPABLE]]가 생김. \n 처음 도약하며 경계를 펼칠 때만.", "R은 오로라가 경계를 넘으면\n180도 반대반향으로 이동.\n이때 [[UNTARGETABLE]]"
      ],
        en: [
          "Q1 hits an enemy to leave a mark. When the duration ends or Q2 is pressed, the mark returns and hits enemies along its path.\nThis can stack P on targets in the path.\nUse Q to hit both a minion and an enemy champion, then let the mark return through the champion.\nAngling with W can help land the return Q.",
          "W can hop thin walls; E can hop even thinner walls.",
          "E has two phases: Wind-up and Retreat.\nCC during the wind-up phase applies to Aurora, but the retreat phase still triggers and moves her backward.\nThere is no CC resistance during the retreat phase.",
          "R's description doesn't mention [[UNSTOPPABLE]], but the [[UNSTOPPABLE]] icon appears above Aurora's health bar when the skill is cast.\nThis applies only during the initial leap when expanding the boundary.",
          "When Aurora crosses the boundary with R, she reappears from the opposite direction (180°).\nShe is [[UNTARGETABLE]] during this transition.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default aurora;
