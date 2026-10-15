import type { ChampData } from "../interactions/types";

const ivern: ChampData = {
  id: "ivern",
  skills: {
    P: [],
    Q: ["ROOT", "SEPARATOR", "ST_CONDITIONAL", "DASH", "WALL_HOP"],
    W: ["W_FLASH"],
    E: { phases: [
      { label: { ko: "E 보호막", en: "E Shield" }, tags: ["E_FLASH", "SHIELD"] },
      { label: { ko: "E 폭발 피해", en: "E Burst Damage" }, tags: ["SLOW", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"] },
    ] },
    R: ["SUMMON", "ALLY_TP_OK", "SEPARATOR", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION"],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],

    Q: { phases: [
      { label: { ko: "Q1", en: "Q1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SKILL_RECAST", "SEPARATOR", "ROOT"] },
      { label: { ko: "Q2 재시전 돌진", en: "Q2 Recast Dash" }, tags: ["DASH", "WALL_HOP"] },
      { label: { ko: "Q2 평타 돌진", en: "Q2 Attack Dash" }, tags: ["ST_CONDITIONAL", "DASH", "WALL_HOP"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "BUFF"] },
      { label: { ko: "W 패시브 온힛 버프", en: "W Passive On-hit Buff" }, tags: ["DMG_MAGIC", "ON_HIT"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["TIMING_CAST", "ZONE", "BUSH", "VISION", "RECHARGE"] },
    ] },


    E: { phases: [
      { label: { ko: "E 보호막", en: "E Shield" }, tags: ["TARGETED", "SHIELD"] },
      { label: { ko: "E 폭발", en: "E Burst" }, tags: ["ST_DELAYED", "DETONATE", "DMG_MAGIC", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"] },
    ] },

    R:    { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "SUMMON", "SEPARATOR", "SKILL_RECAST", "SKILL_STEERABLE"] },
      { label: { ko: "R 데이지", en: "R Daisy" }, tags: ["DMG_PHYSICAL", "GHOSTING", "MARK"] },
      { label: { ko: "R 데이지 3타", en: "R Daisy 3rd Hit" }, tags: ["MARK_CONSUME", "X3", "SEPARATOR", "DMG_MAGIC", "PIERCE", "PROJECTILE", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "아이번은 정글몹과 동맹. \n 정글몹에 우클릭으로 [[BUSH]]을 생성. \n 이때 체력과 마나를 소모. \n 주변에 띠가 생기고 띠가 다 차면 다시 우클릭으로 수확. \n 강타를 쓰면 즉시 수확. \n \n",

          "Q는 [[PROJECTILE]]를 발사해서 [[DMG_MAGIC]]와 [[ROOT]]", 
          "Q2를 사용하면 아이번이 대상과 겹쳐질정도로 [[DASH]]. \n 우클릭을 하면 [[BA]] 사거리까지 [[DASH]]. \n 아군도 우클릭 [[DASH]] 가능. \n \n",

          "W의 [[PASSIVE_BONUS]]는 [[BUSH]]에 들어갔을 때 [[BUFF]] 생성. \n [[BUFF]]는 [[ON_HIT]] [[DMG_MAGIC]]. \n 아이번이 근처에 있을 때 [[BUSH]] 안에 아군이 있다면  \n 아군에게도 [[BUFF]] 적용.",
          "W는 [[BUSH]]을 만들고 (지속시간 8초) \n 동그란 원형 [[AOE]]만큼 [[VISION]]가 있음. \n [[BUSH]] 안에 시야가 있다면 45초까지 시간 연장. \n \n",

          "E는 [[SHIELD]]. \n 2초뒤 [[DETONATE]]하여 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]]. \n 아무도 적중하지 않으면 [[SHIELD]] 다시 적용. \n 아무도의 기준은 적 챔피언, 에픽몬스터. \n \n",

          "R은 데이지 [[SUMMON]]. \n 데이지는 R로 조종가능. \n 데이지가 같은 대상을 3번 때리면 \n [[PIERCE]] [[PROJECTILE]] [[DMG_MAGIC]]와 [[AIRBORNE]]. \n 아이번이 [[BUSH]] 안에서 W의 [[ON_HIT]] [[BUFF]]를 받을 때 \n 데이지의 공격에 [[ON_HIT]] 적용.",
        ],

        en: ["Ivern is allied with jungle monsters. \n Right-click a jungle monster to create a [[BUSH]]. \n This costs health and mana. \n A ring appears around it; when it fills, right-click again to harvest. \n Using Smite harvests it instantly. \n \n",
          "Q fires a [[PROJECTILE]], dealing [[DMG_MAGIC]] and [[ROOT]].",
          "Using Q2 makes Ivern [[DASH]] until he nearly overlaps the target. \n Right-clicking makes him [[DASH]] to [[BA]] range. \n Allies can also right-click to [[DASH]]. \n \n",
          "W's [[PASSIVE_BONUS]] grants a [[BUFF]] upon entering a [[BUSH]]. \n The [[BUFF]] deals [[ON_HIT]] [[DMG_MAGIC]]. \n If allies are inside a [[BUSH]] while Ivern is nearby,  \n they also receive the [[BUFF]].",
          "W creates a [[BUSH]] (lasts 8 seconds) \n and grants [[VISION]] over a circular [[AOE]]. \n If there is vision inside the [[BUSH]], the duration extends up to 45 seconds. \n \n",
          "E grants a [[SHIELD]]. \n After 2 seconds, it [[DETONATE]]s, dealing [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n If no one is hit, the [[SHIELD]] is applied again. \n 'No one' means enemy champions and epic monsters. \n \n",
          "R [[SUMMON]]s Daisy. \n Daisy can be controlled with R. \n If Daisy hits the same target 3 times, \n she deals [[PIERCE]] [[PROJECTILE]] [[DMG_MAGIC]] and [[AIRBORNE]]. \n When Ivern has W's [[ON_HIT]] [[BUFF]] inside a [[BUSH]], \n Daisy's attacks also apply [[ON_HIT]]."
        ]

      },

      note2: {
        ko: [
        "[[Q_FLASH]] 안됨", 
        "Q는 정글몹에도 사용 가능. \n 에픽이 아닌 정글몹은 Q [[CDR]] 50%. \n Q1, Q2의 [[DASH]] [[WALL_HOP]]로 빠르게 이동.", 
        "W의 [[PASSIVE_BONUS]] [[BUFF]] 적용 [[AOE]]는 \n W의 사거리 만큼.", 
        "W를 일반 [[BUSH]]와 이어서 설치하면 \n 이어진 일반 [[BUSH]] 안에도 시야가 보임.", 
        "E의 [[DETONATE]] 피해는 정글몹에게도 피해를 줌.", 
        "R 데이지의 3타는 정글몹도 맞지만 피해는 들어가지 않음. \n 3타는 데이지 내부 쿨타임이 있음."
      ],
        en: ["[[Q_FLASH]] not possible.",
          "Q can also be used on jungle monsters. \n Non-epic jungle monsters grant 50% Q [[CDR]]. \n The Q1, Q2 [[DASH]] [[WALL_HOP]] lets you move quickly.",
          "The [[AOE]] of W's [[PASSIVE_BONUS]] [[BUFF]] \n equals W's range.",
          "Placing W connected to a regular [[BUSH]] \n grants vision inside the connected regular [[BUSH]] too.",
          "E's [[DETONATE]] damage also hits jungle monsters.",
          "Daisy's R 3rd hit also hits jungle monsters but deals no damage. \n The 3rd hit has an internal cooldown on Daisy."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 130,
    16: 120,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_ivernp_tooltip(인게임 원문)을 뼈대로 씀.
  // DDragon effectBurn/vars가 전부 비어 있어 수치는 공식 위키(V26.06~07)로 채움.
  // P 수풀 생성 비용은 위키가 기본 스탯 기준 고정값(94.5~0.14 등)으로만 표기해서
  // CDragon 게임 데이터(ivern.bin.json HealthCostPercent 15→0%, 마나 20→0%)의
  // 최대 체력/마나 비율로 적음.
  skillTooltip: {
    P: {
      ko: "아이번은 에픽 몬스터를 제외한 몬스터를 공격하지 않습니다. \n 대신 마우스 오른쪽 버튼으로 몬스터를 누르면 \n [[SELF_MAXHP_SCALE]]의 15~0%([[LEVEL_SCALE]] 비례)와 [[MANA_SCALE]]의 20~0%([[LEVEL_SCALE]] 비례)를 소모하여 자라나는 수풀을 만듭니다. \n \n 수풀: \n - 40~1초([[LEVEL_SCALE]] 비례)에 걸쳐 성장합니다. \n - 아이번은 완전히 성장한 수풀을 수확해 캠프를 해방하고 골드와 경험치를 얻을 수 있습니다. \n - 또한, 아이번은 강타를 수풀에 사용해 즉시 성장시켜 캠프를 해방하고 골드와 경험치를 얻을 수 있습니다.",
      en: "Ivern does not attack monsters other than epic monsters. \n Instead, right-clicking a monster \n costs 15~0% (based on [[LEVEL_SCALE]]) of [[SELF_MAXHP_SCALE]] and 20~0% (based on [[LEVEL_SCALE]]) of [[MANA_SCALE]] to create a growing grove. \n \n Grove: \n - Grows over 40~1 seconds (based on [[LEVEL_SCALE]]). \n - Ivern can harvest a fully grown grove to free the camp and gain gold and experience. \n - Ivern can also use Smite on a grove to grow it instantly, freeing the camp and gaining gold and experience.",
    },
    Q: {
      ko: "아이번이 덩굴뿌리를 던져 80/125/170/215/260(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 처음으로 적중한 적을 1.6/1.7/1.8/1.9/2초 동안 [[ROOT]]합니다. \n [[ROOT]]된 적을 공격한 아군은 공격 사거리 안으로 [[DASH]]합니다. \n \n [[SKILL_RECAST]] 시: 아이번이 [[ROOT]]된 적에게 바로 [[DASH]]합니다. \n \n 에픽 몬스터를 제외한 몬스터에게 적중하면 덩굴뿌리 재사용 대기시간이 50% 감소합니다. ([[CDR]]) \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Ivern throws a vine, dealing 80/125/170/215/260 (+70% [[AP_SCALE]]) [[DMG_MAGIC]] and [[ROOT]]ing the first enemy hit for 1.6/1.7/1.8/1.9/2 seconds. \n Allies who attack the [[ROOT]]ed enemy [[DASH]] into attack range. \n \n [[SKILL_RECAST]]: Ivern [[DASH]]es directly to the [[ROOT]]ed enemy. \n \n Hitting a non-epic monster reduces Rootcaller's cooldown by 50%. ([[CDR]]) \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 아이번이 [[BUSH]] 속에 있거나 [[BUSH]]을 떠난 후 3초 안에 [[BA]] 공격 시 20/27.5/35/42.5/50(+20% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n 주변의 아군이 1.5초 동안 이 효과를 얻고 10/15/20/25/30(+10% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 사용 시: 아이번이 8초 동안 유지되는 [[BUSH]]을 심습니다. \n [[BUSH]]은 아이번의 팀이 [[BUSH]] 내에서 [[VISION]]을 잃을 때까지 또는 최대 45초 동안 유지됩니다. \n 최대 3회까지 [[RECHARGE]]할 수 있습니다. \n \n 20초의 [[RECHARGE]] [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: While in a [[BUSH]] or for 3 seconds after leaving a [[BUSH]], Ivern's [[BA]]s deal an additional 20/27.5/35/42.5/50 (+20% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Nearby allies gain this effect for 1.5 seconds, dealing 10/15/20/25/30 (+10% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Active: Ivern plants a [[BUSH]] that lasts 8 seconds. \n The [[BUSH]] lasts until Ivern's team loses [[VISION]] inside the [[BUSH]], or for up to 45 seconds. \n Can hold up to 3 [[RECHARGE]] charges. \n \n 20 second [[RECHARGE]] [[COOLDOWN]].",
    },
    E: {
      ko: "아이번이 아군이나 데이지에게 75/115/155/195/235(+50% [[AP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 씌웁니다. \n \n [[SHIELD]]는 2초 후 [[DETONATE]]하며 적에게 70/90/110/130/150(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 2초 동안 40/45/50/55/60% [[SLOW]]시킵니다. \n \n [[SHIELD]]가 유지되는 동안 보호의 씨앗이 [[DETONATE]]했지만 적중한 적이 없으면, \n 해당 아군이 2초 동안 75/115/155/195/235(+50% [[AP_SCALE]])의 피해를 흡수하는 추가 [[SHIELD]]를 얻습니다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Ivern places a [[SHIELD]] on an ally or Daisy that absorbs 75/115/155/195/235 (+50% [[AP_SCALE]]) damage. \n \n After 2 seconds, the [[SHIELD]] [[DETONATE]]s, dealing 70/90/110/130/150 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies and [[SLOW]]ing them by 40/45/50/55/60% for 2 seconds. \n \n If the Triggerseed [[DETONATE]]s while the [[SHIELD]] is active but hits no enemies, \n that ally gains an additional [[SHIELD]] that absorbs 75/115/155/195/235 (+50% [[AP_SCALE]]) damage for 2 seconds. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    R: {
      ko: "아이번이 파수꾼 친구 데이지를 [[SUMMON]]해 45초 동안 함께 전투합니다. \n \n 데이지, 후려쳐!: 데이지가 같은 챔피언이나 에픽 몬스터를 연속으로 세 번 공격하면 충격파를 일으켜, \n 적중한 모든 적에게 90/140/190(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 1초 동안 [[AIRBORNE]]시킵니다. \n 이 효과는 3초에 한 번씩만 발생할 수 있습니다. \n \n [[SKILL_RECAST]] 시: 데이지에게 공격 또는 이동을 지시합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]]. \n \n 데이지 정보: \n - 지정한 방향으로 350 거리에 [[SUMMON]]됩니다. \n - 체력 1000~4400([[LEVEL_SCALE]] 비례)(+50% [[AP_SCALE]]) \n - 공격력 70/100/130(+15% [[AP_SCALE]]) \n - 공격 속도 0.975/1.088/1.2 \n - 방어력·마법 저항력 30~90([[LEVEL_SCALE]] 비례) \n - 이동 속도 430, 사거리 175, 초당 체력 재생 2.5 \n - 항상 [[GHOSTING]] 상태입니다. \n - [[SUMMON]] 직후 5초 동안 [[MS_SCALE]] 40% 증가. \n - 광역 피해와 에픽 몬스터에게 [[DMG_REDUCE]] 25%. \n - 데이지의 공격에는 아이번의 [[ON_HIT]] 효과와 수풀 가꾸기 추가 피해가 적용됩니다.",
      en: "Ivern [[SUMMON]]s his Sentinel friend Daisy to fight alongside him for 45 seconds. \n \n Daisy Smash!: If Daisy attacks the same champion or epic monster three times in a row, she creates a shockwave, \n dealing 90/140/190 (+50% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemies hit and knocking them [[AIRBORNE]] for 1 second. \n This effect can only occur once every 3 seconds. \n \n [[SKILL_RECAST]]: Command Daisy to attack or move. \n \n {{ultCooldown}} second [[COOLDOWN]]. \n \n Daisy info: \n - [[SUMMON]]ed 350 units away in the chosen direction. \n - Health 1000~4400 (based on [[LEVEL_SCALE]]) (+50% [[AP_SCALE]]) \n - Attack damage 70/100/130 (+15% [[AP_SCALE]]) \n - Attack speed 0.975/1.088/1.2 \n - Armor and magic resist 30~90 (based on [[LEVEL_SCALE]]) \n - Move speed 430, range 175, health regen 2.5 per second \n - Always [[GHOSTING]]. \n - [[MS_SCALE]] increased by 40% for 5 seconds right after being [[SUMMON]]ed. \n - 25% [[DMG_REDUCE]] against area damage and epic monsters. \n - Daisy's attacks apply Ivern's [[ON_HIT]] effects and Brushmaker's bonus damage.",
    },
  },

};

export default ivern;
