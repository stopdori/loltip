import type { ChampData } from "../interactions/types";

const taric: ChampData = {
  id: "taric",
  skills: {
    P: ["AS_UP"],
    Q: ["HEAL"],
    W: ["W_FLASH", "SHIELD", "BUFF_FORM"],
    E: ["E_FLASH", "STUN"],
    R: ["R_FLASH", "INVULNERABLE", "BUFF_FORM"],
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
    Q: [],
    W: ["BUFF_FORM"],
    E: [],
    R: ["BUFF_FORM"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P의 [[MS_UP]]은 스킬 사용 후 다음 평타 2대", "R은 나와 연결된 대상의 하늘에서 광휘 내려오는데, 다 떨어지면 범위내의 대상 [[INVULNERABLE]].",
      ],
        en: ["P's [[MS_UP]] applies for the next 2 basic attacks after using a skill"]
        },
    },
  },

  ultCooldown: {
    6: 180,
    11: 150,
    16: 120,
  },

};

export default taric;
