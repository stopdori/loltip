import type { ChampData } from "../interactions/types";

const locke: ChampData = {
  id: "locke",
  skills: {
    P: ["ON_HIT"],
    Q: ["Q_FLASH", "SLOW", "DEBUFF_STACK"],
    W: ["AS_UP", "MS_UP", "SEPARATOR", "HEAL"],

    E: { phases: [
      { label: { ko: "E 순간이동", en: "E Blink" }, tags: ["BLINK", "WALL_HOP", "SEPARATOR", "CC_BUFFER", "SEPARATOR", "ON_TAKEDOWN", "CDR_RESET"] },
      { label: { ko: "E 돌진", en: "E Dash" }, tags: ["E_FLASH", "AA_RESET", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

    R: ["SLOW", "MARK", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE", "DURATION_RESET"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ON_HIT", "DMG_MAGIC"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "SLOW", "DEBUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "PER_STACK", "EFFECT_UP", "SEPARATOR", "SKILL_RECAST", "X2"] },
      { label: { ko: "Q 대못 스택", en: "Q Spike Stack" }, tags: ["STACK_CONSUME", "DMG_MAGIC"] },
    ] },

    W: ["AS_UP", "MS_UP", "SEPARATOR", "RECAST_CANCEL", "HEAL"],

    E: { phases: [
      { label: { ko: "E1 블링크", en: "E1 Blink" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SEPARATOR", "BLINK", "WALL_HOP", "SEPARATOR", "CC_BUFFER", "SEPARATOR", "ON_TAKEDOWN", "CDR_RESET"] },
      { label: { ko: "E2 평타 돌진 공격", en: "E2 BA Dash Attack" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TIMING_CAST", "ZONE", "ST_DELAYED", "DETONATE"] },
      { label: { ko: "R 폭발", en: "R Burst" }, tags: ["DMG_MAGIC", "SLOW", "MARK", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE", "DURATION_RESET"] },
      { label: { ko: "R 유물 획득", en: "R Relic Pickup" }, tags: ["EXECUTE", "EFFECT_UP", "SEPARATOR", "CDR", "R"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[ON_HIT]] [[DMG_MAGIC]]. \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_MAGIC]]. \n 체력 30%일 때 피해량 최대. \n \n",
          
          "Q는 [[PIERCE]] [[PROJECTILE]] 발사. (최대 3번). \n [[DMG_MAGIC]]와 [[SLOW]], 대못 ([[DEBUFF_STACK]]). \n [[SLOW]]와 [[DEBUFF_STACK]]은 적중할수록 효과 증가. \n 던지지 않은 Q의 갯수만큼 [[MANA_RESTORE]], [[CDR]].", 
          "[[BA]], E1, E2를 맞히면 [[STACK_CONSUME]]하여 [[DMG_MAGIC]]. \n 스택이 2개일 때 20%, \n 3개일 때 40% [[DMG_MAGIC]] 추가. \n \n",

          "W는 지속시간 동안 [[AS_UP]]와 [[MS_UP]]. \n 처음 2초 동안 [[EMPOWERED]]된 [[MS_UP]].", 
          "W의 지속시간 동안 로크는 \n [[SELF_CURRENT_HP_SCALE]] 비례 [[DOT]] [[DMG_TRUE]]를 받음. \n 지속시간 종료 시 [[SELF_MISSING_HP_SCALE]] 비례 [[HEAL]]. \n \n", 

          "E1은 [[BLINK]]하여 주변 [[AOE]] [[DMG_MAGIC]]. \n 그리고 다음 [[BA]]를 [[EMPOWERED]]. (E2)", 
          "E2는 [[BA]] 공격 시 [[DASH]] [[AOE]] [[DMG_MAGIC]]. \n [[ON_TAKEDOWN]] E1 [[CDR_RESET]].", 
          "Q의 [[DEBUFF_STACK]]이 있다면 [[STACK_CONSUME]]하여 [[DMG_MAGIC]].", 
          "[[CC_BUFFER]]로 일부 CC 무시 가능. \n \n",

          "R은 [[AOE]] [[DMG_MAGIC]]와 [[SLOW]], [[MARK]]. \n [[MARK]]은 대상의 체력이 10%% 이하가 되면 [[EXECUTE]]. \n [[SKILL_LEVEL_SCALE]]에 비례하여 12%까지 증가. \n [[EXECUTE]] 시 [[MARK]]에 걸린 다른 대상들의 [[DURATION_RESET]].", 
          "R의 [[EXECUTE]]이 하나라도 되고 R의 지속시간이 종료되면 \n 바닥에 유물([[DROP]]) 생성. \n 획득 시 [[CDR]]과 \n [[EXECUTE]] 대상당 [[EXECUTE]] 기준치 0.5% 영구 증가. ([[STACKING]]) \n [[DROP]]은 로크의 R [[COOLDOWN]]이 돌아오면 사라짐.",
        ],

        en: [
          "P is [[ON_HIT]] [[DMG_MAGIC]]. \n [[DMG_MAGIC]] based on [[TARGET_MISSING_HP_SCALE]]. \n Damage peaks when the target is at 30% health. \n \n",

          "Q fires a [[PIERCE]] [[PROJECTILE]]. (up to 3 times). \n Deals [[DMG_MAGIC]] and [[SLOW]], and applies spikes ([[DEBUFF_STACK]]). \n [[SLOW]] and [[DEBUFF_STACK]] grow stronger with each hit. \n Grants [[MANA_RESTORE]] and [[CDR]] for each Q not thrown.",
          "Hitting with [[BA]], E1, or E2 triggers [[STACK_CONSUME]], dealing [[DMG_MAGIC]]. \n At 2 stacks, 20%, \n at 3 stacks, 40% bonus [[DMG_MAGIC]]. \n \n",

          "W grants [[AS_UP]] and [[MS_UP]] for its duration. \n [[EMPOWERED]] [[MS_UP]] for the first 2 seconds.",
          "During W, Locke \n takes [[DOT]] [[DMG_TRUE]] based on [[SELF_CURRENT_HP_SCALE]]. \n When it ends, [[HEAL]] based on [[SELF_MISSING_HP_SCALE]]. \n \n",

          "E1 [[BLINK]]s, dealing [[AOE]] [[DMG_MAGIC]] nearby. \n Then the next [[BA]] is [[EMPOWERED]]. (E2)",
          "E2 [[DASH]]es on [[BA]] attack, dealing [[AOE]] [[DMG_MAGIC]]. \n [[ON_TAKEDOWN]], E1 gets [[CDR_RESET]].",
          "If Q's [[DEBUFF_STACK]] is present, [[STACK_CONSUME]] to deal [[DMG_MAGIC]].",
          "[[CC_BUFFER]] allows ignoring some CC. \n \n",

          "R deals [[AOE]] [[DMG_MAGIC]], [[SLOW]], and [[MARK]]. \n [[MARK]] triggers [[EXECUTE]] when the target's health drops to 10% or below. \n On [[EXECUTE]], other [[MARK]]ed targets get [[DURATION_RESET]].",
          "If at least one R [[EXECUTE]] occurs and R's duration ends, \n a relic ([[DROP]]) appears on the ground. \n Picking it up grants [[CDR]] and \n permanently raises the [[EXECUTE]] threshold by 0.5% per [[EXECUTE]]d target. ([[STACKING]]) \n The [[DROP]] disappears when Locke's R [[COOLDOWN]] comes back.",
        ]

      },

      note2: {
        ko: [
          "W는 CC에 걸렸을 때 사용할 수 없음. \n 단, W [[RECAST_CANCEL]]는 CC에 맞아도 사용할 수 있음.",
          "E1 스킬은 2단계로 나뉨 준비/순간이동. \n 준비 단계에서 로크가 맞은 CC는 유효 하지만 \n [[BLINK]] 단계가 발동되어 이동하는 것. \n [[BLINK]] 단계에는 CC 저항력 없음. \n 순간이동했을 때 CC의 지속시간이 남아있다면 CC 효과 유효.",
          "E2의 [[DASH]] 공격은 와드, 수정초, 솔방울 탄, 꿀열매에도 가능.", 
          "상호작용 실험 \n 1. R의 [[MARK]] 대상은 파이크 R의 [[EXECUTE]] 기준치를 높일까? \n 결과 - 반영되지 않음. \n 2. R의 [[MARK]] 대상은 킨드레드 R의 [[INVULNERABLE]]에 [[EXECUTE]] 될까? \n 결과 - 불가."

        ],
        en: [
          "W cannot be cast while affected by CC. \n However, W [[RECAST_CANCEL]] can be used even while hit by CC.",
          "E1 is split into 2 phases: windup / teleport. \n CC that hits Locke during the windup phase is still registered, \n but the [[BLINK]] phase still triggers and moves him. \n The [[BLINK]] phase has no CC resistance. \n If the CC's duration remains after teleporting, the CC still applies.",
          "E2's [[DASH]] attack also works on wards, crystal totems, pinecone shots, and honeyfruit.",
          "Interaction tests \n 1. Does a target under R's [[MARK]] raise Pyke R's [[EXECUTE]] threshold? \n Result - Not applied. \n 2. Can a target under R's [[MARK]] be [[EXECUTE]]d through Kindred R's [[INVULNERABLE]]? \n Result - No.",
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_lockepassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.21)로 채움(CDragon 게임 데이터 locke.bin.json과 대조).
  skillTooltip: {
    P: {
      ko: "[[BA]] 공격 시 [[ON_HIT]] 5~40([[LEVEL_SCALE]] 비례)(+10% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n 피해량은 [[TARGET_MISSING_HP_SCALE]]에 비례해 10~80([[LEVEL_SCALE]] 비례)(+20% [[AP_SCALE]])의 [[DMG_MAGIC]]까지 증가합니다.",
      en: "On [[BA]] attack, deals an additional 5~40 (based on [[LEVEL_SCALE]]) (+10% [[AP_SCALE]]) [[ON_HIT]] [[DMG_MAGIC]]. \n The damage increases up to 10~80 (based on [[LEVEL_SCALE]]) (+20% [[AP_SCALE]]) [[DMG_MAGIC]] based on [[TARGET_MISSING_HP_SCALE]].",
    },
    Q: {
      ko: "로크가 영혼의 대못을 여러 개 준비하고 던져 적중한 적에게 40/48/56/64/72(+20% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 [[DEBUFF_STACK]]을 남깁니다. \n 대못에 맞은 적은 1/1/2초 동안 25/25/60% [[SLOW]]됩니다. 이 효과는 적중한 대못 수에 따라 중첩됩니다. \n \n 해당 적을 [[BA]] 공격 또는 E로 공격하면 영혼의 대못을 소모해([[STACK_CONSUME]]) 중첩당 18/26/34/42/50(+25/27.5/30/32.5/35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 피해량은 대못 2개일 때 20%, 3개일 때 40% 증가합니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Locke readies several soul spikes and throws them, dealing 40/48/56/64/72 (+20% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies hit and leaving [[DEBUFF_STACK]]. \n Enemies hit by spikes are [[SLOW]]ed by 25/25/60% for 1/1/2 seconds. This effect stacks with the number of spikes hit. \n \n Attacking that enemy with a [[BA]] attack or E consumes the soul spikes ([[STACK_CONSUME]]), dealing 18/26/34/42/50 (+25/27.5/30/32.5/35% [[AP_SCALE]]) [[DMG_MAGIC]] per stack. \n \n The damage increases by 20% at 2 spikes and 40% at 3 spikes. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "로크가 자신의 영혼을 불태워 [[AS_SCALE]]가 40~70%([[LEVEL_SCALE]] 비례), [[MS_SCALE]]가 40%(+[[AP_SCALE]] 100당 2%) 증가했다가 1초에 걸쳐 원래대로 돌아옵니다. \n \n 6초 동안 매초 [[SELF_CURRENT_HP_SCALE]]의 2%에 해당하는 [[DMG_TRUE]]를 입지만, \n 마지막으로 입은 피해량 40/60/80/100/120(+100% [[AP_SCALE]])만큼 체력을 [[HEAL]]하고, \n [[SELF_MISSING_HP_SCALE]] 및 경과 시간에 비례해 20~200([[LEVEL_SCALE]] 비례)(+20% [[AP_SCALE]])의 체력을 추가로 [[HEAL]]합니다. \n 최대 100~500([[LEVEL_SCALE]] 비례)(+60% [[AP_SCALE]])만큼 [[HEAL]]합니다. \n \n W [[RECAST_CANCEL]]로 더 빨리 종료할 수 있습니다. \n \n 18/17/16/15/14초의 [[COOLDOWN]].",
      en: "Locke burns his soul, gaining 40~70% (based on [[LEVEL_SCALE]]) [[AS_SCALE]] and 40% (+2% per 100 [[AP_SCALE]]) [[MS_SCALE]], which decays back to normal over 1 second. \n \n For 6 seconds, he takes [[DMG_TRUE]] equal to 2% of [[SELF_CURRENT_HP_SCALE]] every second, \n but [[HEAL]]s for the last damage taken, 40/60/80/100/120 (+100% [[AP_SCALE]]), \n and [[HEAL]]s an additional 20~200 (based on [[LEVEL_SCALE]]) (+20% [[AP_SCALE]]) health based on [[SELF_MISSING_HP_SCALE]] and elapsed time. \n [[HEAL]]s up to 100~500 (based on [[LEVEL_SCALE]]) (+60% [[AP_SCALE]]). \n \n W [[RECAST_CANCEL]] can end it early. \n \n 18/17/16/15/14 second [[COOLDOWN]].",
    },
    E: {
      ko: "로크가 지정한 위치로 [[BLINK]]하며 주변 적에게 40/55/70/85/100(+50% [[AP_SCALE]])의 [[AOE]] [[DMG_MAGIC]]를 입힙니다. \n \n 다음 [[BA]] 공격 시 대상에게 [[DASH]]하며, ([[EMPOWERED]]) \n 경로에 있는 모든 적에게 40/60/80/100/120(+40% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 적중할 때마다 영혼의 대못(Q) ([[DEBUFF_STACK]])을 소모합니다. ([[STACK_CONSUME]]) \n \n 로크가 [[ON_TAKEDOWN]] 시 이 스킬의 재사용 대기시간이 초기화됩니다. ([[CDR_RESET]]) \n \n 10초의 [[COOLDOWN]].",
      en: "Locke [[BLINK]]s to the target location, dealing 40/55/70/85/100 (+50% [[AP_SCALE]]) [[AOE]] [[DMG_MAGIC]] to nearby enemies. \n \n His next [[BA]] attack [[DASH]]es to the target, ([[EMPOWERED]]) \n dealing 40/60/80/100/120 (+40% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemies in the path. \n Each hit consumes soul spikes (Q) ([[DEBUFF_STACK]]). ([[STACK_CONSUME]]) \n \n When Locke scores a takedown ([[ON_TAKEDOWN]]), this skill's cooldown is reset. ([[CDR_RESET]]) \n \n 10 second [[COOLDOWN]].",
    },
    R: {
      ko: "로크가 적을 구속하는 유물을 지정한 위치로 던져 범위 내 적에게 150/225/300(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 99% [[SLOW]]시킵니다. 둔화 효과는 2초에 걸쳐 사라집니다. \n 유물에 적중한 적에게 5초 동안 [[MARK]]이 남습니다. \n [[MARK]]이 남은 적 [[TARGET_MAXHP_SCALE]]의 10/11/12% 아래로 떨어지면 봉인하여 [[EXECUTE]] 시키고, \n 영향을 받은 다른 챔피언에게 남은 [[MARK]]의 지속시간이 초기화됩니다. ([[DURATION_RESET]]) \n \n 지속시간이 끝난 후 챔피언이 1명 이상 봉인되었다면 유물이 땅에 떨어집니다. ([[DROP]]) \n 로크가 유물을 획득하면 봉인된 챔피언 수에 비례해 [[EXECUTE]] 체력 기준치가 영구적으로 0.5% 증가하고, ([[STACKING]]) \n \n 전체 재사용 대기시간의 20%를 돌려받습니다. ([[CDR]]) \n [[DROP]]은 로크의 R의 [[COOLDOWN]]이 돌아오면 사라집니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Locke throws a binding relic to the target location, dealing 150/225/300 (+60% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies in the area and [[SLOW]]ing them by 99%, decaying over 2 seconds. \n Enemies hit by the relic are left with a [[MARK]] for 5 seconds. \n If a [[MARK]]ed enemy falls below 10/11/12% of [[TARGET_MAXHP_SCALE]], they are sealed and [[EXECUTE]]d, \n and the remaining [[MARK]] duration on other affected champions is reset. ([[DURATION_RESET]]) \n \n If at least 1 champion was sealed when the duration ends, the relic drops to the ground. ([[DROP]]) \n When Locke picks up the relic, the [[EXECUTE]] health threshold permanently increases by 0.5% per sealed champion, ([[STACKING]]) \n \n and he refunds 20% of the total cooldown. ([[CDR]]) \n The [[DROP]] disappears when Locke's R [[COOLDOWN]] comes back. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default locke;
