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
      ko: ["애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 카서스 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Karthus's R [[SKILL_CHANNEL]]."],
    },
    karthus: {
      ko: ["카서스 R을 [[SKILL_CHANNEL]] 시전 중 일 때 애니비아가 P(알)로 변해도 유효."],
      en: ["If Anivia transforms into P (Egg) while Karthus is [[SKILL_CHANNEL]] channeling R, she is still a valid target."],
    },
  },
};
