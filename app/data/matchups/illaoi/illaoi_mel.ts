// app/data/matchups/illaoi/illaoi_mel.ts
import type { MatchupSummary } from "../_types";

export const illaoi_mel: MatchupSummary = {
  champs: ["illaoi", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    illaoi: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 일라오이 E의 [[PROJECTILE]]를 막을 수 있음. [[EXIST]] \n 즉, E의 [[PROJECTILE]]는 [[REFLECT]]되지는 않지만 영혼분리도 일어나지 않음. [[CLIP:https://www.youtube.com/shorts/IiS-Fph0Xas]]", 
        "W의 [[REFLECT]]로 일라오이 평타, P(촉수 공격), W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 일라오이 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can block Illaoi's E [[PROJECTILE]]. [[EXIST]] \n In other words, E's [[PROJECTILE]] is not [[REFLECT]]ed, but no spirit is pulled out either. [[CLIP:https://www.youtube.com/shorts/IiS-Fph0Xas]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Illaoi's basic attacks, P (tentacle slams), W, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Illaoi's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
