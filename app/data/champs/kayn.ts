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
          "W로 포킹하다가 Q로 진입하고 R로 시간끌다 Q, E 등으로 탈출 또는 킬각잡기.",
        ], en: [
          "Poke with W, engage with Q, stall with R, then escape or find a kill opportunity with Q or E.",
        ] },
      note1: {

        ko: [
          "P는 피해를 입힌 챔피언 타입(근접/원거리)에 따라 정수를 수집해 변신. \n 근접은 다르킨 정수 \n 원거리는 그림자 암살자 정수 획득. \n \n 다르킨은 챔피언 피해 흡혈 \n \n 그암은 전투 시작 후 잠깐 데미지 증가.",

          "Q는 돌진할때 1번 \n 도착해서 회전 베기 1번 총 2타 판정. \n 케인, 다르킨, 그암 모두 동일.",

          "W는 전방으로 데미지. \n \n 다르킨 변신 시 [[AIRBORNE]] 추가. \n \n 그림자 암살자 변신 시 사거리가 증가하고 \n 움직이면서 시전 가능.",

          "E는 공중 시야 \n 벽을 통과하면 [[HEAL]]. \n 전투 중에는 지속시간 감소.",

          "R은 피해를 입힌 대상에게만 사용 가능. 사용 시 [[UNTARGETABLE]] 상태가 됨.",
        ],

        en: [
          "P collects essence based on the type of champion you damage (melee/ranged) to transform. \n Melee → Darkin essence. \n Ranged → Shadow Assassin essence. \n \n Darkin: lifesteal on champion damage. \n \n Shadow Assassin: brief damage increase after starting combat.",

          "Q hits once during the dash \n and once with the spin slash on arrival — 2 hits total. \n Same for all forms: Kayn, Darkin, Shadow Assassin.",

          "W deals damage to targets in front. \n \n Darkin form adds [[AIRBORNE]]. \n \n Shadow Assassin form increases range \n and allows casting while moving.",

          "E grants aerial vision. \n [[HEAL]] triggers when passing through a wall. \n Duration is reduced while in combat.",

          "R can only be used on a target you have damaged. Activating it makes you [[UNTARGETABLE]].",
        ]

      },

      note2: {
        ko: [
        "진화 전 케인은 정말 약함", 
        "진화 게이지\n 상대 챔피언을 공격하면 \n 원거리(그림자 암살자) / 근거리(다르킨) \n 변신 게이지가 차오름.", 
        "케인 (일반폼) \n Q는 두단계로 나뉨. 돌진단계/회전단계\n돌진단계 중에 [[AIRBORNE]]류, [[CHARM]], [[FEAR]], [[SUPPRESS]], [[SLEEP]]을 맞으면 회전단계를 하지 않음. \n (이 밖에 회전단계 멈추게 하는 거 있으면 제보 부탁.)", 
        "R은 시야가 보여야 쓸 수 있음.", 
        "그림자 암살자(그암) \n P는 전투 시작시 3초동안 버프가 생기는데 데미지가 최대 40프로까지 증가함. \n Q 동일. \n W의 [[TIMING_CAST]] 동안 움직일 수 있고, [[TIMING_AFTERCAST]]이 사라짐.\nE는 쿨타임 감소, 향상된 [[MS_UP]], [[SLOW_IMMUNE]].\nR의 진입 사거리, 빠져나오는 사거리 증가.\n빠져 나올때 P버프 다시 적용.", 
        "다르킨\nP(패시브)에 [[LIFESTEAL]]이있어서 모든스킬이 [[LIFESTEAL]]이 가능.\nQ에 최대체력 데미지 추가. \n W에 [[AIRBORNE]] 추가. \n E 동일. \n R은 최대체력 추가 피해, 피해량 비례 체력회복",
      ],
        en: [
          "Kayn is very weak before evolving",
          "Evolution Gauge\n Attacking enemy champions fills your gauge:\n Ranged enemies → Shadow Assassin gauge.\n Melee enemies → Darkin gauge.",
          "Kayn (Base Form) \n Q has two phases: dash phase / slash phase.\nIf hit by [[AIRBORNE]], [[CHARM]], [[FEAR]], [[SUPPRESS]], or [[SLEEP]] during the dash phase, Q will not perform the spin slash. \n (Please report if there are any other effects that stop the spin slash.)",
          "R requires vision of the target to use.",
          "Shadow Assassin (SA) \n P activates a buff for 3 seconds at the start of combat, increasing damage by up to 40%. \n Q same. \n W can be cast while moving during [[TIMING_CAST]], and [[TIMING_AFTERCAST]] is removed.\nE has reduced cooldown, enhanced [[MS_UP]], and [[SLOW_IMMUNE]].\nR has increased engagement and escape range.\nP buff reapplies upon exiting R.",
          "Darkin\nP (Passive) grants [[LIFESTEAL]], allowing all skills to benefit from [[LIFESTEAL]].\nQ adds max health damage. \n W adds [[AIRBORNE]]. \n E same. \n R deals bonus max health damage and heals proportional to damage dealt.",
        ]
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
