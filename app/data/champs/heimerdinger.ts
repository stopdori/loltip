import type { ChampData } from "../interactions/types";

const heimerdinger: ChampData = {
  id: "heimerdinger",
  skills: {
    base: {
    P: ["MS_UP"],
    Q: ["ALLY_TP_OK"],
    W: [],
    E: ["SLOW", "STUN"],
    R: ["BUFF_FORM"],
  },

  alt: {
      
      P: ["MS_UP"],
      Q: ["SLOW", "ALLY_TP_OK"],
      W: [],
      E: ["SLOW", "STUN"],
      R: [],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: [],
      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SUMMON", "RECHARGE"] },
      { label: { ko: "포탑 빔", en: "Turret beam" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
    ] },
      W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"],
      E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"],
      R: ["BUFF_STACK"],
    },
    alt: {
      P: [],
      Q: { phases: [
      { label: { ko: "RQ", en: "RQ" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SUMMON", "RECHARGE"] },
      { label: { ko: "강화 빔", en: "RQ Turret beam" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
    ] },
      W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SINGLE"],
      E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"],
      R: [],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[W_FLASH]], [[E_FLASH]] 안됨", "딩거 몸 주변에 너트가 회전하는데, 회전하는 개수당 Q 사용가능 개수", "P의 [[MS_UP]]는 Q, 아군타워 근처에서만 발동", "Q 포탑의 빔은 W, E스킬을 맞히면 주변 포탑이 충전되고, 가득차면 빔을 발사.", "E는 중심에 맞혀야 [[STUN]]"
      ],
        en: ["P's [[MS_UP]] only activates near Q (turrets) or allied towers", "[[W_FLASH]] and [[E_FLASH]] not possible", "E must hit the center to apply [[STUN]]"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default heimerdinger;
