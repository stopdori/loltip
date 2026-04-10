import type { ChampData } from "../interactions/types";

const quinn: ChampData = {
  id: "quinn",
  skills: {
    P: ["REVEALED"],
    Q: ["REVEALED", "NEAR_SIGHT"],
    W: ["REVEALED", "AS_UP"],
    E: ["REVEALED", "E_FLASH", "KNOCKBACK", "SLOW", "WALL_HOP",],
    R: ["REVEALED"],
  },

  vision: {
    P: ["REVEALED"],
    Q: ["REVEALED"],
    W: ["VISION"],
    E: ["POSITION_REVEAL"],
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: [] },
      { label: { ko: "R2", en: "R2" }, tags: ["POSITION_REVEAL"] },
    ] },
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_PHYSICAL", "REVEALED", "MARK"],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE", "MARK"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_INTERACT", "P", "Q", "W", "E", "R"] },
      { label: { ko: "W", en: "W" }, tags: ["VISION", "AOE"] },
    ] },
    E: ["DMG_PHYSICAL", "TARGETED", "DASH", "MARK"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "TIMING_CAST", "LOCKED", "SKILL_RECAST"] },
      { label: { ko: "R 화살비", en: "R Raining Arrows" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE", "MARK"] },
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
        "퀸은 거의 모든스킬이 P를 발동시키기 때문에 사실상 모든스킬이 [[REVEALED]]을 가지고 있음", "Q의 [[NEAR_SIGHT]]는 정화로 풀리지 않음\n단, 정화를 제외한 [[CC_CLEANSE]]로 해제 가능", "W는 부쉬 안에도 보여줌", "R은 활성화 됐을때 [[HARD_CC]], [[SILENCE]]에 걸리면 내려짐"
      ],
        en: ["Almost all of Quinn's skills proc P, so effectively all skills have [[REVEALED]]", "Q's [[NEAR_SIGHT]] cannot be removed by Cleanse.\nOther [[CC_CLEANSE]] methods (not Cleanse) can remove it", "W reveals targets inside brushes", "When R is active, [[HARD_CC]] or [[SILENCE]] will deactivate it"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default quinn;
