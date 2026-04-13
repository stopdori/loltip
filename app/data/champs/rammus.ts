import type { ChampData } from "../interactions/types";

const rammus: ChampData = {
  id: "rammus",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "AIRBORNE", "SLOW"],
    W: ["BUFF_FORM"],
    E: ["E_FLASH", "TAUNT"],
    R: ["WALL_HOP", "AIRBORNE", "SLOW", "CC_IMMUNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: ["BUFF_STACK", "DMG_MAGIC", "SKILL_CHANNEL", "CANCELLABLE"],
    W: ["BUFF_FORM", "ST_CONDITIONAL", "DMG_MAGIC", "CANCELLABLE"],
    E: ["TIMING_CAST", "TARGETED"],
    R: ["DMG_MAGIC", "ZONE", "DASH", "CC_IMMUNE"]
    
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
        "P [[AD_UP]]은 방마저 비례", "Q로 변신했을 때 CC에 맞으면 풀림.\nW를 사용해도 풀림.", "E는 몬스터에게만 [[DMG_MAGIC]]. \n 챔피언에게는 피해 없음.", "R은 설명에 [[CC_IMMUNE]]이 없지만, 점프해서 날아갈 때 람머스 체력바 위에 [[CC_IMMUNE]]이 생김. 도착하면 끝.", "R의 점프 거리가 이속 비례임 \n Q 상태에서는 중심부에 추가 [[DMG_MAGIC]], [[AIRBORNE]]. \n [[SLOW]]도 지역에 3회 추가 적용임",
      ],
        en: ["P [[AD_UP]] scales with armor and MR", "R jump distance scales with movement speed.\n[[AIRBORNE]] is only possible while in Q (Powerball).\n[[SLOW]] applies 3 additional times in the area"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default rammus;
