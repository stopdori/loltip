import type { ChampData } from "../interactions/types";

const belveth: ChampData = {
  id: "belveth",
  skills: {
    P: ["AS_UP", "GHOSTING", "ALLY_TP_OK"],
    Q: ["WALL_HOP"],
    W: ["AIRBORNE"],
    E: ["DMG_REDUCE", "LIFESTEAL"],
    R: ["MS_UP", "WALL_HOP", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["STACKING"],
    Q: ["DMG_PHYSICAL", "DASH", "AOE", "RECHARGE"],
    W: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "AOE"],
    E: ["DMG_PHYSICAL", "SKILL_CHANNEL", "SKILL_TOGGLE", "NON_PROJECTILE", "SINGLE", "HOMING"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "DMG_TRUE", "PROC"] },
      { label: { ko: "R 액티브", en: "R Active"  }, tags: ["BUFF_FORM", "DMG_TRUE", "LOCKED", "AOE", "MOBILITY"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "스킬 사용후 [[AS_UP]]이 증가하고 [[GHOSTING]]가 됨", "애기 벌레들에 [[ALLY_TP_OK]]", "Q의 [[WALL_HOP]]는 R로 변신했을때만 가능", "[[W_FLASH]] 안됨", "E 시전중에 CC맞으면 풀림"
      ],
        en: ["[[AS_UP]] increases and [[GHOSTING]] activates after using a skill", "Void Coral spawns allow [[ALLY_TP_OK]]", "[[WALL_HOP]] on Q is only available in R (Endless Banquet) form", "[[W_FLASH]] not possible", "E cancels if hit by CC during cast"]
        },
    },
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default belveth;
