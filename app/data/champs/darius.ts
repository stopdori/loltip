import type { ChampData } from "../interactions/types";

const darius: ChampData = {
  id: "darius",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    W: ["AA_RESET", "SLOW"],
    E: ["E_FLASH", "GRAB", "SLOW", "AR_PEN"],
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
    P: { phases: [
      { label: { ko: "출혈", en: "Bleeding" }, tags: ["DMG_PHYSICAL", "DOT", "DEBUFF_STACK"] },
      { label: { ko: "5스택", en: "5 Stacks"  }, tags: ["BUFF", "AD_UP"] },
    ] },

    Q: { phases: [
      { label: { ko: "도끼 자루", en: "Handle" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "LOCKED", "AOE", "CAST_COMMIT"] },
      { label: { ko: "도끼 날", en: "Blade"  }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "DEBUFF_STACK", "HEAL"] },
    ] },
    
    W: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT", "DEBUFF_STACK"],
    E: ["PASSIVE_BONUS", "TIMING_CAST"],
    R: ["DMG_TRUE", "TIMING_CAST", "TARGETED", "BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "소규모 교전이 정말 강함.",
          "뒤에서 등장하면 공포 그 자체",
          "전문가분들 훈수 부탁드림.",
        ], en: [
          "Extremely strong in small skirmishes.",
          "Appearing from behind is pure terror.",
          "Tips from experts are welcome.",
        ] },
      note1: {

        ko: [
          "P의 [[DEBUFF]]는 상대를 [[BA]], [[Q]]끝, [[W]], [[R]]로 때리면 중첩. \n 5중첩이 되면 다리에게 [[BUFF]]가 생기고 [[AD_UP]]. \n [[BUFF]]가 있을때 [[DEBUFF]]를 1개라도 걸면 5중첩으로 적용." ,
          "Q는 끝에 맞혀야 큰 데미지와 [[DEBUFF]], [[HEAL]]. \n CC에 걸려도 시전 유지.",
          "W는 [[AA_RESET]]가능. \n [[SLOW]]는 90% 거의 [[ROOT]]급. \n W로 처치하면 [[MANA_RESTORE]]과 쿨감 50%.",
          "E는 부채꼴 [[GRAB]]과 [[SLOW]]. \n E의 [[PASSIVE_BONUS]]에 [[AR_PEN]].",
          "R은 [[DMG_TRUE]]. \n 걸려있던 [[DEBUFF]] 개수에 따라 추가 피해. \n R로 대상을 처치하면 20초간 [[SKILL_RECAST]] 가능. \n 3렙 궁이라면 완전 초기화에 마나도 들지않음.",
        ],

        en: [
          "P's [[DEBUFF]] stacks by hitting with [[BA]], Q outer edge, [[W]], or [[R]]. \n At 5 stacks, Darius gains [[BUFF]] and [[AD_UP]]. \n While [[BUFF]] is active, applying even 1 [[DEBUFF]] instantly counts as 5 stacks.",
          "Q must hit with the outer edge for full damage, [[DEBUFF]], and [[HEAL]]. \n Casting is not interrupted by CC.",
          "W enables [[AA_RESET]]. \n [[SLOW]] is 90% — nearly [[ROOT]]-level. \n Killing with W grants [[MANA_RESTORE]] and 50% cooldown reduction.",
          "E is a cone [[GRAB]] with [[SLOW]]. \n E's [[PASSIVE_BONUS]] grants [[AR_PEN]].",
          "R deals [[DMG_TRUE]]. \n Bonus damage based on current [[DEBUFF]] stacks. \n Killing with R allows [[SKILL_RECAST]] for 20s. \n At rank 3, fully resets with no mana cost.",
        ]

      },

      note2: {
        ko: [
        "P는 5중첩 또는 R로 막타를 치면 다리우스의 [[AD_UP]]가 있음", "발동된 Q는 CC로도 끊을 수 없음.\n[[CAST_COMMIT]]", "Q는 도끼 끝에 맞혀야 P중첩과 [[HEAL]]이 됨", "E스킬 [[AR_PEN]]은 [[PASSIVE_BONUS]]임", "R은 P스택당 추가데미지 있음\nR로 대상을 처치하면\n1,2렙 궁은 20초간 재사용 가능. 사용하지 않으면 사라짐 \n3렙궁은 완전 초기화. 안써도 사라지지않음", "R은 시전중에 대상이 사라지거나 존야를 쓰면 쿨타임이 돌지않아 바로 다시 사용 가능함 (단, 샤코 R 제외)"
      ],
        en: ["P applies [[AD_UP]] at 5 stacks or on R last-hit", "Once activated, Q cannot be interrupted even by CC.", "Q applies P stacks and [[HEAL]] only when hitting with the outer edge", "E's [[AR_PEN]] is a passive effect", "R deals bonus damage per P stack.\nKilling with R:\n1st/2nd rank: R can be recast for 20s. It disappears if unused.\n3rd rank: full cooldown reset that doesn't expire", "If the target disappears or uses Zhonya's mid-cast, R's cooldown doesn't start — it can be reused immediately (except vs Shaco R)"]
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

export default darius;
