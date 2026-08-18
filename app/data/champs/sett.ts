import type { ChampData } from "../interactions/types";

const sett: ChampData = {
  id: "sett",
  skills: {
    P: ["HP_REGEN_UP"],
    Q: ["MS_TO_ENEMY", "AA_RESET"],
    W: ["W_FLASH", "SHIELD", "CAST_COMMIT"],
    E: ["GRAB", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    R: ["R_FLASH", "SUPPRESS", "DASH", "WALL_HOP", "UNSTOPPABLE", "SEPARATOR", "SLOW"],
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
      { label: { ko: "강력한 손", en: "Heavy Hands" }, tags: ["DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "반인반수의 심장", en: "Heart of the Half-Beast" }, tags: ["PASSIVE_BONUS", "HP_REGEN_UP"] },
    ] },

    Q: ["DMG_PHYSICAL", "ON_HIT", "MS_TO_ENEMY"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "LOCKED", "SHIELD", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_TRUE",] },
    ] },

    E: ["DMG_PHYSICAL", "AOE", "GRAB", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TARGETED", "SUPPRESS", "DASH", "UNSTOPPABLE"] },
      { label: { ko: "R 폭발", en: "R Explosion" }, tags: ["DMG_PHYSICAL", "AOE", "SLOW"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "W가 정말 알파이자 오메가. \n 신중하게 딱 한 번 쓴다는 마인드.",
          "앞 라인에서 왔다 갔다 각 보다가 \n 상대 앞 라인 탱커를 R로 [[SUPPRESS]]하여 \n 상대 뒷 라인에 메다꽂으면 캐리. \n \n 곧바로 얻어맞으면서 싸우다가 \n W의 투지를 풀로 채우고 \n E로 [[AOE]] [[GRAB]]하여 [[STUN]]을 걸고 \n 풀스택 W를 상대 뒷 라인에 갈겨 삭제하면 캐리.",
        ], en: [
          "W is truly the alpha and omega. \n Treat it as one careful, well-timed cast.",
          "Look for an angle while weaving in and out of the front line, \n then [[SUPPRESS]] the enemy front-line tank with R \n and slam them into the enemy back line to carry. \n \n Or, trade blows to fill W's Grit to max, \n [[AOE]] [[GRAB]] with E to land a [[STUN]], \n then unload a fully-stacked W onto the enemy back line to wipe them out and carry.",
        ] },
      note1: {

        ko: [
          "세트는 [[BA]]가 양손을 번갈아가면서 공격. \n 항상 왼손부터 공격하고 \n 2초 안에 공격하면 오른손으로 공격. \n 오른손은 추가 [[DMG_PHYSICAL]]. \n 오른손의 공격 속도는 왼손의 8배.",

          "세트는 잃은 체력 비례 [[HP_REGEN_UP]]. \n \n",

          "Q는 [[MS_TO_ENEMY]]. \n 다음 두 번의 [[BA]]가 대상의 최대 체력 비례 [[DMG_PHYSICAL]]. \n \n",

          "W의 [[PASSIVE_BONUS]]는 \n 세트가 받은 피해량의 100%를 4초간 투지로 저장.\n 투지의 최대 저장량은 최대 체력의 50%.",

          "W는 모든 투지를 소모하여 투지만큼의 [[SHIELD]]를 획득. \n [[SHIELD]]는 3초에 걸쳐 사라짐. \n \n 전방에 소모한 투지에 비례한 [[AOE]] [[DMG_PHYSICAL]]. \n 정 중앙 [[AOE]]에 맞으면 [[DMG_TRUE]]. \n \n",

          "E는 전방과 후방에 [[AOE]] [[GRAB]]하여 [[DMG_PHYSICAL]], [[SLOW]]. \n 양옆에 최소 한 명 이상을 [[GRAB]] 했다면 \n [[SLOW]] 대신 [[STUN]]. \n \n",

          "R은 적 챔피언에게 세트가 [[UNSTOPPABLE]] [[DASH]]. \n 곧바로 [[SUPPRESS]]하여 함께 전방으로 도약. \n 세트는 이때도 [[UNSTOPPABLE]]. \n 공중에 떳다 땅에 메다꽂으면서 \n 대상의 체력 비례 광역 [[AOE]] [[DMG_PHYSICAL]], 99% [[SLOW]]. \n 단, 착지 지점과 멀어질수록 데미지 감소.",
        ],

        en: [
          "Sett's [[BA]] alternates between his two hands. \n He always leads with his left hand, \n and if he attacks again within 2s, he follows up with his right. \n The right hand deals bonus [[DMG_PHYSICAL]]. \n The right hand's attack speed is 8x the left hand's.",

          "Sett gains [[HP_REGEN_UP]] scaling with missing HP. \n \n",

          "Q grants [[MS_TO_ENEMY]]. \n His next two [[BA]]s deal bonus [[DMG_PHYSICAL]] based on the target's max HP. \n \n",

          "W's [[PASSIVE_BONUS]]: \n 100% of the damage Sett takes is stored as Grit over 4s. \n Grit can store up to 50% of his max HP.",

          "W consumes all Grit to gain a [[SHIELD]] equal to the amount consumed. \n The [[SHIELD]] decays over 3s. \n \n Deals [[AOE]] [[DMG_PHYSICAL]] in front, scaling with the Grit consumed. \n Targets hit by the very center of the [[AOE]] take [[DMG_TRUE]] instead. \n \n",

          "E [[AOE]] [[GRAB]]s in front and behind, dealing [[DMG_PHYSICAL]] and applying [[SLOW]]. \n If at least one target is [[GRAB]]bed on each side, \n [[STUN]] is applied instead of [[SLOW]]. \n \n",

          "R has Sett [[UNSTOPPABLE]] [[DASH]] to an enemy champion. \n He then [[SUPPRESS]]es them and leaps forward together. \n Sett remains [[UNSTOPPABLE]] throughout. \n They rise into the air and slam down, \n dealing [[AOE]] [[DMG_PHYSICAL]] scaling with the target's HP and a 99% [[SLOW]] on landing. \n Damage falls off the farther a target is from the landing point.",
        ]

      },

      note2: {
        ko: [
        "Q의 [[MS_TO_ENEMY]]는 범위 내에 있는 \n 적의 모습이 보여야 발동. \n 상대가 부쉬 안, [[STEALTH]]류로 숨어있으면 발동하지 않음.",
        "R의 폭발 범위는 고정된 [[AOE]]. \n 세트의 크기나 [[SUPPRESS]]된 대상의 크기와 비례하지 않음.",
      ],
        en: [
          "Q's [[MS_TO_ENEMY]] only triggers if an enemy \n within range is visible. \n It does not trigger if they're hidden in a bush or via [[STEALTH]].",
          "R's explosion range is a fixed [[AOE]]. \n It does not scale with Sett's size or the [[SUPPRESS]]ed target's size.",
        ]
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

export default sett;
