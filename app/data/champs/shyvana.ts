import type { ChampData } from "../interactions/types";

const shyvana: ChampData = {
  id: "shyvana",

skills: {
    base: {
      // 인간폼
      P: [],
      Q: ["AA_RESET"],
      W: ["SHIELD", "MS_UP"],
      E: ["E_FLASH", "SLOW"],
      R: ["MAX_HP_UP", "FEAR", "WALL_HOP", "UNSTOPPABLE"],
    },

    alt: {
      // 용형상
      P: [],
      Q: ["AA_RESET"],
      W: ["SHIELD", "MS_UP", "HEAL"],
      E: ["E_FLASH", "SLOW", "PIERCE"],
      R: [],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: [],
      E: ["HIT_INDICATOR"],
      R: [],
    },
    alt: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: [],

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: [] },
      { label: { ko: "E 폭발", en: "E Explodes" }, tags: [] },
      { label: { ko: "E 폭발장판", en: "E Explodes Zone" }, tags: ["VISION"] },
    ] },

      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["STACKING"],
      Q: ["DMG_MAGIC", "ON_HIT"],

      W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["CANCELLABLE", "SKILL_RECAST"] },
      { label: { ko: "W 폭발", en: "W Explodes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "E 폭발", en: "E Explodes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE"] },
    ] },

      R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM", "DMG_MAGIC", "TIMING_CAST", "DASH", "UNSTOPPABLE"] },
    ] },
      
    },
    alt: {
      P: ["STACKING"],

      Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_MAGIC", "ON_HIT", "AOE"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_TRUE", "ON_HIT", "SINGLE"] },
    ] },

      W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["CANCELLABLE", "SKILL_RECAST"] },
      { label: { ko: "W 폭발", en: "W Explodes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
      { label: { ko: "E 폭발", en: "E Explodes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE"] },
      { label: { ko: "E 폭발장판", en: "E Explodes Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "DOT"] },
    ] },
      
      R: ["PASSIVE_BONUS"],
    },
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
        "분노 100에 R(변신) 사용 가능 \n초당 0.5 / 0.75 / 1 분노 획득. 평타, 스킬 적중 시 1.25씩 획득\nR(용 형상) 상태일 때 2.5씩 획득", "[[R_FLASH]] 안됨.", "R은 찍을수록 스킬크기, [[RANGE_UP]], [[MAX_HP_UP]]이 더 증가.", "기본폼\nQ는 평/Q1/평/Q2가 제일 효율적인 느낌.\nW는 주변 적 챔피언이 많을수록 [[SHIELD]]량 증가.\n폭발하면서 주변피해를 줌.", "[[SHIELD]]가 사라지면 [[MS_UP]]도 사라짐.", "R(용형상)\nQ는 Q3까지 사용 할 수 있음. Q3는 단일 고정피해. \n W는 폭발하는 피해가 적 챔피언에 적중했을 때 잃은체력 비례 [[HEAL]]. \n E는 [[PIERCE]]이 생기고, 적 챔피언이 적중하면 추가 폭발이 일어나고 바닥이 깔림. \n 1명 맞혀도, 100명 맞혀도 똑같음.",
      ],
        en: ["Transform (R) is available at 100 fury.\nFury gained: 0.5/0.75/1 per second. +1.25 per basic attack or skill hit.\n+2.5 per hit while in Dragon form.", "[[R_FLASH]] not possible.", "Each rank of R increases skill size, [[RANGE_UP]], and [[MAX_HP_UP]] further.", "Human form\nQ: auto/Q1/auto/Q2 feels most efficient.\nW: [[SHIELD]] scales with number of nearby enemy champions. Deals AoE damage on detonation.", "Dragon form\nQ: can use up to Q3. Q3 deals fixed damage.\nW: detonation heals based on missing HP when hitting enemy champions — [[HEAL]].\nE: gains [[PIERCE]], and hitting an enemy champion triggers an additional explosion that leaves a zone on the ground.\nHits 1 or 100 enemies — same result."]
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

export default shyvana;
