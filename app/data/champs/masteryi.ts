import type { ChampData } from "../interactions/types";

const masteryi: ChampData = {
  id: "masteryi",
  skills: {
    P: [],
    Q: ["Q_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    W: ["DMG_REDUCE", "HEAL", "AA_RESET"],
    E: [],
    R: ["AS_UP", "MS_UP", "SLOW_IMMUNE", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PROC", "ON_HIT"],
    Q: ["DMG_PHYSICAL", "TARGETED", "CHAIN", "BLINK"],
    W: ["SKILL_CHANNEL"],
    E: ["BUFF_FORM", "DMG_TRUE", "ON_HIT"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["BUFF_FORM"] },
    ] },
    
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "평타가 3번을 치면 4번째 평타는 두대를 때림.\nE를 사용하고 때리면 두번 적용됨.", "E를 사용하고 Q를 사용하면 E가 적용됨.", "R은 킬관여 하면\n쿨타임 70%감소, 지속시간 7초 증가."
      ],
        en: ["Kill participation with R reduces its cooldown by 70% and extends its duration by 7s."]
        },
    },
  },

  ultCooldown: {
    6: 85,
    11: 85,
    16: 85,
  },

};

export default masteryi;
