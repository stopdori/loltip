import type { ChampData } from "../interactions/types";

const draven: ChampData = {
  id: "draven",
  skills: {
    P: ["STACKING", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"],
    Q: ["ST_CONDITIONAL", "DROP"],
    W: ["AS_UP", "MS_UP", "GHOSTING", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"],
    E: ["E_FLASH", "SEPARATOR", "KNOCKBACK", "SLOW"],
    R: ["SKILL_RECAST", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["STACKING", "SEPARATOR", "ST_CONDITIONAL", "STACK_CONSUME"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["BUFF_STACK"] },
      { label: { ko: "Q 회전 도끼", en: "Q Spinning Axe" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "SEPARATOR", "ST_CONDITIONAL", "DROP"] },
    ] },

    W: ["AS_UP", "MS_UP", "GHOSTING", "SEPARATOR", "ST_CONDITIONAL", "CDR_RESET"],

    E: ["DMG_PHYSICAL", "TIMING_CAST", "PIERCE", "PROJECTILE", "SEPARATOR", "KNOCKBACK", "SLOW"],

    R: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "SKILL_RECAST", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "EXECUTE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[ON_KILL]] 또는 Q의 [[DROP]]을 주우면 환호([[STACKING]]) 1개.", 
          "챔피언 [[ON_KILL]] [[STACKING]]을 소모하여 \n 25 + [[STACKING]]의 골드 획득. \n 드레이븐이 사망하면 [[STACKING]]의 절반 소멸. \n \n",

          "Q는 다음 [[BA]]를 [[EMPOWERED]]. \n 공격하면 도끼가 하늘로 튕겼다 떨어짐. \n 바닥에 떨어질 때 받으면 Q를 돌려 줌. [[DROP]]", 
          "튕기는 방향은 대체로 투사체가 적중할 때 \n 드레이븐이 바라보는 방향으로 떨어짐. \n \n",

          "W는 [[AS_UP]], [[MS_UP]]에 [[GHOSTING]]. \n Q의 [[DROP]]을 받아내면 W [[CDR_RESET]]. \n \n",

          "E는 전방에 [[PIERCE]] [[PROJECTILE]]를 발사. \n [[DMG_PHYSICAL]]와 [[SLOW]] \n [[PROJECTILE]] 좌우로 [[KNOCKBACK]]. \n \n",

          "R은 사거리 [[GLOBAL]]의 [[PIERCE]] [[PROJECTILE]]를 발사. \n 적에게 맞을수록 피해 감소. (최소 50%) \n [[SKILL_RECAST]] 또는 적 챔피언 적중 시 되돌아옴.", 
          "R로 적 챔피언에게 피해를 줄 때 \n 피해를 입힌 챔피언의 체력이 [[STACKING]]보다 낮으면 [[EXECUTE]].",
        ],

        en: [
          "P grants 1 Adoration ([[STACKING]]) [[ON_KILL]] or when picking up Q's [[DROP]].",
          "On champion [[ON_KILL]], consumes [[STACKING]] \n to gain 25 + [[STACKING]] gold. \n If Draven dies, half of the [[STACKING]] is lost. \n \n",
          "Q makes the next [[BA]] [[EMPOWERED]]. \n On attack, the axe bounces into the air and falls. \n Catching it as it lands returns Q. [[DROP]]",
          "The axe generally lands \n in the direction Draven is facing when the projectile hits. \n \n",
          "W grants [[AS_UP]], [[MS_UP]], and [[GHOSTING]]. \n Catching Q's [[DROP]] triggers a W [[CDR_RESET]]. \n \n",
          "E fires a [[PIERCE]] [[PROJECTILE]] forward. \n [[DMG_PHYSICAL]] and [[SLOW]] \n [[KNOCKBACK]] to either side of the [[PROJECTILE]]. \n \n",
          "R fires a [[PIERCE]] [[PROJECTILE]] with [[GLOBAL]] range. \n Damage decreases with each enemy hit. (Minimum 50%) \n Returns on [[SKILL_RECAST]] or on hitting an enemy champion.",
          "When R damages an enemy champion, \n if the damaged champion's health is lower than the [[STACKING]], [[EXECUTE]].",
        ]

      },

      note2: {
        ko: [
        "Q는 [[AA_RESET]] 불가.",
        "고수는 Q를 하늘에 1개, 손에 2개 총 3개를 유지 함.",
        "드레이븐 R [[EXECUTE]] 조건은\n R로 피해를 준 다음 대상의 남은 체력이 \n 드레이븐 스택보다 낮으면 처형.\n예) 대상 체력 1000, R 데미지 300, 스택이 700 이면 [[EXECUTE]].",
      ],
        en: [
          "Q does not [[AA_RESET]].",
          "Experts maintain 1 axe in the air and 2 in hand — 3 total.",
          "Draven's R [[EXECUTE]] condition:\n after R deals damage, if the target's remaining HP \n is lower than Draven's stacks, they are executed.\nExample: target HP 1000, R damage 300, stacks 700 → [[EXECUTE]].",
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

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Draven,
  // 스킬 수치 최근 변경 V26.13). W/E는 DDragon effectBurn, P/Q/R은 위키 본문/템플릿 수치로 채움.
  // R 명중당 피해 감소량은 위키에 별도 수치가 없어(100%~50%로만 표기) 최소치만 표기.
  skillTooltip: {
    P: {
      ko: "드레이븐이 회전 도끼를 받아내거나 미니언 또는 몬스터를 처치하고 포탑을 철거하면 팬들의 환호를 받습니다. \n 적 챔피언을 처치하면 지금까지 얻은 팬들의 환호에 비례해 추가 골드(25+중첩당 2)를 획득합니다.",
      en: "Draven gains his fans' Adoration when he catches a Spinning Axe, kills a minion or monster, or destroys a turret. \n Killing an enemy champion grants bonus gold based on the Adoration gained so far (25 + 2 per stack).",
    },
    Q: {
      ko: "드레이븐이 회전 도끼를 준비해 다음 [[BA]] [[EMPOWERED]]하여 추가로 40/45/50/55/60(+75/85/95/105/115% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 도끼가 공중으로 튕깁니다. ([[DROP]]) \n 드레이븐이 회전 도끼를 잡으면 다시 회전 도끼를 준비합니다. \n \n 드레이븐은 한 번에 2개의 회전 도끼를 들 수 있습니다. \n \n 12/11/10/9/8초의 [[COOLDOWN]].",
      en: "Draven readies a Spinning Axe, making his next [[BA]] [[EMPOWERED]] to deal an additional 40/45/50/55/60 (+75/85/95/105/115% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]], and the axe bounces into the air. ([[DROP]]) \n If Draven catches the Spinning Axe, he readies another one. \n \n Draven can hold 2 Spinning Axes at once. \n \n 12/11/10/9/8 second [[COOLDOWN]].",
    },
    W: {
      ko: "드레이븐이 [[GHOSTING]] 상태가 되며 50/55/60/65/70%의 [[MS_UP]]를 얻었다가 1.5초에 걸쳐 원래대로 돌아옵니다. \n 3초 동안 20/25/30/35/40%의 [[AS_UP]]를 얻습니다. \n \n 드레이븐이 회전 도끼를 잡으면 쿨타임 초기화([[CDR_RESET]]) 됩니다. \n \n 12초의 [[COOLDOWN]].",
      en: "Draven becomes [[GHOSTING]] and gains 50/55/60/65/70% [[MS_UP]], decaying over 1.5 seconds. \n He gains 20/25/30/35/40% [[AS_UP]] for 3 seconds. \n \n Catching a Spinning Axe resets this skill's cooldown ([[CDR_RESET]]). \n \n 12 second [[COOLDOWN]].",
    },
    E: {
      ko: "드레이븐이 수평으로 도끼를 던져 75/110/145/180/215(+50% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 [[KNOCKBACK]]시키며 2초 동안 20/25/30/35/40% [[SLOW]]시킵니다. \n \n 16/15/14/13/12초의 [[COOLDOWN]].",
      en: "Draven throws his axes sideways, dealing 75/110/145/180/215 (+50% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]], [[KNOCKBACK]]ing enemies, and [[SLOW]]ing them by 20/25/30/35/40% for 2 seconds. \n \n 16/15/14/13/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "드레이븐이 200/300/400(+110/130/150% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히는 대형 도끼 2개를 투척합니다. \n [[ON_CHAMP_HIT]] 또는 [[SKILL_RECAST]]하면 도끼가 드레이븐에게 돌아옵니다. \n 적에게 명중할 때마다 피해량이 감소합니다(최소 50%). \n \n 적 챔피언이 죽음의 소용돌이에 피해를 입어 체력이 드레이븐의 현재 드레이븐의 리그 중첩 수 이하가 되면 드레이븐이 해당 챔피언을 [[EXECUTE]]합니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Draven hurls 2 massive axes that deal 200/300/400 (+110/130/150% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n The axes return to Draven on [[ON_CHAMP_HIT]] or [[SKILL_RECAST]]. \n Damage decreases with each enemy hit (minimum 50%). \n \n If Whirling Death's damage leaves an enemy champion's health at or below Draven's current League of Draven stacks, Draven [[EXECUTE]]s that champion. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default draven;
