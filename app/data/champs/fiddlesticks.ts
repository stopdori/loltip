import type { ChampData } from "../interactions/types";

const fiddlesticks: ChampData = {
  id: "fiddlesticks",
  skills: {
    P: ["BUFF_FORM", "SUMMON"],
    Q: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "FEAR"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "FEAR"] },
    ] },
    W: ["TETHER", "LIFESTEAL", "SEPARATOR", "ST_CONDITIONAL", "CDR", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SILENCE", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
    R: ["BUFF_FORM", "BLINK", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["SKILL_VECTOR", "SUMMON"],
    Q: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "FEAR"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["DMG_MAGIC", "TARGETED", "PROJECTILE", "SINGLE", "SEPARATOR", "ST_CONDITIONAL", "FEAR"] },
    ] },
    
    W: ["DMG_MAGIC", "SKILL_CHANNEL", "SWARM", "DOT", "CANCELLABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
    E: ["DMG_MAGIC", "AOE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SILENCE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
    R: { phases: [
      { label: { ko: "시전집중",     en: "Channeling" }, tags: ["SKILL_CHANNEL", "LOCKED"] },
      { label: { ko: "순간이동", en: "Blink"   }, tags: ["BUFF_FORM", "BLINK", "DMG_MAGIC", "AOE", "DOT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "FEAR"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "[[FEAR]]에 살고 [[FEAR]]에 죽는다. \n 시야밖에 숨어있다. 아군이 빨아들일 때 R로 등장. \n = 슈퍼캐리.", "상대팀은 피들 위치를 찾아야하고 \n 항상 상상속의 피들 점프각을 조심해야 함."
        ], en: [
          "Live by [[FEAR]], die by [[FEAR]]. \n Hide outside vision. Appear with R when allies bait the enemy in. \n = Super carry.",
          "The enemy team must always search for Fiddlesticks' position \n and constantly watch out for the imagined R jump angle.",
        ] },
      note1: {

        ko: [
          "P는 장신구가 피들 허수아비로 대체. \n 적 챔피언이 가까이 오면 \n 허수아비가 작동해서 이동, 점멸, 스킬모션 중 \n 랜덤으로 행동하고 사라짐.",
          "[[FEAR]]는 Q의 [[PASSIVE_BONUS]]. \n Q, W, E, R에 조건부로 발동. \n \n 비 전투, 시야 밖, 허수아비인 척 (2초 동안 가만히 서있기) \n [[FEAR]]는 챔피언 개별로 쿨타임. \n 쿨타임은 대상 주변에 원형띠가 생김 \n \n Q는 [[FEAR]]가 쿨타임인 대상에게 추가 피해. \n 그래서 다른스킬로 [[FEAR]]를 걸고 Q 추가데미지를 가해야 쌤.",
          "W는 범위내의 대상에게 [[TETHER]]. \n 지속시간을 완료 하면 추가데미지에 [[CDR]]",
          "E는 범위피해. 중앙에 맞은 대상은 [[SILENCE]].",
          "R은 정신집중하고 위치로 [[BLINK]]. \n 5초동안 범위 [[DOT]].",
        ],

        en: [
          "P replaces the trinket with a Fiddlesticks effigy. \n When an enemy champion gets close, \n the effigy activates and randomly performs a movement, flash, or skill animation \n before disappearing.",
          "[[FEAR]] is Q's [[PASSIVE_BONUS]], triggered conditionally by Q, W, E, and R. \n \n Conditions: out of combat, outside vision, or pretending to be the effigy (standing still for 2 seconds). \n [[FEAR]] has a per-champion cooldown shown as a circular ring around the target. \n \n Q deals bonus damage to targets on [[FEAR]] cooldown. \n Apply [[FEAR]] with another skill first, then follow up with Q for bonus damage.",
          "W [[TETHER]]s targets in range. \n Completing the full channel deals bonus damage and grants [[CDR]].",
          "E deals area damage. Targets hit in the center are [[SILENCE]]d.",
          "R channels, then [[BLINK]]s to a location. \n Deals area [[DOT]] for 5 seconds.",
        ]

      },

      note2: {
        ko: [
        "TMI 고수분들 제보 부탁드림."
      ],
        en: ["Cannot TP onto the effigy", "Q [[FEAR]] is a persistent passive.\nBeing out of combat, outside vision, or standing still for 2s (pretending to be the effigy) activates the condition.\nDealing damage with a skill then triggers [[FEAR]].\n[[FEAR]] has a per-champion cooldown shown as a circular timer around the target", "Completing the full W channel without interruption refunds 60% of its cooldown."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 110,
    16: 80,
  },

};

export default fiddlesticks;
