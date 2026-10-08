// app/data/matchups/mordekaiser/mordekaiser_yorick.ts
import type { MatchupSummary } from "../_types";

export const mordekaiser_yorick: MatchupSummary = {
  champs: ["mordekaiser", "yorick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mordekaiser: {
      ko: ["E의 [[GRAB]]으로 요릭 Q2, R로 [[SUMMON]]된 구울, 안개 마녀를 [[GRAB]] 할 수 있음."],
      en: ["E [[GRAB]] can [[GRAB]] the Ghouls and Maiden of the Mist [[SUMMON]]ed by Yorick's Q2 and R."],
    },
    yorick: {
      ko: [],
      en: [],
    },
  },
    common: {
      ko: ["모데카이저 R의 [[BANISH]]과 요릭의 상호작용 - [[CLIP:https://www.youtube.com/shorts/OhmDdlScDPI?feature=share]]", 
        "1. 요릭 Q로 [[SUMMON]]된 구울은 협곡, 죽음의 세계를 넘나들 수 없음. [[NOT_EXIST]] \n 단, 죽음의 세계가 종료될 때, 구울은 모데카이저에게 처치되는 판정. 모데카이저에게 2골드씩 지급.", 
        "2. 요릭 R로 [[SUMMON]]된 안개 마녀는 협곡, 죽음의 세계를 넘나들 수 있음. [[EXIST]] \n 죽음의 세계에서 범위 밖을 왔다 갔다 할 수 있음. (25.09 패치부터)"],
      en: ["Interaction between Mordekaiser's R [[BANISH]] and Yorick - [[CLIP:https://www.youtube.com/shorts/OhmDdlScDPI?feature=share]]", 
        "1. Ghouls [[SUMMON]]ed by Yorick's Q cannot cross between the Rift and the Death Realm. [[NOT_EXIST]] \n However, when the Death Realm ends, the Ghouls count as killed by Mordekaiser, granting him 2 gold each.", 
        "2. The Maiden of the Mist [[SUMMON]]ed by Yorick's R can cross between the Rift and the Death Realm. [[EXIST]] \n In the Death Realm, she can move back and forth outside its boundary. (Since patch 25.09)"],
    },
};
