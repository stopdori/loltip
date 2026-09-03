// app/data/matchups/gragas/gragas_hecarim.ts
import type { MatchupSummary } from "../_types";

export const gragas_hecarim: MatchupSummary = {
  champs: ["gragas", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E가 헤카림 E와 부딪히면, 서로 [[STUN]]이 걸리고 그라가스는 밀려나며 헤카림은 제자리에 멈춤"],
      en: ["If Gragas's E collides with Hecarim's E, both are [[STUN]]ed; Gragas is knocked back while Hecarim stops in place"],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 그라가스 E, R의 [[KNOCKBACK]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Gragas's E [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Gragas's E and R [[KNOCKBACK]]."],
    },
  },
};
