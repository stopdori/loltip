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
      ko: ["암베사 R의 [[SUPPRESS]]으로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 말자하 Q의 [[SILENCE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[SILENCE]]은 남아있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 말자하 R의 [[SUPPRESS]]을 말자하와의 거리따라 무시 할 수 있음. \n 최소 거리는 약 미드 일자 부쉬 길이만큼. \n 암베사 R로 이동하여 이 거리이내에 위치하면 말자하 R의 [[SUPPRESS]]는 유지됨. \n 벗어나면 말자하 R이 해제됨."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Malzahar's R [[SKILL_CHANNEL]]. \n However, this is not possible when Malzahar's P [[CC_IMMUNE]] is active.", "Ambessa's R [[UNSTOPPABLE]] can ignore Malzahar's Q [[SILENCE]]. \n However, the [[SILENCE]] still applies after [[UNSTOPPABLE]] ends.", "Ambessa's R [[UNSTOPPABLE]] can ignore Malzahar's R [[SUPPRESS]] depending on distance from Malzahar. \n The minimum distance is approximately the length of the mid-lane straight bush. \n If Ambessa moves within this distance using R, Malzahar's R [[SUPPRESS]] still applies. \n If Ambessa moves beyond this distance, Malzahar's R is cancelled."],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 암베사 R의 [[SUPPRESS]]을 무시할 수 있음. \n 단, 데미지는 감소되어 유효."],
      en: ["Malzahar's P [[CC_IMMUNE]] can ignore Ambessa's R [[SUPPRESS]]. \n However, damage is still applied (reduced)."],
    },
  },
};
