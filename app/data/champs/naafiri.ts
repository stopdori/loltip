import type { ChampData } from "../interactions/types";

const naafiri: ChampData = {
  id: "naafiri",
  skills: {
    P: ["SUMMON", "ALLY_TP_OK"],
    Q: ["Q_FLASH", "SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "LIFESTEAL"],
    W: ["W_FLASH", "AD_UP", "MS_UP", "UNTARGETABLE", "TOWER_DODGE"],
    E: ["DASH", "WALL_HOP"],
    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["SLOW", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "R 재사용", en: "R Recast" }, tags: ["SLOW", "DASH", "WALL_HOP", "SHIELD"] },
    ] },
  },

  vision: {
    P: ["VISION"],
    Q: ["HIT_INDICATOR"],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {

    P: { phases: [
      { label: { ko: "P 패시브", en: "P Passive" }, tags: ["SUMMON", "BUFF_STACK", "Q", "W", "E", "R", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },

      { label: { ko: "P 들개", en: "P Hounds" }, tags: ["DMG_PHYSICAL", "SINGLE", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME", "DMG_PHYSICAL"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "DEBUFF_STACK", "SKILL_RECAST"] },
      { label: { ko: "Q 2회 적중", en: "Q Hit Twice" }, tags: ["DMG_PHYSICAL", "HEAL"] },
    ] },

    W: ["SKILL_CHANNEL", "SUMMON", "X2", "SEPARATOR", "AD_UP", "MS_UP", "UNTARGETABLE", "TOWER_DODGE"],

    E: { phases: [
      { label: { ko: "E 돌진", en: "E Dash" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "WALL_HOP"] },
      { label: { ko: "E 폭발", en: "E Explodes" }, tags: ["DMG_PHYSICAL", "AOE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SLOW", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "R 재사용", en: "R Recast" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SLOW", "DASH", "WALL_HOP", "SHIELD"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "W가 정말 중요함. \n W를 먼저 쓰고 폭딜을 할지 \n W를 나중에 써서 어그로 핑퐁으로 쓸지 잘 고민해야 함.",
          "앞선에서 Q로 살짝살짝 포킹만 하다 \n W로 어그로 핑퐁을 해주기",
          "뒷라인에 R로 돌진하여 괴롭히다 \n W, E로 어그로 핑퐁.",
        ], en: [
          "W is extremely important. \n Decide whether to use W first for burst damage, \n or save W later to bounce aggro between Hounds.",
          "In lane, lightly poke with Q, \n then use W to bounce aggro between Hounds.",
          "Dive into the backline with R to pressure enemies, \n then use W and E to bounce aggro.",
        ] },
      note1: {

        ko: [
          "P는 무리(작은 개)를 [[SUMMON]]. \n 무리는 나피리가 공격한 대상을 같이 공격하여 [[DMG_PHYSICAL]]. \n 스킬을 사용하고 나면 무리에게 [[BUFF_STACK]] 부여. \n [[STACK_CONSUME]] 하여 무리의 다음 공격 [[DMG_PHYSICAL]] 증가. \n \n 최대 무리의 수는 레벨 비례 2~5 마리. \n 챔피언, 대형, 에픽 몬스터에게 스킬 적중하면 \n P의 [[CDR]] 4초. \n 처치하면 [[CDR]] 1초.",

          "Q는 [[DMG_PHYSICAL]]와 출혈 [[DMG_PHYSICAL]]. \n Q는 [[SKILL_RECAST]] 가능. \n 같은 대상에게 Q를 또 맞히면 \n 대상의 남은 출혈 피해 + 잃은 체력 비례 [[DMG_PHYSICAL]]. \n 대상이 챔피언, 대형, 에픽 몬스터이면 [[HEAL]].",

          "W는 [[AD_UP]], [[MS_UP]], [[UNTARGETABLE]]. \n 무리가 잠시 사라졌다 나피리 옆에서 등장. \n 일시적으로 최대 마릿수 +2. \n 무리 2마리 추가 [[SUMMON]]. \n 최대 마리수 이상의 무리는 \n W의 [[BUFF]]가 사라질 때 같이 사라짐.",

          "E는 [[DASH]]하여 [[DMG_PHYSICAL]]. \n 도착하여 폭발 [[AOE]] [[DMG_PHYSICAL]]. \n 무리가 잠시 사라졌다가 완전 [[HEAL]]이 되고 \n 도착하면 나피리 옆에서 등장.",

          "R은 [[DASH]]하여 [[DMG_PHYSICAL]], [[SLOW]]. \n [[SUMMON]]된 무리 마리당 추가 [[DMG_PHYSICAL]]. \n 무리가 잠시 사라졌다가 도착하면 나피리 옆에서 등장. \n \n 7초 안에 킬 관여 시 한 번만 [[SKILL_RECAST]] 가능. \n [[SKILL_RECAST]] 시 이번에만 [[SHIELD]]. \n [[SKILL_RECAST]] R은 사용하지 않으면 사라짐.",
        ],

        en: [
          "P [[SUMMON]]s the Pack (small hounds). \n The Pack attacks the same target as Naafiri, dealing [[DMG_PHYSICAL]]. \n Using a skill grants the Pack a [[BUFF_STACK]]. \n [[STACK_CONSUME]] increases the Pack's next attack [[DMG_PHYSICAL]]. \n \n Max Pack size scales with level: 2~5 hounds. \n Hitting a champion, large, or epic monster with a skill reduces \n P's [[CDR]] by 4 seconds. \n Killing one reduces [[CDR]] by 1 second.",

          "Q deals [[DMG_PHYSICAL]] and applies bleed [[DMG_PHYSICAL]]. \n Q can [[SKILL_RECAST]]. \n Hitting the same target again with Q \n deals [[DMG_PHYSICAL]] based on remaining bleed damage + missing health. \n If the target is a champion, large, or epic monster, Naafiri [[HEAL]]s.",

          "W grants [[AD_UP]], [[MS_UP]], and [[UNTARGETABLE]]. \n The Pack briefly disappears, then reappears beside Naafiri. \n Temporarily increases max Pack size by +2. \n [[SUMMON]]s 2 additional hounds. \n Hounds exceeding the max Pack size \n disappear when W's [[BUFF]] ends.",

          "E [[DASH]]es forward dealing [[DMG_PHYSICAL]]. \n Upon arrival, deals [[AOE]] [[DMG_PHYSICAL]] explosion. \n The Pack briefly disappears, is fully [[HEAL]]ed, \n then reappears beside Naafiri on arrival.",

          "R [[DASH]]es forward dealing [[DMG_PHYSICAL]] and applying [[SLOW]]. \n Deals additional [[DMG_PHYSICAL]] per [[SUMMON]]ed Pack member. \n The Pack briefly disappears, then reappears beside Naafiri on arrival. \n \n If Naafiri gets a kill assist within 7 seconds, she can [[SKILL_RECAST]] once. \n [[SKILL_RECAST]] grants a [[SHIELD]] this time only. \n The [[SKILL_RECAST]] R expires if not used.",
        ]

      },

      note2: {
        ko: [
        "P의 무리 \n 몬스터에게 피해가 증가. \n 구조물에게 피해가 절반으로 감소. \n 미니언, 몬스터에게 [[DMG_REDUCE]]. \n [[AOE]] 피해에 [[DMG_REDUCE]]. \n 상대 근접 챔피언의 [[BA]]에 200% 데미지를 받음.",
        "Q는 미니언, 몬스터에게 \n 레벨 비례 30~70 체력 미만 [[EXECUTE]].",
        "E는 두단계로 나뉨. 돌진단계/폭발단계\n돌진단계 중에 [[AIRBORNE]]류, [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 \n 폭발단계를 하지 않음.\n 폭발단계의 [[DMG_PHYSICAL]]가 훨씬 쌤.", 
        "R은 원래는 기본 스킬이었지만 \n 리워크 되면서 궁으로 바뀌었는데 \n 앞에서 가로 막아주기가 없어짐 \n 대신 R의 [[SKILL_CHANNEL]], [[DASH]]는 CC로 끊길 수 있음.", 
        "R을 시전하거나 돌진 중일 때 \n 상대와의 거리가 너무 멀어지면 \n 스킬이 취소되고 스킬 [[COOLDOWN]] 상태가 됨.", 
      ],
        en: [
          "P's Pack \n Deals increased damage to monsters. \n Deals 50% reduced damage to structures. \n Takes [[DMG_REDUCE]] from minions and monsters. \n Takes [[DMG_REDUCE]] from [[AOE]] damage. \n Takes 200% damage from enemy melee champions' [[BA]].",
          "Q [[EXECUTE]]s minions and monsters \n below 30~70 health (scales with level).",
          "E has two stages: Dash phase / Explosion phase\nIf hit by [[AIRBORNE]], [[FEAR]], [[SUPPRESS]], or [[SLEEP]] during the dash phase, \n the explosion phase does not occur.\n The explosion phase's [[DMG_PHYSICAL]] deals significantly more damage.",
          "R was originally a basic skill, \n but was changed to an ultimate after a rework. \n The ability to block for allies in front was removed. \n However, R's [[SKILL_CHANNEL]] and [[DASH]] can be interrupted by CC.",
          "If the target moves too far away \n while casting or dashing with R, \n the skill is canceled and goes on [[COOLDOWN]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default naafiri;
