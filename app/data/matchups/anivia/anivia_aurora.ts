// app/data/matchups/anivia/anivia_aurora.ts
import type { MatchupSummary } from "../_types";

export const anivia_aurora: MatchupSummary = {
  champs: ["anivia", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 오로라 W, E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 오로라 E를 시전 중일 때 뒤로 밀어내면 E의 [[AOE]]도 같이 뒤로 밀림."],
      en: ["Q [[STUN]] cannot interrupt Aurora's W, E, or R [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Aurora's W and E [[DASH]].", "If W [[TERRAIN]] [[AIRBORNE]] knocks Aurora back while casting E, the E [[AOE]] also moves with her."],
    },
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 애니비아 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] and R [[UNSTOPPABLE]] [[DASH]] can ignore Anivia's Q [[STUN]] and W [[AIRBORNE]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
