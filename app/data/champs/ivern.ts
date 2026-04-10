import type { ChampData } from "../interactions/types";

const ivern: ChampData = {
  id: "ivern",
  skills: {
    P: [],
    Q: ["ROOT", "SEPARATOR", "ST_CONDITIONAL", "DASH", "WALL_HOP"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "SHIELD", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],
    R: ["AIRBORNE", "ALLY_TP_OK"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "MARK", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["DASH", "WALL_HOP"] },
      { label: { ko: "평타", en: "AA" }, tags: ["ST_CONDITIONAL", "DASH", "WALL_HOP"] },
    ] },

    W: { phases: [
      { label: { ko: "패시브", en: "Bush" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL", "BUFF", "ON_HIT"] },
      { label: { ko: "수풀", en: "Bush" }, tags: ["TIMING_CAST", "ZONE", "RECHARGE"] },
      { label: { ko: "온힛 버프", en: "On-Hit Buff" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"] },
    ] },


    E: { phases: [
      { label: { ko: "보호막", en: "Shield" }, tags: ["TARGETED"] },
      { label: { ko: "폭발", en: "Burst" }, tags: ["ST_DELAYED", "DMG_MAGIC", "AOE", "SLOW"] },
    ] },

    R:    { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "SUMMON", "SKILL_RECAST"] },
      { label: { ko: "데이지", en: "Daisy" }, tags: ["DMG_MAGIC", "DEBUFF_STACK"] },
      { label: { ko: "데이지 3타", en: "Daisy BA3" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "PROC", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "부쉬를 아군에게 깔아줘서 \n W [[BUFF]]를 아군에게 최대한 걸어주고 \n Q, E로 서포팅 하면서 \n 데이지를 상대 딜러 라인에 붙여서 괴롭게 하기. ",
        ], en: [
          "Place bushes for allies to maximize W [[BUFF]] uptime, \n support with Q and E, \n and stick Daisy on the enemy damage dealers to harass them.",
        ] },
      note1: {

        ko: [
          "아이번은 정글몹과 동맹. \n 정글몹에 우클릭으로 [[ZONE]]을 생성. \n 이때 체력과 마나를 소모. \n 주변에 띠가 생기고 띠가 다 차면 다시 우클릭으로 수확. \n 강타를 쓰면 즉시 수확.",

          "Q는 [[SINGLE]] [[PROJECTILE]]를 발사해서 [[ROOT]]. \n Q2를 사용하면 아이번이 대상과 겹쳐질정도로 [[DASH]]. \n 우클릭을 하면 [[BA]] 사거리까지 [[DASH]]. \n 아군도 우클릭 가능.",

          "W의 [[PASSIVE_BONUS]]는 부쉬에 들어갔을 때 [[BUFF]]가 생김. \n 부쉬 안에 아군이 있고 아이번이 근처에 있다면 \n 아군에게도 [[BUFF]]. ",

          "W는 8초 부쉬를 만들고 \n 동그란 원형 [[ZONE]]만큼 [[VISION]]가 있음. \n 부쉬안에 시야가 있다면 45초까지 시간 연장.",

          "E는 [[SHIELD]]. \n 2초뒤 폭발하여 [[AOE]] 피해와 [[SLOW]]. \n 아무도 맞지 않으면 [[SHIELD]] 1번 더 적용. \n 아무도의 기준은 적 챔피언, 에픽몬스터.",

          "R은 데이지를 [[SUMMON]]. \n 데이지는 R로 조종가능. \n 데이지가 같은 대상을 3번 때리면 [[AOE]] [[AIRBORNE]]. \n 3타는 데이지 내부 쿨타임이 있음. \n 데이지의 공격에 W의 [[PASSIVE_BONUS]] [[BUFF]] 적용 가능.",
        ],

        en: [
          "Ivern is allied with jungle monsters. \n Right-click on a jungle monster to create a [[ZONE]]. \n This costs health and mana. \n A ring appears around it; when full, right-click again to harvest. \n Using Smite instantly harvests.",

          "Q fires a [[SINGLE]] [[PROJECTILE]] to [[ROOT]]. \n Using Q2 causes Ivern to [[DASH]] to nearly overlap the target. \n Right-clicking causes Ivern to [[DASH]] to [[BA]] range of the target. \n Allies can also right-click.",

          "W's [[PASSIVE_BONUS]] grants a [[BUFF]] when entering a bush. \n If an ally is inside a bush and Ivern is nearby, \n the ally also receives the [[BUFF]].",

          "W creates a bush for 8 seconds \n with [[VISION]] within a circular [[ZONE]]. \n If there is vision inside the bush, the duration extends up to 45 seconds.",

          "E grants a [[SHIELD]]. \n After 2 seconds, it explodes dealing [[AOE]] damage and [[SLOW]]ing. \n If no enemy is hit, the [[SHIELD]] is applied again. \n 'No enemy' counts enemy champions and epic monsters.",

          "R [[SUMMON]]s Daisy. \n Daisy can be controlled with R. \n If Daisy hits the same target 3 times, she deals [[AOE]] [[AIRBORNE]]. \n The 3rd hit has an internal cooldown. \n Daisy's attacks can apply W's [[PASSIVE_BONUS]] [[BUFF]].",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", 
        "Q는 정글몹에도 사용 가능. \n 에픽이 아닌 정글몹은 Q [[CDR]] 50%. \n Q1, Q2로 빠르게 이동해서 다님.", 
        "W의 [[PASSIVE_BONUS]] 적용 범위는 W 사거리만큼.", 
        "W를 일반 부쉬와 이어서 설치하면 \n 이어진 일반부쉬 안에도 시야가 보임. \n 단, W 자체의 시야로는 전체 다 보이지 않음.", 
        "E의 [[AOE]] 피해는 정글몹에게 피해를 줌.", 
        "데이지의 3타는 정글몹도 맞지만 피해는 들어가지 않음."
      ],
        en: [
          "[[Q_FLASH]] not possible",
          "Q can also be used on jungle monsters. \n Non-epic jungle monsters reduce Q [[CDR]] by 50%. \n Use Q1 and Q2 to move around quickly.",
          "The range for W's [[PASSIVE_BONUS]] is equal to W's cast range.",
          "If W is placed adjacent to a regular bush, \n vision also appears inside the connected bush. \n However, W's own vision does not cover the entire connected area.",
          "E's [[AOE]] damage affects jungle monsters.",
          "Daisy's 3rd hit can hit jungle monsters, but deals no damage to them.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 130,
    16: 120,
  },

};

export default ivern;
