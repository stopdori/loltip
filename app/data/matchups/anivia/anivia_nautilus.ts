// app/data/matchups/anivia/anivia_nautilus.ts
import type { MatchupSummary } from "../_types";

export const anivia_nautilus: MatchupSummary = {
  champs: ["anivia", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 노틸러스 Q의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 노틸러스 Q의 이동을 끊을 수 있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 노틸러스 Q의 [[GRAB]]에 끌려가는 아군의 이동을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Nautilus's Q movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Nautilus's Q movement.", "Anivia's W (wall) [[AIRBORNE]] can interrupt an ally being pulled by Nautilus's Q [[GRAB]]."],
    },
    nautilus: {
      ko: ["노틸러스 R을 애니비아에게 사용했을 때, 애니비아가 P(알)로 변해도 노틸러스 R은 애니비아 P(알)를 추격."],
      en: ["When Nautilus's R is targeting Anivia, it continues to chase Anivia's P (Egg) even after she transforms."],
    },
  },
};
