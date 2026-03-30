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
      ko: ["아리 E의 [[CAHRM]]으로 갈리오 E(돌진단계), R(시전집중)을 끊을 수 있음."],
      en: ["Ahri's E can interrupt Galio's E (dash phase) and R (channeling)"],
    },
    galio: {
      ko: ["갈리오 E(후진단계)에 아리 E를 맞으면 [[CHARM]]을 무시하고 이동할 수 있음.\n단, [[CHARM]]은 남아있음", "갈리오 W의 [[TAUNT]]로 아리 R의 [[DASH]]을 끊을 수 없음.\n단, [[TAUNT]]은 남아있음", "갈리오 E, R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음.", "갈리오 R(착지)의 [[CAST_COMMIT]] 타이밍에 맞은 아리 E의 [[CHARM]]은 완전 무시."],
      en: ["If Ahri's E hits Galio during his E (backstep phase), Galio can ignore the [[CHARM]] and continue moving. However, the [[CHARM]] still applies.", "Galio's W [[TAUNT]] cannot interrupt Ahri's R. However, the [[TAUNT]] still applies.", "Galio's E and R [[AIRBORNE]] can interrupt Ahri's R", "Ahri's E [[CHARM]] that hits Galio during R (landing) [[CAST_COMMIT]] is completely ignored."],
    },
  },
};
