// app/data/matchups/khazix/khazix_mel.ts
import type { MatchupSummary } from "../_types";

export const khazix_mel: MatchupSummary = {
  champs: ["khazix", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    khazix: {
      ko: ["멜 W가 카직스 W 반사 가능."],
      en: ["Mel’s W reflects Khazix’s W"],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 카직스 W(일반, [[EVOLVED]])의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 카직스 평타, Q(일반, [[EVOLVED]]), E(일반, [[EVOLVED]])를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 카직스 E(일반, [[EVOLVED]])의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Kha'Zix's W (normal, [[EVOLVED]]) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Kha'Zix's basic attacks, Q (normal, [[EVOLVED]]), or E (normal, [[EVOLVED]]). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Kha'Zix's E (normal, [[EVOLVED]]) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
