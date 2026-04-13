import type { ChampData } from "../interactions/types";

const shen: ChampData = {
  id: "shen",
  skills: {
    P: ["SHIELD"],
    Q: ["Q_FLASH", "SLOW", "AS_UP"],
    W: ["PROTECTIVE_ZONE"],
    E: ["E_FLASH", "TAUNT", "WALL_HOP"],
    R: ["SHIELD", "WALL_HOP"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR", "POSITION_REVEAL"],
    W: [],
    E: ["HIT_INDICATOR"],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "보호막", en: "Barrier" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "기의 검", en: "Spirit Blade" }, tags: ["SUMMON", "ZONE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 검 이동", en: "Q Blade Moving" }, tags: ["PROJECTILE", "PIERCE", "BUFF_STACK", "DEBUFF_STACK"] },
      { label: { ko: "Q 버프 3스택", en: "Q Buff 3 stacks" }, tags: ["DMG_MAGIC", "ON_HIT", "STACK_CONSUME"] },
      { label: { ko: "Q 강화 버프 3스택", en: "Q Improved Buff 3 stacks" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ON_HIT", "STACK_CONSUME"] },
    ] },

    W: ["ZONE"],
    
    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["DMG_PHYSICAL", "AOE", "DASH"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "TARGETED", "MOBILITY"] },
      { label: { ko: "R 검 소환", en: "R Blade Moving" }, tags: ["SUMMON", "ZONE"] },
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
        "쉔과 검 사이에 상대 챔프를 두는게 핵심\n검을 적중시켜야 [[SLOW]], [[AS_UP]] 발동\n여기서 [[SLOW]]는 쉔에게 멀어질 때만", "검은 부쉬안에 있을때 상대에게 보이지 않음.", "W를 쓰고 범위 내에 쉔이나 아군이 없으면 비활성화\n들어오는 순간 발동", "E의 [[PASSIVE_BONUS]]로 Q의 경로에 챔피언을 맞히거나 E(도발)을 맞히면 P(보호막)의 쿨타임이 줄어듬.", "R로 아군에게 이동 할 때, 검도 같이 옴"
      ],
        en: ["Key mechanic is positioning enemies between Shen and his blade.\nHitting with the blade applies [[SLOW]] and [[AS_UP]].\n[[SLOW]] only applies when the target moves away from Shen", "W deactivates if neither Shen nor allies are inside its area.\nReactivates the moment one enters", "R brings the blade along when teleporting to an ally"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 200,
    11: 180,
    16: 160,
  },

};

export default shen;
