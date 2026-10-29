import type { ChampData } from "../interactions/types";

const illaoi: ChampData = {
  id: "illaoi",
  skills: {
    P: { phases: [
      { label: { ko: "P 촉수 소환", en: "P Tentacle Summon" }, tags: ["COOLDOWN", "SUMMON", "ALLY_TP"] },
      { label: { ko: "P 촉수 공격", en: "P Tentacle Attack" }, tags: ["HEAL"] },
    ] },
    Q: [],
    W: ["AA_RESET", "SEPARATOR", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "SEPARATOR", "MARK", "SLOW", "SEPARATOR", "SUMMON"],
    R: ["R_FLASH", "SEPARATOR", "LUNGE", "UNSTOPPABLE", "SEPARATOR", "ST_CONDITIONAL", "SUMMON"],
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
      { label: { ko: "P 촉수 소환", en: "P Tentacle Summon" }, tags: ["COOLDOWN", "SUMMON", "ALLY_TP"] },
      { label: { ko: "P 촉수 공격", en: "P Tentacle Attack" }, tags: ["DMG_PHYSICAL", "AOE", "ST_DELAYED", "HEAL"] },
    ] },

    Q: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS"] },
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"] },
    ] },
    
    W: ["DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "DASH", "WALL_HOP"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["TIMING_CAST", "PROJECTILE", "SINGLE", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL"] },
      { label: { ko: "E 표식", en: "E Mark" }, tags: ["MARK", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SUMMON"] },
    ] },

    R: { phases: [
      { label: { ko: "R 도약", en: "R Leap" }, tags: ["TIMING_CAST", "UNSTOPPABLE", "LUNGE"] },
      { label: { ko: "R 내려 치기", en: "R Slam" }, tags: ["DMG_PHYSICAL", "AOE", "SEPARATOR", "W", "CDR", "SEPARATOR", "ST_CONDITIONAL", "SUMMON"] },
      { label: { ko: "R 촉수 버프", en: "R Tentacle Buff" }, tags: ["UNTARGETABLE", "AS_UP"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: {
        ko: [],
        en: [] },
      note1: {

        ko: [
          "P는 근처에 촉수를 [[SUMMON]]. \n W, E로 적 챔피언을 맞히면 촉수가 공격. \n [[AOE]] [[DMG_PHYSICAL]]. \n 촉수가 [[ON_CHAMP_HIT]] \n [[SELF_MISSING_HP_SCALE]] 비례 [[HEAL]]. \n \n",

          "Q의 [[PASSIVE_BONUS]]는 촉수의 [[DMG_PHYSICAL]] 증가.", 
          "Q는 [[AOE]] [[DMG_PHYSICAL]]. \n \n",

          "W는 다음 [[BA]] [[EMPOWERED]]. \n 공격하면 [[DASH]]하여 [[TARGET_MAXHP_SCALE]] [[DMG_PHYSICAL]]와 \n 대상 주변에 [[SUMMON]]되어 있던 촉수들이 후려치기 공격. \n [[AA_RESET]] 가능. \n \n",

          "E는 [[ON_CHAMP_HIT]] 영혼 추출. ([[CLONE]] [[SUMMON]]) \n 공격하면 일정부분의 [[DMG_PHYSICAL]]가 본체에게 전이. \n 영혼을 처치하거나 대상이 [[AOE]]를 벗어나면 [[DEBUFF]]. \n [[DEBUFF]]가 생기면 잠시 [[SLOW]]와 \n 대상 주변 촉수가 후려치기 공격. \n 촉수가 없다면 [[SUMMON]]되어 공격. \n \n",

          "R은 [[UNSTOPPABLE]]로 [[LUNGE]]하여 [[AOE]] [[DMG_PHYSICAL]]. \n 적중한 적 챔피언 1개당 임시촉수 1개 [[SUMMON]]. \n 8초간 주변 모든촉수가 [[UNTARGETABLE]]가 되고 \n 촉수의 [[AS_UP]] 50% \n W의 [[COOLDOWN]]이 2초로 [[CDR]].",
        ],

        en: ["P [[SUMMON]]s tentacles nearby. \n Hitting enemy champions with W or E makes the tentacles attack. \n [[AOE]] [[DMG_PHYSICAL]]. \n When a tentacle lands an [[ON_CHAMP_HIT]], \n Illaoi [[HEAL]]s based on [[SELF_MISSING_HP_SCALE]]. \n \n",
          "Q's [[PASSIVE_BONUS]] increases the tentacles' [[DMG_PHYSICAL]].",
          "Q deals [[AOE]] [[DMG_PHYSICAL]]. \n \n",
          "W makes the next [[BA]] [[EMPOWERED]]. \n On attack, Illaoi [[DASH]]es and deals [[DMG_PHYSICAL]] based on [[TARGET_MAXHP_SCALE]], \n and tentacles [[SUMMON]]ed around the target slam it. \n Can [[AA_RESET]]. \n \n",
          "E extracts a soul on [[ON_CHAMP_HIT]]. ([[CLONE]] [[SUMMON]]) \n Attacking the soul transfers part of the [[DMG_PHYSICAL]] to the original. \n Killing the soul or the target leaving the [[AOE]] applies a [[DEBUFF]]. \n When the [[DEBUFF]] is applied, the target is briefly [[SLOW]]ed \n and tentacles around the target slam it. \n If there are no tentacles, one is [[SUMMON]]ed to attack. \n \n",
          "R [[LUNGE]]s while [[UNSTOPPABLE]], dealing [[AOE]] [[DMG_PHYSICAL]]. \n [[SUMMON]]s 1 temporary tentacle per enemy champion hit. \n For 8 seconds, all nearby tentacles become [[UNTARGETABLE]], \n tentacles gain 50% [[AS_UP]], \n and W's [[COOLDOWN]] gets [[CDR]] down to 2 seconds."
        ]

      },

      note2: {
        ko: [
        "R의 W [[CDR]]은 스킬가속에 영향을 받음.", 
        "E는 미니언도 관통 불가.", 
      ],
        en: ["R's W [[CDR]] is affected by ability haste.",
          "E cannot pierce even minions."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 95,
    16: 70,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_illaoipassive_tooltip(인게임 원문)을 뼈대로 씀.
  // DDragon effectBurn/vars가 전부 비어 있어 수치는 공식 위키(V26.10)로 채우고,
  // 위키에서 텍스트로 안 잡힌 R 지속시간·R 중 W 쿨타임은 CDragon 게임 데이터
  // (illaoi.bin.json Duration=8, CooldownDuringR=2)로 확인함.
  skillTooltip: {
    P: {
      ko: "일라오이가 신을 영접해, 주변에 다른 촉수가 없는 경우 근처 지형에 촉수를 [[SUMMON]]합니다. ([[LEVEL_SCALE]] 비례 18~7초의 [[COOLDOWN]]) \n 촉수는 스스로 공격하지는 않지만 일라오이가 스킬을 사용해 공격을 유도 할 수 있습니다. (후려치기) \n \n 후려치기는 9~180([[LEVEL_SCALE]] 비례)(+110% [[AD_SCALE]])(+40% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 한 명 이상의 적 챔피언에게 적중시키면 일라오이가 [[SELF_MISSING_HP_SCALE]]의 5%를 [[HEAL]]합니다.",
      en: "Illaoi worships her god and, if there are no other tentacles nearby, [[SUMMON]]s a tentacle on nearby terrain. (18~7 second [[COOLDOWN]] based on [[LEVEL_SCALE]]) \n Tentacles don't attack on their own, but Illaoi can make them attack with her skills. (Slam) \n \n Slams deal 9~180 (based on [[LEVEL_SCALE]]) (+110% [[AD_SCALE]]) (+40% [[AP_SCALE]]) [[DMG_PHYSICAL]]. \n If a slam hits at least one enemy champion, Illaoi [[HEAL]]s for 5% of [[SELF_MISSING_HP_SCALE]].",
    },
    Q: {
      ko: "[[PASSIVE_BONUS]]: 후려치기의 [[DMG_PHYSICAL]]가 10/15/20/25/30% 증가합니다. \n \n 사용 시: 일라오이가 성상을 휘둘러 촉수가 전방에 후려치기를 사용하게 합니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Slam [[DMG_PHYSICAL]] is increased by 10/15/20/25/30%. \n \n Active: Illaoi swings her idol, making a tentacle slam forward. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "일라오이가 다음 [[BA]] 시 대상에게 [[DASH]]해 [[TARGET_MAXHP_SCALE]]의 3/3.5/4/4.5/5%(+[[AD_SCALE]] 100당 3.5%)에 해당하는 [[DMG_PHYSICAL]]를 추가로 입힙니다. \n \n 일라오이가 공격하면 근처의 촉수도 함께 대상에게 후려치기를 사용합니다. \n \n 4초의 [[COOLDOWN]].",
      en: "On her next [[BA]], Illaoi [[DASH]]es to the target, dealing additional [[DMG_PHYSICAL]] equal to 3/3.5/4/4.5/5% (+3.5% per 100 [[AD_SCALE]]) of [[TARGET_MAXHP_SCALE]]. \n \n When she attacks, nearby tentacles also slam the target. \n \n 4 second [[COOLDOWN]].",
    },
    E: {
      ko: "일라오이가 7초 동안 적 챔피언에게서 영혼을 분리합니다. \n 영혼에게 피해를 입히면 피해량의 25/30/35/40/45%(+[[AD_SCALE]] 100당 8%)가 해당 적 챔피언에게 전이됩니다. \n \n 만약 영혼이 처치당하거나 대상이 일정 범위를 벗어나면, 4초 동안 대상에게 [[MARK]]을 남기며 1.5초 동안 80% [[SLOW]]시킵니다. \n [[MARK]]이 남은 적 주변에 촉수가 없다면 촉수를 [[SUMMON]]합니다. \n \n 촉수는 4.5/4/3.5초([[LEVEL_SCALE]] 비례)마다 영혼과 [[MARK]]이 남은 적에게 후려치기를 사용합니다. \n \n 16/15/14/13/12초의 [[COOLDOWN]].",
      en: "Illaoi rips the spirit from an enemy champion for 7 seconds. \n Damage dealt to the spirit transfers 25/30/35/40/45% (+8% per 100 [[AD_SCALE]]) of it to that enemy champion. \n \n If the spirit is killed or the target leaves the area, the target is [[MARK]]ed for 4 seconds and [[SLOW]]ed by 80% for 1.5 seconds. \n If there are no tentacles near the [[MARK]]ed enemy, a tentacle is [[SUMMON]]ed. \n \n Tentacles slam the spirit and the [[MARK]]ed enemy every 4.5/4/3.5 seconds (based on [[LEVEL_SCALE]]). \n \n 16/15/14/13/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "일라오이가 [[LUNGE]] 후 바닥을 내리쳐 근처 적들에게 150/250/350(+50% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, 피해를 입는 적 챔피언 한 명당 촉수를 하나씩 [[SUMMON]]합니다. \n \n 이후 촉수는 8초 동안 [[UNTARGETABLE]] 상태가 되고, 후려치기의 사용 속도가 50% 빨라집니다. \n 그리고 혹독한 가르침(W)의 재사용 대기시간이 2초로 줄어듭니다. \n (W [[CDR]]) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Illaoi [[LUNGE]]s and slams the ground, dealing 150/250/350 (+50% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to nearby enemies and [[SUMMON]]ing one tentacle per enemy champion hit. \n \n For 8 seconds, tentacles become [[UNTARGETABLE]] and slam 50% faster. \n Harsh Lesson (W)'s cooldown is also reduced to 2 seconds. \n (W [[CDR]]) \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default illaoi;
