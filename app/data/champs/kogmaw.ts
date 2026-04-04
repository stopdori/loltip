import type { ChampData } from "../interactions/types";

const kogmaw: ChampData = {
  id: "kogmaw",
  skills: {
    P: ["MS_UP", "GHOSTING"],
    Q: ["AS_UP", "AR_MR_SHRED"],
    W: ["RANGE_UP", "BUFF_FORM"],
    E: ["SLOW"],
    R: ["R_FLASH", "REVEALED"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_TRUE"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE"],
    W: ["BUFF_FORM", "DMG_MAGIC", "ON_HIT"],
    E: { phases: [
      { label: { ko: "E 투사체", en: "E Projectile" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ZONE"] },
    ] },
    
    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "BUFF_STACK"],
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[E_FLASH]] 안됨", "Q의 [[AS_UP]]은 [[PASSIVE_BONUS]].", "W [[AA_RESET]] 안됨.", "E의 [[SLOW]]는 범위 위의 대상에게 지속 적용", "R은 사용하면 중첩이 쌓이는데\n중첩이 쌓일수록 마나소모량이 40씩 증가함.\n최대 400."
      ],
        en: ["[[Q_FLASH]] and [[E_FLASH]] not possible", "Q's [[AS_UP]] is a passive effect", "E's [[SLOW]] continuously applies to targets standing in the area"]
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

export default kogmaw;
