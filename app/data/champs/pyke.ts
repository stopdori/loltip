import type { ChampData } from "../interactions/types";

const pyke: ChampData = {
  id: "pyke",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW", "GRAB"],
    W: ["W_FLASH", "MS_UP"],
    E: ["E_FLASH", "WALL_HOP", "STUN"],
    R: ["R_FLASH", "WALL_HOP", "EXECUTE", "UNSTOPPABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "파이크 P는 체력14를 공격력1로 변환", "우물에서 복귀할 때 E쓰고 W쓰면 좋음\nW쓰고 E쓰면 [[CAMOUFLAGE]] 풀림", "W [[CAMOUFLAGE]] 중 점멸써도 [[CAMOUFLAGE]] 안풀림", "E [[STUN]]은 잔상이 돌아오면서 적용", "R은 따로 적혀있지 않지만 [[UNSTOPPABLE]]"
  ],
    en: ["Pyke's P converts 14 HP into 1 AD", "Using E then W when recalling is effective.\nUsing W then E breaks [[CAMOUFLAGE]]", "[[CAMOUFLAGE]] does not break on flash during W", "E's [[STUN]] triggers as the returning dagger comes back", "R is [[UNSTOPPABLE]] even though it's not stated in the description"]
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
    6: 100,
    11: 85,
    16: 70,
  },

};

export default pyke;
