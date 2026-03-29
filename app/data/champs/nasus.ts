import type { ChampData } from "../interactions/types";

const nasus: ChampData = {
  id: "nasus",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["AA_RESET"],
    W: ["W_FLASH", "AS_DOWN", "SLOW"],
    E: ["E_FLASH", "AR_SHRED"],
    R: ["MAX_HP_UP", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: ["POSITION_REVEAL"],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["DMG_PHYSICAL", "ON_HIT"],
    W: ["TIMING_CAST", "TARGETED", "DEBUFF_STACK"],
    E: { phases: [
      { label: { ko: "E 불길", en: "E Fire" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE"] },
      { label: { ko: "E 지속피해", en: "E Zone" }, tags: ["DMG_MAGIC", "ZONE", "DOT"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM"] },
      { label: { ko: "R 범위피해", en: "R AOE" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DOT"] },
    ] },
    
  },

  notes: {
    ko: [
    "Q로 대상을 처치하면 [[STACKING]]. 1스택당 1데미지\n 솔방울, 수정초, 꿀열매, 억제기는 0스택.\n 미니언, 작은 몬스터, 타워, 와드, 소환수, 덫은 3스택.\n 챔피언, 대형, 에픽 몬스터는 12스택.\n 넥서스는 스택 관측을 못함. 아시는분 제보 부탁.", "Q로인한 룬효과 발동으로 인한 처치는 Q로 처치한걸로 간주(예, 감전), 그래서 스택이 쌓임.", "R은 [[MAX_HP_UP]]여서 풀피에도 유효함\n[[GW]]영향도 안받음"
  ],
    en: ["R is [[MAX_HP_UP]] so it's effective even at full HP and ignores [[GW]]"]
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default nasus;
