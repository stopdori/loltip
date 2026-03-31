import type { ChampData } from "../interactions/types";

const nocturne: ChampData = {
  id: "nocturne",
  skills: {
    P: ["HEAL"],
    Q: ["GHOSTING", "MS_UP", "AD_UP"],
    W: ["AS_UP", "SPELL_SHIELD"],
    E: ["E_FLASH", "TETHER", "FEAR"],
    R: ["R_FLASH", "WALL_HOP", "NEARSIGHT", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_PHYSICAL"],
    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
      { label: { ko: "Q 장판", en: "Q Zone" }, tags: ["ZONE"] },
      { label: { ko: "Q 추격 장판", en: "Q Homing Zone" }, tags: ["ST_CONDITIONAL", "HOMING", "ZONE"] },
    ] },
    
    W: { phases: [
      { label: { ko: "w 패시브", en: "W Passive" }, tags: ["AS_UP"] },
      { label: { ko: "W", en: "W" }, tags: ["SPELL_SHIELD"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TARGETED", "DOT"] },
      { label: { ko: "E 사슬", en: "E Tether" }, tags: ["ST_CONDITIONAL", "DEBUFF_STACK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["GLOBAL", "DEBUFF_STACK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["DMG_PHYSICAL", "TARGETED", "UNSTOPPABLE"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "Q의 버프는 Q장판 위에서만 발동", "W의 [[AS_UP]]는 방어해내면 효과 2배 ", "E가 끊기지 않아야 [[FEAR]]를 검", "R의 [[NEARSIGHT]]는 상대가 자기 시야만 보임.", "R을 사용하면 날아갈수 있는 대상 발밑에 표식이 보임.", "R2 설명에 [[UNSTOPPABLE]]가 없지만, 스킬로 날아갈 때 녹턴 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝."
      ],
        en: ["[[Q_FLASH]] not possible", "Q's buffs only activate while standing in the trail", "W's [[AS_UP]] doubles if successfully blocked", "[[FEAR]] only applies if E's tether remains unbroken", "R's [[NEARSIGHT]] leaves only self-vision"]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default nocturne;
