import type { ChampData } from "../interactions/types";

const gwen: ChampData = {
  id: "gwen",
  skills: {
    P: ["LIFESTEAL"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "UNTARGETABLE", "BUFF_FORM"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "ON_HIT"],
    Q: ["PASSIVE_BONUS", "DMG_MAGIC", "DMG_TRUE", "AOE", "PROC"],
    W: ["BUFF_FORM", "ZONE", "SKILL_RECAST"],
    E: ["DMG_MAGIC", "ON_HIT", "DASH"],
    R: ["DMG_MAGIC", "PIERCE", "SKILL_RECAST"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "Q는 중심에 명중해야 [[DMG_TRUE]].", "W는 범위 밖에서 날아오는 투사체를 맞지않음\n그웬에게 시전한 타겟팅 스킬도 날아오다 그웬이 W를 키면 맞지 않음"
      ],
        en: ["Q is most effective when hitting with the center", "W blocks projectiles originating from outside its area.\nTargeted projectiles already flying toward Gwen are also blocked if W is activated before they arrive"]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default gwen;
