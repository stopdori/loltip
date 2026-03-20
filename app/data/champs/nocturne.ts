import type { ChampData } from "../interactions/types";

const nocturne: ChampData = {
  id: "nocturne",
  skills: {
    P: ["HEAL"],
    Q: ["GHOSTING", "MS_UP", "AD_UP", "UNINTERRUPTIBLE_CAST"],
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
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨", "Q의 버프는 Q장판 위에서만 발동", "W의 [[AS_UP]]는 방어해내면 효과 2배 ", "E가 끊기지 않아야 [[FEAR]]를 검", "R의 [[NEARSIGHT]]는 상대가 자기 시야만 보임.", "R2 설명에 [[UNSTOPPABLE]]가 없지만, 스킬로 날아갈 때 녹턴 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝."
  ],
    en: ["[[Q_FLASH]] not possible", "Q's buffs only activate while standing in the trail", "W's [[AS_UP]] doubles if successfully blocked", "[[FEAR]] only applies if E's tether remains unbroken", "R's [[NEARSIGHT]] leaves only self-vision"]
  },

  ultCooldown: {
    6: 140,
    11: 115,
    16: 90,
  },

};

export default nocturne;
