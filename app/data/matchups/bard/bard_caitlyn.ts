// app/data/matchups/bard/bard_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const bard_caitlyn: MatchupSummary = {
  champs: ["bard", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "Bard's Q [[STUN]] can interrupt Caitlyn's R [[SKILL_CHANNEL]].",
        "Bard's R (Stasis) can interrupt Caitlyn's E [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: ["[[TIP]] 바드 R(존야)의 [[STASIS]]된 챔피언 발 밑에 W([[TRAP]])를 미리 깔아두면 \n [[STASIS]]이 풀리면서 W를 밟을 수 있음."],
      en: ["[[TIP]] If you pre-place a W ([[TRAP]]) under the feet of a champion [[STASIS]]ed by Bard's R (Stasis), \n they can step on the W when the [[STASIS]] wears off."],
    },
  },
  common: {
    ko: ["특이한 판정 \n 바드 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]] 도중에 활성화된 케이틀린 W([[TRAP]])를 밟아도 [[DASH]]이 끊기지 않음. [[CLIP:https://www.youtube.com/shorts/u9AJ4bM5MKc]]"],
    en: ["Unusual interaction \n Stepping on Caitlyn's activated W ([[TRAP]]) during Bard's E (Wall-hop) [[SKILL_CHANNEL]] [[DASH]] does not interrupt the [[DASH]]. [[CLIP:https://www.youtube.com/shorts/u9AJ4bM5MKc]]"],
  },
};
