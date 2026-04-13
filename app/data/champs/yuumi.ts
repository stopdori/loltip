import type { ChampData } from "../interactions/types";

const yuumi: ChampData = {
  id: "yuumi",
  skills: {
    P: ["HEAL"],
    Q: ["SLOW"],
    W: ["WALL_HOP", "UNTARGETABLE"],
    E: { phases: [
      { label: { ko: "일반, 밀착", en: "Normal, Attached" }, tags: ["AS_UP", "MS_UP", "SHIELD"] },
      { label: { ko: "단짝", en: "Best Friend" }, tags: ["AS_UP", "MS_UP", "SHIELD", "MANA_RESTORE"] },
    ] },
    
    R: ["HEAL", "SHIELD", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["STACKING", "PASSIVE_BONUS"] },
      { label: { ko: "패시브 온힛", en: "Passive On-hit" }, tags: ["ST_CONDITIONAL", "ON_HIT", "CHAIN"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "SINGLE"] },
      { label: { ko: "밀착", en: "Attached" }, tags: ["DMG_MAGIC", "SKILL_STEERABLE", "PROJECTILE", "SINGLE"] },
      { label: { ko: "단짝 버프", en: "Best Friend Buff" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT"] },
    ] },

    W: { phases: [
      { label: { ko: "단짝 패시브", en: "Best Friend Passive" }, tags: ["ST_CONDITIONAL", "ON_HIT"] },
      { label: { ko: "W", en: "W" }, tags: ["TARGETED", "DASH"] },
      { label: { ko: "밀착", en: "Attached" }, tags: ["BUFF_FORM", "UNTARGETABLE"] },
    ] },

    E: ["BUFF_STACK"],

    R: { phases: [
      { label: { ko: "아군", en: "Allies" }, tags: ["ST_CONDITIONAL"] },
      { label: { ko: "상대", en: "Enemies" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "SKILL_STEERABLE", "PROJECTILE", "PIERCE"] },
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
        "[[BA]]는 [[NON_PROJECTILE]].", "P는 평타, 스킬로 피해를 주면 [[HEAL]]이 되고\n이 [[HEAL]]이 밀착한 아군에게 전이됨", "E는 내렸을 때 [[AS_UP]], [[MS_UP]], [[SHIELD]]가 유미에게 적용 ([[MANA_RESTORE]] 제외)\n밀착상태이면 밀착대상에게만 위 효과를 주고, [[MANA_RESTORE]]을 추가 적용", "내렸을 때 [[HARD_CC]] 맞으면 W 쿨타임 5초", "R은 [[HEAL]] 초과분이 [[SHIELD]]로 전환"
      ],
        en: ["[[BA]] is [[NON_PROJECTILE]].", "P heals Yuumi from basic attacks or skills dealing damage,\nand that heal transfers to the attached ally", "E effects (excluding [[MANA_RESTORE]]) apply to Yuumi when unattached.\nWhen attached, effects transfer to the ally plus [[MANA_RESTORE]]", "Getting hit by [[HARD_CC]] while unattached puts W on a 5s cooldown", "R excess healing converts to [[SHIELD]]"]
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

export default yuumi;
