import type { ChampData } from "../interactions/types";

const taric: ChampData = {
  id: "taric",
  skills: {
    P: ["AS_UP"],
    Q: ["HEAL"],
    W: ["W_FLASH", "SHIELD", "BUFF_FORM"],
    E: ["E_FLASH", "STUN"],
    R: ["R_FLASH", "INVULNERABLE", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_INTERACT", "Q", "W", "E", "R", "STACK_CONSUME"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["BUFF_INTERACT", "P"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["TIMING_CAST", "NON_TARGETED", "BUFF_STACK", "STACK_CONSUME"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["BUFF_FORM"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["TARGETED", "BUFF_STACK"] },
    ] },
    
    E: ["DMG_MAGIC", "ST_DELAYED", "AOE", "BUFF_STACK"],
    R: ["BUFF_FORM", "TIMING_CAST", "NON_TARGETED", "ST_DELAYED", "AOE", "BUFF_STACK"],
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
        "W로 연결된 대상은 타릭의 스킬을 복제해서 사용함.",
        "Q는 P의 버프스택을 평타로 소모하면, Q가 여러번 중첩되고 사용하면 한번에 소모함.",
        "W는 멀어져서 연결이 해제되어도 다시 가까이가면 연결이 복구됨.",
        "R은 나와 연결된 대상의 하늘에서 광휘 내려오는데, 다 떨어지면 범위내의 대상 [[INVULNERABLE]].",
      ],
        en: ["P's [[MS_UP]] applies for the next 2 basic attacks after using a skill"]
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

export default taric;
