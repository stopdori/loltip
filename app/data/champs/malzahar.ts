import type { ChampData } from "../interactions/types";

const malzahar: ChampData = {
  id: "malzahar",
  skills: {
    P: ["DMG_REDUCE", "CC_IMMUNE"],
    Q: ["Q_FLASH", "SILENCE"],
    W: ["ALLY_TP_OK"],
    E: ["E_FLASH"],
    R: ["R_FLASH", "SUPPRESS"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: ["VISION"],
    E: ["POSITION_REVEAL"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: [],
    Q: ["DMG_MAGIC", "TIMING_CAST", "AOE", "BUFF_STACK"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "STACK_CONSUME", "SUMMON"] },
    ] },
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "BUFF_STACK"] },
      { label: { ko: "E 전이", en: "E Contagion" }, tags: ["ST_CONDITIONAL", "CHAIN"] },
    ] },
 
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "TARGETED", "SINGLE", "ZONE", "BUFF_STACK"],
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
        "P(패시브)는 CC기 무시임\nP있을 때 타워데미지 들어옴\n대신 90% 딜감소 임", "[[R_FLASH]]이 진짜 좋음", "R은 거리가 멀어지면 해제되는데 \n 최대 유지거리는 미드 일자부쉬 정도."
      ],
        en: ["P (passive) is CC immunity.\nTower damage still applies while P is active,\nbut damage is reduced by 90%", "[[R_FLASH]] is extremely powerful"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 110,
    16: 80,
  },

};

export default malzahar;
