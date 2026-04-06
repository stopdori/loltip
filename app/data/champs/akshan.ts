import type { ChampData } from "../interactions/types";

const akshan: ChampData = {
  id: "akshan",
  skills: {
    P: ["SHIELD", "MS_UP"],
    Q: ["Q_FLASH", "PIERCE"],
    W: ["CAMOUFLAGE", "MS_UP", "MANA_RESTORE", "REVIVE"],
    E: ["DASH"],
    R: ["R_FLASH", "TRUE_SIGHT"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: ["ST_CONDITIONAL", "HIT_INDICATOR"],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P1~P2", en: "P1~P2" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "DEBUFF_STACK"] },
      { label: { ko: "P3", en: "P3"  }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "DEBUFF_STACK", "PROC"]},
    ] },
    Q: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE", "DEBUFF_STACK"],
    W: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "TARGET_ALLY", "REVIVE"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["TIMING_CAST", "SEPARATOR", "ST_CONDITIONAL", "CAMOUFLAGE", "MANA_RESTORE"] },
    ] },
    
    E: ["DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "DASH", "DEBUFF_STACK", "CANCELLABLE", "SKILL_RECAST"],

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SKILL_CHANNEL", "TARGETED"] },
      { label: { ko: "발사", en: "Release" }, tags: ["DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "HOMING", "LOCKED", "DEBUFF_STACK"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
        "작성자가 할줄 모름."

        ], en: [
        "Author doesn't know how to play this one."
        ] },
      note1: {

        ko: [
        "기본 평타가 두발씩 나감. \n 한대만 쏘고 움직이면 [[MS_UP]]", "적에게 평타, 스킬로 스택을 쌓고 \n 3개 쌓이면 추가피해. \n 대상이 챔피언이면 [[SHIELD]]가 생김.",
        "Q는 적중하면 [[PIERCE]]하고 [[RANGE_UP]]. \n 무한히 반복.",
        "W([[CAMOUFLAGE]])는 수풀, 벽에 붙어야 유지됨. \n 위장 중에는 악당에게 향하는 길이 생기고 \n 따라가면 [[MS_UP]], [[MANA_RESTORE]].", 
        "E(벽타기) 회전 중에 다른 행동하면 내려짐 \n E는 재사용으로 내려야 딜로스 적음.",
        "R은 시전중에 E로 회전할 수 있음.",
        "아군 챔피언을 처치한 적은 악당이 되고 \n 악당을 처치하면 악당에게 죽은 아군만 [[REVIVE]]",

        ],

        en: [
        "Basic attack fires two shots. \n Moving to cancel after the first grants [[MS_UP]].",
        "Build stacks on an enemy with basic attacks and skills. \n At 3 stacks, deal bonus damage. \n If the target is a champion, gain a [[SHIELD]].",
        "Q [[PIERCE]]s on hit and gains [[RANGE_UP]]. \n This repeats indefinitely.",
        "W's [[CAMOUFLAGE]] is maintained only near a bush or wall. \n While camouflaged, a path appears toward the Scoundrel. \n Following it grants [[MS_UP]] and [[MANA_RESTORE]].",
        "Any action while spinning on E cancels it. \n Dismounting via E recast minimizes DPS loss.",
        "E can be used while channeling R.",
        "Enemies who kill allied champions become Scoundrels. \n Killing a Scoundrel [[REVIVE]]s only the ally they killed.",
        ]

      },

      note2: {
        ko: [
        "[[REVIVE]]은 특정조건에 발동. \n 아군 챔피언을 처치하면 악당이 되고 60초간 표식이 생김.\n악당을 3초 내에 처치/관여하면 \n 그에게 죽었던 아군만 즉시 [[REVIVE]].\n다른 악당표식은 바로 사라짐.", "R(시전 집중)로 지정한 대상이 [[CAMOUFLAGE]], [[INVISIBILITY]]을 하면 모습이 보임.\nR로 대상에게 발사 했을때 [[CAMOUFLAGE]], [[INVISIBILITY]]를 하면 모습은 보이지 않지만 R은 날아가고 실루엣이 보임."
      ],
        en: ["P's basic attack is a double hit by default. Moving to cancel before the second hit triggers a movement speed increase.\nBonus damage is dealt when the separate stack on an enemy reaches 3.", "Q [[PIERCE]]s on hit and gains bonus range, repeating until it misses", "W's [[REVIVE]] triggers under specific conditions.\nA Scoundrel is an enemy who killed an ally within 60s.\nKilling or assisting a Scoundrel within 3s instantly [[REVIVE]]s allies that Scoundrel killed.\nOther Scoundrel marks are removed", "E scales along walls. Landing near the target via E reuse causes less DPS loss than right-clicking to land", "Can wall-travel with E while channeling R", "If the target uses [[CAMOUFLAGE]] or [[INVISIBILITY]] while R is channeling/targeting, they become visible.\nIf they go invisible after R is fired, they become hidden but R still tracks them."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default akshan;
