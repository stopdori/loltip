// app/data/matchups/anivia/anivia_poppy.ts
import type { MatchupSummary } from "../_types";

export const anivia_poppy: MatchupSummary = {
  champs: ["anivia", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 뽀삐 E의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", "애니비아 Q의 [[STUN]], W(벽)의 [[AIRBORNE]]으로 뽀삐 R(시전 집중)을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Poppy's E [[DASH]]. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Poppy's E [[DASH]].", "Anivia's Q [[STUN]] and W (wall) [[AIRBORNE]] can interrupt Poppy's R (channeling)."],
    },
    poppy: {
      ko: ["뽀삐 R(충전)에 애니비아가 날아가는 도중에 P(알)로 변해도 딱히 뭐가 없음."],
      en: ["Nothing special happens if Anivia transforms into P (Egg) while being launched by Poppy's R."],
    },
  },
};
