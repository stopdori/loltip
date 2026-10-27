import type { ChampData } from "../interactions/types";

const sett: ChampData = {
  id: "sett",
  skills: {
    P: ["HP_REGEN_UP"],
    Q: ["TO_ENEMY", "MS_UP", "AA_RESET"],
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

    Q: ["DMG_PHYSICAL", "ON_HIT", "TO_ENEMY", "MS_UP"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "LOCKED", "SHIELD", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_TRUE",] },
    ] },

    E: ["DMG_PHYSICAL", "AOE", "GRAB", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TARGETED", "SUPPRESS", "KNOCKBACK", "DASH", "UNSTOPPABLE"] },
      { label: { ko: "R 폭발", en: "R Explosion" }, tags: ["DMG_PHYSICAL", "AOE", "SLOW"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "세트는 [[BA]]가 양손을 번갈아가면서 공격. \n 항상 왼손부터 공격하고 \n 2초 안에 공격하면 오른손으로 공격. \n 오른손은 추가 [[DMG_PHYSICAL]]. \n 오른손의 공격 속도는 왼손의 8배.",

          "세트는 잃은 체력 비례 [[HP_REGEN_UP]]. \n \n",

          "Q는 [[TO_ENEMY]] [[MS_UP]]. \n 다음 두 번의 [[BA]]가 대상의 최대 체력 비례 [[DMG_PHYSICAL]]. \n \n",

          "W의 [[PASSIVE_BONUS]]는 \n 세트가 받은 피해량의 100%를 4초간 투지로 저장.\n 투지의 최대 저장량은 최대 체력의 50%.",

          "W는 모든 투지를 소모하여 투지만큼의 [[SHIELD]]를 획득. \n [[SHIELD]]는 3초에 걸쳐 사라짐. \n \n 전방에 소모한 투지에 비례한 [[AOE]] [[DMG_PHYSICAL]]. \n 정 중앙 [[AOE]]에 맞으면 [[DMG_TRUE]]. \n \n",

          "E는 전방과 후방에 [[AOE]] [[GRAB]]하여 [[DMG_PHYSICAL]], [[SLOW]]. \n 양옆에 최소 한 명 이상을 [[GRAB]] 했다면 \n [[SLOW]] 대신 [[STUN]]. \n \n",

          "R은 적 챔피언에게 세트가 [[UNSTOPPABLE]] [[DASH]]. \n 곧바로 [[SUPPRESS]]하여 함께 전방으로 도약. \n 세트는 이때도 [[UNSTOPPABLE]]. \n 공중에 떳다 땅에 메다꽂으면서 \n 대상의 체력 비례 광역 [[AOE]] [[DMG_PHYSICAL]], 99% [[SLOW]]. \n 단, 착지 지점과 멀어질수록 데미지 감소.",
        ],

        en: [
          "Sett's [[BA]] alternates between his two hands. \n He always leads with his left hand, \n and if he attacks again within 2s, he follows up with his right. \n The right hand deals bonus [[DMG_PHYSICAL]]. \n The right hand's attack speed is 8x the left hand's.",

          "Sett gains [[HP_REGEN_UP]] scaling with missing HP. \n \n",

          "Q grants [[MS_UP]] [[TO_ENEMY]]. \n His next two [[BA]]s deal bonus [[DMG_PHYSICAL]] based on the target's max HP. \n \n",

          "W's [[PASSIVE_BONUS]]: \n 100% of the damage Sett takes is stored as Grit over 4s. \n Grit can store up to 50% of his max HP.",

          "W consumes all Grit to gain a [[SHIELD]] equal to the amount consumed. \n The [[SHIELD]] decays over 3s. \n \n Deals [[AOE]] [[DMG_PHYSICAL]] in front, scaling with the Grit consumed. \n Targets hit by the very center of the [[AOE]] take [[DMG_TRUE]] instead. \n \n",

          "E [[AOE]] [[GRAB]]s in front and behind, dealing [[DMG_PHYSICAL]] and applying [[SLOW]]. \n If at least one target is [[GRAB]]bed on each side, \n [[STUN]] is applied instead of [[SLOW]]. \n \n",

          "R has Sett [[UNSTOPPABLE]] [[DASH]] to an enemy champion. \n He then [[SUPPRESS]]es them and leaps forward together. \n Sett remains [[UNSTOPPABLE]] throughout. \n They rise into the air and slam down, \n dealing [[AOE]] [[DMG_PHYSICAL]] scaling with the target's HP and a 99% [[SLOW]] on landing. \n Damage falls off the farther a target is from the landing point.",
        ]

      },

      note2: {
        ko: [
        "Q의 [[TO_ENEMY]] [[MS_UP]]는 범위 내에 있는 \n 적의 모습이 보여야 발동. \n 상대가 부쉬 안, [[STEALTH]]류로 숨어있으면 발동하지 않음.",
        "R의 폭발 범위는 고정된 [[AOE]]. \n 세트의 크기나 [[SUPPRESS]]된 대상의 크기와 비례하지 않음.",
      ],
        en: [
          "Q's [[MS_UP]] [[TO_ENEMY]] only triggers if an enemy \n within range is visible. \n It does not trigger if they're hidden in a bush or via [[STEALTH]].",
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_settpassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V25.17)로 채움(CDragon 게임 데이터 sett.bin.json과 대조).
  skillTooltip: {
    P: {
      ko: "세트는 [[BA]] 공격 시 양 주먹을 번갈아 사용합니다. \n 왼쪽 주먹을 날린 후 곧바로 오른쪽 주먹을 날리며 5~100([[LEVEL_SCALE]] 비례)(+55% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 추가로 입힙니다. \n \n 세트가 잃은 체력의 5%당 0.075/0.25/0.5/1/1.025/1.05([[LEVEL_SCALE]] 비례)의 체력 재생([[HP_REGEN]]) 효과를 얻습니다. ([[SELF_MISSING_HP_SCALE]])",
      en: "",
    },
    Q: {
      ko: "세트가 싸움을 찾아 적 챔피언을 향해 이동할 때 1.5초 동안 [[MS_SCALE]]가 30% 증가합니다. \n \n 또한 세트의 다음 두 번의 [[BA]] 공격은, ([[EMPOWERED]]) \n 10/20/30/40/50+[[TARGET_MAXHP_SCALE]] 비례의 1%(+[[AD_SCALE]] 100당 1/1.5/2/2.5/3%)에 해당하는 [[DMG_PHYSICAL]]를 추가로 입힙니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 세트가 받은 피해량의 100%를 최대 최대 체력의 50%까지 투지로 저장합니다. \n 투지는 피해를 입고 4초 후에 빠르게 감소합니다. \n \n 사용 시: 세트가 모든 투지를 소모해 소모한 투지의 100%에 해당하는 [[SHIELD]]를 얻습니다. \n 보호막은 3초에 걸쳐 사라집니다. \n 이후 세트가 강력한 펀치를 날려 중심에 있는 적에게, \n 80/100/120/140/160+소모한 투지의 25%(+추가 공격력 100당 25%)에 해당하는 [[DMG_TRUE]]를 입힙니다. \n 중심에 있지 않은 적은 [[DMG_PHYSICAL]]를 입습니다. \n \n 18/16.5/15/13.5/12초의 [[COOLDOWN]].",
      en: "",
    },
    E: {
      ko: "세트가 양옆에 있는 적들을 서로 부딪치게 하여 50/70/90/110/130(+60% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 0.5초 동안 70% [[SLOW]]시킵니다. \n 양옆에 최소 한 명씩의 적을 붙잡았다면 부딪힌 모든 적들이 1초 동안 [[STUN]]합니다. \n \n 16/14.5/13/11.5/10초의 [[COOLDOWN]].",
      en: "",
    },
    R: {
      ko: "세트가 적 챔피언을 붙잡고 [[SUPPRESS]]한 후 앞으로 도약해([[DASH]]) 바닥에 내리꽂습니다. ([[TARGETED]]) \n 주변에 있는 적은 200/300/400(+120% 추가 [[AD_SCALE]])+붙잡은 적 추가 체력의 40/50/60%에 해당하는 [[DMG_PHYSICAL]]를 입고, \n 1초 동안 99% [[SLOW]]됩니다. ([[AOE]]) \n 세트가 착지하는 지점에서 멀리 떨어질수록 더 적은 피해를 입습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "",
    },
  },

};

export default sett;
