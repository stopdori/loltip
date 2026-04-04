import type { ChampData } from "../interactions/types";

const lillia: ChampData = {
  id: "lillia",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH", "MS_UP"],
    W: ["CC_BUFFER"],
    E: ["E_FLASH", "SLOW"],
    R: ["SLEEP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DEBUFF_STACK", "DMG_MAGIC", "DOT"],
    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "AOE", "DEBUFF_STACK"] },
      { label: { ko: "Q 가장자리", en: "Q Edge" }, tags: ["DMG_TRUE", "SKILL_CHANNEL", "TIMING_CAST", "AOE", "DEBUFF_STACK"] },
    ] },
    W: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DASH", "DEBUFF_STACK"],
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "DEBUFF_STACK"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["ST_CONDITIONAL", "TIMING_CAST", "PROJECTILE", "SWARM", "ST_DELAYED"] },
      { label: { ko: "수면", en: "Asleep" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },
   
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
        "Q에 [[MS_UP]]는 기본지속 효과여서\n사실상 모든스킬에 스택이 쌓임\n스택은 최대 4스택", "Q는 지팡이에 닿으면 피해\n가장자리에 닿으면 고정피해 추가.", "W로 [[WALL_HOP]] 불가", "W는 CC에 끊기지만, 모션에 따라 데미지가 들어가는 경우와 들어가지 않는 경우가 있음\n1. 릴리아가 지팡이를 회전할 때 CC를 맞으면\n데미지가 들어가지 않고\n2. 지팡이를 내려칠 때 CC를 맞으면\n이동은 끊기지만 데미지는 들어감"
      ],
        en: ["Q's [[MS_UP]] is a passive effect so all skills build stacks.\nMax 4 stacks", "Q deals damage upon contact with the staff\n and additional true damage if hit by the edge.", "[[WALL_HOP]] is not possible with W", "W is interrupted by CC but damage behavior varies:\n1. If CC lands while Lillia is spinning her staff, no damage is dealt\n2. If CC lands while she swings down, movement is interrupted but damage is dealt"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default lillia;
