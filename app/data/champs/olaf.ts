import type { ChampData } from "../interactions/types";

const olaf: ChampData = {
  id: "olaf",
  skills: {
    P: ["AS_UP", "LIFESTEAL"],
    Q: ["SLOW", "AR_SHRED"],
    W: ["AA_RESET", "AS_UP", "SHIELD"],
    E: ["E_FLASH"],
    R: ["AD_UP", "MS_UP", "CC_CLEANSE", "CC_IMMUNE", "BUFF_FORM"],
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
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE"],
    W: [],
    E: ["DMG_TRUE", "TIMING_CAST", "TARGETED"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM", "CC_CLEANSE", "CC_IMMUNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "P는 체력이 낮을수록 [[AS_UP]], [[LIFESTEAL]]", "Q(도끼)는 던지면 바닥에 떨어지는데 \n 몸으로 주우면 쿨타임이 감소함.", "Q는 최소 투척 거리가 있음. \n 벽에 붙어서 벽으로 던지면 바로 주울수 있음.", "[[Q_FLASH]]은 가능하지만 최대 사거리가 늘어나지 않음.", "[[Q_FLASH]] 가까운 거리에 던지면 최소 투척 거리 때문에 엉뚱하게 날아갈 수 있음.", "Q(도끼)에 텔 안타짐", "W의 [[SHIELD]]는 체력이 낮을수록 증가.", "E는 스킬 소모값이 체력.", "E로 처치하면 체력 소모값을 돌려 줌.\n평타를 치면 1초, 정글몹 치면 2초 [[CDR]].", "R은 사용하면 지속시간이 엄청 짧지만\n평타, E를 맞히면 지속시간 초기화."
      ],
        en: ["[[Q_FLASH]] not possible. Cannot TP onto Q (axe)", "Hitting E extends R's [[MS_UP]] duration"]
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

export default olaf;
