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
      note2: {
        ko: [
        "일반폼에서 분노를 쌓고, 매복폼으로 분노를 소모하면서 [[HEAL]]", "W(매복) 상태에서는 렉사이의 시야가 줄어듦\n대신 상대 움직임을 진동으로 감지할 수 있음 ", "W(매복)에서 평타를 치면 W의 [[AIRBORNE]]으로 인해 대상과 대상주변이 [[AIRBORNE]] 됨.\nW를 눌러서 하는게 아님.", "일반폼 E는 분노 100일때 [[DMG_TRUE]].", "렉사이 R은 상대가 점멸로 피할 수 없음.",
      ],
        en: ["Burrowed vision is reduced for Rek'Sai,\nbut enemy movement is detected as vibrations", "Basic attacking while burrowed launches W — it is not a separate button press.\nTargets hit and nearby enemies are [[AIRBORNE]]d", "Rek'Sai's R cannot be dodged with flash"]
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