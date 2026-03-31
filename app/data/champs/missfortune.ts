import type { ChampData } from "../interactions/types";

const missfortune: ChampData = {
  id: "missfortune",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "MS_UP"],
    E: ["E_FLASH", "SLOW", "VISION"],
    R: [],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: [],
    E: ["VISION"],
    R: [],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "ON_HIT"],
    Q: ["DMG_PHYSICAL", "TARGETED", "TIMING_CAST", "PROJECTILE", "CHAIN"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["TIMING_INSTANT"] },
    ] },
    E: ["DMG_MAGIC", "TIMING_CAST", "ZONE"],
    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "AOE", "CANCELLABLE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P는 상대 챔피언 하나당 한번.\n챔피언 개별의 쿨타임이 존재.", "P효과가 발동하면 W의 쿨타임이 2초씩 감소.", "Q의 뒤쪽 연쇄는 [[INVISIBILITY]] 또는 부쉬에 숨어있어도 연쇄 가능.", "E의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "R은 E로 [[SLOW]]를 걸고 그 다음 쓰는 게 좋음\nR [[SKILL_CHANNEL]]에 움직이면 풀림"
      ],
        en: ["E's [[SLOW]] continuously applies to targets inside the area", "Use E's [[SLOW]] first, then follow with R.\nR channeling cancels on movement"]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default missfortune;
