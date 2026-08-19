import type { ChampData } from "../interactions/types";

const ezreal: ChampData = {
  id: "ezreal",
  skills: {
    P: ["AS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "CDR", "Q", "W", "E", "R"],
    W: ["W_FLASH", "SEPARATOR", "ST_CONDITIONAL", "MANA_RESTORE"],
    E: ["E_FLASH", "BLINK", "WALL_HOP", "SEPARATOR", "CC_BUFFER"],
    R: [],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_INTERACT", "Q", "W", "E", "R"],
    Q: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR", "Q", "W", "E", "R"],

    W: { phases: [
      { label: { ko: "W",     en: "W" }, tags: ["TIMING_CAST", "PROJECTILE", "SINGLE", "MARK", "BUFF_STACK"] },
      { label: { ko: "W 발동", en: "W Active" }, tags: ["DMG_MAGIC"] },
    ] },

    E: { phases: [
      { label: { ko: "준비단계",     en: "Wind-up" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "순간이동단계", en: "Blink"   }, tags: ["ST_CONDITIONAL", "BLINK", "DMG_MAGIC", "PROJECTILE", "SINGLE", "HOMING", "BUFF_STACK"] },
    ] },

    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "LOCKED", "BUFF_STACK"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "스킬을 꾸준히 맞혀서 \n P의 [[BUFF]]를 5스택 유지하기.", "Q로 포킹하다 불꽃 카이팅. \n 상대 딜러라인에 R 뿌리기.",
        ], en: ["Keep landing skills to maintain 5 stacks of P's [[BUFF]].", "Poke with Q while kiting with Mystic Shot. \n Fire R at the enemy carry line."] },
      note1: {

        ko: [
          "P는 스킬이 적중하면 [[BUFF_STACK]]. \n 스택당 [[AS_UP]] 최대 5스택.",
          "Q는 적중하면 [[CDR]] 1.5초 (궁극기 포함).",
          "W는 [[MARK]]을 걸고 [[BA]], 스킬로 발동. \n 발동시킨 스킬의 마나 + 60 [[MANA_RESTORE]]. \n [[BA]]로 발동하면 [[MANA_RESTORE]] 없음.",
          "E는 [[BLINK]]하고 [[PROJECTILE]] 발사. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",
          "R은 기모아서 [[GLOBAL]] 투사체 발사. \n 시전을 취소할 수 없고 CC에도 끊기지 않음.",
        ],

        en: [
          "P stacks on skill hits, granting [[AS_UP]] per stack, up to 5 stacks.",
          "Q reduces cooldowns by 1.5 seconds on hit (including R).",
          "W applies [[MARK]] that triggers on [[BA]] or skill hit. \n Triggering with a skill restores that skill's mana + 60 [[MANA_RESTORE]]. \n Triggering with [[BA]] gives no [[MANA_RESTORE]].",
          "E [[BLINK]]s and fires a [[PROJECTILE]]. \n [[CC_BUFFER]] allows ignoring some CC.",
          "R charges up and fires a [[GLOBAL]] projectile. \n Cannot be cancelled and is not interrupted by CC.",
        ]

      },

      note2: {
        ko: [
        "P는 5스택까지 쌓이고, 계속 유지시켜야 함.", 
        "[[E_FLASH]] 판정이 점멸 도착한 곳에서 공격이 나감", 
        "[[R_FLASH]]은 기능적으로 가능하지만, \n 원래 위치에서 스킬이 발동하기 때문에 불가능으로 분류.", 
        "E 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 이즈리얼이 맞은 CC는 유효 하지만\n[[BLINK]]단계가 발동되어 이동하는 것.\n[[BLINK]]단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
      ],
        en: [
          "P is a stacking buff that must be maintained with skills",
          "[[E_FLASH]] fires from the flash destination",
          "[[R_FLASH]] technically works but since R fires from Ezreal's original position, it's classified as not possible.",
          "E has two phases: wind-up / blink.\nCC during the wind-up phase is valid, but the [[BLINK]] phase still triggers and Ezreal moves.\nThere is no CC immunity during the [[BLINK]] phase.\nIf CC duration remains when Ezreal blinks, the CC effect still applies.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default ezreal;
