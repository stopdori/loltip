// app/data/matchups/ezreal/ezreal_sett.ts
import type { MatchupSummary } from "../_types";

export const ezreal_sett: MatchupSummary = {
  champs: ["ezreal", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ezreal: {
      ko: ["E(비전 이동)의 [[CC_BUFFER]]로 세트 E의 [[GRAB]], [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. [[EXIST]] \n 단, [[AIRBORNE]]([[GRAB]] 효과 변경), [[STUN]]은 남아있음.", 
        "E의 [[CC_BUFFER]]로 세트 R의 [[SUPPRESS]]을 무시하고 [[BLINK]] 할 수 없음. [[NOT_EXIST]] \n \n 1. 이즈리얼 E를 선입력 하면 \n 이즈리얼 E의 [[BLINK]]이 발동하고, 도착지점에서 [[PROJECTILE]]도 발사하지만, 강제로 세트에게 소환당해 [[SUPPRESS]]. [[CLIP:https://www.youtube.com/shorts/nKMG15n7bbE]] \n \n 2. 세트 R을 선입력 하면 \n 즉시 [[SUPPRESS]]되어 이즈리얼 E가 발동하지 않음."
      ],
      en: [""],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
