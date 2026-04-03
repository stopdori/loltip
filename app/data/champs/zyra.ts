import type { ChampData } from "../interactions/types";

const zyra: ChampData = {
  id: "zyra",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH"],
    E: ["E_FLASH", "ROOT",],
    R: ["AIRBORNE"],
  },

  vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
  },

  gimmick: {
    P: ["ST_CONDITIONAL", "DROP"],

    Q: { phases: [
      { label: { ko: "Q", en: "Q" }, tags: ["DMG_MAGIC", "TIMING_CAST", "ZONE"] },
      { label: { ko: "가시 발사 꽃 소환", en: "Summon Thorn Splitter" }, tags: ["ST_CONDITIONAL", "SUMMON"] },
      { label: { ko: "가시 발사 꽃", en: "Thorn Splitter" }, tags: ["DMG_MAGIC", "PROJECTILE"] },
    ] },

    W: ["RECHARGE", "DROP"],

    E: { phases: [
      { label: { ko: "E", en: "E" }, tags: ["DMG_MAGIC", "TIMING_CAST", "PIERCE", ] },
      { label: { ko: "덩굴 채찍 손 소환", en: "Summon Vine Lasher" }, tags: ["ST_CONDITIONAL", "SUMMON"] },
      { label: { ko: "덩굴 채찍 손", en: "Vine Lasher" }, tags: ["DMG_MAGIC", "PROJECTILE"] },
    ] },

    R: { phases: [
      { label: { ko: "R", en: "R" }, tags: ["DMG_MAGIC", "TIMING_CAST"] },
      { label: { ko: "에어본", en: "Airborne" }, tags: ["ST_DELAYED", "AIRBORNE"] },
      { label: { ko: "식물 버프", en: "Plant Buff" }, tags: ["ST_CONDITIONAL"] },
    ] },
   
  },

  notes: {
    skill: {
      note2: {
        ko: [
        "[[R_FLASH]] 안됨", "씨앗에 텔 안됨 \n 식물에는 [[ALLY_TP_OK]]", "Q로 자란 꽃은 ''가시 발사 꽃'' (사거리 김) \n E로 자란 꽃은 ''덩굴 채찍 손'' ([[SLOW]]를 검) \n R은 꽃을 자라게 할 수 없고 버프만 줌\n 이미 자란 식물에 R을 쓰면 강화되고 소환 지속시간이 초기화됨.\n 씨앗에 R을 쓰고 식물을 자라게해도 적용.", "W로 깐 씨앗을 상대가 밟으면 [[TRUE_SIGHT]] \n P로 생성된 식물은 해당없음."
      ],
        en: ["[[R_FLASH]] not possible", "Cannot TP onto seeds.\nPlants allow [[ALLY_TP_OK]]", "Q-grown plant: 'Thorn Spitter' (long range)\nE-grown plant: 'Vine Lasher' (applies [[SLOW]])\nR does not grow plants — it only buffs existing ones", "Enemies stepping on W seeds reveal themselves via [[TRUE_SIGHT]].\nP-spawned plants do not have this effect"]
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

export default zyra;
