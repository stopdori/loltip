import type { ChampData } from "../interactions/types";

const amumu: ChampData = {
  id: "amumu",
  skills: {
    P: [],
    Q: ["Q_FLASH", "STUN", "WALL_HOP", "CC_BUFFER"],
    W: [],
    E: ["E_FLASH"],
    R: ["R_FLASH", "STUN"],
  },

  vision: {
    P: ["VISION"],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["DMG_TRUE", "DEBUFF"],
    Q: { phases: [
      { label: { ko: "투척단계", en: "Throw" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "RECHARGE", "CC_BUFFER", "STUN"] },
      { label: { ko: "돌진단계", en: "Dash"  }, tags: ["DASH", "HOMING"] },
    ] },
    W: ["DMG_MAGIC", "SKILL_TOGGLE", "AOE", "DOT"],
    E: ["DMG_MAGIC", "TIMING_CAST", "AOE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "DEBUFF", "STUN"],
  },

     notes: {
    skill: {
      note3: {

        ko: [
          
          "Q로 진입하고 R로 광역 [[STUN]]과 [[DEBUFF]]를 걸고 \n W로 비벼서 [[DEBUFF]] 유지 시키면서 \n 안 걸린 애들 [[BA]]로 한대씩 때리고 중간중간 E로 패기.",
          "들어오는 상대 Q, R로 수비하기."
        
        ],

        en: [
          "Engage with Q, apply AoE [[STUN]] and [[DEBUFF]] with R, \n keep the [[DEBUFF]] active by staying close with W, \n hit unaffected enemies with [[BA]], and mix in E.",
          "Use Q and R defensively against incoming enemies.",
        ]

      },


      note1: {

        ko: [

        "[[BA]]로 챔피언을 공격하면 [[DEBUFF]]를 걸고 \n 대상이 [[DMG_MAGIC]]를 받으면 추가로 [[DMG_TRUE]]. \n 여러명 적용 가능.",
        "Q를 맞히면 대상에게 [[DASH]] \n 대상이 움직이면 따라감.",
        "W는 P의 [[DEBUFF]]의 지속시간 초기화.",
        "E는 주변대상 후리기. \n 아무무가 맞을수록 쿨타임 감소",
        "R은 적중한 대상 모두 [[STUN]]과 P의 [[DEBUFF]]",
        ],

        en: [
        "Hitting a champion with [[BA]] applies [[DEBUFF]]. \n When that target takes [[DMG_MAGIC]], it triggers bonus [[DMG_TRUE]]. \n Can apply to multiple targets.",
        "Hitting with Q dashes to the target. \n Follows the target if they move.",
        "W resets the duration of P's [[DEBUFF]].",
        "E strikes nearby targets. \n Cooldown decreases the more Amumu gets hit.",
        "R applies [[STUN]] and P's [[DEBUFF]] to all targets hit.",
        ]

      },

      note2: {
        ko: [
        "Q로 날아가면서 R 안써짐", "Q는 두단계로 나뉨.\n투척단계 / 돌진단계\n투척 단계에 CC를 맞아도 붕대가 적중하면 돌진 단계가 발동하여 이동하는것.\n단, CC는 남아있음.", "Q로 따라갈 수 있는 최대 거리? 시간?이 있는것으로 추정됨\n약 미드 1~2차 타워 사이거리 정도.", "R은 버튼을 누르고 스킬이 발동하는 데까지 딜레이가 있음.(선딜) 꽤 체감됨."
      ],
        en: ["R cannot be used while Q is in flight", "Q is split into two phases: throwing phase / dash phase.\nEven if hit by CC during the throwing phase, if the bandage connects, the dash phase activates and Amumu still moves.\nHowever, the CC remains active.", "Q appears to have a maximum follow distance/time — roughly the distance between the 1st and 2nd mid lane towers.", "There is a delay (wind-up) between pressing the R button and the skill being activated."]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 150,
    11: 125,
    16: 100,
  },

};

export default amumu;
