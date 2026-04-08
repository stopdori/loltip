import type { ChampData } from "../interactions/types";

const elise: ChampData = {
  id: "elise",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["Q_FLASH"],                // 인간 Q는 Q플 X
      W: ["VISION"],
      E: ["E_FLASH", "STUN", "VISION"],
      R: ["TRANSFORM", "SUMMON"],
    },

    alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP", "LIFESTEAL", "ALLY_TP_OK"],
      Q: ["Q_FLASH"],      // 변신 Q는 Q플 가능
      W: ["AS_UP", "AA_RESET"],
      E: ["E_FLASH", "VISION", "BLINK", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
      R: ["TRANSFORM"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: ["VISION"],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["BUFF_STACK"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE"],
      W: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "HOMING", "AOE"],
      E: ["TIMING_CAST", "PROJECTILE"],
      R: ["TRANSFORM", "SUMMON"],
    },
    alt: {
      P: ["DMG_MAGIC", "SUMMON"],
      Q: ["DMG_MAGIC", "TIMING_CAST", "DASH"],
      W: ["BUFF_FORM"],

      E: { phases: [
      { label: { ko: "줄 타기", en: "" }, tags: ["SKILL_RECAST", "UNTARGETABLE", "TOWER_DODGE"] },
      { label: { ko: "줄 내려오기", en: "" }, tags: ["ST_CONDITIONAL", "BLINK", "WALL_HOP", "CANCELLABLE"] },
    ] },
    
      R: ["TRANSFORM"],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "소규모 교전, 다이브가 좋음.", "인간폼 E로 [[STUN]]을 걸고 잘라먹기가 최선.",
        ], en: [
          "Strong in small skirmishes and dives.",
          "Best approach is to [[STUN]] with human form E and pick off isolated targets.",
        ] },
      note1: {

        ko: [
          "1레벨부터 R로 변신할 수 있음.\n\n",
          "인간폼", " P는 스킬이 적중하면 \n거미폼의 새끼 거미 소환 [[BUFF_STACK]]을 얻음.", "Q는 [[TARGETED]] [[DMG_MAGIC]].",
          "W는 적을 찾아 따라가는 폭발거미 소환.",
          "E(고치)는 단일 [[STUN]]. \n 스킬을 찍을 수록 [[STUN]]시간 증가.",
          "R은 거미로 [[TRANSFORM]]. \n 스킬을 찍을수록 새끼거미 강화와 수 증가.\n\n",
          "거미폼",
          "P는 [[BA]] 강화. [[ON_HIT]]에 [[HEAL]].",
          "Q는 [[TARGETED]] [[DASH]]에 [[DMG_MAGIC]].",
          "W의 [[PASSIVE_BONUS]]는 새끼거미 기본 [[AS_UP]]. \n W 사용 시 엘리스와 새끼 거미의 [[AS_UP]].",
          "E로 엘리스가 공중으로 올라가서 \n 공중[[VISION]]와 [[UNTARGETABLE]], [[TOWER_DODGE]]. \n 물체에 우클릭 또는 E를 누르면 대상위에서 등장. \n 거미폼 피해량과 회복량이 증가.",
          "R은 인간으로 [[TRANSFORM]]. \n 새끼 거미들이 다시 휴면.",
        ],

        en: [
          "Can transform with R starting at level 1.\n\n",
          "Human Form",
          "P: Each skill hit grants a [[BUFF_STACK]] that summons a spiderling in spider form.",
          "Q is [[TARGETED]] [[DMG_MAGIC]].",
          "W summons an exploding spider that seeks and follows enemies.",
          "E (Cocoon) applies a single-target [[STUN]]. \n [[STUN]] duration increases with skill ranks.",
          "R [[TRANSFORM]]s Elise into spider form. \n Spiderlings are strengthened and their count increases with skill ranks.\n\n",
          "Spider Form",
          "P enhances [[BA]]. [[HEAL]] on [[ON_HIT]].",
          "Q is a [[TARGETED]] [[DASH]] that deals [[DMG_MAGIC]].",
          "W's [[PASSIVE_BONUS]] grants base [[AS_UP]] to spiderlings. \n Activating W grants [[AS_UP]] to both Elise and her spiderlings.",
          "E sends Elise into the air, \n granting aerial [[VISION]], [[UNTARGETABLE]], and [[TOWER_DODGE]]. \n Right-click a target or press E again to descend on them. \n Spider form damage and healing are increased.",
          "R [[TRANSFORM]]s Elise back to human form. \n Spiderlings return to dormancy.",
        ]

      },

      note2: {
        ko: [
        "인간폼 W는 지정한 위치까지 보낼 수 있는데, \n 최대 사거리는 미드 일자부쉬 정도. \n 부쉬안에 지정해서 보내면 부쉬안에도 들어감.", "거미폼 Q는 벽을 넘을 수 없음. \n 간혹 특정조건에 넘어지는데 버그인지 의도인지 모르겠음."
      ],
        en: [
          "Human form W can be sent to a specific location, \n with max range roughly equivalent to the mid lane straight-line bush. \n If aimed inside a bush, it will enter the bush.",
          "Spider form Q cannot hop walls. \n It occasionally passes through under specific conditions, though it's unclear if this is a bug or intentional.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  
  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },
};

export default elise;
