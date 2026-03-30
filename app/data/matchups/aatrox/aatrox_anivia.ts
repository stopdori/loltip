// app/data/matchups/aatrox/aatrox_anivia.ts
import type { MatchupSummary } from "../_types";

export const aatrox_anivia: MatchupSummary = {
  champs: ["aatrox", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["아트록스 Q끝, W의 [[GRAB]]효과로 애니비아 R(채널링)을 끊을 수 있음"],
      en: ["Aatrox's Q edge and W's [[GRAB]] effect can interrupt Anivia's R channeling"],
    },
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 아트록스 Q를 시전 중일 때 뒤로 밀어내면 Q 범위도 같이 뒤로 밀림."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Aatrox's E movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Aatrox's E movement.", "If Anivia's W (wall) [[AIRBORNE]] knocks Aatrox back while casting Q, the Q's area moves with him."],
    },
  },
};
