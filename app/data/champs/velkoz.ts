import type { ChampData } from "../interactions/types";

const velkoz: ChampData = {
  id: "velkoz",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: [],
    E: ["E_FLASH", "AIRBORNE"],
    R: ["R_FLASH"],
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
    W: [],
    E: [],
    R: [],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "Q는 표시된 최대 사거리보다 조금 더 멀리 날아감", "Q 시전중에 CC에 걸리면 Q2를 사용 할 수 없음.", "E는 벨코즈와 가까우면 [[KNOCKBACK]] 멀면 [[AIRBORNE]]"
      ],
        en: ["Q flies slightly farther than the indicated max range", "E applies [[KNOCKBACK]] to nearby targets and [[AIRBORNE]] to distant ones"]
        },
    },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

};

export default velkoz;
