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
      note3: { 
        ko: [
        "Q, W, E로 어그로끌다 R로 진입해서 각만들기.\n또는 R로 도망치기.", "R로 고립된 챔피언 암살.", "그냥 잘 싸우기."
        ], en: [
          "Poke with Q, W, and E, then dive in with R to find an opening.\nOr use R to escape.",
          "Use R to assassinate isolated champions.",
          "Just play well.",
        ] },
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

        en: [
        "Using a skill grants a P stack below the HP bar. \n Hitting [[BA]] consumes stacks to [[ENERGY_RESTORE]]. \n Using a skill then moving triggers [[DASH]].",
        "Weaving basic attacks between skills is recommended.",
        "Q1 hits the edge. \n Q2 deals heavy damage to the first target. \n Q2 is unavailable if Q1 misses.",
        "W provides [[SHIELD]] and area damage.",
        "E spins in place. \n [[DASH]] triggers E2 automatically. \n Without dashing, E2 does not activate.",
        "R's [[LIFESTEAL]] and [[AR_PEN]] are [[PASSIVE_BONUS]] effects — active as long as R is leveled. \n Effectively grants [[LIFESTEAL]] on all skills.",
        "R only hits the rearmost enemy champion in its path. \n [[SUPPRESS]] on impact, brief [[STUN]] and damage on landing. \n Following up with Q immediately is the standard combo.",
        ]

      },

      note2: {
        ko: [
        "암베사 P로 [[WALL_HOP]] 불가.", 
        "W는 0.5초의 시전시간이 있고 \n 그 사이에 공격을 당하면 강화된 피해를 가함.", 
        "R은 판정이 상당히 강력한 [[SUPPRESS]]. \n [[CC_BUFFER]]도 무시하고 그 자리에서 [[SUPPRESS]]함."
      ],
        en: ["[[WALL_HOP]] via Ambessa's P is not possible.", "W has a 0.5s cast time. \n If hit during that window, W deals empowered damage.", "R's [[SUPPRESS]] hitbox is notably powerful. \n It ignores [[CC_BUFFER]] and [[SUPPRESS]]es on the spot."]
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
