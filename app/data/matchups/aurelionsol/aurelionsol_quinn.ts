// app/data/matchups/aurelionsol/aurelionsol_quinn.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_quinn: MatchupSummary = {
  champs: ["aurelionsol", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 퀸 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 퀸 R의 [[SKILL_CHANNEL]], [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["R [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Quinn's E [[DASH]].",
        "R [[STUN]] and R (Falling Star) [[AIRBORNE]] can cancel Quinn's R [[SKILL_CHANNEL]] and [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
