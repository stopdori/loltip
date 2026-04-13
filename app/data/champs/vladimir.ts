import type { ChampData } from "../interactions/types";

const vladimir: ChampData = {
  id: "vladimir",
  skills: {
    P: ["AP_UP", "MAX_HP_UP"],
    Q: ["Q_FLASH", "LIFESTEAL", "MS_UP"],
    W: ["W_FLASH", "LIFESTEAL", "MS_UP", "GHOSTING", "SLOW", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "LIFESTEAL"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["TIMING_CAST"],
    W: ["SKILL_CHANNEL"],
    E: ["SKILL_CHARGED"],
    
    R: { phases: [
      { label: { ko: "", en: "" }, tags: [] },
      { label: { ko: "", en: "" }, tags: [] },
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
        "P는 주문력당 체력, 체력당 주문력 증가", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "E는 시전중에 CC에 맞으면 유지하지 못하지만, 충전량을 방출.", "E 쓰면서 W 쓸 수 있음\nE는 스마트키 풀면 편함", "R은 ''받는 모든피해 증가''여서\nR 대상에게 아군 데미지도 증가시킴"
      ],
        en: ["P increases max HP based on AP, and AP based on max HP", "W's [[SLOW]] continuously applies to targets inside the area", "E can be cast while using W.\nDisabling smartcast on E is recommended", "R applies 'increased damage taken' — ally damage on R targets is also amplified"]
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

export default vladimir;
