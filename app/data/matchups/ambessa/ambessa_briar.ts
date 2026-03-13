// app/data/matchups/ambessa/ambessa_briar.ts
import type { MatchupSummary } from "../_types";

export const ambessa_briar: MatchupSummary = {
  champs: ["ambessa", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 브라이어 W(돌진)를 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 브라이어 Q의 [[STUN]], R의 [[FEAR]]를 무시할 수 있음.\n단, [[STUN]], [[FEAR]]는 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Briar's W (dash).", "Ambessa's R [[UNSTOPPABLE]] can ignore Briar's Q [[STUN]] and R [[FEAR]].\nHowever, [[STUN]] and [[FEAR]] still apply."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 암베사 P를 끊을 수 없음. 단 [[STUN]]은 남아있음.", "브라이어 R의 [[FEAR]]로 암베사 P를 끊을 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ambessa's P. However, [[STUN]] still applies.", "Briar's R [[FEAR]] can interrupt Ambessa's P."],
    },
  },
};
