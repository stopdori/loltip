import type { ChampData } from "../interactions/types";

const kennen: ChampData = {
  id: "kennen",
  skills: {
    P: ["STUN", "ENERGY_RESTORE"],
    Q: [],
    W: [],
    E: ["AS_UP", "MS_UP", "GHOSTING", "BUFF_FORM"],
    R: ["R_FLASH", "BUFF_FORM"],
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
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "BUFF_STACK"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "PROC", "DMG_MAGIC", "TARGETED", "PROJECTILE", "ON_HIT", "BUFF_STACK", "DEBUFF_STACK"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "NON_PROJECTILE", "DEBUFF_STACK"] },
    ] },

    E: ["BUFF_FORM", "DMG_MAGIC", "SKILL_TOGGLE", "AOE", "BUFF_STACK", "DEBUFF_STACK"],
    R: ["BUFF_FORM", "DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "AOE", "LOCKED", "BUFF_STACK", "DEBUFF_STACK"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "스택은 3종류.\n평타 5번마다 강화표창 버프 스택.\n스킬 적중시마다 W 방출 스택.\n스킬 적중시마다 상대에게 디버프 스택.", "P의 상대 디버프가 3스택되면 [[STUN]].", "E에 [[AS_UP]]은 종료하고 발동", "E는 직접 해제가 가능하지만,\nCC 맞으면 해제되지 않음.", "R은 직접 해제할 수 없음.\nCC에 맞아도 해제되지 않음."
      ],
        en: ["Q flash not possible", "P at 3 stacks applies a stun", "E's [[AS_UP]] activates on deactivation", "R cannot be cancelled by any CC"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default kennen;
