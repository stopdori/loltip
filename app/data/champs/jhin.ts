import type { ChampSkill } from "../types";

const jhin: ChampSkill = {
  id: "jhin",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH"],
    W: ["ROOT"],
    E: ["E_FLASH", "SLOW", "REVEALED", "ALLY_TP_OK"],
    R: ["SLOW", "REVEALED"],
    ETC: [],
  },

  notes: [
    "4타를 들고있으면 이속이 빠름\n4타 유지를 위해 덫을 깔아 지속시간 연장시키면 좋음", "W의 [[ROOT]]은 대상이 어떤피해(디버프들 포함)를 받으면 조건이 활성화됨"
  ],

  ultCooldown: {
    6: 120,
    11: 105,
    16: 90,
  },

};

export default jhin;
