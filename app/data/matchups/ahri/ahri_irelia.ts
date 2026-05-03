// app/data/matchups/ahri/ahri_irelia.ts
import type { MatchupSummary } from "../_types";

export const ahri_irelia: MatchupSummary = {
  champs: ["ahri", "irelia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 이렐리아 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Irelia's Q [[DASH]]."],
    },
    irelia: {
      ko: ["이렐리아 W의 [[CAST_COMMIT]]으로 아리 E의 [[CHARM]]에 걸려도 시전을 유지할 수 있음.",
        "이렐리아 E의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Irelia's W [[CAST_COMMIT]] can maintain its cast even when hit by Ahri's E [[CHARM]].", "Irelia's E [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
