// app/data/matchups/aatrox/aatrox_annie.ts
import type { MatchupSummary } from "../_types";

export const aatrox_annie: MatchupSummary = {
  champs: ["aatrox", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    annie: {
      ko: ["애니 P의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "애니 R(티버)의 [[SUMMON]]으로 아트록스 W의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Aatrox's E [[DASH]]. However, the [[STUN]] still applies.", "Annie's R (Tibbers) [[SUMMON]] can block Aatrox's W [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
