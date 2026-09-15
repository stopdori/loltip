import type { ChampData } from "../interactions/types";

const ashe: ChampData = {
  id: "ashe",
  skills: {
    P: ["SLOW"],
    Q: ["AS_UP", "SEPARATOR", "AA_RESET"],
    W: ["W_FLASH"],
    E: ["GLOBAL", "SEPARATOR", "OVERHEAD_VISION", "REVEALED"],
    R: ["GLOBAL", "SEPARATOR", "STUN", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["OVERHEAD_VISION"],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 둔화", en: "P Slow" }, tags: ["ON_HIT", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT", "SLOW", "X2"] },
      { label: { ko: "P 추가 물리피해", en: "P Bonus Physical Damage" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL"] },
    ] },
    
    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["BUFF_STACK"] },
      { label: { ko: "Q 액티브 버프", en: "Q Active Buff" }, tags: ["STACK_CONSUME", "BUFF_FORM", "AS_UP"] },
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SLOW", "SEPARATOR", "AA_RESET"] },
    ] },
   
    W: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "VOLLEY", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],

    E: ["GLOBAL", "SEPARATOR", "TIMING_CAST", "PROJECTILE", "ZONE", "RECHARGE", "SEPARATOR", "OVERHEAD_VISION"],

    R: { phases: [
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["GLOBAL", "SEPARATOR", "TIMING_CAST", "PROJECTILE", "STUN"] },
      { label: { ko: "R 폭발", en: "R Burst"  }, tags: ["DMG_MAGIC", "DETONATE", "SLOW"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[BA]], W에 [[SLOW]]. \n [[CRIT]] 확률은 추가 [[DMG_PHYSICAL]]%로 전환되어 적용. \n 예) 치명타 확률 25% = 추가 [[DMG_PHYSICAL]] 25% \n [[CRIT]]가 발동하면 실제 데미지는 그대로지만 \n [[SLOW]] 효과는 두 배. \n \n",

          "Q의 [[PASSIVE_BONUS]]는 [[BA]] 공격 시 [[BUFF_STACK]] 1개 획득.", 
          "Q는 [[BUFF_STACK]] 4개 보유 시 사용 가능. \n [[STACK_CONSUME]] 하여 [[AS_UP]]. \n [[BA]]가 연발 사격으로 변하고 \n 첫 공격은 6발, 이후 5발씩 화살([[PROJECTILE]]) 발사. \n 화살당 [[DMG_PHYSICAL]] 추가. \n \n",

          "W는 여러 발의 화살을 부채꼴로 발사. \n [[DMG_PHYSICAL]]와 P의 [[SLOW]]. \n 화살의 데미지는 한 대상당 한 번. \n \n",

          "E는 [[GLOBAL]] 사거리로 [[OVERHEAD_VISION]]을 가진 매를 발사. \n \n",

          "R은 [[GLOBAL]] 사거리 화살 발사. \n 적중한 대상은 [[STUN]]. \n [[DETONATE]]하여 [[AOE]] [[DMG_MAGIC]], [[SLOW]]. \n 화살이 이동한 거리에 따라 [[STUN]](최대 3초)."

        ],

        en: [
          "P's [[SLOW]] applies on [[BA]] and W. \n [[CRIT]] chance is instead converted into bonus [[DMG_PHYSICAL]]%. \n e.g. 25% crit chance = +25% bonus [[DMG_PHYSICAL]] \n When a hit would have [[CRIT]]ed, the actual damage stays the same, \n but the [[SLOW]] effect is doubled. \n \n",

          "Q's [[PASSIVE_BONUS]]: landing a [[BA]] grants 1 [[BUFF_STACK]].",
          "Q becomes usable while holding 4 [[BUFF_STACK]]s. \n [[STACK_CONSUME]]s them for [[AS_UP]]. \n [[BA]]s turn into a volley of arrows ([[PROJECTILE]]) — \n the first volley fires 6 arrows, then 5 each after. \n Each arrow deals bonus [[DMG_PHYSICAL]]. \n \n",

          "W fires multiple arrows in a cone. \n Deals [[DMG_PHYSICAL]] and applies P's [[SLOW]]. \n Each target only takes damage from one arrow. \n \n",

          "E fires a hawk with [[GLOBAL]]-range [[OVERHEAD_VISION]]. \n \n",

          "R fires an arrow at [[GLOBAL]] range. \n The target hit is [[STUN]]ned. \n It then [[DETONATE]]s for [[AOE]] [[DMG_MAGIC]] and [[SLOW]]. \n [[STUN]] duration scales with the arrow's travel distance (up to 3 seconds).",
        ]

      },

      note2: {
        ko: [
        "[[W_FLASH]] 가능. \n 하지만 판정이 독특하여 잘 조준해야 유효.", 
        "Q의 화살은 [[PROJECTILE]] 하나당 [[LIFESTEAL]] 적용. \n [[ON_HIT]]은 한 번만 적용."
      ],
        en: [
          "[[W_FLASH]] is possible. \n However, the hitbox is unusual, so aim carefully.",
          "Each arrow ([[PROJECTILE]]) of Q applies [[LIFESTEAL]] individually. \n [[ON_HIT]] effects apply only once."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 80,
    16: 60,
  },

  // skillTooltip 근거: DDragon의 P/Q/W/E/R vars가 전부 비어있고 effectBurn도
  // 대부분 "0"으로 깨져 있어 위키(wiki.leagueoflegends.com/en-us/Ashe, V26.16
  // 기준) 정보박스 수치로 채웠다(Notes 섹션 제외, 단 E의 시야 지속 공식은
  // 능력 설명에 곧바로 붙어있는 핵심 수치라 예외적으로 포함). 아이템(인피니티
  // 엣지 등) 연동 수치는 스킬 자체 효과가 아니라 과밀 방지를 위해 생략.
  // R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "애쉬의 평타와 스킬 적중은 대상에게 [[SLOW]](서리)를 2초간 적용한다(20~30%, [[LEVEL_SCALE]]). \n [[CRIT]] 확률은 실제 치명타 대신 그 확률만큼 모든 평타에 0~100%의 추가 [[DMG_PHYSICAL]]로 항상 전환되어 적용된다. \n [[CRIT]]가 발생했을 상황에는 대신 [[SLOW]]가 40~60%([[LEVEL_SCALE]])로 두 배 강화되며, 1초에 걸쳐 원래 수치로 감소한다.",
      en: "Ashe's basic attacks and ability hits apply [[SLOW]] (Frost) to the target for 2 seconds (20~30%, [[LEVEL_SCALE]]). \n Her [[CRIT]] chance is always converted into bonus [[DMG_PHYSICAL]] of 0~100% on every basic attack instead of an actual critical strike. \n Whenever a hit would have [[CRIT]]ed, the [[SLOW]] is instead doubled to 40~60% ([[LEVEL_SCALE]]), decaying back to normal over 1 second.",
    },
    Q: {
      ko: "평타를 적중시킬 때마다 4초간 지속되는 [[BUFF_STACK]] 1개를 획득. \n (최대 4개, 적중 시 [[DURATION_RESET]]) \n 4개가 모이면 이 스킬을 시전할 수 있다. \n \n 시전하면 [[STACK_CONSUME]]하여 6초간 [[EMPOWERED]] 상태가 되어 20/30/40/50/60%의 [[AS_UP]]를 얻고, 평타가 화살 5발을 동시에 발사하는 연사로 바뀐다(화살 1발당 22/23/24/25/26% [[AD_SCALE]]의 [[DMG_PHYSICAL]], 총합 110/115/120/125/130% [[AD_SCALE]] — 첫 연사는 화살이 1발 더 나가 총 132~156% [[AD_SCALE]]). \n 연사의 화살 각각에 [[LIFESTEAL]]이 개별 적용되지만, [[ON_HIT]] 효과는 연사당 한 번만 적용된다.",
      en: "Landing a basic attack grants 1 stack of [[BUFF_STACK]] lasting 4 seconds. \n (Max 4 stacks, [[DURATION_RESET]] on each hit) \n Once 4 stacks are gathered, this skill can be cast. \n \n Casting it [[STACK_CONSUME]]s them, granting [[EMPOWERED]] for 6 seconds — gaining 20/30/40/50/60% [[AS_UP]] and turning her basic attacks into a volley of 5 arrows fired at once (22/23/24/25/26% [[AD_SCALE]] [[DMG_PHYSICAL]] per arrow, totaling 110/115/120/125/130% [[AD_SCALE]] — the first volley fires one extra arrow for a total of 132~156% [[AD_SCALE]]). \n [[LIFESTEAL]] applies individually to each arrow in the volley, but [[ON_HIT]] effects trigger only once per volley.",
    },
    W: {
      ko: "애쉬가 부채꼴 범위로 화살 7/8/9/10/11발을 발사해, 적중한 적에게 60/95/130/165/200(+100% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힌다(한 대상은 처음 맞은 화살의 피해만 적용). \n 적중한 적 챔피언에게는 패시브의 치명타 강화 [[SLOW]](40~60%)를 즉시 적용한다. \n \n 18/14.5/11/7.5/4초의 [[COOLDOWN]].",
      en: "Ashe fires 7/8/9/10/11 arrows in a cone, dealing 60/95/130/165/200 (+100% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to enemies hit (each target only takes damage from the first arrow that hits them). \n Enemy champions hit are immediately affected by the passive's crit-empowered [[SLOW]] (40~60%). \n \n 18/14.5/11/7.5/4 second [[COOLDOWN]].",
    },
    E: {
      ko: "애쉬가 100유닛 이동할 때마다 0.5초씩 주변 [[VISION]]를 밝히는 매를 [[GLOBAL]] 사거리로 발사 한다. \n 도착 지점에는 5초간 [[OVERHEAD_VISION]]을 남긴다. \n \n 최대 2회 [[RECHARGE]]되며, 충전당 90/80/70/60/50초가 걸린다.",
      en: "Ashe fires a hawk with [[GLOBAL]] range that lights up [[VISION]] around itself for 0.5 seconds for every 100 units it travels. \n It leaves [[OVERHEAD_VISION]] at its landing point for 5 seconds. \n \n [[RECHARGE]]s up to 2 charges, each taking 90/80/70/60/50 seconds.",
    },
    R: {
      ko: "애쉬가 [[GLOBAL]] 사거리로 얼음 화살을 발사해 첫 번째로 맞은 챔피언에게 200/400/600(+120% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 [[STUN]]시킨다(이동 거리가 길수록 [[STUN]] 지속시간 증가, 최대 3.5초). \n \n 적중 지점 주변 적에게도 같은 피해를 입히고 서리([[SLOW]])를 적용하며, 적중한 대상 주변에 1초간 [[VISION]]을 밝힌다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Ashe fires an ice arrow at [[GLOBAL]] range, dealing 200/400/600 (+120% [[AP_SCALE]]) [[DMG_MAGIC]] and [[STUN]]ning the first champion hit (the farther it travels, the longer the [[STUN]], up to 3.5 seconds). \n \n Enemies around the impact point take the same damage and are afflicted with Frost ([[SLOW]]), and [[VISION]] is granted around the struck target for 1 second. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default ashe;
