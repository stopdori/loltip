import type { ChampData } from "../interactions/types";

const reksai: ChampData = {
  id: "reksai",

  skills: {
    base: {
      // 돌출
      P: [],
      Q: ["AS_UP", "AA_RESET"],                // 인간 Q는 Q플 X
      W: ["MS_UP", "GHOSTING", "BUFF_FORM"],
      E: ["E_FLASH"],
      R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
    },

    alt: {
      // 매복
      P: ["HEAL"],
      Q: ["Q_FLASH", "REVEALED"],      // 변신 Q는 Q플 가능
      W: ["AIRBORNE", "BUFF_FORM"],
      E: [],
      R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "UNSTOPPABLE"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: [],
      E: ["POSITION_REVEAL"],
      R: [],
    },
    alt: {
      P: [],
      Q: ["POSITION_REVEAL"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: [],
      Q: ["DMG_PHYSICAL", "AOE", "ON_HIT", "MARK"],
      W: ["BUFF_FORM"],
      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_PHYSICAL", "TARGETED", "MARK"] },
      { label: { ko: "E 분노 100", en: "E Rage 100" }, tags: ["DMG_TRUE", "TARGETED", "MARK"] },
    ] },
      
      R: ["DMG_PHYSICAL", "TIMING_CAST", "DASH", "HOMING", "UNSTOPPABLE"],
    },

    alt: {
      P: [],
      Q: ["DMG_MAGIC", "PROJECTILE", "AOE", "MARK"],
      W: ["BUFF_FORM"],
      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DASH", "RECHARGE"] },
      { label: { ko: "땅굴", en: "Tunnel" }, tags: ["ZONE"] },
    ] },
      R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["PASSIVE_BONUS", "MARK_INTERACT"] },
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "DASH", "HOMING", "UNSTOPPABLE"] },
    ] },

    },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P는 [[BA]], 스킬 사용 시 25분노 \n W 매복폼으로 분노 소모하여 레벨 비례 [[HEAL]]. \n 분노는 5초동안 생성하지 않으면 20씩 소모.",

          "돌출폼 \n \n ",

          "W",

          "E",
          
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "분노 획득은 미니언 대상 대폭감소.",
        "W(매복) 상태에서는 렉사이의 시야가 줄어듦 \n 대신 상대 움직임을 진동으로 감지할 수 있음 ", 
        "W(매복)에서 평타를 치면 W의 [[AIRBORNE]]으로 인해 대상과 대상주변이 [[AIRBORNE]] 됨.\nW를 눌러서 하는게 아님.", 
        "일반폼 E는 분노 100일때 [[DMG_TRUE]].", "렉사이 R은 상대가 점멸로 피할 수 없음.",
      ],
        en: [
        "Rage generation is drastically reduced against minions.",
        "Rek'Sai's vision is reduced while burrowed (W), \n but enemy movement can be detected through vibrations.",
        "Basic attacking while burrowed (W) triggers W's [[AIRBORNE]], airborning the target and nearby enemies.\nThis is not triggered by pressing W.",
        "Unburrowed E deals [[DMG_TRUE]] at 100 rage.", "Rek'Sai's R cannot be dodged with Flash.",
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  
  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default reksai;