// app/data/matchups/briar/briar_ivern.ts
import type { MatchupSummary } from "../_types";

export const briar_ivern: MatchupSummary = {
  champs: ["briar", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 아이번 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 아이번 Q의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 아이번 Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 아이번 Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 아이번 Q의 [[DASH]]을 따라갈 수 있음. \n 단, 아이번과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Ivern's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Ivern's Q [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Ivern's Q [[ROOT]] or R-[[SUMMON]]ed Daisy's 3rd [[BA]] [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Ivern's Q [[ROOT]] and R-[[SUMMON]]ed Daisy's 3rd [[BA]] [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Ivern's Q [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Ivern."],
    },
    ivern: {
      ko: ["R로 [[SUMMON]]된 데이지를 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 있음."],
      en: ["Daisy, [[SUMMON]]ed by Ivern's R, can be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
