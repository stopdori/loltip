import type { ChampData } from "../interactions/types";

const zaahen: ChampData = {
  id: "zaahen",
  skills: {
    P: ["AD_UP", "REVIVE"],
    Q: ["HEAL", "AA_RESET", "AIRBORNE"],
    W: ["W_FLASH", "STUN", "GRAB"],
    E: ["E_FLASH",],
    R: ["AR_PEN", "DMG_REDUCE", "LIFESTEAL", "WALL_HOP", "CC_IMMUNE", "UNSTOPPABLE"],
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
      { label: { ko: "패시브", en: "Passive" }, tags: ["BUFF_FORM", "BUFF_INTERACT", "BA", "Q", "W", "E", "R"] },
      { label: { ko: "부활", en: "Revive" }, tags: ["ST_CONDITIONAL", "UNTARGETABLE", "INVULNERABLE", "REVIVE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["DMG_PHYSICAL", "ON_HIT", "AIRBORNE"] },
    ] },

    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "STUN", "AIRBORNE"],

    E: { phases: [
      { label: { ko: "돌진단계", en: "Dash" }, tags: ["DASH"] },
      { label: { ko: "베기단계", en: "Slash" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "AOE"] },
      { label: { ko: "가장자리 피해", en: "Edge DMG" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "DMG_MAGIC", "AOE"] },
    ] },
    
    R: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["SKILL_CHANNEL", "TIMING_CAST", "LOCKED", "CC_IMMUNE"] },
      { label: { ko: "도약", en: "Leap" }, tags: ["ST_DELAYED", "SKILL_CHANNEL", "DASH", "LOCKED", "UNSTOPPABLE"] },
      { label: { ko: "착지", en: "Slam Down" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ZONE", "UNSTOPPABLE"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "[[E_FLASH]]은 정말 어렵게 되긴함", "P는 12스택 다 채우면 [[AD_UP]] 효과 두배\nP를 다 채워야 [[REVIVE]] 가능", "Q의 [[AIRBORNE]]은 Q2에만 적용", "R에 [[AR_PEN]]은 기본지속", "Q는 두단계로 나뉨. 돌진단계/베기단계\n돌진단계 중에 [[AIRBORNE]]류, [[CHARM]], [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 베기단계를 하지 않음.", "R은 시전할 때 [[CC_IMMUNE]], 도약하고 착지할 때까지 [[UNSTOPPABLE]]"
      ],
        en: ["[[E_FLASH]] works but is very difficult", "P at 12 stacks doubles [[AD_UP]].\nFull stacks required for [[REVIVE]]", "Q [[AIRBORNE]] only applies on Q2", "R [[AR_PEN]] is a passive effect"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default zaahen;
