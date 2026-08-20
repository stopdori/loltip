// app/data/matchups/briar/briar_illaoi.ts
import type { MatchupSummary } from "../_types";

export const briar_illaoi: MatchupSummary = {
  champs: ["briar", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 일라오이 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 일라오이 W의 [[DASH]]을 끊을 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 일라오이 W의 [[DASH]]을 따라갈 수 있음. \n 단, 일라오이와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Illaoi's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Illaoi's W [[DASH]].",
        "R2 [[HOMING]] [[DASH]] can follow Illaoi's W [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Illaoi."],
    },
    illaoi: {
      ko: ["P로 [[SUMMON]]된 촉수를 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 없음."],
      en: ["The Tentacle [[SUMMON]]ed by Illaoi's P cannot be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
