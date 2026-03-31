import type { ChampData } from "../interactions/types";

const akshan: ChampData = {
  id: "akshan",
  skills: {
    P: ["SHIELD", "MS_UP"],
    Q: ["Q_FLASH", "PIERCE"],
    W: ["CAMOUFLAGE", "MS_UP", "REVIVE"],
    E: [],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: ["FEEDBACK_INDICATOR"],
    W: ["ST_CONDITIONAL", "FEEDBACK_INDICATOR"],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P1~P2", en: "P1~P2" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "DEBUFF_STACK"] },
      { label: { ko: "P3", en: "P3"  }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "DEBUFF_STACK", "PROC"]},
    ] },
    Q: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE", "DEBUFF_STACK"],
    W: [],
    E: ["DMG_PHYSICAL", "SKILL_CHANNEL", "SKILL_TOGGLE", "PROJECTILE", "DASH", "DEBUFF_STACK"],
    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "SKILL_TOGGLE", "PROJECTILE", "TARGETED", "HOMING", "DEBUFF_STACK"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P는 평타를 때리면 기본으로 2번 공격하는데, 2번 공격하기 전에 움직여서 취소하면 이동속도 증가.\n적에게 쌓이는 별도의 스택이 3스택일때 추가 피해.", "Q는 대상에 적중하면 [[PIERCE]]하고 사거리 추가.\n적중하지 않을 때 까지 반복.", "W의 [[REVIVE]]은 특정조건에 발동.\n악당은 아군 챔피언을 처치하면 60초간 표식이 생김.\n악당을 3초 내에 처치/관여하면, 그에게 죽었던 아군만 즉시 [[REVIVE]].\n다른 악당표식은 바로 사라짐.", "E는 벽을 타고, 우클릭 착지보다 상대 근처에서 E 재사용으로 착지해야 딜로스 적음.", "R을 시전중 E로 벽타기 가능.", "R(시전 집중)로 지정한 대상이 [[CAMOUFLAGE]], [[INVISIBILITY]]을 하면 모습이 보임.\nR로 대상에게 발사 했을때 [[CAMOUFLAGE]], [[INVISIBILITY]]를 하면 모습은 보이지 않지만 R은 날아감."
      ],
        en: ["P's basic attack is a double hit by default. Moving to cancel before the second hit triggers a movement speed increase.\nBonus damage is dealt when the separate stack on an enemy reaches 3.", "Q [[PIERCE]]s on hit and gains bonus range, repeating until it misses", "W's [[REVIVE]] triggers under specific conditions.\nA Scoundrel is an enemy who killed an ally within 60s.\nKilling or assisting a Scoundrel within 3s instantly [[REVIVE]]s allies that Scoundrel killed.\nOther Scoundrel marks are removed", "E scales along walls. Landing near the target via E reuse causes less DPS loss than right-clicking to land", "Can wall-travel with E while channeling R", "If the target uses [[CAMOUFLAGE]] or [[INVISIBILITY]] while R is channeling/targeting, they become visible.\nIf they go invisible after R is fired, they become hidden but R still tracks them."]
        },
    },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default akshan;
