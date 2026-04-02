import type { ChampData } from "../interactions/types";

const fizz: ChampData = {
  id: "fizz",
  skills: {
    P: ["GHOSTING"],
    Q: ["Q_FLASH", "WALL_HOP"],
    W: ["AA_RESET"],
    E: ["E_FLASH", "SLOW", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    R: ["R_FLASH", "SLOW", "AIRBORNE"],
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
    Q: ["DMG_MAGIC", "TARGETED", "ON_HIT", "DASH"],
    W: { phases: [
      { label: { ko: "W 기본효과", en: "W Passive" }, tags: ["PASSIVE_BONUS", "DMG_MAGIC", "ON_HIT", "DOT"] },
      { label: { ko: "W 사용", en: "W Active" }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DASH", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },
    R: { phases: [
      { label: { ko: "미끼", en: "" }, tags: ["TIMING_CAST", "PROJECTILE", "PIERCE_MINION"] },
      { label: { ko: "상어", en: "" }, tags: ["DMG_MAGIC", "AOE"] },
    ] },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "Q를 벽 넘어 대상에게 시전해야만 벽이 넘어짐.\n벽 넘어가 아닌 벽에 가까운 대상에게 Q를 쓰면 벽을 넘지 못함.", "E에 [[SLOW]]는 재사용 없이 착지해야 적용 됨", "R의 [[SLOW]]는 두 번 걸림\n1번 미끼가 적중할 때\n2번 상어가 물었을 때", "R은 마우스 멀리놓고 사용해야 멀리 날아감"
      ],
        en: ["Q wall-hop only works by targeting an enemy across the wall", "E's [[SLOW]] only applies if landing without recasting", "R's [[SLOW]] applies twice:\n1. When the fish hits\n2. When the shark bites", "Place mouse far away before using R for maximum range"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default fizz;
