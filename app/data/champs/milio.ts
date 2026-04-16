import type { ChampData } from "../interactions/types";

const milio: ChampData = {
  id: "milio",
  skills: {
    P: [],
    Q: ["AIRBORNE", "SLOW"],
    W: ["W_FLASH", "HEAL"],
    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: ["HEAL", "CC_CLEANSE", "TENACITY"],
  },

  vision: {
    P: [],
    Q: ["VISION"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 패시브", en: "P Passive" }, tags: ["BUFF_STACK"] },
      { label: { ko: "P 버프", en: "P Buff" }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
    Q: ["DMG_MAGIC", "PROJECTILE", "AOE"],
    W: ["HOMING", "ZONE", "BUFF_STACK"],
    E: ["TARGETED", "RECHARGE", "BUFF_STACK"],
    R: ["AOE", "BUFF_STACK"],
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
        "[[Q_FLASH]], [[R_FLASH]] 안됨.", "Q는 [[KNOCKBACK]]에 걸릴 때 [[SLOW]] 한 번. \n 공이 터질 때 한 번 \n [[SLOW]]가 총 두 번 걸림.", "P는 스킬에 닿은 아군은 평타가 강화됨.\n Q도 경로에 아군이 서있으면 강화됨.", "W에 텔 안됨.", "R은 자신이 CC걸리면 사용이 안됨."
      ],
        en: ["[[Q_FLASH]] and [[R_FLASH]] not possible", "Q applies [[SLOW]] once when it hits via [[KNOCKBACK]]. \n It applies [[SLOW]] once again when the ball explodes. \n [[SLOW]] is applied twice in total.", "P: allies hit by skills have their basic attacks empowered.\nQ also empowers allies standing in its path.", "Cannot TP onto W", "R cannot be cast while Milio is CC'd"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 160,
    11: 145,
    16: 130,
  },

};

export default milio;
