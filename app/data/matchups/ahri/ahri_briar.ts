// app/data/matchups/ahri/ahri_briar.ts
import type { MatchupSummary } from "../_types";

export const ahri_briar: MatchupSummary = {
  champs: ["ahri", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Briar's Q and W [[DASH]]."],
    },
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 아리 E의 [[CHARM]]에 걸려도 시전을 유지할 수 있음.", 
        "브라이어 R의 [[FEAR]]로 아리 R의 [[DASH]]을 끊을 수 있음.", 
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 잠시 무시할 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ahri's R [[DASH]]. \n However, the [[STUN]] still applies.", "Briar's E [[CAST_COMMIT]] can maintain its cast even when hit by Ahri's E [[CHARM]].", "Briar's R [[FEAR]] can interrupt Ahri's R [[DASH]].", "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can briefly ignore Ahri's E [[CHARM]]."],
    },
  },
};
