import type { ChampData } from "../interactions/types";

const mordekaiser: ChampData = {
  id: "mordekaiser",
  skills: {
    P: ["MS_UP"],
    Q: ["Q_FLASH", "UNINTERRUPTIBLE_CAST"],
    W: ["SHIELD", "HEAL"],
    E: ["E_FLASH", "GRAB", "MR_PEN", "UNINTERRUPTIBLE_CAST"],
    R: ["R_FLASH", "NEARSIGHT", "TRUE_SIGHT", "UNINTERRUPTIBLE_CAST"],
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
    "Q는 단일 대상 명중 시 피해가 증가함", "R을 시전하는 도중 대상과의 거리가 모데의 이세계 크기보다 멀어지면,\nR 시전이 취소되고 쿨타임을 소모하지 않음.", "R을 시전하는 도중 대상이 [[STEALTH]]류로 숨어도, R의 [[TRUE_SIGHT]]로 모습이 보이고 이세계로 이동.", "R로 다른세계로 이동했을 때, 밖의 상대 미니언이 죽으면 경험치가 들어오지 않음.", "R에 관련된 챔피언별 메커니즘은 하단 박스에 정리했음"
  ],
    en: ["Q deals increased damage to a single target", "If the target moves outside Death Realm range while R is being cast, the cast is cancelled without consuming the cooldown.", "Even if the target uses [[STEALTH]] during R's cast, R's [[TRUE_SIGHT]] still reveals them and they are taken to the Death Realm.", "While inside the Death Realm with R, if enemy minions die outside, Mordekaiser does not receive the experience.", "Champion-specific R mechanics are detailed in the box below"]
  },

  ultCooldown: {
    6: 140,
    11: 120,
    16: 100,
  },

};

export default mordekaiser;
