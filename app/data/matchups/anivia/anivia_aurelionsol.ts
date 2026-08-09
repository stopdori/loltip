// app/data/matchups/anivia/anivia_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const anivia_aurelionsol: MatchupSummary = {
  champs: ["anivia", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 아우렐리온 솔 E, R을 시전 중일 때 뒤로 밀어내면 E, R [[AOE]]도 같이 뒤로 밀림."],
      en: ["Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].", "If W [[TERRAIN]] [[AIRBORNE]] knocks Aurelion Sol back while casting E or R, the E, R [[AOE]] also moves with him."],
    },
    aurelionsol: {
      ko: ["R의 [[STUN]], R(천상강림)의 [[AIRBORNE]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] and R (Falling Star) [[AIRBORNE]] can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
  },
};
