import type { ChampData } from "../interactions/types";

const akshan: ChampData = {
  id: "akshan",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "RANGE_UP"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["MARK", "SEPARATOR", "ON_TAKEDOWN", "REVIVE"] },
      { label: { ko: "W", en: "W"  }, tags: ["CAMOUFLAGE", "SEPARATOR", "ST_CONDITIONAL", "MS_UP", "MANA_RESTORE"]},
    ] },
    
    E: ["DASH"],
    R: ["R_FLASH", "TRUE_SIGHT"],
  },

  vision: {
    P: [],
    Q: ["HIT_INDICATOR"],
    W: ["ST_CONDITIONAL", "HIT_INDICATOR"],
    E: [],
    R: ["TRUE_SIGHT"],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "P 디버프 스택", en: "P Debuff Stack" }, tags: ["ST_CONDITIONAL", "STACK_CONSUME", "DMG_MAGIC", "SEPARATOR", "ST_CONDITIONAL", "SHIELD"] },
      { label: { ko: "P 이속 증가", en: "P MS Up"  }, tags: ["ST_CONDITIONAL", "MS_UP"]},
    ] },

    Q: { phases: [
      { label: { ko: "가는 Q", en: "Outbound Q" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE", "DEBUFF_STACK", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "RANGE_UP"] },
      { label: { ko: "오는 Q", en: "Return Q" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "PIERCE", "DEBUFF_STACK"] },
    ] },
    
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "SEPARATOR", "ST_CONDITIONAL", "TARGET_ALLY", "REVIVE"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["TIMING_CAST", "SEPARATOR", "ST_CONDITIONAL", "CAMOUFLAGE", "MANA_RESTORE"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 갈고리 발사", en: "E Hook Release" }, tags: ["PROJECTILE", "SEPARATOR", "ST_CONDITIONAL", "SKILL_CHANNEL", "DASH"] },
      { label: { ko: "E 회전", en: "E Spin" }, tags: ["SKILL_CHANNEL", "DASH", "SEPARATOR", "SKILL_RECAST", "CANCELLABLE"] },
      { label: { ko: "E 회전", en: "E Spin" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "DEBUFF_STACK"] },
    ] },

    R: { phases: [
      { label: { ko: "R 조준", en: "R Aim" }, tags: ["SKILL_CHANNEL", "TARGETED", "TRUE_SIGHT"] },
      { label: { ko: "R 발사", en: "R Release" }, tags: ["TIMING_AFTERCAST", "LOCKED"] },
      { label: { ko: "R 투사체", en: "R Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "HOMING", "DEBUFF_STACK"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: { 
        ko: [], en: [] },
      note1: {

        ko: [
        "[[BA]]는 2발을 빠르게 발사할 수 있음. \n 1발만 쏘고 움직이면 [[MS_UP]].", 
        "평타, 스킬의 [[PROJECTILE]] 적중 시 [[DEBUFF_STACK]] \n 3개 쌓이면 추가 피해. \n 대상이 챔피언이면 아크샨에게 [[SHIELD]]. \n \n",

        "Q는 되돌아 오는 부메랑 [[PROJECTILE]] 발사. \n 적중하면 [[PIERCE]]하고 [[RANGE_UP]]. \n 무한히 반복. \n [[DMG_PHYSICAL]]와 챔피언 적중 시 [[REVEALED]], [[MS_UP]]. \n \n",

        "W의 패시브는 \n 아군 챔피언을 처치한 대상은 악당 [[MARK]] 생성. \n 악당 [[ON_TAKEDOWN]] 시 (3초 이내) \n 추가 골드를 획득하고 악당에게 죽은 아군 [[REVIVE]]. \n 다른 악당 [[MARK]]은 즉시 소멸.", 
        "W는 [[CAMOUFLAGE]]. \n 수풀 속이나 벽에 붙어야 유지. \n [[CAMOUFLAGE]] 중에는 악당에게 향하는 경로가 생기고 \n 따라가면 [[MS_UP]], [[MANA_RESTORE]]. \n \n", 

        "E는 벽에 갈고리 [[PROJECTILE]]를 발사. \n 적중하면 갈고리를 축으로 왼쪽 또는 오른쪽으로 회전. \n 회전 중에 근처 적에게 굉장히 빠른 속도로 [[PROJECTILE]]를 발사. \n 1개당 [[DMG_PHYSICAL]], [[DEBUFF_STACK]]. \n 적 챔피언과 부딪히거나 재사용, 우클릭 이동 시 [[SKILL_CHANNEL]] 종료. \n 챔피언 [[ON_TAKEDOWN]] 시 0.5초로 [[CDR]]. \n \n",

        "R은 적 하나를 조준하여 [[TRUE_SIGHT]]. \n 아크샨은 조준한 시간에 비례한 [[PROJECTILE]] 개수를 발사. \n [[TARGET_MISSING_HP_SCALE]] 비례 [[DMG_PHYSICAL]]와 [[DEBUFF_STACK]].",

        ],

        en: [
        "[[BA]] can fire two shots in quick succession. \n Canceling after the first by moving grants [[MS_UP]].",
        "Basic attacks and skill [[PROJECTILE]] hits apply [[DEBUFF_STACK]]. \n At 3 stacks, deals bonus damage. \n If the target is a champion, Akshan gains a [[SHIELD]]. \n \n",

        "Q fires a returning boomerang [[PROJECTILE]]. \n On hit, it [[PIERCE]]s and gains [[RANGE_UP]]. \n Repeats indefinitely. \n Deals [[DMG_PHYSICAL]], and hitting a champion grants [[REVEALED]] and [[MS_UP]]. \n \n",

        "W's passive: \n an enemy who kills an allied champion becomes a Scoundrel [[MARK]]. \n [[ON_TAKEDOWN]] on a Scoundrel (within 3 seconds) \n grants bonus gold and [[REVIVE]]s the ally they killed. \n All other Scoundrel [[MARK]]s vanish immediately.",
        "W grants [[CAMOUFLAGE]]. \n Maintained only while in a bush or near a wall. \n While [[CAMOUFLAGE]]d, a path appears leading toward a Scoundrel, \n and following it grants [[MS_UP]] and [[MANA_RESTORE]]. \n \n",

        "E fires a hook [[PROJECTILE]] at a wall. \n On hit, Akshan swings left or right around it. \n While swinging, he repeatedly fires [[PROJECTILE]]s at nearby enemies at very high speed, \n each dealing [[DMG_PHYSICAL]] and applying [[DEBUFF_STACK]]. \n [[SKILL_CHANNEL]] ends early on colliding with an enemy champion, on recast, or on right-click movement. \n [[ON_TAKEDOWN]] on a champion reduces this [[CDR]] to 0.5 seconds. \n \n",

        "R locks onto a single enemy, granting [[TRUE_SIGHT]]. \n Akshan fires a number of [[PROJECTILE]]s proportional to the channel time. \n Deals [[DMG_PHYSICAL]] scaled by [[TARGET_MISSING_HP_SCALE]], and applies [[DEBUFF_STACK]].",
        ]

      },

      note2: {
        ko: [
        "P의 [[MS_UP]] 효과는 공격속도에 비례하여 추가증가.", 
        "E는 갈고리에서 E [[SKILL_RECAST]]로 내려야 딜로스 적음.",
        "R로 [[SKILL_CHANNEL]] 도중에 E로 회전 가능. \n 지정한 대상은 [[TRUE_SIGHT]]. \n [[CAMOUFLAGE]], [[INVISIBILITY]]을 해도 모습이 보임."
      ],
        en: [
        "P's [[MS_UP]] effect additionally increases based on bonus attack speed.",
        "On E, dismounting early from the hook via E [[SKILL_RECAST]] minimizes DPS loss.",
        "E can still be used to swing while [[SKILL_CHANNEL]]ing R. \n The locked-on target is granted [[TRUE_SIGHT]]. \n They remain visible even if they use [[CAMOUFLAGE]] or [[INVISIBILITY]]."
      ],
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. 아크샨도 아트록스/아리/아칼리와
  // 동일하게 DDragon의 effectBurn/vars가 전부 "0"/빈 배열로 깨져있어서,
  // 공식 위키(wiki.leagueoflegends.com/en-us/Akshan) 정보박스 필드 값으로
  // 전부 채웠다(Notes 섹션 문구는 배제). cost/cooldown/range는 DDragon
  // 원본에서 직접 확인(R 쿨타임 100/85/70 = 기존 ultCooldown과 일치).
  // E의 "공격속도 비례 배율(x1+0.3/100%)"은 위키 Notes 섹션 전용이라 제외.
  // (CLAUDE.md "챔피언 skillTooltip 작성 규칙" 참고.)
  skillTooltip: {
    P: {
      ko: "아크샨의 [[BA]]와 스킬이 적에게 적중하면 [[DEBUFF_STACK]]을 부여합니다. 3중첩 시 소모되어 15~150([[LEVEL_SCALE]])(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입히고, 대상이 챔피언이면 40~280([[LEVEL_SCALE]])(+35% 추가 [[AD_SCALE]])의 [[SHIELD]]를 2초간 얻습니다. \n \n [[BA]] 시 짧은 지연 후 50%(미니언 상대 100%) [[AD_SCALE]]의 추가 사격을 한 발 더 발사합니다. 이동으로 이 사격을 취소하면 대신 20~75([[LEVEL_SCALE]])의 [[MS_UP]]을 얻습니다(추가 공격속도에 비례해 최대 2배).",
      en: "Akshan's [[BA]]s and Abilities apply a [[DEBUFF_STACK]] to enemies on hit. At 3 stacks, they are consumed to deal bonus 15~150 ([[LEVEL_SCALE]]) (+60% [[AP_SCALE]]) [[DMG_MAGIC]], and if the target is a champion, Akshan gains a 40~280 ([[LEVEL_SCALE]]) (+35% bonus [[AD_SCALE]]) [[SHIELD]] for 2 seconds. \n \n On [[BA]], Akshan fires an additional shot after a short delay for 50% (100% vs minions) [[AD_SCALE]]. Cancelling it by moving instead grants 20~75 ([[LEVEL_SCALE]]) [[MS_UP]] (scaling up to 2x with bonus attack speed).",
    },
    Q: {
      ko: "아크샨이 부메랑을 던져 나갈 때와 돌아올 때 각각 45/75/105/135/165(+70% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다(미니언 상대 40/50/60/70/80%). 적중할 때마다 [[RANGE_UP]]되며 무한히 반복됩니다. \n 챔피언에게 적중하면 [[REVEALED]]시키고, 1초 동안 20%(+100당 5% [[AP_SCALE]])의 [[MS_UP]]을 얻습니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Akshan throws a boomerang that deals 45/75/105/135/165 (+70% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] both going out and coming back (40/50/60/70/80% damage to minions). Each champion hit extends its range ([[RANGE_UP]]), repeating indefinitely. \n Hitting a champion [[REVEALED]]s them and grants 20% (+5% per 100 [[AP_SCALE]]) [[MS_UP]] for 1 second. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    W: {
      ko: "기본 지속 효과: 아군 챔피언을 처치한 적은 60초 동안 악당으로 표시됩니다. 악당 처치에 관여([[ON_TAKEDOWN]])하면 그에게 죽었던 아군을 [[REVIVE]]하고 추가 골드를 얻으며 다른 모든 악당 표시가 사라집니다. \n \n 사용 시: [[CAMOUFLAGE]] 상태가 되어 악당을 향해 이동하는 동안 80/90/100/110/120의 [[MS_UP]]과 최대 마나의 12%에 해당하는 [[MANA_RESTORE]]를 얻습니다. 수풀이나 벽 근처를 벗어나면 [[CAMOUFLAGE]]이 빠르게 사라집니다. \n \n 18/14/10/6/2초의 [[COOLDOWN]].",
      en: "Passive: Enemy champions who kill Akshan's allies are marked as Scoundrels for 60 seconds. [[ON_TAKEDOWN]] on a Scoundrel [[REVIVE]]s the ally they killed, grants bonus gold, and clears all other Scoundrel marks. \n \n Active: Akshan gains [[CAMOUFLAGE]] and, while moving toward Scoundrels, 80/90/100/110/120 [[MS_UP]] and [[MANA_RESTORE]] equal to 12% of missing mana. [[CAMOUFLAGE]] fades quickly outside of brush or near a wall. \n \n 18/14/10/6/2 second [[COOLDOWN]].",
    },
    E: {
      ko: "아크샨이 갈고리를 발사해 지형에 걸고 주위를 돌며, 반복해서 가장 가까운 적에게 8/16/24/32/40(+25% [[AD_SCALE]])의 [[DMG_PHYSICAL]](온힛 효과는 25%만 적용)를 입힙니다. \n [[SKILL_RECAST]]로 일찍 뛰어내릴 수 있으며, 챔피언이나 지형과 충돌하면 스윙이 조기 종료됩니다. \n 챔피언 처치에 관여([[ON_TAKEDOWN]])하면 이 스킬의 [[COOLDOWN]]이 0.5초로 감소합니다. \n \n 18/16.5/15/13.5/12초의 [[COOLDOWN]].",
      en: "Akshan fires a grappling hook into terrain and swings around it, repeatedly dealing 8/16/24/32/40 (+25% [[AD_SCALE]]) [[DMG_PHYSICAL]] (on-hit effects apply at only 25%) to the nearest enemy. \n He can [[SKILL_RECAST]] to jump off early, and colliding with a champion or terrain ends the swing early. \n [[ON_TAKEDOWN]] during the swing reduces this Ability's [[COOLDOWN]] to 0.5 seconds. \n \n 18/16.5/15/13.5/12 second [[COOLDOWN]].",
    },
    R: {
      ko: "아크샨이 적 챔피언을 조준하여 최대 2.5초 동안 충전하며 최대 5/6/7개의 총알을 저장합니다. \n [[SKILL_RECAST]]하면 저장된 총알을 모두 발사하여, 처음 적중한 챔피언·미니언·건물에게 총알당 최소 25/35/45(+15% [[AD_SCALE]])에서 \n [[TARGET_MISSING_HP_SCALE]]에 비례해 최대 75/105/135(+45% [[AD_SCALE]])까지의 [[DMG_PHYSICAL]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Akshan locks onto an enemy champion and channels for up to 2.5 seconds, storing up to 5/6/7 bullets. \n [[SKILL_RECAST]] fires all stored bullets at the first enemy champion, minion, or structure hit, each dealing at least 25/35/45 (+15% [[AD_SCALE]]) [[DMG_PHYSICAL]], increased up to 75/105/135 (+45% [[AD_SCALE]]) based on the target's missing Health. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default akshan;
