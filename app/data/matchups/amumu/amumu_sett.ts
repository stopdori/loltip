// app/data/matchups/amumu/amumu_sett.ts
import type { MatchupSummary } from "../_types";

export const amumu_sett: MatchupSummary = {
  champs: ["amumu", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[CC_BUFFER]]로 세트 E의 [[GRAB]], [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음.", 
        "아무무 Q의 투척 단계에 세트 R의 [[SUPPRESS]]에 걸리고 아무무 Q의 돌진 단계가 발동되면 이동 가능([[SUPPRESS]]에서 빠져나옴).", "아무무 Q의 돌진 단계에 세트 R의 [[SUPPRESS]]에 탈출 불가.", 
        "아무무 Q의 [[DASH]]중에 세트 R의 [[SUPPRESS]]에 걸리면 아무무가 끌려가고 \n 세트 R을 [[SUPPRESS]]에 걸리고 아무무 Q가 적중하면 탈출함."],
      en: ["Amumu's Q [[CC_BUFFER]] can ignore Sett's E [[GRAB]] [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies.", "If Amumu is hit by Sett's R [[SUPPRESS]] during Q's throw phase and the dash phase activates, Amumu can move and escape the [[SUPPRESS]].", "If Amumu is hit by Sett's R [[SUPPRESS]] during Q's dash phase, Amumu cannot escape.", "If Amumu is hit by Sett's R [[SUPPRESS]] during Q's [[DASH]], Amumu is pulled along. \n However, if Amumu's Q hits while under [[SUPPRESS]], Amumu escapes."],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
