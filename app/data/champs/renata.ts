import type { ChampData } from "../interactions/types"; 
const renata: ChampData = {
  id: "renata",
  skills: {
    P: [],
    Q: ["ROOT", "STUN"],
    W: ["W_FLASH", "MS_UP"],
    E: ["SHIELD", "SLOW"],
    R: ["R_FLASH", "BERSERK"],
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
      { label: { ko: "표식 부여평타", en: "Mark Basic Attack" }, tags: ["DMG_MAGIC", "ON_HIT", "MARK"] },
      { label: { ko: "아군 평타", en: " Ally Basic Attack" }, tags: ["DMG_MAGIC", "ON_HIT", "MARK_CONSUME"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },

    W: ["BUFF_FORM", "TARGETED"],
    E: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "LOCKED"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[E_FLASH]] 안됨", "Q는 상대 A챔피언에 적중하면 [[DMG_MAGIC]], [[ROOT]]\n Q2로 상대 B챔피언에 부딪히면 B챔피언만 [[DMG_MAGIC]], [[STUN]]", "Q1을 적중 시켰을때 레나타가 CC에 걸리면 Q2를 사용할 수 없음. \n CC가 끝나면 사용 가능.", "W를 받은 대상이 킬 관여를 하면 지속시간 초기화. \n W가 걸려있을 때 죽으면 죽음을 유예하고 킬관여를 하면 죽음을 극복함. \n 이때 체력이 최대체력의 20%가 됨. \n 회복이 아니라서 [[GW]] 영향 안 받음", "E는 아군은 [[SHIELD]], 적군은 [[SLOW]]."
      ],
        en: ["[[Q_FLASH]] and [[E_FLASH]] not possible", "Q hitting champion A applies [[ROOT]].\nRe-casting into champion B applies [[STUN]] to B only", "W target revives at 20% max HP — not a heal, so [[GW]] doesn't apply", "E applies [[SHIELD]] to allies and [[SLOW]] to enemies"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 150,
    11: 130,
    16: 110,
  },

};

export default renata;