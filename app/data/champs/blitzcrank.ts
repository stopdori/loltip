import type { ChampData } from "../interactions/types";

const blitzcrank: ChampData = {
  id: "blitzcrank",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD"],
    Q: ["GRAB", "STUN"],
    W: ["BUFF_FORM", "AS_UP", "MS_UP", "SEPARATOR", "ST_DELAYED", "MS_DOWN"],
    E: ["AIRBORNE", "SEPARATOR", "AA_RESET"],
    R: ["R_FLASH", "SILENCE", "SEPARATOR", "SHIELD_BREAK"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "SHIELD"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "GRAB"],
    W: ["BUFF_FORM", "MS_UP", "AS_UP", "SEPARATOR", "ST_DELAYED", "MS_DOWN"],
    E: ["DMG_PHYSICAL", "TIMING_AFTERCAST", "ON_HIT", "SEPARATOR", "AA_RESET"],
    R: { phases: [
      { label: { ko: "R 패시브", en: "R Passive" }, tags: ["DEBUFF_STACK", "SEPARATOR", "ST_DELAYED", "STACK_CONSUME", "DMG_MAGIC"] },
      { label: { ko: "R 액티브", en: "R Active"  }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SILENCE", "SEPARATOR", "SHIELD_BREAK"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "체력이 30%로 밑으로 떨어지면 \n [[MANA_SCALE]]의 35% [[SHIELD]]. 10초 지속. \n \n",

          "Q는 전방에 오른손 [[PROJECTILE]] 발사. \n 적중하면 [[DMG_MAGIC]], [[GRAB]], [[STUN]]. \n \n",

          "W는 [[MS_UP]], [[AS_UP]] \n 지속시간 끝나면 블랭의 [[MS_DOWN]]. \n \n",

          "E는 다음 [[BA]] 강화. \n 적중 시 [[DMG_MAGIC]], [[AIRBORNE]]. \n [[AA_RESET]] 가능. \n \n",

          "R의 [[PASSIVE_BONUS]]는 \n [[COOLDOWN]]이 아닐 때 [[ON_HIT]] 시 대상에게 [[DEBUFF_STACK]]. \n [[DEBUFF_STACK]]은 1초마다 [[STACK_CONSUME]]되어 낙뢰. \n 낙뢰는 [[DMG_MAGIC]].", 
          "R은 사용하면 [[AOE]] [[DMG_MAGIC]], [[SILENCE]], [[SHIELD_BREAK]].",
        ],

        en: [
          "When HP drops below 30%, \n gain a [[SHIELD]] equal to 35% of [[MANA_SCALE]]. Lasts 10 seconds. \n \n",

          "Q fires his right hand forward as a [[PROJECTILE]]. \n On hit, deals [[DMG_MAGIC]] and applies [[GRAB]] and [[STUN]]. \n \n",

          "W grants [[MS_UP]] and [[AS_UP]]. \n When the duration ends, Blitzcrank suffers [[MS_DOWN]]. \n \n",

          "E empowers the next [[BA]]. \n On hit, deals [[DMG_MAGIC]] and applies [[AIRBORNE]]. \n [[AA_RESET]] is possible. \n \n",

          "R's [[PASSIVE_BONUS]]: \n while not on [[COOLDOWN]], [[ON_HIT]] applies [[DEBUFF_STACK]] to the target. \n [[DEBUFF_STACK]] is [[STACK_CONSUME]]d every 1 second, triggering a lightning strike. \n The strike deals [[DMG_MAGIC]].",
          "Using R deals [[AOE]] [[DMG_MAGIC]] and applies [[SILENCE]] and [[SHIELD_BREAK]].",
        ]

      },

      note2: {
        ko: [
          "Q([[GRAB]])는 대상보다 뒤쪽으로 조준하면 \n 조금 잘 맞힐 수 있음.", 
          "Q를 사용하지 않고 들고 있는 것도 좋은 전략.",
          "R의 [[DEBUFF_STACK]]은 [[COOLDOWN]]이 아닐때 부여되는데, \n [[DEBUFF_STACK]]을 부여하고 R을 사용해도 낙뢰는 정상 작동."
        ],
        en: [
          "Aiming slightly behind the target on Q ([[GRAB]]) \n can make it land more reliably.",
          "Holding onto Q without using it is also a valid strategy.",
          "R's [[DEBUFF_STACK]] is applied while not on [[COOLDOWN]], \n but the lightning strike still triggers normally even if R is used right after applying [[DEBUFF_STACK]].",
        ],
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 60,
    11: 40,
    16: 20,
  },

  // skillTooltip 근거: DDragon Q의 effectBurn(90/140/190/240/290)이 위키 정보박스
  // (110/160/210/260/310)와 달라 위키 값을 채택했고(wiki.leagueoflegends.com/
  // en-us/Blitzcrank, V25.22 기준), W/E/R은 vars가 빈 배열이라 전량 위키로
  // 채웠다(Notes 섹션 제외). R 쿨타임은 {{ultCooldown}}으로 참조.
  skillTooltip: {
    P: {
      ko: "블리츠크랭크가 [[HP_SCALE]]의 30% 이하로 피해를 받으면 \n [[MANA_SCALE]]의 35%만큼의 [[SHIELD]]를 얻는다(최대 10초 지속). \n \n 90초의 [[COOLDOWN]].",
      en: "When Blitzcrank drops to 30% or below of his [[HP_SCALE]], \n he gains a [[SHIELD]] equal to 35% of his [[MANA_SCALE]] (lasts up to 10 seconds). \n \n 90-second [[COOLDOWN]].",
    },
    Q: {
      ko: "블리츠크랭크가 오른손 [[PROJECTILE]]를 발사해 처음 맞은 적에게 110/160/210/260/310(+120% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 0.65초 동안 [[STUN]]시켜 [[GRAB]] 한다. \n 끌려오는 동안 대상은 [[REVEALED]] 상태가 된다. 손이 날아가는 동안과 적중 후 0.25초간은 블리츠크랭크도 이동·공격할 수 없다. \n \n 20/19/18/17/16초의 [[COOLDOWN]].",
      en: "Blitzcrank fires his right hand as a [[PROJECTILE]], dealing 110/160/210/260/310 (+120% [[AP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit, [[STUN]]ning them for 0.65 seconds and [[GRAB]]bing them. \n The target is [[REVEALED]] while being pulled in. Blitzcrank also cannot move or attack while the hand is in flight and for 0.25 seconds after it hits. \n \n 20/19/18/17/16-second [[COOLDOWN]].",
    },
    W: {
      ko: "블리츠크랭크가 5초간 30/40/50/60/70%의 [[AS_UP]]와, 2.9초에 걸쳐 10%까지 감소하는 60/65/70/75/80%의 [[MS_UP]]를 얻는다. \n 효과가 끝나면 1.5초간 30%만큼 블리츠크랭크의 [[MS_DOWN]] 된다. \n \n 15초의 [[COOLDOWN]].",
      en: "Blitzcrank gains 30/40/50/60/70% [[AS_UP]] and 60/65/70/75/80% [[MS_UP]] (decaying to 10% over 2.9 seconds) for 5 seconds. \n When the effect ends, Blitzcrank suffers 30% [[MS_DOWN]] for 1.5 seconds. \n \n 15-second [[COOLDOWN]].",
    },
    E: {
      ko: "블리츠크랭크가 다음 평타(5초 이내)를 [[EMPOWERED]] 시키고, 공격 모션이 한 번 발동하면 멈추지 않는다. 100% [[AD_SCALE]](+25% [[AP_SCALE]])의 추가 [[DMG_PHYSICAL]]를 입히고([[CRIT]] 적용 가능) 1초간 [[AIRBORNE]]시킨다. \n 이 스킬은 평타 타이머를 초기화한다 ([[AA_RESET]]). \n \n 7/6.5/6/5.5/5초의 [[COOLDOWN]].",
      en: "Blitzcrank [[EMPOWERED]]s his next basic attack (within 5 seconds), which cannot be stopped once the attack animation starts. It deals an additional 100% [[AD_SCALE]] (+25% [[AP_SCALE]]) [[DMG_PHYSICAL]] (can [[CRIT]]) and applies [[AIRBORNE]] for 1 second. \n This skill resets the basic attack timer ([[AA_RESET]]). \n \n 7/6.5/6/5.5/5-second [[COOLDOWN]].",
    },
    R: {
      ko: "R이 [[COOLDOWN]] 중이 아닐 때, [[PASSIVE_BONUS]] 효과로 블리츠크랭크의 평타가 대상에게 [[DEBUFF_STACK]]을 남기며, 1초마다 [[STACK_CONSUME]]가 1개씩 되어 50/100/150(+30/40/50% [[AP_SCALE]])(+[[MANA_SCALE]]의 2%)의 [[DMG_MAGIC]]를 번개로 입힌다. \n \n R 사용 시 주변 모든 적을 [[SHIELD_BREAK]]시키고 275/400/525(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히며 0.5초간 [[SILENCE]]시킨다. \n (몬스터의 보호막은 제외) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "While R is not on [[COOLDOWN]], [[PASSIVE_BONUS]] causes Blitzcrank's basic attacks to leave [[DEBUFF_STACK]] on the target, which is [[STACK_CONSUME]]d by 1 every second, striking them with lightning for 50/100/150 (+30/40/50% [[AP_SCALE]]) (+2% of [[MANA_SCALE]]) [[DMG_MAGIC]]. \n \n Activating R [[SHIELD_BREAK]]s all nearby enemies and deals 275/400/525 (+100% [[AP_SCALE]]) [[DMG_MAGIC]], [[SILENCE]]ing them for 0.5 seconds. \n (Excludes monster shields.) \n \n {{ultCooldown}}-second [[COOLDOWN]].",
    },
  },

};

export default blitzcrank;
