import type { ChampData } from "../interactions/types";

const irelia: ChampData = {
  id: "irelia",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL", "WALL_HOP"],
    W: ["W_FLASH", "DMG_REDUCE"],
    E: ["STUN"],
    R: ["R_FLASH", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC"],
    Q: ["DMG_PHYSICAL", "TARGETED", "ON_HIT", "BUFF_STACK"],
    W: { phases: [
      { label: { ko: "W 차징", en: "R Charging" }, tags: ["SKILL_CHARGED", "CAST_COMMIT", "CANCELLABLE", "TIMING_AFTERCAST", ] },
      { label: { ko: "W 발사", en: "W Release"  }, tags: ["DMG_PHYSICAL", "AOE", "BUFF_STACK"] },
    ] },
    E: ["DMG_MAGIC", "PROJECTILE", "AOE", "BUFF_STACK", "MARK", "SKILL_RECAST", "ST_CONDITIONAL"],
    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "BUFF_STACK", "MARK"] },
      { label: { ko: "R 결계", en: "R Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE", "BUFF_STACK", "MARK"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[E_FLASH]] 안됨", "P는 최대 4스택\n 중첩 유지는 챔피언, 타워 때려야 됨", "W를 누르고 있는 동안에 CC를 맞아도 W를 풀지 않음.", "R은 적중하면 결계가 펴지고 결계에 닿은적은 추가 데미지와 [[SLOW]]."
      ],
        en: ["[[E_FLASH]] not possible", "P stacks up to 4.\nStacks are maintained only by hitting champions or towers"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 125,
    11: 105,
    16: 85,
  },

};

export default irelia;
