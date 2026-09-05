import type { ChampData } from "../interactions/types";

const yasuo: ChampData = {
  id: "yasuo",
  skills: {
    P: ["ST_CONDITIONAL", "SHIELD", "SEPARATOR", "ST_CONDITIONAL", "AD_UP"],
    Q: ["Q_FLASH", "SEPARATOR", "ST_CONDITIONAL", "AIRBORNE"],
    W: ["WINDSHIELD"],
    E: ["E_FLASH", "DASH", "WALL_HOP"],
    R: ["AIRBORNE", "BLINK", "WALL_HOP", "SEPARATOR", "BUFF", "AR_PEN"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["PASSIVE_BONUS"],

    Q: { phases: [
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "AIRBORNE", "SEPARATOR", "ST_CONDITIONAL", "ON_HIT"] },
    ] },
    
    W: ["WINDSHIELD", "TIMING_CAST", "ZONE"],

    E: ["DMG_MAGIC", "TARGETED", "SKILL_CHANNEL", "DASH", "BUFF_STACK", "DEBUFF_STACK"],

    R: ["ST_CONDITIONAL", "BLINK", "DMG_PHYSICAL", "AOE"],
  },

  notes: {
    skill: {
      note3: { 
        ko: [
          "",
        ], en: [] },
      note1: {

        ko: [
          "P는 2개 \n 결의 / 의지",
          "결의 \n 마나 대신 기류 \n 이동 시 기류회복 \n 가득 찼을 때 챔피언, 몬스터에게 피해를 받으면 \n 기류를 전부 소모하여 [[SHIELD]].",
          "의지 \n [[CRIT]] 확률이 2배로 적용. \n 대신 [[CRIT]] 데미지는 기본 200%가 아닌 180%로 적용. \n 100%가 초과한 확률은 1%당 0.5의 [[AD_UP]]. \n \n",

          "Q는 [[AOE]] [[DMG_PHYSICAL]]와 [[BUFF_STACK]]. \n [[BUFF_STACK]]이 2개 쌓이면 다음 Q가 [[EMPOWERED]] (Q3). \n Q3는 [[PIERCE]] [[PROJECTILE]] [[DMG_PHYSICAL]], [[AIRBORNE]].", "E의 [[DASH]] 도중에 Q를 사용하면 회전공격. \n EQ3는 회전공격에 [[AIRBORNE]] 추가. \n \n",

          "W는 [[WINDSHIELD]] \n 적의 [[PROJECTILE]]를 막을 수 있음. \n [[BEAM]]([[NON_PROJECTILE]]) 공격, 포탑 공격은 막을 수 없음. \n \n",

          "E는 대상을 지나치는 [[SKILL_CHANNEL]] [[DASH]]. \n [[DMG_MAGIC]]와 [[BUFF_STACK]]. \n [[BUFF_STACK]]은 최대 4회 중첩. \n [[BUFF_STACK]]당 [[DMG_MAGIC]] 증가. \n \n 대상당 [[COOLDOWN]] 따로 적용. \n \n",

          "R은 [[AIRBORNE]] 대상에게만 사용 가능. \n 사용하면 대상 뒤로 [[BLINK]]. \n [[BLINK]] 지점에 [[AIRBORNE]] 대상이 여럿이면 [[AOE]]로 적용 가능. \n 걸려있던 [[AIRBORNE]] [[DURATION_EXT]]과 [[DMG_PHYSICAL]], [[BUFF]]. \n [[BUFF]]는 [[CRIT]] 피해가 대상 추가 방어력의 60% 무시. \n \n 이때 기류가 최대로 충전. \n 대신 Q의 [[BUFF_STACK]]은 모두 사라짐. \n \n",
        ],

        en: []

      },

      note2: {
        ko: [
        "Q는 [[BA]]로 간주. \n 처음 맞힌 적이게 [[ON_HIT]] 효과와 [[LIFESTEAL]] 적용 가능. \n 공격 속도에 비례하여 [[COOLDOWN]], 시전 속도 감소. \n Q 사용 중에 CC에 맞으면 취소될 수 있음.", 
        "W의 [[WINDSHIELD]]은 적의 [[PROJECTILE]]를 막지만 \n 적에게 이로운 투사체는 잘 막지 못함. \n 예) 럭스 W(쉴드)", 
        "E로 이동하고 나서 땅을 우클릭하면 \n Q가 회전공격을 하지 않음", 
        "야스오의 E의 [[DASH]]은 [[SKILL_CHANNEL]]으로 보여짐 \n 즉, 판정이 좋지 않은 [[DASH]] \n 보통의 [[DASH]]은 [[STUN]]을 잠시 유예하고 [[DASH]]을 끝내는데 \n 야스오의 E는 [[STUN]]이 걸리면 즉시 [[DASH]] 중지.",
        "R은 [[AIRBORNE]]계열 ([[AIRBORNE]], [[KNOCKBACK]], [[GRAB]], [[SUSPENDING]]) 대상에게 사용가능. \n 용, 전령, 바론의 [[AIRBORNE]]에도 사용 가능. \n 아군이 터뜨린 솔방울 탄에 적이 [[AIRBORNE]]이 되면 사용 가능."
      ],
        en: [
          "[[W_FLASH]] and [[R_FLASH]] not possible",
          "P [[AD_UP]] converts excess crit chance into bonus AD",
          "Q [[AIRBORNE]] triggers on the 3rd cast",
          "Getting CC'd during Q's [[TIMING_CAST]] plays only the animation and the attack doesn't land. \n Q3 ignores this and activates anyway.",
          "W (Wind Wall) blocks projectiles, but often fails to block projectiles that benefit the enemy team.\nEx) Lux's W (Shield)",
          "Using Q while mid-dash with E deals AoE damage around Yasuo while moving",
          "Right-clicking the ground after an E dash prevents Q from becoming a tornado spin",
          "Yasuo's E has poor CC resistance compared to typical dashes.\nMost dashes ignore [[STUN]], but Yasuo's E stops immediately on [[STUN]]",
          "R can only target [[AIRBORNE]] enemies.\nR [[AR_SHRED]] applies to all hit targets",
          "R can be used on [[AIRBORNE]]-type effects ([[AIRBORNE]], [[KNOCKBACK]], [[GRAB]], [[SUSPENDING]]). \n Also usable on Dragon, Rift Herald, and Baron [[AIRBORNE]]. \n Also usable if an enemy gets [[AIRBORNE]]ed by an ally's Eye of the Herald projectile.",
        ]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 70,
    11: 50,
    16: 30,
  },

};

export default yasuo;
