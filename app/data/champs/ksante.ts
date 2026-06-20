import type { ChampData } from "../interactions/types";

const ksante: ChampData = {
  id: "ksante",

  skills: {
    base: {
      P: [],

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "SLOW"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["STUN", "GRAB"] },
    ] },

      W: ["DMG_REDUCE", "UNSTOPPABLE", "KNOCKBACK", "STUN"],
      E: ["SHIELD", "DASH", "WALL_HOP"],
      R: ["ROOT", "AIRBORNE", "STUN", "WALL_HOP", "BLINK", "UNSTOPPABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "TRANSFORM", "AS_UP", "AR_PEN", "LIFESTEAL"],
    },
    alt: {
      P: [],

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "SLOW"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["STUN", "GRAB"] },
    ] },

      W: ["DMG_REDUCE", "UNSTOPPABLE"],
      E: ["SHIELD", "DASH", "WALL_HOP"],
      R: ["TRANSFORM", "AS_UP", "AR_PEN", "LIFESTEAL"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["HIT_INDICATOR"],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["HIT_INDICATOR"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["MARK_INTERACT", "Q", "W", "R"],

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "MARK", "SLOW"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "MARK", "STUN", "GRAB"] },
    ] },

      W: ["DMG_PHYSICAL", "SKILL_CHARGED", "ST_DELAYED", "AOE", "DASH", "KNOCKBACK", "STUN", "MARK", "UNSTOPPABLE"],
      E: ["NON_TARGETED", "DASH", "SEPARATOR", "ST_CONDITIONAL", "TARGETED", "DASH"],
      R: ["DMG_PHYSICAL", "TARGETED", "TIMING_CAST", "MARK", "ROOT", "AIRBORNE", "STUN", "SEPARATOR_NEWLINE", "WALL_HOP", "BLINK", "UNSTOPPABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "TRANSFORM", "BUFF"],
    },
    alt: {
      P: ["MARK_INTERACT", "Q", "W"],

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "MARK", "SLOW"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "MARK", "STUN", "GRAB"] },
    ] },

      W: ["DMG_PHYSICAL", "DMG_TRUE", "SKILL_CHARGED", "ST_DELAYED", "AOE", "DASH", "KNOCKBACK", "STUN", "MARK", "UNSTOPPABLE"],
      E: ["NON_TARGETED", "DASH", "SEPARATOR", "ST_CONDITIONAL", "TARGETED", "DASH"],
      R: ["BUFF", "LOCKED"],
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "정답 : 유튜브로 기산테 보기.",
        ], en: [
          "Answer: Watch Kiin's K'Sante gameplay on YouTube.",
        ] },
      note1: {

        ko: [
          "P는 Q, W, R로 적을 맞히면 [[MARK]]. \n [[BA]]를 때리면 [[MARK]] 소모하고 최대 체력 비례 [[DMG_PHYSICAL]].",

          "Q를 맞히면 [[BUFF_STACK]]. \n 사라지기 전에 Q를 추가로 맞히면 다음 Q [[EMPOWERED]]. \n 편하게 Q3로 부름. \n Q1, Q2는 [[MARK]], [[SLOW]]. \n Q3는 [[MARK]], [[STUN]], [[GRAB]].",
          
          "W는 방어태세 돌입. \n 누르고 있는 동안 [[DMG_REDUCE]]와 [[UNSTOPPABLE]] \n 이후 [[DASH]]하여 최대체력 비례 [[DMG_PHYSICAL]]를 입히고 \n 충전시간 비례 [[KNOCKBACK]]과 [[STUN]].",
          
          "E는 [[DASH]]과 [[SHIELD]]. \n 아군에게 사용하면 [[DASH]] [[RANGE_UP]]와 아군도 [[SHIELD]].",
          
          "R은 적을 뒤로 밀어내고 상대 뒤에서 총공세 상태로 등장. \n 벽에 부딪히면 벽을 관통하여 끌고 감. \n \n 총공세 \n 크산테의 최대 체력 35% 감소. \n 추가 방마저의 85% 감소. \n 대신 \n Q, W, E 스킬 강화와 \n [[AS_UP]], [[AR_PEN]], 모든 피해 [[LIFESTEAL]] [[BUFF]]. \n \n Q는 [[CDR]]. \n \n W는 [[KNOCKBACK]]과 [[STUN]]이 사라지지만, \n 변신 직전 쿨타임이었다면 [[CDR_RESET]]. \n 강화된 [[DMG_REDUCE]]와 충전시간 비례 [[DASH]] 속도 증가. \n 충전시간 비례 [[DMG_TRUE]] 추가. \n \n E는 [[CDR]]과 [[DASH]] 속도 증가.",
        ],

        en: [
          "P applies [[MARK]] when you hit an enemy with Q, W, or R. \n Hitting with [[BA]] consumes [[MARK]] and deals [[DMG_PHYSICAL]] based on max health.",

          "Hitting with Q grants a [[BUFF_STACK]]. \n If you hit another Q before it expires, the next Q is [[EMPOWERED]]. \n Commonly called Q3. \n Q1 and Q2 apply [[MARK]] and [[SLOW]]. \n Q3 applies [[MARK]], [[STUN]], and [[GRAB]].",

          "W enters a defensive stance. \n While held, gain [[DMG_REDUCE]] and [[UNSTOPPABLE]] \n then [[DASH]] forward, dealing [[DMG_PHYSICAL]] based on max health \n and applying [[KNOCKBACK]] and [[STUN]] scaling with channel time.",

          "E grants [[DASH]] and [[SHIELD]]. \n If cast on an ally, gain [[RANGE_UP]] on the [[DASH]] and the ally also gains a [[SHIELD]].",

          "R knocks the target back and K'Sante appears behind them in All Out form. \n If it hits a wall, it drags the target through the wall. \n \n All Out \n K'Sante's max health is reduced by 35%. \n Bonus armor and magic resist reduced by 85%. \n Instead, \n Q, W, E are empowered, and \n gain [[AS_UP]], [[AR_PEN]], and [[LIFESTEAL]] [[BUFF]] on all damage. \n \n Q gains [[CDR]]. \n \n W loses [[KNOCKBACK]] and [[STUN]], but \n [[CDR_RESET]] if it was on cooldown right before transforming. \n Gains stronger [[DMG_REDUCE]] and increased [[DASH]] speed scaling with channel time. \n Adds [[DMG_TRUE]] scaling with channel time. \n \n E gains [[CDR]] and increased [[DASH]] speed.",
        ]

      },

      note2: {
        ko: ["[[THE_COPYPASTA]]",
          "Q1, Q2는 [[Q_FLASH]]이 가능하지만, \n Q3는 [[Q_FLASH]] 불가능.",
          "Q의 시전속도 및 재사용 대기시간은 추가 방마저에 비례.",
          "W는 최소 충전 시간 존재.",
          "R은 일반적으로 [[SUPPRESS]]으로 알려져 있지만 \n 사실은 적에게 [[ROOT]], [[AIRBORNE]], [[STUN]]을 순차적으로 걸고 \n 상대를 크산테의 앞으로 강제 이동시킴.", "R은 설명에 [[UNSTOPPABLE]]가 없지만 \n 크산테의 체력 바 위에 [[UNSTOPPABLE]]가 생김. \n 도착하면 사라짐.",
          "R은 사용 후, 재사용해서 해제 불가.",

        ],
        en: ["[[THE_COPYPASTA]]",
          "Q1 and Q2 can be [[Q_FLASH]]ed, but \n Q3 cannot be [[Q_FLASH]]ed.",
          "Q's cast speed and cooldown scale with bonus armor and magic resist.",
          "W has a minimum channel time.",
          "R is commonly known as [[SUPPRESS]], but \n it actually applies [[ROOT]], [[AIRBORNE]], and [[STUN]] in sequence \n and forcibly moves the target in front of K'Sante.", "R's [[UNSTOPPABLE]] is not shown in the description, but \n it appears above K'Sante's health bar. \n It disappears upon arrival.",
          "R cannot be cancelled by reactivating after use.",
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

export default ksante;
