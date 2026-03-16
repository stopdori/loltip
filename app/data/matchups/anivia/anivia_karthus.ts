// app/data/matchups/anivia/anivia_karthus.ts
import type { MatchupSummary } from "../_types";

export const anivia_karthus: MatchupSummary = {
  champs: ["anivia", "karthus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 카서스 R(시전 집중)을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can interrupt Karthus's R (channeling)."],
    },
    karthus: {
      ko: ["카서스 R을 시전 중 일 때 애니비아가 P(알)로 변해도 카서스 R의 대상에 포함."],
      en: ["If Anivia transforms into P (Egg) while Karthus is channeling R, she is still a target of Karthus's R."],
    },
  },
};
