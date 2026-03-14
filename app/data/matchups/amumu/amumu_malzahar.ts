// app/data/matchups/amumu/amumu_malzahar.ts
import type { MatchupSummary } from "../_types";

export const amumu_malzahar: MatchupSummary = {
  champs: ["amumu", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 말자하 R([[SUPPRESS]])을 끊을 수 있음.\n단, 말자하 P가 없을 때만 가능.", "아무무 Q로 말자하 Q의 [[SILENCE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[SILENCE]]도 남아있음.", "아무무 Q의 투척 단계에 말자하 R의 [[SUPPRESS]]에 걸리고 아무무 Q의 돌진 단계가 발동되면 이동이 가능하고,\n말자하 R의 최대 범위를 넘어가면 [[SUPPRESS]]도 해제.", "아무무 Q의 돌진 단계에 말자하 R의 [[SUPPRESS]]에 걸리면 그 자리에 바로 멈춤."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Malzahar's R ([[SUPPRESS]]).\nNote: This is only possible when Malzahar does not have his passive shield.", "Amumu's Q is affected by Malzahar's Q [[SILENCE]], but can still move if the dash phase activates.\nHowever, damage is applied and [[SILENCE]] remains active.", "If Amumu is hit by Malzahar's R [[SUPPRESS]] during Q's throw phase and the dash phase activates, Amumu can still move.\nIf Amumu moves beyond Malzahar's R maximum range, [[SUPPRESS]] is also lifted.", "If Amumu is hit by Malzahar's R [[SUPPRESS]] during Q's dash phase, Amumu stops immediately."],
    },
    malzahar: {
      ko: [],
      en: [],
    },
  },
};
