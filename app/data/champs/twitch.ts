import type { ChampData } from "../interactions/types";

const twitch: ChampData = {
  id: "twitch",
  skills: {
    P: [],
    Q: ["Q_FLASH", "CAMOUFLAGE", "AS_UP", "MS_UP"],
    W: ["W_FLASH", "SLOW"],
    E: [],
    R: ["RANGE_UP", "AD_UP", "PIERCE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DOT_DMG_TRUE", "DEBUFF_INTERACT", "W", ],

    Q: { phases: [
      { label: { ko: "Q 위장", en: "Q Camouflage" }, tags: ["BUFF_FORM", "ST_DELAYED"] },
      { label: { ko: "Q 위장 해제", en: "Q Camouflage Unveiled" }, tags: ["ST_CONDITIONAL", "BUFF_FORM"] },
    ] },

    W: { phases: [
      { label: { ko: "W 독병 투척", en: "W Venom Cask Toss" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "W 독 구름", en: "W Venom Cloud" }, tags: ["ZONE", "DEBUFF_STACK"] },
    ] },

    E: ["TIMING_CAST"],

    R: ["BUFF_FORM", "PROJECTILE", "PIERCE", "ON_HIT"],
    
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
        "Q [[CAMOUFLAGE]]중 점멸써도 안풀림\nQ의 [[AS_UP]]는 [[CAMOUFLAGE]] 종료 후 적용\nQ는 중독된 챔피언이 죽으면 쿨타임 초기화", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용"
      ],
        en: ["Q [[CAMOUFLAGE]] does not break on flash.\nQ's [[AS_UP]] applies after [[CAMOUFLAGE]] ends.\nQ resets its cooldown when a poisoned champion dies", "W's [[SLOW]] continuously applies to targets inside the area"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 90,
    11: 90,
    16: 90,
  },

};

export default twitch;
