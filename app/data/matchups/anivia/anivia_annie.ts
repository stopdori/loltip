// app/data/matchups/anivia/anivia_annie.ts
import type { MatchupSummary } from "../_types";

export const anivia_annie: MatchupSummary = {
  champs: ["anivia", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["W([[TERRAIN]])의 [[AIRBORNE]]으로 애니 W, R을 시전 중일 때 뒤로 밀어내면 W, R의 [[AOE]]도 같이 뒤로 밀림."],
      en: ["If W [[TERRAIN]] [[AIRBORNE]] knocks Annie back while casting W or R, the W, R [[AOE]] also moves with her."],
    },
    annie: {
      ko: ["P의 [[STUN]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
