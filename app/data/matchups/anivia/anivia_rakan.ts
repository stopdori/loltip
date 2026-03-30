// app/data/matchups/anivia/anivia_rakan.ts
import type { MatchupSummary } from "../_types";

export const anivia_rakan: MatchupSummary = {
  champs: ["anivia", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 라칸 W(돌진 단계), E의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 라칸 W(돌진, 도약 단계), E의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Rakan's W (dash phase) or E [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Rakan's W (dash and leap phases) or E [[DASH]]."],
    },
    rakan: {
      ko: [],
      en: [],
    },
  },
};
