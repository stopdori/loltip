import type { ChampData } from "../interactions/types";

const garen: ChampData = {
  id: "garen",
  skills: {
    P: ["ST_CONDITIONAL", "HP_REGEN"],
    Q: ["AA_RESET", "SLOW_CLEANSE", "MS_UP", "SEPARATOR", "SILENCE"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ON_KILL", "STACKING", "SEPARATOR", "PER_STACK", "AR_MR_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_REDUCE", "TENACITY", "SEPARATOR", "SHIELD"] },
    ] },

    E: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "AR_SHRED"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "BUFF"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["AA_RESET", "SLOW_CLEANSE", "MS_UP"] },
      { label: { ko: "Q 타격", en: "Q Strike" }, tags: ["DMG_PHYSICAL", "LUNGE", "ON_HIT", "SEPARATOR", "SILENCE"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ON_KILL", "STACKING", "SEPARATOR", "PER_STACK", "AR_MR_UP"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_REDUCE", "TENACITY", "SEPARATOR", "SHIELD"] },
    ] },

    E: ["DMG_PHYSICAL", "SKILL_TOGGLE", "AOE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "ADDITIONAL", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AR_SHRED"],

    R: ["DMG_TRUE", "TARGETED", "TIMING_CAST"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 8초동안 피해를 입지 않으면 \n [[LEVEL_SCALE]] 비례, [[SELF_MAXHP_SCALE]] 비례 [[HP_REGEN]]. \n 미니언에게는 영향 없음. \n \n",

          "Q는 사용시 [[SLOW_CLEANSE]], [[MS_UP]]. \n 다음 공격 시 [[DMG_PHYSICAL]]와 [[SILENCE]]. \n \n",

          "W의 [[PASSIVE_BONUS]]는 유닛 [[ON_KILL]] [[STACKING]]. \n [[PER_STACK]] [[AR_MR_UP]] 0.2 증가. (최대 30)", 
          "W는 4초간 [[DMG_REDUCE]] \n 0.75초간 [[TENACITY]]과 \n [[SELF_BONUS_HP_SCALE]] 비례 [[SHIELD]]. \n \n",

          "E는 가렌이 회전하여 [[AOE]] [[DMG_PHYSICAL]]. \n 가장 가까운 대상은 [[DMG_PHYSICAL]] 25% 증가. \n 6회 맞으면 [[AR_SHRED]] [[DEBUFF]] 적용. (여러 대상 가능). \n \n",

          "R은 [[TARGETED]] 공격. \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_TRUE]].",
        ],

        en: ["P: if Garen takes no damage for 8 seconds, \n he gains [[HP_REGEN]] based on [[LEVEL_SCALE]] and [[SELF_MAXHP_SCALE]]. \n Minions have no effect on it. \n \n",
          "Q grants [[SLOW_CLEANSE]] and [[MS_UP]] on use. \n The next attack deals [[DMG_PHYSICAL]] and [[SILENCE]]. \n \n",
          "W's [[PASSIVE_BONUS]] is [[STACKING]] on unit [[ON_KILL]]. \n [[AR_MR_UP]] +0.2 [[PER_STACK]]. (Max 30)",
          "W grants [[DMG_REDUCE]] for 4 seconds, \n plus [[TENACITY]] for 0.75 seconds and \n a [[SHIELD]] based on [[SELF_BONUS_HP_SCALE]]. \n \n",
          "E makes Garen spin, dealing [[AOE]] [[DMG_PHYSICAL]]. \n The nearest target takes 25% increased [[DMG_PHYSICAL]]. \n Targets hit 6 times receive an [[AR_SHRED]] [[DEBUFF]]. (Can apply to multiple targets.) \n \n",
          "R is a [[TARGETED]] attack. \n [[DMG_TRUE]] based on [[TARGET_MISSING_HP_SCALE]]."
        ]

      },

      note2: {
        ko: [
        "E는 [[AS_SCALE]] 25%당 회전이 1회 추가. \n [[CRIT]] 적용 가능."
      ],
        en: ["E gains 1 extra spin per 25% [[AS_SCALE]]. \n [[CRIT]] can apply."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Garen,
  // 최근 변경 V26.14 — R 기본 피해 125/200/275 반영). DDragon effectBurn/vars가 비어 있어 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_garenpassive_tooltip)을 사용.
  skillTooltip: {
    P: {
      ko: "가렌이 8초 동안 피해를 입지 않거나 적의 스킬에 맞지 않으면 5초마다 [[SELF_MAXHP_SCALE]]의 1.5~10.1%([[LEVEL_SCALE]] 비례)만큼 [[HEAL]]합니다.",
      en: "If Garen hasn't taken damage or been hit by an enemy skill for 8 seconds, he [[HEAL]]s for 1.5~10.1% (based on [[LEVEL_SCALE]]) of [[SELF_MAXHP_SCALE]] every 5 seconds.",
    },
    Q: {
      ko: "가렌에게 적용된 모든 둔화 효과가 제거되고([[SLOW_CLEANSE]]) 1.4/1.95/2.5/3.05/3.6초 동안 35%의 [[MS_UP]]를 얻습니다. \n \n 다음 [[BA]]는 1.5초 동안 [[SILENCE]]시키고 30/60/90/120/150(+50% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 8초의 [[COOLDOWN]].",
      en: "Garen removes all slows affecting him ([[SLOW_CLEANSE]]) and gains 35% [[MS_UP]] for 1.4/1.95/2.5/3.05/3.6 seconds. \n \n His next [[BA]] [[SILENCE]]s the target for 1.5 seconds and deals 30/60/90/120/150 (+50% [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n 8 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 가렌이 유닛을 [[ON_KILL]] 영구적으로 0.2의 [[AR_MR_UP]] 되어 최대 30까지 증가합니다. ([[STACKING]]) \n \n 사용 시: 가렌이 4초 동안 용기백배하여 받는 피해가 25/29/33/37/41% [[DMG_REDUCE]]됩니다. \n 또한 0.75초 동안 65/85/105/125/145(+18% [[SELF_BONUS_HP_SCALE]])의 피해를 흡수하는 [[SHIELD]]와 60%의 [[TENACITY]]을 얻습니다. \n \n 22/19.5/17/14.5/12초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Whenever Garen gets an [[ON_KILL]] on a unit, he permanently gains 0.2 [[AR_MR_UP]], up to a maximum of 30. ([[STACKING]]) \n \n Active: Garen braces himself with courage for 4 seconds, gaining 25/29/33/37/41% [[DMG_REDUCE]]. \n He also gains a [[SHIELD]] that absorbs 65/85/105/125/145 (+18% [[SELF_BONUS_HP_SCALE]]) damage and 60% [[TENACITY]] for 0.75 seconds. \n \n 22/19.5/17/14.5/12 second [[COOLDOWN]].",
    },
    E: {
      ko: "가렌이 3초 동안 [[GHOSTING]] 상태가 됩니다. \n 검을 들고 빠르게 회전하여 4/7/10/13/16(+40/43/46/49/52% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 7회 입힙니다. \n 가장 가까운 적을 대상으로는 피해량이 25% 증가합니다. \n 공격에 6번 맞은 챔피언은 6초 동안 25%의 [[AR_SHRED]]가 적용됩니다. \n \n E [[RECAST_CANCEL]]로 스킬을 일찍 종료할 수 있습니다. \n \n 9/8.25/7.5/6.75/6초의 [[COOLDOWN]].",
      en: "Garen becomes [[GHOSTING]] for 3 seconds. \n He rapidly spins his sword, dealing 4/7/10/13/16 (+40/43/46/49/52% [[AD_SCALE]]) [[DMG_PHYSICAL]] 7 times. \n Damage against the nearest enemy is increased by 25%. \n Champions hit 6 times receive 25% [[AR_SHRED]] for 6 seconds. \n \n The skill can be ended early with E [[RECAST_CANCEL]]. \n \n 9/8.25/7.5/6.75/6 second [[COOLDOWN]].",
    },
    R: {
      ko: "가렌이 적을 처단할 데마시아의 힘을 소환하여 125/200/275+[[TARGET_MISSING_HP_SCALE]]의 25/30/35%에 해당하는 [[DMG_TRUE]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Garen calls upon the might of Demacia to execute an enemy, dealing [[DMG_TRUE]] equal to 125/200/275 + 25/30/35% of [[TARGET_MISSING_HP_SCALE]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default garen;
