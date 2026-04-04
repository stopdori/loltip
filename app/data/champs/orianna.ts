import type { ChampData } from "../interactions/types";

const orianna: ChampData = {
  id: "orianna",
  skills: {
    P: [],
    Q: ["Q_FLASH"],
    W: ["MS_UP", "SLOW"],
    E: ["E_FLASH", "SHIELD"],
    R: ["R_FLASH", "GRAB", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: { phases: [
      { label: { ko: "구체(공)", en: "Ball" }, tags: ["SUMMON"] },
      { label: { ko: "P 버프스택", en: "P Buff" }, tags: ["DMG_MAGIC", "ON_HIT", "BUFF_STACK"] },
    ] },
        
    Q: ["DMG_MAGIC", "PROJECTILE", "PIERCE", "ZONE"],
    W: ["DMG_MAGIC", "ZONE"],
    E: ["DMG_MAGIC", "PROJECTILE", "TARGETED", "PIERCE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "ZONE"],
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "오리아나의 모든 스킬은 공에서 발동.", "공과 거리가 너무 멀어지면 공이 몸으로 돌아옴. \n 최대 범위는 미드 일자부쉬 정도.", "공에 텔 안타짐", "평타는 같은 대상을 때릴수록 \n [[ON_HIT]] 효과가 최대 2회 증가.", "Q는 원하는 위치에 공을 이동시키면서 \n 경로의 적에게 피해.", "W는 공 주변 데미지 \n 아군은 [[MS_UP]], 적군은 [[SLOW]].", "E의 [[PASSIVE_BONUS]] 효과로\n공을 들고있는 대상은 방마저 증가.", "E는 아군 대상에게 공을 부착시키고 [[SHIELD]].", "R은 공의 넓은범위 데미지, [[AIRBORNE]].", "오리녹턴(말파,요네,조이 등등) 연계는\n아군이 오리 E 사거리 안에 있다가 아군이 날아가는 순간에 오리가 E를 주고 R을 연타하면 공이 아군몸에 접촉했을 때 발동\n순간적으로 공 범위가 벗어나도 발동.",
      ],
        en: ["Cannot TP onto the ball", "E's passive grants bonus armor and MR to whoever holds the ball", "Orianna-Nocturne (Malphite, Yone, Zoe, etc.) combos:\nWhile an ally is within E range and about to be launched, Orianna casts E then immediately R — the ball arrives in time to trigger"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 110,
    11: 95,
    16: 80,
  },

};

export default orianna;
