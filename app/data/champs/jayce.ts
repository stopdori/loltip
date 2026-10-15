import type { ChampData } from "../interactions/types";

const jayce: ChampData = {
  id: "jayce",

  skills: {
    base: {
      // 캐논
      P: ["ST_CONDITIONAL", "MS_UP"],
      Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "EMPOWERED"],
      W: ["AA_RESET", "AS_UP"],
      E: ["MS_UP"],
      R: { phases: [
      { label: { ko: "R 해머폼", en: "R Hammer Form" }, tags: ["TRANSFORM"] },
      { label: { ko: "R 해머폼 버프", en: "R Hammer Form Buff" }, tags: ["AR_MR_UP", "SEPARATOR", "ON_HIT"] },
    ] },
    },

    alt: {
      // 해머
      P: ["MS_UP"],
      Q: ["Q_FLASH", "SLOW", "SEPARATOR", "DASH", "WALL_HOP"],
      W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ON_HIT", "MANA_RESTORE"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AURA"] },
    ] },
      E: ["E_FLASH", "KNOCKBACK", "SEPARATOR", "INSEC_KICK"],
      R: { phases: [
      { label: { ko: "R 캐논폼", en: "R Cannon Form" }, tags: ["TRANSFORM"] },
      { label: { ko: "R 캐논폼 버프", en: "R Cannon Form Buff" }, tags: ["ON_HIT", "AR_MR_SHRED"] },
    ] },

    },
  },

  vision: {
    base: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["ST_CONDITIONAL", "MS_UP"],

      Q:    { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "DETONATE"] },
      { label: { ko: "Q 가속 관문(E) 강화", en: "Q Empowered by Acceleration Gate (E)" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "DETONATE"] },
    ] },

      W: ["DMG_PHYSICAL", "PROJECTILE", "ON_HIT", "SEPARATOR", "AA_RESET"],

      E: ["ZONE", "MS_UP"],

      R:    { phases: [
      { label: { ko: "R 해머폼", en: "R Hammer Form" }, tags: ["TRANSFORM"] },
      { label: { ko: "R 해머폼 버프", en: "R Hammer Form Buff" }, tags: ["BUFF_FORM", "AR_MR_UP", "SEPARATOR", "DMG_MAGIC", "ON_HIT"] },
    ] },
    },

    
    alt: {
      P: ["ST_CONDITIONAL", "MS_UP"],

      Q: ["DMG_PHYSICAL", "TARGETED", "AOE", "SLOW", "SEPARATOR", "DASH", "WALL_HOP"],

      W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["ON_HIT", "MANA_RESTORE"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AURA", "DOT", "DMG_MAGIC"] },
    ] },

      E: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "KNOCKBACK"],

      R:    { phases: [
      { label: { ko: "R 캐논폼", en: "R Cannon Form" }, tags: ["TRANSFORM"] },
      { label: { ko: "R 캐논폼 버프", en: "R Cannon Form Buff" }, tags: ["ON_HIT", "AR_MR_SHRED"] },
    ] },
    },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[TRANSFORM]] 시 [[MS_UP]] [[BUFF]]. \n 1레벨부터 [[TRANSFORM]] 가능. \n \n ",

          "캐논폼 [[RANGE_UP]]", 
          "Q는 [[DETONATE]] [[PROJECTILE]] 발사하여 [[DMG_PHYSICAL]]", 
          "Q [[EMPOWERED]]는 E의 [[ZONE]]에 Q [[PROJECTILE]]가 통과하면 [[EMPOWERED]]. \n [[PROJECTILE]] 속도, 사거리, [[DMG_PHYSICAL]] 증가.", 
          "W는 [[BUFF_STACK]] 3개 획득. \n 3번의 [[BA]]를 최대 [[AS_SCALE]]로 공격. \n [[AA_RESET]] 가능.", 
          "E는 일자 [[ZONE]]을 설치. \n 장판에 닿은 제이스와 아군은 [[MS_UP]].", 
          "R은 해머폼으로 [[TRANSFORM]]. \n 해머폼은 [[AR_MR_UP]]. \n 다음 [[BA]]를 [[EMPOWERED]] 하여 [[ON_HIT]] [[DMG_MAGIC]]. \n \n ",

          "해머폼", 
          "Q는 [[DASH]]하여 [[AOE]] [[DMG_PHYSICAL]]와 [[SLOW]].", 
          "W의 [[PASSIVE_BONUS]]는 \n [[BA]] 공격 시 [[ON_HIT]] [[MANA_RESTORE]].", 
          "W는 [[AURA]] [[DOT]] [[DMG_MAGIC]].", 
          "E는 [[SINGLE]] [[TARGETED]] 체력비례 [[DMG_MAGIC]]와 [[KNOCKBACK]].", 
          "R은 캐논폼으로 [[TRANSFORM]]. \n 다음 [[BA]] 공격 시 [[ON_HIT]] [[AR_MR_SHRED]].",
          
        ],

        en: ["P grants an [[MS_UP]] [[BUFF]] on [[TRANSFORM]]. \n Can [[TRANSFORM]] from level 1. \n \n ",
          "Cannon Form [[RANGE_UP]]",
          "Q fires a [[DETONATE]] [[PROJECTILE]], dealing [[DMG_PHYSICAL]]",
          "Q [[EMPOWERED]]: when the Q [[PROJECTILE]] passes through E's [[ZONE]], it becomes [[EMPOWERED]]. \n [[PROJECTILE]] speed, range, and [[DMG_PHYSICAL]] increase.",
          "W grants 3 [[BUFF_STACK]]s. \n The next 3 [[BA]]s are made at max [[AS_SCALE]]. \n Can [[AA_RESET]].",
          "E places a straight-line [[ZONE]]. \n Jayce and allies touching the zone gain [[MS_UP]].",
          "R [[TRANSFORM]]s into Hammer Form. \n Hammer Form gains [[AR_MR_UP]]. \n The next [[BA]] becomes [[EMPOWERED]], dealing [[ON_HIT]] [[DMG_MAGIC]]. \n \n ",
          "Hammer Form",
          "Q [[DASH]]es, dealing [[AOE]] [[DMG_PHYSICAL]] and [[SLOW]].",
          "W's [[PASSIVE_BONUS]] \n grants [[ON_HIT]] [[MANA_RESTORE]] on [[BA]].",
          "W deals [[AURA]] [[DOT]] [[DMG_MAGIC]].",
          "E deals [[SINGLE]] [[TARGETED]] health-based [[DMG_MAGIC]] and [[KNOCKBACK]].",
          "R [[TRANSFORM]]s into Cannon Form. \n The next [[BA]] applies [[ON_HIT]] [[AR_MR_SHRED]]."
        ]

      },

      note2: {
        ko: [
        "캐논폼 EQ보다 QE가 상대 입장에서 반응하기 더 까다로움.", 
        "캐논폼 [[Q_FLASH]] 할때 [[Q_FLASH]] E를 하면 [[EMPOWERED]] 가능.", 
        "캐논폼 W의 [[AS_UP]]는 \n 해머폼으로 [[TRANSFORM]]해도 유지."
      ],
        en: ["In Cannon Form, QE is harder for the opponent to react to than EQ.",
          "When doing a Cannon Form [[Q_FLASH]], using E along with the [[Q_FLASH]] makes it [[EMPOWERED]].",
          "Cannon Form W's [[AS_UP]] \n persists even after [[TRANSFORM]]ing to Hammer Form."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. forms.ts 기준 base=캐논, alt=해머로 폼별 분리
  // (P는 두 폼 동일 문장 반복). 해머 Q/W/E/R은 DDragon(ko_KR, 16.20.1) 원문, 캐논 Q/W/E/R과
  // P는 DDragon에 없거나 요약본이라 CDragon ko_kr lol.stringtable.json의
  // spell_jayce*_tooltip(인게임 원문)을 뼈대로 씀. 수치는 공식 위키(V26.17)로 채움
  // (CDragon 게임 데이터 jayce.bin.json과 일치 확인). 폼 탭으로 나뉘므로 원문의
  // "머큐리 해머:"/"머큐리 캐논:" 접두어는 생략. ultCooldown이 0/0/0이라 R 쿨타임(6초)은
  // 플레이스홀더 대신 직접 기입.
  skillTooltip: {
    base: {
      P: {
        ko: "제이스는 1레벨부터 머큐리 캐논 / 머큐리 해머를 사용해 근접 무기와 원거리 무기를 교체할 수 있습니다. ([[TRANSFORM]]) \n 무기를 교체하면 스킬 또한 바뀌며 0.75초 동안 [[MS_SCALE]]가 30 상승합니다.",
        en: "From level 1, Jayce can swap between melee and ranged weapons using Mercury Cannon / Mercury Hammer. ([[TRANSFORM]]) \n Swapping weapons also changes his skills and increases his [[MS_SCALE]] by 30 for 0.75 seconds.",
      },
      Q: {
        ko: "제이스가 전기 구체를 발사해 처음 적중한 적과 주변 모든 적에게 80/121/162/203/244/285(+130% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n \n 전기 구체가 가속 관문(E)을 통과하면 사거리와 이동 속도가 상승하며, \n 피해량이 112/169.4/226.8/284.2/341.6/399(+182% 추가 [[AD_SCALE]])까지 증가합니다. \n \n 8초의 [[COOLDOWN]].",
        en: "Jayce fires an electric orb, dealing 80/121/162/203/244/285 (+130% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to the first enemy hit and all nearby enemies. \n \n If the orb passes through Acceleration Gate (E), its range and speed increase, \n and its damage increases to 112/169.4/226.8/284.2/341.6/399 (+182% bonus [[AD_SCALE]]). \n \n 8 second [[COOLDOWN]].",
      },
      W: {
        ko: "제이스가 캐논을 과충전해 최대 [[AS_SCALE]]로 3회 공격합니다. \n 각 공격은 [[AD_SCALE]]의 70/78/86/94/102/110%에 해당하는 [[DMG_PHYSICAL]]를 입힙니다. \n \n 13/11.4/9.8/8.2/6.6/5초의 [[COOLDOWN]].",
        en: "Jayce overcharges his cannon, attacking 3 times at max [[AS_SCALE]]. \n Each attack deals [[DMG_PHYSICAL]] equal to 70/78/86/94/102/110% of [[AD_SCALE]]. \n \n 13/11.4/9.8/8.2/6.6/5 second [[COOLDOWN]].",
      },
      E: {
        ko: "제이스가 4초 동안 가속 관문을 열어 통과하는 아군 챔피언의 [[MS_SCALE]]를 35/40/45/50/55/60% 상승시킵니다. \n 상승한 [[MS_SCALE]]는 3초에 걸쳐 원래대로 되돌아옵니다. \n \n 16초의 [[COOLDOWN]].",
        en: "Jayce opens an Acceleration Gate for 4 seconds, increasing the [[MS_SCALE]] of allied champions who pass through it by 35/40/45/50/55/60%. \n The increased [[MS_SCALE]] decays back to normal over 3 seconds. \n \n 16 second [[COOLDOWN]].",
      },
      R: {
        ko: "제이스가 무기를 근접 공격용 머큐리 해머로 [[TRANSFORM]]하고 새로운 스킬을 사용할 수 있게 됩니다. \n 또한 [[AR_SCALE]]과 [[MR_SCALE]]을 5/12/19/26(R [[SKILL_LEVEL_SCALE]] 비례)(+7.5% 추가 [[AD_SCALE]]) 얻고, \n \n [[TRANSFORM]] 후 다음 [[BA]] 시 25/60/95/130(R [[SKILL_LEVEL_SCALE]] 비례)(+30% 추가 [[AD_SCALE]])의 [[DMG_MAGIC]]를 추가로 입힙니다. \n \n 6초의 [[COOLDOWN]].",
        en: "Jayce [[TRANSFORM]]s his weapon into the melee Mercury Hammer, gaining access to new skills. \n He also gains 5/12/19/26 (based on R's [[SKILL_LEVEL_SCALE]]) (+7.5% bonus [[AD_SCALE]]) [[AR_SCALE]] and [[MR_SCALE]], \n \n and his next [[BA]] after [[TRANSFORM]]ing deals an additional 25/60/95/130 (based on R's [[SKILL_LEVEL_SCALE]]) (+30% bonus [[AD_SCALE]]) [[DMG_MAGIC]]. \n \n 6 second [[COOLDOWN]].",
      },
    },

    alt: {
      P: {
        ko: "제이스는 1레벨부터 머큐리 캐논 / 머큐리 해머를 사용해 근접 무기와 원거리 무기를 교체할 수 있습니다. ([[TRANSFORM]]) \n 무기를 교체하면 스킬 또한 바뀌며 0.75초 동안 [[MS_SCALE]]가 30 상승합니다.",
        en: "From level 1, Jayce can swap between melee and ranged weapons using Mercury Cannon / Mercury Hammer. ([[TRANSFORM]]) \n Swapping weapons also changes his skills and increases his [[MS_SCALE]] by 30 for 0.75 seconds.",
      },
      Q: {
        ko: "제이스가 적에게 도약([[DASH]])해 주변 적들에게 60/110/160/210/260/310(+135% 추가 [[AD_SCALE]])의 [[DMG_PHYSICAL]]를 입히고, \n 2초 동안 35/40/45/50/55/60% [[SLOW]]시킵니다. \n \n 16/14/12/10/8/6초의 [[COOLDOWN]].",
        en: "Jayce leaps ([[DASH]]) to an enemy, dealing 60/110/160/210/260/310 (+135% bonus [[AD_SCALE]]) [[DMG_PHYSICAL]] to nearby enemies, \n and [[SLOW]]s them by 35/40/45/50/55/60% for 2 seconds. \n \n 16/14/12/10/8/6 second [[COOLDOWN]].",
      },
      W: {
        ko: "[[PASSIVE_BONUS]]: 해머로 공격 시 제이스의 마나가 15/17/19/21/23/25 회복됩니다. ([[MANA_RESTORE]]) \n \n 사용 시: 제이스가 전류 [[AURA]]를 생성해 4초 동안 140/200/260/320/380/440(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 10초의 [[COOLDOWN]].",
        en: "[[PASSIVE_BONUS]]: Jayce restores 15/17/19/21/23/25 mana when attacking with his hammer. ([[MANA_RESTORE]]) \n \n Active: Jayce creates an electric [[AURA]], dealing 140/200/260/320/380/440 (+100% [[AP_SCALE]]) [[DMG_MAGIC]] over 4 seconds. \n \n 10 second [[COOLDOWN]].",
      },
      E: {
        ko: "제이스가 해머를 휘둘러 대상을 뒤로 [[KNOCKBACK]]시키고, \n 100% 추가 [[AD_SCALE]] + [[TARGET_MAXHP_SCALE]] 비례의 8/10.8/13.6/16.4/19.2/22%에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n \n 20/18/16/14/12/10초의 [[COOLDOWN]].",
        en: "Jayce swings his hammer, [[KNOCKBACK]]ing the target, \n and dealing [[DMG_MAGIC]] equal to 100% bonus [[AD_SCALE]] + 8/10.8/13.6/16.4/19.2/22% of [[TARGET_MAXHP_SCALE]]. \n \n 20/18/16/14/12/10 second [[COOLDOWN]].",
      },
      R: {
        ko: "제이스가 무기를 원거리 공격용 머큐리 캐논으로 [[TRANSFORM]]하고 새로운 스킬을 사용할 수 있게 됩니다. \n \n [[TRANSFORM]] 후 다음 [[BA]]는 5초 동안 대상의 마법 저항력과 방어력을 20/25/30/35%(R [[SKILL_LEVEL_SCALE]] 비례) 감소시킵니다. ([[AR_MR_SHRED]]) \n \n 6초의 [[COOLDOWN]].",
        en: "Jayce [[TRANSFORM]]s his weapon into the ranged Mercury Cannon, gaining access to new skills. \n \n His next [[BA]] after [[TRANSFORM]]ing reduces the target's magic resist and armor by 20/25/30/35% (based on R's [[SKILL_LEVEL_SCALE]]) for 5 seconds. ([[AR_MR_SHRED]]) \n \n 6 second [[COOLDOWN]].",
      },
    },
  },
};

export default jayce;
