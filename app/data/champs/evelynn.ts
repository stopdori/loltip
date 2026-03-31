import type { ChampData } from "../interactions/types";

const evelynn: ChampData = {
  id: "evelynn",
  skills: {
    P: ["CAMOUFLAGE", "HEAL"],
    Q: [],
    W: ["W_FLASH", "SLOW", "CHARM", "MR_SHRED"],
    E: ["E_FLASH", "MS_UP", "WALL_HOP"],
    R: ["WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
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
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "Q2~Q4", en: "Q2~Q4"  }, tags: ["DMG_MAGIC", "PROJECTILE", "HOMING", "PIERCE"] },
    ] },
    W: ["DMG_MAGIC", "TARGETED", "TIMING_CAST", "MARK", ],
    E: { phases: [
      { label: { ko: "E", en: "E"  }, tags: ["DMG_MAGIC", "TIMING_CAST"] },
      { label: { ko: "E 위장", en: "E Camouflage"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "DASH"] },
    ] },
    R: ["DMG_MAGIC", "AOE", "BLINK"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[CAMOUFLAGE]] 중 점멸써도 [[CAMOUFLAGE]] 안풀림", "W에 [[CHARM]], [[MR_SHRED]]은 추가발동 느낌으로\n표식이 다 찬 대상을 공격해야 발동", "E의 돌진은 [[CAMOUFLAGE]]중일 때 강화\nE가 정말 어려운 조건에서 [[WALL_HOP]] 가능", "R은 체력 30%이하 대상에게 피해증가"
      ],
        en: ["[[CAMOUFLAGE]] does not break on flash", "W's [[CHARM]] and [[MR_SHRED]] are secondary effects triggered only by attacking a target with full stacks", "E's dash is empowered while in [[CAMOUFLAGE]].\nE can [[WALL_HOP]] under very specific conditions", "R deals increased damage to targets below 30% HP"]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default evelynn;
