import type { ChampData } from "../interactions/types";

const darius: ChampData = {
  id: "darius",
  skills: {
    P: ["ST_CONDITIONAL", "AD_UP"],

    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],

    W: ["AA_RESET", "SLOW", "SEPARATOR", "ON_KILL", "CDR"],

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["AR_PEN"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["E_FLASH", "GRAB", "SLOW"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["R_FLASH", "SEPARATOR", "ON_KILL", "SKILL_RECAST"] },
      { label: { ko: "R 3레벨 처형", en: "R Rank 3 Execute" }, tags: ["ON_KILL", "CDR_RESET"] },
    ] },
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
      { label: { ko: "P 출혈 디버프", en: "P Bleed Debuff" }, tags: ["DEBUFF_STACK", "DOT", "DMG_PHYSICAL"] },
      { label: { ko: "P 5스택 시 다리우스 버프", en: "P Darius Buff at 5 Stacks" }, tags: ["BUFF", "AD_UP"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 도끼 자루 (안쪽)", en: "Q Axe Handle (Inner)" }, tags: ["DMG_PHYSICAL", "ST_DELAYED", "LOCKED", "AOE"] },
      { label: { ko: "Q 도끼 날 (바깥쪽) 추가 효과", en: "Q Axe Blade (Outer) Bonus Effect" }, tags: ["DMG_PHYSICAL", "DEBUFF_STACK", "HEAL"] },
    ] },
    
    W: ["DMG_PHYSICAL", "ON_HIT", "DEBUFF_STACK", "SEPARATOR", "AA_RESET", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR", "MANA_RESTORE"],

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "AR_PEN"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["TIMING_CAST", "AOE", "GRAB", "SLOW"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_TRUE", "TARGETED", "TIMING_CAST", "LUNGE", "SEPARATOR_NEWLINE", "SEPARATOR", "PER_STACK", "DMG_TRUE", "SEPARATOR", "ON_KILL", "SKILL_RECAST"] },
      { label: { ko: "R 3레벨 처형", en: "R Rank 3 Execute" }, tags: ["ON_KILL", "CDR_RESET"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P의 출혈([[DEBUFF]])은 [[BA]], [[Q]]끝, [[W]], [[R]]로 공격하면 중첩. \n 5스택이 되면 [[AD_UP]] [[BUFF]] 획득. \n [[BUFF]]가 있을때 [[DEBUFF]]를 1개라도 걸면 5스택으로 적용. \n \n" ,

          "Q는 주변 [[AOE]] 도끼를 회전하여 [[DMG_PHYSICAL]]. \n 안쪽 [[AOE]]는 감소된 피해. \n 바깥쪽 [[AOE]]는 온전한 피해와 [[DEBUFF_STACK]]과 [[HEAL]]. \n CC에 걸려도 시전 유지. \n \n",

          "W는 다음 [[BA]]를 [[EMPOWERED]]. \n [[DMG_PHYSICAL]]와 [[DEBUFF_STACK]], [[SLOW]]. \n [[ON_KILL]] [[MANA_RESTORE]]과 [[CDR]] 50%. \n \n",

          "E의 [[PASSIVE_BONUS]]는 상시 [[AR_PEN]] 획득.", 
          "E는 부채꼴 [[GRAB]]과 [[SLOW]]. \n \n",

          "R은 적 챔피언 [[TARGETED]] [[DMG_TRUE]]. \n 걸려있던 출혈 [[DEBUFF_STACK]]에 따라 20%씩 추가 피해. \n [[ON_KILL]] 20초간 [[SKILL_RECAST]] 가능.", 
          "3레벨 R 이면 [[CDR_RESET]]와 마나 소모 없음.",
        ],

        en: [
          "P's bleed ([[DEBUFF]]) stacks when hitting with [[BA]], the edge of [[Q]], [[W]], or [[R]]. \n At 5 stacks, Darius gains an [[AD_UP]] [[BUFF]]. \n While the [[BUFF]] is active, applying even 1 [[DEBUFF]] counts as 5 stacks. \n \n",
          "Q spins the axe in an [[AOE]] around Darius, dealing [[DMG_PHYSICAL]]. \n The inner [[AOE]] deals reduced damage. \n The outer [[AOE]] deals full damage with [[DEBUFF_STACK]] and [[HEAL]]. \n The cast continues even when hit by CC. \n \n",
          "W makes the next [[BA]] [[EMPOWERED]]. \n [[DMG_PHYSICAL]], [[DEBUFF_STACK]], and [[SLOW]]. \n [[ON_KILL]]: [[MANA_RESTORE]] and 50% [[CDR]]. \n \n",
          "E's [[PASSIVE_BONUS]] grants permanent [[AR_PEN]].",
          "E is a cone-shaped [[GRAB]] with [[SLOW]]. \n \n",
          "R deals [[TARGETED]] [[DMG_TRUE]] to an enemy champion. \n 20% bonus damage per bleed [[DEBUFF_STACK]] on the target. \n [[ON_KILL]]: can be [[SKILL_RECAST]] for 20 seconds.",
          "At rank 3 R, [[CDR_RESET]] and no mana cost.",
        ]

      },

      note2: {
        ko: [
        "발동된 Q는 [[ST_DELAYED]] 스킬로 \n CC로도 끊을 수 없음.", 
        "Q는 도끼 끝에 맞혀야 P중첩과 [[HEAL]]이 됨", 
        "R은 시전중에 대상이 사라지거나 존야를 쓰면 \n 스킬 시전이 취소됨. \n [[COOLDOWN]] 소모가 없음. \n 바로 다시 사용 가능함. (단, 샤코 R 제외)"
      ],
        en: [
          "Once activated, Q is a [[ST_DELAYED]] skill \n and cannot be interrupted even by CC.",
          "Q must hit with the axe's edge to apply P stacks and [[HEAL]]",
          "If the target disappears or uses Zhonya's while R is being cast, \n the cast is canceled. \n The [[COOLDOWN]] is not consumed. \n It can be used again immediately. (Except against Shaco's R)",
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

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Darius,
  // 최근 변경 V26.04). Q/W/E는 DDragon effectBurn, P/R은 비어 있어 위키 본문/템플릿 수치로 채움.
  skillTooltip: {
    P: {
      ko: "다리우스의 [[BA]]와 스킬 공격은 적에게 출혈을 일으켜 5초 동안 13~30([[LEVEL_SCALE]] 비례)(+30% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 최대 5회까지 출혈([[DEBUFF_STACK]])이 중첩됩니다. \n \n 최대 중첩 시 다리우스가 분노하며 \n 5초 동안 30~230([[LEVEL_SCALE]] 비례)의 [[AD_UP]]를 얻습니다.",
      en: "Darius's [[BA]]s and skill attacks cause enemies to bleed, dealing 13~30 (based on [[LEVEL_SCALE]]) (+30% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] over 5 seconds. \n The bleed ([[DEBUFF_STACK]]) stacks up to 5 times. \n \n At max stacks, Darius becomes enraged \n and gains 30~230 (based on [[LEVEL_SCALE]]) [[AD_UP]] for 5 seconds.",
    },
    Q: {
      ko: "다리우스가 도끼를 들어 올린 후 주위로 휘둘러 도끼날로는 50/80/110/140/170(+100/110/120/130/140% [[AD_SCALE]])의 [[DMG_PHYSICAL]], 도끼 자루로는 그 35%의 피해를 입힙니다. \n 도끼 자루에 맞은 적은 출혈이 중첩되지 않습니다. \n \n 다리우스는 도끼날로 맞힌 적 챔피언과 대형 정글 몬스터 하나당 [[SELF_MISSING_HP_SCALE]] 비례의 17%를 [[HEAL]]합니다. 최대 51%까지 회복됩니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Darius hefts his axe and swings it around him, dealing 50/80/110/140/170 (+100/110/120/130/140% [[AD_SCALE]]) [[DMG_PHYSICAL]] with the blade and 35% of that damage with the handle. \n Enemies hit by the handle do not gain bleed stacks. \n \n Darius [[HEAL]]s for 17% of his [[SELF_MISSING_HP_SCALE]] per enemy champion and large jungle monster hit by the blade, up to a maximum of 51%. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    W: {
      ko: "다리우스의 다음 [[BA]]는 40/45/50/55/60% [[AD_SCALE]]의 추가 [[DMG_PHYSICAL]]를 입히고, 1초 동안 90% [[SLOW]]시킵니다. \n \n 이 스킬로 대상을 처치하면 소모한 마나를 되돌려받고([[MANA_RESTORE]]), 재사용 대기시간이 50% 감소합니다(50% [[CDR]]). \n \n 이 스킬은 피해를 입힐 때 효과가 발동합니다. \n \n 5초의 [[COOLDOWN]].",
      en: "Darius's next [[BA]] deals an additional 40/45/50/55/60% [[AD_SCALE]] [[DMG_PHYSICAL]] and [[SLOW]]s by 90% for 1 second. \n \n If this skill kills the target, the mana cost is refunded ([[MANA_RESTORE]]) and the cooldown is reduced by 50% (50% [[CDR]]). \n \n This skill applies its effect on dealing damage. \n \n 5 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: 다리우스가 20/25/30/35/40%의 [[AR_PEN]]을 얻습니다. \n \n 사용 시: 다리우스가 도끼를 걸어 [[GRAB]]하여 1초 동안 40% [[SLOW]]시킵니다. \n \n 26/23.5/21/18.5/16초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Darius gains 20/25/30/35/40% [[AR_PEN]]. \n \n Active: Darius hooks enemies with his axe and [[GRAB]]s them, [[SLOW]]ing them by 40% for 1 second. \n \n 26/23.5/21/18.5/16 second [[COOLDOWN]].",
    },
    R: {
      ko: "다리우스가 적에게 뛰어올라([[LUNGE]]) 치명적 타격을 가하여 125/250/375(+75% 추가 [[AD_SCALE]])의 [[DMG_TRUE]]를 입힙니다. \n 대상의 과다출혈 중첩 하나당 20%의 피해를 추가로 입힙니다. 최대 250/500/750(+150% 추가 [[AD_SCALE]])의 피해가 적용됩니다. \n \n 이 스킬로 대상을 처치할 경우, 다리우스가 20초 안에 이 스킬을 [[SKILL_RECAST]]할 수 있습니다. \n 스킬 레벨이 3이 되면 이 스킬을 사용할 때 마나가 소모되지 않으며 챔피언을 처치하면 [[CDR_RESET]]됩니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Darius leaps ([[LUNGE]]) at an enemy and strikes a lethal blow, dealing 125/250/375 (+75% bonus [[AD_SCALE]]) [[DMG_TRUE]]. \n Deals 20% additional damage per Hemorrhage stack on the target, up to a maximum of 250/500/750 (+150% bonus [[AD_SCALE]]). \n \n If this skill kills the target, Darius can [[SKILL_RECAST]] it within 20 seconds. \n At skill rank 3, this skill costs no mana, and killing a champion triggers a [[CDR_RESET]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default darius;
