// app/data/matchups/ahri/ahri_urgot.ts
import type { MatchupSummary } from "../_types";

export const ahri_urgot: MatchupSummary = {
  champs: ["ahri", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 우르곳 E(돌진단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Urgot's E (dash phase) [[DASH]]."],
    },
    urgot: {
      ko: ["우르곳 E(준비단계)의 [[CC_BUFFER]]로 아리 E의 [[CHARM]] 효과를 잠시 무시하고 다음 단계를 시전할 수 있음. \n 단, 우르곳 E(돌진단계)가 종료 후 [[CHARM]]은 남아있음."],
      en: ["Urgot's E (windup phase) [[CC_BUFFER]] can briefly ignore Ahri's E [[CHARM]] and proceed to the next phase. \n However, once Urgot's E (dash phase) ends, the [[CHARM]] still applies."],
    },
  },
};
