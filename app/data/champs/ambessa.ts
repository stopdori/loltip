import type { ChampData } from "../interactions/types";

const ambessa: ChampData = {
  id: "ambessa",
  skills: {
    P: ["RANGE_UP", "AS_UP", "ENERGY_RESTORE"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "SHIELD"],
    E: ["E_FLASH", "SLOW"],
    R: ["LIFESTEAL", "AR_PEN", "SUPPRESS", "STUN", "WALL_HOP", "UNSTOPPABLE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P", en: "P" }, tags: ["DASH"] },
      { label: { ko: "버프스택", en: "BUFF_STACK"  }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
    ] },
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"] },
    ] },
    W: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"],
    E: ["DMG_PHYSICAL", "AOE", "BUFF_STACK"],
    R: ["PASSIVE_BONUS", "DMG_PHYSICAL", "TIMING_CAST", "LOCKED", "SINGLE", "BLINK", "BUFF_STACK", "UNSTOPPABLE"],
  },

  notes: {
    ko: [
    "암베사 P로 [[WALL_HOP]] 불가.", "P의 [[ENERGY_RESTORE]]은 QWER스킬을 사용하면 P([[BUFF_STACK]])스택이 쌓이고, 평타를 치면 스택을 소모하여 기력을 회복.", "Q1를 맞히면 Q2를 사용 할 수 있게됨.\nQ1을 맞히지 못하면 Q2 없음.", "R의 스킬의 [[LIFESTEAL]], [[AR_PEN]]은 [[PASSIVE_BONUS]].\n스킬 찍으면 항상 발동.\n사실상 모든스킬 피흡.", "R은 경로상 맨 뒤 적챔피언만 적중."
  ],
    en: ["[[WALL_HOP]] via Ambessa's P is not possible.", "P's [[ENERGY_RESTORE]] builds P (buff) stacks by using QWER skills, and consumes those stacks with basic attacks to restore energy.", "Hitting Q1 enables Q2. Missing Q1 means no Q2.", "R's [[LIFESTEAL]] and [[AR_PEN]] are baseline passive effects that activate whenever R is leveled — effectively all skills lifesteal.", "R only hits the rearmost enemy champion in its path."]
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default ambessa;
