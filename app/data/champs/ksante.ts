import type { ChampData } from "../interactions/types";

const ksante: ChampData = {
  id: "ksante",

  skills: {
    base: {
      P: ["MARK"],

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "SLOW"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["STUN", "GRAB"] },
    ] },

      W: ["DMG_REDUCE", "UNSTOPPABLE", "DASH", "SEPARATOR", "KNOCKBACK", "STUN"],
      E: ["SHIELD", "SEPARATOR", "DASH", "WALL_HOP"],
      R: ["ROOT", "AIRBORNE", "STUN", "SEPARATOR_NEWLINE", "SEPARATOR", "WALL_HOP", "UNSTOPPABLE", "BLINK", "SEPARATOR", "TRANSFORM", "BUFF"],
    },
    alt: {
      P: ["MARK"],

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["Q_FLASH", "SLOW"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["STUN", "GRAB"] },
    ] },

      W: ["DMG_REDUCE", "UNSTOPPABLE", "DASH"],
      E: ["SHIELD", "SEPARATOR", "DASH", "WALL_HOP"],
      R: ["AS_UP", "AR_PEN", "OMNIVAMP", "SEPARATOR", "ST_DELAYED", "TRANSFORM"],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["HIT_INDICATOR"],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["HIT_INDICATOR"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: { phases: [
      { label: { ko: "P 표식", en: "P Mark" }, tags: ["MARK"] },
      { label: { ko: "P 표식 소모", en: "P Mark Consume" }, tags: ["MARK_CONSUME", "DMG_PHYSICAL"] },
    ] },

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SLOW", "SEPARATOR", "BUFF_STACK"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["STACK_CONSUME", "SEPARATOR", "DMG_PHYSICAL", "TIMING_CAST", "AOE", "SLOW"] },
      { label: { ko: "Q3 추가 투사체", en: "Q3 Extra Projectile" }, tags: ["DMG_PHYSICAL", "PIERCE", "PROJECTILE", "SEPARATOR", "STUN", "GRAB"] },
    ] },

      W: { phases: [
      { label: { ko: "W 차징", en: "W Charge" }, tags: ["SKILL_CHARGED", "DMG_REDUCE", "UNSTOPPABLE"] },
      { label: { ko: "W 돌진", en: "W Dash" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "SEPARATOR", "KNOCKBACK", "STUN"] },
    ] },

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["SHIELD", "DASH", "WALL_HOP"] },
      { label: { ko: "E 아군에게 시전", en: "E Cast on Ally" }, tags: ["TARGETED", "SHIELD", "DASH", "WALL_HOP", "SEPARATOR", "OF_ALLY", "SHIELD"] },
    ] },


      R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_PHYSICAL", "TARGETED", "TIMING_CAST", "MARK", "SEPARATOR_NEWLINE", "SEPARATOR", "ROOT", "AIRBORNE", "STUN", "POSITION_LOCK", "SEPARATOR_NEWLINE", "SEPARATOR", "WALL_HOP", "UNSTOPPABLE", "BLINK", "SEPARATOR", "TRANSFORM", "BUFF"] },
      { label: { ko: "R 총공세 버프", en: "R All Out Buff" }, tags: ["AS_UP", "AR_PEN", "OMNIVAMP"] },
    ] },
    },


    alt: {
      P: { phases: [
      { label: { ko: "P 표식", en: "P Mark" }, tags: ["MARK"] },
      { label: { ko: "P 표식 소모", en: "P Mark Consume" }, tags: ["MARK_CONSUME", "DMG_PHYSICAL"] },
    ] },

      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SLOW", "SEPARATOR", "BUFF_STACK"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["STACK_CONSUME", "SEPARATOR", "DMG_PHYSICAL", "TIMING_CAST", "AOE", "SLOW"] },
      { label: { ko: "Q3 추가 투사체", en: "Q3 Extra Projectile" }, tags: ["DMG_PHYSICAL", "PIERCE", "PROJECTILE", "SEPARATOR", "STUN", "GRAB"] },
    ] },

      W: { phases: [
      { label: { ko: "W 차징", en: "W Charge" }, tags: ["CDR_RESET", "SEPARATOR", "SKILL_CHARGED", "DMG_REDUCE", "UNSTOPPABLE"] },
      { label: { ko: "W 돌진", en: "W Dash" }, tags: ["DMG_PHYSICAL", "AOE", "DASH", "SEPARATOR", "DMG_TRUE", "ADDITIONAL"] },
    ] },

      E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["SHIELD", "DASH", "WALL_HOP"] },
      { label: { ko: "E 아군에게 시전", en: "E Cast on Ally" }, tags: ["TARGETED", "SHIELD", "DASH", "WALL_HOP", "SEPARATOR", "OF_ALLY", "SHIELD"] },
    ] },

      R: ["AS_UP", "AR_PEN", "OMNIVAMP", "SEPARATOR", "ST_DELAYED", "TRANSFORM"]
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "크산테는 R로 [[TRANSFORM]]. \n 기본 / 총공세 \n \n",

          "기본",
          "P는 Q, W, R로 적중 시 [[MARK]]. \n [[BA]] 공격 시 [[MARK_CONSUME]]. \n [[TARGET_MAXHP_SCALE]] 비례 [[DMG_PHYSICAL]]. \n \n",

          "Q는 [[AOE]] [[DMG_PHYSICAL]]. \n 적중 시 [[SLOW]]와 [[MARK]], [[BUFF_STACK]]. \n [[BUFF_STACK]] 2중첩 시 다음 Q [[EMPOWERED]]. (Q3)",
          "Q3는 일반 Q와 동일한 효과. \n 추가로 [[PIERCE]] [[PROJECTILE]] 발사. \n 적중 시 Q와 동일한 효과에 [[STUN]], [[GRAB]] 추가. \n \n",

          "W는 방어태세 돌입. ([[SKILL_CHARGED]]) \n [[SKILL_CHARGED]]하는 동안 [[DMG_REDUCE]]와 [[UNSTOPPABLE]].",
          "[[SKILL_CHARGED]] 종료 시 \n [[DASH]]하여 [[TARGET_MAXHP_SCALE]] 비례 [[DMG_PHYSICAL]]. \n [[SKILL_CHARGED]] 시간 비례 [[KNOCKBACK]]과 [[STUN]]. \n \n",

          "E는 [[DASH]]과 [[SHIELD]]. \n 아군에게 사용하면 [[DASH]] [[RANGE_UP]]와 아군도 [[SHIELD]]. \n \n",

          "R은 적 챔피언에게 [[TARGETED]]으로 사용. \n [[KNOCKBACK]] 시키고 상대 뒤에서 총공세 상태로 등장. \n [[WALL_COLLISION]] 시 벽을 관통하여 끌고 이동. ([[POSITION_LOCK]])",
          "총공세 상태는 해제 불가. \n \n \n",

          "총공세",
          "패널티 \n [[SELF_MAXHP_SCALE]] 감소 35%. \n 추가 [[AR_MR_SCALE]]의 감소 85%.",
          "총공세 버프 \n [[AS_UP]] 40~80% ([[SKILL_LEVEL_SCALE]] 비례), \n [[AR_PEN]] 50%, [[OMNIVAMP]] 20%.",
          "Q는 [[CDR]] 추가.",
          "W는 [[KNOCKBACK]]과 [[STUN]]이 사라지지만, \n R로 [[TRANSFORM]] 시 W [[CDR_RESET]]. \n [[EMPOWERED]] [[DMG_REDUCE]]와 [[SKILL_CHARGED]] 시간 비례 [[DASH]] 속도 증가. \n [[SKILL_CHARGED]] 시간 비례 [[DMG_TRUE]] 추가.",
          "E는 [[CDR]]과 [[DASH]] 속도 증가.",
        ],

        en: [
          "K'Sante [[TRANSFORM]]s with R. \n Base / All Out \n \n",

          "Base",
          "P applies [[MARK]] on hit with Q, W, or R. \n A [[BA]] attack triggers [[MARK_CONSUME]]. \n Deals [[DMG_PHYSICAL]] based on [[TARGET_MAXHP_SCALE]]. \n \n",

          "Q deals [[AOE]] [[DMG_PHYSICAL]]. \n On hit, applies [[SLOW]] and [[MARK]], and grants a [[BUFF_STACK]]. \n At 2 [[BUFF_STACK]]s, the next Q is [[EMPOWERED]]. (Q3)",
          "Q3 has the same effects as a normal Q. \n Additionally fires a [[PIERCE]] [[PROJECTILE]]. \n On hit, adds [[STUN]] and [[GRAB]] to Q's effects. \n \n",

          "W enters a defensive stance. ([[SKILL_CHARGED]]) \n While [[SKILL_CHARGED]], gains [[DMG_REDUCE]] and [[UNSTOPPABLE]].",
          "When [[SKILL_CHARGED]] ends, \n [[DASH]]es, dealing [[DMG_PHYSICAL]] based on [[TARGET_MAXHP_SCALE]]. \n [[KNOCKBACK]] and [[STUN]] scale with [[SKILL_CHARGED]] time. \n \n",

          "E grants a [[DASH]] and [[SHIELD]]. \n When used on an ally, gains [[DASH]] [[RANGE_UP]] and the ally also gets a [[SHIELD]]. \n \n",

          "R is cast [[TARGETED]] on an enemy champion. \n [[KNOCKBACK]]s them and K'Sante appears behind them in All Out form. \n On [[WALL_COLLISION]], drags them through the wall. ([[POSITION_LOCK]])",
          "All Out form cannot be cancelled. \n \n \n",

          "All Out",
          "Penalty \n [[SELF_MAXHP_SCALE]] reduced by 35%. \n Bonus [[AR_MR_SCALE]] reduced by 85%.",
          "All Out Buff \n [[AS_UP]] 40~80% (based on [[SKILL_LEVEL_SCALE]]), \n [[AR_PEN]] 50%, [[OMNIVAMP]] 20%.",
          "Q gains additional [[CDR]].",
          "W loses [[KNOCKBACK]] and [[STUN]], but \n [[TRANSFORM]]ing with R triggers W [[CDR_RESET]]. \n [[EMPOWERED]] [[DMG_REDUCE]] and [[DASH]] speed increases based on [[SKILL_CHARGED]] time. \n Adds [[DMG_TRUE]] based on [[SKILL_CHARGED]] time.",
          "E gains [[CDR]] and increased [[DASH]] speed.",
        ]

      },

      note2: {
        ko: ["[[THE_COPYPASTA]]",
          "Q1, Q2는 [[Q_FLASH]]이 가능하지만, \n Q3는 [[Q_FLASH]] 불가능.",
          "Q의 시전속도 및 [[COOLDOWN]]은 추가 [[AR_MR_SCALE]] 비례.",
          "W는 최소 [[SKILL_CHARGED]] 시간 존재.",
          "W는 [[SKILL_CHARGED]] 중에는 [[UNSTOPPABLE]]. \n [[DASH]]은 끊길 수 있음.",
          "R은 일반적으로 [[SUPPRESS]]으로 알려져 있지만 \n 사실은 적에게 [[ROOT]], [[AIRBORNE]], [[STUN]]을 순차적으로 걸고 \n 상대를 크산테의 앞으로 강제 이동시킴. ([[POSITION_LOCK]])",
          "R은 설명에 [[UNSTOPPABLE]]가 없지만 \n 크산테의 체력 바 위에 [[UNSTOPPABLE]]가 생김. \n 도착하면 사라짐.",

        ],
        en: ["[[THE_COPYPASTA]]",
          "Q1 and Q2 can be [[Q_FLASH]]ed, but \n Q3 cannot be [[Q_FLASH]]ed.",
          "Q's cast speed and [[COOLDOWN]] scale with bonus [[AR_MR_SCALE]].",
          "W has a minimum [[SKILL_CHARGED]] time.",
          "W is [[UNSTOPPABLE]] while [[SKILL_CHARGED]]. \n The [[DASH]] can be interrupted.",
          "R is commonly known as [[SUPPRESS]], but \n it actually applies [[ROOT]], [[AIRBORNE]], and [[STUN]] in sequence \n and forcibly moves the target in front of K'Sante. ([[POSITION_LOCK]])",
          "R's description doesn't mention [[UNSTOPPABLE]], but \n [[UNSTOPPABLE]] appears above K'Sante's health bar. \n It disappears upon arrival.",

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

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. forms.ts 기준 base=기본, alt=총공세.
  // Q/W/E/R은 DDragon(ko_KR, 16.20.1), P는 CDragon ko_kr lol.stringtable.json의 spell_ksantep_tooltip(인게임 원문).
  // 인게임 툴팁이 폼 공통("총공세:" 단락 포함)이라 P/Q/W/E는 두 폼 동일, 총공세 R은 인게임 spell_ksanterendearly
  // ("재사용 시: 이 스킬을 일찍 종료합니다.")를 앞에 둠. 수치는 공식 위키(V26.20)로 채움.
  skillTooltip: {
    base: {
      P: {
        ko: "크산테의 스킬이 적중한 적에게 4초 동안 [[MARK]]를 남깁니다. \n [[MARK]]이 남은 적을 공격하면 12 + [[TARGET_MAXHP_SCALE]] 비례의 1~2%([[LEVEL_SCALE]] 비례)에 해당하는 [[DMG_PHYSICAL]]를 입히고 [[MARK_CONSUME]]합니다.",
        en: "Enemies hit by K'Sante's skills are [[MARK]]ed for 4 seconds. \n Attacking a [[MARK]]ed enemy deals 12 + 1~2% (based on [[LEVEL_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_PHYSICAL]] and triggers [[MARK_CONSUME]].",
      },
      Q: {
        ko: "크산테가 무기를 내리쳐 70/100/130/160/190(+40% 추가 [[AR_SCALE]])(+40% 추가 [[MR_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 0.5초 동안 적에게 80%의 [[SLOW]] 효과를 적용합니다. \n 적중 시 6초 동안 엔토포 타격 중첩([[BUFF_STACK]])을 1회 얻습니다. \n \n Q3 - [[BUFF_STACK]]이 2회 중첩되면 다음 Q가 [[EMPOWERED]]됩니다. \n 0.8초 동안 적들을 [[STUN]]시키고 끌어당기는([[GRAB]]) 충격파를 발사합니다. ([[STACK_CONSUME]]) \n \n 3.5~2초(추가 [[AR_SCALE]]·[[MR_SCALE]] 비례)의 [[COOLDOWN]].",
        en: "K'Sante slams his weapon, dealing 70/100/130/160/190 (+40% bonus [[AR_SCALE]]) (+40% bonus [[MR_SCALE]]) [[DMG_PHYSICAL]] and applying an 80% [[SLOW]] to enemies for 0.5 seconds. \n On hit, he gains 1 Ntofo Strike stack ([[BUFF_STACK]]) for 6 seconds. \n \n Q3 - At 2 [[BUFF_STACK]]s, the next Q is [[EMPOWERED]]. \n It fires a shockwave that [[STUN]]s enemies for 0.8 seconds and pulls them in ([[GRAB]]). ([[STACK_CONSUME]]) \n \n 3.5~2 second (based on bonus [[AR_SCALE]]·[[MR_SCALE]]) [[COOLDOWN]].",
      },
      W: {
        ko: "크산테가 무기를 치켜들며 0.4~1초 동안 방어 태세에 돌입합니다. ([[SKILL_CHARGED]]) \n 이때 크산테는 [[UNSTOPPABLE]] 상태가 되며 받는 피해가 25% 감소합니다. ([[DMG_REDUCE]]) \n \n 이후 전방으로 [[DASH]]하며 45/75/105/135/165 + [[TARGET_MAXHP_SCALE]] 비례의 8%(+추가 [[AR_SCALE]]·[[MR_SCALE]] 100당 2%)에 해당하는 [[DMG_PHYSICAL]]를 입힙니다. \n 적중당한 적은 뒤로 [[KNOCKBACK]]되며 0.5~1.75초([[SKILL_CHARGED]] 시간에 비례) 동안 [[STUN]]합니다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
        en: "K'Sante raises his weapon and enters a defensive stance for 0.4~1 seconds. ([[SKILL_CHARGED]]) \n During this time, K'Sante is [[UNSTOPPABLE]] and takes 25% reduced damage. ([[DMG_REDUCE]]) \n \n He then [[DASH]]es forward, dealing 45/75/105/135/165 + 8% (+2% per 100 bonus [[AR_SCALE]]·[[MR_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_PHYSICAL]]. \n Enemies hit are [[KNOCKBACK]]ed and [[STUN]]ned for 0.5~1.75 seconds (based on [[SKILL_CHARGED]] time). \n \n 14/13/12/11/10 second [[COOLDOWN]].",
      },
      E: {
        ko: "크산테가 [[DASH]]해 2초 동안 70/112.5/155/197.5/240(+13.5% [[SELF_BONUS_HP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 얻습니다. \n 아군에게 [[DASH]]하면 돌진 사거리가 크게 증가하며 아군도 같이 [[SHIELD]]를 얻습니다. \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
        en: "K'Sante [[DASH]]es and gains a [[SHIELD]] that absorbs 70/112.5/155/197.5/240 (+13.5% [[SELF_BONUS_HP_SCALE]]) damage for 2 seconds. \n When [[DASH]]ing to an ally, the dash range greatly increases and the ally also gains a [[SHIELD]]. \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
      },
      R: {
        ko: "크산테가 엔토포를 부숴 적 챔피언을 뒤로 [[KNOCKBACK]]시키고 80/115/150의 [[DMG_PHYSICAL]]를 입힌 후, \n 적 챔피언 뒤로 [[DASH]]하며 15초 동안 총공세 상태에 돌입합니다. ([[TRANSFORM]]) \n 벽에 부딪힌 적은 벽을 뚫고 뒤로 [[KNOCKBACK]]되며 크산테가 다시 공격해 80/115/150(+5% [[SELF_BONUS_HP_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 총공세 상태에서는 크산테의 스킬이 업그레이드되며 [[AS_SCALE]]가 40/60/80%, 추가 방어구 관통력이 50%, ([[AR_PEN]]) 모든 피해 흡혈이 20% 증가하지만, ([[OMNIVAMP]]) \n 최대 체력이 35%, 추가 [[AR_SCALE]]과 [[MR_SCALE]]이 85% 감소합니다. \n \n 총공세 상태는 해제할 수 없습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "K'Sante shatters his Ntofos, [[KNOCKBACK]]ing an enemy champion and dealing 80/115/150 [[DMG_PHYSICAL]], \n then [[DASH]]es behind them and enters All Out for 15 seconds. ([[TRANSFORM]]) \n An enemy that hits a wall is [[KNOCKBACK]]ed through it, and K'Sante strikes again for 80/115/150 (+5% [[SELF_BONUS_HP_SCALE]]) [[DMG_PHYSICAL]]. \n \n While All Out, K'Sante's skills are upgraded and he gains 40/60/80% [[AS_SCALE]], 50% bonus armor penetration, ([[AR_PEN]]) and 20% omnivamp, ([[OMNIVAMP]]) \n but his max HP is reduced by 35%, and his bonus [[AR_SCALE]] and [[MR_SCALE]] by 85%. \n \n All Out cannot be cancelled. \n \n {{ultCooldown}} second [[COOLDOWN]].",
      },
    },

    alt: {
      P: {
        ko: "총공세 상태에서는 [[BA]], 스킬, 기본 지속 효과가 [[TARGET_MAXHP_SCALE]] 비례의 1%(+추가 [[AR_SCALE]] 100당 1%)(+추가 [[MR_SCALE]] 100당 1%)에 해당하는 [[DMG_PHYSICAL]]를 추가로 입힙니다.",
        en: "While All Out, [[BA]]s, skills, and passive effects deal an additional 1% (+1% per 100 bonus [[AR_SCALE]]) (+1% per 100 bonus [[MR_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_PHYSICAL]].",
      },
      Q: {
        ko: "크산테가 무기를 내리쳐 70/100/130/160/190(+40% 추가 [[AR_SCALE]])(+40% 추가 [[MR_SCALE]])의 [[DMG_PHYSICAL]]를 입히고 0.5초 동안 적에게 80%의 [[SLOW]] 효과를 적용합니다. \n 적중 시 6초 동안 엔토포 타격 중첩([[BUFF_STACK]])을 1회 얻습니다. \n \n Q3 - [[BUFF_STACK]]이 2회 중첩되면 다음 Q가 [[EMPOWERED]]됩니다. \n 0.8초 동안 적들을 [[STUN]]시키고 끌어당기는([[GRAB]]) 충격파를 발사합니다. ([[STACK_CONSUME]]) \n \n 총공세 상태에서는 재사용 대기시간이 33% 감소합니다. ([[CDR]]) \n \n 3.5~2초(추가 [[AR_SCALE]]·[[MR_SCALE]] 비례)의 [[COOLDOWN]].",
        en: "K'Sante slams his weapon, dealing 70/100/130/160/190 (+40% bonus [[AR_SCALE]]) (+40% bonus [[MR_SCALE]]) [[DMG_PHYSICAL]] and applying an 80% [[SLOW]] to enemies for 0.5 seconds. \n On hit, he gains 1 Ntofo Strike stack ([[BUFF_STACK]]) for 6 seconds. \n \n Q3 - At 2 [[BUFF_STACK]]s, the next Q is [[EMPOWERED]]. \n It fires a shockwave that [[STUN]]s enemies for 0.8 seconds and pulls them in ([[GRAB]]). ([[STACK_CONSUME]]) \n \n While All Out, the cooldown is reduced by 33%. ([[CDR]]) \n \n 3.5~2 second (based on bonus [[AR_SCALE]]·[[MR_SCALE]]) [[COOLDOWN]].",
      },
      W: {
        ko: "크산테가 무기를 치켜들며 0.4~1초 동안 방어 태세에 돌입합니다. ([[SKILL_CHARGED]]) \n 이때 크산테는 [[UNSTOPPABLE]] 상태가 되며 받는 피해가 25% 감소합니다. ([[DMG_REDUCE]]) \n \n 이후 전방으로 [[DASH]]하며 45/75/105/135/165 + [[TARGET_MAXHP_SCALE]] 비례의 8%(+추가 [[AR_SCALE]]·[[MR_SCALE]] 100당 2%)에 해당하는 [[DMG_PHYSICAL]]를 입힙니다. \n 적중당한 적은 뒤로 [[KNOCKBACK]]되며 0.5~1.75초([[SKILL_CHARGED]] 시간에 비례) 동안 [[STUN]]합니다. \n \n 총공세 상태에서는 재사용 대기시간이 초기화됩니다. ([[CDR_RESET]]) \n 피해의 10~80%만큼 [[DMG_TRUE]]([[SKILL_CHARGED]] 시간에 비례)를 추가로 입힙니다. \n 피해량 감소 효과가 70%까지 증가하며 돌진 속도가 증가하지만 더는 적을 [[KNOCKBACK]]시키거나 [[STUN]]시키지 않습니다. \n \n 14/13/12/11/10초의 [[COOLDOWN]].",
        en: "K'Sante raises his weapon and enters a defensive stance for 0.4~1 seconds. ([[SKILL_CHARGED]]) \n During this time, K'Sante is [[UNSTOPPABLE]] and takes 25% reduced damage. ([[DMG_REDUCE]]) \n \n He then [[DASH]]es forward, dealing 45/75/105/135/165 + 8% (+2% per 100 bonus [[AR_SCALE]]·[[MR_SCALE]]) of [[TARGET_MAXHP_SCALE]] as [[DMG_PHYSICAL]]. \n Enemies hit are [[KNOCKBACK]]ed and [[STUN]]ned for 0.5~1.75 seconds (based on [[SKILL_CHARGED]] time). \n \n While All Out, the cooldown is reset. ([[CDR_RESET]]) \n Deals an additional 10~80% of the damage as [[DMG_TRUE]] (based on [[SKILL_CHARGED]] time). \n Damage reduction increases to 70% and dash speed increases, but it no longer [[KNOCKBACK]]s or [[STUN]]s enemies. \n \n 14/13/12/11/10 second [[COOLDOWN]].",
      },
      E: {
        ko: "크산테가 [[DASH]]해 2초 동안 70/112.5/155/197.5/240(+13.5% [[SELF_BONUS_HP_SCALE]])의 피해를 흡수하는 [[SHIELD]]를 얻습니다. \n 아군에게 [[DASH]]하면 돌진 사거리가 크게 증가하며 아군도 같이 [[SHIELD]]를 얻습니다. \n \n 총공세 상태에서는 재사용 대기시간이 50% 감소하고 돌진 속도가 증가합니다. ([[CDR]]) \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
        en: "K'Sante [[DASH]]es and gains a [[SHIELD]] that absorbs 70/112.5/155/197.5/240 (+13.5% [[SELF_BONUS_HP_SCALE]]) damage for 2 seconds. \n When [[DASH]]ing to an ally, the dash range greatly increases and the ally also gains a [[SHIELD]]. \n \n While All Out, the cooldown is reduced by 50% and dash speed increases. ([[CDR]]) \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
      },
      R: {
        ko: "총공세 상태에서는 크산테의 스킬이 업그레이드되며 [[AS_SCALE]]가 40/60/80%, 추가 방어구 관통력이 50%, ([[AR_PEN]]) 모든 피해 흡혈이 20% 증가하지만, ([[OMNIVAMP]]) \n 최대 체력이 35%, 추가 [[AR_SCALE]]과 [[MR_SCALE]]이 85% 감소합니다. \n \n 총공세 상태는 해제할 수 없습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
        en: "While All Out, K'Sante's skills are upgraded and he gains 40/60/80% [[AS_SCALE]], 50% bonus armor penetration, ([[AR_PEN]]) and 20% omnivamp, ([[OMNIVAMP]]) \n but his max HP is reduced by 35%, and his bonus [[AR_SCALE]] and [[MR_SCALE]] by 85%. \n \n All Out cannot be cancelled. \n \n {{ultCooldown}} second [[COOLDOWN]].",
      },
    },
  },
};

export default ksante;
