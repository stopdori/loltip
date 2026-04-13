import type { ChampData } from "../interactions/types";

const tristana: ChampData = {
  id: "tristana",
  skills: {
    P: ["RANGE_UP"],
    Q: ["AS_UP"],
    W: ["W_FLASH", "SLOW", "WALL_HOP", "CC_BUFFER"],
    E: ["E_FLASH"],
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
    P: [],
    Q: ["BUFF_STACK"],

    W: { phases: [
      { label: { ko: "W 준비단계", en: "W Wind-up" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "W 점프단계", en: "W Jump" }, tags: ["DMG_MAGIC", "AOE", "DASH"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 패시브 폭발", en: "E Passive Explodes" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
      { label: { ko: "E 액티브", en: "E 액티브" }, tags: ["TIMING_CAST", "TARGETED", "PROJECTILE", "DEBUFF_STACK"] },
      { label: { ko: "E 폭발", en: "E Explodes" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "ZONE"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "AOE"],
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
        "W스킬은 두단계로 나뉨 준비/점프\n준비단계에 트리스타나가 맞은 CC는 유효하지만\n점프단계가 발동되어 앞으로 이동하는것\n점프단계에는 CC저항력 없음", "W 초기화는\n챔피언 처치 관여 또는\nE 최대중첩(4스택)이 폭발했을 때", "R의 밀어내는 거리는 미드 일자부쉬 반절 정도.", "[[R_FLASH]]은 [[INSEC_KICK]] 됨"
      ],
        en: ["W has two phases: prep / jump.\nCC during prep is valid but the jump still launches Tristana forward.\nThere is no CC immunity during the jump phase", "W resets on:\nKill or assist participation, or\nE (max stacks, 4 charges) detonation", "[[R_FLASH]] allows [[INSEC_KICK]]"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 100,
    16: 100,
  },

};

export default tristana;
