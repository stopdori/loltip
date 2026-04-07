import type { ChampData } from "../interactions/types";

const diana: ChampData = {
  id: "diana",
  skills: {
    P: ["AS_UP", "SEPARATOR", "ST_CONDITIONAL", "AS_UP"],
    Q: ["Q_FLASH", "VISION"],
    W: ["W_FLASH", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],
    E: ["E_FLASH", "DASH", "WALL_HOP"],
    R: ["R_FLASH", "GRAB", "SLOW"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "PROC", "BA"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "MARK", "BUFF"],
    W: ["DMG_MAGIC", "PROJECTILE", "SINGLE", "BUFF"],
    E: ["DMG_MAGIC", "TARGETED", "DASH", "BUFF", "SEPARATOR", "MARK_CONSUME", "SKILL_RECAST"],
    R: { phases: [
      { label: { ko: "달", en: "Moon" }, tags: ["TIMING_CAST", "AOE", "GRAB", "SLOW"] },
      { label: { ko: "달 낙하", en: "Fall" }, tags: ["ST_CONDITIONAL", "ST_DELAYED", "DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "소규모 교전도 좋고 한타도 준수. \n [[BA]]가 상당히 빠르고 강하니 쉬지 않기.",
          "상대 딜러 라인에 기습 R로 이니시 하면 좋음.",
          "Q로 포킹하다 [[MARK]] 대상에게 멀리서 \n [[E_FLASH]] + R로 이니시하고 R이 폭발할 때 \n 상대 딜러 라인으로 다시 E로 [[DASH]]해서 광역피해.",
          "Q로 포킹하다 [[MARK]] 대상에게 E로 [[DASH]]해서 E를 초기화하고 \n [[E_FLASH]] + R을 상대 딜러 라인에 박기.",

        ], en: [
          "Strong in both skirmishes and team fights. \n [[BA]] is fast and powerful — keep auto-attacking.",
          "Initiating with a surprise R onto the enemy carry line is very effective.",
          "Poke with Q, then use [[E_FLASH]] + R to initiate on a [[MARK]]ed target from range. \n When R detonates, [[DASH]] with E into the enemy carry line for AoE damage.",
          "Poke with Q, [[DASH]] with E onto the [[MARK]]ed target to reset E, \n then use [[E_FLASH]] + R into the enemy carry line.",
        ] },
      note1: {

        ko: [
          "P는 기본적으로 [[AS_UP]]. \n 스킬을 사용하면 추가 [[AS_UP]][[BUFF]]. \n [[BA]]를 때리면 [[BUFF_STACK]]이 쌓이고 \n 3스택에 광역 [[BA]].",
          "Q는 적중하면 [[MARK]].",
          "W는 [[SHIELD]]와 몸 주변 구체 3개 생성. \n 몸을 비벼서 구체가 다 소모되면 추가 [[SHIELD]].",
          "E는 [[DASH]]. \n Q의 [[MARK]]이 남아있는 대상에게 사용하면 \n E의 쿨타임 초기화. \n EQ로 E 초기화 안됨.",
          "R은 광역 [[GRAB]], [[SLOW]]. \n 한명이라도 적중하면 잠시 뒤 광역 [[DMG_MAGIC]]. \n 적중한 챔피언 하나당 추가 [[DMG_MAGIC]]. \n 다이애나를 따라 범위도 따라옴.",
        ],

        en: [
          "P grants base [[AS_UP]]. \n Using skills adds extra [[AS_UP]] [[BUFF]]. \n [[BA]]s build [[BUFF_STACK]] stacks; \n at 3 stacks, the next attack becomes an AoE [[BA]].",
          "Q applies [[MARK]] on hit.",
          "W creates a [[SHIELD]] and 3 orbs around Diana. \n Depleting all orbs by brushing enemies grants a bonus [[SHIELD]].",
          "E is a [[DASH]]. \n Using it on a target with Q's [[MARK]] resets E's cooldown. \n E+Q does not reset E.",
          "R applies AoE [[GRAB]] and [[SLOW]]. \n Hitting at least one enemy triggers delayed AoE [[DMG_MAGIC]]. \n Deals bonus [[DMG_MAGIC]] per champion hit. \n The blast area follows Diana.",
        ]

      },

      note2: {
        ko: [
        "TMI는 제보 부탁.",
      ],
        en: ["Tips and corrections are welcome."]
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

export default diana;
