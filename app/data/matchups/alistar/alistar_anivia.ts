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
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 애니비아 R([[SKILL_CHANNEL]])을 끊을 수 있음.", 
        "R의 [[CC_CLEANSE]]로 애니비아 Q의 [[SLOW]], [[STUN]]을 해제할 수 있음. \n 단, 애니비아 R의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Anivia's R [[SKILL_CHANNEL]].", "R [[CC_CLEANSE]] can cleanse Anivia's Q [[SLOW]] and [[STUN]]. \n However, Anivia's R's persistent [[SLOW]] will reapply after being cleansed."],
    },
    anivia: {
      ko: ["Q의 [[STUN]]로 알리스타 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 알리스타 Q를 시전 중일 때 뒤로 밀어내면 Q [[AOE]]도 같이 뒤로 밀림."],
      en: ["Q [[STUN]] cannot interrupt Alistar's W [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Alistar's W [[DASH]].", "If W [[TERRAIN]] [[AIRBORNE]] knocks Alistar back while casting Q, the Q [[AOE]] also moves with him."],
    },
  },
};
