import type { ChampData } from "../interactions/types";

const anivia: ChampData = {
  id: "anivia",
  skills: {
    P: ["REVIVE"],
    Q: ["SLOW", "STUN"],
    W: ["W_FLASH", "TERRAIN", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
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
    P: ["ST_CONDITIONAL", "REVIVE"],
    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "MARK", "DEBUFF", "SLOW", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC", "AOE", "MARK", "DEBUFF", "STUN"] },
    ] },
    W: ["TERRAIN", "TIMING_CAST", "ZONE", "LOCKED"],
    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SINGLE"],
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "TIMING_CAST", "ZONE", "DOT", "MARK", "DEBUFF", "SLOW"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "멀리서 W([[TERRAIN]])로 길막고 R 장판 깔아 [[SLOW]]걸고 \n 상대 이동방향에 Q날려서 [[STUN]]넣고 E로 딜. \n 무한반복"

        ], en: [
          "Cut off an escape path with W ([[TERRAIN]]) from a distance, apply [[SLOW]] with R, \n throw Q in the direction the enemy moves to land [[STUN]], then deal damage with E. \n Repeat.",
        ] },
      note1: {

        ko: [
          "P가 있을 때 죽으면 알이 되고 \n 하늘에서 내려오는 빛이 알에 닿으면 [[REVIVE]]",
          "Q는 경로에 서 있으면 냉각으로 인해 [[SLOW]]\n재사용 하면 폭발하여 [[STUN]]",
          "W([[TERRAIN]])로 이동 방해. \n 상대 챔피언과 겹쳐쓰면 약간의 [[AIRBORNE]]",
          "E는 얼음 땡 [[DEBUFF]]를 건 대상에게 2배 피해. \n [[DEBUFF]]는 Q, R로 걸 수 있음.",
          "R은 범위 [[SLOW]], [[DOT]] \n 단, 마나소모가 심함."

        ],

        en: [
          "Dying while P is active turns Anivia into an Egg. \n When the descending light touches the Egg, she [[REVIVE]]s.",
          "Enemies standing in Q's path are [[SLOW]]ed by chill.\nReactivating Q detonates it, applying [[STUN]].",
          "W ([[TERRAIN]]) blocks movement. \n Casting it overlapping an enemy champion causes a brief [[AIRBORNE]].",
          "E deals double damage to targets with the Frostbite [[DEBUFF]]. \n [[DEBUFF]] can be applied by Q or R.",
          "R applies area [[SLOW]] and [[DOT]]. \n However, it drains mana heavily.",
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 불가.", "P(알) 쿨타임은 240s. \n 애니비아와 P(알)는 완벽하게 동일하지만 \n 스킬, 이동, 공격이 불가능한 상태. \n 쉽게 니달리, 제이스처럼 [[TRANSFORM]].", "[[GW]] 묻고 알로변해도 풀피. \n [[GW]] 묻고 애니비아로 [[REVIVE]]해도 풀피.", "알에 텔 안타짐.", "알텔은 알이 되기전 텔을 타고 변하면 텔은 유지.", "W([[TERRAIN]])는 지형지물(협곡)에 사용 가능. 겹쳐짐.", "E는 설명이 조금 잘못 나와있음. \n 설명에는 냉각에 걸린 대상에게 2배 데미지 라고 적혀있지만, E의 2배 데미지는 사실 얼음땡 [[DEBUFF]]가 걸린 대상에게 발동함. \n\n 얼음땡 [[DEBUFF]]는 Q에는 즉시 \n R에는 장판이 다 펴지고 나서 걸기 시작. \n\n 그래서 가끔 RE로 2배 데미지가 안 터질 때 버그라고 생각할 수 있지만 사실은 얼음땡이 걸리기 전에 E를 적중 시킨 것.\n그래서 R을 쓰고 잠깐 기다렸다 E를 날려야 기대하는 데미지가 나옴."
      ],
        en: ["[[Q_FLASH]] not possible.", "P (Egg) cooldown is 240s. \n The Egg is identical to Anivia in all ways, \n but skills, movement, and attacks are disabled. \n Think of it like [[TRANSFORM]], similar to Nidalee or Jayce.", "[[GW]] on the egg still revives at full HP. \n [[GW]] on Anivia before [[REVIVE]] also revives at full HP.", "Cannot TP onto the egg.", "If TP is already channeling when you transform, the TP is maintained.", "W ([[TERRAIN]]) can be placed on terrain (walls). Overlapping is allowed.", "E's description is slightly misleading. \n It says double damage on chilled targets, but E actually double-damages targets with Frostbite [[DEBUFF]]. \n\n Frostbite [[DEBUFF]] from Q is applied instantly, \n while R's Frostbite only applies after the field fully expands. \n\n That's why RE sometimes fails to double-damage — E hits before Frostbite is applied.\nWait briefly after R before throwing E to get the expected damage."]
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
