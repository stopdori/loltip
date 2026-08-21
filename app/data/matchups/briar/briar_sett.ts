// app/data/matchups/briar/briar_sett.ts
import type { MatchupSummary } from "../_types";

export const briar_sett: MatchupSummary = {
  champs: ["briar", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 세트 E의 [[GRAB]], [[STUN]] / R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 세트 E의 [[GRAB]], [[STUN]] / R의 [[SUPPRESS]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 세트 R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 세트와 충돌하면 [[HOMING]] 종료."],
      en: [""],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
