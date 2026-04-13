import type { ChampData } from "../interactions/types";

const leblanc: ChampData = {
  id: "leblanc",
  skills: {
    P: ["INVISIBILITY"],
    Q: ["Q_FLASH"],
    W: ["WALL_HOP"],
    E: ["E_FLASH", "REVEALED", "ROOT"],
    R: [],
  },

  vision: {
    P: [],
    Q: [ "POSITION_REVEAL"],
    W: [],
    E: [ "POSITION_REVEAL", "REVEALED"],
    R: [],
  },

  gimmick: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "MARK"] },
      { label: { ko: "인장", en: "Mark" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE", "ZONE", "DASH", "PROC", "SKILL_RECAST"] },
      { label: { ko: "W 재사용", en: "W Recast" }, tags: ["ST_CONDITIONAL", "BLINK"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PROC"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROC"] },
    ] },
    R: [],
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
        "[[W_FLASH]] 안됨", "분신 컨트롤은 alt 우클릭으로 가능", "Q는 미니언 막타시 마나를 돌려주고 쿨타임 30%로 감소.", "R은 마지막으로 사용한 스킬을 모방해서 사용 가능.\n 예시) Q, W, E 순서로 사용했다면 E를 모방."
      ],
        en: ["[[W_FLASH]] not possible", "Clone can be controlled with alt + right-click"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 45,
    11: 35,
    16: 25,
  },

};

export default leblanc;
