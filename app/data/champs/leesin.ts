import type { ChampData } from "../interactions/types";

const leesin: ChampData = {
  id: "leesin",
  skills: {
    P: ["AS_UP"],
    Q: ["WALL_HOP", "TRUE_SIGHT"],
    W: ["W_FLASH", "SHIELD", "LIFESTEAL", "WALL_HOP"],
    E: ["E_FLASH", "REVEALED"],
    R: ["R_FLASH", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "Q2", en: "Q2" }, tags: [] },
    ] },
    W: [],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["REVEALED"] },
      { label: { ko: "E2", en: "E2" }, tags: [] },
    ] },
    R: [],
  },

  gimmick: {
    P: ["BUFF_STACK"],
    Q: { phases: [
      { label: { ko: "", en: "" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "MARK", "SKILL_RECAST"] },
      { label: { ko: "", en: "" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "SINGLE", "DASH"] },
    ] },
    W: { phases: [
      { label: { ko: "", en: "" }, tags: ["TARGETED", "DASH", "SKILL_RECAST"] },
      { label: { ko: "", en: "" }, tags: ["ST_CONDITIONAL", "BUFF_STACK"] },
    ] },
    E: { phases: [
      { label: { ko: "", en: "" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SKILL_RECAST"] },
      { label: { ko: "", en: "" }, tags: ["ST_CONDITIONAL", "SWARM"] },
    ] },
    R: { phases: [
      { label: { ko: "", en: "" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SINGLE"] },
      { label: { ko: "", en: "" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"] },
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
        "[[Q_FLASH]] 안됨", "Q의 [[TRUE_SIGHT]]는 Q2를 사용하면 사라짐.", "E2의 효과는 E에 맞은 대상에게만 적용.", "R에 당구로 맞으면\n날아간 대상의 최대체력의 %데미지가\n부딪힌 대상에게 추가"
      ],
        en: ["[[Q_FLASH]] not possible", "Enemies hit by the billiard bounce take bonus damage based on a % of the launched target's max HP"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 85,
    16: 60,
  },

};

export default leesin;
