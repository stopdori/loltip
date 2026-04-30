import type { ChampData } from "../interactions/types";

const kayn: ChampData = {
  id: "kayn",

  skills: {
    base: {
      // 🔫 인간폼 (원거리)
      P: [],
      Q: ["WALL_HOP", "DASH"],                // 인간 Q는 Q플 X
      W: ["SLOW"],
      E: ["WALL_HOP", "HEAL", "MS_UP", "MOBILITY"],
      R: ["R_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE", "DASH"],
    },

    alt: {
      // 그림자 암살자
      P: [],
      Q: ["WALL_HOP"],      // 변신 Q는 Q플 가능
      W: ["SLOW"],
      E: ["WALL_HOP", "HEAL", "MS_UP", "MOBILITY", "SLOW_IMMUNE"],
      R: ["R_FLASH", "WALL_HOP", "UNTARGETABLE", "TOWER_DODGE"],
    },

    alt2: {
      // 다르킨
      P: ["LIFESTEAL"],
      Q: ["WALL_HOP"],      // 변신 Q는 Q플 가능
      W: ["AIRBORNE"],
      E: ["WALL_HOP", "HEAL", "MS_UP", "MOBILITY"],
      R: ["R_FLASH", "WALL_HOP", "HEAL", "UNTARGETABLE", "TOWER_DODGE"],
    },

  },

  vision: {
    base: {
      P: [],
      Q: ["HIT_SOUND", "HIT_EFFECT"],
      W: ["HIT_EFFECT"],
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
    alt2: {
      P: [],
      Q: [],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["STACKING"],
      Q: { phases: [
        { label: { ko: "돌진단계", en: "Dash"  }, tags: ["DMG_PHYSICAL", "AOE", "DASH"] },
        { label: { ko: "회전단계", en: "Slash" }, tags: ["DMG_PHYSICAL", "AOE"] },
      ] },
      W: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "AOE"],
      E: ["BUFF_FORM", "MOBILITY"],
      R: ["DMG_PHYSICAL", "TARGETED", "SINGLE", "MARK", "DASH"],
    },
    alt: {
      P: ["BUFF_STACK"],
      Q: { phases: [
        { label: { ko: "돌진단계", en: "Dash"  }, tags: ["DMG_PHYSICAL", "AOE", "DASH"] },
        { label: { ko: "회전단계", en: "Slash" }, tags: ["DMG_PHYSICAL", "AOE"] },
      ] },
      W: ["DMG_PHYSICAL", "AOE"],
      E: ["BUFF_FORM", "MOBILITY"],
      R: ["DMG_PHYSICAL", "TARGETED", "SINGLE", "MARK", "DASH", "BUFF_STACK"],
    },
    alt2: {
      P: [],
      Q: { phases: [
        { label: { ko: "돌진단계", en: "Dash"  }, tags: ["DMG_PHYSICAL", "AOE", "DASH"] },
        { label: { ko: "회전단계", en: "Slash" }, tags: ["DMG_PHYSICAL", "AOE"] },
      ] },
      W: ["DMG_PHYSICAL", "TIMING_CAST", "TIMING_AFTERCAST", "AOE"],
      E: ["BUFF_FORM", "MOBILITY"],
      R: ["DMG_PHYSICAL", "TARGETED", "SINGLE", "MARK", "DASH"],
    },
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P",
          "Q",
          "W",
          "E",
          "R",
        ],

        en: []

      },

      note2: {
        ko: [
        "진화 전 케인은 정말 약함", "진화 게이지\n 원거리(그림자 암살자) / 근거리(다르킨)\n챔피언을 공격하면 차오름.", "케인 (일반폼)\nQ는 두단계로 나뉨. 돌진단계/회전단계\n돌진단계 중에 [[AIRBORNE]]류, [[CHARM]], [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 회전단계를 하지 않음.\n(이 밖에 회전단계 멈추게 하는 거 있으면 제보 부탁.)\nR은 케인이 상대를 한대 이상 때려야 사용할 수 있음.\nR은 시야가 보여야 쓸 수 있음.", "그림자 암살자(그암)\n전투 시작시 3초동안 버프가 생기는데 데미지가 최대 40프로까지 증가함.\nQ 동일.\nW의 [[TIMING_CAST]] 동안 움직일 수 있고, [[TIMING_AFTERCAST]]이 사라짐.\nE는 쿨타임 감소, 향상된 [[MS_UP]], [[SLOW_IMMUNE]].\nR의 진입 사거리, 빠져나오는 사거리 증가.\n빠져 나올때 P버프 다시 적용.", "다르킨\nP(패시브)에 [[LIFESTEAL]]이있어서 모든스킬이 [[LIFESTEAL]]이 가능.\nQ에 최대체력 데미지 추가.\nW에 [[AIRBORNE]] 추가.\nE 동일.\nR은 최대체력 추가 피해, 피해량 비례 체력회복",
      ],
        en: ["Kayn is very weak before evolving", "The Darkin P(Passive) grants [[LIFESTEAL]], allowing all skills to benefit from [[LIFESTEAL]]", "Q has two phases: dash phase / slash phase.\nIf hit by [[AIRBORNE]], [[FEAR]], [[SUPPRESS]], or [[SLEEP]] during the dash phase, Q will not perform the spin slash\n(Please report if there are any other effects that stop the spin slash)"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  // 제이스 궁은 폼 전환이라 쿨 없음
  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default kayn;
