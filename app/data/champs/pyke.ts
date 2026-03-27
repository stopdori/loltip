import type { ChampData } from "../interactions/types";

const pyke: ChampData = {
  id: "pyke",
  skills: {
    P: ["HEAL"],
    Q: ["Q_FLASH", "SLOW", "GRAB"],
    W: ["W_FLASH", "MS_UP", "BUFF_FORM"],
    E: ["E_FLASH", "WALL_HOP", "STUN", "BUFF_FORM"],
    R: ["R_FLASH", "WALL_HOP", "EXECUTE", "UNINTERRUPTIBLE_CAST", "CC_BUFFER"],
  },

  vision: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  gimmick: {
    P: [],
    Q: [],
    W: [],
    E: [],
    R: [],
  },

  notes: {
    ko: [
    "파이크 P는 체력14를 공격력1로 변환", "우물에서 복귀할 때 E쓰고 W쓰면 좋음\nW쓰고 E쓰면 [[CAMOUFLAGE]] 풀림", "W [[CAMOUFLAGE]] 중 점멸써도 [[CAMOUFLAGE]] 안풀림", "E [[STUN]]은 잔상이 돌아오면서 적용", "R 스킬은 2단계로 나뉨 준비/순간이동.\n준비단계에서 파이크가 맞은 CC는 유효 하지만\n순간이동 단계가 발동되어 이동하는 것.\n순간이동 단계에는 CC 저항력 없음.\n순간이동하고 내려 찍었을 때 CC의 지속시간이 남아있다면 CC 효과 유효."
  ],
    en: ["Pyke's P converts 14 HP into 1 AD", "Using E then W when recalling is effective.\nUsing W then E breaks [[CAMOUFLAGE]]", "[[CAMOUFLAGE]] does not break on flash during W", "E's [[STUN]] triggers as the returning dagger comes back", "R is [[UNSTOPPABLE]] even though it's not stated in the description"]
  },

  ultCooldown: {
    6: 100,
    11: 85,
    16: 70,
  },

};

export default pyke;
