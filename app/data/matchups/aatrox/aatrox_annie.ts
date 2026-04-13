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
        "애니 R의 [[SUMMON]]으로 아트록스 W의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Aatrox's E. \n However, [[STUN]] still applies.", "Annie's R [[SUMMON]] can block Aatrox's W [[PROJECTILE]]."],
    },
  },
};
