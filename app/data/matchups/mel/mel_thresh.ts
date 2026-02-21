// app/data/matchups/mel/mel_thresh.ts
import type { MatchupSummary } from "../_types";

export const mel_thresh: MatchupSummary = {
  champs: ["mel", "thresh"],
  highlightsByChamp: {
    mel: {
      ko: ["멜 W가 쓰레쉬 Q W 반사 가능. 반사된 W(랜턴)를 아군이 사용 못함."],
      en: ["Mel’s W reflects Thresh’s Q and W. However, allies cannot use the reflected W (lantern)."],
    },
    thresh: {
      ko: [],
      en: [],
    },
  },
};
