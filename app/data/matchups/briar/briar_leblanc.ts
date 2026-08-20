// app/data/matchups/briar/briar_leblanc.ts
import type { MatchupSummary } from "../_types";

export const briar_leblanc: MatchupSummary = {
  champs: ["briar", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 르블랑 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 르블랑 W의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 르블랑 E의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 르블랑 E의 [[ROOT]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 르블랑 W의 [[DASH]]을 따라갈 수 있음. \n 단, 르블랑과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt LeBlanc's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt LeBlanc's W [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by LeBlanc's E [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore LeBlanc's E [[ROOT]].",
        "R2 [[HOMING]] [[DASH]] can follow LeBlanc's W [[DASH]]. \n However, the [[HOMING]] ends upon colliding with LeBlanc."],
    },
    leblanc: {
      ko: ["P로 [[SUMMON]]된 [[CLONE]]을 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 있음."],
      en: ["The [[CLONE]] [[SUMMON]]ed by LeBlanc's P can be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
