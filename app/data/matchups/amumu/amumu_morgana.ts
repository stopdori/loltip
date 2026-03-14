// app/data/matchups/amumu/amumu_morgana.ts
import type { MatchupSummary } from "../_types";

export const amumu_morgana: MatchupSummary = {
  champs: ["amumu", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 모르가나 R([[TETHER]])을 끊을 수 없음.", "아무무 Q로 모르가나 Q의 [[ROOT]], R의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[ROOT]], [[STUN]]도 남아있음."],
      en: ["Amumu's Q and R [[STUN]] cannot interrupt Morgana's R ([[TETHER]]).", "Amumu's Q is affected by Morgana's Q [[ROOT]] and R [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[ROOT]], [[STUN]] remain active."],
    },
    morgana: {
      ko: [],
      en: [],
    },
  },
};
