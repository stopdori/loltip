import type { ChampData } from "../interactions/types";

const kennen: ChampData = {
  id: "kennen",
  skills: {
    P: ["STUN", "ENERGY_RESTORE"],
    Q: [],
    W: [],
    E: ["AS_UP", "MS_UP", "GHOSTING", "BUFF_FORM"],
    R: ["R_FLASH", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DEBUFF_INTERACT", "Q", "W", "E"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "TARGETED", "PROJECTILE", "ON_HIT", "DEBUFF_STACK"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "HOMING", "DEBUFF_STACK"] },
    ] },

    E: ["BUFF_FORM", "BUFF", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_MAGIC", "SKILL_TOGGLE", "AOE", "DEBUFF_STACK"],
    R: ["BUFF_FORM", "TIMING_CAST", "DMG_MAGIC", "AOE", "LOCKED", "DEBUFF_STACK"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "AP 케넨 \n 정면 싸움보다 상대의 옆이나 뒤에서 등장해야 좋음. \n E로 [[MS_UP]] 하고 \n  몸으로 부딪히면서 R로 비비면 캐리. \n 마무리로 W까지 딱.", "AD 케넨 \n 그냥 사이드가는 원딜이라 생각. \n 한타에서도 원딜처럼 하는게 좋은듯."
        ], en: [
          "AP Kennen \n Better to flank from the side or behind rather than fighting head-on. \n Use E for [[MS_UP]], \n  dive in with your body while channeling R — that's the carry play. \n Finish with W.",
          "AD Kennen \n Think of it as just a side-laning ADC. \n Playing like an ADC in teamfights seems to work best.",
        ] },
      note1: {

        ko: [
          "P는 다른 스킬로 명중 시 [[DEBUFF]]. \n 3스택 시 [[STUN]] 및 [[ENERGY_RESTORE]].",

          "Q는 명중 시 [[DEBUFF]]",

          "W의 [[PASSIVE_BONUS]]는 \n [[BA]]를 때릴 때마다 [[BUFF_STACK]]. \n 5스택 마다 [[BA]]강화 \n \n W는 주변에 이미 [[DEBUFF]]가 있는 대상 모두에게 \n [[DMG_MAGIC]]와 [[DEBUFF]] 추가.",

          "E는 [[MS_UP]]와 번개 구체로 [[TRANSFORM]]. \n 이때 [[BA]] 불가. \n 몸으로 부딪힌 대상 [[DMG_MAGIC]]와 [[DEBUFF]]. \n 하나라도 부딪히면 [[ENERGY_RESTORE]]. \n [[TRANSFORM]] 끝나면 [[AS_UP]] [[BUFF]]. \n 지속시간 동안 [[BA]]로 [[CRIT]] 발동 시 지속시간 초기화.",

          "R은 [[AR_MR_UP]]. \n 주변에 번개장 생성하고 [[DEBUFF]]를 최대 3개 부여. \n 맞는 대상은 틱당 데미지 증가. \n 총 6틱 시전.",
        ],

        en: [
          "P applies [[DEBUFF]] on hit from other skills. \n At 3 stacks, triggers [[STUN]] and [[ENERGY_RESTORE]].",

          "Q applies [[DEBUFF]] on hit.",

          "W's [[PASSIVE_BONUS]] gains [[BUFF_STACK]] with each [[BA]]. \n Every 5 stacks empowers [[BA]]. \n \n W deals [[DMG_MAGIC]] and adds [[DEBUFF]] to all nearby targets that already have [[DEBUFF]].",

          "E grants [[MS_UP]] and [[TRANSFORM]]s into a lightning ball. \n [[BA]] is disabled during this form. \n Enemies collided with take [[DMG_MAGIC]] and gain [[DEBUFF]]. \n Hitting at least one enemy restores [[ENERGY_RESTORE]]. \n After [[TRANSFORM]] ends, grants [[AS_UP]] [[BUFF]]. \n Landing a [[CRIT]] via [[BA]] during the duration resets the duration.",

          "R grants [[AR_MR_UP]]. \n Creates a lightning field, applying up to 3 [[DEBUFF]] stacks. \n Damage per tick increases for affected enemies. \n Total of 6 ticks.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "P의 [[DEBUFF]] 3스택으로 [[STUN]]을 걸면 \n 대상에게 폭풍의 여파라는 추가 [[DEBUFF]]가 생기는데 \n 이 [[DEBUFF]]는 [[STUN]]의 지속시간을 줄여줌.", "W의 [[BUFF_STACK]]은 타워를 때려도 쌓이지만 \n 소모할 수는 없음.", "E는 직접 해제가 가능하지만 \n CC 걸린 동안은 스스로 해제할 수 없음.", "R은 지속시간이 끝나기 전까지 해제할 수 없음.", "R에 맞은 대상에게 W를 사용할 수 있지만 \n R이 끝나면 W의 조건이 사라짐."
      ],
        en: [
          "[[Q_FLASH]] not available.",
          "When [[STUN]] is triggered by P's 3 [[DEBUFF]] stacks, \n the target gains an additional [[DEBUFF]] called 'Storm's Aftershock' \n which reduces the [[STUN]] duration.",
          "W's [[BUFF_STACK]] can be gained by hitting towers, \n but cannot be consumed on them.",
          "E can be manually canceled, \n but cannot be self-canceled while under CC.",
          "R cannot be canceled before its duration ends.",
          "W can be used on targets hit by R, \n but the condition is lost once R ends."
        ]
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

};

export default kennen;
