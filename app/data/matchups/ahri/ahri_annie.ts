// app/data/matchups/ahri/ahri_annie.ts
import type { MatchupSummary } from "../_types";

export const ahri_annie: MatchupSummary = {
  champs: ["ahri", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: [],
      en: [],
    },
    annie: {
      ko: ["애니 P의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음.", 
        "애니 R(티버)의 [[SUMMON]]으로 아리 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Ahri's R [[DASH]].", "Annie's R (Tibbers) [[SUMMON]] can block Ahri's E [[SINGLE]] [[PROJECTILE]]."],
    },
  },
};
