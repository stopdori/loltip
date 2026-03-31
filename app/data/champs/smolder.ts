import type { ChampData } from "../interactions/types";

const smolder: ChampData = {
  id: "smolder",
  skills: {
    P: ["STACKING"],
    Q: { phases: [
      { label: { ko: "Q 0~224 스택", en: "Q 0~224 Stacks" }, tags: ["Q_FLASH"] },
      { label: { ko: "Q 225 스택 이상", en: "Q Over 225 Stacks" }, tags: ["Q_FLASH", "EXECUTE"] },
    ] },

    W: ["W_FLASH", "SLOW"],
    E: ["E_FLASH", "MS_UP", "WALL_HOP"],
    R: ["SLOW", "HEAL"],
  },

  vision: {
    P: [],
    Q: ["FEEDBACK_INDICATOR", "POSITION_REVEAL"],
    W: ["FEEDBACK_INDICATOR"],
    E: ["POSITION_REVEAL"],
    R: ["VISION"],
  },

  gimmick: {
    P: ["STACKING"],
    Q: { phases: [
      { label: { ko: "Q 1~24 스택", en: "Q 1~24 Stacks" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "PROJECTILE", "SINGLE"] },
      { label: { ko: "Q 25~125 스택", en: "Q 25~124 Stacks" }, tags: ["DMG_PHYSICAL", "DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "AOE"] },
      { label: { ko: "Q 126~224 스택", en: "Q 126~224 Stacks" }, tags: ["DMG_PHYSICAL", "DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "AOE"] },
      { label: { ko: "Q 225 이상", en: "Q Over 225 Stacks" }, tags: ["DMG_PHYSICAL", "DMG_MAGIC", "DOT_DMG_TRUE", "TIMING_CAST", "TARGETED", "PROJECTILE", "AOE"] },
      { label: { ko: "Q 추가 투사체 ( 125스택 이상 )", en: "Q Addtional Projectile ( Over 125 Stacks )" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "DMG_MAGIC", "PROJECTILE", "PIERCE"] },
      { label: { ko: "Q 추가 투사체 ( 225스택 이상 )", en: "Q Addtional Projectile ( Over 125 Stacks )" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "DMG_MAGIC", "DOT_DMG_TRUE", "PROJECTILE", "PIERCE"] },
    ] },
   
    W: { phases: [
      { label: { ko: "W 투사체", en: "W Projectile" }, tags: ["DMG_PHYSICAL", "DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"] },
      { label: { ko: "W 범위피해", en: "W AOE" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "DMG_MAGIC", "AOE"] },
    ] },
    
    E: ["DMG_PHYSICAL", "DMG_MAGIC", "SKILL_CHANNEL", "SINGLE", "MOBILITY"],
    R: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P 스택은 25 스플레쉬 /125 추가투사체 (최초 2개 + 125스택 마다 1개씩 추가.)\n225 3초지속 고정피해, [[EXECUTE]]", "P 스택이 25 / 125 / 225 마다 스몰더의 화염뿔이 자라남.", "공허충 작은 새끼는 스택을 주지 않음.", "W의 범위 폭발피해는 중첩이 가능하지만, 추가되는 피해가 25%만 들어감.", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "R의 브레스를 스몰더 자신이 맞아야 [[HEAL]]", "E스킬은 [[HARD_CC]]에 끊김"
      ],
        en: ["P stacks: 25 splash / 125 bonus projectile / 225 persistent true damage, [[EXECUTE]]", "W's [[SLOW]] continuously applies to targets inside the area", "R [[HEAL]] only activates if Smolder himself is hit by the breath", "E is interrupted by [[HARD_CC]]"]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 110,
    16: 100,
  },

};

export default smolder;
