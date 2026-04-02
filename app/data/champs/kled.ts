import type { ChampData } from "../interactions/types";

const kled: ChampData = {
  id: "kled",
  skills: {
    base : {
    P: ["UNTARGETABLE", "TOWER_DODGE", "BUFF_FORM"],
    Q: ["Q_FLASH", "GRAB", "SLOW", "VISION"],
    W: ["AS_UP"],
    E: ["MS_UP"],
    R: ["SHIELD", "AIRBORNE", "WALL_HOP", "UNSTOPPABLE"],
  },
  
  alt: {
      // 🔨 변신폼 (근접)
      P: ["MS_UP", "HEAL", "BUFF_FORM"],
      Q: ["Q_FLASH"],      // 변신 Q는 Q플 가능
      W: ["AS_UP"],
      E: [],
      R: [],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["REVEALED", "POSITION_REVEAL"],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["HIT_EFFECT"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["BUFF_FORM"],
      Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE"] },
      { label: { ko: "Q 사슬", en: "Q Tether" }, tags: ["ST_CONDITIONAL", "DMG_PHYSICAL"] },
    ] },
      W: ["DMG_PHYSICAL", "ON_HIT"],
      E: { phases: [
      { label: { ko: "E1", en: "E1" }, tags: ["TARGETED", "AOE", "DASH", "MARK", "SKILL_RECAST"] },
      { label: { ko: "E2", en: "E2" }, tags: ["ST_CONDITIONAL", "TARGETED", "HOMING", "SINGLE", "DASH"] },
    ] },

      R: ["SKILL_CHANNEL", "MOBILITY", "LOCKED", "HOMING", "UNSTOPPABLE"],
    },

    alt: {
      P: [],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "RECHARGE"],
      W: ["DMG_PHYSICAL", "ON_HIT"],
      E: [],
      R: [],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "스칼 체력이 다 달면 낙마 하고,\n낙마 했을때 용기를 100 채우면 다시 승마.\n쿨타임 30초.\n승마할 때 [[GW]] 영향 안 받음.", "용기는 챔피언 평타 15,\n낙마 Q 25, 미니언 처치 5", "승마폼\nQ의 [[TETHER]]이 유지되어야 [[GRAB]], [[SLOW]] 유효.\n\nW는 평타를 때리면 W가 활성화 되면서 3스택을 주고 마지막 스택을 소모할때 큰 피해를 줌.\n쿨타임일 때 평타 0.5초 챔피언 대상은 1.5초 쿨감\n\nE로 돌진하면 [[MS_UP]]가 증가하고, \n처음 적중한 챔피언에게  표식을 남김,\n챔피언에 부딪혔을 때 E 재사용 가능.\nE를 재사용 하면 표식 대상에게 돌진.\n\nR은 설명에 [[UNSTOPPABLE]]가 없지만, 점프해서 날아갈 때 클레드 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝.\n대상의 시야가 보여야 들이받음.", "낙마폼\n 주는 데미지 감소\n주변 적 숫자에 비례해 방마저 증가\n\nQ스킬이 샷건으로 변함.\n\nW는 동일.\n\nE, R 스킬 비활성화."
      ],
        en: ["Mounted:\nQ must remain in contact to apply [[GRAB]] and [[SLOW]].\nE grants [[MS_UP]] on first hit and becomes recastable", "Neither mounted nor dismounted W can AA cancel", "Unsure if [[GW]] affects mounted healing — please report"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 140,
    11: 125,
    16: 110,
  },

};

export default kled;
