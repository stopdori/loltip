import type { ChampData } from "../interactions/types";

const yasuo: ChampData = {
  id: "yasuo",
  skills: {
    P: ["AD_UP"],
    Q: ["Q_FLASH", "AIRBORNE"],
    W: ["WINDSHIELD"],
    E: ["E_FLASH", "WALL_HOP"],
    R: ["AIRBORNE", "AR_SHRED", "WALL_HOP"],
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
      { label: { ko: "Q1, Q2", en: "Q1, Q2" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "AOE"] },
      { label: { ko: "Q3", en: "Q3" }, tags: ["DMG_PHYSICAL", "TIMING_CAST", "PROJECTILE", "PIERCE", "AIRBORNE"] },
    ] },
    
    W: ["WINDSHIELD", "TIMING_CAST", "ZONE"],
    E: ["DMG_MAGIC", "TARGETED", "DASH", "BUFF_STACK", "DEBUFF_STACK"],
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
        "[[W_FLASH]], [[R_FLASH]] 안됨", "P의 [[AD_UP]]는 치명타 초과분이 변환", "Q에 [[AIRBORNE]]은 Q3타에 발동", "Q의 [[TIMING_CAST]]에 CC에 맞으면 모션만 발동하고 공격이 들어가지 않음. \n Q3는 무시하고 발동.", "W(장막)는 투사체류를 막지만, 상대방 팀원에 이로운 투사체는 잘 막지 못함.\n예) 럭스 W(쉴드)", "E 도중에 Q를 하면\n회전베기를 해서 주변에 피해를 줌", "E로 이동하고 나서 땅을 우클릭하면\nQ가 회전공격을 하지 않음", "야스오의 E는 판정이 안좋은 돌진임\n보통의 돌진류는 [[STUN]]은 무시하고 이동하는데 야스오의 E는 [[STUN]]이 걸리면 즉시 멈춤", "R은 [[AIRBORNE]]인 대상에게만 사용 가능\nR에 [[AR_SHRED]]은 R적중한 모든 대상", 
        "R은 [[AIRBORNE]]계열 ([[AIRBORNE]], [[KNOCKBACK]], [[GRAB]], [[SUSPENDING]]) 대상에게 사용가능. \n 용, 전령, 바론의 [[AIRBORNE]]에도 사용 가능. \n 아군이 터뜨린 솔방울 탄에 적이 [[AIRBORNE]]이 되면 사용 가능."
      ],
        en: ["[[W_FLASH]] and [[R_FLASH]] not possible", "P [[AD_UP]] converts excess crit chance into bonus AD", "Q [[AIRBORNE]] triggers on the 3rd cast", "Using Q while mid-dash with E deals AoE damage around Yasuo while moving", "Right-clicking the ground after an E dash prevents Q from becoming a tornado spin", "Yasuo's E has poor CC resistance compared to typical dashes.\nMost dashes ignore [[STUN]], but Yasuo's E stops immediately on [[STUN]]", "R can only target [[AIRBORNE]] enemies.\nR [[AR_SHRED]] applies to all hit targets"]
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
