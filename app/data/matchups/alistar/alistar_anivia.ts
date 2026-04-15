// app/data/matchups/alistar/alistar_anivia.ts
import type { MatchupSummary } from "../_types";

export const alistar_anivia: MatchupSummary = {
  champs: ["alistar", "anivia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 애니비아 R([[SKILL_CHANNEL]])을 끊을 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 애니비아 Q의 [[SLOW]], [[STUN]]을 해제할 수 있음. \n 단, 애니비아 R의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Anivia's R [[SKILL_CHANNEL]].", "Alistar's R [[CC_CLEANSE]] can cleanse Anivia's Q [[SLOW]] and [[STUN]]. \n However, Anivia's R's persistent [[SLOW]] will reapply after being cleansed."],
    },
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.", "애니비아 W(벽)의 [[AIRBORNE]]으로 알리스타 Q를 시전 중일 때 뒤로 밀어내면 Q 범위도 같이 뒤로 밀림."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Alistar's W movement. However, [[STUN]] still applies.", "Anivia's W (wall) [[AIRBORNE]] can interrupt Alistar's W movement.", "If Anivia's W (wall) [[AIRBORNE]] knocks Alistar back while casting Q, the Q's area moves with him."],
    },
  },
};
