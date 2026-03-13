// app/data/matchups/ambessa/ambessa_sylas.ts
import type { MatchupSummary } from "../_types";

export const ambessa_sylas: MatchupSummary = {
  champs: ["ambessa", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 사일러스 W, E1, E2(돌진 단계)를 끊을 수 있음", "암베사 R의 [[UNSTOPPABLE]]로 사일러스 E2의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Sylas's W, E1, and E2 (dash phase).", "Ambessa's R [[UNSTOPPABLE]] can ignore Sylas's E2 [[AIRBORNE]]."],
    },
    sylas: {
      ko: ["사일러스 R로 암베사 R을 훔쳐서 서로에게 동시에 사용하면,\n진짜 미세하게 먼저 쓴 쪽이 정상적으로 시전되고, 서로 P스택 1씩 쌓임."],
      en: ["If Sylas steals Ambessa's R and both use it on each other simultaneously,\nwhichever was used even slightly earlier casts normally, and each gains 1 P stack."],
    },
  },
};
