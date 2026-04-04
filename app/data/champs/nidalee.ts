import type { ChampData } from "../interactions/types";

const nidalee: ChampData = {
  id: "nidalee",

  skills: {
    base: {
      // 인간폼
      P: ["MS_UP"],
      Q: ["REVEALED"],                
      W: ["W_FLASH", "REVEALED", "ALLY_TP_OK"],
      E: ["E_FLASH", "HEAL", "AS_UP"],
      R: ["BUFF_FORM"],
    },

    alt: {
      // 쿠거폼
      P: ["MS_UP"],
      Q: [],      
      W: ["WALL_HOP"],
      E: [],
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
      P: { phases: [
      { label: { ko: "사냥 니달리", en: "Hunt Self" }, tags: ["ST_CONDITIONAL", "BUFF_INTERACT", "Q", "W"] },
      { label: { ko: "사냥 상대", en: "Hunt Enemy" }, tags: ["ST_CONDITIONAL", "DEBUFF_INTERACT", "Q", "W"] },
    ] },
      Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "MARK"],
      W: ["DMG_MAGIC", "TIMING_CAST", "TRAP", "DOT", "MARK"],
      E: ["TIMING_CAST", "TARGETED"],
      R: ["BUFF_FORM"],
    },
    alt: {
      P: { phases: [
      { label: { ko: "사냥 니달리", en: "Hunt Self" }, tags: ["ST_CONDITIONAL", "BUFF_INTERACT"] },
      { label: { ko: "사냥 상대", en: "Hunt Enemy" }, tags: ["ST_CONDITIONAL", "DEBUFF_INTERACT", "W"] },
    ] },
      Q: ["DMG_MAGIC", "ON_HIT"],
      W: ["DMG_MAGIC", "DASH"],
      E: ["DMG_MAGIC", "TIMING_CAST"],
      R: ["BUFF_FORM"],
    },
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
        "쿠거폼 점멸+스킬들 다 안됨", "니달리 P 범위는 미드 일자부쉬 정도.", "인간폼 Q(창)는 거리에 비례해서 데미지 증가.\n최대 사거리는 미드 일자부쉬 정도.", "인간폼 Q, W를 상대에게 맞히면\n나와 대상에게 사냥 표식이 생김.", "니달리는 [[MS_UP]] 최대 30%와 쿠거폼 쿨타임이 초기화되서 바로 변신가능.\n쿠거폼 W는 사거리 증가.\nW [[DASH]] 유도선이 떳을 때 W는 쓰면 됨.", "대상은 [[TRUE_SIGHT]]와, 받는 피해 30% 증가.", 
      ],
        en: ["All cougar form flash combos are not possible", "Hitting with human form Q or W activates Hunting, which resets R cooldown for an immediate transform"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default nidalee;
