import type { ChampData } from "../interactions/types";

const caitlyn: ChampData = {
  id: "caitlyn",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "ROOT"],
    E: ["E_FLASH", "SLOW", "SEPARATOR", "AA_RESET", "SEPARATOR", "DASH", "WALL_HOP"],
    R: ["TRUE_SIGHT"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 버프 스택", en: "P Buff Stack" }, tags: ["BUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "BUFF_STACK", "X2"] },
      { label: { ko: "P 헤드샷", en: "P Headshot" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "RANGE_UP", "X2"] },
    ] },
    
    Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "LOCKED"],
    
    W: { phases: [
      { label: { ko: "W 덫", en: "W Trap" }, tags: ["TIMING_CAST", "TRAP", "MARK", "RECHARGE", "SEPARATOR", "ROOT", "TRUE_SIGHT"] },
      { label: { ko: "W 헤드샷", en: "W Headshot" }, tags: ["MARK_CONSUME", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "SEPARATOR_NEWLINE", "SEPARATOR", "RANGE_UP", "X2"] },
    ] },

    E: { phases: [
      { label: { ko: "E 투망", en: "E Net" }, tags: ["DMG_MAGIC", "PROJECTILE", "MARK", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "E 헤드샷", en: "E Headshot" }, tags: ["MARK_CONSUME", "DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "SEPARATOR", "AA_RESET"] },
    ] },

    R: { phases: [
      { label: { ko: "R 조준", en: "R Aim" }, tags: ["SKILL_CHANNEL", "TIMING_CAST", "TARGETED", "LOCKED", "SEPARATOR", "TRUE_SIGHT"] },
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "HOMING", "PIERCE_MINION", "SINGLE"] },
    ] },

  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[BA]]를 때릴 때마다 [[BUFF_STACK]].\n [[BUSH]]에서는 2개. \n 5스택이 쌓이면 다음 공격 헤드샷으로 [[EMPOWERED]]. \n 헤드샷은 [[CRIT]] 비례 [[DMG_PHYSICAL]]. \n \n",

          "Q는 [[PIERCE]] [[PROJECTILE]] 발사. \n 처음대상 이후 감소된 피해. \n W의 [[TRAP]]에 걸린 대상에겐 감소된 피해 없음. \n \n",

          "W는 위치에 [[TRAP]] 설치. \n 적 챔피언이 밟으면 [[ROOT]]과 [[TRUE_SIGHT]]. \n 대상에게 다음 [[BA]] 공격 시 \n 사거리 2배의 헤드샷 발사. \n 일반 헤드샷에 추가 [[DMG_PHYSICAL]]. \n [[RECHARGE]]식 스킬.", 

          "E는 전방에 투망 [[PROJECTILE]]를 발사. \n 동시에 뒤로 [[DASH]]. \n 투망에 맞은 대상에게 다음 [[BA]] 공격 시 \n 사거리 2배의 헤드샷 발사. \n \n",
          
          "R은 조준하는 동안 대상에게 [[TRUE_SIGHT]]. \n 조준을 끝마치면 [[PROJECTILE]] 발사. \n 같은 팀이 막아줄 수 있음. \n [[PROJECTILE]]는 [[CRIT]], [[CRIT]]데미지 비례 [[DMG_PHYSICAL]].",
        ],

        en: [
          "P grants a [[BUFF_STACK]] with each [[BA]].\n 2 stacks in a [[BUSH]]. \n At 5 stacks, the next attack is [[EMPOWERED]] into a Headshot. \n Headshot deals [[DMG_PHYSICAL]] scaling with [[CRIT]]. \n \n",
          "Q fires a [[PIERCE]] [[PROJECTILE]]. \n Reduced damage after the first target. \n No damage reduction against targets caught in W's [[TRAP]]. \n \n",
          "W places a [[TRAP]] at a location. \n When an enemy champion steps on it: [[ROOT]] and [[TRUE_SIGHT]]. \n The next [[BA]] on that target \n fires a Headshot with double range. \n Deals bonus [[DMG_PHYSICAL]] on top of a normal Headshot. \n [[RECHARGE]]-based skill.",
          "E fires a net [[PROJECTILE]] forward. \n At the same time, [[DASH]]es backward. \n The next [[BA]] on a target hit by the net \n fires a Headshot with double range. \n \n",
          "R grants [[TRUE_SIGHT]] of the target while aiming. \n Fires a [[PROJECTILE]] when aiming finishes. \n The target's allies can block it. \n The [[PROJECTILE]] deals [[DMG_PHYSICAL]] scaling with [[CRIT]] chance and [[CRIT]] damage.",
        ]

      },

      note2: {
        ko: [
        "P의 [[BUFF_STACK]]은 5개일 때 \n 다음 [[BA]]가 헤드샷으로 [[EMPOWERED]] 되는데, \n 4스택 일 때 [[BUSH]]에서 공격 시 한 번에 2개가 쌓여 \n 이론상 5, 6스택이 되어 \n 즉시 소모하여 헤드샷으로 발사.", 
        "즉, [[BUSH]]에서는 2/4/헤드샷 패턴.",
        "W([[TRAP]])는 [[ALLY_TP_OK]] 아님.", 
      ],
        en: [
          "At 5 P [[BUFF_STACK]]s, \n the next [[BA]] is [[EMPOWERED]] into a Headshot, \n but attacking from a [[BUSH]] at 4 stacks adds 2 at once, \n so it theoretically becomes 5 or 6 stacks \n and is immediately consumed to fire a Headshot.",
          "In other words, in a [[BUSH]] the pattern is 2/4/Headshot.",
          "W ([[TRAP]]) is not [[ALLY_TP_OK]].",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 90,
    11: 90,
    16: 90,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Caitlyn,
  // 스킬 수치 최근 변경 V26.01). DDragon effectBurn/vars가 비어 있거나 매핑 불가라 위키 본문 수치로 채움.
  // W 최대 충전 횟수는 위키에 별도 값이 없어 같은 설명의 최대 설치 개수(3/3/4/4/5)로 채움(확인 필요).
  skillTooltip: {
    P: {
      ko: "케이틀린은 [[BA]] 공격 시 [[BUFF_STACK]] 1개를 획득한다. \n ([[BUSH]]에서 공격 시 [[BUFF_STACK]] 2개씩) \n \n 5개가 쌓이면 다음 공격은 헤드샷을 발사하여 [[CRIT]] 확률에 비례한 추가 [[DMG_PHYSICAL]]를 입힙니다. \n ([[LEVEL_SCALE]] 비례 60/80/100% [[AD_SCALE]] + [[CRIT]] 확률에 따라 0~100% [[AD_SCALE]]) \n \n [[TRAP]] 또는 투망에 걸린 대상을 공격할 때도 헤드샷을 발사한다. \n 이때, 케이틀린의 헤드샷 공격 사거리가 두 배. ([[RANGE_UP]])",
      en: "Caitlyn gains 1 [[BUFF_STACK]] on each [[BA]]. \n (2 [[BUFF_STACK]]s per attack from a [[BUSH]]) \n \n At 5 stacks, her next attack fires a Headshot dealing bonus [[DMG_PHYSICAL]] scaling with [[CRIT]] chance. \n (60/80/100% [[AD_SCALE]] based on [[LEVEL_SCALE]] + 0~100% [[AD_SCALE]] based on [[CRIT]] chance) \n \n She also fires a Headshot when attacking a target caught in a [[TRAP]] or net. \n In this case, Caitlyn's Headshot attack range is doubled. ([[RANGE_UP]])",
    },
    Q: {
      ko: "케이틀린이 조준한 후 적을 [[PIERCE]]하는 [[PROJECTILE]]을 발사하여 50/90/130/170/210(+125/145/165/185/205% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 첫 번째 대상에게 적중한 후에는 탄도체 유효 범위가 넓어지며 30/54/78/102/126(+75/87/99/111/123% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 요들잡이 덫([[TRAP]]) 때문에 위치가 드러난 적은 항상 100%의 피해를 입습니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Caitlyn takes aim and fires a [[PIERCE]] [[PROJECTILE]], dealing 50/90/130/170/210 (+125/145/165/185/205% [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n After hitting the first target, the projectile widens and deals 30/54/78/102/126 (+75/87/99/111/123% [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n Enemies revealed by Yordle Snap Trap ([[TRAP]]) always take 100% damage. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "케이틀린이 [[TRAP]]을 설치하여 처음 밟는 적을 1.5초 동안 [[ROOT]]하고 3초 동안 해당 적에 대한 [[TRUE_SIGHT]]를 얻습니다. \n 덫은 30/35/40/45/50초 동안 지속되며 한 번에 3/3/4/4/5개까지 설치할 수 있습니다. \n 이 스킬은 3/3/4/4/5회까지 [[RECHARGE]]됩니다(26/22/18/14/10초마다). \n \n 이 스킬에 의해 [[ROOT]]된 대상은 헤드샷으로 35/80/125/170/215(+30% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 추가로 입습니다. \n \n 26/22/18/14/10초의 [[RECHARGE]] [[COOLDOWN]].",
      en: "Caitlyn sets a [[TRAP]] that [[ROOT]]s the first enemy to step on it for 1.5 seconds and grants [[TRUE_SIGHT]] of that enemy for 3 seconds. \n Traps last 30/35/40/45/50 seconds, and up to 3/3/4/4/5 can be placed at once. \n This skill holds up to 3/3/4/4/5 [[RECHARGE]] charges (one every 26/22/18/14/10 seconds). \n \n Targets [[ROOT]]ed by this skill take an additional 35/80/125/170/215 (+30% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] from Headshots. \n \n 26/22/18/14/10 second [[RECHARGE]] [[COOLDOWN]].",
    },
    E: {
      ko: "케이틀린이 투망을 발사하여 처음으로 적중한 적을 1초 동안 50% [[SLOW]]시키고 80/130/180/230/280(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 케이틀린은 뒤로 밀려납니다. (커서방향 반대로 [[DASH]])\n \n 16/14/12/10/8초의 [[COOLDOWN]].",
      en: "Caitlyn fires a net that [[SLOW]]s the first enemy hit by 50% for 1 second and deals 80/130/180/230/280 (+80% [[AP_SCALE]]) [[DMG_MAGIC]]. \n Caitlyn is knocked backward. ([[DASH]] in the direction opposite the cursor)\n \n 16/14/12/10/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "케이틀린이 잠시 [[SKILL_CHANNEL]]하고 공을 들인 완벽한 사격을 하여 300/475/650(+100% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 다른 적 챔피언이 총알을 대신 맞을 수도 있습니다. \n [[SKILL_CHANNEL]]하는 동안 대상에 대한 [[TRUE_SIGHT]]를 얻습니다. \n \n 피해량은 케이틀린의 [[CRIT]] 확률 및 [[CRIT]] 피해량에 비례합니다(최대 30% 증가). \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Caitlyn briefly [[SKILL_CHANNEL]]s and lines up the perfect shot, dealing 300/475/650 (+100% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n Other enemy champions can intercept the bullet. \n While [[SKILL_CHANNEL]]ing, she gains [[TRUE_SIGHT]] of the target. \n \n Damage scales with Caitlyn's [[CRIT]] chance and [[CRIT]] damage (up to 30% increase). \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default caitlyn;
