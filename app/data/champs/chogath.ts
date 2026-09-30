import type { ChampData } from "../interactions/types";

const chogath: ChampData = {
  id: "chogath",
  skills: {
    P: ["ON_KILL", "HEAL", "MANA_RESTORE"],
    Q: ["Q_FLASH", "AIRBORNE", "SLOW"],
    W: ["W_FLASH", "SILENCE"],
    E: ["AA_RESET", "SLOW"],
    R: ["R_FLASH", "SIZE_UP", "MAX_HP_UP"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ON_KILL", "HEAL", "MANA_RESTORE"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "ST_DELAYED", "ZONE", "AIRBORNE", "SEPARATOR", "ST_DELAYED", "SLOW"],

    W: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SILENCE"],

    E: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "BUFF_STACK", "SLOW"],

    R: { phases: [
      { label: { ko: "R 액티브", en: "R Active" }, tags: ["DMG_TRUE", "TIMING_CAST", "TARGETED", "SEPARATOR", "ST_CONDITIONAL", "STACKING"] },
      { label: { ko: "R 스태킹", en: "R Stacking" }, tags: ["SIZE_UP", "MAX_HP_UP"] },
    ] },
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 적 [[ON_KILL]] [[HEAL]]과 [[MANA_RESTORE]]. \n \n",

          "Q는 광역 [[DMG_MAGIC]], [[AIRBORNE]]. \n 끝나면 [[SLOW]]. \n [[TIMING_CAST]]과 [[ST_DELAYED]]이 같이있는 정말 느린스킬. \n \n",

          "W는 전방에 부채꼴 [[AOE]] [[DMG_MAGIC]]와 [[SILENCE]]. \n \n",
          
          "E는 [[BUFF_STACK]] 3개를 초가스가 획득. \n [[BA]]를 때리면 [[BUFF]] [[STACK_CONSUME]]해서 \n [[PROJECTILE]]를 추가로 발사. \n 이 [[PROJECTILE]]은 [[PIERCE]]에 [[DMG_MAGIC]], [[SLOW]]. \n \n",

          "R은 [[TARGETED]] [[DMG_TRUE]]. \n 대상 [[ON_KILL]] [[STACKING]]. \n [[SIZE_UP]], [[MAX_HP_UP]]. \n [[SIZE_UP]] 부작용으로 평타 [[RANGE_UP]]. \n \n [[STACKING]]은 미니언, 정글몹에서는 최대 6. \n 챔피언, 에픽몬스터 대상으로는 무제한 [[STACKING]].",
        ],

        en: [
          "P grants [[HEAL]] and [[MANA_RESTORE]] [[ON_KILL]] of an enemy. \n \n",
          "Q deals area [[DMG_MAGIC]] and [[AIRBORNE]]. \n Applies [[SLOW]] when it ends. \n A very slow skill with both [[TIMING_CAST]] and [[ST_DELAYED]]. \n \n",
          "W deals cone-shaped [[AOE]] [[DMG_MAGIC]] and [[SILENCE]] in front. \n \n",
          "E grants Cho'Gath 3 [[BUFF_STACK]]s. \n Each [[BA]] [[STACK_CONSUME]]s the [[BUFF]] \n to fire an additional [[PROJECTILE]]. \n This [[PROJECTILE]] [[PIERCE]]s, dealing [[DMG_MAGIC]] and [[SLOW]]. \n \n",
          "R deals [[TARGETED]] [[DMG_TRUE]]. \n [[STACKING]] [[ON_KILL]] of the target. \n [[SIZE_UP]] and [[MAX_HP_UP]]. \n As a side effect of [[SIZE_UP]], basic attack [[RANGE_UP]]. \n \n [[STACKING]] caps at 6 from minions and jungle monsters. \n Unlimited [[STACKING]] from champions and epic monsters.",
        ]

      },

      note2: {
        ko: [       
        "R은 적 챔피언 체력바에 [[EXECUTE]] 기준이 보임. \n 단, 실제로 [[EXECUTE]] 판정이 아닌 처치되는 기준을 보여주는 것."
      ],
        en: [
          "R shows an [[EXECUTE]] threshold on enemy champions' health bars. \n However, it is not an actual [[EXECUTE]]; it only shows the threshold at which they will be killed.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 80,
    11: 70,
    16: 60,
  },

  // skillTooltip 근거: DDragon ko_KR(16.19.1) + 공식 위키(wiki.leagueoflegends.com/en-us/Cho'Gath,
  // 최근 변경 V26.17). Q/W는 DDragon effectBurn, P/E/R은 비어 있어 위키 본문 수치로 채움.
  skillTooltip: {
    P: {
      ko: "초가스는 적 [[ON_KILL]] \n 체력 18~52를 [[HEAL]]하고 4.72~9.48 [[MANA_RESTORE]]합니다. \n 회복량은 [[LEVEL_SCALE]] 비례로 증가합니다.",
      en: "[[ON_KILL]] of an enemy, Cho'Gath \n [[HEAL]]s 18~52 health and gains 4.72~9.48 [[MANA_RESTORE]]. \n The amount restored increases with [[LEVEL_SCALE]].",
    },
    Q: {
      ko: "초가스가 땅을 파열시켜 1초 동안 적들을 [[AIRBORNE]]시키고 80/135/190/245/300(+100% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히며 1.5초 동안 60% [[SLOW]]시킵니다. \n \n 6초의 [[COOLDOWN]].",
      en: "Cho'Gath ruptures the ground, knocking enemies [[AIRBORNE]] for 1 second, dealing 80/135/190/245/300 (+100% [[AP_SCALE]]) [[DMG_MAGIC]], and [[SLOW]]ing them by 60% for 1.5 seconds. \n \n 6 second [[COOLDOWN]].",
    },
    W: {
      ko: "초가스가 울부짖으며 1.6/1.7/1.8/1.9/2초 동안 적들을 [[SILENCE]]시키고 80/130/180/230/280(+70% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n 11/10.5/10/9.5/9초의 [[COOLDOWN]].",
      en: "Cho'Gath roars, [[SILENCE]]ing enemies for 1.6/1.7/1.8/1.9/2 seconds and dealing 80/130/180/230/280 (+70% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n 11/10.5/10/9.5/9 second [[COOLDOWN]].",
    },
    E: {
      ko: "초가스가 다음 세 번의 [[BA]] 시 가시를 발사하여 30/50/70/90/110(+30% [[AP_SCALE]])+[[TARGET_MAXHP_SCALE]]의 2.5/2.85/3.2/3.55/3.9%(+포식 중첩당 0.5%)에 해당하는 [[DMG_MAGIC]]를 입힙니다. \n 피해를 입은 적은 30/35/40/45/50% [[SLOW]]되었다가 1.5초에 걸쳐 원래대로 돌아옵니다. \n \n 8/7/6/5/4초의 [[COOLDOWN]].",
      en: "Cho'Gath's next three [[BA]]s launch spikes, dealing 30/50/70/90/110 (+30% [[AP_SCALE]]) + 2.5/2.85/3.2/3.55/3.9% (+0.5% per Feast stack) of [[TARGET_MAXHP_SCALE]] as [[DMG_MAGIC]]. \n Enemies hit are [[SLOW]]ed by 30/35/40/45/50%, decaying over 1.5 seconds. \n \n 8/7/6/5/4 second [[COOLDOWN]].",
    },
    R: {
      ko: "초가스가 적을 게걸스럽게 먹어치워, 챔피언에게는 300/475/650(+50% [[AP_SCALE]])(+10% [[SELF_BONUS_HP_SCALE]]), 미니언과 정글 몬스터에게는 1200(+50% [[AP_SCALE]])(+10% [[SELF_BONUS_HP_SCALE]])의 [[DMG_TRUE]]를 입힙니다. \n \n 적 [[ON_KILL]] 초가스의 포식 중첩이 1 올라([[STACKING]]), [[SIZE_UP]]하며 80/120/160의 [[MAX_HP_UP]]를 얻습니다. \n 에픽 몬스터가 아닌 일반 정글 몬스터와 미니언 처치로는 최대 6중첩까지만 얻을 수 있습니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Cho'Gath devours an enemy, dealing 300/475/650 (+50% [[AP_SCALE]]) (+10% [[SELF_BONUS_HP_SCALE]]) [[DMG_TRUE]] to champions, or 1200 (+50% [[AP_SCALE]]) (+10% [[SELF_BONUS_HP_SCALE]]) to minions and jungle monsters. \n \n [[ON_KILL]] of the enemy, Cho'Gath gains 1 Feast stack ([[STACKING]]), gaining [[SIZE_UP]] and 80/120/160 [[MAX_HP_UP]]. \n Only up to 6 stacks can be gained from killing minions and non-epic jungle monsters. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },
};

export default chogath;
