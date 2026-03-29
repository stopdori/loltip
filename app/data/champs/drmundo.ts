import type { ChampData } from "../interactions/types";

const drmundo: ChampData = {
  id: "drmundo",
  skills: {
    P: ["HEAL", "CC_IMMUNE"],
    Q: ["HEAL", "SLOW"],
    W: ["HEAL"],
    E: ["AA_RESET"],
    R: ["HEAL", "MS_UP", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ZONE"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE", "DOT"] },
      { label: { ko: "W2", en: "W2" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },
    E: ["PASSIVE_BONUS", "DMG_PHYSICAL", "ON_HIT", "NON_PROJECTILE"],
    R: ["BUFF_FORM"],
  },

  notes: {
    ko: [
    "[[Q_FLASH]] 안됨.", "P는 [[CC_IMMUNE]] 효과가 발동하면 화학통을 떨어뜨리는데, 문도가 주우면 [[HEAL]] 적이 주우면 파괴.", "Q(뼈톱)는 맞혀야 체력 50[[HEAL]].", "W는 사용하고 시간이 지나거나 재사용 하면 폭발.\n상대 챔피언에게 터뜨려야 회색체력 100%를 [[HEAL]]함\n요약) 대충 W키고 상대에게 비벼라",
  ],
    en: ["[[Q_FLASH]] not possible.", "When P's [[CC_IMMUNE]] triggers, Dr. Mundo drops a canister. Picking it up [[HEAL]]s Mundo; enemies picking it up destroy it.", "Q (Infected Bonesaw) heals 50 HP when it lands.", "W detonates when its duration expires or when reactivated.\nDetonating on an enemy champion heals 100% of grey health.\nSummary: activate W and get in their face"]
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

};

export default drmundo;
