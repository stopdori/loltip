// app/data/matchups/ahri/ahri_tristana.ts
import type { MatchupSummary } from "../_types";

export const ahri_tristana: MatchupSummary = {
  champs: ["ahri", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 트리스타나 W(점프단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Tristana's W (jump phase) [[DASH]]."],
    },
    tristana: {
      ko: ["트리스타나 W(준비단계)의 [[CC_BUFFER]]로 아리 E의 [[CHARM]] 효과를 잠시 무시하고 다음 단계를 시전할 수 있음. \n 단, 트리스타나 W(점프단계)가 종료 후 [[CHARM]]은 남아있음."],
      en: ["Tristana's W (windup phase) [[CC_BUFFER]] can briefly ignore Ahri's E [[CHARM]] and proceed to the next phase. \n However, once Tristana's W (jump phase) ends, the [[CHARM]] still applies."],
    },
  },
};
