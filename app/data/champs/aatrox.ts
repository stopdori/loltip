import type { ChampData } from "../interactions/types";

const aatrox: ChampData = {
  id: "aatrox",
  skills: {
    P: ["COOLDOWN", "ON_HIT", "DRAIN"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["W_FLASH", "TETHER", "SLOW", "TRUE_SIGHT"] },
      { label: { ko: "사슬효과 발동", en: "Tether" }, tags: ["ST_CONDITIONAL", "GRAB"] },
    ] },

    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["E_FLASH", "DASH", "WALL_HOP", "SEPARATOR", "AA_RESET"] },
    ] },

    R: ["SIZE_UP", "MS_UP", "AD_UP", "HS_POWER", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "FEAR", "SEPARATOR", "ON_TAKEDOWN", "DURATION_EXT"],
  },
  vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["COOLDOWN", "ON_HIT", "DMG_MAGIC", "DRAIN"],

    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SKILL_RECAST", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"] },
      { label: { ko: "Q3", en: "Q3"  }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"] },
    ] },

    W: { phases: [
      { label: { ko: "투사체", en: "Projectile" }, tags: ["DMG_PHYSICAL", "PROJECTILE", "SINGLE", "TETHER", "SLOW", "TRUE_SIGHT"] },
      { label: { ko: "사슬", en: "Tether" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "GRAB"] },
] },

    E: { phases: [
      { label: { ko: "패시브", en: "Passive" }, tags: ["PASSIVE_BONUS", "ST_CONDITIONAL", "OMNIVAMP"] },
      { label: { ko: "액티브", en: "Active" }, tags: ["DASH", "WALL_HOP", "SEPARATOR", "AA_RESET"] },
    ] },
    
    R: ["BUFF_FORM", "SIZE_UP", "MS_UP", "AD_UP", "HS_POWER", "SEPARATOR_NEWLINE", "SEPARATOR", "ST_CONDITIONAL", "FEAR", "SEPARATOR", "ON_TAKEDOWN", "DURATION_EXT"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [], 
        en: [] 
      },
      note1: {
        ko: [
            "P는 [[COOLDOWN]].\n 준비되면 [[EMPOWERED]] [[BA]]에 [[TARGET_MAXHP_SCALE]] 비례 [[DMG_MAGIC]]. \n 피해량 100% [[DRAIN]]. \n \n",

            "Q는 [[AOE]] [[DMG_PHYSICAL]]. \n 지속시간 동안 추가로 두 번 [[SKILL_RECAST]] 가능. \n Q1, Q2는 [[AOE]] 끝 / Q3는 중앙에 맞히면 \n 증가한 [[DMG_PHYSICAL]]와 [[AIRBORNE]] 추가. \n Q2, Q3를 사용하지 않고 지속시간 종료 시. Q [[CDR]]. \n \n", 

            "W는 [[PROJECTILE]] 발사. \n [[DMG_PHYSICAL]], [[SLOW]], [[TETHER]]을 걸고 \n 대상이 [[AOE]]에 머물면 중앙쪽으로 [[GRAB]], [[DMG_PHYSICAL]]. \n \n",

            "E의 [[PASSIVE_BONUS]]는 \n 챔피언 대상 [[OMNIVAMP]].", 
            "E는 [[DASH]], [[AA_RESET]] 가능.\n 다른 스킬 사용중에 E를 사용할 수 있고 \n E스킬 사용중에 다른스킬도 사용할 수 있음. \n \n",

            "R은  주변 미니언 [[FEAR]]. \n 10초간 [[MS_UP]], [[AD_UP]]. \n ([[MS_UP]]는 시간이 지나면 점차 사라짐.) \n 처치 관여시 [[DURATION_EXT]] 5초. \n 10초를 넘을 수는 없음.",


        ],
        en: ["P has a [[COOLDOWN]].\n When ready, the [[EMPOWERED]] [[BA]] deals [[DMG_MAGIC]] based on [[TARGET_MAXHP_SCALE]]. \n [[DRAIN]]s 100% of the damage. \n \n",
          "Q deals [[AOE]] [[DMG_PHYSICAL]]. \n Can [[SKILL_RECAST]] two more times during its duration. \n Hitting with the [[AOE]] edge for Q1, Q2 / the center for Q3 \n adds increased [[DMG_PHYSICAL]] and [[AIRBORNE]]. \n If the duration ends without using Q2, Q3, Q gets [[CDR]]. \n \n",
          "W fires a [[PROJECTILE]]. \n Applies [[DMG_PHYSICAL]], [[SLOW]], and [[TETHER]], \n and if the target stays within the [[AOE]], they are [[GRAB]]bed toward the center and take [[DMG_PHYSICAL]]. \n \n",
          "E's [[PASSIVE_BONUS]] grants \n [[OMNIVAMP]] against champions.",
          "E enables [[DASH]] and [[AA_RESET]].\n Can use E while another ability is active, \n and other abilities can be used while E is active. \n \n",
          "R [[FEAR]]s nearby minions. \n Grants [[MS_UP]] and [[AD_UP]] for 10 seconds. \n ([[MS_UP]] fades gradually over time.) \n Takedown participation grants a 5-second [[DURATION_EXT]]. \n Cannot exceed 10 seconds."
        ]
      },

      note2: {
        ko: [
          "P [[CDR]]은 \n 챔피언, 대형, 에픽 몬스터에게 [[BA]], 스킬 적중 시 [[CDR]]. \n Q로 [[AIRBORNE]] 시키면 2배 [[CDR]]. \n W는 적중, [[GRAB]] 따로 [[CDR]]. \n R [[FEAR]] 적중 시 에는 [[CDR]] 없음. \n 스킬이 여러 명 적중해도 1명 적중한 걸로 [[CDR]].",
          "Q는 미니언에게 데미지 반감. \n Q는 몬스터 [[AIRBORNE]] 지속시간 2배와 추가 피해.",
          "W는 원래 스킬설명에 [[TRUE_SIGHT]]가 없는데 \n 효과가 똑같이 작동함.",
          "W는 미니언에게 2배 피해."
      ],
        en: ["P's [[CDR]]: \n [[BA]] or skill hits on champions, large, or epic monsters grant [[CDR]]. \n [[AIRBORNE]] via Q grants double [[CDR]]. \n W's hit and [[GRAB]] each grant [[CDR]] separately. \n R [[FEAR]] hits do not grant [[CDR]]. \n Even if a skill hits multiple targets, [[CDR]] counts as one hit.",
          "Q deals half damage to minions. \n Q doubles [[AIRBORNE]] duration on monsters and deals bonus damage.",
          "W has no [[TRUE_SIGHT]] in the original tooltip, \n but the effect works the same.",
          "W deals double damage to minions."
        ]
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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. 아트록스는 DDragon vars/effectBurn이
  // P~R 전부 "0"으로 완전히 깨져 있어(위치 매핑 정보 없음) DDragon 수치를
  // 하나도 신뢰할 수 없는 케이스 — 공식 위키(wiki.leagueoflegends.com/en-us/Aatrox,
  // V26.12 기준) 수치로 문장 전체를 새로 작성했다.
  // (CLAUDE.md "챔피언 skillTooltip 작성 규칙" 참고.)
  skillTooltip: {
    P: {
      ko: "아트록스의 기본 공격이 주기적으로 [[EMPOWERED]]되어, [[TARGET_MAXHP_SCALE]] 4~10%([[LEVEL_SCALE]] 비례)에 해당하는 [[DMG_MAGIC]]를 추가로 입히고 [[DRAIN]]합니다. (몬스터 대상 최대 100~320) \n \n 22~10초의 [[COOLDOWN]] ([[LEVEL_SCALE]] 비례).",
      en: "Aatrox's basic attack is periodically [[EMPOWERED]], dealing an additional 4~10% (based on [[LEVEL_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_MAGIC]] and [[DRAIN]]ing it. (Max 100~320 against monsters) \n \n 22~10 second [[COOLDOWN]] (based on [[LEVEL_SCALE]]).",
    },
    Q: {
      ko: "아트록스가 대검을 내리쳐 10/25/40/55/70(+60/67.5/75/82.5/90% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 끝부분에 적중한 적은 잠깐 [[AIRBORNE]]되고 75% 증가한 [[DMG_PHYSICAL]]를 입습니다. \n \n 이 스킬은 두 번 [[SKILL_RECAST]] 가능하며, 다시 사용할 때마다 범위가 변하고 이전보다 25% 더 많은 [[DMG_PHYSICAL]]를 입힙니다. \n \n 14/12/10/8/6초의 [[COOLDOWN]].",
      en: "Aatrox slams his greatsword, dealing 10/25/40/55/70 (+60/67.5/75/82.5/90% [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n Enemies hit by the edge are briefly [[AIRBORNE]] and take 75% increased [[DMG_PHYSICAL]]. \n \n This skill can [[SKILL_RECAST]] twice, each recast changing shape and dealing 25% more [[DMG_PHYSICAL]] than the previous one. \n \n 14/12/10/8/6 second [[COOLDOWN]].",
    },
    W: {
      ko: "아트록스가 사슬을 발사하여 처음 적중한 적을 [[TETHER]]로 붙잡고, 1.5초 동안 25/27.5/30/32.5/35%만큼 [[SLOW]]시키며 30/40/50/60/70(+40% [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 챔피언과 대형 정글 몬스터는 1.5초 안에 사슬이 닿은 지역을 벗어나지 못하면 중심으로 [[GRAB]]되어 같은 피해를 다시 입습니다 (미니언 대상은 60/80/100/120/140(+80% [[AD_SCALE]])). \n \n 20/18/16/14/12초의 [[COOLDOWN]].",
      en: "Aatrox fires a chain that [[TETHER]]s the first enemy hit, [[SLOW]]ing them by 25/27.5/30/32.5/35% for 1.5 seconds and dealing 30/40/50/60/70 (+40% [[AD_SCALE]]) [[DMG_PHYSICAL]]. \n \n Champions and large jungle monsters that fail to leave the impact area within 1.5 seconds are [[GRAB]]bed back to the center and take the same damage again (60/80/100/120/140 (+80% [[AD_SCALE]]) against minions). \n \n 20/18/16/14/12 second [[COOLDOWN]].",
    },
    E: {
      ko: "기본 지속 효과: 아트록스가 챔피언에게 입힌 피해의 16%(+[[SELF_BONUS_HP_SCALE]] 100당 1.1%)만큼 [[OMNIVAMP]]으로 체력을 [[HEAL]]합니다. \n \n 사용 시: 아트록스가 [[DASH]]합니다. 이 스킬은 다른 스킬을 준비하는 동안에도 사용할 수 있습니다. \n \n 9/8/7/6/5초의 [[COOLDOWN]].",
      en: "Passive: Aatrox [[HEAL]]s for 16% (+1.1% per 100 [[SELF_BONUS_HP_SCALE]]) of the damage he deals to champions via [[OMNIVAMP]]. \n \n Active: Aatrox [[DASH]]es. This skill can be used even while winding up his other skills. \n \n 9/8/7/6/5 second [[COOLDOWN]].",
    },
    R: {
      ko: "아트록스가 진정한 악마의 모습을 드러내 주변 미니언을 3초 동안 [[FEAR]]시키고, [[MS_UP]] 60/80/100%를 얻었다가 10초에 걸쳐 서서히 원래대로 돌아옵니다. \n 지속시간(10초) 동안 [[AD_UP]] 20/30/40%, 자신에게 적용되는 [[HS_POWER]] 50/75/100%. \n \n 챔피언 처치에 관여하면 지속시간이 5초 늘어나고 [[MS_UP]] 효과가 초기화됩니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Aatrox reveals his true demonic form, [[FEAR]]ing nearby minions for 3 seconds and gaining 60/80/100% [[MS_UP]], which decays back to normal over 10 seconds. \n For the duration (10 seconds), he gains 20/30/40% [[AD_UP]] and 50/75/100% [[HS_POWER]] applied to himself. \n \n Participating in a champion takedown extends the duration by 5 seconds and refreshes the [[MS_UP]] effect. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default aatrox;
