import type { ChampData } from "../interactions/types";

const varus: ChampData = {
  id: "varus",
  skills: {
    P: ["AS_UP", "AD_UP", "AP_UP"],
    Q: ["Q_FLASH"],
    W: [],
    E: ["SLOW", "GW"],
    R: ["R_FLASH", "ROOT"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF_FORM"],
    Q: ["DMG_PHYSICAL", "SKILL_CHARGED", "PROJECTILE", "PIERCE"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "DMG_MAGIC", "PROJECTILE", "ON_HIT", "DEBUFF_STACK"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "CANCELLABLE"] },
    ] },

    E: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "ST_CONDITIONAL", "CHAIN"],
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
        "[[E_FLASH]] 안됨", 
        "P는 적처치(미니언, 와드, 정글몹)에 발동\n챔피언 처치 관여 시 2.5배", 
        "Q 관통은 첫대상 이후 데미지 감소", 
        "W는 Q 차징하면서 사용 가능.\n단, 충전 50%를 넘어가면 W를 사용할 수 없음.", 
        "W는 취소하면 쿨타임을 돌려줌. \n 단, Q 차징중에 취소할 수 없으며, Q를 쏘지 않아도 쿨타임을 돌려주지 않음.", 
        "E의 [[SLOW]], [[GW]]는 범위 안에 있는 대상에게 지속 적용", 
        "R은 대상 주변 챔피언들에 전염가능\n원 범위를 벗어나면 걸리지 않음", 
        "W 패시브의 역병 디버프를 Q, E, R로 터뜨리면, 터뜨린 개당 Q, W, E 의 쿨타임을 감소시킴."
      ],
        en: ["[[E_FLASH]] not possible", "P triggers on any kill (minion, ward, jungle monster).\nKill participation gives 2.5x stacks", "Q pierces with damage reduction after the first target", "W can be activated while charging Q", "E [[SLOW]] and [[GW]] continuously apply to targets inside the area", "R can chain to nearby enemy champions.\nTargets outside the original area are not affected"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  
  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default varus;
