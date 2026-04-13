import type { ChampData } from "../interactions/types";

const xayah: ChampData = {
  id: "xayah",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["AS_UP", "MS_UP"],
    E: ["E_FLASH", "ROOT"],
    R: ["R_FLASH", "GHOSTING", "UNTARGETABLE", "TOWER_DODGE"],
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
      { label: { ko: "자야라칸 귀환", en: "Lover's Leap Recall" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "깃털", en: "Feathers" }, tags: ["DMG_PHYSICAL", "PIERCE", "ZONE", "BUFF_INTERACT", "Q", "W", "E", "R"] },
    ] },
    
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "ZONE", "BUFF_STACK"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["BUFF_FORM", "BUFF_STACK"] },
      { label: { ko: "W 온힛", en: "W On-hit" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "PIERCE", "STACK_CONSUME", "ZONE"] },
    ] },
    
    E: ["ST_CONDITIONAL", "DMG_PHYSICAL", "PROJECTILE", "PIERCE", "ST_DELAYED", "BUFF_STACK"],

    R: { phases: [
      { label: { ko: "R 점프", en: "R Leap" }, tags: ["BUFF_FORM", "BUFF_STACK"] },
      { label: { ko: "R 깃털투척", en: "R Shoots" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "PROJECTILE", "PIERCE", "ZONE"] },
    ] },

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
        "W로 [[AA_RESET]] 안됨\n[[MS_UP]]는 깃털이 상대 챔피언에 닿아야 발동", "E [[ROOT]]은 깃털 3개이상 맞혀야 발동", "자야, 라칸 시너지\n귀환타고 있는 대상에게 다가가서 귀환을 누르면, 앞서 진행한 귀환게이지를 공유받음\n \n자야 W를 라칸이 공유받음\n[[MS_UP]]는 자야가 공격해야 라칸도 증가\n \n라칸 E의 범위가 자야에겐 두배가 됨"
      ],
        en: ["W does not [[AA_RESET]].\n[[MS_UP]] only activates when feathers touch an enemy champion", "E [[ROOT]] requires hitting 3 or more feathers", "Xayah & Rakan synergy:\nIf Rakan walks up to a recalling Xayah and presses recall, he shares her recall progress.\nRakan gains Xayah's W.\n[[MS_UP]] requires Xayah to attack to trigger on Rakan.\nRakan's E range is doubled when targeting Xayah"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default xayah;
