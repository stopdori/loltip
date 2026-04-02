import type { ChampData } from "../interactions/types";

const urgot: ChampData = {
  id: "urgot",
  skills: {
    P: [],
    Q: ["Q_FLASH", "SLOW"],
    W: ["W_FLASH", "AA_RESET", "SLOW_RESIST"],
    E: ["E_FLASH", "SHIELD", "GRAB", "STUN"],
    R: ["SLOW", "GRAB", "EXECUTE", "FEAR"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DMG_PHYSICAL", "NON_PROJECTILE", "AOE"],

    Q: { phases: [
      { label: { ko: "Q 투사체", en: "Q Projectile" }, tags: ["TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "Q 장판", en: "Q Zone" }, tags: ["ST_DELAYED", "DMG_PHYSICAL", "ZONE", "MARK"] },
    ] },
    

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["PASSIVE_BONUS", "MARK_INTERACT", "Q", "E", "R",] },
      { label: { ko: "W 기관총", en: "W Machine Gun" }, tags: ["DMG_PHYSICAL", "SKILL_TOGGLE", "PROJECTILE", "SINGLE", "CANCELLABLE"] },
    ] },

    E: { phases: [
      { label: { ko: "준비단계", en: "Wind-up" }, tags: ["TIMING_CAST", "CC_BUFFER"] },
      { label: { ko: "돌진단계", en: "Dash" }, tags: ["DASH"] },
      { label: { ko: "돌진단계 적중", en: "Dash Hit" }, tags: ["DMG_PHYSICAL", "SINGLE", "MARK"] },
    ] },
    
    R: { phases: [
      { label: { ko: "R1", en: "R1" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "SKILL_RECAST", "MARK"] },
      { label: { ko: "R2", en: "R2" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL", "PROJECTILE", "HOMING", "EXECUTE"] },
    ] },
    
    
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[R_FLASH]] 안됨", 
        "다리방향마다 추뎀과 쿨타임이 있음", 
        "E스킬은 두단계로 나뉨 준비/돌진\n준비단계에 우르곳이 맞은 CC는 유효하지만\n돌진단계가 발동되어 앞으로 이동하는것\n돌진단계에는 CC저항력 없음", 
        "R의 [[EXECUTE]]은 대상의 체력 25% 이하일 때\nR2를 사용하면 대상을 [[GRAB]] 해서 우르곳 몸에 일정시간 비벼져야 발동.\n이 때 평타, Q, E 스킬을 사용할 수 없음.\nW는 사용할 수 있지만 공격이 발동하지는 않음.\n이 때 주변에 [[FEAR]] 발동.", "R1으로 대상을 처치할 수는 없음. \n 대신 R1 데미지로 대상의 체력을 1로 만들면 자동으로 R2가 발동함.\n 이 때 우르곳이 죽으면, 대상은 살아남음."
      ],
        en: ["[[R_FLASH]] not possible", "Each leg has individual bonus damage and cooldowns", "E has two phases: prep / dash.\nCC during prep is valid but the dash still fires.\nThere is no CC immunity during the dash phase", "R [[EXECUTE]] requires manual recast when the target falls below 25% HP"]
        },
    },


    vision: {
      ko: [],
      en: [],
    },

    gimmick: {
      ko: [
        "R2의 [[PROJECTILE]]는 우르곳이 R2를 누를때 쇠사슬을 다시 투척해 대상을 끌고오는데, 이 쇠사슬이 [[PROJECTILE]]로 야스오, 사미라 [[WINDSHIELD]]에 막힘."
      ],
      en: [
        "",
      ],
    },
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default urgot;
