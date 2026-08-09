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
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]]효과로 애니비아 R([[SKILL_CHANNEL]])을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Anivia's R [[SKILL_CHANNEL]]."],
    },
    anivia: {
      ko: ["Q의 [[STUN]]로 아트록스 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 아트록스 Q를 시전 중일 때 뒤로 밀어내면 Q의 [[AOE]]도 같이 뒤로 밀림."],
      en: ["Q [[STUN]] cannot interrupt Aatrox's E [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Aatrox's E [[DASH]].", "If W [[TERRAIN]] [[AIRBORNE]] knocks Aatrox back while casting Q, the Q [[AOE]] also moves with him."],
    },
  },
};
