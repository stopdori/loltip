import type { ChampData } from "../interactions/types";

const brand: ChampData = {
  id: "brand",
  skills: {
    P: { phases: [
      { label: { ko: "불길, 불길 폭발", en: "Blaze and Burst" }, tags: ["ST_CONDITIONAL"] },
      { label: { ko: "마나 회복", en: "Mana Restore" }, tags: ["ST_CONDITIONAL", "MANA_RESTORE"] },
    ] },
    
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["W_FLASH"],
    E: [],
    R: ["ST_CONDITIONAL", "SLOW"],
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
      { label: { ko: "폭발", en: "Burst"  }, tags: ["ST_CONDITIONAL", "ST_DELAYED", "DMG_MAGIC", "AOE"] },
      { label: { ko: "마나 회복", en: "Mana Restore" }, tags: ["ST_CONDITIONAL", "MANA_RESTORE"] },
    ] },
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "ST_DELAYED", "DEBUFF_STACK"],
    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "CHAIN", "DEBUFF_STACK"],
    R: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "CHAIN", "DEBUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "W, Q로 포킹하다 뒷라인에 R뿌리기", "앞라인부터 침착하게 때리면서 광역피해 주기"
        ], en: [
          "Poke with W and Q, then toss R into the backline.",
          "Calmly hit the frontline to spread AoE damage.",
        ] },
      note1: {

        ko: [
          "P의 불길([[DEBUFF]])은 스킬로 적을 맞히면 발동. \n 3중첩이면 폭발해 광역 피해. \n [[MANA_RESTORE]]은 [[DEBUFF]]인 대상 처치시 발동.",
          "Q의 [[STUN]]은 [[DEBUFF]]가 이미 걸려있는 대상에게만 발동. \n (예- WQ, EQ, RQ)",
          "W는 광역 장판피해.",
          "E는 대상에게 폭발을 일으키고 주변에 [[CHAIN]]. \n [[DEBUFF]]가 이미 있던 대상이라면 [[CHAIN]] 범위 2배.",
          "R은 적중하고 주변에 최대 4번 튕길 수 있음. \n (본인 포함) \n [[DEBUFF]]가 적은 대상 먼저 튕긴다고 하지만 \n 실제 작동은 그렇게 하지 않는 것 같음. \n R의 [[SLOW]]는 불길이 있는상태에만 걸림",

        ],

        en: [
          "P's Blaze ([[DEBUFF]]) triggers when hitting enemies with skills.\nAt 3 stacks it explodes for AoE damage.\n[[MANA_RESTORE]] triggers when killing a target with [[DEBUFF]].",
          "Q's [[STUN]] only applies to targets already affected by [[DEBUFF]].\n(e.g. WQ, EQ, RQ)",
          "W deals AoE damage in a zone.",
          "E detonates the target and [[CHAIN]]s to nearby enemies.\nIf the target already has [[DEBUFF]], the [[CHAIN]] range doubles.",
          "R bounces up to 4 times to nearby targets (including the original).\nIt's said to prioritize targets with fewer stacks, but in practice it doesn't seem to work that way.\nR's [[SLOW]] only applies to targets already affected by [[DEBUFF]].",
        ]

      },

      note2: {
        ko: [
        
      ],
        en: []
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default brand;
