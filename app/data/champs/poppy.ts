import type { ChampData } from "../interactions/types";

const poppy: ChampData = {
  id: "poppy",
  skills: {
    P: ["ON_HIT", "DROP", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"],
    Q: ["Q_FLASH", "SLOW", "SEPARATOR", "ZONE", "SLOW"],
    W: ["MS_UP", "SEPARATOR", "AURA", "ANTI_DASH", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE", "SLOW", "GROUNDED"],
    E: ["E_FLASH", "KNOCKBACK", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "WALL_COLLISION", "STUN"],
    R: { phases: [
      { label: { ko: "R 길게", en: "R Charged" }, tags: ["KNOCKBACK"] },
      { label: { ko: "R 짧게", en: "R Tap" }, tags: ["R_FLASH", "AIRBORNE"] },
    ] },

  },

  vision: {
    P: ["POSITION_REVEAL"],
    Q: ["HIT_SOUND"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: ["REVEALED"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 방패 투척", en: "P Shield Throw" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "DROP"] },
      { label: { ko: "P 방패 줍기", en: "P Shield Pickup" }, tags: ["ST_CONDITIONAL", "SHIELD"] },
    ] },

    Q: { phases: [
      { label: { ko: "Q ", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SLOW"] },
      { label: { ko: "Q 폭발", en: "Q Burst" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ZONE", "SLOW"] },
    ] },

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["AR_MR_UP", "SEPARATOR", "ST_CONDITIONAL", "AR_MR_UP", "X2"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["MS_UP", "SEPARATOR", "AURA", "ANTI_DASH", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "KNOCKDOWN", "DMG_MAGIC", "AIRBORNE", "SLOW", "GROUNDED"] },
    ] },

    E: ["DMG_PHYSICAL", "TARGETED", "KNOCKBACK", "DASH", "WALL_HOP", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "WALL_COLLISION", "DMG_PHYSICAL", "STUN"],

    R: { phases: [
      { label: { ko: "R 길게", en: "R Charged" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "SKILL_CHARGED", "PROJECTILE", "PIERCE_MINION", "AOE", "SEPARATOR_NEWLINE", "SEPARATOR", "CANCELLABLE", "SEPARATOR", "KNOCKBACK"] },
      { label: { ko: "R 짧게", en: "R Tap" }
      , tags: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "AOE", "AIRBORNE"] },
    ] },
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[COOLDOWN]]. 준비되면 [[BA]] [[ON_HIT]] \n [[PROJECTILE]] 발사 [[DMG_MAGIC]], [[DROP]]. \n 주우면 [[SHIELD]] 획득. \n \n",

          "Q는 [[AOE]] [[DMG_PHYSICAL]]와 [[SLOW]] [[ZONE]] 생성. \n [[ZONE]]은 한번 더 같은 피해. \n \n",

          "W의 [[PASSIVE_BONUS]]는 [[AR_MR_UP]] %로 증가. \n 체력 40% 이하일 때 효과 2배.", 
          "W는 [[MS_UP]]와 [[ANTI_DASH]] [[AURA]] 생성. \n [[DASH]]이 막힌 대상은 [[AIRBORNE]], [[GROUNDED]], [[SLOW]], [[DMG_MAGIC]]. \n 디테일한 판정은 챔피언별로 상호작용 박스에 정리. \n \n",

          "E는 [[TARGETED]] 대상에게 [[DASH]]하여 [[DMG_PHYSICAL]], [[KNOCKBACK]]. \n [[WALL_COLLISION]] 시 [[STUN]], [[DMG_PHYSICAL]] 추가. \n \n",

          "R [[SKILL_CHARGED]]중일 때 뽀삐는 [[MS_DOWN]]. \n R은 짧게, 길게 누르는 효과가 다름. \n \n R(짧게) \n R은 [[AOE]] [[AIRBORNE]]과 절반의 [[DMG_PHYSICAL]]. \n \n R(길게) \n R에 손을 떼면 [[PIERCE_MINION]] [[PROJECTILE]]를 발사. \n 맞은 챔피언 주변 [[AOE]] [[DMG_PHYSICAL]]. \n 동시에 대상을 [[UNTARGETABLE]] [[KNOCKBACK]] 상태로 만들고 \n 상대 넥서스 방향, 거리는 [[SKILL_CHARGED]] 시간에 비례. \n \n [[SKILL_CHARGED]]을 오래도록 발사하지 않으면 취소. \n 30초의 [[COOLDOWN]] 발생.",
        ],

        en: [
          "P has [[COOLDOWN]]. Once ready: next [[BA]] is [[ON_HIT]] \n Fires a [[PROJECTILE]] for [[DMG_MAGIC]], creates a [[DROP]]. \n Pick it up for a [[SHIELD]]. \n \n",

          "Q creates [[AOE]] [[DMG_PHYSICAL]] and a [[SLOW]] [[ZONE]]. \n [[ZONE]] deals the same damage again. \n \n",

          "W's [[PASSIVE_BONUS]] increases [[AR_MR_UP]] by a %. \n Doubled when below 40% HP.",
          "W creates an [[MS_UP]] and [[ANTI_DASH]] [[AURA]]. \n Targets blocked from [[DASH]]ing are [[AIRBORNE]], [[GROUNDED]], [[SLOW]]ed, and take [[DMG_MAGIC]]. \n Detailed rulings are covered per champion in the interaction box. \n \n",

          "E [[DASH]]es to a [[TARGETED]] enemy for [[DMG_PHYSICAL]] and [[KNOCKBACK]]. \n On [[WALL_COLLISION]], adds [[STUN]] and bonus [[DMG_PHYSICAL]]. \n \n",

          "While [[SKILL_CHARGED]], Poppy is [[MS_DOWN]]. \n R has different effects when tapped or charged. \n \n R (Tap) \n R deals [[AOE]] [[AIRBORNE]] and half [[DMG_PHYSICAL]]. \n \n R (Charged) \n Releasing it fires a [[PIERCE_MINION]] [[PROJECTILE]]. \n [[AOE]] [[DMG_PHYSICAL]] around the champion hit. \n Also makes the target [[UNTARGETABLE]] and [[KNOCKBACK]]s them, \n toward the enemy nexus — distance scales with [[SKILL_CHARGED]] duration. \n \n Cancels if held too long without releasing. \n Triggers a 30 second [[COOLDOWN]].",
        ]

      },

      note2: {
        ko: [
        "[[E_FLASH]]로 [[INSEC_KICK]] 불가.", 
        "P는 [[LEVEL_SCALE]] [[COOLDOWN]]. \n 준비되면 [[BA]] [[RANGE_UP]] 350. \n [[PROJECTILE]] 발사 [[DMG_MAGIC]], [[DROP]]. \n 주우면 [[SHIELD]] 획득. \n 대상이 처치되면 [[DROP]]이 생기지 않고 즉시 효과 발동.",
        "Q는 지속[[SLOW]].", 
        "[[R_FLASH]]은 짧은 R만 가능.", 
        "W의 [[ANTI_DASH]]에 저지 당할 때 \n 몸이 이미 겹쳐져 있다면 각종 효과는 발동한 것으로 판정. \n \n 예) 레넥톤이 뽀삐에 붙어서 E를 쓰면 스킬이 유효하고 E [[CDR_RESET]]. \n 그리고 나서 뽀삐 W의 [[ANTI_DASH]]에 막혀 [[AIRBORNE]]과 [[GROUNDED]]. \n 이때 레넥톤이 [[CC_CLEANSE]]를 사용하면 레넥톤 E 사용 가능.", 
        "뽀삐 E는 [[DASH]] 중에서도 판정이 최고인 편."
      ],
        en: [
          "[[E_FLASH]] cannot [[INSEC_KICK]].",
          "P has [[LEVEL_SCALE]] [[COOLDOWN]]. \n Once ready, the next [[BA]] gains [[RANGE_UP]] of 350. \n Fires a [[PROJECTILE]] for [[DMG_MAGIC]] and creates a [[DROP]]. \n Picking it up grants a [[SHIELD]]. \n If the target is killed, no [[DROP]] is created and the effect triggers instantly.",
          "Q applies a continuous [[SLOW]].",
          "[[R_FLASH]] only works with the tapped R.",
          "When blocked by W's [[ANTI_DASH]], \n if the bodies are already overlapping, various effects are ruled as having triggered. \n \n Ex) If Renekton dashes into Poppy with E, the skill activates and E gets [[CDR_RESET]]. \n Then he's blocked by Poppy W's [[ANTI_DASH]], applying [[AIRBORNE]] and [[GROUNDED]]. \n If Renekton then uses [[CC_CLEANSE]], his E becomes usable again.",
          "Poppy's E has one of the highest interrupt priorities among [[DASH]]es.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. DDragon 자동 fetch 결과를
  // 초기값으로 가져온 뒤(P/W는 resolvePlaceholders 치환, Q/E/R은 DDragon
  // 위치 매핑 오류("0")가 있던 자리를) 공식 위키(wiki.leagueoflegends.com,
  // V26.16 기준) 수치로 정정하고 [[TAG]] 토큰을 넣은 최종 문장이다.
  // (예전엔 W에 placeholderOverrides로 숫자만 땜질했으나, 이렇게 문장
  // 전체를 하드코딩한 뒤로는 완전히 대체돼 필요 없어져서 제거함 —
  // CLAUDE.md "챔피언 skillTooltip 작성 규칙" 참고.)
  skillTooltip: {
    P: {
      ko: "뽀삐가 던진 방패가 대상을 맞히고 튕겨나갑니다. \n 뽀삐는 방패를 다시 주워 일시적인 [[SHIELD]] (11%~21% [[SELF_MAXHP_SCALE]] 비례) 효과를 얻을 수 있습니다. \n \n [[LEVEL_SCALE]] 16/12/8/6초의 [[COOLDOWN]].",
      en: "Poppy's thrown buckler hits the target and bounces off. \n Poppy can pick it up again to gain a temporary [[SHIELD]] (11%~21% [[SELF_MAXHP_SCALE]] scaling). \n \n 16/12/8/6 second [[COOLDOWN]] ([[LEVEL_SCALE]]).",
    },
    Q: {
      ko: "뽀삐가 땅을 힘껏 내려쳐 \n 30/55/80/105/130(+75% 추가 [[AD_SCALE]])(+[[SELF_MAXHP_SCALE]]의 7/7.5/8/8.5/9%)에 해당하는 [[DMG_PHYSICAL]]를 입히고 지대를 불안정하게 만듭니다. \n \n 불안정한 지대는 적을 20/23/26/29/32%(+[[SELF_BONUS_HP_SCALE]] 100당 0.8%)만큼 [[SLOW]]시키고 1초 뒤 폭발하여 30/55/80/105/130(+75% 추가 [[AD_SCALE]])(+[[TARGET_MAXHP_SCALE]]의 7/7.5/8/8.5/9%)에 해당하는 [[DMG_PHYSICAL]]를 다시 입힙니다. \n \n 8/7/6/5/4초의 [[COOLDOWN]].",
      en: "Poppy smashes the ground, \n dealing 30/55/80/105/130 (+75% bonus [[AD_SCALE]]) (+7/7.5/8/8.5/9% of [[SELF_MAXHP_SCALE]]) [[DMG_PHYSICAL]] and making the ground unstable. \n \n The unstable area [[SLOW]]s enemies by 20/23/26/29/32% (+0.8% per 100 [[SELF_BONUS_HP_SCALE]]) and erupts after 1 second, dealing 30/55/80/105/130 (+75% bonus [[AD_SCALE]]) (+7/7.5/8/8.5/9% of [[TARGET_MAXHP_SCALE]]) [[DMG_PHYSICAL]] again. \n \n 8/7/6/5/4 second [[COOLDOWN]].",
    },
    W: {
      ko: "기본 지속 효과: 뽀삐가 16%의 [[AR_MR_UP]]를 추가로 얻습니다. 뽀삐의 체력이 40% 미만일 때는 효과가 두 배로 늘어납니다. \n  \n 사용 시: 뽀삐의 [[MS_UP]]가 40% 증가하고 [[AURA]]를 둘러 2초 동안 주변에서 돌진하는 적을 막습니다([[ANTI_DASH]]). \n 가로막힌 적은 2초 동안 이동 스킬을 사용할 수 없고([[GROUNDED]]) 25% [[SLOW]]되며 70/110/150/190/230의 [[DMG_MAGIC]]를 입습니다. \n \n 20/18/16/14/12초의 [[COOLDOWN]].",
      en: "Passive: Poppy gains an additional 16% [[AR_MR_UP]]. This bonus is doubled if Poppy is below 40% Health. \n  \n Active: Poppy's [[MS_UP]] increases by 40% and creates an [[AURA]] for 2 seconds that blocks nearby dashing enemies ([[ANTI_DASH]]). \n Enemies stopped this way cannot use movement abilities for 2 seconds ([[GROUNDED]]), are [[SLOW]]ed by 25%, and take 70/110/150/190/230 [[DMG_MAGIC]]. \n \n 20/18/16/14/12 second [[COOLDOWN]].",
    },
    E: {
      ko: "뽀삐가 [[TARGETED]] 대상에게 [[DASH]]하여 40/60/80/100/120(+60% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 [[KNOCKBACK]]합니다. \n [[WALL_COLLISION]] 시 대상을 1.6/1.7/1.8/1.9/2초 동안 [[STUN]]시키고 40/60/80/100/120(+60% 추가 [[AD_SCALE]])의 추가 [[DMG_PHYSICAL]]를 입힙니다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
      en: "Poppy [[DASH]]es to a [[TARGETED]] enemy, dealing 40/60/80/100/120 (+60% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and [[KNOCKBACK]]s them. \n On [[WALL_COLLISION]], [[STUN]]s the target for 1.6/1.7/1.8/1.9/2 seconds and deals an additional 40/60/80/100/120 (+60% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n 14/13/12/11/10 second [[COOLDOWN]].",
    },
    R: {
      ko: "충전 시작 시: 뽀삐가 최대 4초 동안 망치를 [[SKILL_CHARGED]]하고 자신을 15% [[SLOW]]시킵니다. 충전을 취소하면 30초의 [[COOLDOWN]]이 부여됩니다. \n  \n 사용 시(0.5초 이상 충전한 뒤 발사): 뽀삐가 지면에 강력한 일격을 날려 균열을 일으킵니다. \n 처음 적중한 적 챔피언과 주변 적은 200/300/400(+90% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입고 최대 3400 거리만큼 [[KNOCKBACK]]되며, 그동안 [[UNTARGETABLE]] 상태가 됩니다. 균열의 길이와 적을 밀어내는 거리는 [[SKILL_CHARGED]] 시간에 비례합니다. \n  \n 충전하지 않고 바로(0.5초 미만) 사용할 경우 100/150/200(+45% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 적을 1초 동안 [[AIRBORNE]] 상태로 만듭니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Begin Casting: Poppy charges her hammer ([[SKILL_CHARGED]]) for up to 4 seconds, [[SLOW]]ing herself by 15%. Canceling the charge grants a 30 second [[COOLDOWN]]. \n  \n Release (after charging for at least 0.5 seconds): Poppy smashes the ground, creating a shockwave. \n The first champion hit and surrounding enemies take 200/300/400 (+90% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and are pushed back ([[KNOCKBACK]]) up to 3400 units, becoming [[UNTARGETABLE]] while airborne. The range and Knock Back distance scale with [[SKILL_CHARGED]] duration. \n  \n An uncharged swing (released within 0.5 seconds) deals 100/150/200 (+45% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] and knocks the target [[AIRBORNE]] for 1 second. \n \n {{ultCooldown}} second [[COOLDOWN]] (at levels 6/11/16).",
    },
  },

};

export default poppy;
