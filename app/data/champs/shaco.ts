import type { ChampData } from "../interactions/types";

const shaco: ChampData = {
  id: "shaco",
  skills: {
    P: [],
    Q: ["Q_FLASH", "INVISIBILITY", "CRIT", "WALL_HOP"],
    W: ["W_FLASH", "ALLY_TP_OK", "FEAR"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "FEAR", "WALL_HOP", "TOWER_DODGE", "ALLY_TP_OK"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: [],
    R: ["VISION"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "평타", en: "Base Attack" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "E 양날독", en: "E Two-Shiv Poison" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },

    Q: ["BLINK", "ON_HIT"],
    W: { phases: [
      { label: { ko: "W 박스", en: "W Box" }, tags: ["TIMING_CAST", "SUMMON", "ZONE"] },
      { label: { ko: "W 발동", en: "W Active" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "PROJECTILE", "SWARM"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 기본효과", en: "E Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "E Active", en: "E Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "SUMMON", "LOCKED"] },
      { label: { ko: "R 폭발", en: "R Burst" }, tags: ["ST_CONDITIONAL", "AOE", "SUMMON"] },
      { label: { ko: "R 박스", en: "R Box" }, tags: [] },
    ] },
    
    
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "샤코는 뒤에서 공격하면 추뎀이 있음. 양날독이 날아갈 때 상대가 앞을 보이고 맞으면 덜 아픔.", "Q를 쓰고 상대 뒤에서 공격하면 [[CRIT]]\nQ [[INVISIBILITY]]중에 점멸, W, R을 써도 풀리지 않음\n (E는 풀림)", "W(상자)는 하나만 공격할 때 더 쌤.", "R(분신)이 죽을 때 주변에 광역[[FEAR]] 발동", "분신에는 텔이 안타지지만\n분신 죽고 나오는 박스에는 [[ALLY_TP_OK]]",
      ],
        en: ["Shaco deals bonus damage from behind", "Q then attacking from behind applies [[CRIT]].\nQ [[INVISIBILITY]] doesn't break on flash, W, or R.\n(E does break it)", "R (clone) explodes on death, applying AoE [[FEAR]]", "Cannot TP onto the clone,\nbut boxes spawned after clone death allow [[ALLY_TP_OK]]"]
        },
    },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default shaco;
