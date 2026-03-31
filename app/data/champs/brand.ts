import type { ChampData } from "../interactions/types";

const brand: ChampData = {
  id: "brand",
  skills: {
    P: ["MANA_RESTORE"],
    Q: ["Q_FLASH", "STUN"],
    W: ["W_FLASH"],
    E: [],
    R: ["SLOW"],
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
      { label: { ko: "불길", en: "Blaze" }, tags: ["DMG_MAGIC", "DOT", "DEBUFF_STACK", "PROC"] },
      { label: { ko: "폭발", en: "Burst"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE"] },
    ] },
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK"],
    W: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "ST_DELAYED", "DEBUFF_STACK"],
    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "CHAIN", "DEBUFF_STACK"],
    R: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "CHAIN", "DEBUFF_STACK"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P는 스킬로 적을 맞히면 발동.\n3중첩이면 큰 피해 추가발동.", "P의 [[MANA_RESTORE]]회복은 불길 대상을 처치시 발동.\n불길은 스킬을 맞히면 3스택까지 적중\n3스택시 광역 폭발\n아이템 효과로 [[DEBUFF_STACK]] 축적 안됨(벨트, 루덴 등등)", "Q의 [[STUN]]은 이미 불길이 걸려있는 대상에게만 발동 됨. (예- WQ, EQ, RQ)","R의 [[SLOW]]는 불길이 있는상태에만 걸림"
      ],
        en: ["P triggers when hitting enemies with skills.\nAt 3 stacks, it deals a large additional hit.", "P's [[MANA_RESTORE]] triggers when killing a target with Blaze.\nBlaze stacks up to 3 per target from skills.\nAt 3 stacks it triggers an AoE explosion.\nItem effects (e.g. Liandry's, Luden's) don't stack [[DEBUFF_STACK]]", "Q's [[STUN]] only applies to targets already affected by Blaze (e.g. WQ, EQ, RQ)", "R's [[SLOW]] only applies to targets already affected by Blaze"]
        },
    },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default brand;
