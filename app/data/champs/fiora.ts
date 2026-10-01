import type { ChampData } from "../interactions/types";

const fiora: ChampData = {
  id: "fiora",
  skills: {
    P: ["MARK", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "HEAL"],
    Q: ["DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "CDR"],
    W: ["INVULNERABLE", "CC_IMMUNE", "CRIPPLE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
    E: ["AA_RESET", "AS_UP", "SEPARATOR", "SLOW", "SEPARATOR", "CRIT"],
    R: ["R_FLASH", "MARK", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
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
      { label: { ko: "P 급소", en: "P Vital" }, tags: ["ST_CONDITIONAL", "MARK"] },
      { label: { ko: "P 급소 발동", en: "P Vital Proc" }, tags: ["MARK_CONSUME", "DMG_TRUE", "HEAL", "MS_UP"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q 돌진", en: "Q Dash" }, tags: ["DASH", "WALL_HOP"] },
      { label: { ko: "Q 공격", en: "Q Strike" }, tags: ["DMG_PHYSICAL", "ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "CDR"] },
    ] },

    W: { phases: [
      { label: { ko: "W 방어 태세", en: "W Parry Stance" }, tags: ["INVULNERABLE", "CC_IMMUNE", "TIMING_AFTERCAST"] },
      { label: { ko: "W 반격", en: "W Counterstrike" }, tags: ["ST_DELAYED", "SEPARATOR", "DMG_MAGIC", "PIERCE_MINION", "PROJECTILE", "SLOW", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "STUN"] },
    ] },

    E: { phases: [
      { label: { ko: "E 버프", en: "E Buff" }, tags: ["AA_RESET", "BUFF", "AS_UP"] },
      { label: { ko: "E 1타", en: "E 1st Hit" }, tags: ["ON_HIT", "SLOW", "SEPARATOR", "BUFF"] },
      { label: { ko: "E 2타", en: "E 2nd Hit" }, tags: ["ON_HIT", "CRIT"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["TARGETED", "DEBUFF", "SEPARATOR", "MARK", "X4"] },
      { label: { ko: "R 디버프", en: "R Debuff" }, tags: ["AOE", "P", "MS_UP"] },
      { label: { ko: "R 회복 장판", en: "R Healing Zone" }, tags: ["ST_CONDITIONAL", "ZONE", "HEAL"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 근처 적 챔피언의 동서남북 방향 중 \n 한 곳에 급소([[MARK]])를 드러냄. \n 급소 공격 시 [[DMG_TRUE]], [[MS_UP]], [[HEAL]]. \n 급소가 사라지거나 발동하면 새로운 방향에서 급소 생성. \n \n",

          "Q는 [[DASH]]하고 도착할 때 근처 적을 공격. \n [[DMG_PHYSICAL]]와 [[ON_HIT]] 효과 적용. \n Q로 공격하면 [[CDR]] 50%. \n \n",

          "W는 [[INVULNERABLE]], [[CC_IMMUNE]]이 되고. \n 잠시 후 전방으로 [[PIERCE_MINION]] [[SINGLE]] [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[SLOW]], [[CRIPPLE]].", 
          "[[INVULNERABLE]] 중에 [[IMMOBILIZING]]를 무효화 했다면 \n [[SLOW]] 대신 [[STUN]].", 
          "단, [[INVULNERABLE]]은 타워 데미지를 막을 수 없음. \n 디테일한 판정은 챔피언별로 하단 박스에 정리. \n \n",

          "E는 [[BUFF]] 획득. \n [[BUFF]]는 [[AS_UP]]와 다음 [[BA]] [[EMPOWERED]]. \n 1타 적중 시 [[SLOW]]와 다시 [[BUFF]] 획득. \n 2타 적중 시 [[CRIT]] 적용. \n [[BUFF]]는 사라짐. \n \n",

          "R의 [[PASSIVE_BONUS]]는 \n 급소 적중 시 [[MS_UP]] 효과를 [[EMPOWERED]].", 
          "R은 대상에게 동서남북 4개의 급소와 주변 [[AOE]] 생성. \n [[AOE]] 내에서 P의 [[MS_UP]] 효과가 항상 발동.", 
          "급소 4개가 적중하거나 \n 1개라도 적중하고 대상이 사망하면 [[HEAL]] [[ZONE]] 생성.",
        ],

        en: [
          "P reveals a Vital on nearby enemy champions \n in one of the four cardinal directions ([[MARK]]). \n Striking the Vital grants [[DMG_TRUE]], [[MS_UP]], and [[HEAL]]. \n When a Vital disappears or is triggered, a new one appears from a different direction. \n \n",
          "Q [[DASH]]es and strikes a nearby enemy on arrival. \n Deals [[DMG_PHYSICAL]] and applies [[ON_HIT]] effects. \n Hitting with Q grants 50% [[CDR]]. \n \n",
          "W makes Fiora [[INVULNERABLE]] and [[CC_IMMUNE]]. \n Shortly after, she fires a [[PIERCE_MINION]] [[SINGLE]] [[PROJECTILE]] forward. \n [[DMG_MAGIC]], [[SLOW]], and [[CRIPPLE]].",
          "If [[IMMOBILIZING]] was negated while [[INVULNERABLE]], \n applies [[STUN]] instead of [[SLOW]].",
          "However, [[INVULNERABLE]] cannot block tower damage. \n Detailed interactions are listed per champion in the box below. \n \n",
          "E grants a [[BUFF]]. \n The [[BUFF]] grants [[AS_UP]] and makes the next [[BA]] [[EMPOWERED]]. \n The 1st hit applies [[SLOW]] and grants the [[BUFF]] again. \n The 2nd hit applies [[CRIT]]. \n The [[BUFF]] then disappears. \n \n",
          "R's [[PASSIVE_BONUS]] makes \n the [[MS_UP]] effect from striking a Vital [[EMPOWERED]].",
          "R creates 4 Vitals in the four directions on the target and an [[AOE]] around them. \n Inside the [[AOE]], P's [[MS_UP]] effect is always active.",
          "If all 4 Vitals are struck, \n or at least 1 is struck and the target dies, a [[HEAL]] [[ZONE]] is created.",
        ]

      },

      note2: {
        ko: [
          "Q는 [[DASH]] 중에 다른 스킬 사용 가능.",
          "Q는 대상이 시야에 보이지 않아도 공격 가능. \n 단, 와드는 반드시 시야가 있어야 공격 가능.",  
          "W의 [[INVULNERABLE]]으로 점화, 장로 [[EXECUTE]] 등도 막을 수 있음.", 
          "R은 사이온 P의 [[REVIVE]]에 사용할 수 없음.", 
          "R의 [[HEAL]] [[ZONE]]은 [[UNTARGETABLE]] 대상을 치료하지 않음.",        
      ],
        en: [
          "Other skills can be used during Q's [[DASH]].",
          "Q can attack targets even when they aren't in vision. \n However, wards must be in vision to be attacked.",
          "W's [[INVULNERABLE]] can also block Ignite, Elder Dragon [[EXECUTE]], etc.",
          "R cannot be used on Sion's P [[REVIVE]].",
          "R's [[HEAL]] [[ZONE]] does not heal [[UNTARGETABLE]] targets.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 90,
    16: 70,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Fiora,
  // 최근 변경 V26.19). DDragon effectBurn/vars가 비어 있어 위키 본문/템플릿 수치로 채움.
  // P는 DDragon passive.description이 요약본이라 인게임 원문(CDragon ko_kr lol.stringtable의
  // spell_fiorapassive_tooltip)을 사용.
  // R 급소 4개 총 고정 피해는 위키에 별도 수치가 없어 P 급소 피해(3%+추가 공격력 100당 4%)×4로 계산한 값.
  skillTooltip: {
    P: {
      ko: "피오라가 적 챔피언의 급소([[MARK]])를 찾아냅니다. \n 급소는 적 챔피언 기준 동서남북 중 한 방향에서 나타납니다. \n \n [[BA]]나 스킬로 이 급소를 가격하면 [[TARGET_MAXHP_SCALE]]의 3%(+추가 공격력 100당 4%)에 해당하는 [[DMG_TRUE]]를 추가로 입히며 피오라가 20/30/40/50%(R의 [[SKILL_LEVEL_SCALE]] 비례)의 [[MS_UP]]를 얻었다가 1.85초에 걸쳐 원래대로 돌아오고 체력을 35~100([[LEVEL_SCALE]] 비례) [[HEAL]]합니다. \n \n 15초가 지나거나, 대상과의 거리가 멀어지거나, 피오라가 급소를 가격하면 새로운 급소가 드러납니다.",
      en: "Fiora detects an enemy champion's Vital ([[MARK]]). \n Vitals appear in one of the four cardinal directions relative to the enemy champion. \n \n Hitting the Vital with a [[BA]] or skill deals additional [[DMG_TRUE]] equal to 3% (+4% per 100 bonus AD) of [[TARGET_MAXHP_SCALE]], grants Fiora 20/30/40/50% (based on R's [[SKILL_LEVEL_SCALE]]) [[MS_UP]] decaying over 1.85 seconds, and [[HEAL]]s her for 35~100 (based on [[LEVEL_SCALE]]). \n \n A new Vital is revealed after 15 seconds, when she moves far from the target, or when Fiora strikes the Vital.",
    },
    Q: {
      ko: "피오라가 한 방향으로 [[DASH]]하며 가장 가까운 적이나 와드, 구조물을 공격해 70/80/90/100/110(+90/95/100/105/110% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 이 공격은 범위 안의 적의 상태(급소, 거리, 처치 가능)에 따라 우선순위가 달라집니다. \n \n 피오라가 적을 공격하면 이 스킬의 재사용 대기시간이 50% 감소합니다. ([[CDR]]) \n \n 이 스킬은 [[ON_HIT]] 효과가 적용됩니다. \n \n 13/11.25/9.5/7.75/6초의 [[COOLDOWN]].",
      en: "Fiora [[DASH]]es in a direction and strikes the nearest enemy, ward, or structure, dealing 70/80/90/100/110 (+90/95/100/105/110% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n The strike's priority depends on the state of enemies in range (Vitals, distance, killable). \n \n If Fiora hits an enemy, this skill's cooldown is reduced by 50%. ([[CDR]]) \n \n This skill applies [[ON_HIT]] effects. \n \n 13/11.25/9.5/7.75/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "피오라가 0.75초 동안 받는 모든 공격과 [[IMMOBILIZING]] 효과, 해로운 효과를 막아낸 다음([[RIPOSTE]]) 검을 찌릅니다. \n 검은 처음 적중한 챔피언에게 110/150/190/230/270(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고 \n 2초 동안 25% [[SLOW]], 25% [[CRIPPLE]]를 적용합니다. \n \n 피오라가 [[IMMOBILIZING]] 효과를 막아낼 경우 \n 찔린 적은 [[SLOW]] 대신 [[STUN]]합니다. \n \n 24/22/20/18/16초의 [[COOLDOWN]].",
      en: "Fiora parries all incoming attacks, [[IMMOBILIZING]] effects, and harmful effects for 0.75 seconds ([[RIPOSTE]]), then stabs. \n The stab deals 110/150/190/230/270 (+100% [[AP_SCALE]]) [[DMG_MAGIC]] to the first champion hit \n and applies 25% [[SLOW]] and 25% [[CRIPPLE]] for 2 seconds. \n \n If Fiora parries an [[IMMOBILIZING]] effect, \n the stabbed enemy is [[STUN]]ned instead of [[SLOW]]ed. \n \n 24/22/20/18/16 second [[COOLDOWN]].",
    },
    E: {
      ko: "피오라는 다음 두 번의 [[BA]]에 대해 50/60/70/80/90%의 [[AS_UP]]를 얻습니다. \n 첫 번째 [[BA]]는 1초 동안 30% [[SLOW]]시킵니다. \n 두 번째 [[BA]]는 100% [[CRIT]]가 발동하여 160/170/180/190/200%의 피해를 입힙니다. \n \n 11/10/9/8/7초의 [[COOLDOWN]].",
      en: "Fiora gains 50/60/70/80/90% [[AS_UP]] for her next two [[BA]]s. \n The first [[BA]] [[SLOW]]s by 30% for 1 second. \n The second [[BA]] is a guaranteed [[CRIT]], dealing 160/170/180/190/200% damage. \n \n 11/10/9/8/7 second [[COOLDOWN]].",
    },
    R: {
      ko: "[[PASSIVE_BONUS]]: 치명적인 검무(P)의 [[MS_UP]] 효과가 추가로 10/20/30% 상승합니다. (총 20/30/40/50%) \n \n 사용 시: 피오라가 챔피언의 급소 네 군데를 다 드러내 최대 [[TARGET_MAXHP_SCALE]]의 12%(+추가 공격력 100당 16%)에 해당하는 [[DMG_TRUE]]를 입히고 대상 근처에서 치명적인 검무의 [[MS_UP]] 효과를 얻습니다. \n \n 피오라가 8초 내에 급소 네 군데를 모두 가격하거나 한 번이라도 급소를 공격한 뒤 대상이 사망할 경우 \n 5초 동안 [[HEAL]] [[ZONE]]을 생성하여 피오라와 아군 챔피언이 초당 80/105/130(+70% 추가 [[AD_SCALE]])씩 체력을 [[HEAL]]합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: The [[MS_UP]] from Duelist's Dance (P) is increased by an additional 10/20/30%. (20/30/40/50% total) \n \n Active: Fiora reveals all four Vitals on a champion, dealing up to 12% (+16% per 100 bonus AD) of [[TARGET_MAXHP_SCALE]] as [[DMG_TRUE]], and gains Duelist's Dance [[MS_UP]] while near the target. \n \n If Fiora strikes all four Vitals within 8 seconds, or the target dies after she has struck at least one Vital, \n she creates a [[HEAL]] [[ZONE]] for 5 seconds that [[HEAL]]s Fiora and allied champions for 80/105/130 (+70% bonus [[AD_SCALE]]) per second. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default fiora;
