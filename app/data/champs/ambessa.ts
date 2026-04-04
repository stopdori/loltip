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
      { label: { ko: "버프스택 온힛", en: "Buff Stack On-hit"  }, tags: ["DMG_PHYSICAL", "ON_HIT", "STACK_CONSUME", "RANGE_UP", "AS_UP"] },
    ] },
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK"] },
    ] },
    W: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "SHIELD"],
    E: ["DMG_PHYSICAL", "AOE", "BUFF_STACK", "SLOW"],
    R: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "LIFESTEAL", "AR_PEN"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "LOCKED", "SINGLE", "BLINK", "BUFF_STACK", "SUPPRESS", "STUN", "UNSTOPPABLE"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [
        "스킬을 사용하면 체력바 밑에 P스택을 주고 \n [[BA]]를 치면 스택을 소모하여 [[ENERGY_RESTORE]]. \n 스킬을 사용하고 이동을 하면 [[DASH]].",
        "그래서 스킬 스킬 사이에 평타를 섞어주면 좋음.",
        "Q1은 가장자리. \n Q2는 처음대상에게 강한 피해. \n Q1을 맞히지 못하면 Q2 사용 불가.", 
        "W는 [[SHIELD]], 주변피해",
        "E는 제자리에서 회전하고 \n [[DASH]]하면 E2 자동시전. \n [[DASH]]하지 않으면 E2발동 없음.",
        "R의 스킬의 [[LIFESTEAL]], [[AR_PEN]]은 [[PASSIVE_BONUS]]. \n 스킬 찍으면 항상 발동. \n 그래서 사실상 모든스킬 [[LIFESTEAL]].",
        "R은 경로상 맨 뒤 적챔피언만 적중. \n [[SUPPRESS]]하고 착지할 때 잠깐의 [[STUN]]과 데미지. \n 끝나고 바로 Q를 쓰는게 국민콤보.",


        ],

        en: []

      },

      note2: {
        ko: [
        "암베사 P로 [[WALL_HOP]] 불가.", "W는 0.5초의 시전시간이 있고 \n 그 사이에 공격을 당하면 강화된 피해를 가함."
      ],
        en: ["[[WALL_HOP]] via Ambessa's P is not possible.", "P's [[ENERGY_RESTORE]] builds P (buff) stacks by using QWER skills, and consumes those stacks with basic attacks to restore energy.", "Hitting Q1 enables Q2. Missing Q1 means no Q2.", "R's [[LIFESTEAL]] and [[AR_PEN]] are baseline passive effects that activate whenever R is leveled — effectively all skills lifesteal.", "R only hits the rearmost enemy champion in its path."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default ambessa;
