// app/data/matchups/briar/briar_camille.ts
import type { MatchupSummary } from "../_types";

export const briar_camille: MatchupSummary = {
  champs: ["briar", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 카밀 E의 투척/그렙/대기/돌진 단계 중에서 \n 그렙/돌진 단계의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "Q의 [[STUN]]로 카밀 E의 투척/그렙 단계에 [[STUN]]에 걸리고 대기단계에 [[STUN]] ",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 카밀 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 카밀 E의 [[AIRBORNE]], R의 [[SILENCE]], [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음."],
      en: ["Among Camille's E phases (throw/grapple/waiting/dash), Q [[STUN]] cannot interrupt the [[DASH]] during the grapple/dash phase. \n However, the [[STUN]] still applies.",
        "Q [[STUN]] lands on Camille during her E throw/grapple phase, and also lands during the waiting phase.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Camille's E [[DASH]].",
        "E [[CAST_COMMIT]] allows maintaining the cast even if hit by Camille's E [[AIRBORNE]] or R [[SILENCE]], [[KNOCKBACK]]."],
    },
    camille: {
      ko: [],
      en: [],
    },
  },
};
