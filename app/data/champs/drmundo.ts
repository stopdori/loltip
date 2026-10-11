import type { ChampData } from "../interactions/types";

const drmundo: ChampData = {
  id: "drmundo",
  skills: {
    P: ["CC_IMMUNE", "DROP", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "CDR"],
    Q: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    W: ["HEAL", "SEPARATOR", "ON_CHAMP_HIT", "HEAL", "X2"],

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["AD_UP"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["AA_RESET", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK"] },
    ] },

    R: ["MAX_HP_UP", "HP_REGEN", "MS_UP"],
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
      { label: { ko: "P CC면역", en: "P CC Immunity" }, tags: ["COOLDOWN", "SEPARATOR", "ST_CONDITIONAL", "CC_IMMUNE", "DROP"] },
      { label: { ko: "P 화학통 드롭", en: "P Canister Drop" }, tags: ["HEAL", "CDR"] },
    ] },
    
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "HEAL", "X0.5", "SEPARATOR", "ON_CHAMP_HIT", "HEAL"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE", "DOT", "GREY_HEALTH", "SEPARATOR", "RECAST_DETONATE"] },
      { label: { ko: "W 폭발", en: "W Detonation" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "GREY_HEALTH", "HEAL"] },
    ] },

    E: { phases: [
      { label: { ko: "E 패시브", en: "E Passive" }, tags: ["PASSIVE_BONUS", "AD_UP"] },
      { label: { ko: "E 액티브", en: "E Active" }, tags: ["AA_RESET", "DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "ON_KILL", "NON_PROJECTILE", "KNOCKBACK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["BUFF_FORM", "MAX_HP_UP", "HP_REGEN", "MS_UP"] },
      { label: { ko: "R 스킬 레벨 3", en: "R Skill Rank 3" }, tags: ["ST_CONDITIONAL", "HS_POWER"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[COOLDOWN]]마다 [[CC_IMMUNE]] 1번. \n 현재 체력의 4%를 소모하고 화학통 [[DROP]]. \n 주우면 [[SELF_MAXHP_SCALE]]의 4%를 [[HEAL]], 15초 [[CDR]]. \n 적이 주우면 파괴. \n \n",

          "Q는 전방에 [[PROJECTILE]]를 발사. \n [[TARGET_CURRENT_HP_SCALE]] 비례 [[DMG_MAGIC]]와 [[SLOW]]. \n 체력을 소모하여 사용. \n [[ON_CHAMP_HIT]] 소모량만큼 [[HEAL]]. \n 나머지 대상은 절반만큼 [[HEAL]]. \n \n",

          "W는 3초간 주변 [[AOE]] [[DMG_MAGIC]]. \n 처음 0.75초간 맞은 피해의 80~95%로 \n 나머지 2.25초 동안 25%를 [[GREY_HEALTH]]으로 저장.", 
          "지속시간 종료 또는 W [[RECAST_DETONATE]] 시. \n 주변 [[AOE]] [[SELF_BONUS_HP_SCALE]] 비례 [[DMG_MAGIC]]. \n [[ON_CHAMP_HIT]] [[GREY_HEALTH]]의 100%를 [[HEAL]]. \n 맞지 않으면 50%만큼 [[HEAL]]. \n \n",

          "E의 [[PASSIVE_BONUS]]는 \n [[SELF_MAXHP_SCALE]] 비례 [[AD_UP]].", 
          "E는 다음 [[BA]] [[EMPOWERED]]. \n [[SELF_BONUS_HP_SCALE]] 비례 [[DMG_PHYSICAL]]. \n [[SELF_MISSING_HP_SCALE]] 비례 위력 증가. \n [[ON_KILL]] 뒤로 [[KNOCKBACK]] 되면서 동일한 피해. \n \n",

          "R은 10초동안 [[BUFF]]획득. \n [[BUFF]]는 [[SELF_MISSING_HP_SCALE]] 비례 즉시 [[MAX_HP_UP]], \n [[MS_UP]]와 [[SELF_MAXHP_SCALE]] 비례 [[HP_REGEN]].", 
          "3렙궁은 범위내 적 챔피언 하나당 \n [[SELF_MAXHP_SCALE]], [[HP_REGEN]] 효과 5%씩 증가.",
        ],

        en: [
          "P grants [[CC_IMMUNE]] once per [[COOLDOWN]]. \n Costs 4% of current health and [[DROP]]s a chemical canister. \n Picking it up [[HEAL]]s 4% of [[SELF_MAXHP_SCALE]] and grants 15 seconds of [[CDR]]. \n It is destroyed if an enemy picks it up. \n \n",
          "Q fires a [[PROJECTILE]] forward. \n [[DMG_MAGIC]] based on [[TARGET_CURRENT_HP_SCALE]] and [[SLOW]]. \n Costs health to use. \n [[ON_CHAMP_HIT]]: [[HEAL]]s for the amount spent. \n Other targets [[HEAL]] for half. \n \n",
          "W deals [[AOE]] [[DMG_MAGIC]] around Mundo for 3 seconds. \n Stores 80~95% of damage taken during the first 0.75 seconds \n and 25% during the remaining 2.25 seconds as [[GREY_HEALTH]].",
          "When the duration ends or on W [[RECAST_DETONATE]]. \n [[AOE]] [[DMG_MAGIC]] around Mundo based on [[SELF_BONUS_HP_SCALE]]. \n [[ON_CHAMP_HIT]]: [[HEAL]]s 100% of [[GREY_HEALTH]]. \n If it misses, [[HEAL]]s 50%. \n \n",
          "E's [[PASSIVE_BONUS]] grants \n [[AD_UP]] based on [[SELF_MAXHP_SCALE]].",
          "E makes the next [[BA]] [[EMPOWERED]]. \n [[DMG_PHYSICAL]] based on [[SELF_BONUS_HP_SCALE]]. \n Power increases based on [[SELF_MISSING_HP_SCALE]]. \n [[ON_KILL]], the target is [[KNOCKBACK]]ed backward, dealing the same damage. \n \n",
          "R grants a [[BUFF]] for 10 seconds. \n The [[BUFF]] gives instant [[MAX_HP_UP]] based on [[SELF_MISSING_HP_SCALE]], \n [[MS_UP]], and [[HP_REGEN]] based on [[SELF_MAXHP_SCALE]].",
          "At rank 3, for each enemy champion in range, \n the [[SELF_MAXHP_SCALE]] and [[HP_REGEN]] effects increase by 5%.",
        ]

      },

      note2: {
        ko: [
        "P의 [[CC_IMMUNE]]은 [[SLOW]]에 발동하지 않음.", 
        "W는 극딜 당하기 바로 전에 사용하고 \n W [[RECAST_DETONATE]] 해서 끝내기 보다. \n 3초를 다 맞고 자동으로 종료될 때 \n [[ON_CHAMP_HIT]] 효율이 제일 좋음.", 
        "간단하게 심하게 맞을 때 W를 키고 \n W가 꺼질 때까지 적 챔피언에게 비벼라.", 
        "E로 챔피언 [[ON_KILL]] 챔피언도 [[KNOCKBACK]] 가능."
      ],
        en: [
          "P's [[CC_IMMUNE]] does not trigger on [[SLOW]].",
          "Use W right before taking burst damage, \n and rather than ending it with W [[RECAST_DETONATE]], \n let it run the full 3 seconds and end automatically \n for the best [[ON_CHAMP_HIT]] value.",
          "Simply put, turn on W when taking heavy damage \n and stick to enemy champions until W ends.",
          "On a champion [[ON_KILL]] with E, champions can also be [[KNOCKBACK]]ed.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Dr._Mundo,
  // 최근 변경 V26.08). DDragon effectBurn/vars가 비어 있어 위키 본문/템플릿 수치로 채움.
  // R 지속 회복량은 위키에 20/40/60%(0.5초당 1/2/3%)와 10/20/30% 표기가 함께 있어 전자를 채택(확인 필요).
  skillTooltip: {
    P: {
      ko: "문도 박사가 처음으로 적중하는 [[IMMOBILIZING]] 효과에 저항하며, 현재 체력의 4%를 잃고 근처에 화학 물질이 든 통을 떨어뜨립니다. ([[DROP]]) \n 통 위로 이동하면 통을 주워 [[SELF_MAXHP_SCALE]]의 4%를 [[HEAL]]하고 이 스킬의 재사용 대기시간을 15초 줄입니다. (15초 [[CDR]]) \n \n 또한 문도 박사가 5초당 [[SELF_MAXHP_SCALE]] 비례 0.4~2.3%([[LEVEL_SCALE]] 비례)의 [[HP_REGEN_UP]]를 얻습니다. \n \n 60~15초([[LEVEL_SCALE]] 비례)의 [[COOLDOWN]].",
      en: "Dr. Mundo resists the first [[IMMOBILIZING]] effect that hits him, losing 4% of his current health and dropping a chemical canister nearby. ([[DROP]]) \n Moving over the canister picks it up, [[HEAL]]ing 4% of [[SELF_MAXHP_SCALE]] and reducing this skill's cooldown by 15 seconds. (15 second [[CDR]]) \n \n Dr. Mundo also gains [[HP_REGEN_UP]] of 0.4~2.3% (based on [[LEVEL_SCALE]]) of [[SELF_MAXHP_SCALE]] per 5 seconds. \n \n 60~15 second (based on [[LEVEL_SCALE]]) [[COOLDOWN]].",
    },
    Q: {
      ko: "문도 박사가 뼈톱을 던져 처음 맞는 적에게 [[TARGET_CURRENT_HP_SCALE]]의 20/22.5/25/27.5/30%에 해당하는 [[DMG_MAGIC]]를 입히고 2초 동안 40% [[SLOW]]시킵니다. \n \n 뼈톱이 몬스터 또는 [[ON_CHAMP_HIT]] 문도 박사가 50/60/70/80/90의 체력을 [[HEAL]]합니다. \n 다른 대상에게 적중하면 25/30/35/40/45의 체력을 [[HEAL]]합니다. \n \n 4초의 [[COOLDOWN]].",
      en: "Dr. Mundo throws his bonesaw, dealing [[DMG_MAGIC]] equal to 20/22.5/25/27.5/30% of [[TARGET_CURRENT_HP_SCALE]] to the first enemy hit and [[SLOW]]ing them by 40% for 2 seconds. \n \n If the bonesaw hits a monster or [[ON_CHAMP_HIT]], Dr. Mundo [[HEAL]]s 50/60/70/80/90 health. \n If it hits any other target, he [[HEAL]]s 25/30/35/40/45 health. \n \n 4 second [[COOLDOWN]].",
    },
    W: {
      ko: "문도 박사가 제세동기를 충전하여 주변 적에게 최대 3초까지 초당 20/35/50/65/80의 [[DMG_MAGIC]]를 입힙니다. \n \n 추가로 첫 0.75초 동안에는 입는 피해의 80~95%([[LEVEL_SCALE]] 비례)를, 남은 지속시간에는 입는 피해의 25%를 회색 체력으로 저장하고 W [[RECAST_DETONATE]]할 수 있습니다. \n \n [[RECAST_DETONATE]] 시: 제세동기가 폭발하여 주변 적에게 20/35/50/65/80(+7% [[SELF_BONUS_HP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n [[ON_CHAMP_HIT]] 문도 박사가 회색 체력의 100%를 [[HEAL]]합니다. \n 그렇지 않으면 회색 체력의 50%를 [[HEAL]]합니다. \n \n 17/16.5/16/15.5/15초의 [[COOLDOWN]].",
      en: "Dr. Mundo charges a defibrillator, dealing 20/35/50/65/80 [[DMG_MAGIC]] per second to nearby enemies for up to 3 seconds. \n \n Additionally, he stores 80~95% (based on [[LEVEL_SCALE]]) of damage taken during the first 0.75 seconds, and 25% of damage taken for the remaining duration, as grey health, and can W [[RECAST_DETONATE]]. \n \n On [[RECAST_DETONATE]]: the defibrillator detonates, dealing 20/35/50/65/80 (+7% [[SELF_BONUS_HP_SCALE]]) [[DMG_MAGIC]] to nearby enemies. \n [[ON_CHAMP_HIT]], Dr. Mundo [[HEAL]]s 100% of the grey health. \n Otherwise, he [[HEAL]]s 50% of the grey health. \n \n 17/16.5/16/15.5/15 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[PASSIVE_BONUS]]: 문도 박사가 [[SELF_MAXHP_SCALE]] 비례 2/2.3/2.6/2.9/3.2%의 [[AD_UP]]를 얻습니다. \n \n 사용 시: 문도 박사가 왕진 가방을 맹렬하게 휘둘러 다음 [[BA]] 시 5/15/25/35/45(+5% [[SELF_BONUS_HP_SCALE]])의 [[DMG_PHYSICAL]]를 추가로 입힙니다. \n 이 수치는 문도 박사의 [[SELF_MISSING_HP_SCALE]]에 비례하여 최대 40%까지 증가합니다. \n 이때 처치된 적은 밀려나며 지나치는 적에게 5/15/25/35/45(+5% [[SELF_BONUS_HP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 9/8.25/7.5/6.75/6초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Dr. Mundo gains [[AD_UP]] equal to 2/2.3/2.6/2.9/3.2% of [[SELF_MAXHP_SCALE]]. \n \n Active: Dr. Mundo swings his medical bag violently, making his next [[BA]] deal an additional 5/15/25/35/45 (+5% [[SELF_BONUS_HP_SCALE]]) [[DMG_PHYSICAL]]. \n This amount increases by up to 40% based on Dr. Mundo's [[SELF_MISSING_HP_SCALE]]. \n Enemies killed by this are knocked away, dealing 5/15/25/35/45 (+5% [[SELF_BONUS_HP_SCALE]]) [[DMG_PHYSICAL]] to enemies they pass through. \n \n 9/8.25/7.5/6.75/6 second [[COOLDOWN]].",
    },
    R: {
      ko: "문도 박사가 화학 물질을 투여하여 [[SELF_MISSING_HP_SCALE]]의 15/20/25%를 [[MAX_HP_UP]]로 10초간 획득하고, \n 15/25/35%의 [[MS_UP]]를 얻고 10초에 걸쳐 [[SELF_MAXHP_SCALE]]의 20/40/60%만큼 [[HEAL]]합니다. \n \n 스킬 레벨이 3이 되면 근처에 있는 적 챔피언 하나당 두 회복 효과 모두 5%씩 추가로 증가합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Dr. Mundo injects himself with chemicals, gaining 15/20/25% of [[SELF_MISSING_HP_SCALE]] as [[MAX_HP_UP]] for 10 seconds, \n gaining 15/25/35% [[MS_UP]], and [[HEAL]]ing for 20/40/60% of [[SELF_MAXHP_SCALE]] over 10 seconds. \n \n At skill rank 3, both healing effects are increased by an additional 5% for each nearby enemy champion. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default drmundo;
