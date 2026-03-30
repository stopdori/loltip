// app/data/matchups/anivia/anivia_vi.ts
import type { MatchupSummary } from "../_types";

export const anivia_vi: MatchupSummary = {
  champs: ["anivia", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 바이 Q의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.","애니비아 Q의 [[STUN]]로 바이 Q(시전 집중)를 끊을 수 있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 바이 Q(시전 집중, 돌진)를 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Vi's Q [[DASH]]. However, the [[STUN]] still applies.", "Anivia's Q [[STUN]] can interrupt Vi's Q (channeling phase).", "Anivia's W (wall) [[AIRBORNE]] can interrupt Vi's Q (channeling and dash phase)."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
