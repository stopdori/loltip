import type { ChampData } from "../interactions/types";

const jinx: ChampData = {
  id: "jinx",
  skills: {
    P: ["AS_UP", "MS_UP"],
    Q: ["AS_UP", "BUFF_FORM"],
    W: ["REVEALED"],
    E: ["VISION", "ROOT"],
    R: ["VISION"],
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
    Q:    { phases: [
      { label: { ko: "Q 폼변환", en: "" }, tags: ["SKILL_TOGGLE", ] },
      { label: { ko: "미니건", en: "" }, tags: ["BUFF_FORM", "DMG_PHYSICAL", "TARGETED", "PROJECTILE", "ON_HIT", "SINGLE"] },
      { label: { ko: "로켓", en: "" }, tags: ["BUFF_FORM", "DMG_PHYSICAL", "TARGETED", "PROJECTILE", "ON_HIT", "AOE"] },
    ] },
    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE"],
    E: ["DMG_MAGIC", "PROJECTILE", "TRAP", "ST_DELAYED"],
    R: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"],
  },

  notes: {
    ko: [
    "[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "P[[MS_UP]]는 챔피언, 에픽 몬스터, 구조물에 한함", "Q는 미니건 ([[MS_UP]])\n생선 대가리(스플, 사거리증가)", "E의 [[ROOT]]은 다른 스킬들의 [[ROOT]]보다 판정이 좋음\n이동기 계열을 꽤 많이 끊음", "E는 발동하거나 시간이 다되어 폭발할때, 피해가 범위피해임.", "R은 날아가고 1초뒤부터 피해량 증가."
  ],
    en: ["[[W_FLASH]], [[E_FLASH]], [[R_FLASH]] all not possible", "P [[MS_UP]] only activates from champions, epic monsters, or structures", "Q: Minigun mode ([[AS_UP]])\nFishbones mode (splash damage, increased range)", "E's [[ROOT]] has better hitbox detection than most roots and interrupts many dashes"]
  },

  ultCooldown: {
    6: 85,
    11: 65,
    16: 45,
  },

};

export default jinx;
