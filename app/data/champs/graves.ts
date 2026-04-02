import type { ChampData } from "../interactions/types";

const graves: ChampData = {
  id: "graves",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "NEARSIGHT", "SLOW"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["R_FLASH", "WALL_HOP", "CC_BUFFER"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "PROJECTILE", ],
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "ZONE", "AOE",],
    W: ["DMG_MAGIC", "PROJECTILE", "ZONE", "AOE"],
    E: ["BUFF_STACK", "DASH"],
    
    R:{ phases: [
      { label: { ko: "준비단계", en: "Wind-up" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "후진단계", en: "Retreat" }, tags: ["ST_DELAYED", "DASH"] },
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE_MINION"] },
      { label: { ko: "R 폭발", en: "R Explodes" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "AOE"] },
    ] },
     
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "두꺼운벽에 붙어서 평E평하면 평캔 엄청빠름", "W의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용", "R 시전중에 방해 받으면 투사체는 발사되고 이동은 경우에따라 제한됨"
      ],
        en: ["Autoattacking while hugging a thick wall with E creates extremely fast AA cancels", "W's [[SLOW]] continuously applies to targets inside the area", "If interrupted during R cast, the projectile still fires but movement may be restricted depending on the situation"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

};

export default graves;
