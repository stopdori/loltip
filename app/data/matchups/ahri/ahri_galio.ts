// app/data/matchups/ahri/ahri_galio.ts
import type { MatchupSummary } from "../_types";

export const ahri_galio: MatchupSummary = {
  champs: ["ahri", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 갈리오 E(돌진단계)의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Galio's E (dash phase) [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
    galio: {
      ko: ["갈리오 E(후진단계)의 [[CC_BUFFER]]로 아리 E의 [[CHARM]] 효과를 잠시 무시하고 다음 단계를 시전할 수 있음. \n 단, 갈리오 E(돌진단계)가 종료 후 [[CHARM]]은 남아있음.",
        "갈리오 W의 [[TAUNT]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[TAUNT]]은 남아있음.", "갈리오 E, R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.",
        "갈리오 R(착지)의 [[CAST_COMMIT]] 타이밍에 맞은 아리 E의 [[CHARM]]은 완전히 무효."],
      en: ["Galio's E (backstep phase) [[CC_BUFFER]] allows him to temporarily ignore Ahri's E [[CHARM]] and continue to the next phase. \n However, the [[CHARM]] remains after Galio's E (dash phase) ends.", "Galio's W [[TAUNT]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[TAUNT]] still applies.", "Galio's E and R [[AIRBORNE]] can interrupt Ahri's R [[DASH]].", "Ahri's E [[CHARM]] that lands during Galio's R (landing) [[CAST_COMMIT]] is completely negated."],
    },
  },
};
