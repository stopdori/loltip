import type { ChampSkill } from "../types";

const caitlyn: ChampSkill = {
  id: "caitlyn",
  skills: {
    P: [],
    Q: [],
    W: ["W_FLASH", "TRUE_SIGHT"],
    E: ["E_FLASH", "AA_RESET", "WALL_HOP"],
    R: ["TRUE_SIGHT"],
    ETC: [],
  },

  notes: [
    "P 스택은 부쉬에서 2씩참\nW(덫)에 걸린 대상에겐 추가피해도 있음", "[[Q_FLASH]] 안됨 \nQ는 여러대상 관통할수록 딜이 덜 들어감 \n그런데 W(덫)에 걸린 대상에겐 항상 100% Q딜이 들어감", "W(덫)에 텔 안됨", "E를 적중시키면 [[AA_RESET]] 됨",
  ],

  ultCooldown: {
    6: 90,
    11: 90,
    16: 90,
  },

};

export default caitlyn;
