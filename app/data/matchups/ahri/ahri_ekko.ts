// app/data/matchups/ahri/ahri_ekko.ts
import type { MatchupSummary } from "../_types";

export const ahri_ekko: MatchupSummary = {
  champs: ["ahri", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 에코 E(구르기)를 끊을 수 있음."],
      en: ["Ahri's E can interrupt Ekko's E (roll)"],
    },
    ekko: {
      ko: ["에코 W의 [[STUN]]으로 아리 R을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "에코 E(점멸 타격)로 아리 R의 [[DASH]]을 따라갈 수 있음."],
      en: ["Ekko's W [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies.", "Ekko's E (Phase Dive) can follow Ahri's R"],
    },
  },
};
