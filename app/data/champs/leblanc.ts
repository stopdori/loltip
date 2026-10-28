import type { ChampData } from "../interactions/types";

const leblanc: ChampData = {
  id: "leblanc",
  skills: {
    P: ["ST_CONDITIONAL", "INVISIBILITY", "CLONE"],
    Q: ["Q_FLASH", "MARK"],
    W: ["DASH", "WALL_HOP", "SEPARATOR", "RECAST_RETURN", "BLINK"],
    E: ["E_FLASH", "TETHER", "TRUE_SIGHT", "SEPARATOR", "ST_CONDITIONAL", "ROOT"],
    R: [],
  },

  vision: {
    P: [],
    Q: [ "POSITION_REVEAL"],
    W: [],
    E: [ "POSITION_REVEAL", "TRUE_SIGHT"],
    R: [],
  },

  gimmick: {
    P: ["COOLDOWN", "SEPARATOR", "ST_CONDITIONAL", "INVISIBILITY", "CLONE"],
    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "MARK"] },
      { label: { ko: "Q 인장", en: "Q Mark" }, tags: ["MARK_CONSUME", "DMG_MAGIC"] },
    ] },

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "AOE", "ZONE", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "W 재시전 복귀", en: "W Recast Return" }, tags: ["RECAST_RETURN", "BLINK"] },
    ] },

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "TETHER"] },
      { label: { ko: "E 사슬 발동", en: "E Tether" }, tags: ["DMG_MAGIC", "ROOT"] },
    ] },
    R: [],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 체력이 40% 이하가 되면 [[INVISIBILITY]]. \n [[COOLDOWN]] 존재. \n [[INVISIBILITY]]과 동시에 무해한 [[CLONE]] 생성. \n [[CLONE]]은 alt 우클릭으로 조종 가능. \n \n",

          "Q는 [[TARGETED]] [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[MARK]]. \n 다른 스킬을 적중 시키면 [[MARK_CONSUME]]하여 [[DMG_MAGIC]] 추가.", 
          "Q 또는 [[MARK]] 효과로 [[ON_KILL]] \n [[MANA_RESTORE]], [[CDR]]. \n \n",

          "W는 [[DASH]]하여 주변 [[AOE]] [[DMG_MAGIC]]. \n [[SKILL_RECAST]] 하면 [[DASH]] 하기 전 위치로 [[BLINK]]. ([[RECAST_RETURN]]) \n \n",

          "E는 [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[TETHER]]. \n [[TETHER]] 발동 시 [[DMG_MAGIC]]와 [[ROOT]]. \n \n",

          "R은 마지막으로 사용한 Q, W, E 스킬을 모방. \n [[DMG_MAGIC]]가 강화되어 적용.",
        ],

        en: [
          "P grants [[INVISIBILITY]] when HP drops to 40% or below. \n Has a [[COOLDOWN]]. \n Creates a harmless [[CLONE]] along with [[INVISIBILITY]]. \n The [[CLONE]] can be controlled with Alt + right-click. \n \n",

          "Q fires a [[TARGETED]] [[PROJECTILE]]. \n Deals [[DMG_MAGIC]] and applies [[MARK]]. \n Hitting with another skill triggers [[MARK_CONSUME]], dealing bonus [[DMG_MAGIC]].",
          "[[ON_KILL]] with Q or the [[MARK]] effect grants \n [[MANA_RESTORE]] and [[CDR]]. \n \n",

          "W [[DASH]]es and deals [[AOE]] [[DMG_MAGIC]] around her. \n [[SKILL_RECAST]] to [[BLINK]] back to the position before the [[DASH]]. ([[RECAST_RETURN]]) \n \n",

          "E fires a [[PROJECTILE]]. \n Deals [[DMG_MAGIC]] and applies [[TETHER]]. \n When [[TETHER]] triggers, deals [[DMG_MAGIC]] and [[ROOT]]. \n \n",

          "R mimics the last cast Q, W, or E skill. \n Applies with enhanced [[DMG_MAGIC]].",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]] 안됨. \n 정확히는 W [[DASH]] 도중에 [[SPELL_FLASH]] 사용은 가능하지만, \n W의 거리가 늘어나는 [[W_FLASH]]은 불가능. \n [[SPELL_FLASH]] W를 해야 함.",
        "Q는 미니언에게 [[LEVEL_SCALE]] 비례 추가 피해.",
      ],
        en: [
          "[[W_FLASH]] not possible. \n To be precise, [[SPELL_FLASH]] can be used during W's [[DASH]], \n but [[W_FLASH]] to extend W's distance is not possible. \n You must [[SPELL_FLASH]] then W.",
          "Q deals bonus damage to minions (based on [[LEVEL_SCALE]]).",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 45,
    11: 35,
    16: 25,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 game_character_passivetooltip_leblanc(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.17: W·모방 W AP 90%)로 채움(CDragon 게임 데이터 leblanc.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "르블랑의 체력이 40% 아래로 내려가면 1초 동안 [[INVISIBILITY]] 상태가 되며 8초 동안 무해한 [[CLONE]]을 생성합니다. \n 르블랑은 'Alt' 우클릭 키로 [[CLONE]]을 움직일 수 있습니다. \n \n 60초의 [[COOLDOWN]].",
      en: "When LeBlanc's HP drops below 40%, she enters [[INVISIBILITY]] for 1 second and creates a harmless [[CLONE]] for 8 seconds. \n LeBlanc can move the [[CLONE]] with 'Alt' + right-click. \n \n 60 second [[COOLDOWN]].",
    },
    Q: {
      ko: "르블랑이 적에게 인장을 날려 65/90/115/140/165(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 3.5초 동안 [[MARK]]을 남깁니다. \n \n [[MARK]]이 남은 적을 스킬로 공격하면 인장이 발동하며 65/90/115/140/165(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. ([[MARK_CONSUME]]) \n \n 인장이 명중하거나 발동하여 대상 [[ON_KILL]] 소모한 마나의 100%를 돌려받고, ([[MANA_RESTORE]]) \n 이 스킬의 남은 재사용 대기시간이 30% 감소합니다. ([[CDR]]) \n \n 인장은 미니언에게 명중 시 10~146([[LEVEL_SCALE]] 비례)의 추가 피해를 입힙니다. \n \n 6초의 [[COOLDOWN]].",
      en: "LeBlanc flings a sigil at an enemy, dealing 65/90/115/140/165 (+40% [[AP_SCALE]]) [[DMG_MAGIC]] and leaving a [[MARK]] for 3.5 seconds. \n \n Damaging the [[MARK]]ed enemy with a skill detonates the sigil, dealing 65/90/115/140/165 (+40% [[AP_SCALE]]) [[DMG_MAGIC]]. ([[MARK_CONSUME]]) \n \n If the sigil's hit or detonation gets an [[ON_KILL]] on the target, LeBlanc refunds 100% of the mana spent, ([[MANA_RESTORE]]) \n and this skill's remaining cooldown is reduced by 30%. ([[CDR]]) \n \n The sigil deals 10~146 (based on [[LEVEL_SCALE]]) bonus damage to minions. \n \n 6 second [[COOLDOWN]].",
    },
    W: {
      ko: "르블랑이 [[DASH]]한 후 주변 적에게 75/115/155/195/235(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 돌진 후 4초 동안 [[SKILL_RECAST]]할 수 있습니다. \n \n [[SKILL_RECAST]] 시: 르블랑이 처음 위치로 돌아갑니다. ([[RECAST_RETURN]]) \n \n 15/13.75/12.5/11.25/10초의 [[COOLDOWN]].",
      en: "LeBlanc [[DASH]]es, then deals 75/115/155/195/235 (+90% [[AP_SCALE]]) [[DMG_MAGIC]] to nearby enemies. \n She can [[SKILL_RECAST]] for 4 seconds after the dash. \n \n On [[SKILL_RECAST]]: LeBlanc returns to her starting position. ([[RECAST_RETURN]]) \n \n 15/13.75/12.5/11.25/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "르블랑이 처음 적중한 적을 옭아매는 사슬을 던져([[TETHER]]) 50/70/90/110/130(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 주고 [[TRUE_SIGHT]]를 얻습니다. \n \n 대상이 1.5초간 사슬에 묶여 있으면 대상을 1.5초 동안 [[ROOT]]하고, \n 추가로 80/120/160/200/240(+85% [[AP_SCALE]])의 [[DMG_MAGIC]]를 줍니다. \n \n 14/13.25/12.5/11.75/11초의 [[COOLDOWN]].",
      en: "LeBlanc throws a chain that shackles the first enemy hit ([[TETHER]]), dealing 50/70/90/110/130 (+40% [[AP_SCALE]]) [[DMG_MAGIC]] and granting [[TRUE_SIGHT]]. \n \n If the target remains chained for 1.5 seconds, they are [[ROOT]]ed for 1.5 seconds, \n and take an additional 80/120/160/200/240 (+85% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 14/13.25/12.5/11.75/11 second [[COOLDOWN]].",
    },
    R: {
      ko: "르블랑이 가장 최근에 사용한 스킬을 모방하여 다시 사용합니다. 모방한 스킬의 피해량이 증가합니다. ([[EFFECT_UP]]) \n \n Q \n 70/150/230(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 발동하면 140/300/460(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n W \n 150/315/480(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n E \n 70/150/230(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n [[ROOT]]할 때 140/300/460(+85% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "LeBlanc mimics her most recently cast skill and casts it again. The mimicked skill deals increased damage. ([[EFFECT_UP]]) \n \n Q \n Deals 70/150/230 (+40% [[AP_SCALE]]) [[DMG_MAGIC]], \n and 140/300/460 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] when detonated. \n \n W \n Deals 150/315/480 (+90% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n E \n Deals 70/150/230 (+40% [[AP_SCALE]]) [[DMG_MAGIC]], \n and 140/300/460 (+85% [[AP_SCALE]]) [[DMG_MAGIC]] on [[ROOT]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default leblanc;
