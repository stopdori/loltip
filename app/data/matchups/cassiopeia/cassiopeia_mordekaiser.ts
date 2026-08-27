// app/data/matchups/cassiopeia/cassiopeia_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_mordekaiser: MatchupSummary = {
  champs: ["cassiopeia", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [],
      en: [],
    },
    mordekaiser: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["[[TIP]]카시오페아 W의 [[ZONE]] 효과는 모데카이저 R의 죽음의 세계에서도 유효. \n 즉, W를 협곡에서 사용하고 죽음의 세계로 간다면 [[ZONE]]이 협곡에서 계속 유효하고, 죽음의 세계에서는 보이지 않지만 유효. \n 즉, W를 죽음의 세계에서 사용하고 협곡으로 돌아온다면 [[ZONE]]은 보이지 않지만 모데카이저에게만 유효. \n 단, 이미 다른세계에 있는 대상에게 W를 뒤늦게 사용해도 이세계에 영향을 줄 수 없음."],
    en: ["[[TIP]]Cassiopeia's W [[ZONE]] effect remains valid even inside Mordekaiser's R Death Realm. \n In other words, if W is cast on the Rift and then the fight moves to the Death Realm, the [[ZONE]] stays active on the Rift, and although it isn't visible in the Death Realm, it still applies there too. \n In other words, if W is cast inside the Death Realm and then the fight returns to the Rift, the [[ZONE]] isn't visible, but it still applies only to Mordekaiser. \n However, casting W belatedly on a target already in a different realm cannot affect that realm."],
  },
};
