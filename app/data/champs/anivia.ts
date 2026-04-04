import type { ChampData } from "../interactions/types";

const anivia: ChampData = {
  id: "anivia",
  skills: {
    P: ["REVIVE"],
    Q: ["SLOW", "STUN"],
    W: ["W_FLASH", "TERRAIN", "AIRBORNE"],
    E: ["E_FLASH"],
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
    P: [],
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "MARK", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE", "MARK"] },
    ] },
    W: ["TIMING_CAST", "ZONE", "LOCKED"],
    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SINGLE"],
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "ZONE", "DOT", "MARK"],
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
        "[[Q_FLASH]] 불가.", "P(알) 쿨타임은 240s.\n애니비아와 P(알)는 완벽하게 동일하지만, 스킬, 이동, 공격이 불가능한 상태.\n[[GW]] 묻고 알로변해도 풀피.\n알에 텔 안타짐.\n알텔은 알이 되기전 텔을 타고 변하면 텔은 유지.", "Q는 경로에 서 있으면 냉각으로 인해 [[SLOW]]\n재사용 하면 폭발하여 [[STUN]]", "Q1를 사용하고 애니비아가 CC에 걸리면 Q2를 사용할 수 없음.", "W(벽)는 지형지물(벽)에 사용 가능. 겹쳐짐.", "E는 설명이 조금 잘못 나와있음.\n설명에는 냉각에 걸린 대상에게 2배 데미지 라고 적혀있지만, E의 2배 데미지는 사실 얼음땡 효과가 걸린 대상에게 발동함.\n얼음땡 효과는 Q에는 즉시, R에는 장판이 다 펴지고 나서 걸기 시작.", "그래서 가끔 RE로 2배 데미지가 안 터질 때 버그라고 생각할 수 있지만 사실은 얼음땡이 걸리기 전에 E를 적중 시킨 것.\n그래서 R을 쓰고 잠깐 기다렸다 E를 날려야 기대하는 데미지가 나옴."
      ],
        en: ["[[Q_FLASH]] not possible", "P (Egg) cooldown is 240s.\nThe Egg is identical to Anivia in all ways, but skills, movement, and attacks are disabled.\n[[GW]] applies to the egg but it revives at full HP anyway.\nCannot TP onto the egg.\nHowever, if TP is already channeling when you transform into the egg, the TP is maintained.", "Q applies [[SLOW]] via chill to enemies standing in its path.\nReactivating it detonates the explosion and applies [[STUN]]", "If Anivia is hit by CC after casting Q1, Q2 cannot be activated.", "W (Wall) can be placed on terrain. Walls can overlap.", "E's description is slightly misleading.\nIt says double damage on chilled targets, but E actually double-damages targets with Frostbite (the frozen debuff).\nQ and R both chill, but Frostbite from Q is instant while R's Frostbite only applies after the field fully expands", "That's why RE sometimes fails to double-damage — R hasn't fully expanded yet before E hits.\nWait briefly after R before throwing E to get the expected damage"]
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

export default anivia;
