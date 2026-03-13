// app/data/matchups/ambessa/ambessa_malzahar.ts
import type { MatchupSummary } from "../_types";

export const ambessa_malzahar: MatchupSummary = {
  champs: ["ambessa", "malzahar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 말자하 R(제압)을 끊을 수 있음.\n단, 말자하 P가 활성화되어 있을 때는 불가능.", "암베사 R의 [[UNSTOPPABLE]]로 말자하 Q의 [[SILENCE]]을 무시할 수 있음.\n단, [[SILENCE]]은 남아있음.", "암베사 R의 [[UNSTOPPABLE]]로 말자하 R의 [[SUPPRESS]]을 말자하와의 거리따라 무시 할 수 있음.\n최소 거리는 약 미드 일자 부쉬 길이만큼.\n암베사 R로 이동하여 이 거리이내에 위치하면 말자하 R의 [[SUPPRESS]]는 유지됨."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Malzahar's R (suppress).\nHowever, this is not possible when Malzahar's P is active.", "Ambessa's R [[UNSTOPPABLE]] can ignore Malzahar's Q [[SILENCE]].\nHowever, [[SILENCE]] still applies.", "Ambessa's R [[UNSTOPPABLE]] can ignore Malzahar's R [[SUPPRESS]] depending on distance from Malzahar.\nThe minimum distance is approximately the length of the mid-lane straight bush.\nIf Ambessa moves within this distance using R, Malzahar's R [[SUPPRESS]] still applies."],
    },
    malzahar: {
      ko: [],
      en: [],
    },
  },
};
