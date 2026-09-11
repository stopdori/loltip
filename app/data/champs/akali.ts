import type { ChampData } from "../interactions/types";

const akali: ChampData = {
  id: "akali",
  skills: {
    P: ["ST_CONDITIONAL", "RANGE_UP", "ON_HIT"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],
    W: ["MS_UP", "MAX_ENERGY_UP", "SEPARATOR", "ST_CONDITIONAL", "INVISIBILITY"],

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["E_FLASH", "DASH", "WALL_HOP", "TRUE_SIGHT", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["E_FLASH", "DASH", "WALL_HOP"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["R_FLASH", "DASH", "WALL_HOP", "SEPARATOR", "SKILL_RECAST"] },
      { label: { ko: "R2", en: "R2" }, tags: ["R_FLASH", "DASH", "WALL_HOP"] },
    ] },
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL", "HIT_INDICATOR"],
    W: [],
    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["TRUE_SIGHT"] },
      { label: { ko: "E2", en: "E2" }, tags: ["POSITION_REVEAL"] },
    ] },
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["POSITION_REVEAL"] },
      { label: { ko: "R2", en: "R2" }, tags: ["POSITION_REVEAL"] },
    ] },
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 장판", en: "P Zone" }, tags: ["ST_CONDITIONAL", "ZONE", "SEPARATOR", "ST_CONDITIONAL", "EMPOWERED", "BA"] },
      { label: { ko: "P 강화 평타", en: "P Empowered Attack" }, tags: ["DMG_MAGIC", "RANGE_UP", "ON_HIT"] },
    ] },
    
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "PIERCE", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "SLOW"],

    W: { phases: [
      { label: { ko: "W 버프", en: "W Buff" }, tags: ["BUFF_FORM", "MS_UP", "MAX_ENERGY_UP"] },
      { label: { ko: "W 연막", en: "W Shroud" }, tags: ["ZONE", "SEPARATOR", "ST_CONDITIONAL", "INVISIBILITY"]},
    ] },

    E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "MARK", "TRUE_SIGHT", "SEPARATOR_NEWLINE", "SEPARATOR", "DASH", "WALL_HOP", "SEPARATOR", "ST_CONDITIONAL", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["MARK_CONSUME", "DMG_MAGIC", "TIMING_CAST", "HOMING", "SEPARATOR", "DASH", "WALL_HOP"]},
    ] },

    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SKILL_RECAST", "SEPARATOR", "DASH", "WALL_HOP"] },
      { label: { ko: "R2", en: "R2"  }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "DASH", "WALL_HOP"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
        "스킬 적중 시 [[ZONE]] 생성. \n 아칼리가 [[ZONE]]을 벗어나면 [[BA]] [[EMPOWERED]] \n [[RANGE_UP]], [[ON_HIT]] [[DMG_MAGIC]]. \n \n",

        "Q는 [[PIERCE]] [[PROJECTILE]] 발사 [[DMG_MAGIC]]. \n 끝에 맞히면 [[SLOW]] \n \n",

        "W(장막)를 사용하면 \n 일시적으로 [[MAX_ENERGY_UP]] 100 증가. \n 현재 기력도 100 증가. \n W의 [[ZONE]] 위에 서 있으면 [[INVISIBILITY]]. \n \n",

        "E1은 [[PROJECTILE]] 발사. \n 적중하면 [[DMG_MAGIC]]와 [[TRUE_SIGHT]]. \n W의 [[ZONE]]에도 적중할 수 있음.", "E2는 [[SKILL_RECAST]] 하여 E1 대상에게 [[DASH]] [[DMG_MAGIC]]. \n \n",

        "R1은 [[DASH]] 경로 적들에게 [[DMG_MAGIC]]. \n R2는 [[DASH]] 경로 적들에게 [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_MAGIC]].",

        ],

        en: [
        "Creates a [[ZONE]] on hit. \n Leaving the [[ZONE]] [[EMPOWERED]]s Akali's next [[BA]] \n with [[RANGE_UP]] and [[ON_HIT]] [[DMG_MAGIC]]. \n \n",

        "Q fires a [[PIERCE]] [[PROJECTILE]] dealing [[DMG_MAGIC]]. \n Hitting at the tip applies [[SLOW]] \n \n",

        "Using W (Shroud) \n temporarily grants [[MAX_ENERGY_UP]] of 100. \n Current energy is also increased by 100. \n Standing inside W's [[ZONE]] grants [[INVISIBILITY]]. \n \n",

        "E1 fires a [[PROJECTILE]]. \n On hit, deals [[DMG_MAGIC]] and grants [[TRUE_SIGHT]]. \n Can also hit W's [[ZONE]].", "E2 is a [[SKILL_RECAST]] that [[DASH]]es to the E1 target, dealing [[DMG_MAGIC]]. \n \n",

        "R1 [[DASH]]es, dealing [[DMG_MAGIC]] to enemies in its path. \n R2 [[DASH]]es, dealing [[DMG_MAGIC]] to enemies in its path, scaling with [[TARGET_MISSING_HP_SCALE]].",
        ]

      },

      note2: {
        ko: [
        "P의 [[ZONE]]은 상대 중심으로 생성.", 
        "W는 연막 위에서만 [[INVISIBILITY]].", 
        "E1의 [[E_FLASH]]은 타이밍에 따라 결과가 다름. \n 1. E1 점멸을 빠르게 하면 표창을 던지고 뒤로 [[DASH]]. \n 2. E1 점멸을 천천히 하면 표창을 던지고 [[DASH]]하지 않음.",
        "E1은 [[TRUE_SIGHT]]. \n E1을 [[INVISIBILITY]] 대상에게 맞히면 보이고 \n E2로 도착하면 더 이상 모습이 보이지 않음. \n \n E2는 [[UNTARGETABLE]] 대상에게는 사용할 수 없음.",
      ],
        en: ["The zone spawns centered on the enemy hit.", "W grants [[INVISIBILITY]] only inside the shroud.", "[[E_FLASH]] is possible on E1. \n 1. Press E then quickly press Flash: throws a shuriken and [[DASH]]es backward. \n 2. Press E then slowly press Flash: throws a shuriken without [[DASH]]ing.", "E1 applies [[TRUE_SIGHT]].\nIf E1 hits an [[INVISIBILITY]] target, they become visible —\nbut once E2 arrives, they are no longer revealed.\n\nE2 cannot target [[UNTARGETABLE]] units."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 90,
    16: 60,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. 아칼리는 아트록스/아리와 달리 W의
  // effectBurn/vars는 실제로 채워져 있었지만(위치 매핑을 신뢰할 수 없어
  // 그대로 쓰지 않음), P/Q/E/R은 전부 "0"으로 깨져 있었다. 전부 공식 위키
  // (wiki.leagueoflegends.com/en-us/Akali) 정보박스 필드 값으로 통일해서
  // 채웠다(Notes 섹션 문구는 배제). cost/cooldown/range는 DDragon 원본에서
  // 직접 확인(예: R 쿨타임 120/90/60 = 기존 ultCooldown과 일치, Q 쿨타임은
  // 랭크 무관 1.5초 고정으로 DDragon·위키 둘 다 일치 확인).
  // (CLAUDE.md "챔피언 skillTooltip 작성 규칙" 참고.)
  skillTooltip: {
    P: {
      ko: "아칼리가 스킬로 챔피언에게 피해를 입히면 대상 주변 500 거리에 원이 생깁니다. \n 이 원의 경계를 벗어나면 다음 [[BA]]가 [[RANGE_UP]]과 함께 35~182([[LEVEL_SCALE]])(+60% 추가 [[AD_SCALE]])(+55% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다.",
      en: "When Akali deals spell damage to a champion, a ring appears around them at a 500 range. \n Exiting that ring empowers her next [[BA]] with [[RANGE_UP]], dealing an additional 35~182 ([[LEVEL_SCALE]]) (+60% bonus [[AD_SCALE]]) (+55% [[AP_SCALE]]) [[DMG_MAGIC]].",
    },
    Q: {
      ko: "아칼리가 단검을 부채꼴 모양으로 던져 45/70/95/120/145(+65% [[AD_SCALE]])(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, 사거리 끝에 맞은 적을 0.5초 동안 50%만큼 [[SLOW]]시킵니다. \n \n 1.5초의 [[COOLDOWN]].",
      en: "Akali throws her kunai in an arc, dealing 45/70/95/120/145 (+65% [[AD_SCALE]]) (+60% [[AP_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]ing enemies hit at the tip by 50% for 0.5 seconds. \n \n 1.5 second [[COOLDOWN]].",
    },
    W: {
      ko: "아칼리가 연막탄을 떨어뜨려 5/5.5/6/6.5/7초 동안 지속되는 연막을 생성하고, [[MS_UP]] 30/35/40/45/50%를 얻었다가 2초에 걸쳐 원래대로 돌아옵니다. \n 연막이 활성화된 동안 아칼리의 [[MAX_ENERGY_UP]] 100 증가. \n \n 연막 안에 있는 동안 [[INVISIBILITY]] 상태가 됩니다. \n \n 20/19/18/17/16초의 [[COOLDOWN]].",
      en: "Akali drops a smoke bomb, creating a cloud that lasts 5/5.5/6/6.5/7 seconds and granting [[MS_UP]] of 30/35/40/45/50%, decaying over 2 seconds. \n While the shroud is active, Akali gains [[MAX_ENERGY_UP]] of 100. \n \n While inside the smoke, Akali becomes [[INVISIBILITY]]. \n \n 20/19/18/17/16 second [[COOLDOWN]].",
    },
    E: {
      ko: "아칼리가 뒤로 공중제비를 돌며 표창을 던져 21/42/63/84/105(+30% [[AD_SCALE]])(+33% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, 맞은 첫 번째 적이나 연막에 [[MARK]]을 남깁니다. \n \n 한 번 더 [[SKILL_RECAST]]하면 [[MARK]]을 남긴 대상에게 [[DASH]]하여 49/98/147/196/245(+70% [[AD_SCALE]])(+77% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 16/14.5/13/11.5/10초의 [[COOLDOWN]].",
      en: "Akali flips backward and throws a shuriken, dealing 21/42/63/84/105 (+30% [[AD_SCALE]]) (+33% [[AP_SCALE]]) [[DMG_MAGIC]] and marking the first enemy or smoke cloud hit. \n \n Akali can [[SKILL_RECAST]] once to [[DASH]] to the marked target, dealing 49/98/147/196/245 (+70% [[AD_SCALE]]) (+77% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 16/14.5/13/11.5/10 second [[COOLDOWN]].",
    },
    R: {
      ko: "아칼리가 적 챔피언을 뛰어넘어 경로 내에 있는 모든 적에게 110/220/330(+50% 추가 [[AD_SCALE]])(+30% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 2.5초 후부터 10초 이내에 [[SKILL_RECAST]]하면 적들을 관통하며 [[DASH]]하여, [[TARGET_MISSING_HP_SCALE]] 비례 70/140/210(+30% [[AP_SCALE]])~210/420/630(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Akali vaults over an enemy champion, dealing 110/220/330 (+50% bonus [[AD_SCALE]]) (+30% [[AP_SCALE]]) [[DMG_MAGIC]] to all enemies in her path. \n \n [[SKILL_RECAST]] becomes available 2.5 seconds later, usable within 10 seconds of the first cast: Akali [[DASH]]es through enemies, dealing 70/140/210 (+30% [[AP_SCALE]]) to 210/420/630 (+90% [[AP_SCALE]]) [[DMG_MAGIC]] scaling with the target's missing Health. \n \n {{ultCooldown}} second [[COOLDOWN]] (at levels 6/11/16).",
    },
  },
};

export default akali;
