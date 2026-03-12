import type { ChampData } from "../interactions/types";

const quinn: ChampData = {
  id: "quinn",
  skills: {
    P: ["REVEALED"],
    Q: ["REVEALED", "NEARSIGHT"],
    W: ["REVEALED", "AS_UP"],
    E: ["REVEALED", "E_FLASH", "KNOCKBACK", "SLOW", "WALL_HOP",],
    R: ["REVEALED"],
    ETC: [],
  },

  notes: {
    ko: [
    "퀸은 거의 모든스킬이 P를 발동시키기 때문에 사실상 모든스킬이 [[REVEALED]]을 가지고 있음", "Q의 [[NEARSIGHT]]는 정화로 풀리지 않음\n단, 정화를 제외한 [[CC_CLEANSE]]로 해제 가능", "W는 부쉬 안에도 보여줌", "R은 활성화 됐을때 [[HARD_CC]], [[SILENCE]]에 걸리면 내려짐"
  ],
    en: ["Almost all of Quinn's skills proc P, so effectively all skills have [[REVEALED]]", "Q's [[NEARSIGHT]] cannot be removed by Cleanse.\nOther [[CC_CLEANSE]] methods (not Cleanse) can remove it", "W reveals targets inside brushes", "When R is active, [[HARD_CC]] or [[SILENCE]] will deactivate it"]
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
    6: 0,
    11: 0,
    16: 0,
  },

};

export default quinn;
