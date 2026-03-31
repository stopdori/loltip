import type { ChampData } from "../interactions/types";

const ksante: ChampData = {
  id: "ksante",

  skills: {
    base: {
      P: [],
      Q: ["Q_FLASH", "SLOW", "STUN", "GRAB"],
      W: ["DMG_REDUCE", "UNSTOPPABLE", "STUN", "UNSTOPPABLE"],
      E: ["SHIELD", "WALL_HOP"],
      R: ["BUFF_FORM", "AS_UP", "SUPPRESS", "WALL_HOP", "UNSTOPPABLE"],
    },
    alt: {
      P: ["LIFESTEAL", "AR_PEN"],
      Q: ["Q_FLASH", "SLOW", "STUN", "GRAB"],
      W: ["DMG_REDUCE", "UNSTOPPABLE"],
      E: ["SHIELD", "WALL_HOP"],
      R: [],
    },
  },

  vision: {
    base: {
      P: [],
      Q: ["HIT_INDICATOR"],
      W: [],
      E: [],
      R: [],
    },
    alt: {
      P: [],
      Q: ["HIT_INDICATOR"],
      W: [],
      E: [],
      R: [],
    },
  },

  gimmick: {
    base: {
      P: ["MARK"],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "DEBUFF_STACK"],
      W: ["DMG_PHYSICAL", "SKILL_CHARGED", "ST_DELAYED", "AOE", "DASH", "DEBUFF_STACK", "UNSTOPPABLE"],
      E: ["NON_TARGETED", "DASH"],
      R: ["BUFF_FORM", "DEBUFF_STACK", "TIMING_CAST", "LOCKED", "BLINK", "UNSTOPPABLE"],
    },
    alt: {
      P: [],
      Q: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "BUFF_STACK", "DEBUFF_STACK"],
      W: ["DMG_TRUE", "SKILL_CHARGED", "ST_DELAYED", "AOE", "DASH", "DEBUFF_STACK", "UNSTOPPABLE"],
      E: ["NON_TARGETED", "DASH"],
      R: [],
    },
  },

  notes: {
    skill: {
      note2: {
        ko: ["[[THE_COPYPASTA]]", "Q의 [[GRAB]]은 Q3에 적용.", "R은 설명에 [[UNSTOPPABLE]]가 없지만, 뒤로 밀어낼 때 크산테 체력바 위에 [[UNSTOPPABLE]]가 생김. 도착하면 끝.", "R은 대상을 뒤로 밀치고 대상 뒤에 크산테가 등장해서 때리는 것. 이때 뒤에 지형지물(협곡외벽 제외)이 있다면 끝까지 통과", "R은 사용 후, 재사용해서 해제 불가"
        ],
        en: ["[[THE_COPYPASTA]]", "R's [[UNSTOPPABLE]] is not shown in the description, but appears above K'Sante's health bar while launching the target backward. It ends upon arrival.", "R launches the target backward while K'Sante appears behind them to strike. If there is terrain behind the target (excluding the map boundary), K'Sante passes all the way through.", "R cannot be cancelled by reactivating after use."]
        },
    },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },
};

export default ksante;
