import type { ChampData } from "../interactions/types";

const qiyana: ChampData = {
  id: "qiyana",
  skills: {
    P: [],
    Q: { phases: [
      { label: { ko: "속성 없음", en: "None" }, tags: ["Q_FLASH"] },
      { label: { ko: "숲", en: "Brush" }, tags: ["Q_FLASH", "INVISIBILITY", "MS_UP"] },
      { label: { ko: "물", en: "River" }, tags: ["Q_FLASH", "ROOT", "SLOW"] },
      { label: { ko: "땅", en: "Terrain" }, tags: ["Q_FLASH"] },
    ] },
    W: ["AS_UP", "WALL_HOP", "BUFF_FORM"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["R_FLASH", "KNOCKBACK", "STUN"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_INTERACT", "Q", "W", "E", "R"],
    Q: { phases: [
      { label: { ko: "속성 없음", en: "None" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"] },
      { label: { ko: "숲", en: "Brush" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "STACK_CONSUME"] },
      { label: { ko: "숲 장판", en: "Brush Zone" }, tags: ["CAMOUFLAGE", "ZONE"] },
      { label: { ko: "물", en: "River" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "STACK_CONSUME"] },
      { label: { ko: "땅", en: "Terrain" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "STACK_CONSUME"] },
    ] },
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["BUFF_FORM", "ST_CONDITIONAL", "PASSIVE_BONUS", "DMG_MAGIC", "ON_HIT"] },
      { label: { ko: "", en: "" }, tags: ["BUFF_STACK", "DASH"] },
    ] },
    E: ["DMG_PHYSICAL", "TARGETED", "DASH"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["AOE"] },
      { label: { ko: "R 폭발", en: "R Explodes" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "ZONE"] },
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
        "P 초기화를 위해 W로 다른 속성을 집어 때려야 함", "땅Q는 50%미만 대상에게 추가데미지", "R의 [[STUN]] 지속시간은 처음 날린 R(충격파)이 이동한 거리에 따라 비례", "R은 판정이 특이함\nR은 일반적으로 벽에 닿으면 폭발하여 [[STUN]]을 걸지만\nR경로에 강가,부쉬가 있으면 폭발하여 벽에 닿지않아도 데미지와 [[STUN]]이 들어감\n예)R로 넉백을 했는데 착지점이 강가,부쉬가 끝나고 그냥 맨땅이라면 [[STUN]]은커녕 데미지도 없음"
      ],
        en: ["P resets by hitting a different element with W", "Earth Q deals bonus damage to targets below 50% HP", "R has unique hit detection.\nNormally R explodes on wall contact to apply [[STUN]],\nbut if river or brush is in R's path, it explodes and deals damage + [[STUN]] without hitting a wall.\nExample: if the knockback lands on flat ground after passing river/brush, neither the damage nor [[STUN]] will apply"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

};

export default qiyana;
