import type { ChampData } from "../interactions/types";

const hecarim: ChampData = {
  id: "hecarim",
  skills: {
    P: ["AD_UP"],
    Q: [],
    W: ["HEAL", "BUFF_FORM"],
    E: ["WALL_HOP", "KNOCKBACK", "GHOSTING"],
    R: ["WALL_HOP", "FEAR", "UNSTOPPABLE"],
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
    Q: ["DMG_PHYSICAL", "AOE", "BUFF_STACK"],
    W: ["BUFF_FORM", "DMG_MAGIC", "AOE", "DOT"],
    E: ["DMG_PHYSICAL", "TIMING_AFTERCAST", "ON_HIT", "DASH"],
    R: ["DMG_MAGIC", "DASH", "UNSTOPPABLE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", "헤카림은 이속이 증가하면 [[AD_UP]]", "R의 [[FEAR]]는 판정이 좀 좋지않음\n타이밍 맞춰 상대가 이동기를 쓰면\n쉽게 피하는 모습을 자주 봄"
      ],
        en: ["[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] all not possible", "Hecarim gains [[AD_UP]] based on bonus movement speed", "E has two phases: charge / strike.\nCC during the charge phase is valid but does not cancel E .\nOnce the strike phase activates (rearing up), CC is ignored.", "R's [[FEAR]] has inconsistent hit detection.\nEnemies using mobility at the right timing can often dodge it easily"]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default hecarim;
