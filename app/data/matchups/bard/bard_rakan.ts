// app/data/matchups/bard/bard_rakan.ts
import type { MatchupSummary } from "../_types";

export const bard_rakan: MatchupSummary = {
  champs: ["bard", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["Q의 [[STUN]], R(존야)의 [[STASIS]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R(존야)의 [[STASIS]]으로 라칸 R을 사용했을 때 존야 상태로 만들면 \n 라칸 R은 여전히 유지됨."],
      en: ["Q [[STUN]] and R (Zhonya's) [[STASIS]] can interrupt Rakan's W and E [[DASH]]. [[EXIST]]",
        "If R (Zhonya's) [[STASIS]] suspends Rakan while he is using his R, \n Rakan's R still remains active."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 바드 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]",
        "R의 [[CHARM]]으로 바드 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt Bard's E [[DASH]]. [[EXIST]]", "R [[CHARM]] cannot interrupt Bard's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
  },
};
