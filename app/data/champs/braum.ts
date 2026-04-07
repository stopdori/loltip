import type { ChampData } from "../interactions/types";

const braum: ChampData = {
  id: "braum",
  skills: {
    P: ["ST_CONDITIONAL", "STUN"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "WALL_HOP"],
    E: ["E_FLASH", "BUFF_FORM", "DMG_REDUCE", "DAMAGE_NULLIFY", "INTERCEPT_PROJECTILE"],
    R: ["AIRBORNE", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DEBUFF_INTERACT", "BA", "Q", "SEPARATOR", "PROC","DMG_MAGIC", "STUN"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "PROC", "DMG_MAGIC", "STUN"],
    W: ["DASH"],
    E: ["BUFF_FORM", "LOCKED", "SEPARATOR", "ST_CONDITIONAL", "DAMAGE_NULLIFY", "INTERCEPT_PROJECTILE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "AIRBORNE", "SLOW"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "Q로 [[SLOW]] 걸고 붙어서 [[STUN]] 걸거나 \n R [[AIRBORNE]]으로 잘라먹기.", "아군 딜러라인을 W, E, R로 지키면서 \n [[BA]], [[Q]]로 [[DEBUFF]]를 챔피언 하나씩 걸고다니기."
        ], en: [
          "Apply [[SLOW]] with Q, close in to land a [[STUN]],\nor cut off enemies with R [[AIRBORNE]].",
          "Protect your carries with W, E, and R\nwhile applying [[DEBUFF]] to one target at a time with [[BA]] and [[Q]].",
        ] },
      note1: {

        ko: [
          "P의 [[DEBUFF]]는 [[BA]], [[Q]]로 발동. \n 캐릭터 위에 얼음조각 칸이 4개 차면 피해와 [[STUN]].",
          "Q는 [[SLOW]]와 [[DEBUFF]] \n 4번째 타격이라면 [[STUN]].",
          "W는 아군에게 [[DASH]]하고 \n 브라움과 대상의 [[AR_MR_UP]]",
          "E는 방패를 들어 \n 처음 [[DAMAGE_NULLIFY]] 시키고 \n [[INTERCEPT_PROJECTILE]] 또는 투사체의 데미지 감소. \n 디테일한 판정은 챔피언별로 하단 박스에 정리.",
          "R은 처음 적중한 대상이 가장 [[AIRBORNE]]이 길고 \n 나머지는 0.6초 [[AIRBORNE]] \n 4초동안 유지되는 [[SLOW]] 장판도 생성.", "초필살기 \n 아군에게 W([[DASH]])로 날아가면서 \n ER을 하면 R 모션이 캔슬되어 도착하자마 R을 씀.",
        ],

        en: [
          "P's [[DEBUFF]] is triggered by [[BA]] and [[Q]].\nWhen 4 ice fragments stack on a target, it deals damage and [[STUN]]s.",
          "Q applies [[SLOW]] and [[DEBUFF]].\nIf it's the 4th stack, it [[STUN]]s instead.",
          "W [[DASH]]es to an ally and grants [[AR_MR_UP]] to both Braum and the target.",
          "E raises the shield to [[DAMAGE_NULLIFY]] the first hit\nand [[INTERCEPT_PROJECTILE]] aimed at allies.\nSee the matchup section below for details.",
          "R applies the longest [[AIRBORNE]] to the first target hit;\nall others receive 0.6s [[AIRBORNE]].\nAlso creates a [[SLOW]] zone that lasts 4 seconds.",
          "Special tech: while flying toward an ally with W ([[DASH]]),\ncasting E then R cancels the R animation,\ncasting R the moment Braum arrives.",
        ]

      },

      note2: {
        ko: [
        "E로 막은 상대 스킬들의 CC효과는 대부분 걸림", "E의 막을 수 있다의 개념은 두 가지로 정리함 \n1. [[DAMAGE_NULLIFY]] 브라움에게 가해지는 첫 피해를 무효\n2. [[INTERCEPT_PROJECTILE]] 아군에게 날아가는 것을 대신 맞아줌. (투사체 삭제)", "E의 챔피언별 정보는 원래는 막을 수 없는 투사체를 \n 막을 수 있게 되는것을 중점적으로 기록함", "E를 쓰고 존야를 쓰면 방패는 그대로 들고있지만 \n E 효과는 발동하지 않음.", "[[R_FLASH]] 안됨"
      ],
        en: [
          "Most CC effects from skills blocked by E still apply.",
          "E's blocking concept has two categories:\n1. [[DAMAGE_NULLIFY]] — nullifies the first hit on Braum\n2. [[INTERCEPT_PROJECTILE]] — intercepts projectiles aimed at allies (projectile deleted)",
          "Per-champion E data focuses on cases where normally unblockable projectiles become blockable.",
          "Using E then Zhonya's prevents E from activating.",
          "[[R_FLASH]] not possible",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default braum;
