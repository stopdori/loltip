import type { ChampData } from "../interactions/types";

const kayn: ChampData = {
  id: "kayn",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["DASH", "WALL_HOP"],                // 인간 Q는 Q플 X
      W: ["SLOW"],
      E: ["GHOSTING", "MS_UP", "SEPARATOR", "IGNORE_TERRAIN", "HEAL"],
      R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "DASH"],
    },

    alt: {
      // 그림자 암살자
      P: ["ST_CONDITIONAL", "BUFF"],
      Q: ["DASH", "WALL_HOP"],                // 인간 Q는 Q플 X
      W: ["SLOW", "SEPARATOR", "RANGE_UP"],
      E: ["GHOSTING", "MS_UP", "SEPARATOR", "SLOW_IMMUNE", "SEPARATOR", "IGNORE_TERRAIN", "HEAL"],
      R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "DASH", "SEPARATOR_NEWLINE", "SEPARATOR", "P", "CDR_RESET"],
    },

    alt2: {
      // 다르킨
      P: ["DRAIN"],
      Q: ["DASH", "WALL_HOP"],                // 인간 Q는 Q플 X
      W: ["SLOW", "SEPARATOR", "AIRBORNE"],
      E: ["GHOSTING", "MS_UP", "SEPARATOR", "IGNORE_TERRAIN", "HEAL"],
      R: ["R_FLASH", "UNTARGETABLE", "TOWER_DODGE", "SEPARATOR", "HEAL", "SEPARATOR", "DASH"],
    },

  },

  vision: {
    base: {
      P: [],
      Q: ["HIT_SOUND", "HIT_EFFECT"],
      W: ["HIT_EFFECT"],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt2: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {


      P: ["STACKING"],
      Q: { phases: [
        { label: { ko: "Q 돌진 단계", en: "Q Dash Phase" }, tags: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "DASH", "WALL_HOP"] },
        { label: { ko: "Q 회전 단계", en: "Q Spin Phase" }, tags: ["DMG_PHYSICAL", "AOE"] },
      ] },
      
      W: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "AOE", "SLOW"],
      E: ["BUFF", "GHOSTING", "MS_UP", "IGNORE_TERRAIN", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DURATION_EXT", "HEAL"],

      R: { phases: [
        { label: { ko: "R 표식", en: "R Mark" }, tags: ["MARK"] },
        { label: { ko: "R 액티브", en: "R Active" }, tags: ["MARK_CONSUME", "TARGETED", "UNTARGETABLE"] },
        { label: { ko: "R 종료", en: "R End" }, tags: ["DMG_PHYSICAL", "UNTARGETABLE", "DASH"] },
      ] },
    },

    
    alt: {
      P: ["COOLDOWN", "BUFF", "DMG_MAGIC", "ADDITIONAL"],
      Q: { phases: [
        { label: { ko: "Q 돌진 단계", en: "Q Dash Phase" }, tags: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "DASH", "WALL_HOP"] },
        { label: { ko: "Q 회전 단계", en: "Q Spin Phase" }, tags: ["DMG_PHYSICAL", "AOE"] },
      ] },
      
      W: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "AOE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "RANGE_UP", "CAST_MOVE"],
      E: ["BUFF", "GHOSTING", "MS_UP", "IGNORE_TERRAIN", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DURATION_EXT", "HEAL", "SEPARATOR", "SLOW_IMMUNE", "CDR"],

      R: { phases: [
        { label: { ko: "R 표식", en: "R Mark" }, tags: ["MARK"] },
        { label: { ko: "R 액티브", en: "R Active" }, tags: ["MARK_CONSUME", "TARGETED", "UNTARGETABLE"] },
        { label: { ko: "R 종료", en: "R End" }, tags: ["DMG_PHYSICAL", "UNTARGETABLE", "DASH", "SEPARATOR", "CDR_RESET", "P"] },
      ] },
    },


    alt2: {
      P: ["ON_CHAMP_HIT", "DRAIN"],
      Q: { phases: [
        { label: { ko: "Q 돌진 단계", en: "Q Dash Phase" }, tags: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "DMG_PHYSICAL", "ADDITIONAL"] },
        { label: { ko: "Q 회전 단계", en: "Q Spin Phase" }, tags: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "DMG_PHYSICAL", "ADDITIONAL"] },
      ] },
      
      W: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "AOE", "SLOW", "SEPARATOR", "AIRBORNE"],
      E: ["BUFF", "GHOSTING", "MS_UP", "IGNORE_TERRAIN", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DURATION_EXT", "HEAL"],

      R: { phases: [
        { label: { ko: "R 표식", en: "R Mark" }, tags: ["MARK"] },
        { label: { ko: "R 액티브", en: "R Active" }, tags: ["MARK_CONSUME", "TARGETED", "UNTARGETABLE"] },
        { label: { ko: "R 종료", en: "R End" }, tags: ["DMG_PHYSICAL", "UNTARGETABLE", "DASH", "SEPARATOR_NEWLINE", "SEPARATOR", "DMG_PHYSICAL", "ADDITIONAL", "SEPARATOR", "DRAIN"] },
      ] },
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 적 챔피언에게 피해를 입히면 정수 획득. \n 원거리는 그림자 암살자. \n 근거리는 다르킨의 정수를 획득. \n 다 모으면 소환사 제단에서 영구적 [[TRANSFORM]]. \n 모은 정수와 다른 [[TRANSFORM]]을 원한다면 4분의 [[COOLDOWN]].", 
          "다르킨 - 챔피언에게 [[DMG_PHYSICAL]] [[DRAIN]] \n 그암 - 전투 시작 시 3초간 스킬들에 [[DMG_MAGIC]] 추가. \n \n",

          "Q는 [[DASH]]하여 경로에 [[DMG_PHYSICAL]]. \n [[DASH]] 도착 시 회전 베기 [[DMG_PHYSICAL]].", 
          "다르킨 - [[TARGET_MAXHP_SCALE]] 비례 [[DMG_PHYSICAL]] 추가. \n \n",

          "W는 전방 [[AOE]] [[DMG_PHYSICAL]]와 [[SLOW]].", 
          "다르킨 - [[AIRBORNE]] 추가.", 
          "그암 - [[RANGE_SCALE]] 증가. \n 움직이면서 시전 가능. \n \n",

          "E는 [[GHOSTING]], [[MS_UP]].", 
          "[[IGNORE_TERRAIN]]가 가능해지고 \n 통과하면 [[HEAL]]. \n 벽 밖에서 1.5초 머물면 지속 시간 종료.", 
          "그암 - [[COOLDOWN]] 10초로 감소. \n 추가 [[MS_UP]]와 [[SLOW_IMMUNE]].  \n \n",

          "R은 피해를 입힌 대상에게 [[MARK]]. \n [[MARK]] 대상에게만 [[ACTIVATION_CONDITION]].", 
          "대상에게 결합되어 [[UNTARGETABLE]]. \n 종료 시 [[UNTARGETABLE]] [[DASH]]으로 빠져나오면서 [[DMG_PHYSICAL]].",
        ],

        en: ["P gains essence by damaging enemy champions. \n Ranged champions give Shadow Assassin essence, \n melee champions give Darkin essence. \n Once full, Kayn can permanently [[TRANSFORM]] at the summoner platform. \n To [[TRANSFORM]] into the form other than the collected essence, there is a 4-minute [[COOLDOWN]].",
          "Darkin - [[DRAIN]] on [[DMG_PHYSICAL]] to champions \n SA - adds [[DMG_MAGIC]] to skills for 3 seconds at the start of combat. \n \n",
          "Q [[DASH]]es, dealing [[DMG_PHYSICAL]] along the path. \n At the end of the [[DASH]], a spin slash deals [[DMG_PHYSICAL]].",
          "Darkin - adds [[DMG_PHYSICAL]] based on [[TARGET_MAXHP_SCALE]]. \n \n",
          "W deals frontal [[AOE]] [[DMG_PHYSICAL]] and [[SLOW]].",
          "Darkin - adds [[AIRBORNE]].",
          "SA - increased [[RANGE_SCALE]]. \n Can be cast while moving. \n \n",
          "E grants [[GHOSTING]] and [[MS_UP]].",
          "Enables [[IGNORE_TERRAIN]], \n and passing through terrain grants [[HEAL]]. \n Staying outside walls for 1.5 seconds ends the duration.",
          "SA - [[COOLDOWN]] reduced to 10 seconds. \n Additional [[MS_UP]] and [[SLOW_IMMUNE]].  \n \n",
          "R applies a [[MARK]] to targets it damages. \n [[ACTIVATION_CONDITION]]: only on [[MARK]]ed targets.",
          "Kayn merges into the target and becomes [[UNTARGETABLE]]. \n On ending, he exits with an [[UNTARGETABLE]] [[DASH]], dealing [[DMG_PHYSICAL]]."
        ]

      },

      note2: {
        ko: [
        "케인 (일반폼) \n Q는 두 단계로 나뉨. 돌진 단계 / 회전 단계 \n 돌진 단계 중에 [[AIRBORNE]]류, [[CHARM]], [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 회전 단계를 하지 않음. \n (이 밖에 회전 단계 멈추게 하는 거 있으면 제보 부탁.)"],
        en: ["Kayn (Base form) \n Q has two phases: dash phase / spin phase. \n If hit by [[AIRBORNE]]-type CC, [[CHARM]], [[FEAR]], [[SUPPRESS]], or [[SLEEP]] during the dash phase, the spin phase doesn't occur. \n (Please report anything else that stops the spin phase.)"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. forms.ts 기준 base=케인, alt=그림자 암살자, alt2=다르킨.
  // 폼별 문단 구성은 CDragon ko_kr lol.stringtable.json의 인게임 원문(game_spell_kayn_*_main_0/1/2,
  // spell_kayn_r_main_0/1/2)을 그대로 따름(Q/W/E/R 문장은 DDragon ko_KR 16.20.1과 동일).
  // 수치는 공식 위키(정보박스 V26.03)로 채움.
  skillTooltip: {
    base: {
      P: {
        ko: "그림자 암살자 케인은 다르킨 학살자 라아스트를 제압하려고 합니다. 승자는 하나뿐이겠죠. \n \n 원거리 챔피언에게 피해를 입히면 그림자 암살자가 충전되고, 근접 챔피언에게 피해를 입히면 다르킨 학살자가 충전됩니다. \n 최대로 충전되면 케인이 제단에서 영구히 [[TRANSFORM]]할 수 있습니다. \n \n 그림자 암살자: 전투 시작 후 3초 동안 케인의 [[BA]]와 스킬이 입힌 피해의 20~40%([[LEVEL_SCALE]] 비례)만큼 [[DMG_MAGIC]]를 추가로 입힙니다. \n 이 효과는 케인이 전투에서 벗어난 지([[OUT_OF_COMBAT]]) 8초가 지나거나 그림자의 지배(R)를 사용했을 때만 나타납니다. \n \n 다르킨 학살자: 케인이 챔피언에게 입힌 [[DMG_PHYSICAL]]의 25%(+[[SELF_BONUS_HP_SCALE]] 100당 0.5%)만큼 체력을 [[HEAL]]합니다. ([[DRAIN]])",
        en: "Shadow Assassin Kayn seeks to subdue the Darkin Slayer Rhaast. There can be only one winner. \n \n Damaging ranged champions charges the Shadow Assassin, and damaging melee champions charges the Darkin Slayer. \n When fully charged, Kayn can permanently [[TRANSFORM]] at the altar. \n \n Shadow Assassin: For 3 seconds after entering combat, Kayn's [[BA]]s and skills deal additional [[DMG_MAGIC]] equal to 20~40% (based on [[LEVEL_SCALE]]) of the damage dealt. \n This effect only appears 8 seconds after Kayn leaves combat ([[OUT_OF_COMBAT]]) or when he uses Umbral Trespass (R). \n \n Darkin Slayer: Kayn [[HEAL]]s for 25% (+0.5% per 100 [[SELF_BONUS_HP_SCALE]]) of the [[DMG_PHYSICAL]] he deals to champions. ([[DRAIN]])",
      },
      Q: {
        ko: "케인이 [[DASH]]한 후 낫을 휘둘러 통과한 적에게 75/105/135/165/195(+85% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힌 다음, \n 주변 적에게 다시 같은 피해를 입힙니다. \n \n 7/6.5/6/5.5/5초의 [[COOLDOWN]].",
        en: "Kayn [[DASH]]es and then swings his scythe, dealing 75/105/135/165/195 (+85% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies he passes through, \n then deals the same damage again to nearby enemies. \n \n 7/6.5/6/5.5/5 second [[COOLDOWN]].",
      },
      W: {
        ko: "케인이 낫을 위로 휘둘러 적에게 85/130/175/220/265(+110% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 90% [[SLOW]]시킵니다. \n 둔화 효과는 1.5초에 걸쳐 사라집니다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
        en: "Kayn swings his scythe upward, dealing 85/130/175/220/265 (+110% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies and [[SLOW]]ing them by 90%. \n The slow decays over 1.5 seconds. \n \n 13/12/11/10/9 second [[COOLDOWN]].",
      },
      E: {
        ko: "케인이 7/7.5/8/8.5/9초 동안 [[GHOSTING]] 상태가 되어 [[MS_SCALE]]가 40% 증가하며 지형을 통과할 수 있습니다. ([[IGNORE_TERRAIN]]) \n 처음으로 지형을 통과하면 체력을 90/100/110/120/130(+45% 추가 [[AD_SCALE]])만큼 [[HEAL]]합니다. \n \n [[IMMOBILIZING]] 상태가 되거나 지형 밖에서 1.5초 넘게 머무르면 이 스킬이 즉시 종료됩니다. \n \n 21/19/17/15/13초의 [[COOLDOWN]].",
        en: "Kayn becomes [[GHOSTING]] for 7/7.5/8/8.5/9 seconds, increasing his [[MS_SCALE]] by 40% and letting him pass through terrain. ([[IGNORE_TERRAIN]]) \n The first time he passes through terrain, he [[HEAL]]s for 90/100/110/120/130 (+45% bonus [[AD_SCALE]]). \n \n Being affected by [[IMMOBILIZING]] or staying outside terrain for over 1.5 seconds ends this skill immediately. \n \n 21/19/17/15/13 second [[COOLDOWN]].",
      },
      R: {
        ko: "[[PASSIVE_BONUS]]: 케인이 피해를 입힌 챔피언에게 3.15초 동안 [[MARK]]를 남깁니다. \n \n 케인이 [[MARK]]이 남은 적에게 파고들어 [[UNTARGETABLE]] 상태가 됩니다. \n 2.5초가 지나거나 R [[RECAST_DETONATE]] 시 케인이 빠져나오면서 적에게 150/250/350(+150% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "[[PASSIVE_BONUS]]: Kayn leaves a [[MARK]] on champions he damages for 3.15 seconds. \n \n Kayn infests a [[MARK]]ed enemy, becoming [[UNTARGETABLE]]. \n After 2.5 seconds or on R [[RECAST_DETONATE]], Kayn bursts out, dealing 150/250/350 (+150% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the enemy. \n \n {{ultCooldown}} second [[COOLDOWN]].",
      },
    },

    alt: {
      P: {
        ko: "그림자 암살자: 전투 시작 후 3초 동안 케인의 [[BA]]와 스킬이 입힌 피해의 20~40%([[LEVEL_SCALE]] 비례)만큼 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 이 효과는 케인이 전투에서 벗어난 지([[OUT_OF_COMBAT]]) 8초가 지나거나 그림자의 지배(R)를 사용했을 때만 나타납니다.",
        en: "Shadow Assassin: For 3 seconds after entering combat, Kayn's [[BA]]s and skills deal additional [[DMG_MAGIC]] equal to 20~40% (based on [[LEVEL_SCALE]]) of the damage dealt. \n \n This effect only appears 8 seconds after Kayn leaves combat ([[OUT_OF_COMBAT]]) or when he uses Umbral Trespass (R).",
      },
      Q: {
        ko: "케인이 [[DASH]]한 후 낫을 휘둘러 통과한 적에게 75/105/135/165/195(+85% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힌 다음, \n 주변 적에게 다시 같은 피해를 입힙니다. \n \n 7/6.5/6/5.5/5초의 [[COOLDOWN]].",
        en: "Kayn [[DASH]]es and then swings his scythe, dealing 75/105/135/165/195 (+85% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies he passes through, \n then deals the same damage again to nearby enemies. \n \n 7/6.5/6/5.5/5 second [[COOLDOWN]].",
      },
      W: {
        ko: "케인이 낫을 위로 휘둘러 적에게 85/130/175/220/265(+110% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 90% [[SLOW]]시킵니다. \n 둔화 효과는 1.5초에 걸쳐 사라집니다. \n \n 그림자 암살자: 이 스킬의 [[RANGE_SCALE]]가 증가합니다. 그림자 암살자는 이동하면서 이 스킬을 사용할 수 있습니다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
        en: "Kayn swings his scythe upward, dealing 85/130/175/220/265 (+110% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies and [[SLOW]]ing them by 90%. \n The slow decays over 1.5 seconds. \n \n Shadow Assassin: This skill's [[RANGE_SCALE]] increases. The Shadow Assassin can cast this skill while moving. \n \n 13/12/11/10/9 second [[COOLDOWN]].",
      },
      E: {
        ko: "케인이 7/7.5/8/8.5/9초 동안 [[GHOSTING]] 상태가 되어 [[MS_SCALE]]가 40% 증가하며 지형을 통과할 수 있습니다. ([[IGNORE_TERRAIN]]) \n 처음으로 지형을 통과하면 체력을 90/100/110/120/130(+45% 추가 [[AD_SCALE]])만큼 [[HEAL]]합니다. \n \n [[IMMOBILIZING]] 상태가 되거나 지형 밖에서 1.5초 넘게 머무르면 이 스킬이 즉시 종료됩니다. \n \n 그림자 암살자: [[MS_SCALE]]가 70% 증가하고 [[SLOW_IMMUNE]] 상태가 되며 재사용 대기시간이 10초로 감소합니다. ([[CDR]]) \n \n 21/19/17/15/13초의 [[COOLDOWN]].",
        en: "Kayn becomes [[GHOSTING]] for 7/7.5/8/8.5/9 seconds, increasing his [[MS_SCALE]] by 40% and letting him pass through terrain. ([[IGNORE_TERRAIN]]) \n The first time he passes through terrain, he [[HEAL]]s for 90/100/110/120/130 (+45% bonus [[AD_SCALE]]). \n \n Being affected by [[IMMOBILIZING]] or staying outside terrain for over 1.5 seconds ends this skill immediately. \n \n Shadow Assassin: [[MS_SCALE]] increases by 70%, he becomes [[SLOW_IMMUNE]], and the cooldown is reduced to 10 seconds. ([[CDR]]) \n \n 21/19/17/15/13 second [[COOLDOWN]].",
      },
      R: {
        ko: "[[PASSIVE_BONUS]]: 케인이 피해를 입힌 챔피언에게 3.15초 동안 [[MARK]]를 남깁니다. \n \n 케인이 [[MARK]]이 남은 적에게 파고들어 [[UNTARGETABLE]] 상태가 됩니다. \n 2.5초가 지나거나 R [[RECAST_DETONATE]] 시 케인이 빠져나오면서 적에게 150/250/350(+150% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 그림자 암살자: R을 사용하고 빠져나오는 [[DASH]] 거리가 증가하며, \n 빠져나올 때 다르킨의 낫(P) 재사용 대기시간이 초기화됩니다. ([[CDR_RESET]]) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "[[PASSIVE_BONUS]]: Kayn leaves a [[MARK]] on champions he damages for 3.15 seconds. \n \n Kayn infests a [[MARK]]ed enemy, becoming [[UNTARGETABLE]]. \n After 2.5 seconds or on R [[RECAST_DETONATE]], Kayn bursts out, dealing 150/250/350 (+150% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the enemy. \n \n Shadow Assassin: The [[DASH]] distance for using and exiting R increases, \n and on exiting, The Darkin Scythe (P)'s cooldown is reset. ([[CDR_RESET]]) \n \n {{ultCooldown}} second [[COOLDOWN]].",
      },
    },

    alt2: {
      P: {
        ko: "다르킨 학살자: 케인이 챔피언에게 입힌 [[DMG_PHYSICAL]]의 25%(+[[SELF_BONUS_HP_SCALE]] 100당 0.5%)만큼 체력을 [[HEAL]]합니다. ([[DRAIN]])",
        en: "Darkin Slayer: Kayn [[HEAL]]s for 25% (+0.5% per 100 [[SELF_BONUS_HP_SCALE]]) of the [[DMG_PHYSICAL]] he deals to champions. ([[DRAIN]])",
      },
      Q: {
        ko: "케인이 [[DASH]]한 후 낫을 휘둘러 통과한 적에게 75/105/135/165/195(+85% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힌 다음, \n 주변 적에게 다시 같은 피해를 입힙니다. \n \n 다르킨 학살자: 65% [[AD_SCALE]] + [[TARGET_MAXHP_SCALE]] 비례의 6%(+추가 [[AD_SCALE]] 100당 3.5%)에 해당하는 [[DMG_PHYSICAL]]를 입힙니다. \n \n 7/6.5/6/5.5/5초의 [[COOLDOWN]].",
        en: "Kayn [[DASH]]es and then swings his scythe, dealing 75/105/135/165/195 (+85% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies he passes through, \n then deals the same damage again to nearby enemies. \n \n Darkin Slayer: Deals [[DMG_PHYSICAL]] equal to 65% [[AD_SCALE]] + 6% (+3.5% per 100 bonus [[AD_SCALE]]) of [[TARGET_MAXHP_SCALE]]. \n \n 7/6.5/6/5.5/5 second [[COOLDOWN]].",
      },
      W: {
        ko: "케인이 낫을 위로 휘둘러 적에게 85/130/175/220/265(+110% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 90% [[SLOW]]시킵니다. \n 둔화 효과는 1.5초에 걸쳐 사라집니다. \n \n 다르킨 학살자: 또한 적중한 적을 1초 동안 [[AIRBORNE]]시킵니다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
        en: "Kayn swings his scythe upward, dealing 85/130/175/220/265 (+110% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies and [[SLOW]]ing them by 90%. \n The slow decays over 1.5 seconds. \n \n Darkin Slayer: Also knocks enemies hit [[AIRBORNE]] for 1 second. \n \n 13/12/11/10/9 second [[COOLDOWN]].",
      },
      E: {
        ko: "케인이 7/7.5/8/8.5/9초 동안 [[GHOSTING]] 상태가 되어 [[MS_SCALE]]가 40% 증가하며 지형을 통과할 수 있습니다. ([[IGNORE_TERRAIN]]) \n 처음으로 지형을 통과하면 체력을 90/100/110/120/130(+45% 추가 [[AD_SCALE]])만큼 [[HEAL]]합니다. \n \n [[IMMOBILIZING]] 상태가 되거나 지형 밖에서 1.5초 넘게 머무르면 이 스킬이 즉시 종료됩니다. \n \n 21/19/17/15/13초의 [[COOLDOWN]].",
        en: "Kayn becomes [[GHOSTING]] for 7/7.5/8/8.5/9 seconds, increasing his [[MS_SCALE]] by 40% and letting him pass through terrain. ([[IGNORE_TERRAIN]]) \n The first time he passes through terrain, he [[HEAL]]s for 90/100/110/120/130 (+45% bonus [[AD_SCALE]]). \n \n Being affected by [[IMMOBILIZING]] or staying outside terrain for over 1.5 seconds ends this skill immediately. \n \n 21/19/17/15/13 second [[COOLDOWN]].",
      },
      R: {
        ko: "[[PASSIVE_BONUS]]: 케인이 피해를 입힌 챔피언에게 3.15초 동안 [[MARK]]를 남깁니다. \n \n 케인이 [[MARK]]가 남은 적에게 파고들어 [[UNTARGETABLE]] 상태가 됩니다. \n 2.5초가 지나거나 R [[RECAST_DETONATE]] 시 케인이 빠져나오면서 적에게 150/250/350(+150% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 다르킨 학살자: [[TARGET_MAXHP_SCALE]] 비례의 15%(+추가 [[AD_SCALE]] 100당 10%)에 해당하는 [[DMG_PHYSICAL]]를 입히고, \n 체력을 피해량의 75%만큼 [[HEAL]]합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "[[PASSIVE_BONUS]]: Kayn leaves a [[MARK]] on champions he damages for 3.15 seconds. \n \n Kayn infests a [[MARK]]ed enemy, becoming [[UNTARGETABLE]]. \n After 2.5 seconds or on R [[RECAST_DETONATE]], Kayn bursts out, dealing 150/250/350 (+150% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the enemy. \n \n Darkin Slayer: Deals [[DMG_PHYSICAL]] equal to 15% (+10% per 100 bonus [[AD_SCALE]]) of [[TARGET_MAXHP_SCALE]], \n and [[HEAL]]s for 75% of the damage dealt. \n \n {{ultCooldown}} second [[COOLDOWN]].",
      },
    },
  },
};

export default kayn;
