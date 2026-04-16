import type { ChampData } from "../interactions/types";

const lissandra: ChampData = {
  id: "lissandra",
  skills: {
    P: ["SLOW"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["ROOT"],
    E: ["WALL_HOP"],
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["R_FLASH", "STUN", "SLOW"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: ["SLOW", "HEAL", "UNTARGETABLE", "TOWER_DODGE"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: [] },
    ] },
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "HOMING"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"] },
      { label: { ko: "Q 원뿔", en: "Q Cone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "PIERCE"] },
    ] },
    W: ["DMG_MAGIC", "AOE"],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "ZONE", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["BLINK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 상대", en: "R Enemy" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "ZONE"] },
      { label: { ko: "R 자신", en: "R Self Cast" }, tags: ["DMG_MAGIC", "TARGETED", "ZONE"] },
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
        "[[W_FLASH]] 안됨", "P는 리산드라 주변에서 적 챔피언이 죽으면 발동.\n처치관여 하지 않아도 생성.\n 범위는 미드 일자부쉬 정도.", "P와 R은 지속[[SLOW]].", "Q는 적중해야 뒤쪽에 원뿔형으로 관통 피해.", "E는 얼음갈퀴가 있는 곳으로 [[BLINK]].", "R은 적에게 사용할때 [[TIMING_CAST]]이 있음.\n자신에게 쓸 때는 즉시시전.",
      ],
        en: ["[[W_FLASH]] not possible", "P activates when an enemy champion dies near Lissandra — even without kill participation.\nThe range is approximately the width of the mid lane side brush.", "P and R apply persistent [[SLOW]].", "Q must hit a target to deal cone-shaped pierce damage behind it.", "E [[BLINK]]s to the location of the Claw.", "R has [[TIMING_CAST]] when cast on an enemy.\nWhen cast on herself, it is instant."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default lissandra;
