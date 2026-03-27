import type { ChampData } from "../interactions/types";

const annie: ChampData = {
  id: "annie",
  skills: {
    P: ["STUN"],
    Q: [],
    W: ["W_FLASH",],
    E: ["SHIELD", "MS_UP"],
    R: ["MR_PEN", "ALLY_TP_OK"],
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
    "P의 [[STUN]]은 4스택 일 때 Q, W, R에 적용", "E의 반사 데미지는 보호하는 대상을 적군이 공격하는 대상당 한 번의 피해.\n상대 챔피언의 소환수가 공격하면 소환수 개별과 주인 챔피언도 별개로 한 번씩 적용.", "R의 기본지속 효과로 [[MR_PEN]]있음",
  ],
    en: ["P's [[STUN]] applies on Q, W, or R when at 4 stacks", "E's reflected damage hits once per attacker targeting the protected unit.\nIf enemy pets attack, each pet and their owner champion are each counted separately.", "R has [[MR_PEN]] as a passive effect"]
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default annie;
