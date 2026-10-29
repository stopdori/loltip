import type { ChampData } from "../interactions/types";

const malphite: ChampData = {
  id: "malphite",
  skills: {
    P: ["SHIELD", "SEPARATOR", "COOLDOWN", "OUT_OF_COMBAT"],
    Q: ["Q_FLASH", "SLOW", "MS_UP"],
    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["AR_UP", "SEPARATOR", "ST_CONDITIONAL", "AR_UP", "X3"] },
      { label: { ko: "W 액티브", en: "W Active" }, tags: ["AA_RESET", "ON_HIT"] },
    ] },

    E: ["E_FLASH", "CRIPPLE"],

    R: ["UNSTOPPABLE", "DASH", "WALL_HOP", "SEPARATOR", "AIRBORNE"],
  },

  vision: {
    P: [],
    Q: ["POSITION_REVEAL"],
    W: [],
    E: ["POSITION_REVEAL"],
    R: ["HIT_SOUND"],
  },

  gimmick: {
    P: ["SHIELD", "SEPARATOR", "COOLDOWN", "OUT_OF_COMBAT"],

    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SEPARATOR", "SLOW", "MS_UP"],

    W: { phases: [
      { label: { ko: "W 패시브", en: "W Passive" }, tags: ["AR_UP", "SEPARATOR", "ST_CONDITIONAL", "AR_UP", "X3"] },
      { label: { ko: "W 액티브 평타 강화", en: "W Active Empowered BA" }, tags: ["AA_RESET", "SEPARATOR", "DMG_PHYSICAL", "ON_HIT"] },
      { label: { ko: "W 액티브 여진", en: "W Active Aftershock" }, tags: ["DMG_PHYSICAL", "AOE", "ON_HIT"] },
    ] },

    E: ["DMG_MAGIC", "TIMING_CAST", "AOE", "CRIPPLE"],

    R: ["DMG_MAGIC", "AOE", "UNSTOPPABLE", "DASH", "WALL_HOP", "SEPARATOR", "AIRBORNE"],
  },

  notes: {
    skill: {
      note3: {
        ko: [], en: [] },
      note1: {

        ko: [
          "P는 [[COOLDOWN]] 동안 [[OUT_OF_COMBAT]] 시 \n [[SELF_MAXHP_SCALE]] 비례 [[SHIELD]] 10%. \n \n",

          "Q는 [[TARGETED]] [[PROJECTILE]] 발사. \n [[DMG_MAGIC]]와 [[SLOW]]. \n [[SLOW]]만큼 말파이트의 [[MS_UP]]. \n \n",

          "W의 [[PASSIVE_BONUS]]는 \n [[AR_SCALE]]에 비례하여 %로 [[AR_UP]]. \n P의 [[SHIELD]]가 유지되는 동안 효과 3배.", 
          "W는 다음 [[BA]]를 [[EMPOWERED]]. \n [[AR_SCALE]] 비례 [[ON_HIT]] [[DMG_PHYSICAL]]. \n [[AA_RESET]] 가능.", 
          "W의 지속시간 동안 \n 대상과 주변에 [[ON_HIT]] [[AOE]] [[DMG_PHYSICAL]]. \n \n",

          "E는 주변 [[AOE]] [[DMG_MAGIC]]와 [[CRIPPLE]]. \n \n",

          "R은 [[UNSTOPPABLE]] [[DASH]]. \n 도착 지점에 [[AOE]] [[DMG_MAGIC]]와 [[AIRBORNE]].",
        ],

        en: [
          "P: when [[OUT_OF_COMBAT]] for the [[COOLDOWN]], \n gains a [[SHIELD]] equal to 10% of [[SELF_MAXHP_SCALE]]. \n \n",

          "Q fires a [[TARGETED]] [[PROJECTILE]]. \n [[DMG_MAGIC]] and [[SLOW]]. \n Malphite gains [[MS_UP]] equal to the [[SLOW]]. \n \n",

          "W's [[PASSIVE_BONUS]] \n grants [[AR_UP]] as a % of [[AR_SCALE]]. \n The effect triples while P's [[SHIELD]] is up.",
          "W makes the next [[BA]] [[EMPOWERED]]. \n [[ON_HIT]] [[DMG_PHYSICAL]] based on [[AR_SCALE]]. \n Can [[AA_RESET]].",
          "For W's duration, \n deals [[ON_HIT]] [[AOE]] [[DMG_PHYSICAL]] to the target and nearby enemies. \n \n",

          "E deals nearby [[AOE]] [[DMG_MAGIC]] and [[CRIPPLE]]. \n \n",

          "R is an [[UNSTOPPABLE]] [[DASH]]. \n On arrival, deals [[AOE]] [[DMG_MAGIC]] and [[AIRBORNE]].",
        ]

      },

      note2: {
        ko: [
        "R은 맨바닥에 박을 때랑 적을 박을 때 소리가 다름. \n 그래서 [[CAMOUFLAGE]] 또는 모습이 보이지 않는 적을 맞히면 소리로 구분."
      ],
        en: [
          "R sounds different when it slams bare ground versus an enemy. \n So hitting a [[CAMOUFLAGE]]d or unseen enemy can be identified by sound."
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

  // 스킬 아이콘 호버 툴팁 하드코딩 문장. P/Q/W/E/R 모두 DDragon(ko_KR, 16.20.1) 원문을 뼈대로 씀
  // (P는 CDragon 문자열 테이블에 별도 인게임 원문이 없어 DDragon description 사용).
  // 수치는 공식 위키(V26.09)로 채움(CDragon 게임 데이터 malphite.bin.json과 일치 확인).
  skillTooltip: {
    P: {
      ko: "말파이트는 여러 겹의 돌로 감싸여 있어 [[SELF_MAXHP_SCALE]] 비례의 10%만큼의 [[SHIELD]]를 얻을 수 있습니다. \n \n [[COOLDOWN]] 동안 공격 받지 않으면 [[SHIELD]]가 재생성됩니다. ([[OUT_OF_COMBAT]]) \n \n 8/7/6초의 [[COOLDOWN]].",
      en: "Malphite is shielded by layers of rock, gaining a [[SHIELD]] equal to 10% of [[SELF_MAXHP_SCALE]]. \n \n If Malphite is not attacked for the [[COOLDOWN]], the [[SHIELD]] regenerates. ([[OUT_OF_COMBAT]]) \n \n 8/7/6 second [[COOLDOWN]].",
    },
    Q: {
      ko: "말파이트가 대지의 조각을 날려 70/120/170/220/270(+60% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입히며 3초 동안 20/25/30/35/40% [[SLOW]]시킵니다. \n \n 대상이 [[SLOW]]된 만큼 말파이트의 [[MS_SCALE]]가 증가됩니다. \n \n 8초의 [[COOLDOWN]].",
      en: "Malphite sends a shard of the earth, dealing 70/120/170/220/270 (+60% [[AP_SCALE]]) [[DMG_MAGIC]] and [[SLOW]]ing the target by 20/25/30/35/40% for 3 seconds. \n \n Malphite gains [[MS_SCALE]] equal to the amount the target is [[SLOW]]ed. \n \n 8 second [[COOLDOWN]].",
    },
    W: {
      ko: "[[PASSIVE_BONUS]]: 말파이트가 10/15/20/25/30%의 [[AR_SCALE]]을 얻습니다. \n 이 효과는 화강암 방패(P)가 활성화된 동안 30/45/60/75/90%까지 증가합니다. \n \n 사용 시: 말파이트의 다음 [[BA]] 공격 시 [[ON_HIT]] 30/40/50/60/70(+20% [[AP_SCALE]])(+15% [[AR_SCALE]])의 [[DMG_PHYSICAL]]를 추가로 입히고, ([[EMPOWERED]]) \n 여진을 생성해 해당 방향에 15/25/35/45/55(+30% [[AP_SCALE]])(+15% [[AR_SCALE]])의 [[DMG_PHYSICAL]]를 입힙니다. \n 다음 5초 동안 [[BA]] 공격 [[ON_HIT]] 여진이 생성됩니다. \n \n 10/9.5/9/8.5/8초의 [[COOLDOWN]].",
      en: "[[PASSIVE_BONUS]]: Malphite gains 10/15/20/25/30% [[AR_SCALE]]. \n This effect increases to 30/45/60/75/90% while Granite Shield (P) is active. \n \n Active: Malphite's next [[BA]] attack deals an additional 30/40/50/60/70 (+20% [[AP_SCALE]]) (+15% [[AR_SCALE]]) [[ON_HIT]] [[DMG_PHYSICAL]], ([[EMPOWERED]]) \n and creates an aftershock that deals 15/25/35/45/55 (+30% [[AP_SCALE]]) (+15% [[AR_SCALE]]) [[DMG_PHYSICAL]] in that direction. \n For the next 5 seconds, [[BA]] attacks create aftershocks [[ON_HIT]]. \n \n 10/9.5/9/8.5/8 second [[COOLDOWN]].",
    },
    E: {
      ko: "말파이트가 바닥을 내려쳐 주변 적에게 60/95/130/165/200(+60% [[AP_SCALE]])(+40% [[AR_SCALE]])의 [[DMG_MAGIC]]를 입히고, \n 3초 동안 적들의 공격 속도를 30/35/40/45/50% 감소시킵니다. ([[CRIPPLE]]) \n \n 7초의 [[COOLDOWN]].",
      en: "Malphite slams the ground, dealing 60/95/130/165/200 (+60% [[AP_SCALE]]) (+40% [[AR_SCALE]]) [[DMG_MAGIC]] to nearby enemies, \n and reducing their attack speed by 30/35/40/45/50% for 3 seconds. ([[CRIPPLE]]) \n \n 7 second [[COOLDOWN]].",
    },
    R: {
      ko: "말파이트가 산사태와 같은 힘으로 [[DASH]]하며 [[UNSTOPPABLE]] 상태가 됩니다. \n 돌진이 끝나면 말파이트가 1.5초 동안 대상을 [[AIRBORNE]]시키고 200/300/400(+90% [[AP_SCALE]])의 [[DMG_MAGIC]]를 입힙니다. \n \n {{ultCooldown}}초의 [[COOLDOWN]].",
      en: "Malphite [[DASH]]es with the force of a landslide and becomes [[UNSTOPPABLE]]. \n When the dash ends, Malphite [[AIRBORNE]]s targets for 1.5 seconds and deals 200/300/400 (+90% [[AP_SCALE]]) [[DMG_MAGIC]]. \n \n {{ultCooldown}} second [[COOLDOWN]].",
    },
  },

};

export default malphite;
