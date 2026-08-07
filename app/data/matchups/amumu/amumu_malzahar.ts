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
      ko: ["Q, R의 [[STUN]]로 말자하 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[CC_BUFFER]]로 말자하 Q의 [[SILENCE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SILENCE]]은 남아있음.", 
        "Q의 [[CC_BUFFER]]로 말자하 R의 [[SUPPRESS]]을 무시하고 [[DASH]]할 수 있음. \n 단, 말자하 R의 최대 범위를 넘어가면 [[SUPPRESS]]도 해제.", 
        "Q의 [[DASH]]중에 말자하 R의 [[SUPPRESS]]에 걸리면 아무무가 그 자리에 바로 멈춤."],
      en: ["Q and R [[STUN]] can interrupt Malzahar's R [[SKILL_CHANNEL]]. \n However, this is not possible when Malzahar's P [[CC_IMMUNE]] is active.", "Q [[CC_BUFFER]] can ignore Malzahar's Q [[SILENCE]] and continue [[DASH]]. \n However, the [[SILENCE]] still applies.", "Q [[CC_BUFFER]] can ignore Malzahar's R [[SUPPRESS]] and continue [[DASH]]. \n However, if Amumu moves beyond Malzahar's R maximum range, the [[SUPPRESS]] is also lifted.", "If Amumu is hit by Malzahar's R [[SUPPRESS]] during Q's [[DASH]], Amumu stops immediately."],
    },
    malzahar: {
      ko: ["말자하 P의 [[CC_IMMUNE]]으로 아무무 Q, R의 [[STUN]]을 무시할 수 있음. \n 단, 데미지는 감소되어 유효."],
      en: ["Malzahar's P [[CC_IMMUNE]] can ignore Amumu's Q and R [[STUN]]. \n However, damage is still applied (reduced)."],
    },
  },
};
