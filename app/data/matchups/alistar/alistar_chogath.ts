// app/data/matchups/alistar/alistar_chogath.ts
import type { MatchupSummary } from "../_types";

export const alistar_chogath: MatchupSummary = {
  champs: ["alistar", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 초가스 Q의 [[SLOW]] [[AIRBORNE]], W의 [[SILENCE]]을 해제할 수 있음. \n 단, 초가스 Q의 [[SLOW]]는 [[AIRBORNE]]이 끝나고 땅에 내려온 후에 걸림."],
      en: ["R [[CC_CLEANSE]] can cleanse Cho'Gath's Q [[SLOW]] [[AIRBORNE]] and W [[SILENCE]]. \n However, Cho'Gath's Q [[SLOW]] is applied after [[AIRBORNE]] ends and the target lands."],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.",
        "W의 [[SILENCE]]으로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Alistar's W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Alistar's W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
