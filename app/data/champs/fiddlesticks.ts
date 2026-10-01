import type { ChampData } from "../interactions/types";

const fiddlesticks: ChampData = {
  id: "fiddlesticks",
  skills: {
    P: ["BUFF_FORM", "SUMMON"],
    Q: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL", "FEAR"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["Q_FLASH", "FEAR"] },
    ] },
    W: ["W_FLASH", "TETHER", "HEAL", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SILENCE"],
    R: ["BLINK", "WALL_HOP"],
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
      { label: { ko: "P 허수아비 버프", en: "P Effigy Buff" }, tags: ["ST_CONDITIONAL", "BUFF"] },
      { label: { ko: "P 장신구", en: "P Trinket" }, tags: ["SKILL_VECTOR", "SUMMON"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "FEAR", "ON_TARGET_CD"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["DMG_MAGIC", "TARGETED", "PROJECTILE", "SINGLE", "SEPARATOR", "ST_CONDITIONAL", "FEAR"] },
    ] },
    
    W: ["TIMING_CAST", "DOT", "DMG_MAGIC", "SKILL_CHANNEL", "SWARM", "TETHER", "HEAL", "CANCELLABLE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR", "SEPARATOR", "ST_CONDITIONAL", "Q", "PASSIVE_BONUS"],

    E: ["DMG_MAGIC", "AOE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SILENCE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "Q", "PASSIVE_BONUS"],

    R: { phases: [
      { label: { ko: "R 시전집중",     en: "R Channel" }, tags: ["SKILL_CHANNEL_MOVEMENT", "LOCKED"] },
      { label: { ko: "R 순간이동", en: "R Blink" }, tags: ["BLINK", "DMG_MAGIC", "AOE", "DOT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "Q", "PASSIVE_BONUS"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 장신구가 피들모양 허수아비로 대체. \n 적 챔피언이 가까이 오면 \n 허수아비가 작동해서 이동, 점멸, 스킬모션 중 \n 랜덤으로 행동하고 사라짐.", "6레벨부터 [[EMPOWERED]]되어 설치할 때 근처 와드를 드러냄. \n \n",

          "Q의 [[PASSIVE_BONUS]]는 \n 2초동안 가만히 있거나 \n 시야에서 보이지 않을 때 \n 스킬 적중 시 대상 [[FEAR]]. \n [[FEAR]]는 [[ON_TARGET_CD]]. \n 쿨타임은 대상 주변에 원형띠로 구분.", 
          "Q는 [[TARGETED]] [[PROJECTILE]] 발사. \n 적중하면 [[DMG_MAGIC]]와 [[FEAR]]. \n [[FEAR]]가 쿨타임인 대상에게는 추가 [[DMG_MAGIC]]. \n \n",

          "W는 [[AOE]] 안의 대상에게 [[TETHER]]. \n [[DOT]] [[DMG_MAGIC]]와 피해량에 비례한 [[HEAL]]. \n 취소하지 않고 시전 완료하면 추가 [[DMG_MAGIC]]와 [[CDR]] \n \n",

          "E는 [[AOE]] [[DMG_MAGIC]]. \n [[AOE]] 중앙에 맞은 대상은 [[SILENCE]]. \n \n",

          "R은 [[SKILL_CHANNEL]]하여 준비. \n 잠시 후 [[BLINK]]하여 \n 5초동안 [[AOE]] [[DOT]] [[DMG_MAGIC]].",
        ],

        en: [
          "P replaces the trinket with a Fiddlesticks effigy. \n When an enemy champion gets close, \n the effigy activates and randomly performs a movement, flash, or skill animation \n before disappearing.",
          "From level 6, it becomes [[EMPOWERED]] and reveals nearby wards when placed. \n \n",
          "Q's [[PASSIVE_BONUS]]: \n when standing still for 2 seconds \n or not visible to enemies, \n hitting a skill [[FEAR]]s the target. \n [[FEAR]] has an [[ON_TARGET_CD]]. \n The cooldown is shown as a circular ring around the target.",
          "Q fires a [[TARGETED]] [[PROJECTILE]]. \n On hit, [[DMG_MAGIC]] and [[FEAR]]. \n Bonus [[DMG_MAGIC]] against targets whose [[FEAR]] is on cooldown. \n \n",
          "W [[TETHER]]s targets within the [[AOE]]. \n [[DOT]] [[DMG_MAGIC]] and [[HEAL]] based on damage dealt. \n Completing the cast without canceling adds bonus [[DMG_MAGIC]] and [[CDR]] \n \n",
          "E deals [[AOE]] [[DMG_MAGIC]]. \n Targets hit in the center of the [[AOE]] are [[SILENCE]]d. \n \n",
          "R prepares with a [[SKILL_CHANNEL]]. \n Shortly after, it [[BLINK]]s \n and deals [[AOE]] [[DOT]] [[DMG_MAGIC]] for 5 seconds.",
        ]

      },

      note2: {
        ko: [
        "W는 [[TIMING_CAST]]로 준비하고 [[SKILL_CHANNEL]]을 시전. \n [[TIMING_CAST]] 시간동안 [[W_FLASH]] 가능."
      ],
        en: [
          "W prepares with [[TIMING_CAST]], then casts the [[SKILL_CHANNEL]]. \n [[W_FLASH]] is possible during the [[TIMING_CAST]] time.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 110,
    16: 80,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Fiddlesticks,
  // 스킬 수치 최근 변경 V25.13). DDragon effectBurn/vars가 비어 있어 위키 본문/템플릿 수치로 채움.
  // R은 위키 템플릿 원자료에 5랭크 값이 섞여 있으나 페이지 표시값(3랭크)을 채택.
  // P는 DDragon passive.description이 첫 문장만 담고 있어 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_fiddlestickspassive_tooltip)을 사용.
  skillTooltip: {
    P: {
      ko: "피들스틱의 장신구는 허수아비로 대체됩니다. \n 허수아비는 적에게 발각되면 잠시 피들스틱을 흉내 냅니다. \n 피들스틱이 2초 동안 움직이지 않으면 허수아비를 흉내냅니다. \n ([[BUFF]] 상태.) \n \n 6레벨이 되면 허수아비가 6초 동안 근처의 와드를 드러냅니다.",
      en: "Fiddlesticks's trinket is replaced with an Effigy. \n When spotted by enemies, the Effigy briefly mimics Fiddlesticks. \n If Fiddlesticks doesn't move for 2 seconds, he mimics the Effigy. \n ([[BUFF]] state.) \n \n At level 6, the Effigy reveals nearby wards for 6 seconds.",
    },
    Q: {
      ko: "[[PASSIVE_BONUS]]: [[OUT_OF_COMBAT]] 상태로 적의 시야에 보이지 않을 때나 허수아비인 척할 때 적에게 스킬로 피해를 입히면 대상이 1.2/1.4/1.6/1.8/2초 동안 [[FEAR]]에 질립니다. \n \n 사용 시: 1.2/1.4/1.6/1.8/2초 동안 적을 [[FEAR]]에 빠트리고 [[TARGET_CURRENT_HP_SCALE]]의 4/4.5/5/5.5/6%(+주문력 100당 3%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n 최근에 피들스틱에 의해 [[FEAR]]에 빠진 대상은 [[TARGET_CURRENT_HP_SCALE]]의 8/9/10/11/12%(+주문력 100당 6%)에 해당하는 [[DMG_MAGIC]]를 입습니다. \n \n 15/14.5/14/13.5/13초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: When [[OUT_OF_COMBAT]] and unseen by enemies, or while pretending to be an Effigy, damaging an enemy with a skill [[FEAR]]s them for 1.2/1.4/1.6/1.8/2 seconds. \n \n Active: [[FEAR]]s an enemy for 1.2/1.4/1.6/1.8/2 seconds and deals [[DMG_MAGIC]] equal to 4/4.5/5/5.5/6% (+3% per 100 AP) of [[TARGET_CURRENT_HP_SCALE]]. \n Targets recently [[FEAR]]ed by Fiddlesticks instead take [[DMG_MAGIC]] equal to 8/9/10/11/12% (+6% per 100 AP) of [[TARGET_CURRENT_HP_SCALE]]. \n \n 15/14.5/14/13.5/13 second [[COOLDOWN]].",
    },
    W: {
      ko: "피들스틱이 [[SKILL_CHANNEL]]해 2초에 걸쳐 주변 적들의 영혼을 흡수합니다. \n 그동안 초당 60/90/120/150/180(+45% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, 지속시간이 끝날 때 [[TARGET_MISSING_HP_SCALE]]의 12/14.5/17/19.5/22%에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n 피들스틱은 피해량의 25/32.5/40/47.5/55%에 해당하는 체력을 [[HEAL]]합니다. \n \n 피들스틱이 방해 없이 끝까지 스킬을 사용하면 남은 재사용 대기시간이 60% 감소합니다. ([[CDR]]) \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "Fiddlesticks [[SKILL_CHANNEL]]s, draining the souls of nearby enemies over 2 seconds. \n During this time, he deals 60/90/120/150/180 (+45% [[AP_SCALE]]) [[DMG_MAGIC]] per second, and at the end of the duration deals [[DMG_MAGIC]] equal to 12/14.5/17/19.5/22% of [[TARGET_MISSING_HP_SCALE]]. \n Fiddlesticks [[HEAL]]s for 25/32.5/40/47.5/55% of the damage dealt. \n \n If Fiddlesticks completes the skill without interruption, its remaining cooldown is reduced by 60%. ([[CDR]]) \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
    },
    E: {
      ko: "피들스틱이 어둠의 마력을 방출해 70/105/140/175/210(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1.25초 동안 30/35/40/45/50% [[SLOW]]시킵니다. \n 또한 범위 중심에 있는 적을 지속시간 동안 [[SILENCE]]시킵니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Fiddlesticks unleashes dark magic, dealing 70/105/140/175/210 (+50% [[AP_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]ing by 30/35/40/45/50% for 1.25 seconds. \n Enemies in the center of the area are also [[SILENCE]]d for the duration. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    R: {
      ko: "피들스틱이 1.5초 동안 [[SKILL_CHANNEL]]해 대상 지역으로 [[BLINK]]한 뒤 살인 까마귀 떼를 불러내어 5초 동안 750/1250/1750(+250% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Fiddlesticks [[SKILL_CHANNEL]]s for 1.5 seconds, then [[BLINK]]s to the target area and unleashes a murder of crows, dealing 750/1250/1750 (+250% [[AP_SCALE]]) [[DMG_MAGIC]] over 5 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default fiddlesticks;
