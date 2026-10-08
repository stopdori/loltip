// app/data/matchups/annie/annie_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const annie_mordekaiser: MatchupSummary = {
  champs: ["annie", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 R로 [[SUMMON]]된 티버는 애니가 모데카이저 R로 [[BANISH]] 당했을 때 \n 애니를 따라 세계를 넘나들 수 있음. \n 심지어 죽음의 세계 원형 경계를 왔다 갔다 할 수 있음. [[CLIP:https://www.youtube.com/shorts/fxe6WrPG6fk]]"],
      en: ["Tibbers [[SUMMON]]ed by Annie's R, when Annie is [[BANISH]]ed by Mordekaiser's R, \n can follow Annie between worlds. \n He can even move back and forth across the Death Realm's circular boundary. [[CLIP:https://www.youtube.com/shorts/fxe6WrPG6fk]]"],
    },
    mordekaiser: {
      ko: ["E의 [[GRAB]]으로 애니 R로 [[SUMMON]]된 티버를 [[GRAB]] 할 수 있음."],
      en: ["E [[GRAB]] can [[GRAB]] Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
