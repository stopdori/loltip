import type { ChampData } from "../interactions/types";

const zilean: ChampData = {
  id: "zilean",
  skills: {
    P: [],
    Q: ["Q_FLASH", "STUN"],
    W: [],
    E: ["E_FLASH", "SLOW", "MS_UP"],
    R: ["R_FLASH", "REVIVE", "UNTARGETABLE"],
    ETC: [],
  },

  notes: {
    ko: [
    "Q는 동일 대상에게 2개 적중시키면\n먼저 맞은 Q가 폭발하면서 범위[[STUN]]", "E는 아군에게 사용하면 [[MS_UP]]\n적군에게 사용하면 [[SLOW]]", "R은 지속시간 5초, [[REVIVE]]하는데 3초\n[[REVIVE]]할때 [[HEAL]]이라 [[GW]]효과 적용 가능"
  ],
    en: ["Q applies AoE [[STUN]] when two Q's hit the same target, detonating the first", "E applies [[MS_UP]] to allies and [[SLOW]] to enemies", "R lasts 5s; [[REVIVE]] takes 3s.\n[[REVIVE]] heals, so [[GW]] applies"]
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
    6: 120,
    11: 90,
    16: 60,
  },

};

export default zilean;
