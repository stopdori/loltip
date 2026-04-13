import type { ChampData } from "../interactions/types";

const kassadin: ChampData = {
  id: "kassadin",
  skills: {
    P: ["DMG_REDUCE", "GHOSTING"],
    Q: ["Q_FLASH", "SHIELD"],
    W: ["AA_RESET", "MANA_RESTORE"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "BLINK", "WALL_HOP", "CC_BUFFER"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "DMG_REDUCE", "GHOSTING"],
    W: ["DMG_MAGIC", "ON_HIT", "AA_RESET"],
    E: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SLOW"],
    R: { phases: [
      { label: { ko: "준비단계",     en: "Wind-up" }, tags: ["TIMING_CAST"] },
      { label: { ko: "순간이동단계", en: "Blink"   }, tags: ["DMG_MAGIC", "AOE", "BUFF_STACK", "BLINK"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "소규모 교전이 좋음.", "앞에서 Q, E 포킹 하다가 \n R 스택 쌓아서 뒷라인 침투.",
        ], en: [
          "Better for small skirmishes.", "Poke with Q and E from the front, \n then stack R to dive the backline.",
        ] },
      note1: {

        ko: [
          "P는 마법 [[DMG_REDUCE]]와 [[GHOSTING]].",

          "Q는 [[TARGETED]] [[PROJECTILE]] [[DMG_MAGIC]]와 마법[[SHIELD]]. \n [[SKILL_CHANNEL]]을 끊을 수 있음.",

          "W의 [[PASSIVE_BONUS]]는 [[BA]]에 [[ON_HIT]] [[DMG_MAGIC]].",

          "W는 다음 [[BA]]를 [[EMPOWERED]]하고 [[MANA_RESTORE]].",

          "E의 [[PASSIVE_BONUS]]는 \n 근처에서 모든 챔피언이 스킬을 사용하면 [[CDR]].",

          "E는 전방 부채꼴 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]].",

          "R은 [[BLINK]] 하고 [[AOE]] [[DMG_MAGIC]]. \n 사용할수록 [[BUFF]]스택. \n 쌓일수록 마나 소모량 2배씩 증가. \n 데미지는 일정량씩 증가. \n 최대 4스택. \n [[CC_BUFFER]]로 일부 CC 무시 가능.",
        ],

        en: [
          "P reduces [[DMG_REDUCE]] from magic damage and grants [[GHOSTING]].",

          "Q is a [[TARGETED]] [[PROJECTILE]] [[DMG_MAGIC]] that grants a magic [[SHIELD]]. \n Can interrupt [[SKILL_CHANNEL]].",

          "W's [[PASSIVE_BONUS]] deals [[ON_HIT]] [[DMG_MAGIC]] on [[BA]].",

          "W [[EMPOWERED]]s the next [[BA]] and restores mana [[MANA_RESTORE]].",

          "E's [[PASSIVE_BONUS]] grants [[CDR]] \n whenever any nearby champion casts a skill.",

          "E deals [[AOE]] [[DMG_MAGIC]] in a frontal cone and applies [[SLOW]].",

          "R [[BLINK]]s to a target and deals [[AOE]] [[DMG_MAGIC]]. \n Each cast adds a [[BUFF]] stack. \n Mana cost doubles per stack. \n Damage increases by a fixed amount per stack. \n Max 4 stacks. \n [[CC_BUFFER]] allows ignoring some CC.",
        ]

      },

      note2: {
        ko: [
        "Q에 [[SKILL_CHANNEL]] 캔슬 있음. 침묵 아님", 
        "R 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 카사딘이 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
      ],
        en: ["Q has channel interruption (not silence)", "R has two phases: wind-up / blink.\nCC during the wind-up phase is valid, but the blink still triggers and Kassadin moves.\nThere is no CC immunity during the blink phase.\nIf CC duration remains when Kassadin blinks, the CC effect still applies."]
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

export default kassadin;
