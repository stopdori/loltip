import type { ChampData } from "../interactions/types";

const xinzhao: ChampData = {
  id: "xinzhao",
  skills: {
    P: ["HEAL"],
    Q: ["AA_RESET", "AIRBORNE"],
    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "AS_UP", "SLOW", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "INVULNERABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_INTERACT", "BA", "Q", "W"],

    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "ON_HIT", "BUFF_STACK", "MARK"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_PHYSICAL", "ON_HIT", "AIRBORNE", "BUFF_STACK", "MARK"] },
    ] },

    W: { phases: [
      { label: { ko: "W 가르기", en: "W Slashes" }, tags: ["DMG_PHYSICAL", "AOE", "CC_BUFFER", "BUFF_STACK"] },
      { label: { ko: "W 찌르기", en: "Thrusts" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "AOE", "BUFF_STACK", "MARK"] },
    ] },
    
    E: ["DMG_MAGIC", "TARGETED", "DASH"],

    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "MARK_INTERACT", "BA", "Q", "W"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "ST_CONDITIONAL", "KNOCKBACK"] },
      { label: { ko: "R 무적", en: "R INVULNERABLE" }, tags: ["ST_CONDITIONAL", "INVULNERABLE"] },
    ] },
    
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "Q에 [[AIRBORNE]]은 Q3타에 발동", "W의 찌르기를 맞혀야 도전 표식이 생기고, 대상에게 E사거리가 늘어남", "R은 범위 밖 공격에 [[INVULNERABLE]]\n단)타워, 중립, 에픽몬스터 공격은 [[INVULNERABLE]] 불가"
      ],
        en: ["Q [[AIRBORNE]] triggers on the 3rd hit", "Hitting W extends E range", "R is [[INVULNERABLE]] to attacks from outside the zone.\nHowever, towers, neutral monsters, and epic monsters bypass [[INVULNERABLE]]"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default xinzhao;
