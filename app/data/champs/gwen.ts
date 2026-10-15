import type { ChampData } from "../interactions/types";

const gwen: ChampData = {
  id: "gwen",
  skills: {
    P: ["ON_HIT", "DRAIN"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "UNTARGETABLE"],
    E: ["E_FLASH", "AA_RESET", "AS_UP", "RANGE_UP", "SEPARATOR", "DASH", "WALL_HOP"],
    R: ["R_FLASH", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_MAGIC", "ON_HIT", "DRAIN"],

    Q: { phases: [
      { label: { ko: "Q 패시브", en: "Q Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK"] },
      { label: { ko: "Q 액티브", en: "Q Active" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "ST_CONDITIONAL", "DMG_TRUE", "ON_HIT"] },
    ] },
    
    W: ["ZONE", "AR_MR_UP", "SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "UNTARGETABLE"],
    E: ["AS_UP", "RANGE_UP", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "ON_HIT", "ADDITIONAL"],
    R: ["DMG_MAGIC", "PIERCE", "PROJECTILE", "SKILL_RECAST", "SLOW", "SEPARATOR", "ON_HIT"],
  },

  notes: {
    skill: {
      note3: {
        ko: [],
        en: [] },
      note1: {

        ko: [
          "P는 [[BA]], Q 중심부, R [[PROJECTILE]]에 \n [[TARGET_MAXHP_SCALE]] 비례 [[DMG_MAGIC]]와 [[DRAIN]]. \n \n",

          "Q의 [[PASSIVE_BONUS]]는 \n [[BA]]를 때리면 체력바 밑에 [[BUFF_STACK]] (최대 4).", 
          "Q는 전방에 [[AOE]] [[DMG_MAGIC]] 가위질 공격. \n [[BUFF_STACK]] 만큼 [[STACK_CONSUME]] 하여 Q [[SKILL_REPEAT]]. \n 중앙 부분은 50% [[DMG_TRUE]] 전환되고 \n P의 [[ON_HIT]] 추가 적용. \n \n",

          "W는 안개를 생성 \n 안개에서 그웬은 [[AR_MR_UP]]. \n 그웬은 안개 밖의 적들에게 [[UNTARGETABLE]] 판정. \n 그웬이 범위를 벗어나거나 [[SKILL_RECAST]] 하면 W가 한번 따라옴. \n \n",

          "E는 [[DASH]]하고 [[BUFF]] 획득. \n 4초동안 [[BA]] [[EMPOWERED]]\n [[ON_HIT]] [[DMG_MAGIC]]와 [[AS_UP]], [[RANGE_UP]]. \n \n",

          "R1은 [[PIERCE]] [[PROJECTILE]] 1개 발사. \n [[SKILL_RECAST]]할 수 있고 \n R2는 3개, R3는 5개 발사. \n [[DMG_MAGIC]], [[SLOW]]와 \n P의 [[ON_HIT]] 추가 적용.",
        ],

        en: ["P adds, to [[BA]]s, Q's center, and R [[PROJECTILE]]s, \n [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]] and [[DRAIN]]. \n \n",
          "Q's [[PASSIVE_BONUS]]: \n hitting with [[BA]]s grants [[BUFF_STACK]]s below the health bar (max 4).",
          "Q is a forward [[AOE]] [[DMG_MAGIC]] snipping attack. \n [[STACK_CONSUME]]s [[BUFF_STACK]]s to [[SKILL_REPEAT]] Q that many times. \n The center converts 50% to [[DMG_TRUE]] \n and also applies P's [[ON_HIT]]. \n \n",
          "W creates a mist. \n Inside the mist, Gwen gains [[AR_MR_UP]]. \n Gwen is [[UNTARGETABLE]] to enemies outside the mist. \n If Gwen leaves the area or uses [[SKILL_RECAST]], W follows her once. \n \n",
          "E [[DASH]]es and grants a [[BUFF]]. \n For 4 seconds, [[BA]]s are [[EMPOWERED]]\n with [[ON_HIT]] [[DMG_MAGIC]], [[AS_UP]], and [[RANGE_UP]]. \n \n",
          "R1 fires 1 [[PIERCE]] [[PROJECTILE]]. \n It can be [[SKILL_RECAST]]; \n R2 fires 3, R3 fires 5. \n [[DMG_MAGIC]], [[SLOW]], and \n P's [[ON_HIT]] also apply."
        ]

      },

      note2: {
        ko: [
        "W는 범위 밖에 있는 적들에게 [[UNTARGETABLE]] 판정으로 \n 밖에서 날아오는 공격들을 맞지 않음. \n 레넥톤 Q처럼 근접 스킬도 범위 밖이라면 맞지 않음. \n 그웬에게 시전한 타겟팅 스킬도 날아오다 \n 그웬이 W를 키면 맞지 않음. \n 단, 타워데미지는 무시 불가."
      ],
        en: ["W makes Gwen [[UNTARGETABLE]] to enemies outside its area, \n so attacks coming from outside don't hit her. \n Even melee skills like Renekton's Q don't hit if cast from outside the area. \n Targeted skills cast on Gwen also miss mid-flight \n if Gwen activates W. \n However, tower damage cannot be ignored."]
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

  // skillTooltip 근거: DDragon ko_KR(16.20.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Gwen,
  // 스킬 수치 최근 변경 V26.16). DDragon effectBurn/vars가 비어 있어 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // generatedtip_passive_gwenp_tooltip)을 사용.
  skillTooltip: {
    P: {
      ko: "그웬의 [[BA]], Q의 중심부, R의 [[PROJECTILE]]에는 \n [[ON_HIT]] 효과가 추가로 적용됩니다. \n [[TARGET_MAXHP_SCALE]]의 1%(+주문력 100당 0.6%)에 해당하는 [[DMG_MAGIC]]를 추가로 입힙니다. \n 그웬은 이 스킬로 챔피언에게 입힌 피해량의 67%만큼 [[DRAIN]]합니다. (최대 12~40([[LEVEL_SCALE]] 비례)(+7% [[AP_SCALE]]))",
      en: "Gwen's [[BA]]s, the center of Q, and R [[PROJECTILE]]s \n additionally apply [[ON_HIT]] effects. \n They deal additional [[DMG_MAGIC]] equal to 1% (+0.6% per 100 AP) of [[TARGET_MAXHP_SCALE]]. \n Gwen [[DRAIN]]s 67% of the damage dealt to champions with this skill. (Max 12~40 (based on [[LEVEL_SCALE]]) (+7% [[AP_SCALE]]))",
    },
    Q: {
      ko: "[[PASSIVE_BONUS]]: 그웬이 적에게 [[BA]]를 적중시키면 가위질이 1회 중첩됩니다. ([[BUFF_STACK]], 최대 4회, 6초 동안 지속) \n \n 사용 시: 중첩된 가위질 횟수를 소모합니다([[STACK_CONSUME]]). \n 그웬이 한 번 가위질하여 10/14/18/22/26(+5% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, 중첩된 가위질 횟수만큼 다시 가위질한 후 마지막 가위질로 60/85/110/135/160(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 가위질할 때마다 중앙에 있는 적에게는 입히는 피해의 50%를 [[DMG_TRUE]]로 전환하고 적중 시 가위 난도질(P [[ON_HIT]])을 적용합니다. \n \n 미니언에게는 80%의 피해를 입힙니다. \n 체력이 20% 미만인 미니언은 감소한 피해 대신 추가 피해를 입습니다. \n \n 6.5/5.75/5/4.25/3.5초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: When Gwen lands a [[BA]] on an enemy, she gains 1 snip stack. ([[BUFF_STACK]], max 4, lasts 6 seconds) \n \n Active: Consumes stored snips ([[STACK_CONSUME]]). \n Gwen snips once, dealing 10/14/18/22/26 (+5% [[AP_SCALE]]) [[DMG_MAGIC]], snips again for each stored snip, then deals 60/85/110/135/160 (+35% [[AP_SCALE]]) [[DMG_MAGIC]] with the final snip. \n \n Each snip converts 50% of the damage to [[DMG_TRUE]] against enemies in the center and applies Thousand Cuts (P [[ON_HIT]]) on hit. \n \n Deals 80% damage to minions. \n Minions below 20% health take bonus damage instead of reduced damage. \n \n 6.5/5.75/5/4.25/3.5 second [[COOLDOWN]].",
    },
    W: {
      ko: "그웬이 신성한 안개([[ZONE]])를 소환하여 안개 밖에 있는 모든 적(포탑 제외)으로부터 [[UNTARGETABLE]] 상태가 됩니다. \n 이 효과는 4초 동안 또는 그웬이 안개를 떠날 때까지 지속됩니다. \n 안개 속에서는 [[GHOSTING]] 상태가 되고 \n 22/24/26/28/30(+7% [[AP_SCALE]])의 [[AR_MR_UP]]를 얻습니다. \n \n 이 스킬을 한 번 [[SKILL_RECAST]]하면 안개를 불러올 수 있습니다. \n 그웬이 처음으로 안개를 떠나려고 하면 스킬이 자동으로 [[SKILL_RECAST]]됩니다. \n \n 22/21/20/19/18초의 [[COOLDOWN]].",
      en: "Gwen summons Hallowed Mist ([[ZONE]]), becoming [[UNTARGETABLE]] to all enemies outside the mist (except turrets). \n This lasts for 4 seconds or until Gwen leaves the mist. \n Inside the mist, she is [[GHOSTING]] \n and gains 22/24/26/28/30 (+7% [[AP_SCALE]]) [[AR_MR_UP]]. \n \n [[SKILL_RECAST]] this skill once to call the mist to her. \n The skill automatically [[SKILL_RECAST]]s the first time Gwen tries to leave the mist. \n \n 22/21/20/19/18 second [[COOLDOWN]].",
    },
    E: {
      ko: "그웬이 [[DASH]]하며 4초 동안 [[BA]]를 [[EMPOWERED]]합니다. \n \n [[EMPOWERED]]된 [[BA]]는 30/42.5/55/67.5/80%의 [[AS_UP]], [[ON_HIT]] 시 15(+20% [[AP_SCALE]])의 [[DMG_MAGIC]], 75의 [[RANGE_UP]]을 얻습니다. \n 적에게 처음 적중 시 이 스킬의 재사용 대기시간을 25/35/45/55/65%만큼 돌려받습니다. ([[CDR]]) \n \n 13/12.5/12/11.5/11초의 [[COOLDOWN]].",
      en: "Gwen [[DASH]]es and [[EMPOWERED]]s her [[BA]]s for 4 seconds. \n \n [[EMPOWERED]] [[BA]]s gain 30/42.5/55/67.5/80% [[AS_UP]], 15 (+20% [[AP_SCALE]]) [[DMG_MAGIC]] [[ON_HIT]], and 75 [[RANGE_UP]]. \n The first hit on an enemy refunds 25/35/45/55/65% of this skill's cooldown. ([[CDR]]) \n \n 13/12.5/12/11.5/11 second [[COOLDOWN]].",
    },
    R: {
      ko: "첫 번째 사용: 바늘을 던져 적중한 모든 적에게 30/50/70(+10% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, 1.5초 동안 40/50/60% [[SLOW]]시키며, 가위 난도질(P [[ON_HIT]])을 적용합니다. \n 이 스킬은 6초 안에 최대 2회까지 추가로 [[SKILL_RECAST]]할 수 있습니다. (추가 재사용 대기시간 1초) \n \n 두 번째 사용: 바늘을 세 개 발사하여 90/150/210(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 세 번째 사용: 바늘을 다섯 개 발사하여 150/250/350(+50% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 바늘에 이미 맞은 적이 이후 사용에 다시 맞으면 [[SLOW]]가 15% 감소한 수치로 적용됩니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "First Cast: Throws a needle, dealing 30/50/70 (+10% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemies hit, [[SLOW]]ing them by 40/50/60% for 1.5 seconds, and applying Thousand Cuts (P [[ON_HIT]]). \n This skill can be [[SKILL_RECAST]] up to 2 more times within 6 seconds. (1 second between casts) \n \n Second Cast: Fires three needles, dealing 90/150/210 (+30% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Third Cast: Fires five needles, dealing 150/250/350 (+50% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n Enemies already hit by needles who are hit again by later casts receive a [[SLOW]] reduced by 15%. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default gwen;
