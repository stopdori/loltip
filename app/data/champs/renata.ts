import type { ChampData } from "../interactions/types";

const renata: ChampData = {
  id: "renata",
  skills: {
    P: [],
    Q: ["ROOT", "STUN"],
    W: ["W_FLASH", "MS_UP"],
    E: ["SHIELD", "SLOW"],
    R: ["R_FLASH", "BERSERK", "UNINTERRUPTIBLE_CAST"],
    ETC: [],
  },

  notes: {
    ko: [
    "[[Q_FLASH]], [[E_FLASH]] 안됨", "Q는 상대 A챔피언에 적중하면 [[ROOT]]\n다시 사용해서 상대 B챔피언에 부딪히면 B챔피언만 [[STUN]]", "Q1을 적중 시켰을때 레나타가 CC에 걸리면 Q2를 사용할 수 없음.\nCC가 끝나면 사용 가능.", "W는 대상이 죽음극복하면 최대체력 20%가 됨. 회복이 아니라서 치감 안받음", "E는 아군은 [[SHIELD]], 적군은 [[SLOW]]"
  ],
    en: ["[[Q_FLASH]] and [[E_FLASH]] not possible", "Q hitting champion A applies [[ROOT]].\nRe-casting into champion B applies [[STUN]] to B only", "W target revives at 20% max HP — not a heal, so [[GW]] doesn't apply", "E applies [[SHIELD]] to allies and [[SLOW]] to enemies"]
  },

vision: {
    P: [],
    Q: [],
    W: ["TRUE_SIGHT"],
    E: [],
    R: [],
    ETC: [],
  },


  ultCooldown: {
    6: 150,
    11: 130,
    16: 110,
  },

};

export default renata;
