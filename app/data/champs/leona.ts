import type { ChampData } from "../interactions/types";

const leona: ChampData = {
  id: "leona",
  skills: {
    P: ["ST_CONDITIONAL", "MARK"],
    Q: ["AA_RESET", "STUN"],
    W: ["DMG_REDUCE",],
    E: ["E_FLASH", "ROOT", "DASH", "WALL_HOP", "CC_BUFFER"],
    R: ["R_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
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
      { label: { ko: "표식", en: "Mark" }, tags: ["MARK_INTERACT", "Q", "W", "E", "R"] },
      { label: { ko: "표식 폭발", en: "Burst" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },

    Q: ["DMG_MAGIC", "ON_HIT", "MARK"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["BUFF_FORM"] },
      { label: { ko: "W 폭발", en: "W Burst" }, tags: ["DMG_MAGIC", "AOE", "MARK"] },
    ] },

    E: { phases: [
      { label: { ko: "찌르기단계", en: "Stab" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "MARK", "CC_BUFFER"] },
      { label: { ko: "돌진단계",   en: "Dash" }, tags: ["ST_CONDITIONAL", "DASH"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "MARK", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "소규모 한타 모두 좋은 챔프",
          "아군을 지킬 것인가 상대 뒷라인을 물것인가 전략을 잘 짜야 함.",
        ], en: [
          "A champion that's good in both skirmishes and full-scale teamfights.",
          "Plan carefully whether to protect your allies or dive the enemy backline.",
        ] },
      note1: {

        ko: [
          "P는 Q, W, E, R 스킬에 맞은 적에게 [[MARK]]. \n [[MARK]]은 아군이 공격하면 발동하여 [[DMG_MAGIC]].",

          "Q는 [[DMG_MAGIC]] [[STUN]].",

          "W는 받는 피해량 감소와 [[AR_MR_UP]] [[BUFF]]. \n 폭발하여 [[AOE]] [[DMG_MAGIC]]. \n 폭발에 적이 맞으면 [[BUFF]] 지속시간 연장.",

          "E는 [[AOE]] [[DMG_MAGIC]]. \n 마지막에 맞은 대상에게 [[ROOT]]하고 [[DASH]].",

          "R은 [[ZONE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 중앙에 맞은 대상은 [[SLOW]] 대신 [[STUN]].",
        ],

        en: [
          "P applies [[MARK]] to enemies hit by Q, W, E, or R. \n The [[MARK]] triggers [[DMG_MAGIC]] when an ally attacks the marked target.",

          "Q deals [[DMG_MAGIC]] and applies [[STUN]].",

          "W grants [[DMG_REDUCE]] and [[AR_MR_UP]] [[BUFF]]. \n It then bursts, dealing [[AOE]] [[DMG_MAGIC]]. \n If the burst hits an enemy, the [[BUFF]] duration is extended.",

          "E deals [[AOE]] [[DMG_MAGIC]]. \n It applies [[ROOT]] to the last target hit and [[DASH]]es to them.",

          "R deals [[ZONE]] [[DMG_MAGIC]] and applies [[SLOW]]. \n Targets hit at the center are [[STUN]]ned instead of [[SLOW]]ed.",
        ]

      },

      note2: {
        ko: [
        "E 스킬은 2단계로 나뉨 찌르기/돌진. \n 찌르기단계에서 레오나가 맞은 CC는 유효 하지만\n돌진단계가 발동되어 앞으로 이동하는 것. \n 돌진단계에는 CC 저항력 없음."
      ],
        en: [
          "E has two phases: stab / dash. \n CC that hits Leona during the stab phase is registered, \n but the dash phase still activates and she moves forward. \n The dash phase has no CC resistance."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 90,
    11: 75,
    16: 60,
  },

};

export default leona;
