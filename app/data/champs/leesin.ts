import type { ChampData } from "../interactions/types";

const leesin: ChampData = {
  id: "leesin",
  skills: {
    P: { phases: [
      { label: { ko: "P 버프 스택", en: "P Buff Stack" }, tags: ["AS_UP"] },
      { label: { ko: "P 버프 소모", en: "P Buff Consume" }, tags: ["ST_CONDITIONAL", "ENERGY_RESTORE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["MARK", "TRUE_SIGHT", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["HOMING", "DASH", "WALL_HOP"] },
    ] },

    W: { phases: [
      { label: { ko: "W1", en: "W1" }, tags: ["W_FLASH", "DASH", "WALL_HOP", "SHIELD", "SEPARATOR", "SKILL_RECAST"] },
      { label: { ko: "W2", en: "W2" }, tags: ["OMNIVAMP"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["SLOW"] },
    ] },
    
    R: ["R_FLASH", "ROOT", "KNOCKBACK", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "Q2", en: "Q2" }, tags: [] },
    ] },
    W: [],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["REVEALED"] },
      { label: { ko: "E2", en: "E2" }, tags: [] },
    ] },
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 버프 스택", en: "P Buff Stack" }, tags: ["BUFF_STACK", "X2", "SEPARATOR", "AS_UP"] },
      { label: { ko: "P 버프 소모", en: "P Buff Consume" }, tags: ["STACK_CONSUME", "ENERGY_RESTORE"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "MARK", "TRUE_SIGHT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "Q2", en: "Q2" }, tags: ["DMG_PHYSICAL", "SINGLE", "SEPARATOR", "HOMING", "DASH", "WALL_HOP"] },
    ] },

    W: { phases: [
      { label: { ko: "W1", en: "W1" }, tags: ["TARGETED", "DASH", "WALL_HOP", "SHIELD", "SEPARATOR", "SKILL_RECAST"] },
      { label: { ko: "W2", en: "W2" }, tags: ["OMNIVAMP"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["SLOW"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SINGLE", "SEPARATOR", "ROOT", "KNOCKBACK"] },
      { label: { ko: "R 넉백 충돌", en: "R Knockback Collision" }, tags: ["DMG_PHYSICAL", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 스킬을 사용하면 [[BUFF_STACK]] 2개 획득. (최대 2개) \n [[BUFF_STACK]]은 [[AS_UP]] 효과 제공. \n [[BA]] 공격 시 [[BUFF_STACK]]을 소모하여 [[ENERGY_RESTORE]]. \n \n",

          "Q1은 [[TRUE_SIGHT]]와 [[DMG_PHYSICAL]]. \n 적중 시 Q [[SKILL_RECAST]] 가능. (Q2)", 
          "Q2는 대상에게 [[HOMING]] [[DASH]]. \n 충돌하면 [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_PHYSICAL]]. \n \n",

          "W1은 아군 또는 와드에 [[DASH]]. \n 도착하면 리 신이 [[SHIELD]] 획득. \n 대상이 챔피언이면 대상에게도 동일한 [[SHIELD]].", 
          "W2는 4초간 [[OMNIVAMP]] 획득. \n \n",

          "E1은 주변 [[AOE]] [[DMG_MAGIC]]. \n 적중 시 E [[SKILL_RECAST]] 가능. (E2)", 
          "E2는 E1이 적중한 대상들에게 [[SLOW]]. \n \n",

          "R은 적 챔피언 [[TARGETED]] 스킬. \n 대상은 잠시 [[ROOT]]이 되고 \n [[KNOCKBACK]]시켜 [[DMG_PHYSICAL]].", 
          "[[KNOCKBACK]]에 부딪힌 적은 \n [[KNOCKBACK]]된 [[TARGET_BONUS_HP_SCALE]] 비례 [[DMG_PHYSICAL]]와 [[AIRBORNE]].",
        ],

        en: [
          "P grants 2 [[BUFF_STACK]]s when a skill is cast. (Max 2) \n [[BUFF_STACK]]s grant [[AS_UP]]. \n [[BA]] attacks consume a [[BUFF_STACK]] for [[ENERGY_RESTORE]]. \n \n",

          "Q1 grants [[TRUE_SIGHT]] and deals [[DMG_PHYSICAL]]. \n On hit, Q can be [[SKILL_RECAST]]. (Q2)",
          "Q2 [[HOMING]] [[DASH]]es to the target. \n On collision, deals [[DMG_PHYSICAL]] based on [[TARGET_MISSING_HP_SCALE]]. \n \n",

          "W1 [[DASH]]es to an ally or ward. \n On arrival, Lee Sin gains a [[SHIELD]]. \n If the target is a champion, they also gain the same [[SHIELD]].",
          "W2 grants [[OMNIVAMP]] for 4 seconds. \n \n",

          "E1 deals [[AOE]] [[DMG_MAGIC]] around him. \n On hit, E can be [[SKILL_RECAST]]. (E2)",
          "E2 [[SLOW]]s enemies hit by E1. \n \n",

          "R is a [[TARGETED]] skill on an enemy champion. \n The target is briefly [[ROOT]]ed, \n then [[KNOCKBACK]]ed and takes [[DMG_PHYSICAL]].",
          "Enemies hit by the [[KNOCKBACK]]ed target \n take [[DMG_PHYSICAL]] based on the [[KNOCKBACK]]ed target's [[TARGET_BONUS_HP_SCALE]] and are [[AIRBORNE]].",
        ]

      },

      note2: {
        ko: [
        "Q1의 [[TRUE_SIGHT]]는 Q2로 부딪히면 사라짐.",
        "Q2의 [[HOMING]] [[DASH]]은 \n 충돌 하면 [[HOMING]]이 종료 되고 잠시 후 데미지가 들어가는 구조. \n 그래서 상대가 리신의 [[HOMING]] 판정이 끝날 때 점멸을 정말 잘 쓰면 \n [[HOMING]] [[DASH]]이 종료 되고 데미지도 들어가지 않음.", 
        "E1으로 더 이상 [[STEALTH]]을 드러낼 수 없음. (26.21 패치)",
        "R에 부딪히는 대상은 미니언, 몬스터, 에픽몬스터 모두 포함."
      ],
        en: [
          "Q1's [[TRUE_SIGHT]] disappears when Q2 collides.",
          "Q2's [[HOMING]] [[DASH]] works so that \n on collision the [[HOMING]] ends and damage is applied shortly after. \n So if the enemy uses Flash precisely as Lee Sin's [[HOMING]] check ends, \n the [[HOMING]] [[DASH]] ends and no damage is dealt.",
          "E1 can no longer reveal [[STEALTH]]. (Patch 26.21)",
          "Targets hit by R include minions, monsters, and epic monsters."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 85,
    16: 60,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_leesinpassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.21: W 쿨타임 8초, R 기본 피해 150/350/550)로 채움.
  skillTooltip: {
    P: {
      ko: "리 신이 스킬을 사용하면 [[BUFF_STACK]] 2개를 획득합니다. (최대 2개) \n [[BUFF_STACK]]이 있는 동안 [[AS_SCALE]]가 40% 증가합니다. \n [[BA]] 공격 시 [[BUFF_STACK]]을 소모하여 다음 효과를 발휘합니다. \n \n 첫 번째 [[BA]] 공격 시 20/30/40([[LEVEL_SCALE]] 비례)의 기력을, \n 두 번째 [[BA]] 공격 시 10/15/20([[LEVEL_SCALE]] 비례)의 기력을 회복합니다. ([[ENERGY_RESTORE]])",
      en: "When Lee Sin casts a skill, he gains 2 [[BUFF_STACK]]s. (Max 2) \n While he has [[BUFF_STACK]]s, his [[AS_SCALE]] increases by 40%. \n [[BA]] attacks consume a [[BUFF_STACK]] for the following effect. \n \n The first [[BA]] attack restores 20/30/40 (based on [[LEVEL_SCALE]]) energy, \n and the second [[BA]] attack restores 10/15/20 (based on [[LEVEL_SCALE]]) energy. ([[ENERGY_RESTORE]])",
    },
    Q: {
      ko: "리 신이 불협화음으로 된 음파를 발사하여 처음 적중한 적에게 60/90/120/150/180(+90% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 해당 적에 대한 [[TRUE_SIGHT]]를 얻습니다. \n 스킬이 적에게 명중하면 다음 3초 안에 스킬을 [[SKILL_RECAST]]할 수 있습니다. \n \n [[SKILL_RECAST]] 시: 리 신이 음파에 맞은 적에게 [[DASH]]하여, \n [[TARGET_MISSING_HP_SCALE]]에 비례해 60/90/120/150/180(+90% 추가 [[AD_SCALE]]) ~ 120/180/240/300/360(+180% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Lee Sin projects a discordant wave of sound, dealing 60/90/120/150/180 (+90% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit, \n and gains [[TRUE_SIGHT]] of that enemy. \n If the skill hits an enemy, it can be [[SKILL_RECAST]] within the next 3 seconds. \n \n On [[SKILL_RECAST]]: Lee Sin [[DASH]]es to the enemy hit by the wave, \n dealing 60/90/120/150/180 (+90% bonus [[AD_SCALE]]) ~ 120/180/240/300/360 (+180% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] based on [[TARGET_MISSING_HP_SCALE]]. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "리 신이 아군이나 와드를 향해 [[DASH]]하고 2초 동안 60/105/150/195/240(+80% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 얻습니다. \n 대상이 아군 챔피언일 경우 동일한 양의 [[SHIELD]]를 씌웁니다. \n 3초 안에 [[SKILL_RECAST]]할 수 있습니다. \n \n [[SKILL_RECAST]] 시: 4초 동안 모든 피해 흡혈이 10/14/18/22/26% 증가합니다. ([[OMNIVAMP]]) \n \n 8초의 [[COOLDOWN]].",
      en: "Lee Sin [[DASH]]es to an ally or ward and gains a [[SHIELD]] that absorbs 60/105/150/195/240 (+80% [[AP_SCALE]]) damage for 2 seconds. \n If the target is an allied champion, they receive the same [[SHIELD]]. \n Can be [[SKILL_RECAST]] within 3 seconds. \n \n On [[SKILL_RECAST]]: Gains 10/14/18/22/26% omnivamp for 4 seconds. ([[OMNIVAMP]]) \n \n 8 second [[COOLDOWN]].",
    },
    E: {
      ko: "리 신이 바닥을 내리쳐 35/60/85/110/135(+90% [[AD_SCALE]])의 [[DMG_MAGIC]]를 입히는 충격파를 발생시킵니다. \n 스킬이 적에게 명중하면 다음 3초 안에 스킬을 [[SKILL_RECAST]]할 수 있습니다. \n \n [[SKILL_RECAST]] 시: 충격파에 적중한 주변 적을 35/45/55/65/75% [[SLOW]]시킵니다. \n 둔화 효과는 4초에 걸쳐 사라집니다. \n \n 8초의 [[COOLDOWN]].",
      en: "Lee Sin smashes the ground, sending out a shockwave that deals 35/60/85/110/135 (+90% [[AD_SCALE]]) [[DMG_MAGIC]]. \n If the skill hits an enemy, it can be [[SKILL_RECAST]] within the next 3 seconds. \n \n On [[SKILL_RECAST]]: [[SLOW]]s nearby enemies hit by the shockwave by 35/45/55/65/75%. \n The slow decays over 4 seconds. \n \n 8 second [[COOLDOWN]].",
    },
    R: {
      ko: "리 신이 강력한 돌려차기로 적 챔피언을 뒤로 [[KNOCKBACK]]시키고, 150/350/550(+200% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 날아간 대상과 부딪힌 적은 잠시 [[AIRBORNE]]되고, \n 150/350/550(+200% 추가 [[AD_SCALE]]) + 날아간 대상 추가 체력의 12/15/18%에 해당하는 [[DMG_PHYSICAL]]를 입습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Lee Sin performs a powerful roundhouse kick, [[KNOCKBACK]]ing an enemy champion and dealing 150/350/550 (+200% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n Enemies the target collides with are briefly [[AIRBORNE]], \n and take 150/350/550 (+200% bonus [[AD_SCALE]]) + 12/15/18% of the kicked target's bonus HP as [[DMG_PHYSICAL]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default leesin;
