import type { ChampData } from "../interactions/types";

const nunu: ChampData = {
  id: "nunu",
  skills: {
    P: ["AS_UP", "MS_UP"],
    Q: ["Q_FLASH", "LIFESTEAL"],
    W: ["W_FLASH", "AIRBORNE"],
    E: ["E_FLASH", "SLOW", "ROOT"],
    R: ["SHIELD", "SLOW"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["BUFF_STACK"],
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED"],
    W: { phases: [
      { label: { ko: "W", en: "W" }, tags: ["DMG_MAGIC", "SKILL_CHANNEL", "AOE"] },
      { label: { ko: "W 손놓기", en: "W Release" }, tags: ["DMG_MAGIC", "PROJECTILE", "AOE"] },
    ] },
    
    E: { phases: [
      { label: { ko: "E 눈덩이", en: "E Snowball" }, tags: ["DMG_MAGIC", "PROJECTILE", "SINGLE", "MARK"] },
      { label: { ko: "E 부채꼴", en: "E Cone" }, tags: ["DMG_MAGIC", "AOE", "MARK"] },
      { label: { ko: "E 장판", en: "E Zone" }, tags: ["ST_CONDITIONAL", "STACK_CONSUME", "AOE"] },
    ] },
    
    R: ["DMG_MAGIC", "SKILL_CHANNEL", "AOE"],
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "P는 미드 일자부쉬 정도의 범위내의 적들 머리위에 표식이 생김\n 표식 대상에게 데미지를 입히면 (아이템 효과 포함) 표식이 제거 되면서 누누와 아군 한명에게 버프가 생김.", "Q는 미니언, 몬스터에게 [[DMG_TRUE]]\n 챔피언에게는 [[DMG_MAGIC]]\n누누체력이 50% 미만이면 [[HEAL]]량은 1.5배", "W로 눈덩이를 굴리다가 재사용하면 놓을 수 있음", "E를 사용하면 누누에게 원이 생기는데 이 원이 끝날 때 [[ROOT]]을 검\n단, E가 한번이라도 적중한 대상에게만 [[ROOT]]을 검", "[[R_FLASH]] 안됨. R은 다른 행동하면 시전이 풀림", "R의 [[SLOW]]는 범위 안에 있는 대상에게 지속 적용"
      ],
        en: ["During W snowball rolling, recasting throws it", "E creates a circle around Nunu that applies [[ROOT]] at expiration.\nOnly targets hit at least once by E during this time are [[ROOT]]ed", "[[R_FLASH]] not possible. R cancels on any other action", "R's [[SLOW]] continuously applies to targets inside the area"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default nunu;
