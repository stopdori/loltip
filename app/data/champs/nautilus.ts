import type { ChampData } from "../interactions/types";

const nautilus: ChampData = {
  id: "nautilus",
  skills: {
    P: ["ROOT"],
    Q: ["GRAB", "STUN", "CC_BUFFER"],
    W: ["SHIELD", "AA_RESET"],
    E: ["E_FLASH", "SLOW"],
    R: ["R_FLASH", "AIRBORNE", "STUN"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["POSITION_REVEAL"],
    R: ["POSITION_REVEAL"],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "ON_HIT"],
    Q: { phases: [
      { label: { ko: "투척단계", en: "Throw" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "CC_BUFFER"] },
      { label: { ko: "그렙단계", en: "Grab"  }, tags: ["DASH"] },
    ] },
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["BUFF_STACK"] },
      { label: { ko: "W 주변피해", en: "W AOE" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "DOT"] },
    ] },
    E: ["DMG_MAGIC", "TIMING_CAST", "ZONE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "AOE", "HOMING"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", "P는 상대 챔피언 하나당 한번.\n챔피언 개별의 쿨타임이 존재.", "Q는 벽이나 구조물에 적중하면 이동 가능함", "Q스킬은 두단계로 나뉨 투척/그렙\n투척탄계에 노틸러스가 맞은 CC는 유효하지만\n그렙단계가 발동되어 앞으로 이동하는것\n그렙단계에는 CC저항력 없음", "W의 [[SHIELD]]가 유지되는 동안 주변에 피해를 줌.", "R은 대상을 지정하면 추적하는 기공포가 따라가고, 따라가는 경로에 서있는 적도 피해와 [[AIRBORNE]]을 당함." 
      ],
        en: ["[[Q_FLASH]] not possible.\nQ can pull Nautilus toward walls and structures", "Q has two phases: throw / grapple.\nCC during the throw phase is valid.\nOnce the grapple phase starts and Nautilus moves forward, there is no CC immunity"]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default nautilus;
