import type { ChampSkill } from "../types";

const quinn: ChampSkill = {
  id: "quinn",
  skills: {
    P: ["REVEALED"],
    Q: ["REVEALED", "NEARSIGHT"],
    W: ["REVEALED", "AS_UP"],
    E: ["REVEALED", "E_FLASH", "KNOCKBACK", "SLOW", "WALL_HOP",],
    R: ["REVEALED"],
    ETC: [],
  },

  notes: [
    "퀸은 거의 모든스킬이 P를 발동시키기 때문에 사실상 모든스킬이 [[REVEALED]]을 가지고 있음","W는 부쉬 안에도 보여줌"
  ],

  ultCooldown: {
    6: 0,
    11: 0,
    16: 0,
  },

};

export default quinn;
