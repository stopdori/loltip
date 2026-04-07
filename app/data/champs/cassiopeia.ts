import type { ChampData } from "../interactions/types";

const cassiopeia: ChampData = {
  id: "cassiopeia",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "MS_UP"],
    W: ["W_FLASH", "GROUNDED", "SLOW"],
    E: ["E_FLASH", "SEPARATOR", "ST_CONDITIONAL", "HEAL"],
    R: ["R_FLASH", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
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
    Q: ["DMG_MAGIC", "TIMING_CAST", "ST_DELAYED", "AOE", "DOT"],
    W: ["DMG_MAGIC", "TIMING_CAST", "PROJECTILE", "ZONE", "DOT", "SLOW"],
    E: ["DMG_MAGIC", "TARGETED", "PROJECTILE", "SINGLE"],
    R: ["DMG_MAGIC", "TIMING_CAST", "AOE", "SLOW", "SEPARATOR", "ST_CONDITIONAL", "STUN"],
  },

  notes: {
    skill: {
      note3: {
        ko: [
          "카시는 Q, W의 독을 맞히지 못하면 \n 성능이 나오지 않음.",
          "Q로 조금씩 포킹하다가 \n [[R_FLASH]]로 한번에 광역 [[STUN]]을 걸고 \n W로 도망가지 못하게 만들고 Q, E로 카이팅 하면서 극딜."
        ], en: [
          "Cassiopeia's kit falls apart if she can't land Q or W poison.",
          "Poke bit by bit with Q,\nthen hit a mass [[STUN]] with [[R_FLASH]],\ncut off escapes with W, and melt them while kiting with Q and E.",
        ] },
      note1: {

        ko: [
          "P는 [[MS_UP]] 효과를 증가시킴.",
          "Q는 상대에게 독 [[DEBUFF]]를 검. \n 챔피언 적중 시 [[MS_UP]].",
          "W는 독 [[ZONE]]을 깔고 그 위의 대상에게 \n 독 [[DEBUFF]]와 [[GROUNDED]]  [[DEBUFF]]를 적용. \n 벗어나면 사라짐. \n [[GROUNDED]]는 [[MOBILITY]]스킬을 사용 할 수 없게 만듬.", "W에 관련된 판정은 챔피언별로 하단 박스에 정리.",
          "E는 독 [[DEBUFF]]에 걸린 대상에게 추가 데미지와 [[HEAL]].",
          "R은 광역 데미지와 [[SLOW]]. \n 카시를 바라본 대상은 [[STUN]]."
        ],

        en: [
          "P increases the [[MS_UP]] effect.",
          "Q applies poison [[DEBUFF]] to enemies.\nHitting a champion grants [[MS_UP]].",
          "W places a poison [[ZONE]] that applies poison [[DEBUFF]] and [[GROUNDED]] to enemies inside.\nEffects disappear when they leave.\n[[GROUNDED]] prevents the use of [[MOBILITY]] skills.",
          "W interactions per champion are listed in the matchup box below.",
          "E deals bonus damage and [[HEAL]]s when hitting a target affected by poison [[DEBUFF]].",
          "R deals AoE damage and [[SLOW]]s.\nEnemies facing Cassiopeia are [[STUN]]ned.",
        ]

      },

      note2: {
        ko: [
        "이제 신발 구매가능함", 
        "W는 지형지물 또는 \n 생성된 [[TERRAIN]]에도 겹쳐지게 사용 가능.", 
        "E는 독이걸린 대상에게 추가 데미지.\n독은 Q, W 뿐만 아니라\n티모 E(평타), R(버섯), 트위치 P, W(독병), \n 신지드 Q(독구름)의 독에도 적용.",
      ],
        en: [
          "Boots can now be purchased",
          "W can be overlapped on terrain or created walls.",
          "E deals bonus damage to poisoned targets.\nPoison sources include Q, W, as well as\nTeemo E (auto), R (mushroom), Twitch P, W, and Singed Q.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 120,
    11: 100,
    16: 80,
  },

};

export default cassiopeia;
