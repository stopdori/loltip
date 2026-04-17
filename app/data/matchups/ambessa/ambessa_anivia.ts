// app/data/matchups/ambessa/ambessa_anivia.ts
import type { MatchupSummary } from "../_types";

export const ambessa_anivia: MatchupSummary = {
  champs: ["ambessa", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Anivia's R [[SKILL_CHANNEL]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Anivia's Q [[STUN]] and W([[TERRAIN]]) [[AIRBORNE]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 암베사 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 암베사 P의 [[DASH]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 암베사 Q1, Q2를 시전 중일 때 뒤로 밀어내면 Q1, Q2 범위도 같이 뒤로 밀림."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Ambessa's P [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Ambessa's P [[DASH]].", "If Anivia's W [[TERRAIN]] [[AIRBORNE]] knocks Ambessa back while casting Q1 or Q2, the Q1, Q2 [[AOE]] also moves with her."],
    },
  },
};
