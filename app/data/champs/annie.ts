import type { ChampData } from "../interactions/types";

const annie: ChampData = {
  id: "annie",
  skills: {
    P: ["STUN"],
    Q: ["Q_FLASH"],
    W: ["W_FLASH",],
    E: ["E_FLASH", "SHIELD", "MS_UP"],
    R: ["R_FLASH", "MR_PEN", "ALLY_TP_OK"],
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
    Q: ["DMG_MAGIC", "TIMING_CAST", "TARGETED", "PROJECTILE", "SINGLE"],
    W: ["DMG_MAGIC", "TIMING_CAST", "TIMING_CAST", "AOE"],
    E: { phases: [
      { label: { ko: "E 보호막", en: "E Shields" }, tags: ["TARGETED"] },
      { label: { ko: "E 반사피해", en: "E Thornes"  }, tags: ["ST_CONDITIONAL", "DMG_MAGIC"] },
    ] },
    R: { phases: [
      { label: { ko: "티버 소환", en: "Tibbers Summon" }, tags: ["PASSIVE_BONUS", "DMG_MAGIC", "TIMING_CAST", "AOE", "SUMMON"] },
      { label: { ko: "티버", en: "Tibbers"  }, tags: ["DMG_MAGIC", "AOE", "DOT"] },
    ] },
  },

  notes: {
    skill: {
      note3: { ko: [], en: [] },
      note1: {

        ko: [],

        en: []

      },

      note2: {
        ko: [
        "P의 [[STUN]]은 4스택 일 때 Q, W, R에 적용", "E의 반사 데미지는 보호하는 대상을 적군이 공격면, 대상당 한 번의 피해.\n상대 챔피언의 소환수가 공격하면 소환수 개별과 주인 챔피언도 별개로 한 번씩 적용.", "R의 [[PASSIVE_BONUS]] 효과로 [[MR_PEN]]있음",
      ],
        en: ["P's [[STUN]] applies on Q, W, or R when at 4 stacks", "E's reflected damage hits once per attacker targeting the protected unit.\nIf enemy pets attack, each pet and their owner champion are each counted separately.", "R has [[MR_PEN]] as a passive effect"]
        },
    },
    vision: { ko: [], en: [] },
    gimmick: { ko: [], en: [] },
  },

  ultCooldown: {
    6: 130,
    11: 115,
    16: 100,
  },

};

export default annie;
