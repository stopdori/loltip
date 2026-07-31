// app/data/matchups/briar/briar_ekko.ts
import type { MatchupSummary } from "../_types";

export const briar_ekko: MatchupSummary = {
  champs: ["briar", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["브라이어 Q의 [[STUN]]로 에코 E의 [[DASH]], [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "브라이어 E의 [[KNOCKBACK]], R의 [[FEAR]]로 에코 E의 [[DASH]]을 끊을 수 있음. \n 단, 에코 E의 [[BLINK]]은 끊을 수 없음.",
        "브라이어 E의 [[CAST_COMMIT]]으로 에코 E의 [[AIRBORNE]], R의 [[SILENCE]], [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ekko's E [[DASH]] or [[BLINK]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Ekko's E [[DASH]]. \n However, they cannot interrupt Ekko's E [[BLINK]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Ekko's E [[AIRBORNE]] or R [[SILENCE]], [[KNOCKBACK]]."],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
