// app/data/matchups/ivern/ivern_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const ivern_mordekaiser: MatchupSummary = {
  champs: ["ivern", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ivern: {
      ko: ["R로 [[SUMMON]]된 데이지는 아이번이 모데카이저 R로 [[BANISH]] 당했을 때 \n 아이번을 따라 세계를 넘나들 수 있음. \n 심지어 죽음의 세계 원형 경계를 왔다 갔다 할 수 있음. [[CLIP:https://www.youtube.com/shorts/txsizafDoGU]]"],
      en: ["Daisy [[SUMMON]]ed by R, when Ivern is [[BANISH]]ed by Mordekaiser's R, \n can follow Ivern between worlds. \n She can even move back and forth across the Death Realm's circular boundary. [[CLIP:https://www.youtube.com/shorts/txsizafDoGU]]"],
    },
    mordekaiser: {
      ko: ["E의 [[GRAB]]으로 아이번 R로 [[SUMMON]]된 데이지를 [[GRAB]] 할 수 있음."],
      en: ["E [[GRAB]] can [[GRAB]] Ivern's R [[SUMMON]]ed Daisy."],
    },
  },
};
