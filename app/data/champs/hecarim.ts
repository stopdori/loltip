import type { ChampData } from "../interactions/types";

const hecarim: ChampData = {
  id: "hecarim",
  skills: {
    P: ["ST_CONDITIONAL", "AD_UP"],
    Q: ["BUFF_STACK", "SEPARATOR", "PER_STACK", "CDR"],
    W: ["AURA", "SEPARATOR", "AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    E: { phases: [
      { label: { ko: "E 버프스택", en: "E Buff Stack" }, tags: ["BUFF_STACK", "GHOSTING", "SEPARATOR", "PER_STACK", "MS_UP"] },
      { label: { ko: "E 공격", en: "E Attack" }, tags: ["DASH", "WALL_HOP", "SEPARATOR", "PER_STACK", "RANGE_UP", "KNOCKBACK"] },
    ] },
    R: ["UNSTOPPABLE", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "FEAR"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "AD_UP"],
    Q: ["DMG_PHYSICAL", "AOE", "BUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "PER_STACK", "DMG_PHYSICAL", "ADDITIONAL", "CDR"],
    W: { phases: [
      { label: { ko: "W 버프", en: "W Buff" }, tags: ["AR_MR_UP"] },
      { label: { ko: "W 오라", en: "W Aura" }, tags: ["AURA", "DOT", "DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 버프스택", en: "E Buff Stack" }, tags: ["BUFF_STACK", "GHOSTING", "SEPARATOR", "PER_STACK", "MS_UP"] },
      { label: { ko: "E 공격", en: "E Attack" }, tags: ["DMG_PHYSICAL", "TIMING_AFTERCAST", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "PER_STACK", "RANGE_UP", "KNOCKBACK"] },
    ] },
    R: { phases: [
      { label: { ko: "R 충돌", en: "R Collision" }, tags: ["DMG_MAGIC", "UNSTOPPABLE", "DASH", "WALL_HOP", "FEAR"] },
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_MAGIC", "PIERCE", "PROJECTILE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [],
        en: [] },
      note1: {

        ko: [

          "P는 [[MS_SCALE]]비례 [[AD_UP]]. \n \n",

          "Q는 창을 휘둘러 [[AOE]] [[DMG_PHYSICAL]]. \n 적중하면 [[BUFF_STACK]] 획득. 최대 3개. \n [[PER_STACK]] [[DMG_PHYSICAL]] 증가와 [[CDR]]. \n \n",

          "W는 [[AR_MR_UP]] \n [[AURA]] 주변 적 [[DOT]] [[DMG_MAGIC]]. \n [[AURA]] 내에서 헤카림이 받은 피해와 아군이 받은 피해에 따라 \n 헤카림이 [[HEAL]]. \n \n",

          "E는 [[GHOSTING]] 상태가 되고 [[BUFF_STACK]] 획득. \n [[BUFF_STACK]]은 이동 [[DISTANCE_SCALE]]에 비례하여 [[MS_UP]]. (최대 100스택) \n 다음 공격 시 [[STACK_CONSUME]] 하여 [[DMG_PHYSICAL]]와 [[KNOCKBACK]]. \n \n",

          "R은 [[UNSTOPPABLE]] [[DASH]]. \n 헤카림을 뒤따르는 5개의 유령 [[PROJECTILE]] 발사. \n[[PROJECTILE]]는 [[PIERCE]] [[DMG_MAGIC]]. \n 헤카림의 도착지점에 [[AOE]] [[DMG_MAGIC]] [[FEAR]]. \n 이동거리에 따라 [[FEAR]] 시간 증가.",
        ],

        en: ["P grants [[AD_UP]] based on [[MS_SCALE]]. \n \n",
          "Q swings its spear for [[AOE]] [[DMG_PHYSICAL]]. \n On hit, gains a [[BUFF_STACK]]. Max 3. \n [[PER_STACK]], increased [[DMG_PHYSICAL]] and [[CDR]]. \n \n",
          "W grants [[AR_MR_UP]] \n and its [[AURA]] deals [[DOT]] [[DMG_MAGIC]] to nearby enemies. \n Based on the damage Hecarim and his allies take within the [[AURA]], \n Hecarim [[HEAL]]s. \n \n",
          "E makes Hecarim [[GHOSTING]] and grants [[BUFF_STACK]]s. \n [[BUFF_STACK]]s grant [[MS_UP]] based on travel [[DISTANCE_SCALE]]. (Max 100 stacks) \n The next attack [[STACK_CONSUME]]s them to deal [[DMG_PHYSICAL]] and [[KNOCKBACK]]. \n \n",
          "R is an [[UNSTOPPABLE]] [[DASH]]. \n Fires 5 ghost [[PROJECTILE]]s that follow Hecarim. \n[[PROJECTILE]]s deal [[PIERCE]] [[DMG_MAGIC]]. \n Deals [[AOE]] [[DMG_MAGIC]] and [[FEAR]] at Hecarim's destination. \n [[FEAR]] duration increases with travel distance."
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] 다 안됨", 
        
        "P의 효과로 [[MS_UP]]는 [[AD_UP]] \n E를 쓰고 스택을 쌓을수록 [[AD_UP]]. \n Q는 [[AD_SCALE]] 계수가 있어서 \n 평타를 바로 때리지 말고 \n Q를 먼저 쓰다가 평타를 늦게 때리는 게 좋음.", 
        
        "R [[DASH]] 중에 다른 스킬들을 사용할 수 있음.", 

        "R은 [[AD_SCALE]] 계수가 없어서 \n E의 [[MS_UP]]로 인한 P의 [[AD_UP]]로도 \n 아무런 영향이 없기 때문에 \n ER을 쓰는 것 보다 R을 쓰고 도중에 E를 켜서 \n E 스택을 쌓고 도착해서 [[EMPOWERED]][[BA]]로 \n 상대를 [[KNOCKBACK]]으로 납치하는게 좋음."
      ],
        en: ["[[Q_FLASH]], [[W_FLASH]], [[E_FLASH]], [[R_FLASH]] all not possible",
          "Through P, [[MS_UP]] becomes [[AD_UP]] \n Using E and building stacks gives more [[AD_UP]]. \n Q has an [[AD_SCALE]] ratio, so \n don't auto-attack right away; \n it's better to use Q first and auto-attack later.",
          "Other skills can be used during the R [[DASH]].",
          "R has no [[AD_SCALE]] ratio, so \n P's [[AD_UP]] from E's [[MS_UP]] \n has no effect on it. \n Rather than E then R, cast R and turn on E mid-dash \n to build E stacks, then on arrival use the [[EMPOWERED]][[BA]] \n to kidnap the target with [[KNOCKBACK]]."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Hecarim,
  // 스킬 수치 최근 변경 V26.03). E/R 일부는 DDragon effectBurn과 위키가 일치, 나머지는 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_hecarimpassive_tooltip)을 사용.
  skillTooltip: {
    P: {
      ko: "헤카림이 추가 이동 속도의 12~24%만큼 [[AD_UP]]를 얻습니다. \n [[AD_SCALE]]은 [[LEVEL_SCALE]] 비례로 증가합니다.",
      en: "Hecarim gains [[AD_UP]] equal to 12~24% of his bonus movement speed. \n The [[AD_SCALE]] increases based on [[LEVEL_SCALE]].",
    },
    Q: {
      ko: "헤카림이 주위 적들을 베어 60/90/120/150/180(+90% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 이 스킬이 적중하면 효과가 중첩되어([[BUFF_STACK]]) 8초 동안 피해량이 3%(+추가 [[AD_SCALE]] 100당 3%) 늘어나고 이 스킬의 재사용 대기시간이 0.75초 감소합니다. ([[CDR]]) \n 최대 3회 중첩됩니다. \n \n 4초의 [[COOLDOWN]].",
      en: "Hecarim cleaves nearby enemies, dealing 60/90/120/150/180 (+90% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n If this skill hits, it stacks ([[BUFF_STACK]]), increasing its damage by 3% (+3% per 100 bonus [[AD_SCALE]]) for 8 seconds and reducing its cooldown by 0.75 seconds. ([[CDR]]) \n Stacks up to 3 times. \n \n 4 second [[COOLDOWN]].",
    },
    W: {
      ko: "헤카림이 4초에 걸쳐 주변 적에게 80/120/160/200/240(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 헤카림이 5/10/15/20/25의 [[AR_MR_UP]]를 얻고, 주변 적들이 헤카림에게 받은 피해량의 25%와 \n 헤카림의 아군이 받은 피해량의 12.5%만큼 체력을 [[HEAL]]합니다. \n \n 14초의 [[COOLDOWN]].",
      en: "Hecarim deals 80/120/160/200/240 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies over 4 seconds. \n \n Hecarim gains 5/10/15/20/25 [[AR_MR_UP]] and [[HEAL]]s for 25% of the damage nearby enemies take from him and \n 12.5% of the damage taken by his allies. \n \n 14 second [[COOLDOWN]].",
    },
    E: {
      ko: "헤카림이 [[GHOSTING]] 상태가 되어 25%의 [[MS_UP]]를 얻습니다. \n 이동 속도는 4초에 걸쳐 65%까지 증가합니다. \n \n 다음 [[BA]]는 [[RANGE_UP]]가 되어 대상을 [[KNOCKBACK]]시키며 30/45/60/75/90(+50% 추가 [[AD_SCALE]])~60/90/120/150/180(+100% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n [[RANGE_UP]]와 [[KNOCKBACK]] 거리와 피해량은 이 스킬을 사용하는 중 이동한 [[DISTANCE_SCALE]]에 비례합니다. \n \n 20/19/18/17/16초의 [[COOLDOWN]].",
      en: "Hecarim becomes [[GHOSTING]] and gains 25% [[MS_UP]]. \n His movement speed increases up to 65% over 4 seconds. \n \n His next [[BA]] gains [[RANGE_UP]], [[KNOCKBACK]]s the target, and deals 30/45/60/75/90 (+50% bonus [[AD_SCALE]]) ~ 60/90/120/150/180 (+100% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n The [[RANGE_UP]], [[KNOCKBACK]] distance, and damage scale with the [[DISTANCE_SCALE]] traveled while this skill is active. \n \n 20/19/18/17/16 second [[COOLDOWN]].",
    },
    R: {
      ko: "헤카림이 유령 기수들을 소환하며 전방으로 [[DASH]]하여 150/250/350(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 돌격이 끝나면 충격파를 발산하여 돌격한 [[DISTANCE_SCALE]]에 비례해 최소 0.75초에서 최대 1.5초 동안 [[FEAR]]에 질리게 합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Hecarim summons spectral riders and [[DASH]]es forward, dealing 150/250/350 (+100% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n At the end of the charge, he unleashes a shockwave that [[FEAR]]s enemies for 0.75 to 1.5 seconds based on the [[DISTANCE_SCALE]] charged. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default hecarim;
