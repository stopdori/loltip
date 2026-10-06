// app/data/matchups/lillia/lillia_mel.ts
import type { MatchupSummary } from "../_types";

export const lillia_mel: MatchupSummary = {
  champs: ["lillia", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lillia: {
      ko: ["멜 W가 E R(수면) 반사 가능."],
      en: ["Mel’s W reflects Lillia’s E."],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 릴리아 E, R([[DROWSY]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, E는 릴리아에게 [[BUFF_STACK]]이 쌓이지 않고, [[DEBUFF_STACK]]까지 [[REFLECT]]. \n 단, R은 릴리아에게 [[BUFF_STACK]]이 쌓이지만, [[DEBUFF_STACK]]은 [[REFLECT]]하지 않고, 릴리아에게 [[DROWSY]]를 [[REFLECT]]하여 [[SLEEP]]으로 이어짐.", 
        "W의 [[REFLECT]]로 릴리아 평타, Q, W, R([[SLEEP]])을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 릴리아 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Lillia's E and R ([[DROWSY]]) [[PROJECTILE]]. [[EXIST]] \n However, E does not grant Lillia [[BUFF_STACK]]s, and even its [[DEBUFF_STACK]] is [[REFLECT]]ed. \n However, R does grant Lillia [[BUFF_STACK]]s, but its [[DEBUFF_STACK]] is not [[REFLECT]]ed; instead [[DROWSY]] is [[REFLECT]]ed onto Lillia, leading into [[SLEEP]].", 
        "W [[REFLECT]] cannot [[REFLECT]] Lillia's basic attacks, Q, W, or R ([[SLEEP]]). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Lillia's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
