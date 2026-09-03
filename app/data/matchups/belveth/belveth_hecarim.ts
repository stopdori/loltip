// app/data/matchups/belveth/belveth_hecarim.ts
import type { MatchupSummary } from "../_types";

export const belveth_hecarim: MatchupSummary = {
  champs: ["belveth", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]로 끊기지 않음. \n 단, [[KNOCKBACK]], [[FEAR]]는 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Hecarim's E [[DASH]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Hecarim's E [[KNOCKBACK]] or R [[FEAR]]. \n However, [[KNOCKBACK]] and [[FEAR]] still apply."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 벨베스 W의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Bel'Veth's Q [[DASH]] and E [[SKILL_CHANNEL]].",
        "R [[UNSTOPPABLE]] can ignore Bel'Veth's W [[AIRBORNE]]."],
    },
  },
};
