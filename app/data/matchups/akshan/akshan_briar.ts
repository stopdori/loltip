// app/data/matchups/akshan/akshan_briar.ts
import type { MatchupSummary } from "../_types";

export const akshan_briar: MatchupSummary = {
  champs: ["akshan", "briar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: ["R의 [[PROJECTILE]]는 브라이어 R2의 [[DASH]]을 따라갈 수 있음."],
      en: ["R [[PROJECTILE]] can follow Briar's R2 [[DASH]]."],
    },
    briar: {
      ko: ["브라이어 Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[FEAR]]로 아크샨 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "브라이어 R의 [[TRUE_SIGHT]]로 아크샨 W의 [[CAMOUFLAGE]]을 볼 수 있음.", 
        "브라이어 R2의 [[HOMING]] [[DASH]]으로 아크샨 E의 [[DASH]]을 따라갈 수 있음."
      ],
      en: ["Briar's Q, E [[STUN]], E [[KNOCKBACK]], and R [[FEAR]] can interrupt Akshan's E [[DASH]] and R [[SKILL_CHANNEL]].",
        "Briar's R [[TRUE_SIGHT]] can reveal Akshan's W [[CAMOUFLAGE]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Akshan's E [[DASH]]."],
    },
  },
};
