// app/data/matchups/anivia/anivia_morgana.ts
import type { MatchupSummary } from "../_types";

export const anivia_morgana: MatchupSummary = {
  champs: ["anivia", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 다이애나 R의 [[TETHER]]을 끊을 수 없음.\n단, 애니비아 Q의 [[STUN]]은 남아있음."],
      en: ["Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] cannot interrupt Morgana's R [[TETHER]].\nHowever, [[STUN]] still applies."],
    },
    morgana: {
      ko: ["모르가나 R로 애니비아를 맞히고 애니비아가 P(알)로 변해도 모르가나 R의 [[TETHER]]은 남아있음."],
      en: ["Morgana's R [[TETHER]] persists on Anivia even after she transforms into P (Egg)."],
    },
  },
};
