// app/data/matchups/anivia/anivia_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const anivia_cassiopeia: MatchupSummary = {
  champs: ["anivia", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["W([[TERRAIN]])의 [[AIRBORNE]]으로 카시오페아 R를 시전 중일 때 뒤로 밀어내면 R [[AOE]]도 같이 뒤로 밀림."],
      en: ["If W [[TERRAIN]] [[AIRBORNE]] knocks Cassiopeia back while casting R, the R [[AOE]] also moves with her."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
