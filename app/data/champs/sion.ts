import type { ChampData } from "../interactions/types";

const sion: ChampData = {
  id: "sion",
  skills: {
    P: ["REVIVE"],
    Q: ["SLOW", "AIRBORNE", "STUN"],
    W: ["HEAL", "SHIELD"],
    E: ["E_FLASH", "SLOW", "AR_SHRED"],
    R: ["R_FLASH", "SLOW", "AIRBORNE", "STUN", "CC_IMMUNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: ["HIT_INDICATOR"],
    R: ["HIT_INDICATOR"],
  },

  gimmick: {
    P: ["PASSIVE_BONUS"],
    Q: ["DMG_PHYSICAL", "SKILL_CHARGED", "AOE"],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["SKILL_RECAST"] },
      { label: { ko: "W 폭발", en: "W Explodes" }, tags: ["ST_DELAYED", "DMG_MAGIC", "AOE"] },
    ] },
    
    E: ["DMG_MAGIC", "TIMING_CAST", "PIERCE_MINION"],
    R: ["DMG_PHYSICAL", "SKILL_CHANNEL", "TIMING_CAST", "AOE", "MOBILITY", "CANCELLABLE", "SKILL_RECAST", "CC_IMMUNE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[Q_FLASH]], [[W_FLASH]] 안됨", "Q는 충전을 하면 바닥에 범위가 차오르는데\n1초이상 충전시 [[AIRBORNE]], [[STUN]] 추가", "Q를 직접 발사하지 않고 다른 방해받으면\n스킬이 무효화", "W는 최대체력 증가여서 [[GW]]효과 안받음", "R은 [[UNSTOPPABLE]]이 아닌 [[CC_IMMUNE]]", "R은 이동거리 비례해서 데미지, [[STUN]]이 증가\n상대와 부딪히면 [[AIRBORNE]], 이후 착지하고 [[STUN]]"
      ],
        en: ["[[Q_FLASH]] and [[W_FLASH]] not possible", "Q: charging for 1+ seconds adds [[AIRBORNE]] and [[STUN]] to the release", "Releasing Q by being interrupted (not self-canceling) nullifies the skill", "W increases max HP so [[GW]] has no effect", "R damage and [[STUN]] scale with travel distance.\nColliding with a target causes [[AIRBORNE]], then [[STUN]] on landing"]
        },
    },
  },

  ultCooldown: {
    6: 140,
    11: 100,
    16: 60,
  },

};

export default sion;
