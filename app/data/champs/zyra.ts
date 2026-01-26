import type { ChampSkill } from "../types";

const zyra: ChampSkill = {
  id: "zyra",
  skills: {
    P: ["ALLY_TP_OK"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH", "TRUE_SIGHT"],
    E: ["E_FLASH", "ROOT",],
    R: ["AIRBORNE"],
    ETC: [],
  },

  notes: [
    "[[R_FLASH]] 안됨", "씨앗에는 텔 안됨\n식물에는 [[ALLY_TP_OK]]", "Q로 자란 꽃은 ''가시 발사 꽃'' (사거리 김)\nE로 자란 꽃은 ''덩굴 채찍 손'' ([[SLOW]]를 검)\nR은 꽃을 자라게 할 수 없고 버프만 줌", "W로 깐 씨앗을 상대가 밟으면 [[TRUE_SIGHT]]\nP로 생성된 식물은 해당없음"
  ],

  ultCooldown: {
    6: 110,
    11: 100,
    16: 90,
  },

};

export default zyra;
