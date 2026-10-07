// app/data/matchups/kayn/kayn_mel.ts
import type { MatchupSummary } from "../_types";

export const kayn_mel: MatchupSummary = {
  champs: ["kayn", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kayn: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 (케인 / 그암 / 다르킨) 평타, Q([[DASH]], 회전), W, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 (케인 / 그암 / 다르킨) E(일반, 벽이동)의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "E의 [[ROOT]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] cannot [[REFLECT]] (Kayn / Shadow Assassin / Darkin) basic attacks, Q ([[DASH]], spin), W, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt (Kayn / Shadow Assassin / Darkin) E (normal, wall travel) [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "E [[ROOT]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
