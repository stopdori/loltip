// app/data/matchups/briar/briar_kindred.ts
import type { MatchupSummary } from "../_types";

export const briar_kindred: MatchupSummary = {
  champs: ["briar", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 킨드레드 Q의 [[DASH]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 킨드레드 Q의 [[DASH]]을 따라갈 수 있음. \n 단, 킨드레드와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Kindred's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Kindred's Q [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Kindred's Q [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Kindred."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
