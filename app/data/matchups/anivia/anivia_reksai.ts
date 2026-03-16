// app/data/matchups/anivia/anivia_reksai.ts
import type { MatchupSummary } from "../_types";

export const anivia_reksai: MatchupSummary = {
  champs: ["anivia", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 렉사이 매복폼 E(땅굴 파기)의 이동을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 렉사이 매복폼 E(땅굴 파기)의 이동을 끊을 수 있음.", ],
      en: ["Anivia's Q [[STUN]] cannot interrupt Rek'Sai's burrowed E (tunnel) movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Rek'Sai's burrowed E (tunnel) movement."],
    },
    reksai: {
      ko: ["렉사이가 애니비아에게 R을 사용했을 때, 애니비아가 P(알)로 변한다면 애니비아 P(알)에게 돌진."],
      en: ["If Anivia transforms into P (Egg) while Rek'Sai's R is targeting her, Rek'Sai continues to dash toward the Egg."],
    },
  },
};
