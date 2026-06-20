import type { ChampData } from "../interactions/types";

const leblanc: ChampData = {
  id: "leblanc",
  skills: {
    P: ["ST_CONDITIONAL", "INVISIBILITY", "CLONE"],
    Q: ["Q_FLASH", "MARK"],
    W: ["DASH", "WALL_HOP", "SEPARATOR", "SKILL_RECAST", "BLINK"],
    E: ["E_FLASH", "TETHER", "TRUE_SIGHT", "SEPARATOR", "ST_CONDITIONAL", "ROOT"],
    R: [],
  },

  vision: {
    P: [],
    Q: [ "POSITION_REVEAL"],
    W: [],
    E: [ "POSITION_REVEAL", "TRUE_SIGHT"],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "INVISIBILITY", "CLONE"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "MARK"] },
      { label: { ko: "인장", en: "Mark" }, tags: ["ST_CONDITIONAL", "MARK_CONSUME", "DMG_MAGIC"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE", "ZONE", "DASH", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME", "DMG_MAGIC"] },
      { label: { ko: "W 재사용", en: "W Recast" }, tags: ["SKILL_RECAST", "BLINK"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME", "DMG_MAGIC"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "MARK_CONSUME", "DMG_MAGIC"] },
    ] },
    R: [],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "W로 왔다갔다 하면서 Q, E로 포킹.",
          "앞 라인에 E로 [[ROOT]]를 걸면서 방해하거나 \n 뒷라인 암살하기."
        ], en: [
          "Poke with Q and E while weaving in and out with W.",
          "Disrupt the front line with E [[ROOT]], or \n assassinate the backline."
        ] },
      note1: {

        ko: [
          "P는 체력이 40% 밑으로 떨어지면 [[INVISIBILITY]]. \n [[INVISIBILITY]] 상태에서 무해한 [[CLONE]] 생성. \n [[CLONE]] 컨트롤은 alt 우클릭으로 가능.",

          "Q는 대상에게 [[DMG_MAGIC]]와 [[MARK]]를 남기고. \n W, E, R(Q, W, E)스킬을 적중시키면 추가 [[DMG_MAGIC]]. \n Q 또는 [[MARK]] 폭발로 막타를 치면 [[MANA_RESTORE]], [[CDR]].",

          "W는 [[DASH]]하여 주변 [[DMG_MAGIC]]. \n [[SKILL_RECAST]] 하면 [[DASH]] 하기 전 위치로 [[BLINK]].",

          "E는 [[DMG_MAGIC]]와 [[TETHER]]. \n [[TETHER]]이 지속되면 추가 [[DMG_MAGIC]]와 [[ROOT]].",

          "R은 마지막으로 사용한 Q, W, E의 스킬을 모방. \n 피해량은 원본보다 대체로 강함. \n 단, W 재사용은 복사되지 않음.",
        ],

        en: [
          "P grants [[INVISIBILITY]] when health drops below 40%. \n While [[INVISIBILITY]], creates a harmless [[CLONE]]. \n The [[CLONE]] can be controlled with alt + right-click.",

          "Q deals [[DMG_MAGIC]] and leaves a [[MARK]] on the target. \n Hitting with W, E, or R (Q, W, E) deals bonus [[DMG_MAGIC]]. \n Last-hitting with Q or the [[MARK]] explosion grants [[MANA_RESTORE]] and [[CDR]].",

          "W [[DASH]]es and deals [[DMG_MAGIC]] in an area. \n [[SKILL_RECAST]] to [[BLINK]] back to the position before the [[DASH]].",

          "E deals [[DMG_MAGIC]] and applies a [[TETHER]]. \n If the [[TETHER]] persists, deals bonus [[DMG_MAGIC]] and applies [[ROOT]].",

          "R mimics the last cast Q, W, or E. \n Its damage is generally stronger than the original. \n However, W's recast is not copied.",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]] 안됨",
        "Q는 미니언에게는 레벨 비례 추가 피해.",
      ],
        en: [
          "[[W_FLASH]] not possible",
          "Q deals bonus damage to minions scaling with level.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 45,
    11: 35,
    16: 25,
  },

};

export default leblanc;
