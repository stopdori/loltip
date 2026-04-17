// app/data/matchups/amumu/amumu_anivia.ts
import type { MatchupSummary } from "../_types";

export const amumu_anivia: MatchupSummary = {
  champs: ["amumu", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 애니비아 Q의 [[STUN]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Anivia's R [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Anivia's Q [[STUN]] and continue [[DASH]]."],
    },
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 아무무 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 아무무 Q의 [[DASH]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 아무무 R을 시전 중일 때 뒤로 밀어내면 R [[AOE]]도 같이 뒤로 밀림."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Amumu's Q [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Amumu's Q [[DASH]].", "If Anivia's W [[TERRAIN]] [[AIRBORNE]] knocks Amumu back while casting R, the R [[AOE]] also moves with him."],
    },
  },
};
