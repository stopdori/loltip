import type { ChampData } from "../interactions/types";

const lucian: ChampData = {
  id: "lucian",
  skills: {
    P: { phases: [
      { label: { ko: "P 빛의 사수", en: "P Lightslinger" }, tags: ["ON_HIT"] },
      { label: { ko: "P 경계", en: "P Vigilance" }, tags: ["ON_HIT"] },
    ] },
    
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "REVEALED", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
    E: ["DASH", "WALL_HOP", "SEPARATOR", "CDR"],
    R: ["R_FLASH"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["VISION", "REVEALED"],
    E: [],
    R: ["HIT_INDICATOR"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 빛의 사수", en: "P Lightslinger" }, tags: ["BUFF", "SEPARATOR", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT"] },
      { label: { ko: "P 경계", en: "P Vigilance" }, tags: ["BUFF_STACK", "X2", "SEPARATOR", "DMG_MAGIC", "PROJECTILE", "ON_HIT"] },
    ] },

    Q: ["DMG_PHYSICAL", "TARGETED", "TIMING_CAST", "PIERCE", "BEAM"],

    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DETONATE", "MARK"] },
      { label: { ko: "W 표식 발동", en: "W Mark Trigger" }, tags: ["MS_UP"] },
      { label: { ko: "W 아군에 의한 표식 발동", en: "W Mark Triggered by Ally" }, tags: ["MS_UP", "SEPARATOR", "P", "BUFF_STACK", "X2"] },
    ] },
    
    E: ["DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "CDR", "SEPARATOR", "ON_CHAMP_HIT", "CDR", "X2"],

    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "PROJECTILE", "CANCELLABLE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 빛의 사수 / 경계", 
          "빛의 사수는 \n 스킬을 사용하면 [[BUFF]]. \n [[BUFF]]는 다음 [[BA]] [[EMPOWERED]] \n [[BA]] 공격 시 한대 추가 공격. \n 추가 공격은 50~60% [[DMG_PHYSICAL]].", 
          "경계는 \n 아군이 루시안에게 [[HEAL]]또는 [[SHIELD]]를 걸어주거나. \n 적 챔피언이 [[IMMOBILIZING]]가 되면 [[BUFF_STACK]] [[X2]]. (최대 4스택) \n [[BA]] 공격 시 [[STACK_CONSUME]]하여 [[DMG_MAGIC]]. \n 빛의 사수공격은 2개씩 소모. \n \n",

          "Q는 대상을 지정. \n 루시안과 대상 뒤쪽까지 [[PIERCE]] [[BEAM]] [[DMG_PHYSICAL]] 발사. \n \n",

          "W는 적중하거나 끝에 도달하면 [[DETONATE]]하는 [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[REVEALED]], [[MARK]].", 
          "[[MARK]]은 루시안이나 아군이 피해를 입히면 루시안의 [[MS_UP]]. \n 아군으로 발동 시 P의 경계 [[BUFF_STACK]] 획득. \n \n",

          "E는 [[DASH]]. \n P의 빛의 사수 발동 시 [[CDR]] 1초. \n 챔피언 대상이면 [[CDR]] 2초. \n \n",

          "R은 전방에 탄환 세례 [[PROJECTILE]] 발사. \n 탄환당 [[DMG_PHYSICAL]]. \n [[CRIT]] 확률과 [[CRIT]] 피해량에 비례하여 탄환 수 증가. \n R 시전 중에 E로 [[DASH]] 가능.",
        ],

        en: [
          "P is Lightslinger / Vigilance",
          "Lightslinger: \n using a skill grants [[BUFF]]. \n [[BUFF]] makes the next [[BA]] [[EMPOWERED]]. \n On [[BA]] attack, fires one extra shot. \n The extra shot deals 50~60% [[DMG_PHYSICAL]].",
          "Vigilance: \n when an ally applies [[HEAL]] or [[SHIELD]] to Lucian, \n or an enemy champion becomes [[IMMOBILIZING]], gain [[BUFF_STACK]] [[X2]]. (max 4 stacks) \n On [[BA]] attack, [[STACK_CONSUME]] to deal [[DMG_MAGIC]]. \n Lightslinger shots consume 2 at a time. \n \n",

          "Q targets a unit. \n Fires a [[PIERCE]] [[BEAM]] of [[DMG_PHYSICAL]] from Lucian through the target and beyond. \n \n",

          "W fires a [[PROJECTILE]] that [[DETONATE]]s on hit or at max range. \n Deals [[DMG_MAGIC]] and applies [[REVEALED]] and [[MARK]].",
          "When Lucian or an ally damages a target with the [[MARK]], Lucian gains [[MS_UP]]. \n If an ally triggers it, Lucian gains P's Vigilance [[BUFF_STACK]]. \n \n",

          "E is a [[DASH]]. \n Each P Lightslinger proc grants 1s [[CDR]]. \n 2s [[CDR]] against champions. \n \n",

          "R fires a barrage of bullet [[PROJECTILE]]s forward. \n [[DMG_PHYSICAL]] per bullet. \n The bullet count increases with [[CRIT]] chance and [[CRIT]] damage. \n E can [[DASH]] during R.",
        ]

      },

      note2: {
        ko: [
        "P의 빛의 사수는 \n 미니언에게 100% [[DMG_PHYSICAL]].", 
        "Q는 시전속도는 [[LEVEL_SCALE]] 비례."
      ],
        en: [
        "P's Lightslinger deals \n 100% [[DMG_PHYSICAL]] to minions.",
        "Q's cast speed scales (based on [[LEVEL_SCALE]])."
      ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_lucianpassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.20, 경계·Q 피해는 V26.19)로 채움(CDragon 게임 데이터 lucian.bin.json과 대조).
  skillTooltip: {
    P: {
      ko: "루시안은 스킬을 사용한 후 3.5초 이내에 [[BA]] 공격을 하면 총을 두 번 연속 발사합니다. ([[EMPOWERED]]) \n 두 번째 공격은 대상에 [[AD_SCALE]]의 50/55/60%([[LEVEL_SCALE]] 비례)에 해당하는 [[DMG_PHYSICAL]]를 입히며, \n 미니언을 상대로는 피해가 [[AD_SCALE]]의 100%까지 증가합니다. \n \n 경계: 아군이 루시안에게 직접 [[HEAL]] 또는 [[SHIELD]] 효과를 부여하거나, 근처 적 챔피언이 [[IMMOBILIZING]] 상태가 되면, \n 루시안의 권총이 과충전 상태가 되어 다음 2회의 [[BA]] 공격 시 [[ON_HIT]] 5(+15% [[AD_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다.",
      en: "If Lucian makes a [[BA]] attack within 3.5 seconds after using a skill, he fires twice in a row. ([[EMPOWERED]]) \n The second shot deals [[DMG_PHYSICAL]] equal to 50/55/60% (based on [[LEVEL_SCALE]]) of [[AD_SCALE]] to the target, \n increased to 100% of [[AD_SCALE]] against minions. \n \n Vigilance: When an ally directly applies [[HEAL]] or [[SHIELD]] to Lucian, or a nearby enemy champion becomes [[IMMOBILIZING]], \n Lucian's pistols become overcharged, and his next 2 [[BA]] attacks deal an additional 5 (+15% [[AD_SCALE]]) [[ON_HIT]] [[DMG_MAGIC]].",
    },
    Q: {
      ko: "루시안이 대상을 관통하는 빛 줄기를 발사해 90/130/170/210/250(+100% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Lucian shoots a bolt of light that pierces through the target, dealing 90/130/170/210/250 (+100% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    W: {
      ko: "루시안이 사거리 끝에 도달하거나 적을 맞히면 [[DETONATE]]하는 탄환을 발사합니다. \n [[DETONATE]]에 맞은 적은 75/110/145/180/215(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입고 잠시 위치가 드러나며, ([[REVEALED]]) 6초 동안 [[MARK]]이 남습니다. \n \n 루시안이나 아군이 [[MARK]]이 남은 적을 공격하면 1초 동안 루시안의 [[MS_SCALE]]가 60/65/70/75/80 상승합니다. \n 아군이 이 효과를 발동시키면 루시안이 경계(P) 효과도 얻습니다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Lucian fires a shot that [[DETONATE]]s at max range or when it hits an enemy. \n Enemies hit by the [[DETONATE]] take 75/110/145/180/215 (+90% [[AP_SCALE]]) [[DMG_MAGIC]], are briefly revealed, ([[REVEALED]]) and are left with a [[MARK]] for 6 seconds. \n \n When Lucian or an ally attacks an enemy with the [[MARK]], Lucian gains 60/65/70/75/80 [[MS_SCALE]] for 1 second. \n If an ally triggers this effect, Lucian also gains Vigilance (P). \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    E: {
      ko: "루시안이 [[DASH]]합니다. \n \n 빛의 사수(P)로 적을 맞힐 때마다 재사용 대기시간이 1초씩 감소합니다. ([[ON_CHAMP_HIT]] 2초 감소) ([[CDR]]) \n \n 16/15.5/15/14.5/14초의 [[COOLDOWN]].",
      en: "Lucian [[DASH]]es. \n \n Each time Lightslinger (P) hits an enemy, the cooldown is reduced by 1 second. (2 seconds [[ON_CHAMP_HIT]]) ([[CDR]]) \n \n 16/15.5/15/14.5/14 second [[COOLDOWN]].",
    },
    R: {
      ko: "루시안이 3초 동안 한 방향으로 총을 22회 난사([[SKILL_CHANNEL]])합니다. \n 탄환은 [[CRIT]] 확률에 비례하여 +1~22 발을 추가됩니다. \n 무한의 대검을 착용하면 6발이 추가됩니다. \n \n 처음 적중한 적에게 각각 15/30/45(+25% [[AD_SCALE]])(+15% [[AP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n R [[RECAST_CANCEL]]로 난사를 중단합니다. \n \n 총을 난사하는 도중에 끈질긴 추격(E)으로 [[DASH]]을 사용할 수 있습니다. \n \n 총 피해량: 330/660/990(+550% [[AD_SCALE]])(+330% [[AP_SCALE]])의 [[DMG_PHYSICAL]] \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Lucian fires 22 shots in one direction over 3 seconds. ([[SKILL_CHANNEL]]) \n Gains +1~22 additional shots based on [[CRIT]] chance. \n Equipping Infinity Edge adds 6 more shots. \n \n Each shot deals 15/30/45 (+25% [[AD_SCALE]]) (+15% [[AP_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit. \n R [[RECAST_CANCEL]] stops the barrage. \n \n Lucian can use Relentless Pursuit (E) to [[DASH]] while firing. \n \n Total damage: 330/660/990 (+550% [[AD_SCALE]]) (+330% [[AP_SCALE]]) [[DMG_PHYSICAL]] \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default lucian;
