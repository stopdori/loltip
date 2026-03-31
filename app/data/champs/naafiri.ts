import type { ChampData } from "../interactions/types";

const naafiri: ChampData = {
  id: "naafiri",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["Q_FLASH", "LIFESTEAL"],
    W: ["W_FLASH", "AD_UP", "MS_UP", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["WALL_HOP"],
    R: ["WALL_HOP", "SLOW", "SHIELD"],
  },

  vision: {
    P: ["VISION"],
    Q: ["HIT_INDICATOR"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 패시브", en: "P Passive" }, tags: ["PASSIVE_INTERACT", "Q", "E", "R", "SUMMON"] },
      { label: { ko: "P 들개", en: "P Hounds" }, tags: ["DMG_PHYSICAL", "SINGLE", "VISION"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "DEBUFF_STACK"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "DEBUFF_STACK"] },
    ] },

    W: ["SKILL_CHANNEL", "SUMMON"],
    E: { phases: [
      { label: { ko: "E 돌진", en: "E Dash" }, tags: ["DMG_PHYSICAL", "AOE", "DASH"] },
      { label: { ko: "E 폭발", en: "E Explodes" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"] },
    ] },
    R: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "DASH"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "최대 무리의 수는 2~5마리인데, W를 사용하면 일시적으로 최대치를 넘을 수 있음. (4~7마리)", "Q1, Q2는 출혈이 있음.\nQ는 2타가 [[LIFESTEAL]].", "R은 원래는 기본 스킬이었지만, 리워크 되면서 궁으로 바뀌었는데 앞에서 가로 막아주기가 없어짐\n하지만 R은 CC로 끊길 수 있음", "E는 두단계로 나뉨. 돌진단계/폭발단계\n돌진단계 중에 [[AIRBORNE]]류, [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 폭발 단계를 하지 않음.\n 폭발 단계의 데미지가 훨씬 쌤.", "R을 시전하거나 돌진중일때 상대와의 거리가 너무 멀어지면 스킬이 취소 되고 재사용 대기시간이 됨.", "R은 사용하고 7초이내 킬관여 하면 초기화\n처음 사용에는 [[SHIELD]]이 없고\n초기화 궁은 사용하면 생김\n초기화 궁은 사용하지 않으면 사라짐",
      ],
        en: ["Q's second hit applies [[LIFESTEAL]]", "R was originally a basic skill that was reworked into an ultimate. As a result it no longer has allies blocking for it.\nHowever, R can still be interrupted by CC", "R resets if Naafiri kills or assists within 7s.\nThe initial cast has no [[SHIELD]], but the reset cast grants [[SHIELD]] on use.\nThe reset disappears if unused"]
        },
    },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default naafiri;
