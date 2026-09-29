import type { ChampData } from "../interactions/types";

const brand: ChampData = {
  id: "brand",
  skills: {
    P: { phases: [
      { label: { ko: "P 불길, 폭발", en: "P Blaze and Burst" }, tags: ["ST_CONDITIONAL"] },
      { label: { ko: "P 마나 회복", en: "P Mana Restore" }, tags: ["ST_CONDITIONAL", "MANA_RESTORE"] },
    ] },
    
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["W_FLASH"],
    E: [],
    R: ["ST_CONDITIONAL", "SLOW"],
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
      { label: { ko: "P 불길", en: "P Blaze" }, tags: ["DOT", "DMG_MAGIC"] },
      { label: { ko: "P 폭발", en: "P Burst"  }, tags: ["STACK_CONSUME", "ST_DELAYED", "DMG_MAGIC", "AOE"] },
      { label: { ko: "P 마나 회복", en: "P Mana Restore" }, tags: ["ST_CONDITIONAL", "MANA_RESTORE"] },
    ] },

    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "DEBUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    W: ["DMG_MAGIC", "TIMING_CAST", "ZONE", "ST_DELAYED", "DEBUFF_STACK"],
    E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "CHAIN", "DEBUFF_STACK"],
    R: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "CHAIN", "DEBUFF_STACK", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 스킬로 적을 맞히면 불길 [[DEBUFF_STACK]] 부여. \n 불길은 [[TARGET_MAXHP_SCALE]] 비례 [[DMG_MAGIC]]. \n 3중첩 이면 [[DETONATE]]하여 [[AOE]] [[DMG_MAGIC]] 피해. \n 불길이 걸린 대상 처치 시 [[MANA_RESTORE]]. \n \n",

          "Q는 [[PROJECTILE]] 발사. \n 적중하면 [[DMG_MAGIC]], 불길 [[DEBUFF_STACK]]. \n 불길이 걸려있는 대상은 [[STUN]] 추가. \n \n", 

          "W는 잠시 후 발동하는 [[ZONE]] 생성. \n [[AOE]] [[DMG_MAGIC]], 불길 [[DEBUFF_STACK]]. \n 불길이 걸려있던 대상은 [[DMG_MAGIC]] 25% 증가. \n \n",

          "E는 대상을 [[TARGETED]] 하여 [[DMG_MAGIC]], 불길 [[DEBUFF_STACK]]. \n 주변에 [[CHAIN]]되어 동일한 효과 적용. \n 불길이 걸려있던 대상이라면 [[CHAIN]] [[AOE]] 2배. \n \n",

          "R은 [[PROJECTILE]]를 발사. \n 적중하고 주변에 최대 4번 [[CHAIN]]. (본인 포함) \n 불길이 걸려있던 대상이라면 [[SLOW]] 추가.",

        ],

        en: [
          "P: hitting an enemy with a skill applies Blaze ([[DEBUFF_STACK]]). \n Blaze deals [[DMG_MAGIC]] over time scaling with [[TARGET_MAXHP_SCALE]]. \n At 3 stacks, it [[DETONATE]]s for [[AOE]] [[DMG_MAGIC]]. \n Killing a target while Blazing grants [[MANA_RESTORE]]. \n \n",

          "Q fires a [[PROJECTILE]]. \n On hit, deals [[DMG_MAGIC]] and applies Blaze ([[DEBUFF_STACK]]). \n If the target is already Blazing, also applies [[STUN]]. \n \n",

          "W creates a [[ZONE]] that triggers after a short delay. \n Deals [[AOE]] [[DMG_MAGIC]] and applies Blaze ([[DEBUFF_STACK]]). \n If the target was already Blazing, [[DMG_MAGIC]] is increased by 25%. \n \n",

          "E [[TARGETED]]s the target, dealing [[DMG_MAGIC]] and applying Blaze ([[DEBUFF_STACK]]). \n It [[CHAIN]]s to nearby enemies with the same effect. \n If the target was already Blazing, the [[CHAIN]] [[AOE]] range doubles. \n \n",

          "R fires a [[PROJECTILE]]. \n On hit, [[CHAIN]]s up to 4 times to nearby targets (including self). \n If the target was already Blazing, also applies [[SLOW]].",
        ]

      },

      note2: {
        ko: [
          "P는 불길 [[DEBUFF_STACK]]이 3스택이 되면 [[DETONATE]]하고 \n 4초간 1스택만 쌓을 수 있다.", 
          "R의 [[CHAIN]]는 불길 3스택 만드는것을 우선으로 튕김."],
        en: [
          "When P's Blaze ([[DEBUFF_STACK]]) reaches 3 stacks, it [[DETONATE]]s, \n and only 1 stack can be applied for the next 4 seconds.",
          "R's [[CHAIN]] prioritizes bouncing to targets that would reach 3 Blaze stacks.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 90,
    16: 80,
  },

  // skillTooltip 근거: DDragon P/Q/W/E/R 전부 vars가 빈 배열이라 위키
  // (wiki.leagueoflegends.com/en-us/Brand, V26.13 기준) 정보박스로 채웠다
  // (Notes 섹션 제외). R은 DDragon 설명 문구가 "최대 5회 튕김"이라고 했지만
  // 위키 본문(정보박스)엔 "최대 4회"로 명확히 나와 있어 위키 쪽을 채택했다
  // (자동요약 중 이와 다른 값들은 위키 원문과 모순돼 전부 배제).
  // R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "브랜드의 스킬이 적중하면 4초간 지속되는 발화([[DEBUFF_STACK]])을 부여한다(최대 3개, [[DURATION_RESET]]). \n 발화 상태인 대상은 4초에 걸쳐 [[TARGET_MAXHP_SCALE]] 2%(스택당)만큼의 [[DMG_MAGIC]]를 지속적으로 입는다(몬스터 상대로는 상한). \n 발화 상태이거나 스킬로 적을 처치하면 [[LEVEL_SCALE]] 20~40의 [[MANA_RESTORE]]를 얻는다. \n \n 챔피언이나 대형 몬스터에게 3스택이 모두 쌓이면 불안정해져 2초 뒤 [[STACK_CONSUME]]하며 폭발해, 주변 반경 475의 적에게 [[TARGET_MAXHP_SCALE]] 6~12%([[LEVEL_SCALE]])(+주문력 100당 2%)의 [[DMG_MAGIC]]를 입힌다(몬스터 상대로는 [[LEVEL_SCALE]] 상한). \n \n 최근 4초 이내에 이 폭발을 겪은 대상에게는 다시 3스택을 채울 수 없다.",
      en: "When Brand's skills hit an enemy, they apply Blaze ([[DEBUFF_STACK]]) for 4 seconds (max 3, [[DURATION_RESET]]). \n While Blazing, the target takes [[DMG_MAGIC]] over 4 seconds equal to 2% of [[TARGET_MAXHP_SCALE]] per stack (capped against monsters). \n Being Blazing or killing an enemy with a skill grants [[LEVEL_SCALE]] 20-40 [[MANA_RESTORE]]. \n \n When a champion or large monster reaches 3 stacks, it becomes unstable and [[STACK_CONSUME]]s after 2 seconds, exploding to deal [[TARGET_MAXHP_SCALE]] 6-12% ([[LEVEL_SCALE]]) (+2% per 100 AP) [[DMG_MAGIC]] to enemies within a 475 radius (capped by [[LEVEL_SCALE]] against monsters). \n \n A target that was hit by this explosion within the last 4 seconds cannot be stacked to 3 again.",
    },
    Q: {
      ko: "브랜드가 화염구를 발사해 처음 맞은 적에게 70/100/130/160/190(+65% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. 대상이 발화 상태라면 1.75초간 [[STUN]]시킨다. \n \n 8/7.5/7/6.5/6초의 [[COOLDOWN]].",
      en: "Brand launches a fireball, dealing 70/100/130/160/190 (+65% [[AP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit. If the target is Blazing, [[STUN]]s them for 1.75 seconds. \n \n 8/7.5/7/6.5/6-second [[COOLDOWN]].",
    },
    W: {
      ko: "0.627초의 지연 후 지정 지점에 불기둥을 만들어 적에게 75/120/165/210/255(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. 발화 상태인 대상에게는 25% 증가한 93.75/150/206.25/262.5/318.75(+87.5% [[AP_SCALE]])를 입힌다. \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "After a 0.627-second delay, creates a pillar of fire at the target location, dealing 75/120/165/210/255 (+70% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies. Deals 25% increased damage (93.75/150/206.25/262.5/318.75, +87.5% [[AP_SCALE]]) to Blazing targets. \n \n 10/9.5/9/8.5/8-second [[COOLDOWN]].",
    },
    E: {
      ko: "브랜드가 대상에게 강력한 화염구를 터뜨려 55/80/105/130/155(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 주변 반경 300 이내의 다른 적에게도 동일한 피해가 퍼진다. \n \n 대상이 발화 상태라면 퍼지는 반경이 600으로 2배가 된다. \n \n 13/12/11/10/9초의 [[COOLDOWN]].",
      en: "Brand detonates a powerful fireball on the target, dealing 55/80/105/130/155 (+60% [[AP_SCALE]]) [[DMG_MAGIC]] and spreading the same damage to other enemies within a 300 radius. \n \n If the target is Blazing, the spread radius doubles to 600. \n \n 13/12/11/10/9-second [[COOLDOWN]].",
    },
    R: {
      ko: "브랜드가 화염구 [[PROJECTILE]]를 발사해 자신과 주변 적 사이를 최대 4번까지 [[CHAIN]]하며(챔피언의 발화 스택을 최대로 채우는 것을 우선), 튕길 때마다 적에게 100/175/250(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힌다. \n \n 발화 상태인 대상은 그때마다 0.25초간 30/45/60%만큼 [[SLOW]]된다(중첩 가능). \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Brand fires a [[PROJECTILE]] that [[CHAIN]]s up to 4 times between himself and nearby enemies (prioritizing champions closer to max Blaze stacks), dealing 100/175/250 (+30% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies on each bounce. \n \n Blazing targets are also [[SLOW]]ed by 30/45/60% for 0.25 seconds each time (stacks). \n \n {{ultCooldown}}-second [[COOLDOWN]].",
    },
  },

};

export default brand;
