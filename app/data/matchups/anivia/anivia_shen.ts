// app/data/matchups/anivia/anivia_shen.ts
import type { MatchupSummary } from "../_types";

export const anivia_shen: MatchupSummary = {
  champs: ["anivia", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 쉔 E(도발)의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 쉔 E(도발)의 이동을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 쉔 R(시전 집중)을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Shen's E (Shadow Dash). However, the [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Shen's E (Shadow Dash).", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can interrupt Shen's R (channeling)."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
