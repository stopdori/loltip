import type { ChampData } from "../interactions/types";

const kennen: ChampData = {
  id: "kennen",
  skills: {
    P: ["STUN", "ENERGY_RESTORE"],
    Q: [],
    W: [],
    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["MS_UP", "GHOSTING", "SEPARATOR", "ST_CONDITIONAL", "ENERGY_RESTORE"] },
      { label: { ko: "E 버프", en: "E Buff" }, tags: ["AS_UP", "SEPARATOR", "ST_CONDITIONAL", "DURATION_EXT"] },
    ] },
    
    R: ["R_FLASH", "AR_MR_UP", "SEPARATOR", "AURA"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["STACK_CONSUME", "STUN", "ENERGY_RESTORE"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "SEPARATOR", "DEBUFF_STACK"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "BUFF_STACK", "SEPARATOR", "STACK_CONSUME", "BA", "EMPOWERED"] },
      { label: { ko: "W 강화 평타", en: "W Empowered Attack" }, tags: ["DMG_MAGIC", "PROJECTILE", "ON_HIT", "SEPARATOR", "DEBUFF_STACK"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["DMG_MAGIC", "TIMING_CAST", "NON_PROJECTILE", "HOMING", "SWARM", "SEPARATOR", "DEBUFF_STACK"] },
    ] },

    E: { phases: [
      { label: { ko: "E 버프", en: "E Buff" }, tags: ["GHOSTING", "MS_UP", "SEPARATOR", "ST_CONDITIONAL", "ENERGY_RESTORE"] },
      { label: { ko: "E 충돌 피해", en: "E Collision Damage" }, tags: ["DMG_MAGIC", "AOE", "SEPARATOR", "DEBUFF_STACK"] },
      { label: { ko: "E 종료 버프", en: "E End Buff" }, tags: ["AS_UP", "SEPARATOR", "ST_CONDITIONAL", "DURATION_EXT"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R 버프", en: "R Buff" }, tags: ["AR_MR_UP", "TIMING_CAST", "AURA", "LOCKED"] },
      { label: { ko: "R 오라 효과", en: "R Aura Effect" }, tags: ["DOT", "DMG_MAGIC", "SEPARATOR", "DOT", "DEBUFF_STACK"] },
    ] },
    
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 스킬로 명중 시 [[DEBUFF_STACK]]. \n 3스택 시 [[STUN]] 및 [[ENERGY_RESTORE]]. \n \n",

          "Q는 표창([[PROJECTILE]])을 발사. \n 적중 시 [[DMG_MAGIC]]와 [[DEBUFF_STACK]]. \n \n",

          "W의 [[PASSIVE_BONUS]]는 [[BA]] 공격 시 [[BUFF_STACK]]. \n 5 [[BUFF_STACK]]마다 다음 [[BA]]를 [[EMPOWERED]]. \n [[DMG_MAGIC]]와 [[DEBUFF_STACK]].", 
          "W는 주변의 [[DEBUFF_STACK]]을 가진 대상 모두에게 \n [[DMG_MAGIC]]와 [[DEBUFF_STACK]]. \n \n",

          "E는 번개 구체로 [[TRANSFORM]]. \n [[GHOSTING]], [[MS_UP]]를 획득하지만 [[BA]] 공격 불가. \n 부딪힌 대상 [[DMG_MAGIC]]와 [[DEBUFF_STACK]]. \n 부딪히는데 성공하면 [[ENERGY_RESTORE]].", 
          "E 종료 시 [[AS_UP]]. \n [[BA]] 공격 시 [[CRIT]]가 발동하면 \n [[DURATION_EXT]] 1초. \n \n",

          "R은 [[AR_MR_UP]]. \n 번개장 [[AURA]] 생성. \n [[DOT]] [[DMG_MAGIC]]와 [[DEBUFF_STACK]]. \n 맞는 대상은 틱당 [[DMG_MAGIC]] 10%씩 증가. \n 총 6틱 시전.",
        ],

        en: ["P applies [[DEBUFF_STACK]] when skills hit. \n At 3 stacks, [[STUN]] and [[ENERGY_RESTORE]]. \n \n",
          "Q fires a shuriken ([[PROJECTILE]]). \n On hit, [[DMG_MAGIC]] and [[DEBUFF_STACK]]. \n \n",
          "W's [[PASSIVE_BONUS]] grants a [[BUFF_STACK]] on each [[BA]]. \n Every 5 [[BUFF_STACK]]s, the next [[BA]] becomes [[EMPOWERED]]. \n [[DMG_MAGIC]] and [[DEBUFF_STACK]].",
          "W hits all nearby targets with [[DEBUFF_STACK]], \n dealing [[DMG_MAGIC]] and [[DEBUFF_STACK]]. \n \n",
          "E [[TRANSFORM]]s into a lightning ball. \n Gains [[GHOSTING]] and [[MS_UP]] but cannot [[BA]]. \n Targets collided with take [[DMG_MAGIC]] and [[DEBUFF_STACK]]. \n A successful collision grants [[ENERGY_RESTORE]].",
          "When E ends, [[AS_UP]]. \n If a [[BA]] triggers a [[CRIT]], \n 1s [[DURATION_EXT]]. \n \n",
          "R grants [[AR_MR_UP]]. \n Creates a lightning [[AURA]]. \n [[DOT]] [[DMG_MAGIC]] and [[DEBUFF_STACK]]. \n Targets hit take 10% more [[DMG_MAGIC]] per tick. \n 6 ticks in total."
        ]

      },

      note2: {
        ko: [
        "P의 [[STUN]]은 \n 6초 안에 같은 대상에게 다시 시전하면 \n [[STUN]] 시간이 0.5초로 감소.", 
        "W의 [[BUFF_STACK]]은 구조물을 공격해도 쌓이지만 \n [[BA]] [[EMPOWERED]]를 소모할 수는 없음.", 
        "E 지속 중에는 [[BA]] 공격 불가.", 
        "R은 지속시간이 끝나기 전까지 직접 해제할 수 없음.", 
        "R에 맞은 대상은 [[DEBUFF_STACK]]이 쌓여 \n W를 사용할 수 있지만 \n R의 지속시간이 종료되면 W의 조건이 사라짐."
      ],
        en: ["P's [[STUN]]: \n if reapplied to the same target within 6 seconds, \n the [[STUN]] duration is reduced to 0.5 seconds.",
          "W's [[BUFF_STACK]] also builds when attacking structures, \n but the [[EMPOWERED]] [[BA]] can't be consumed on them.",
          "Kennen cannot [[BA]] while E is active.",
          "R cannot be canceled manually before its duration ends.",
          "Targets hit by R gain [[DEBUFF_STACK]], \n allowing W to be used, but \n once R's duration ends, W's condition is lost."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 120,
    16: 120,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. Q/W/E/R은 DDragon(ko_KR, 16.20.1)
  // 원문을 뼈대로, P는 DDragon description이 요약본이라 CDragon ko_kr
  // lol.stringtable.json의 spell_kennenpassive_tooltip(인게임 원문)을 뼈대로 씀.
  // 수치는 공식 위키(V26.20: E 공속 50~90%)로 채움(CDragon 게임 데이터 kennen.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "케넨의 스킬이 적중하면 6초 동안 중첩이 1회 쌓입니다. ([[DEBUFF_STACK]]) \n 중첩이 3회 쌓이면 해당 적은 1.25초 동안 [[STUN]]하며 케넨이 기력을 25 얻습니다. ([[ENERGY_RESTORE]])",
      en: "When Kennen's skills hit, they apply 1 stack for 6 seconds. ([[DEBUFF_STACK]]) \n At 3 stacks, the enemy is [[STUN]]ned for 1.25 seconds and Kennen gains 25 energy. ([[ENERGY_RESTORE]])",
    },
    Q: {
      ko: "케넨이 표창을 던져 처음 적중한 적에게 75/125/175/225/275(+75% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 7/6.25/5.5/4.75/4초의 [[COOLDOWN]].",
      en: "Kennen throws a shuriken, dealing 75/125/175/225/275 (+75% [[AP_SCALE]]) [[DMG_MAGIC]] to the first enemy hit. \n \n 7/6.25/5.5/4.75/4 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 5번째 [[BA]]마다 [[ON_HIT]] 35/45/55/65/75(+80/90/100/110/120% 추가 [[AD_SCALE]])(+35% [[AP_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 사용 시: 케넨이 전기 [[DETONATE]]을 일으켜 폭풍의 표식(P) ([[DEBUFF_STACK]])이 있는 주변 적에게, \n 70/95/120/145/170(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 13/11.25/9.5/7.75/6초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Every 5th [[BA]] deals an additional 35/45/55/65/75 (+80/90/100/110/120% bonus [[AD_SCALE]]) (+35% [[AP_SCALE]]) [[DMG_MAGIC]] [[ON_HIT]]. \n \n Active: Kennen causes an electrical [[DETONATE]] on nearby enemies with Mark of the Storm (P) ([[DEBUFF_STACK]]), \n dealing 70/95/120/145/170 (+80% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 13/11.25/9.5/7.75/6 second [[COOLDOWN]].",
    },
    E: {
      ko: "케넨이 2초 동안 번개 구체로 [[TRANSFORM]]해 [[GHOSTING]] 상태가 되어 100%의 [[MS_SCALE]]를 얻고, \n 충돌하는 적에게 80/120/160/200/240(+80% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n 한 명 이상의 적에게 피해를 입힐 경우 기력을 40 얻습니다. ([[ENERGY_RESTORE]]) \n \n 이 스킬의 효과가 끝나면 4초 동안 50/60/70/80/90%의 [[AS_SCALE]]를 얻습니다. \n [[CRIT]] 발동 시 지속시간이 1초 늘어납니다. ([[DURATION_EXT]]) \n \n E [[RECAST_CANCEL]]로 스킬을 일찍 끝낼 수 있습니다. \n \n 10/9/8/7/6초의 [[COOLDOWN]].",
      en: "Kennen [[TRANSFORM]]s into a lightning ball for 2 seconds, becoming [[GHOSTING]] and gaining 100% [[MS_SCALE]], \n and deals 80/120/160/200/240 (+80% [[AP_SCALE]]) [[DMG_MAGIC]] to enemies he collides with. \n If he damages at least one enemy, he gains 40 energy. ([[ENERGY_RESTORE]]) \n \n When this effect ends, he gains 50/60/70/80/90% [[AS_SCALE]] for 4 seconds. \n Landing a [[CRIT]] extends the duration by 1 second. ([[DURATION_EXT]]) \n \n E [[RECAST_CANCEL]] ends the skill early. \n \n 10/9/8/7/6 second [[COOLDOWN]].",
    },
    R: {
      ko: "케넨이 마법 폭풍을 방출해([[AURA]]) 0.5초마다 주변 모든 적에게 40/80/120(+25% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 3초 동안 [[AR_SCALE]]과 [[MR_SCALE]]을 25/50/75 얻습니다. \n \n 동일한 적에게 다시 스킬을 맞힐 때마다 피해량이 10%씩 증가합니다. (최대 150%) \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Kennen releases a magical storm ([[AURA]]), dealing 40/80/120 (+25% [[AP_SCALE]]) [[DMG_MAGIC]] to all nearby enemies every 0.5 seconds, \n and gains 25/50/75 [[AR_SCALE]] and [[MR_SCALE]] for 3 seconds. \n \n Each subsequent hit on the same enemy increases the damage by 10%. (Up to 150%) \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default kennen;
