import type { ChampData } from "../interactions/types";

const braum: ChampData = {
  id: "braum",
  skills: {
    P: ["ST_CONDITIONAL", "STUN"],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AR_MR_UP", "SEPARATOR", "DASH", "WALL_HOP"],
    E: ["E_FLASH", "DMG_REDUCE", "SEPARATOR", "DAMAGE_NULLIFY", "INTERCEPT_PROJECTILE"],
    R: ["AIRBORNE", "SLOW"],
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
      { label: { ko: "P 디버프 스택", en: "P Debuff Stack" }, tags: ["ON_HIT", "DEBUFF_STACK"] },
      { label: { ko: "P 기절", en: "P Stun" }, tags: ["STACK_CONSUME", "DMG_MAGIC", "STUN", "SEPARATOR", "ON_TARGET_CD"] },
      { label: { ko: "P 디버프 스택 중첩 불가상태, 평타 강화", en: "P Stack Lockout, Empowered Attack" }, tags: ["DMG_MAGIC", "ON_HIT"] },
    ] },
    
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SLOW", "SEPARATOR", "DEBUFF_STACK"],

    W: { phases: [
      { label: { ko: "W 돌진", en: "W Dash" }, tags: ["AR_MR_UP", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "W 아군 버프", en: "W Ally Buff" }, tags: ["AR_MR_UP"] },
    ] },

    E: ["BUFF_FORM", "LOCKED", "INTERCEPT_PROJECTILE", "SEPARATOR", "DAMAGE_NULLIFY", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "DMG_REDUCE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "AOE", "AIRBORNE", "SEPARATOR_NEWLINE", "SEPARATOR", "ZONE", "SLOW"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P의 [[DEBUFF]]는 [[BA]], [[Q]]로 발동. \n 캐릭터 아래에 얼음조각 칸이 4개 차면 \n [[DMG_MAGIC]]와 [[STUN]]. \n 아군의 [[ON_HIT]] 효과에도 스택이 쌓임. \n \n",

          "Q는 [[PROJECTILE]] 발사. \n [[SELF_MAXHP_SCALE]] 비례 [[DMG_MAGIC]]와 [[SLOW]], [[DEBUFF_STACK]] \n \n",

          "W는 아군에게 [[DASH]]하고 \n 브라움과 대상의 [[AR_MR_UP]] \n \n",

          "E는 방패를 들어 \n 처음 맞는 공격을 [[DAMAGE_NULLIFY]]. \n [[INTERCEPT_PROJECTILE]] 효과와 \n [[PROJECTILE]]에 대한 [[DMG_REDUCE]]. \n 디테일한 판정은 챔피언별로 상호작용 박스에 정리. \n \n",

          "R은 전방에 [[AOE]] [[DMG_MAGIC]]와 [[AIRBORNE]]. \n [[AOE]]는 [[ZONE]]으로 남아 [[DOT]] [[SLOW]].", 
          "[[AIRBORNE]]은 \n 처음 적중한 대상은 [[DISTANCE_SCALE]], [[LEVEL_SCALE]] 비례 효과 증가. \n 나머지는 0.6초 고정 [[AIRBORNE]].",
        ],

        en: [
          "P's [[DEBUFF]] is triggered by [[BA]] and [[Q]]. \n When the 4 ice fragment slots beneath the character fill up, \n it deals [[DMG_MAGIC]] and [[STUN]]s. \n Allies' [[ON_HIT]] effects also add stacks. \n \n",

          "Q fires a [[PROJECTILE]]. \n [[SELF_MAXHP_SCALE]]-based [[DMG_MAGIC]], [[SLOW]], and [[DEBUFF_STACK]] \n \n",

          "W [[DASH]]es to an ally \n and grants [[AR_MR_UP]] to both Braum and the target \n \n",

          "E raises the shield \n to [[DAMAGE_NULLIFY]] the first hit. \n Provides [[INTERCEPT_PROJECTILE]] \n and [[DMG_REDUCE]] against [[PROJECTILE]]s. \n Detailed interactions are listed per champion in the interaction box. \n \n",

          "R deals [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]] in front. \n The [[AOE]] remains as a [[ZONE]] that applies [[DOT]] [[SLOW]].",
          "[[AIRBORNE]]: \n the first target hit gets a longer effect based on [[DISTANCE_SCALE]] and [[LEVEL_SCALE]]. \n All others receive a fixed 0.6s [[AIRBORNE]].",
        ]

      },

      note2: {
        ko: [ 
        "E의 막을 수 있다의 개념은 두 가지로 정리함 \n1. [[DAMAGE_NULLIFY]] \n 브라움에게 가해지는 첫 피해를 무효. \n 단, [[PROJECTILE]]가 아니어도 적용.", 
        "2. [[INTERCEPT_PROJECTILE]] \n 아군에게 날아가는 [[PROJECTILE]]를 방패로 대신 맞아줌. \n [[TARGETED]], [[NON_TARGETED]] 모두 적용. \n [[PROJECTILE]]는 삭제되거나 브라움이 맞는 판정.", 

        "[[INTERCEPT_PROJECTILE]]으로 막아낸 스킬들의 CC효과는 대부분 유효.", 

        "E의 챔피언별 정보는 원래는 막을 수 없는 [[PROJECTILE]]를 \n 막을 수 있게 되는것을 중점적으로 기록함", 
        
        "E를 쓰고 존야를 쓰면 방패는 그대로 들고있지만 \n E 효과는 발동하지 않음.", 

        "초필살기 - WER 콤보 \n W로 [[DASH]]으로 날아갈 때 \n ER을 하면 R 모션이 캔슬되어 도착하자마 R을 씀. [[CLIP:https://www.youtube.com/shorts/9o-T23VzxxE?feature=share]]"
      ],
        en: [
          "E's \"can block\" concept is divided into two categories \n1. [[DAMAGE_NULLIFY]] \n Nullifies the first damage dealt to Braum. \n This applies even to non-[[PROJECTILE]] attacks.",
          "2. [[INTERCEPT_PROJECTILE]] \n Braum takes [[PROJECTILE]]s flying toward allies on his shield instead. \n Applies to both [[TARGETED]] and [[NON_TARGETED]]. \n The [[PROJECTILE]] is either deleted or counted as hitting Braum.",

          "Most CC effects of skills blocked by [[INTERCEPT_PROJECTILE]] still apply.",

          "Per-champion E info mainly records cases where normally unblockable [[PROJECTILE]]s \n become blockable.",

          "If you use E and then Zhonya's, Braum keeps holding up the shield \n but E's effect does not activate.",

          "Ultimate tech - WER combo \n While flying with W [[DASH]], \n casting ER cancels the R animation so R is cast the moment Braum arrives. [[CLIP:https://www.youtube.com/shorts/9o-T23VzxxE?feature=share]]",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

  // skillTooltip 근거: DDragon ko_KR(16.18.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Braum,
  // 최근 변경 패치 V26.04 — R 기본 피해량/쿨타임 최신 반영, ultCooldown 130/115/100과 일치 확인).
  // Q/W/E/R의 DDragon effectBurn/vars는 이름 기반 플레이스홀더(vars: [])라 위치 매핑이
  // 불가능해 위키 인포박스 수치로 채움.
  skillTooltip: {
    P: {
      ko: "브라움의 [[BA]]와 Q가 적중한 대상에게 [[DEBUFF_STACK]]을 4초간 유지되도록 남기며, 첫 중첩이 붙은 뒤로는 아군 챔피언의 [[BA]]도 이 스택을 쌓을 수 있습니다. \n \n 4스택이 쌓이면 [[STACK_CONSUME]]하여 [[LEVEL_SCALE]] 26~196의 [[DMG_MAGIC]]를 입히고 [[LEVEL_SCALE]] 1.25~1.75초 동안 [[STUN]]시킵니다. \n 이후 [[LEVEL_SCALE]] 8~4초 동안은 중첩이 다시 쌓이지 않는 대신, 브라움의 [[BA]]가 대상에게 [[ON_HIT]] 피해량의 40%(10.4~78.4, [[LEVEL_SCALE]])에 해당하는 추가 [[DMG_MAGIC]]를 입힙니다.",
      en: "Braum's [[BA]]s and Q leave a [[DEBUFF_STACK]] on the target hit that lasts 4 seconds; once the first stack is applied, allied champions' [[BA]]s can also add stacks. \n \n At 4 stacks, Braum [[STACK_CONSUME]]s them to deal [[LEVEL_SCALE]] 26~196 [[DMG_MAGIC]] and [[STUN]] for [[LEVEL_SCALE]] 1.25~1.75 seconds. \n Afterward, for [[LEVEL_SCALE]] 8~4 seconds stacks cannot be applied again, but Braum's [[BA]]s deal bonus [[DMG_MAGIC]] equal to 40% of the [[ON_HIT]] damage (10.4~78.4, [[LEVEL_SCALE]]) to the target.",
    },
    Q: {
      ko: "브라움이 방패에서 냉기를 뿜어내는 [[PROJECTILE]]를 날려 처음 맞는 적에게 75/120/165/210/255(+브라움 [[SELF_MAXHP_SCALE]] 비례 2.5%)의 [[DMG_MAGIC]]를 입히고 70%의 [[SLOW]]를 겁니다(2초에 걸쳐 감소). \n 이 스킬로 P의 [[DEBUFF_STACK]]이 1회 쌓입니다. \n \n 8/7.5/7/6.5/6초의 [[COOLDOWN]].",
      en: "Braum propels a freezing [[PROJECTILE]] from his shield, dealing 75/120/165/210/255 (+2.5% of Braum's [[SELF_MAXHP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit and applying a 70% [[SLOW]] (decaying over 2 seconds). \n This skill adds 1 stack of P's [[DEBUFF_STACK]]. \n \n 8/7.5/7/6.5/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "브라움이 [[TARGET_ALLY]] 챔피언이나 미니언에게 [[DASH]]합니다. \n 대상에게 도달하면 3초 동안 대상과 브라움 모두 [[AR_MR_UP]]를 얻습니다. \n 대상은 20/25/30/35/40(+대상의 추가 [[AR_MR_SCALE]] 비례 12%), 브라움은 20/25/30/35/40(+브라움의 추가 [[AR_MR_SCALE]] 비례 36%). \n \n 12/11/10/9/8초의 [[COOLDOWN]].",
      en: "Braum [[DASH]]es to a [[TARGET_ALLY]] champion or minion. \n On reaching the target, both the target and Braum gain [[AR_MR_UP]] for 3 seconds. \n The target gains 20/25/30/35/40 (+12% of the target's bonus [[AR_MR_SCALE]]), and Braum gains 20/25/30/35/40 (+36% of Braum's bonus [[AR_MR_SCALE]]). \n \n 12/11/10/9/8 second [[COOLDOWN]].",
    },
    E: {
      ko: "브라움이 3/3.25/3.5/3.75/4초 동안 방패를 들어 올려 선택한 방향에서 날아오는 적의 [[PROJECTILE]]를 가로막아 자신이 대신 맞고서 소멸시킵니다. \n \n 브라움이 막는 첫 번째 공격은 피해를 입히지 않으며, \n 이후 막는 [[PROJECTILE]]는 35/40/45/50/55%만큼 [[DMG_REDUCE]]됩니다. \n 방패를 들어 올리는 동안 브라움은 10%의 [[MS_UP]]와 [[GHOSTING]]를 얻습니다. \n \n 16/14/12/10/8초의 [[COOLDOWN]].",
      en: "Braum raises his shield for 3/3.25/3.5/3.75/4 seconds, intercepting enemy [[PROJECTILE]]s from the chosen direction, taking the hits himself and destroying them. \n \n The first attack Braum blocks deals no damage, \n and subsequent blocked [[PROJECTILE]]s are [[DMG_REDUCE]]d by 35/40/45/50/55%. \n While the shield is raised, Braum gains 10% [[MS_UP]] and [[GHOSTING]]. \n \n 16/14/12/10/8 second [[COOLDOWN]].",
    },
    R: {
      ko: "브라움이 지면을 내리쳐 전방에 균열을 만들어 [[AOE]] [[DMG_MAGIC]] 150/250/350(+60% [[AP_SCALE]])를 입히고 적을 [[AIRBORNE]] 상태로 만듭니다. \n \n 첫 번째로 맞은 대상은 브라움과의 [[DISTANCE_SCALE]]에 비례해 0.6~1/1.5/2초 동안, 다른 적들은 고정 0.6초 동안 [[AIRBORNE]] 됩니다. \n \n 균열은 4초 동안 유지되는 [[ZONE]]을 남겨 0.25초마다 40/50/60%의 [[SLOW]]를 적용합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Braum slams the ground, sending out a fissure in front of him that deals 150/250/350 (+60% [[AP_SCALE]]) [[AOE]] [[DMG_MAGIC]] and knocks enemies [[AIRBORNE]]. \n \n The first target hit is knocked up for 0.6~1/1.5/2 seconds based on [[DISTANCE_SCALE]] from Braum, while other enemies are [[AIRBORNE]] for a fixed 0.6 seconds. \n \n The fissure leaves a [[ZONE]] for 4 seconds that applies a 40/50/60% [[SLOW]] every 0.25 seconds. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default braum;
