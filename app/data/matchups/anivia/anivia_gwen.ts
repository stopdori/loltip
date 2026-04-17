// app/data/matchups/anivia/anivia_gwen.ts
import type { MatchupSummary } from "../_types";

export const anivia_gwen: MatchupSummary = {
  champs: ["anivia", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 W([[TERRAIN]])을 그웬 W(그면상)의 [[UNTARGETABLE]] 위로 사용하면 그웬이 벽과 겹쳐지지만, 짧은쪽으로 나올 수 있고. \n 그웬이 벽 밖으로 한번 나오면 벽을 다시 통과할 수 없음."],
      en: ["If Anivia places W [[TERRAIN]] on top of Gwen's W [[UNTARGETABLE]] zone, Gwen overlaps with the wall but can exit from the shorter side. \n Once Gwen exits the wall, she cannot pass through it again."],
    },
    gwen: {
      ko: ["그웬 W로 애니비아 평타, Q, E, R을 범위 밖에서 맞지 않음\n그웬에게 사용한 평타, E는 날아가던 중 범위 안에 들어올 때 사라짐"],
      en: ["Gwen's W prevents Anivia's basic attacks, Q, E and R from hitting when outside the zone.\nBasic attacks and E aimed at Gwen disappear when they enter the zone mid-flight."],
    },
  },
};
