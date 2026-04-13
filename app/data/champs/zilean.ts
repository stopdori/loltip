import type { ChampData } from "../interactions/types";

const zilean: ChampData = {
  id: "zilean",
  skills: {
    P: [],
    Q: ["Q_FLASH", "STUN"],
    W: [],
    E: ["E_FLASH", "SLOW", "MS_UP"],
    R: ["R_FLASH", "REVIVE", "UNTARGETABLE", "BUFF_FORM"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL"],

    Q: { phases: [
      { label: { ko: "폭탄 투척", en: "Bomb Toss" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "폭탄 장판", en: "Bomb Land" }, tags: ["DMG_MAGIC", "ZONE"] },
      { label: { ko: "폭탄 부착", en: "Bomb Land" }, tags: ["HOMING", "DMG_MAGIC", "AOE"] },
      { label: { ko: "폭탄 2 부착 폭발", en: "Bomb Detonates (2 Attached)" }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE", "STUN"] },
    ] },

    W: [],

    E: { phases: [
      { label: { ko: "아군", en: "Allies" }, tags: ["TARGETED"] },
      { label: { ko: "상대", en: "Enemies" }, tags: ["TARGETED", "NON_PROJECTILE", "SLOW"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "TARGETED"] },
      { label: { ko: "부활", en: "Revive" }, tags: ["ST_CONDITIONAL", "UNTARGETABLE", "REVIVE"] },
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
        "Q는 동일 대상에게 2개 적중시키면\n먼저 맞은 Q가 폭발하면서 범위[[STUN]]", "E는 아군에게 사용하면 [[MS_UP]]\n적군에게 사용하면 [[SLOW]]", "R은 지속시간 5초, [[REVIVE]]하는데 3초\n[[REVIVE]]할때 [[HEAL]]이라 [[GW]]효과 적용 가능"
      ],
        en: ["Q applies AoE [[STUN]] when two Q's hit the same target, detonating the first", "E applies [[MS_UP]] to allies and [[SLOW]] to enemies", "R lasts 5s; [[REVIVE]] takes 3s.\n[[REVIVE]] heals, so [[GW]] applies"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 90,
    16: 60,
  },

};

export default zilean;
