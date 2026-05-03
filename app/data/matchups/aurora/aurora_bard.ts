// app/data/matchups/aurora/aurora_bard.ts
import type { MatchupSummary } from "../_types";

export const aurora_bard: MatchupSummary = {
  champs: ["aurora", "bard"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 바드 Q의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 바드 R(존야)을 무시할 수 있음."],
      en: ["Aurora's E (ready phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Bard's Q [[STUN]] and continue [[DASH]]ing. \n However, the [[STUN]] still applies.",
        "Aurora's R [[UNSTOPPABLE]] [[DASH]] can ignore Bard's R (Zhonya)."],
    },
    bard: {
      ko: ["바드 Q의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 오로라 W, E의 [[DASH]]을 끊을 수 있음.",
        "바드 R(존야), 오로라 R의 [[UNSTOPPABLE]] [[DASH]]은 경우에 따라 다름. \n 바드 R(존야)이 떨어지기 바로 직전에 오로라가 R을 사용하면 존야효과를 무시. \n 너무 일찍 사용하면 존야에 걸림."],
      en: ["Bard's Q [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Bard's R (Zhonya) can interrupt Aurora's W and E [[DASH]].",
        "The interaction between Bard's R (Zhonya) and Aurora's R [[UNSTOPPABLE]] [[DASH]] depends on timing. \n If Aurora uses R just before Bard's R (Zhonya) lands, the Zhonya effect is ignored. \n If used too early, Aurora gets caught in Zhonya."],
    },
  },
};
