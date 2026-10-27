import type { ChampData } from "../interactions/types";

const khazix: ChampData = {
  id: "khazix",
  // 2026-10-23: 기본/진화 2폼 구조 제거(사용자 결정), 카이사와 동일하게 진화(alt) 데이터를 단일 폼으로 채택.
  skills: {
    P: ["COOLDOWN", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "MARK"],

    Q: { phases: [
    { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "EMPOWERED"] },
    { label: { ko: "Q 진화", en: "Q Evolved" }, tags: ["RANGE_UP"] },
  ] },

    W: { phases: [
    { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    { label: { ko: "W 진화", en: "W Evolved" }, tags: ["SLOW", "REVEALED"] },
  ] },
    
    E: { phases: [
    { label: { ko: "E", en: "E" }, tags: ["DASH", "WALL_HOP"] },
    { label: { ko: "E 진화", en: "E Evolved" }, tags: ["RANGE_UP", "SEPARATOR", "ON_TAKEDOWN", "CDR_RESET"] },
  ] },
    R: ["INVISIBILITY", "MS_UP", "SEPARATOR", "SKILL_RECAST"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: ["HIT_SOUND", "REVEALED"],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
    { label: { ko: "P 비노출 버프", en: "P Unseen Buff" }, tags: ["ST_CONDITIONAL", "BUFF", "SEPARATOR", "DMG_PHYSICAL", "ON_HIT", "SLOW"] },
    { label: { ko: "P 고립", en: "P Isolation" }, tags: ["ST_CONDITIONAL", "MARK"] },
  ] },

    Q: { phases: [
    { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "DMG_PHYSICAL", "ADDITIONAL"] },
    { label: { ko: "Q 진화로 추가 효과", en: "Q Evolved Bonus" }, tags: ["Q", "BA", "RANGE_UP", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
  ] },

    W: { phases: [
    { label: { ko: "W", en: "W" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "DETONATE", "SEPARATOR", "ST_CONDITIONAL", "HEAL"] },
    { label: { ko: "W 진화로 추가 효과", en: "W Evolved Bonus" }, tags: ["VOLLEY", "SLOW", "REVEALED"] },
  ] },
    
    E: { phases: [
    { label: { ko: "E", en: "E" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SEPARATOR", "DASH", "WALL_HOP"] },
    { label: { ko: "E 진화로 추가 효과", en: "E Evolved Bonus" }, tags: ["RANGE_UP", "SEPARATOR", "ON_TAKEDOWN", "CDR_RESET"] },
  ] },

    R: { phases: [
    { label: { ko: "R", en: "R" }, tags: ["INVISIBILITY", "MS_UP", "SEPARATOR", "SKILL_RECAST"] },
    { label: { ko: "R 진화로 추가 효과", en: "R Evolved Bonus" }, tags: ["DURATION_EXT", "SEPARATOR", "SKILL_RECAST", "ADDITIONAL"] },
  ] },
    

  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[BUFF]]와 고립([[MARK]]) 두 가지.", 
          "[[BUFF]]는 상대 시야에 보이지 않으 획득. \n [[BA]] 공격 시 [[BUFF]] 소모. \n [[DMG_MAGIC]]와 [[SLOW]].", 
          "따로 떨어져 있는 적군은 고립([[MARK]]). \n 고립된 대상에게는 스킬마다 추가 효과. \n \n",

          "Q는 단일 대상 [[DMG_PHYSICAL]]. \n 고립 대상에게는 [[DMG_PHYSICAL]] 추가와 [[CDR]].", 
          "Q [[EVOLVED]] \n [[BA]]와 Q의 [[RANGE_UP]]. \n \n",

          "W는 [[DMG_PHYSICAL]] [[PROJECTILE]] 발사. \n 적중시 [[DETONATE]]하여 [[AOE]] 피해. \n [[DETONATE]] [[AOE]] 안에 카직스가 있다면 [[HEAL]].", 
          "W [[EVOLVED]] \n [[PROJECTILE]] 3개 발사. \n [[SLOW]], [[REVEALED]] 추가. \n 고립 대상에게는 강한 [[SLOW]]. \n \n",

          "E는 [[DASH]]하여 착지할 때 [[AOE]] [[DMG_PHYSICAL]].", 
          "E [[EVOLVED]] \n [[DASH]] 거리 증가. \n 처치 관여 시 [[CDR_RESET]]. \n \n",

          "R의 [[PASSIVE_BONUS]]는 R을 배웠을때 [[EVOLVED]] 획득. \n QWER 중 하나를 [[EVOLVED]].", 
          "R은 사용하면 [[MS_UP]], [[INVISIBILITY]]. \n 한 번 더 [[SKILL_RECAST]] 가능.", 
          "R [[EVOLVED]] \n [[INVISIBILITY]] 지속 시간 증가. \n 두 번 더 [[SKILL_RECAST]] 가능.",
        ],

        en: ["P has two parts: a [[BUFF]] and Isolation ([[MARK]]).",
          "The [[BUFF]] is gained while not visible to enemies. \n [[BA]]s consume the [[BUFF]]. \n [[DMG_MAGIC]] and [[SLOW]].",
          "Enemies separated from their allies are Isolated ([[MARK]]). \n Isolated targets suffer extra effects from each skill. \n \n",
          "Q deals single-target [[DMG_PHYSICAL]]. \n Against Isolated targets, additional [[DMG_PHYSICAL]] and [[CDR]].",
          "Q [[EVOLVED]] \n [[RANGE_UP]] for [[BA]]s and Q. \n \n",
          "W fires a [[DMG_PHYSICAL]] [[PROJECTILE]]. \n On hit, it [[DETONATE]]s for [[AOE]] damage. \n If Kha'Zix is inside the [[DETONATE]] [[AOE]], he [[HEAL]]s.",
          "W [[EVOLVED]] \n Fires 3 [[PROJECTILE]]s. \n Adds [[SLOW]] and [[REVEALED]]. \n Stronger [[SLOW]] on Isolated targets. \n \n",
          "E [[DASH]]es and deals [[AOE]] [[DMG_PHYSICAL]] on landing.",
          "E [[EVOLVED]] \n Increased [[DASH]] distance. \n [[CDR_RESET]] on takedown. \n \n",
          "R's [[PASSIVE_BONUS]] grants an [[EVOLVED]] when R is learned. \n [[EVOLVED]]s one of Q, W, E, or R.",
          "Using R grants [[MS_UP]] and [[INVISIBILITY]]. \n Can [[SKILL_RECAST]] once more.",
          "R [[EVOLVED]] \n Increased [[INVISIBILITY]] duration. \n Can [[SKILL_RECAST]] twice more."
        ]

      },

      note2: {
        ko: [
        "[[E_FLASH]]은 불가능으로 구분했지만, \n [[SPELL_FLASH]]로 E의 [[DASH]]을 중단하는것으로 생각한다면 \n 가능하다고도 볼 수 있음.", 
        "[[EVOLVED]]는 [[EVOLVED]] 완료까지 시간이 걸림. \n 카이사와 다르게 진화 캔슬 불가.",
        "P의 [[BUFF]]가 생기고 \n 카직스의 모습이 보여도 잠시동안은 사라지지 않음.", 
        "E로 [[DASH]] 도중 QWER 스킬 시전 가능.",
        "R의 [[INVISIBILITY]] 상태일 때 [[SPELL_FLASH]]을 사용해도 [[INVISIBILITY]] 지속. \n E의 [[DASH]]은 해제.",
      ],
        en: ["[[E_FLASH]] is classified as not possible, but \n if you count canceling E's [[DASH]] with [[SPELL_FLASH]], \n it could also be seen as possible.",
          "An [[EVOLVED]] takes time until the [[EVOLVED]] completes. \n Unlike Kai'Sa, evolve canceling is not possible.",
          "After P's [[BUFF]] appears, \n it doesn't disappear for a short while even if Kha'Zix is seen.",
          "Q, W, E, and R can be cast while [[DASH]]ing with E.",
          "Using [[SPELL_FLASH]] while in R's [[INVISIBILITY]] keeps the [[INVISIBILITY]]. \n E's [[DASH]] breaks it."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. 2026-10-23 폼 제거로 진화(alt) 문장만 남김.
  // Q/W/E/R은 CDragon ko_kr lol.stringtable.json의 인게임 원문 spell_khazix*_tooltip_0(기본)/_1(진화),
  // R은 두 폼 모두 _P(진화 안내) 문단 포함, P는 spell_khazixpassive_tooltip. 기본 폼 문장은 DDragon ko_KR 16.20.1과 동일.
  // 수치는 공식 위키(V26.19)로 채움(CDragon 게임 데이터 khazix.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "카직스는 적의 시야에 노출되지 않을 때, 다음 [[BA]] 공격 시 챔피언에게 22~141([[LEVEL_SCALE]] 비례)(+50% 추가 [[AD_SCALE]])의 [[DMG_MAGIC]]를 추가로 입히고, 2초 동안 25% [[SLOW]]시킵니다. \n \n 근처에 아군이 없는 적은 고립 상태([[MARK]])가 됩니다.",
      en: "When Kha'Zix is not visible to the enemy, his next [[BA]] against a champion deals an additional 22~141 (based on [[LEVEL_SCALE]]) (+50% bonus [[AD_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]s by 25% for 2 seconds. \n \n Enemies with no nearby allies become Isolated ([[MARK]]).",
    },
    Q: {
      ko: "카직스가 근처 적을 공격해 80/105/130/155/180(+105% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 고립 상태([[MARK]])인 적에게는 168/220.5/273/325.5/378(+220.5% 추가 [[AD_SCALE]])의 피해를 입힙니다. \n \n [[EVOLVED]] : 이 스킬과 [[BA]]의 [[RANGE_SCALE]]가 50 증가하고, \n 고립 상태([[MARK]])인 대상에게 사용 시 재사용 대기시간이 45% 줄어듭니다. ([[CDR]]) \n \n 4초의 [[COOLDOWN]].",
      en: "Kha'Zix attacks a nearby enemy, dealing 80/105/130/155/180 (+105% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n Against Isolated ([[MARK]]) enemies, he deals 168/220.5/273/325.5/378 (+220.5% bonus [[AD_SCALE]]) damage. \n \n [[EVOLVED]]: The [[RANGE_SCALE]] of this skill and his [[BA]]s increases by 50, \n and using it on an Isolated ([[MARK]]) target reduces its cooldown by 45%. ([[CDR]]) \n \n 4 second [[COOLDOWN]].",
    },
    W: {
      ko: "카직스가 가시를 발사하여 처음 적중하는 적과 그 주변 좁은 반경에 75/105/135/165/195(+100% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 카직스가 [[DETONATE]] 반경 내에 있으면 체력을 55/75/95/115/135(+50% [[AP_SCALE]]) [[HEAL]]합니다. \n \n [[EVOLVED]] : 가시를 세 개 발사하며, 2.25초 동안 위치를 드러내고 ([[REVEALED]]) 40% [[SLOW]]시킵니다. \n 고립 상태([[MARK]])인 대상에게는 [[SLOW]] 효과가 60%로 증가합니다. \n \n 9초의 [[COOLDOWN]].",
      en: "Kha'Zix fires spikes, dealing 75/105/135/165/195 (+100% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit and a small area around it. \n If Kha'Zix is within the [[DETONATE]] radius, he [[HEAL]]s for 55/75/95/115/135 (+50% [[AP_SCALE]]). \n \n [[EVOLVED]]: Fires three spikes, revealing ([[REVEALED]]) and [[SLOW]]ing enemies by 40% for 2.25 seconds. \n Against Isolated ([[MARK]]) targets, the [[SLOW]] increases to 60%. \n \n 9 second [[COOLDOWN]].",
    },
    E: {
      ko: "카직스가 도약([[DASH]]) 후 착지하며 65/100/135/170/205(+40% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n [[EVOLVED]] : 300 더 멀리 도약합니다. \n 챔피언 [[ON_TAKEDOWN]] 이 스킬의 재사용 대기시간이 초기화됩니다. ([[CDR_RESET]]) \n \n 20/18/16/14/12초의 [[COOLDOWN]].",
      en: "Kha'Zix leaps ([[DASH]]) and deals 65/100/135/170/205 (+40% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] on landing. \n \n [[EVOLVED]]: Leaps 300 farther. \n On a champion [[ON_TAKEDOWN]], this skill's cooldown is reset. ([[CDR_RESET]]) \n \n 20/18/16/14/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "사용 시: 카직스가 1.25초 동안 [[INVISIBILITY]] 상태가 되고 [[MS_SCALE]]가 40% 상승합니다. \n 12초 안에 이 스킬을 [[SKILL_RECAST]]할 수 있습니다. \n \n [[EVOLVED]] : [[INVISIBILITY]] 상태 지속시간이 2초로 늘어나고, \n 10초 안에 이 스킬을 2회까지 [[SKILL_RECAST]]할 수 있습니다. \n \n [[PASSIVE_BONUS]]: 이 스킬을 레벨 업하면 [[EVOLVED]]를 통해 스킬 하나에 추가 효과를 부여합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Active: Kha'Zix becomes [[INVISIBILITY]] for 1.25 seconds and his [[MS_SCALE]] increases by 40%. \n He can [[SKILL_RECAST]] this skill within 12 seconds. \n \n [[EVOLVED]]: The [[INVISIBILITY]] duration increases to 2 seconds, \n and he can [[SKILL_RECAST]] this skill up to 2 times within 10 seconds. \n \n [[PASSIVE_BONUS]]: Leveling up this skill grants an [[EVOLVED]] that adds extra effects to one skill. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default khazix;
