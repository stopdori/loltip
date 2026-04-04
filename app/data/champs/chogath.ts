import type { ChampData } from "../interactions/types";

const chogath: ChampData = {
  id: "chogath",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "AIRBORNE", "SLOW"],
    W: ["W_FLASH", "SILENCE"],
    E: ["AA_RESET", "SLOW"],
    R: ["R_FLASH", "MAX_HP_UP", "EXECUTE"],
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
    Q: ["DMG_MAGIC", "TIMING_CAST", "ZONE"],
    W: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
    E: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "BUFF_STACK"],
    R: ["DMG_TRUE", "TIMING_CAST", "TARGETED"],
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
        "초가스의 덩치가 커지면 평타 사거리, 스킬 사정거리들이 증가함.", "E 스킬은 [[BUFF_STACK]] 3개를 초가스에게 부여하는것.\n 이때 평타를 때리면 버프스택을 소모해서 투사체를 추가로 발사하는 것."
      ],
        en: ["As Cho'Gath grows larger, basic attack range and skill ranges increase.", "E grants Cho'Gath 3 [[BUFF_STACK]] stacks.\nAuto-attacking consumes stacks to fire bonus projectiles."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 80,
    11: 70,
    16: 60,
  },

};

export default chogath;
