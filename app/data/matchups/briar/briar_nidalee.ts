// app/data/matchups/briar/briar_nidalee.ts
import type { MatchupSummary } from "../_types";

export const briar_nidalee: MatchupSummary = {
  champs: ["briar", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 니달리 쿠거폼 W의 [[DASH]]을 따라갈 수 있음. \n 단, 니달리와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Nidalee's Cougar Form W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Nidalee's Cougar Form W [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Nidalee's Cougar Form W [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Nidalee."],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
