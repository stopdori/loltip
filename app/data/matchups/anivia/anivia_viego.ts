// app/data/matchups/anivia/anivia_viego.ts
import type { MatchupSummary } from "../_types";

export const anivia_viego: MatchupSummary = {
  champs: ["anivia", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 Q의 [[STUN]]로 비에고 W(시전 집중)를 끊을 수 있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 비에고 W(시전 집중, 돌진)를 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Viego's W [[DASH]]. However, the [[STUN]] still applies.", "Anivia's Q [[STUN]] can interrupt Viego's W (channeling phase).", "Anivia's W (wall) [[AIRBORNE]] can interrupt Viego's W (channeling and dash phase)."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
