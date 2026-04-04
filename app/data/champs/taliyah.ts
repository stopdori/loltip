import type { ChampData } from "../interactions/types";

const taliyah: ChampData = {
  id: "taliyah",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AIRBORNE"],
    E: ["E_FLASH", "SLOW", "STUN"],
    R: ["AIRBORNE", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "Q 다진땅", en: "Q Worked Ground" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
    ] },

    W: ["SKILL_VECTOR", "TIMING_CAST", "NON_PROJECTILE", "ST_DELAYED", "ZONE"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "ZONE"] },
      { label: { ko: "E 폭발", en: "E Explodes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE"] },
    ] },

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["SKILL_CHANNEL", "PROJECTILE", "TERRAIN", "SKILL_RECAST"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DASH", "SKILL_RECAST"] },
      { label: { ko: "R3 벽해제", en: "R3 벽해제" }, tags: ["SKILL_RECAST"] },
    ] },
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "Q의 [[SLOW]]는 다진땅 Q만 발동.", 
        "R은 비전투에서만 사용 가능.\nR2는 전투에도 사용 가능. \n 즉, 데미지가 들어오기 전에 R1을 시전하면 R2로 이동할 수 있음.",
        "R 서핑 타는법은 R1을 누르고 1초 내에 R2를 눌러야 작동.",
        "R로 전령 박치기 막을 수 있음", "R(벽)에 텔 안타짐"
      ],
        en: ["Q [[SLOW]] only applies from Q cast on Worked Ground", "R is only usable out of combat.\nCannot TP onto R wall.\nR can block Void Herald charge.\nTaking damage while riding R dismounts Taliyah"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taliyah;
