import type { ChampData } from "../interactions/types";

const annie: ChampData = {
  id: "annie",
  skills: {
    P: ["ST_CONDITIONAL", "STUN"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH",],
    E: ["E_FLASH", "MS_UP", "SHIELD"],
    R: ["R_FLASH", "MR_PEN", "ALLY_TP_OK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_INTERACT", "Q", "W", "E", "R"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SINGLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "STUN"],
    W: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "STUN"],
    E: { phases: [
      { label: { ko: "E 보호막", en: "E Shields" }, tags: ["TARGETED"] },
      { label: { ko: "E 반사피해", en: "E Thornes"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },
    R: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["MR_PEN"] },
      { label: { ko: "티버 소환", en: "Tibbers Summon" }, tags: ["PASSIVE_BONUS", "DMG_MAGIC", "TIMING_CAST", "AOE", "SUMMON", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "STUN"] },
      { label: { ko: "티버", en: "Tibbers"  }, tags: ["DMG_MAGIC", "AOE", "DOT"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "하나 삐져나온 대상을 [[STUN]]으로 잘라먹기.", 
          "상대 딜러진에 R로 광역 [[STUN]]을 넣어서 \n 잡거나 전투이탈 만들기.",
        ], en: [
          "Pick off an isolated target with [[STUN]].",
          "Land an AoE [[STUN]] on the enemy carries with R \n to catch them or force them out of the fight.",
        ] },
      note1: {

        ko: [
          "P의 [[STUN]]은 4스택 일 때 Q, W, R에 적용",
          "R의 [[PASSIVE_BONUS]]로 [[MR_PEN]]이 있음.",
          "Q로 막타를 치면 \n 쿨타임 50%와 [[MANA_RESTORE]] 100%.",
          "W는 원뿔모양 범위피해.",
          "E는 [[SHIELD]] \n 티버에도 복제되어 적용. (티버가 소환되어 있다면) \n [[SHIELD]]가 남아있을때 대상당 단 한 번의 반사피해.",
          "R [[STUN]]로 이니시를 하면 티버 풀딜. \n 티버는 애니가 [[STUN]]을 걸거나 죽으면 분노."
        ],

        en: [
          "P's [[STUN]] applies on Q, W, or R when at 4 stacks.",
          "R grants [[MR_PEN]] as a [[PASSIVE_BONUS]].",
          "Last-hitting with Q \n refunds 50% cooldown and 100% [[MANA_RESTORE]].",
          "W deals cone-shaped area damage.",
          "E applies [[SHIELD]]. \n Also copied to Tibbers if summoned. \n While the [[SHIELD]] holds, reflects damage once per attacker.",
          "Initiating with R's [[STUN]] maximizes Tibbers' damage. \n Tibbers enrages when Annie applies [[STUN]] or dies.",
        ]

      },

      note2: {
        ko: [
        "E의 반사 데미지는 [[SHIELD]]가 남아있을 때, 적군이 공격면 공격한 대상당 한 번씩 피해를 입음.\n상대 챔피언의 소환수가 공격하면 소환수 개별 \n 주인 챔피언도 별개로 한 번씩 적용."
      ],
        en: ["E's reflected damage hits once per attacker while the [[SHIELD]] holds.\nIf enemy pets attack, each pet and their owner champion are counted separately."]
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

export default annie;
