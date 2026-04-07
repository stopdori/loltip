import type { ChampData } from "../interactions/types";

const corki: ChampData = {
  id: "corki",
  skills: {
    P: [],
    Q: ["Q_FLASH", "REVEALED"],
    W: ["W_FLASH", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "BUFF_FORM", "AR_MR_SHRED"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: ["VISION", "REVEALED"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_TRUE", "ON_HIT"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"],
    W: ["DMG_MAGIC", "PROJECTILE", "ZONE", "DOT", "DASH"],
    E: ["BUFF_FORM", "LOCKED", "DMG_PHYSICAL", "AOE", "DOT", "AR_MR_SHRED"],
    R: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "AOE", "RECHARGE"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "순간 폭딜이 상당히 강한편 \n E의 [[AR_MR_SHRED]]에 각종 [[DMG_TRUE]]도 있어서 \n 앞 라인부터 때려도 충분한 화력이 나옴.", "자리를 잘 잡고 카이팅 열심히 하기. \n W로 상대 노림수 흘리기."
        ], en: [
          "Burst damage is quite strong.\nWith E's [[AR_MR_SHRED]] and various [[DMG_TRUE]] effects,\nhitting the frontline first still puts out enough damage.",
          "Position well and kite consistently.\nUse W to dodge enemy engages.",
        ] },
      note1: {

        ko: [
          "P는 기본공격과 주문검(아이템) 효과에 [[DMG_TRUE]] 추가.",
          "Q는 범위 [[DMG_MAGIC]]에 맞은 대상은 [[REVEALED]].",
          "W는 [[DASH]]하면서 경로에 [[ZONE]]을 깔고 \n [[DOT]] 피해를 줌.",
          "E는 4초동안 [[DOT]] [[DMG_PHYSICAL]]. 틱당 [[AR_MR_SHRED]]. \n 스킬을 찍을수록 [[AR_MR_SHRED]] 최대량 증가.",
          "R은 [[RECHARGE]]식 체력바 밑에 남은 개수가 보임. \n 최대 4개까지 보유 가능. 상대도 볼 수 있음. \n 빨간색 미사일은 2배 피해. \n 챔피언에게 [[BA]]를 때리면 [[CRIT]] 비례 쿨타임 감소.",
        ],

        en: [
          "P adds [[DMG_TRUE]] to basic attacks and Spellblade (item) effects.",
          "Q deals AoE [[DMG_MAGIC]] and [[REVEALED|reveals]] targets it hits.",
          "W [[DASH]]es and leaves a [[ZONE]] along the path that deals [[DOT]] damage.",
          "E deals [[DOT]] [[DMG_PHYSICAL]] for 4 seconds.\nEach tick applies [[AR_MR_SHRED]].\nMax [[AR_MR_SHRED]] increases with rank.",
          "R uses [[RECHARGE]] — the remaining count is shown below the health bar and is visible to enemies.\nThe red missile deals double damage.\nAuto-attacking a champion reduces R's recharge time based on [[CRIT]].",
        ]

      },

      note2: {
        ko: [
        "[[R_FLASH]]은 R누르고 바로 점멸하면 안됨.\nR누르고 점멸을 약간 천천히 써야 적용."
      ],
        en: [
          "[[R_FLASH]] requires a slight delay after pressing R — using flash immediately cancels it.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default corki;
