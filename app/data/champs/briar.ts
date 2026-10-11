import type { ChampData } from "../interactions/types";

const briar: ChampData = {
  id: "briar",
  skills: {
    P: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "DRAIN"],

    Q: ["W_FLASH", "AR_MR_SHRED", "SEPARATOR", "DASH", "WALL_HOP"],

    W: ["AA_RESET", "SEPARATOR", "BUFF_FORM", "AS_UP", "MS_UP", "DRAIN", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP"],

    E: ["DMG_REDUCE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK", "SEPARATOR", "WALL_COLLISION", "STUN"],

    R: { phases: [
      { label: { ko: "R1 투사체", en: "R1 Projectile" }, tags: ["DISRUPT", "TRUE_SIGHT"] },
      { label: { ko: "R2 준비", en: "R2 Wind-up" }, tags: ["ST_CONDITIONAL", "CC_IMMUNE"] },
      { label: { ko: "R2 돌진", en: "R2 Dash" }, tags: ["DASH", "WALL_HOP", "UNSTOPPABLE", "SEPARATOR", "ST_CONDITIONAL", "FEAR"] },
      { label: { ko: "R2 버프 (W 상태에 추가)", en: "R2 Buff (added to W state)" }, tags: ["MS_UP", "AR_MR_UP", "LIFESTEAL"] },
    ] },
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: ["DMG_PHYSICAL", "DOT", "DEBUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "DRAIN"],

    Q: ["DMG_PHYSICAL", "ON_HIT", "TARGETED", "AR_MR_SHRED", "SEPARATOR_NEWLINE", "SEPARATOR", "DEBUFF_STACK", "SEPARATOR", "DASH", "WALL_HOP"],

    W: { phases: [
      { label: { ko: "W 버프", en: "W Buff" }, tags: ["AS_UP", "MS_UP"] },
      { label: { ko: "W", en: "W" }, tags: ["BUFF_FORM", "ON_HIT", "DMG_PHYSICAL", "DEBUFF_STACK", "SEPARATOR","AA_RESET", "SEPARATOR", "HOMING", "DASH", "WALL_HOP", "SEPARATOR", "SKILL_RECAST"] },      
      { label: { ko: "W 범위 피해", en: "W AoE Damage" }, tags: ["DMG_PHYSICAL", "AOE"] },
      { label: { ko: "W2", en: "W2" }, tags: ["DMG_PHYSICAL", "ON_HIT", "DEBUFF_STACK", "DRAIN", "SEPARATOR", "AA_RESET"] },
    ] },

    E: ["DMG_MAGIC", "SKILL_CHARGED", "CAST_COMMIT", "DMG_REDUCE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "KNOCKBACK", "SEPARATOR", "WALL_COLLISION", "STUN"],

    R: { phases: [
      { label: { ko: "R1 투사체", en: "R1 Projectile" }, tags: ["TIMING_CAST", "PROJECTILE", "PIERCE_MINION", "DISRUPT", "TRUE_SIGHT"] },
      { label: { ko: "R2 준비", en: "R2 Wind-up" }, tags: ["LOCKED", "CC_IMMUNE"] },
      { label: { ko: "R2 돌진", en: "R2 Dash" }, tags: ["LOCKED", "DASH", "WALL_HOP", "UNSTOPPABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AOE", "DMG_MAGIC", "FEAR"] },
      { label: { ko: "R2 버프 (W 상태에 추가)", en: "R2 Buff (added to W state)" }, tags: ["MS_UP", "AR_MR_UP", "LIFESTEAL"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "브라이어는 기본 [[HP_REGEN]], 마나 없음. \n 스킬 소모값은 현재체력 5%. \n [[SELF_MISSING_HP_SCALE]] 비례 [[DRAIN]]효과 증가.",

          "P는 [[BA]], 스킬에 출혈 [[DEBUFF]] 부여. 최대 5스택. \n 스택 비례 출혈 [[DMG_PHYSICAL]] 증가. \n 감소 전 출혈 피해에 비례 [[DRAIN]]. \n \n",

          "Q는 [[TARGETED]] [[DASH]] \n 대상에게 [[DMG_PHYSICAL]], [[STUN]]. \n 5초간 [[AR_MR_SHRED]]. \n \n",

          "W는 방향으로 [[DASH]]하고. \n 핏빛 광분 상태 돌입하고 \n 광분동안 [[AS_UP]], [[MS_UP]].", 
          "광분은 브라이어가 [[TAUNT]]되어 \n 적 챔피언을 우선 자동공격. \n [[BA]]가 대상 주변 [[AOE]] [[DMG_PHYSICAL]].", 
          "W를 [[SKILL_RECAST]] 하면 다음 [[BA]] [[EMPOWERED]]. \n [[EMPOWERED]] [[BA]]는 [[DMG_PHYSICAL]]와 \n [[SELF_MAXHP_SCALE]] 비례 [[DRAIN]].", 
          "광분 상태는 \n Q로 타겟을 바꿀 수 있음. \n E로 광분상태를 빠져나올 수 있음. \n \n",

          "E는 누르고 있는 동안 [[SKILL_CHARGED]]. \n [[SKILL_CHARGED]]중에 [[DMG_REDUCE]], \n 처음 1초동안 [[SELF_MAXHP_SCALE]] 비례 [[HEAL]]. \n 충전 시간 비례 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]].", 
          "완전 충전 시 [[KNOCKBACK]] 추가. \n [[WALL_COLLISION]] 시 [[DMG_MAGIC]]와 [[STUN]].", "[[CAST_COMMIT]]으로 CC에 맞아도 시전을 멈추지 않음. \n \n",

          "R은 브라이어가 온 맵에 소리 지름. \n 잠시 후 사거리가 정말 긴 [[PROJECTILE]] 발사. \n 적중당한 적은 [[DISRUPT]]와 [[MARK]] \n 대상 주변에 원 [[AOE]]가 생김. \n 브라이어가 R2상태 돌입.", 
          "R2는 준비, [[DASH]], 광분 단계가 연속적으로 발동.", 
          "준비 단계는 [[CC_IMMUNE]]", 
          "[[MARK]] 대상에게 [[UNSTOPPABLE]] [[DASH]]. \n 원 [[AOE]] [[DMG_MAGIC]]. \n [[MARK]] 대상을 제외한 적에게 [[FEAR]].", 
          "도착하면 강화 핏빛 광분 상태 돌입. \n W 효과에 추가로 [[AR_MR_UP]], [[MS_UP]], [[LIFESTEAL]]. \n 지속시간 무제한.",
        ],

        en: [
          "Briar has no base [[HP_REGEN]] and no mana. \n Skills cost 5% of current health. \n [[DRAIN]] effectiveness increases based on [[SELF_MISSING_HP_SCALE]].",

          "P applies a bleed [[DEBUFF]] with [[BA]]s and skills. Max 5 stacks. \n Bleed [[DMG_PHYSICAL]] increases with stacks. \n [[DRAIN]]s based on bleed damage before mitigation. \n \n",

          "Q is a [[TARGETED]] [[DASH]] \n dealing [[DMG_PHYSICAL]] and [[STUN]] to the target. \n [[AR_MR_SHRED]] for 5 seconds. \n \n",

          "W [[DASH]]es in a direction \n and enters Blood Frenzy; \n during Frenzy, gains [[AS_UP]] and [[MS_UP]].",
          "During Frenzy, Briar is [[TAUNT]]ed \n and auto-attacks, prioritizing enemy champions. \n [[BA]]s deal [[AOE]] [[DMG_PHYSICAL]] around the target.",
          "[[SKILL_RECAST]]ing W makes the next [[BA]] [[EMPOWERED]]. \n The [[EMPOWERED]] [[BA]] deals [[DMG_PHYSICAL]] and \n [[DRAIN]]s based on [[SELF_MAXHP_SCALE]].",
          "During Frenzy, \n Q can switch targets. \n E can exit Frenzy. \n \n",

          "E is [[SKILL_CHARGED]] while held. \n While [[SKILL_CHARGED]], gains [[DMG_REDUCE]] \n and [[HEAL]]s based on [[SELF_MAXHP_SCALE]] for the first 1 second. \n Deals [[AOE]] [[DMG_MAGIC]] and [[SLOW]] based on charge time.",
          "When fully charged, adds [[KNOCKBACK]]. \n On [[WALL_COLLISION]], deals [[DMG_MAGIC]] and [[STUN]]s.", "[[CAST_COMMIT]]: casting does not stop even when hit by CC. \n \n",

          "R makes Briar scream across the entire map. \n After a moment, fires a very long-range [[PROJECTILE]]. \n The enemy hit is [[DISRUPT]]ed and [[MARK]]ed \n and a circular [[AOE]] appears around the target. \n Briar enters the R2 state.",
          "R2 triggers the wind-up, [[DASH]], and Frenzy phases in succession.",
          "The wind-up phase is [[CC_IMMUNE]].",
          "[[UNSTOPPABLE]] [[DASH]] toward the [[MARK]]ed target. \n Circular [[AOE]] [[DMG_MAGIC]]. \n [[FEAR]]s enemies other than the [[MARK]]ed target.",
          "On arrival, enters an empowered Blood Frenzy. \n In addition to W's effects, gains [[AR_MR_UP]], [[MS_UP]], and [[LIFESTEAL]]. \n Unlimited duration.",
        ]

      },

      note2: {
        ko: [
        "브라이어는 [[DRAIN]]이 많고 \n [[SELF_MISSING_HP_SCALE]] 비례 [[HS_POWER]]. \n 브라이어 상대로는 [[GW]] 필수.",
        "P의 출혈 [[DEBUFF_STACK]]은 \n [[BA]] 1개, Q 1개, E 1개, R2 1개", 
        "P의 출혈 [[DEBUFF_STACK]]이 남아있는 대상이 죽으면 \n 남은 피해량에 비례하여 즉시 [[HEAL]].",
        "W를 사용하고 주변에 적이 없으면 \n 광분상태에 빠지지 않음. \n [[BUFF]] 효과도 없음.",
        "R은 시전 중 일 때는 [[CC_IMMUNE]] \n 적중해서 날아갈 때는 [[UNSTOPPABLE]]",
        "R1은 [[R_FLASH]]이 기능적으로는 가능하지만 \n 효과적으로는 불가능. \n 이즈 R처럼 이전위치에서 R1 [[PROJECTILE]]가 날아감.",
      ],
        en: [
          "Briar has a lot of [[DRAIN]], \n and [[HS_POWER]] based on [[SELF_MISSING_HP_SCALE]]. \n [[GW]] is mandatory against Briar.",
          "P's bleed [[DEBUFF_STACK]]s: \n [[BA]] 1, Q 1, E 1, R2 1",
          "If a target dies with P's bleed [[DEBUFF_STACK]]s remaining, \n Briar immediately [[HEAL]]s based on the remaining damage.",
          "If there are no enemies nearby when W is used, \n Briar does not enter Frenzy. \n No [[BUFF]] effects are granted either.",
          "R is [[CC_IMMUNE]] during cast \n and [[UNSTOPPABLE]] while flying after hitting.",
          "R1 [[R_FLASH]] is technically possible \n but not effective. \n Like Ezreal's R, the R1 [[PROJECTILE]] fires from the previous position.",
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

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Briar,
  // 스킬 수치 최근 변경 V26.03). Q/W/E/R의 DDragon effectBurn/vars가 비어 있어 위키 인포박스 수치로 채움.
  // R은 위키 템플릿 원자료에 5랭크 값이 섞여 있으나 DDragon cooldownBurn(120/100/80)과 일치하는 3랭크 값을 채택.
  skillTooltip: {
    P: {
      ko: "브라이어는 [[BA]]와 스킬로 5초간 지속되는 출혈 [[DEBUFF_STACK]](최대 5중첩)을 적용해 [[LEVEL_SCALE]] 비례 10~50(+50% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히며(첫 중첩 기준), 출혈 피해의 일정 비율만큼 [[DRAIN]]합니다. \n 늘 허기진 브라이어는 [[SELF_MISSING_HP_SCALE]]에 비례해 체력 회복량이 0~40% 증가하는 대신 기본 [[HP_REGEN]]이 없습니다.",
      en: "Briar's [[BA]]s and skills apply a bleed [[DEBUFF_STACK]] lasting 5 seconds (max 5 stacks), dealing 10~50 (based on [[LEVEL_SCALE]]) (+50% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] (for the first stack), and she [[DRAIN]]s a portion of the bleed damage. \n The ever-hungry Briar gains 0~40% increased healing based on [[SELF_MISSING_HP_SCALE]], but has no base [[HP_REGEN]].",
    },
    Q: {
      ko: "브라이어가 대상에게 [[DASH]]해 60/85/110/135/160(+80% 추가 [[AD_SCALE]])(+60% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 0.85초간 [[STUN]]시키며 5초간 10/12.5/15/17.5/20%의 [[AR_MR_SHRED]]를 적용합니다. \n \n 핏빛 광분 상태에서 이 스킬을 미니언이나 몬스터에게 사용하면 더 이상 챔피언을 우선적으로 공격하지 않습니다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
      en: "Briar [[DASH]]es to the target, dealing 60/85/110/135/160 (+80% bonus [[AD_SCALE]]) (+60% [[AP_SCALE]]) [[DMG_PHYSICAL]], [[STUN]]ning for 0.85 seconds, and applying 10/12.5/15/17.5/20% [[AR_MR_SHRED]] for 5 seconds. \n \n Using this skill on a minion or monster during Blood Frenzy makes her stop prioritizing champions. \n \n 13/12/11/10/9 second [[COOLDOWN]].",
    },
    W: {
      ko: "브라이어가 [[DASH]]해 핏빛 광분 상태에 들어가고 5초간 가장 가까운 적에게 [[TAUNT]]됩니다(챔피언 우선). \n 핏빛 광분 상태에서 55/65/75/85/95%의 [[AS_UP]], 24/33/42/51/60%의 [[MS_UP]]를 얻으며 [[BA]]로 대상 주변 적에게 60/70/80/90/100% [[AD_SCALE]]의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 이 스킬을 [[SKILL_RECAST]]해 다음 [[BA]]를 [[EMPOWERED]]할 수 있습니다. \n [[EMPOWERED]] [[BA]]로 5/20/35/50/65(+5% [[AD_SCALE]])+[[TARGET_MISSING_HP_SCALE]]의 9%(+추가 공격력 100당 2.5%)에 해당하는 [[DMG_PHYSICAL]]를 입히며, 피해량의 ([[SELF_MAXHP_SCALE]] 비례 5%)+24/28/32/36/40%만큼 [[DRAIN]]합니다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Briar [[DASH]]es and enters Blood Frenzy, becoming [[TAUNT]]ed to the nearest enemy for 5 seconds (champions prioritized). \n During Blood Frenzy, she gains 55/65/75/85/95% [[AS_UP]] and 24/33/42/51/60% [[MS_UP]], and her [[BA]]s deal 60/70/80/90/100% [[AD_SCALE]] [[DMG_PHYSICAL]] to enemies around the target. \n \n [[SKILL_RECAST]] this skill to make her next [[BA]] [[EMPOWERED]]. \n The [[EMPOWERED]] [[BA]] deals 5/20/35/50/65 (+5% [[AD_SCALE]]) + 9% (+2.5% per 100 bonus AD) of [[TARGET_MISSING_HP_SCALE]] as [[DMG_PHYSICAL]], and [[DRAIN]]s (5% of [[SELF_MAXHP_SCALE]]) + 24/28/32/36/40% of the damage dealt. \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "[[SKILL_CHARGED]] 시작: 브라이어가 핏빛 광분 상태에서 벗어나 힘을 모읍니다. 1초 동안 체력을 [[SELF_MAXHP_SCALE]] 비례 10/11.5/13/14.5/16% [[HEAL]]하고, 입는 피해가 35% [[DMG_REDUCE]]됩니다. \n \n 발사: 브라이어가 비명을 내질러 충전 시간에 따라 최대 80/115/150/185/220(+100% 추가 [[AD_SCALE]])(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, 0.5초 동안 80% [[SLOW]]시킵니다. \n \n 완전히 충전된 비명은 적을 [[KNOCKBACK]]시키며, [[WALL_COLLISION]]하는 적에게 140/215/290/365/440(+240% 추가 [[AD_SCALE]])(+240% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1.5초 동안 [[STUN]]시킵니다. \n \n 16초의 [[COOLDOWN]].",
      en: "[[SKILL_CHARGED]] start: Briar exits Blood Frenzy and gathers power. For 1 second, she [[HEAL]]s for 10/11.5/13/14.5/16% of her [[SELF_MAXHP_SCALE]], and damage taken is [[DMG_REDUCE]]d by 35%. \n \n Release: Briar screams, dealing up to 80/115/150/185/220 (+100% bonus [[AD_SCALE]]) (+100% [[AP_SCALE]]) [[DMG_MAGIC]] based on charge time and applying an 80% [[SLOW]] for 0.5 seconds. \n \n A fully charged scream [[KNOCKBACK]]s enemies; enemies hitting a wall ([[WALL_COLLISION]]) take 140/215/290/365/440 (+240% bonus [[AD_SCALE]]) (+240% [[AP_SCALE]]) [[DMG_MAGIC]] and are [[STUN]]ned for 1.5 seconds. \n \n 16 second [[COOLDOWN]].",
    },
    R: {
      ko: "브라이어가 족쇄의 혈석([[PROJECTILE]])을 발로 찬 다음, 혈석이 첫 번째로 적중한 챔피언을 먹잇감으로 지정([[MARK]])하고 대상을 향해 날아갑니다. \n \n 착지 시 모든 주변 적에게 150/250/350(+130% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 먹잇감을 제외한 적을 1.5초간 [[FEAR]]에 빠트립니다. \n 이후 [[EMPOWERED]]된 핏빛 광분 상태에 들어가 죽을 때까지 먹잇감을 쫓습니다. \n \n 지속시간 동안 [[AR_MR_UP]](20% [[AD_SCALE]] 비례) \n 10/15/20%의 [[LIFESTEAL]], 10/20/30%의 [[MS_UP]]를 얻습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Briar kicks the Blood Shackle Stone ([[PROJECTILE]]); the first champion it hits is marked as her prey ([[MARK]]), and she flies toward them. \n \n On landing, she deals 150/250/350 (+130% [[AP_SCALE]]) [[DMG_MAGIC]] to all nearby enemies and [[FEAR]]s enemies other than the prey for 1.5 seconds. \n She then enters an [[EMPOWERED]] Blood Frenzy and chases the prey until death. \n \n For the duration, she gains [[AR_MR_UP]] (scaling with 20% [[AD_SCALE]]) \n 10/15/20% [[LIFESTEAL]], and 10/20/30% [[MS_UP]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default briar;
