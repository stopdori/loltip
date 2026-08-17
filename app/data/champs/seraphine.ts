import type { ChampData } from "../interactions/types";

const seraphine: ChampData = {
  id: "seraphine",
  skills: {
    P: [],
    Q: [],
    W: ["MS_UP", "SHIELD", "HEAL"],
    E: ["E_FLASH", "SLOW", "ROOT", "STUN"],
    R: ["R_FLASH", "CHARM"],
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
      { label: { ko: "메아리", en: "Echo" }, tags: ["BUFF_INTERACT", "Q", "W", "E"] },
      { label: { ko: "음표", en: "Harmony" }, tags: ["ST_CONDITIONAL", "BUFF_INTERACT", "DMG_MAGIC", "ON_HIT"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["TIMING_CAST", "PROJECTILE", "BUFF_STACK", "STACK_CONSUME"] },
      { label: { ko: "Q 장판", en: "Q Zone" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "ZONE"] },
    ] },

    W: ["TIMING_CAST", "AOE", "BUFF_STACK", "STACK_CONSUME"],
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "BUFF_STACK", "STACK_CONSUME"],
    R: ["DMG_MAGIC", "TIMING_CAST", "TIMING_AFTERCAST", "PROJECTILE", "PIERCE", "LOCKED"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P는 스킬을 사용할 때마다 메아리 [[BUFF_STACK]]. \n 3스택을 모으면 다음 Q, W, E스킬은 자동으로 한 번 더 발동.",
          "주변 아군이 스킬을 사용할 때마다 세라핀에게 음표 [[BUFF_STACK]]. \n 음표당 세라핀의 [[BA]] 25 [[RANGE_UP]], [[DMG_MAGIC]]. \n 아군마다 최대 4개 제공.",

          "Q는 해당 지점에 [[PROJECTILE]]를 발사. \n 도착하면 [[AOE]] [[DMG_MAGIC]]. \n 챔피언, 몬스터는 잃은 체력 비례 [[DMG_MAGIC]].",

          "W는 주변 아군 [[SHIELD]]와 [[MS_UP]]. \n 세라핀은 [[SHIELD]]와 2.5배의 [[MS_UP]]. \n 두 [[MS_UP]] 효과는 점차 사라짐. \n \n 세라핀에게 [[SHIELD]]가 있는 상태에서 W를 사용한다면 \n 잃은 체력 비례 [[AOE]] [[HEAL]] 스킬을 추가로 자동으로 시전. \n 단, P의 메아리 효과로 W 스킬이 두 번 사용돼도 \n [[HEAL]] 스킬은 한 번만 발동.",

          "E는 일직선으로 [[PROJECTILE]]를 발사. \n [[DMG_MAGIC]], 99% [[SLOW]]. \n 이미 [[SLOW]]된 대상은 [[ROOT]], ",

          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[W_FLASH]] 안됨", "P의 스택으로 스킬을 두번 시전하면, 스택이 한개 쌓임.", "P 스택은 세라핀의 평타 사거리를 증가시킴", "W는 [[SHIELD]]가 있을 때 [[HEAL]]으로 발동.\n아군이 걸어준 [[SHIELD]]에도 발동.", "E는 그냥 맞히면 [[SLOW]]\n[[SLOW]]인 대상은 [[ROOT]]\n[[ROOT]]인 대상은 [[STUN]]이 걸림", "R의 사거리는 아군, 적군 챔피언 맞히면 늘어남\n[[R_FLASH]] 개사기임"
      ],
        en: ["[[Q_FLASH]] and [[W_FLASH]] not possible", "P stacks extend Seraphine's basic attack range", "W heals when Seraphine already has a shield.\nConfirmation needed on whether ally-applied shields also proc this", "E applies [[SLOW]] on a direct hit.\n[[SLOW]]ed targets become [[ROOT]]ed.\n[[ROOT]]ed targets become [[STUN]]ed", "R range increases when hitting ally or enemy champions.\n[[R_FLASH]] is extremely powerful"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 140,
    16: 120,
  },

};

export default seraphine;
