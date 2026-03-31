import type { ChampData } from "../interactions/types";

const singed: ChampData = {
  id: "singed",
  skills: {
    P: ["MS_UP"],
    Q: ["BUFF_FORM"],
    W: ["W_FLASH", "GROUNDED", "SLOW", "CAST_COMMIT"],
    E: ["E_FLASH", "GRAB", "ROOT", "CAST_COMMIT"],
    R: ["HEAL", "MS_UP", "GW", "BUFF_FORM"],
  },

  vision: {
    P: ["HIT_INDICATOR"],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_STACK"],
    Q: ["DMG_MAGIC", "SKILL_TOGGLE", "ZONE", "DOT"],
    W: ["TIMING_CAST", "PROJECTILE", "ZONE"],
    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"],
    R: ["BUFF_FORM"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[E_FLASH]] 되는데, [[INSEC_KICK]]은 불가능\nE에 [[ROOT]]은 W 위에 던져야 발동", "E는 던지는 모션이 발동하면 웬만해서 스킬이 유효함\n대상이 날아가는 위치는 E를 사용한 곳 기준", "R에 [[GW]]은 Q에만 적용"
      ],
        en: ["[[E_FLASH]] works but [[INSEC_KICK]] is not possible.\nE's [[ROOT]] only triggers if thrown onto W", "E activates once the throw animation starts — the skill mostly goes through.\nThe landing position is based on where E was cast", "R's [[GW]] only applies to Q"]
        },
    },
  },

  ultCooldown: {
    6: 100,
    11: 100,
    16: 100,
  },

};

export default singed;
