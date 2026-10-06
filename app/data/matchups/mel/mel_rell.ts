// app/data/matchups/mel/mel_rell.ts
import type { MatchupSummary } from "../_types";

export const mel_rell: MatchupSummary = {
  champs: ["mel", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 렐 E의 [[EMPOWERED]] [[BA]], R / 승마폼 평타, Q, W / 낙마폼 평타, Q, W의 [[EMPOWERED]] [[BA]]를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 렐 승마폼 W / 낙마폼 W [[EMPOWERED]] [[BA]]의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Rell's E [[EMPOWERED]] [[BA]], R / Mounted Form basic attacks, Q, W / Dismounted Form basic attacks, Q, W [[EMPOWERED]] [[BA]]. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Rell's Mounted Form W / Dismounted Form W [[EMPOWERED]] [[BA]] [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
