// app/data/matchups/anivia/anivia_briar.ts
import type { MatchupSummary } from "../_types";

export const anivia_briar: MatchupSummary = {
  champs: ["anivia", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W의 [[AIRBORNE]]으로 브라이어 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 브라이어 W의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] and W [[AIRBORNE]] cannot interrupt Briar's W [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Briar's W [[DASH]]."],
    },
    briar: {
      ko: ["브라이어 Q, W의 [[DASH]]으로 애니비아 W의 [[TERRAIN]]을 [[WALL_HOP]]를 할 수 있음.",
        "브라이어 Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "브라이어 R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 애니비아 Q의 [[STUN]], W의 [[AIRBORNE]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Briar's Q and W [[DASH]] can [[WALL_HOP]] over Anivia's W [[TERRAIN]].",
        "Briar's Q, E [[STUN]] / E [[KNOCKBACK]] / R [[FEAR]] can interrupt Anivia's R [[SKILL_CHANNEL]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Anivia's Q [[STUN]] and W [[AIRBORNE]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
  },
};
